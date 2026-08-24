import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import { RigidBody, ConvexHullCollider, CuboidCollider } from "@react-three/rapier";
import { NEON } from "./palette";
import {
  CIRCUIT_RAMP_ANGLE,
  CIRCUIT_RAMP_START,
  ISLAND_RADIUS,
  circuitAt,
  circuitPoint,
} from "./layout";
import BlockText from "./BlockText";
import { CHECKPOINTS, gateAt, resetRace, updateRace } from "./race";
import { telemetry, useWorld, worldStore } from "./store";

/**
 * The sky circuit: a closed race loop hung above the island, reached by a long
 * ramp that climbs off the ground and crosses over the ring road on its way up.
 *
 * The shape comes from `circuitAt` — radius and height both vary, so the lap
 * has sweepers, two tight tucks, a climb to the high point and a dive to the
 * low one. Corners are banked in proportion to how hard they turn, which is
 * what lets you carry speed through the tucks instead of understeering off.
 */

const WIDTH = 15;
/** Samples used for the visual sweep. Cheap now that it is one mesh. */
const SEGMENTS = 180;
/**
 * Physics segments. Dense on purpose: each one is a flat box, so the joints
 * between them are where the surface changes angle, and a coarse chain reads
 * as a bumpy road. At this resolution each joint turns by well under a degree.
 *
 * A single swept trimesh would be smoother still and was the first thing I
 * tried, but the car fell straight through it even at rest, so this stays
 * until that can be worked out properly.
 */
const COLLIDER_SEGMENTS = 168;
/** Roll per unit of curvature, capped so the banking never becomes a wall. */
const BANK_GAIN = 5.2;
const BANK_LIMIT = 0.34;
/**
 * Half-width, in radians, of the opening cut in the circuit's inner barrier
 * where the climb arrives. The ramp lands on the track's centreline, so
 * without this the inner guard rail runs straight across the mouth of it and
 * the climb ends in a wall.
 */
const MERGE_HALF_ANGLE = 0.11;

/** True for a point on the loop that sits in the merge opening. */
function inMergeGap(angle: number) {
  const diff = Math.abs(((angle - CIRCUIT_RAMP_ANGLE + Math.PI) % (Math.PI * 2)) - Math.PI);
  return diff < MERGE_HALF_ANGLE;
}

type Segment = {
  position: THREE.Vector3;
  yaw: number;
  pitch: number;
  roll: number;
  length: number;
  angle: number;
};

/** A banked frame on the loop: where it is and which way is right and up. */
export type Frame = {
  position: THREE.Vector3;
  forward: THREE.Vector3;
  right: THREE.Vector3;
  up: THREE.Vector3;
};

function buildSegments(count: number): Segment[] {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= count; i += 1) {
    const a = (i / count) * Math.PI * 2;
    const p = circuitPoint(a);
    points.push(new THREE.Vector3(p.x, p.y, p.z));
  }

  const yaws: number[] = [];
  const lengths: number[] = [];
  for (let i = 0; i < count; i += 1) {
    const d = points[i + 1].clone().sub(points[i]);
    yaws.push(Math.atan2(d.x, d.z));
    lengths.push(d.length());
  }

  return Array.from({ length: count }, (_, i) => {
    const from = points[i];
    const to = points[i + 1];
    const d = to.clone().sub(from);
    const flat = Math.hypot(d.x, d.z);

    // Curvature: how much the heading turns per unit travelled. Wrapped to
    // ±π so the seam at the start of the loop isn't read as a hairpin.
    const next = yaws[(i + 1) % count];
    let turn = next - yaws[i];
    turn = ((turn + Math.PI) % (Math.PI * 2)) - Math.PI;
    const curvature = turn / Math.max(lengths[i], 0.001);

    return {
      position: from.clone().lerp(to, 0.5),
      yaw: yaws[i],
      pitch: -Math.atan2(d.y, flat),
      roll: THREE.MathUtils.clamp(curvature * BANK_GAIN, -BANK_LIMIT, BANK_LIMIT),
      length: d.length() + 0.6,
      angle: (i / count) * Math.PI * 2,
    };
  });
}

/** Turns the segment list into banked frames for sweeping and instancing. */
function buildFrames(segments: Segment[]): Frame[] {
  const frames = segments.map((s) => {
    const euler = new THREE.Euler(s.pitch, s.yaw, s.roll, "YXZ");
    const quaternion = new THREE.Quaternion().setFromEuler(euler);
    return {
      position: s.position.clone(),
      forward: new THREE.Vector3(0, 0, 1).applyQuaternion(quaternion),
      right: new THREE.Vector3(1, 0, 0).applyQuaternion(quaternion),
      up: new THREE.Vector3(0, 1, 0).applyQuaternion(quaternion),
    };
  });
  // Close the loop so the sweep has no seam at the start line.
  frames.push(frames[0]);
  return frames;
}

export default function Circuit() {
  const segments = useMemo(() => buildSegments(COLLIDER_SEGMENTS), []);
  const frames = useMemo(() => buildFrames(buildSegments(SEGMENTS)), []);

  return (
    <group>
      <Deck frames={frames} />
      <Surface frames={frames} />
      <Pylons frames={frames} />
      <ClimbRamp />
      <Kickers frames={frames} />
      <StartGate />
      <Gates />
      <RaceWatcher />
    </group>
  );
}

/**
 * Euler order matters here. The default XYZ applies roll in world space, which
 * skews a banked, climbing segment sideways; YXZ yaws first, then pitches and
 * rolls in the segment's own frame, which is what "banked road" means.
 */
const euler = (s: Segment): [number, number, number, string] => [s.pitch, s.yaw, s.roll, "YXZ"];

/**
 * The whole track surface as one swept mesh.
 *
 * The first version drew a box per segment — 180 segments times a deck plus
 * two rails plus studs came to roughly 700 meshes, which on its own cost more
 * frame time than everything else in the world put together. Sweeping a 2D
 * profile along the loop gives identical geometry in a single draw call.
 */
function sweep(profile: [number, number][], frames: Frame[], closed = true) {
  const positions: number[] = [];
  const push = (f: Frame, lateral: number, vertical: number) => {
    positions.push(
      f.position.x + f.right.x * lateral + f.up.x * vertical,
      f.position.y + f.right.y * lateral + f.up.y * vertical,
      f.position.z + f.right.z * lateral + f.up.z * vertical,
    );
  };

  const rings = profile.length;
  for (let i = 0; i < frames.length - 1; i += 1) {
    const a = frames[i];
    const b = frames[i + 1];
    for (let j = 0; j < (closed ? rings : rings - 1); j += 1) {
      const [l0, v0] = profile[j];
      const [l1, v1] = profile[(j + 1) % rings];
      // Two triangles per profile edge per step.
      push(a, l0, v0);
      push(b, l0, v0);
      push(b, l1, v1);

      push(a, l0, v0);
      push(b, l1, v1);
      push(a, l1, v1);
    }
  }

  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.computeVertexNormals();
  return geometry;
}

const HALF = WIDTH / 2;

/**
 * A flat arrowhead pointing along the direction of travel (+z): head plus a
 * short tail. Drawn as one shape rather than a pair of overlapping triangles,
 * which is what the first attempt was — from the car it read as a white blob.
 */
const CHEVRON_GEOMETRY = (() => {
  const geometry = new THREE.BufferGeometry();
  const tri = (
    ax: number, az: number,
    bx: number, bz: number,
    cx: number, cz: number,
  ) => [ax, 0, az, bx, 0, bz, cx, 0, cz];
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(
      [
        // Head
        ...tri(-1.7, 0.1, 1.7, 0.1, 0, 2.4),
        // Tail, as two triangles
        ...tri(-0.7, -2.2, 0.7, -2.2, 0.7, 0.1),
        ...tri(-0.7, -2.2, 0.7, 0.1, -0.7, 0.1),
      ],
      3,
    ),
  );
  geometry.computeVertexNormals();
  return geometry;
})();

function Deck({ frames }: { frames: Frame[] }) {
  const deck = useMemo(
    () =>
      sweep(
        [
          [-HALF, 0],
          [HALF, 0],
          [HALF, -0.5],
          [-HALF, -0.5],
        ],
        frames,
      ),
    [frames],
  );

  const rails = useMemo(() => {
    const profile = (side: number): [number, number][] => [
      [side * HALF - 0.18, 0],
      [side * HALF + 0.18, 0],
      [side * HALF + 0.18, 0.9],
      [side * HALF - 0.18, 0.9],
    ];

    // `right` points radially outward, so -1 is the inner rail — the one the
    // climb crosses. Sweep it as an open ribbon that starts after the opening
    // and wraps around to just before it.
    const steps = frames.length - 1;
    const centre = Math.round((CIRCUIT_RAMP_ANGLE / (Math.PI * 2)) * steps);
    const half = Math.ceil(MERGE_HALF_ANGLE / ((Math.PI * 2) / steps));
    const from = (centre + half) % steps;
    const to = (centre - half + steps) % steps;
    const innerFrames = [...frames.slice(from, steps), ...frames.slice(0, to + 1)];

    return [sweep(profile(-1), innerFrames), sweep(profile(1), frames)];
  }, [frames]);

  return (
    <group>
      <mesh geometry={deck} receiveShadow>
        {/* Faintly self-lit: 30 units up there are no lanterns and no bounce
            light, so an unlit deck leaves the rails floating in a void. */}
        <meshStandardMaterial
          color="#242a5c"
          emissive="#2b3370"
          emissiveIntensity={0.55}
          roughness={0.55}
          metalness={0.4}
          flatShading
        />
      </mesh>
      {rails.map((geometry, i) => (
        <mesh key={i} geometry={geometry}>
          <meshStandardMaterial
            color={i ? NEON.amber : NEON.cyan}
            emissive={i ? NEON.amber : NEON.cyan}
            emissiveIntensity={3}
            toneMapped={false}
          />
        </mesh>
      ))}
      <Markings frames={frames} />
    </group>
  );
}

/** Runway studs and centre dashes, one instanced draw each. */
function Markings({ frames }: { frames: Frame[] }) {
  const studs = useMemo(() => {
    const out: { position: THREE.Vector3; quaternion: THREE.Quaternion }[] = [];
    const basis = new THREE.Matrix4();
    for (let i = 0; i < frames.length - 1; i += 3) {
      const f = frames[i];
      const forward = f.forward;
      basis.makeBasis(f.right, f.up, forward);
      const quaternion = new THREE.Quaternion().setFromRotationMatrix(basis);
      for (const side of [-1, 1]) {
        out.push({
          position: f.position
            .clone()
            .addScaledVector(f.right, side * (HALF - 1.1))
            .addScaledVector(f.up, 0.3),
          quaternion,
        });
      }
    }
    return out;
  }, [frames]);

  // Chevrons rather than dashes: a dash is just a dash, but an arrow tells you
  // which way the lap runs, which matters the moment you arrive off the ramp
  // facing across the track.
  const dashes = useMemo(() => {
    const out: { position: THREE.Vector3; quaternion: THREE.Quaternion }[] = [];
    const basis = new THREE.Matrix4();
    for (let i = 0; i < frames.length - 1; i += 5) {
      const f = frames[i];
      basis.makeBasis(f.right, f.up, f.forward);
      out.push({
        position: f.position.clone().addScaledVector(f.up, 0.3),
        quaternion: new THREE.Quaternion().setFromRotationMatrix(basis),
      });
    }
    return out;
  }, [frames]);

  return (
    <group>
      <Instances limit={studs.length} range={studs.length}>
        <boxGeometry args={[0.5, 0.1, 0.5]} />
        <meshStandardMaterial
          color="#f2f5ff"
          emissive="#cfe4ff"
          emissiveIntensity={2.2}
          toneMapped={false}
        />
        {studs.map((stud, i) => (
          <Instance key={i} position={stud.position} quaternion={stud.quaternion} />
        ))}
      </Instances>

      <Instances limit={dashes.length} range={dashes.length}>
        <primitive object={CHEVRON_GEOMETRY} attach="geometry" />
        <meshStandardMaterial
          color={NEON.lime}
          emissive={NEON.lime}
          emissiveIntensity={1.6}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
        {dashes.map((dash, i) => (
          <Instance key={i} position={dash.position} quaternion={dash.quaternion} />
        ))}
      </Instances>
    </group>
  );
}

/**
 * Corner points of a slice of road between two frames, as a flat array for a
 * convex hull. `l0`/`l1` are lateral offsets from the centreline, `v0`/`v1`
 * heights above it, both in the banked frame.
 */
function slab(a: Frame, b: Frame, l0: number, l1: number, v0: number, v1: number) {
  const out = new Float32Array(24);
  let i = 0;
  for (const f of [a, b]) {
    for (const [l, v] of [
      [l0, v0],
      [l1, v0],
      [l1, v1],
      [l0, v1],
    ]) {
      out[i++] = f.position.x + f.right.x * l + f.up.x * v;
      out[i++] = f.position.y + f.right.y * l + f.up.y * v;
      out[i++] = f.position.z + f.right.z * l + f.up.z * v;
    }
  }
  return out;
}

/**
 * Physics for the loop.
 *
 * Each piece is a convex hull built from the road's own cross-sections, and
 * neighbouring pieces are built from the *same* cross-section — so their top
 * faces meet exactly, edge to edge, all the way round.
 *
 * The previous version chained rotated boxes. A box only matches the road at
 * its centre: where the track turns or banks, each box's end corners stand
 * proud of the next box's surface, and every one of those corners is a lip to
 * catch a wheel. That is what "stuck on random curves" was — no amount of
 * extra segments fixes it, because halving the segment length also halves the
 * spacing between lips.
 */
function Surface({ frames }: { frames: Frame[] }) {
  const pieces = useMemo(() => {
    const out: { road: Float32Array; walls: { side: number; points: Float32Array }[] }[] = [];
    // Every other frame: the ends are still exact points on the curve, so the
    // surface stays continuous — only the chord between them gets longer.
    for (let i = 0; i + 2 < frames.length; i += 2) {
      const a = frames[i];
      const b = frames[i + 2];
      const angle = (i / (frames.length - 1)) * Math.PI * 2;
      const walls: { side: number; points: Float32Array }[] = [];
      for (const side of [-1, 1]) {
        if (side < 0 && inMergeGap(angle)) continue;
        walls.push({
          side,
          points: slab(a, b, side * HALF - 0.4, side * HALF + 0.4, 1.9, 0),
        });
      }
      // Deep below the surface so a hard landing has something to hit.
      out.push({ road: slab(a, b, -HALF, HALF, 0, -3.5), walls });
    }
    return out;
  }, [frames]);

  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      {pieces.map((piece, i) => (
        <group key={i}>
          <ConvexHullCollider args={[piece.road]} />
          {piece.walls.map((wall) => (
            <ConvexHullCollider key={wall.side} args={[wall.points]} />
          ))}
        </group>
      ))}
    </RigidBody>
  );
}

/**
 * Roadside lamp posts on legs down to the sea, instanced.
 *
 * Offset clear of the barrier on purpose: the first version put them on the
 * track's centreline, so every lamp head hung as a white diamond floating in
 * the middle of the racing line, and every leg ran down through the road.
 *
 * They carry no real lights — a point light per post is a dozen more lights
 * for every material in the scene to loop over, and the deck's own glow
 * already reads at night.
 */
function Pylons({ frames }: { frames: Frame[] }) {
  const legs = useMemo(
    () =>
      frames
        .filter((_, i) => i % 12 === 0)
        .map((f, i) => ({
          // Alternate sides, so the loop is lit from both edges.
          base: f.position.clone().addScaledVector(f.right, (i % 2 ? 1 : -1) * (HALF + 2.4)),
        }))
        // Only where there is sea underneath. On the stretches that cut back
        // over the island, a leg would come down through the trees and the
        // roads — better to have no leg there than a column in a path.
        .filter((leg) => Math.hypot(leg.base.x, leg.base.z) > ISLAND_RADIUS + 6),
    [frames],
  );

  return (
    <group>
      <Instances limit={legs.length} range={legs.length}>
        <cylinderGeometry args={[0.7, 1.5, 1, 6]} />
        <meshStandardMaterial color={NEON.deckEdge} roughness={0.6} flatShading />
        {legs.map((leg, i) => (
          <Instance
            key={i}
            position={[leg.base.x, leg.base.y / 2 - 5, leg.base.z]}
            scale={[1, leg.base.y + 10, 1]}
          />
        ))}
      </Instances>

      {/* Lamp heads, up on a short mast beside the road rather than over it. */}
      <Instances limit={legs.length} range={legs.length}>
        <octahedronGeometry args={[0.65, 0]} />
        <meshStandardMaterial
          color="#dfe9ff"
          emissive="#bcd4ff"
          emissiveIntensity={2.4}
          toneMapped={false}
        />
        {legs.map((leg, i) => (
          <Instance
            key={i}
            position={[leg.base.x, leg.base.y + 4.2, leg.base.z]}
          />
        ))}
      </Instances>
    </group>
  );
}

/**
 * Mini jump ramps, sitting on the deck out of the racing line.
 *
 * These are wedges, not slabs: the leading edge lies flush with the road and
 * the face climbs to a lip, so you ride up them. The first version was a
 * tipped box, which meant its leading edge hung in the air with a corner
 * buried in the deck — you hit it like a kerb instead of driving up it, and
 * from behind it read as nothing at all.
 */
const KICKER_ANGLES = [0.55, 1.75, 2.9, 4.1, 5.4];
const KICKER_HALF_WIDTH = 3.6;
/**
 * Sized from the flight time, not by eye. Gravity here is 30, so a shallow
 * kicker barely unweights the car: at 13 long with a 3.2 lip the launch angle
 * is under 14 degrees, which is 0.6s of air at boost speed — not even one
 * rotation. At 14 by 7.2 the angle is 27 degrees, which is a second-plus in
 * the air and room for a trick to land.
 */
const KICKER_LENGTH = 14;
const KICKER_LIP = 7.2;

/** Wedge geometry: flat on the deck at the back, rising to the lip in front. */
const WEDGE_GEOMETRY = (() => {
  const w = KICKER_HALF_WIDTH;
  const l = KICKER_LENGTH;
  const h = KICKER_LIP;
  // Local space: -z is the approach (flush), +z is the lip.
  const p = [
    [-w, 0, -l / 2],
    [w, 0, -l / 2],
    [w, h, l / 2],
    [-w, h, l / 2],
    [-w, 0, l / 2],
    [w, 0, l / 2],
  ];
  const tri = (a: number, b: number, c: number) => [...p[a], ...p[b], ...p[c]];
  const verts = new Float32Array([
    ...tri(0, 1, 2), ...tri(0, 2, 3), // ramp face
    ...tri(4, 5, 1), ...tri(4, 1, 0), // underside
    ...tri(5, 2, 1), // right flank
    ...tri(4, 0, 3), ...tri(4, 3, 5), // left flank + back
    ...tri(3, 2, 5), ...tri(3, 5, 4), // lip end
  ]);
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(verts, 3));
  geometry.computeVertexNormals();
  return geometry;
})();

const WEDGE_HULL = (() => {
  const w = KICKER_HALF_WIDTH;
  const l = KICKER_LENGTH;
  const h = KICKER_LIP;
  return new Float32Array([
    -w, 0, -l / 2, w, 0, -l / 2,
    -w, 0, l / 2, w, 0, l / 2,
    -w, h, l / 2, w, h, l / 2,
  ]);
})();

function Kickers({ frames }: { frames: Frame[] }) {
  const kickers = useMemo(
    () =>
      KICKER_ANGLES.map((angle, i) => {
        const steps = frames.length - 1;
        const index = Math.round((angle / (Math.PI * 2)) * steps) % steps;
        const f = frames[index];
        // Alternate sides so the loop doesn't turn into a slalom.
        const side = i % 2 ? 1 : -1;
        const basis = new THREE.Matrix4().makeBasis(f.right, f.up, f.forward);
        return {
          position: f.position
            .clone()
            // Hard against the barrier: the inner half of the track stays a
            // clean racing line for anyone who isn't jumping.
            .addScaledVector(f.right, side * (HALF - KICKER_HALF_WIDTH))
            .addScaledVector(f.up, 0.02),
          quaternion: new THREE.Quaternion().setFromRotationMatrix(basis),
        };
      }),
    [frames],
  );

  return (
    <group>
      {kickers.map((k, i) => (
        <group key={i} position={k.position} quaternion={k.quaternion}>
          <mesh geometry={WEDGE_GEOMETRY} castShadow receiveShadow>
            <meshStandardMaterial
              color="#33306e"
              emissive={NEON.lime}
              emissiveIntensity={0.28}
              roughness={0.5}
              metalness={0.35}
              flatShading
            />
          </mesh>
          {/* Lit lip and side stripes, so it reads as a ramp from a distance
              and you can see which way to take it. */}
          <mesh position={[0, KICKER_LIP + 0.06, KICKER_LENGTH / 2]}>
            <boxGeometry args={[KICKER_HALF_WIDTH * 2, 0.14, 0.3]} />
            <meshStandardMaterial
              color={NEON.lime}
              emissive={NEON.lime}
              emissiveIntensity={3}
              toneMapped={false}
            />
          </mesh>
          {[-1, 1].map((side) => (
            <mesh
              key={side}
              position={[side * KICKER_HALF_WIDTH, KICKER_LIP / 2 - 0.1, 0]}
              rotation={[Math.atan2(KICKER_LIP, KICKER_LENGTH), 0, 0]}
            >
              <boxGeometry args={[0.12, 0.12, KICKER_LENGTH]} />
              <meshStandardMaterial
                color={NEON.amber}
                emissive={NEON.amber}
                emissiveIntensity={2.6}
                toneMapped={false}
              />
            </mesh>
          ))}

          <RigidBody type="fixed" colliders={false} friction={1}>
            <ConvexHullCollider args={[WEDGE_HULL]} />
          </RigidBody>
        </group>
      ))}
    </group>
  );
}

/**
 * The climb. A straight run from the island out to the circuit's southern
 * tuck, steep enough that it is already 7 units clear of the ring deck by the
 * time it crosses it — you drive over the ring road on the way up, and under
 * this ramp when you're on the ring.
 */
function ClimbRamp() {
  const angle = CIRCUIT_RAMP_ANGLE;
  const landing = circuitAt(angle);
  const dirX = Math.cos(angle);
  const dirZ = Math.sin(angle);

  // Stop at the track's inner edge rather than its centreline. Landing in the
  // middle means arriving perpendicular with only half the width left to turn
  // in, so at any speed you cross the track and meet the outer wall.
  // ...with a couple of units of overlap onto the deck, so any small mismatch
  // between the straight ramp and the banked track is a lip you drive over
  // rather than a gap you drop through.
  const run = landing.radius - HALF + 2 - CIRCUIT_RAMP_START;
  const rise = landing.height;
  const pitch = Math.atan2(rise, run);
  const span = Math.hypot(rise, run);

  // Same trick as the ring ramps: drop by half the slab thickness so the top
  // face — not the centreline — meets the ground, and bury the bottom so
  // there's no lip to catch.
  const BURIED = 16;
  const drop = 0.3 / Math.cos(pitch);
  const deckSpan = span + BURIED;
  const radial = CIRCUIT_RAMP_START + run / 2 - (BURIED / 2) * Math.cos(pitch);

  const centreY = rise / 2 - drop - (BURIED / 2) * Math.sin(pitch);

  return (
    <group
      position={[dirX * radial, centreY, dirZ * radial]}
      rotation={[0, -angle + Math.PI / 2, 0]}
    >
      <group rotation={[-pitch, 0, 0]}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[WIDTH, 0.6, deckSpan]} />
          <meshStandardMaterial color={NEON.deck} roughness={0.5} metalness={0.5} flatShading />
        </mesh>
        {[-1, 1].map((side) => (
          <mesh key={side} position={[(side * WIDTH) / 2, 0.5, 0]}>
            <boxGeometry args={[0.32, 0.5, deckSpan]} />
            <meshStandardMaterial
              color={side > 0 ? NEON.amber : NEON.cyan}
              emissive={side > 0 ? NEON.amber : NEON.cyan}
              emissiveIntensity={3.2}
              toneMapped={false}
            />
          </mesh>
        ))}
        {Array.from({ length: Math.floor(deckSpan / 8) }).map((_, i) => (
          <mesh key={i} position={[0, 0.34, -deckSpan / 2 + 5 + i * 8]}>
            <boxGeometry args={[3.6, 0.08, 0.8]} />
            <meshStandardMaterial
              color={NEON.lime}
              emissive={NEON.lime}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        ))}

        <RigidBody type="fixed" colliders={false} friction={1}>
          <CuboidCollider args={[WIDTH / 2, 0.3, deckSpan / 2]} />
          {[-1, 1].map((side) => (
            <CuboidCollider
              key={side}
              args={[0.32, 0.8, deckSpan / 2]}
              position={[(side * WIDTH) / 2, 0.8, 0]}
            />
          ))}
        </RigidBody>
      </group>

      {/* Legs, only along the stretch that is actually in the air. */}
      {Array.from({ length: 5 }).map((_, i) => {
        const t = (i + 1) / 6;
        const z = -deckSpan / 2 + deckSpan * t;
        const y = -centreY + Math.sin(pitch) * z * 0.5;
        return (
          <mesh key={i} position={[0, y / 2 + centreY / 2 - 2, z * Math.cos(pitch)]}>
            <cylinderGeometry args={[0.7, 1.4, Math.max(centreY + Math.sin(pitch) * z, 2), 6]} />
            <meshStandardMaterial color={NEON.deckEdge} roughness={0.65} flatShading />
          </mesh>
        );
      })}
    </group>
  );
}

/**
 * Start/finish. Signed on both faces and flanked by a lit run-up, because the
 * line is the same line either way round and the only thing that distinguishes
 * a start from a finish is which way you are pointing when you cross it.
 */
function StartGate() {
  const p = circuitPoint(0);
  const ahead = circuitPoint(0.02);
  const yaw = Math.atan2(ahead.x - p.x, ahead.z - p.z);

  return (
    <group position={[p.x, p.y, p.z]} rotation={[0, yaw, 0]}>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[(side * WIDTH) / 2, 5, 0]} castShadow>
          <boxGeometry args={[1.1, 10, 1.1]} />
          <meshStandardMaterial color={NEON.deckEdge} roughness={0.5} metalness={0.5} flatShading />
        </mesh>
      ))}
      {/* Twin banner beams, lit like a start light. */}
      {/* Dim on purpose: these hang right over the camera when you sit on the
          line, and at full glow they bloomed a mint wash across the whole sky. */}
      {[8.4, 9.6].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <boxGeometry args={[WIDTH + 1.6, 0.5, 0.6]} />
          <meshStandardMaterial color={NEON.lime} emissive={NEON.lime} emissiveIntensity={0.55} />
        </mesh>
      ))}

      {/* Chequers across the road. */}
      {Array.from({ length: 10 }).map((_, i) =>
        [0, 1].map((row) => (
          <mesh
            key={`${i}-${row}`}
            position={[-WIDTH / 2 + 0.75 + i * 1.5, 0.3, row * 1.5 - 0.75]}
          >
            <boxGeometry args={[1.5, 0.08, 1.5]} />
            <meshStandardMaterial
              color={(i + row) % 2 ? "#f2f5ff" : "#141634"}
              emissive={(i + row) % 2 ? "#f2f5ff" : "#000000"}
              emissiveIntensity={(i + row) % 2 ? 0.5 : 0}
            />
          </mesh>
        )),
      )}

      {/* Read as START on the way in, FINISH on the way out. */}
      <BlockText
        position={[0, 11.6, -0.6]}
        rotation={[0, Math.PI / 2, 0]}
        size={0.5}
        depth={0.4}
        color="#eaf3ff"
        emissive={NEON.lime}
        emissiveIntensity={1.1}
      >
        START
      </BlockText>
      <BlockText
        position={[0, 11.6, 0.6]}
        rotation={[0, -Math.PI / 2, 0]}
        size={0.5}
        depth={0.4}
        color="#eaf3ff"
        emissive={NEON.amber}
        emissiveIntensity={1.1}
      >
        FINISH
      </BlockText>

      {/* A big arrow on the road just past the line, so the direction of the
          lap is unmistakable from the moment you cross it. */}
      <mesh geometry={CHEVRON_GEOMETRY} position={[0, 0.34, 8]} scale={[2, 1, 2]}>
        <meshStandardMaterial
          color={NEON.lime}
          emissive={NEON.lime}
          emissiveIntensity={2.6}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
      <pointLight position={[0, 7, 0]} color={NEON.lime} intensity={26} distance={38} decay={2} />
    </group>
  );
}

/** Checkpoint arches. The next one you need pulses; the rest stay dim. */
function Gates() {
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const mesh = child.children[0] as THREE.Mesh | undefined;
      if (!mesh) return;
      const material = mesh.material as THREE.MeshStandardMaterial;
      const next = telemetry.raceCheckpoint === i && telemetry.raceRunning;
      material.emissiveIntensity = next
        ? 2.6 + Math.sin(clock.elapsedTime * 6) * 1.2
        : telemetry.raceRunning
          ? 0.4
          : 1.2;
    });
  });

  return (
    <group ref={group}>
      {CHECKPOINTS.map((angle, i) => {
        const p = gateAt(angle);
        const ahead = circuitPoint(angle + 0.02);
        const yaw = Math.atan2(ahead.x - p.x, ahead.z - p.z);
        return (
          <group key={i} position={[p.x, p.y, p.z]} rotation={[0, yaw, 0]}>
            <mesh position={[0, 4, 0]}>
              <boxGeometry args={[WIDTH, 0.5, 0.5]} />
              <meshStandardMaterial
                color={NEON.magenta}
                emissive={NEON.magenta}
                emissiveIntensity={1.2}
                toneMapped={false}
              />
            </mesh>
            {[-1, 1].map((side) => (
              <mesh key={side} position={[(side * WIDTH) / 2, 2, 0]}>
                <boxGeometry args={[0.4, 4, 0.4]} />
                <meshStandardMaterial color={NEON.deckEdge} roughness={0.6} flatShading />
              </mesh>
            ))}
            {/* Numbered, so a gate you have already taken is distinguishable
                from the one you still owe. */}
            <BlockText
              position={[0, 5.4, 0]}
              rotation={[0, Math.PI / 2, 0]}
              size={0.34}
              depth={0.3}
              color="#f6e6ff"
              emissive={NEON.magenta}
              emissiveIntensity={1}
            >
              {String(i + 1)}
            </BlockText>
          </group>
        );
      })}
    </group>
  );
}

/**
 * Watches for the car arriving on or leaving the circuit, and only runs the lap
 * clock once the player has actually asked for a race. Cruising used to start
 * a timer the moment you crossed the line whether you wanted one or not.
 */
function RaceWatcher() {
  const onCircuit = useRef(false);
  const mode = useWorld((s) => s.circuitMode);

  useFrame((_, delta) => {
    // Generous bounds: anything this high and this far out is the circuit, and
    // nothing else in the world is.
    const radius = Math.hypot(telemetry.x, telemetry.z);
    const here = radius > 105 && telemetry.y > 17;

    if (here !== onCircuit.current) {
      onCircuit.current = here;
      if (here) worldStore.askCircuitMode();
      else {
        worldStore.leaveCircuit();
        resetRace();
      }
    }

    if (mode === "race") updateRace(telemetry.x, telemetry.z, delta, worldStore);
  });

  return null;
}
