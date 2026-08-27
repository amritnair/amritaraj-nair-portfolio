import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import {
  RigidBody,
  ConvexHullCollider,
  CuboidCollider,
  CylinderCollider,
} from "@react-three/rapier";
import { NEON } from "./palette";
import {
  CIRCUIT_HALF,
  ISLAND_RADIUS,
  KICKER_ANGLES,
  DECK_WIDTH,
  RAMP_HALF,
  RING_RADIUS,
  circuitFrames,
  circuitPoint,
  inMergeGap,
  mergeLaneFrames,
  onRamp,
  onRingLeg,
  onSpokeOrDistrict,
  rampFrames,
  type PathFrame,
} from "./layout";
import BlockText from "./BlockText";
import { CHECKPOINTS, gateAt, resetRace, updateRace } from "./race";
import { telemetry, useWorld, worldStore } from "./store";

/**
 * The sky circuit: a closed race loop hung above the island, and the climb
 * that gets you onto it.
 *
 * Both roads are the same construction — a centreline of banked frames, one
 * swept mesh for the look, and convex hulls built from the same
 * cross-sections for the physics. They are in one file because the join
 * between them is the interesting part: the climb's last frames are the
 * circuit's own frames shifted inwards by half of each road, so the slip road
 * and the track are one continuous surface rather than two that were aimed at
 * each other and met at an angle.
 */

const WIDTH = CIRCUIT_HALF * 2;

/**
 * Barrier height, and the only number that decides whether you can leave the
 * track sideways. It used to be 1.9 on the collider and 0.9 on the thing you
 * could see, which is the worst of both: high enough to stop you, low enough
 * to look like a kerb you could ride over, so every save felt like hitting
 * something invisible. Now one number drives both.
 */
const WALL_HEIGHT = 4.6;

/**
 * Catch fencing: the barrier is much taller for the length of road a kicker
 * throws you down.
 *
 * A kicker's lip stands seven metres above the deck, so anything launched off
 * one clears an ordinary barrier with room to spare — walling the whole loop
 * to that height would put the track in a tube and hide the island it is
 * hung over. Real circuits do exactly this instead: normal barrier
 * everywhere, catch fencing where the cars actually get air.
 */
const CATCH_HEIGHT = 13;
/** Frames of catch fencing after a kicker, and the blend in and out of it. */
const CATCH_RUN = 16;
const CATCH_BLEND = 5;
/** The solid part at the bottom. Above this the barrier is a light screen. */
const KERB_HEIGHT = 0.6;

/** A banked frame on a road: where it is and which way is right and up. */
export type Frame = {
  position: THREE.Vector3;
  forward: THREE.Vector3;
  right: THREE.Vector3;
  up: THREE.Vector3;
};

const vec = (v: { x: number; y: number; z: number }) => new THREE.Vector3(v.x, v.y, v.z);

/**
 * Frames arrive from `layout` as plain numbers and are lifted into three's
 * vectors once, here. The circuit and the climb are described in the same
 * file for one reason: the climb's last frames are built out of the circuit's,
 * so the two roads meet as one surface rather than as two that were aimed at
 * each other.
 */
const lift = (frames: PathFrame[]): Frame[] =>
  frames.map((f) => ({
    position: vec(f.position),
    forward: vec(f.forward),
    right: vec(f.right),
    up: vec(f.up),
  }));

export default function Circuit() {
  const frames = useMemo(() => lift(circuitFrames()), []);
  const ramp = useMemo(() => lift(rampFrames()), []);

  return (
    <group>
      <Deck frames={frames} />
      <Surface frames={frames} />
      <Pylons frames={frames} />
      <ClimbRamp frames={ramp} />
      <Kickers frames={frames} />
      <StartGate />
      <Gates />
      <RaceWatcher />
    </group>
  );
}

/**
 * The whole track surface as one swept mesh.
 *
 * The first version drew a box per segment — 180 segments times a deck plus
 * two rails plus studs came to roughly 700 meshes, which on its own cost more
 * frame time than everything else in the world put together. Sweeping a 2D
 * profile along the loop gives identical geometry in a single draw call.
 */
function sweep(
  profile: [number, number][] | ((i: number) => [number, number][]),
  frames: Frame[],
  closed = true,
) {
  const positions: number[] = [];
  const push = (f: Frame, lateral: number, vertical: number) => {
    positions.push(
      f.position.x + f.right.x * lateral + f.up.x * vertical,
      f.position.y + f.right.y * lateral + f.up.y * vertical,
      f.position.z + f.right.z * lateral + f.up.z * vertical,
    );
  };

  const at = typeof profile === "function" ? profile : () => profile;
  for (let i = 0; i < frames.length - 1; i += 1) {
    const a = frames[i];
    const b = frames[i + 1];
    // Each end of the step gets its own cross-section, so a road may change
    // width along its length — which is how the slip road closes itself off
    // instead of stopping dead at a barrier.
    const pa = at(i);
    const pb = at(i + 1);
    const rings = pa.length;
    for (let j = 0; j < (closed ? rings : rings - 1); j += 1) {
      const k = (j + 1) % rings;
      // Two triangles per profile edge per step.
      push(a, pa[j][0], pa[j][1]);
      push(b, pb[j][0], pb[j][1]);
      push(b, pb[k][0], pb[k][1]);

      push(a, pa[j][0], pa[j][1]);
      push(b, pb[k][0], pb[k][1]);
      push(a, pa[k][0], pa[k][1]);
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

  const heights = useMemo(() => wallHeights(frames), [frames]);
  const rails = useMemo(
    () => barrierGeometry(frames, HALF, openInner(frames), undefined, heights),
    [frames, heights],
  );

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
      <Barrier {...rails} />
      <Markings frames={frames} />
    </group>
  );
}

/**
 * The frames of the inner edge that still need a barrier: everything outside
 * the merge opening. The climb arrives alongside this edge and runs there, so
 * a rail across that stretch would be a rail across the slip road.
 */
/**
 * Barrier height frame by frame: the standing height everywhere, rising to
 * catch fencing across each kicker and the road it throws you down.
 */
function wallHeights(frames: Frame[]) {
  // Keyed by the frame itself, not by its index. The barrier is swept in runs
  // that are slices of the loop — and one of them wraps past the start line —
  // so an index into a run says nothing about where on the circuit it is.
  const steps = frames.length - 1;
  const out = new Map<Frame, number>(frames.map((f) => [f, WALL_HEIGHT]));
  for (const angle of KICKER_ANGLES) {
    const start = Math.round((angle / (Math.PI * 2)) * steps);
    for (let k = -CATCH_BLEND; k <= CATCH_RUN + CATCH_BLEND; k += 1) {
      const t =
        k < 0
          ? 1 + k / CATCH_BLEND
          : k > CATCH_RUN
            ? 1 - (k - CATCH_RUN) / CATCH_BLEND
            : 1;
      const ease = t * t * (3 - 2 * t);
      const frame = frames[(((start + k) % steps) + steps) % steps];
      const height = WALL_HEIGHT + (CATCH_HEIGHT - WALL_HEIGHT) * ease;
      out.set(frame, Math.max(out.get(frame) ?? WALL_HEIGHT, height));
    }
  }
  return (f: Frame) => out.get(f) ?? WALL_HEIGHT;
}

function openInner(frames: Frame[]) {
  const steps = frames.length - 1;
  const kept: Frame[] = [];
  const runs: Frame[][] = [];
  for (let i = 0; i <= steps; i += 1) {
    if (inMergeGap(((i / steps) * Math.PI * 2) % (Math.PI * 2))) {
      if (kept.length > 1) runs.push([...kept]);
      kept.length = 0;
      continue;
    }
    kept.push(frames[i]);
  }
  if (kept.length > 1) runs.push(kept);
  // Rejoin the run that straddles the start line, so the barrier has no seam
  // where the lap does.
  if (runs.length > 1 && runs[0][0] === frames[0]) {
    const first = runs.shift()!;
    runs[runs.length - 1] = [...runs[runs.length - 1], ...first];
  }
  return runs;
}

type BarrierGeometry = {
  kerbs: THREE.BufferGeometry[];
  screens: THREE.BufferGeometry[];
  caps: THREE.BufferGeometry[];
  cables: THREE.BufferGeometry[];
};

/**
 * A barrier is three ribbons: a solid kerb you can lean on, a light screen
 * above it, and a bright cap along the top. The screen is what makes the
 * height readable — a wall this tall drawn as solid geometry would box the
 * track in and hide the island, and drawn as nothing at all would be the
 * invisible wall the old one effectively was.
 */
function barrierGeometry(
  frames: Frame[],
  edge: number | ((f: Frame) => number),
  innerRuns?: Frame[][],
  outerRuns?: Frame[][],
  height?: (f: Frame) => number,
): BarrierGeometry {
  const out: BarrierGeometry = { kerbs: [], screens: [], caps: [], cables: [] };
  const edgeAt = typeof edge === "function" ? edge : () => edge;
  const topAt = height ?? (() => WALL_HEIGHT);
  const band =
    (side: number, run: Frame[], v0: number | null, v1: number | null, thickness: number) =>
    (i: number): [number, number][] => {
      const f = run[i];
      const l = side * edgeAt(f);
      const top = topAt(f);
      // A negative height is read as a fraction of the local top, so a cable
      // rides up the fence where the fence gets tall instead of stopping at
      // the height it happened to be authored at.
      const a = v0 === null ? top : v0 < 0 ? top * -v0 : v0;
      const b = v1 === null ? top + 0.16 : v1 < 0 ? top * -v1 + 0.13 : v1;
      return [
        [l - thickness, a],
        [l + thickness, a],
        [l + thickness, b],
        [l - thickness, b],
      ];
    };

  for (const side of [-1, 1]) {
    const runs = (side < 0 ? innerRuns : outerRuns) ?? [frames];
    for (const run of runs) {
      if (run.length < 2) continue;
      out.kerbs.push(sweep(band(side, run, 0, KERB_HEIGHT, 0.32), run));
      out.screens.push(sweep(band(side, run, KERB_HEIGHT, null, 0.07), run));
      out.caps.push(sweep(band(side, run, null, null, 0.2), run));
      // Two cables up the fence. They are what makes its height readable:
      // a plain translucent screen thirteen metres tall reads as haze.
      for (const at of [-0.42, -0.72]) {
        out.cables.push(sweep(band(side, run, at, at, 0.13), run));
      }
    }
  }
  return out;
}

function Barrier({ kerbs, screens, caps, cables }: BarrierGeometry) {
  return (
    <group>
      {kerbs.map((geometry, i) => (
        <mesh key={`k${i}`} geometry={geometry}>
          <meshStandardMaterial color="#1b2050" roughness={0.6} metalness={0.35} flatShading />
        </mesh>
      ))}
      {screens.map((geometry, i) => (
        <mesh key={`s${i}`} geometry={geometry}>
          <meshBasicMaterial
            color={NEON.cyan}
            transparent
            opacity={0.14}
            depthWrite={false}
            side={THREE.DoubleSide}
            toneMapped={false}
          />
        </mesh>
      ))}
      {caps.map((geometry, i) => (
        <mesh key={`c${i}`} geometry={geometry}>
          <meshStandardMaterial
            color={NEON.cyan}
            emissive={NEON.cyan}
            emissiveIntensity={2.4}
            toneMapped={false}
          />
        </mesh>
      ))}
      {cables.map((geometry, i) => (
        <mesh key={`w${i}`} geometry={geometry}>
          <meshStandardMaterial
            color={NEON.cyan}
            emissive={NEON.cyan}
            emissiveIntensity={1.1}
            toneMapped={false}
          />
        </mesh>
      ))}
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
function slab(
  a: Frame,
  b: Frame,
  l0: number,
  l1: number,
  v0: number,
  v1: number,
  ends?: [number, number],
) {
  const out = new Float32Array(24);
  let i = 0;
  for (const [n, f] of [a, b].entries()) {
    const m0 = ends ? (n ? ends[0] : l0) : l0;
    const m1 = ends ? (n ? ends[1] : l1) : l1;
    for (const [l, v] of [
      [m0, v0],
      [m1, v0],
      [m1, v1],
      [m0, v1],
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
  const heights = useMemo(() => wallHeights(frames), [frames]);
  const pieces = useMemo(() => {
    const out: { road: Float32Array; walls: { side: number; points: Float32Array }[] }[] = [];
    /*
     * One hull per frame. The ends are exact points on the curve either way,
     * so the surface is continuous at any density — but each hull is a flat
     * chord between its ends, and the curve bulges above that chord in
     * between. At every other frame the chords span 11 units and that bulge
     * is over 10cm on the tight corners: a dip you feel at speed. Halving the
     * chord quarters the sag.
     */
    for (let i = 0; i + 1 < frames.length; i += 1) {
      const a = frames[i];
      const b = frames[i + 1];
      const angle = (i / (frames.length - 1)) * Math.PI * 2;
      // Barriers stay coarse — you only ever scrape them, so a chord's worth
      // of sag on a wall is invisible and they are half the collider count.
      const walls: { side: number; points: Float32Array }[] = [];
      if (i % 3 === 0 && i + 3 < frames.length) {
        const far = frames[i + 3];
        for (const side of [-1, 1]) {
          if (side < 0 && inMergeGap(angle)) continue;
          walls.push({
            side,
            points: slab(
              a,
              far,
              side * HALF - 0.45,
              side * HALF + 0.45,
              Math.max(heights(a), heights(far)),
              0,
            ),
          });
        }
      }
      // Deep below the surface so a hard landing has something to hit.
      out.push({ road: slab(a, b, -HALF, HALF, 0, -3.5), walls });
    }
    return out;
  }, [frames, heights]);

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
        // Only where there is sea underneath, and never where the climb runs
        // beneath. On the stretches that cut back over the island a leg comes
        // down through the trees and the roads, and along the merge the inner
        // legs land squarely in the slip road — better no leg than a column
        // standing in a lane.
        .filter(
          (leg) =>
            Math.hypot(leg.base.x, leg.base.z) > ISLAND_RADIUS + 6 &&
            !onRamp(leg.base.x, leg.base.z, 3),
        ),
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

const KICKER_HALF_WIDTH = 3.6;
/**
 * How far off the centreline a kicker sits. Enough that the racing line past
 * it is still clean, not so far that it fires you at the barrier.
 */
const KICKER_OFFSET = 1.9;
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
        // Alternate sides so the loop doesn't turn into a slalom — but only
        // just: they used to sit hard against the barrier, which meant every
        // jump began from the one place on the track where drifting a metre
        // sideways in the air puts you over the wall.
        const side = i % 2 ? 1 : -1;
        const basis = new THREE.Matrix4().makeBasis(f.right, f.up, f.forward);
        return {
          position: f.position
            .clone()
            .addScaledVector(f.right, side * KICKER_OFFSET)
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

function ClimbRamp({ frames }: { frames: Frame[] }) {
  /*
   * The lane's width, frame by frame. It runs full width alongside the track
   * and then closes to nothing over the last few frames.
   *
   * Without the taper the slip road simply stopped: its inner barrier ended
   * twelve metres inside the circuit's, so anyone who came up the lane and
   * didn't merge met the end of the deck and the start of the track's barrier
   * at the same moment. The taper turns that into a gore — the inner edge
   * swings out to meet the track's, and running out of lane means being
   * eased across rather than hitting the corner of a wall.
   */
  const widths = useMemo(() => {
    const lane = mergeLaneFrames();
    const close = Math.min(lane - 1, 7);
    return frames.map((_, i) => {
      const left = frames.length - 1 - i;
      if (left >= close) return RAMP_HALF;
      const t = left / close;
      return 0.45 + (RAMP_HALF - 0.45) * t * t;
    });
  }, [frames]);

  const widthOf = useMemo(() => {
    const map = new Map(frames.map((f, i) => [f, widths[i]]));
    return (f: Frame) => map.get(f) ?? RAMP_HALF;
  }, [frames, widths]);

  const deck = useMemo(
    () =>
      sweep(
        (i) => [
          [-widths[i], 0],
          [widths[i], 0],
          [widths[i], -0.5],
          [-widths[i], -0.5],
        ],
        frames,
        true,
      ),
    [frames, widths],
  );

  /*
   * The ramp is walled on the inside all the way up and on the outside only
   * until it reaches the lane. Past that point its outer edge *is* the
   * circuit's inner edge, and a barrier there would be a barrier down the
   * middle of the merge.
   */
  const walls = useMemo(
    () =>
      barrierGeometry(frames, widthOf, [frames], [
        frames.slice(0, Math.max(frames.length - mergeLaneFrames(), 2)),
      ]),
    [frames, widthOf],
  );

  const dashes = useMemo(() => {
    const out: { position: THREE.Vector3; quaternion: THREE.Quaternion }[] = [];
    const basis = new THREE.Matrix4();
    for (let i = 2; i < frames.length - 1; i += 4) {
      const f = frames[i];
      basis.makeBasis(f.right, f.up, f.forward);
      out.push({
        position: f.position.clone().addScaledVector(f.up, 0.06),
        quaternion: new THREE.Quaternion().setFromRotationMatrix(basis),
      });
    }
    return out;
  }, [frames]);

  return (
    <group>
      <mesh geometry={deck} receiveShadow>
        <meshStandardMaterial
          color="#232858"
          emissive="#2a3170"
          emissiveIntensity={0.5}
          roughness={0.55}
          metalness={0.4}
          flatShading
        />
      </mesh>
      <Barrier {...walls} />
      <Instances limit={dashes.length} geometry={DASH_GEOMETRY}>
        <meshStandardMaterial
          color={NEON.lime}
          emissive={NEON.lime}
          emissiveIntensity={2}
          toneMapped={false}
        />
        {dashes.map((d, i) => (
          <Instance key={i} position={d.position} quaternion={d.quaternion} />
        ))}
      </Instances>
      <RampSurface frames={frames} widths={widths} />
      <RampLegs frames={frames} />
    </group>
  );
}

const DASH_GEOMETRY = new THREE.BoxGeometry(3.4, 0.08, 1.1);

/**
 * True once a ramp frame has reached the merge lane — that is, once its outer
 * edge is sitting on the circuit's inner edge rather than short of it.
 */
function onLane(frames: Frame[], i: number) {
  return i >= frames.length - mergeLaneFrames();
}

/** Physics for the climb: the same hulls the circuit uses, same rules. */
function RampSurface({ frames, widths }: { frames: Frame[]; widths: number[] }) {
  const pieces = useMemo(() => {
    const out: { road: Float32Array; walls: Float32Array[] }[] = [];
    for (let i = 0; i + 1 < frames.length; i += 1) {
      const a = frames[i];
      const b = frames[i + 1];
      const wa = widths[i];
      const wb = widths[i + 1];
      const walls: Float32Array[] = [];
      if (i % 2 === 0 && i + 2 < frames.length) {
        const far = frames[i + 2];
        const wf = widths[i + 2];
        // Inner side always; outer side only below the merge lane.
        walls.push(
          slab(a, far, -wa - 0.45, -wa + 0.45, WALL_HEIGHT, 0, [-wf - 0.45, -wf + 0.45]),
        );
        if (!onLane(frames, i))
          walls.push(slab(a, far, wa - 0.45, wa + 0.45, WALL_HEIGHT, 0, [wf - 0.45, wf + 0.45]));
      }
      out.push({ road: slab(a, b, -wa, wa, 0, -0.9, [-wb, wb]), walls });
    }
    return out;
  }, [frames, widths]);

  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      {pieces.map((piece, i) => (
        <group key={i}>
          <ConvexHullCollider args={[piece.road]} />
          {piece.walls.map((points, w) => (
            <ConvexHullCollider key={w} args={[points]} />
          ))}
        </group>
      ))}
    </RigidBody>
  );
}

/**
 * Legs down to whatever is under each one. They stand on the road's edge
 * rather than its centreline: a column on the centreline of a road that
 * crosses over another road comes down in the middle of it.
 */
function RampLegs({ frames }: { frames: Frame[] }) {
  const legs = useMemo(() => {
    const out: { position: THREE.Vector3; height: number }[] = [];
    for (let i = 4; i < frames.length - mergeLaneFrames(); i += 7) {
      const f = frames[i];
      const { x, z } = f.position;
      const radius = Math.hypot(x, z);
      // Never on top of the ring road it crosses, and never in a district or
      // a spoke: a support that lands in a road you can drive is worse than
      // an unsupported span in a world lit like this one, where nobody is
      // counting the columns anyway.
      if (Math.abs(radius - RING_RADIUS) < DECK_WIDTH / 2 + 3) continue;
      if (onSpokeOrDistrict(x, z, 3) || onRingLeg(x, z, 3)) continue;
      const foot = radius < ISLAND_RADIUS ? 0 : -8;
      const height = f.position.y - foot;
      if (height < 3) continue;
      out.push({ position: new THREE.Vector3(x, (f.position.y + foot) / 2 - 0.5, z), height });
    }
    return out;
  }, [frames]);

  return (
    <group>
      <RigidBody type="fixed" colliders={false}>
        {legs.map((leg, i) => (
          <CylinderCollider key={i} args={[leg.height / 2, 1.3]} position={leg.position} />
        ))}
      </RigidBody>
      {legs.map((leg, i) => (
        <mesh key={i} position={leg.position}>
          <cylinderGeometry args={[0.75, 1.5, leg.height, 6]} />
          <meshStandardMaterial color={NEON.deckEdge} roughness={0.65} flatShading />
        </mesh>
      ))}
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
