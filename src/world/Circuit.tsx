import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { NEON } from "./palette";
import { CIRCUIT_RAMP_ANGLE, CIRCUIT_RAMP_START, circuitAt, circuitPoint } from "./layout";
import BlockText from "./BlockText";
import { CHECKPOINTS, gateAt, updateRace } from "./race";
import { telemetry, worldStore } from "./store";

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
/** Physics segments. Coarser than the visuals — the car cannot feel the
 *  difference, and every segment is three more colliders in the broadphase. */
const COLLIDER_SEGMENTS = 72;
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
      <Surface segments={segments} />
      <Pylons frames={frames} />
      <ClimbRamp />
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

  const dashes = useMemo(() => {
    const out: { position: THREE.Vector3; quaternion: THREE.Quaternion }[] = [];
    const basis = new THREE.Matrix4();
    for (let i = 0; i < frames.length - 1; i += 6) {
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
        <boxGeometry args={[0.5, 0.06, 4]} />
        <meshStandardMaterial
          color={NEON.lime}
          emissive={NEON.lime}
          emissiveIntensity={1.6}
          toneMapped={false}
        />
        {dashes.map((dash, i) => (
          <Instance key={i} position={dash.position} quaternion={dash.quaternion} />
        ))}
      </Instances>
    </group>
  );
}

/** One static body for the whole loop: deck slab plus a wall each side. */
function Surface({ segments }: { segments: Segment[] }) {
  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      {segments.map((s, i) => (
        <group key={i} position={s.position} rotation={euler(s) as unknown as THREE.Euler}>
          {/* Offset so the collider's *top* face is the frame height. Centred,
              it stands a quarter unit proud of the visual deck — and of the
              ramp that meets it, which is a step to catch on. */}
          <CuboidCollider args={[WIDTH / 2, 0.25, s.length / 2]} position={[0, -0.25, 0]} />
          {[-1, 1].map((side) =>
            side < 0 && inMergeGap(s.angle) ? null : (
              <CuboidCollider
                key={side}
                args={[0.36, 1.0, s.length / 2]}
                position={[(side * WIDTH) / 2, 0.75, 0]}
              />
            ),
          )}
        </group>
      ))}
    </RigidBody>
  );
}

/**
 * Legs down to the sea with a lit head, instanced. These carry no real lights:
 * a point light per pylon is fifteen more lights for every lit material in the
 * scene to loop over, and the deck's own glow already reads at night.
 */
function Pylons({ frames }: { frames: Frame[] }) {
  const legs = useMemo(() => frames.filter((_, i) => i % 12 === 0), [frames]);

  return (
    <group>
      <Instances limit={legs.length} range={legs.length}>
        <cylinderGeometry args={[0.9, 1.8, 1, 6]} />
        <meshStandardMaterial color={NEON.deckEdge} roughness={0.6} flatShading />
        {legs.map((f, i) => (
          <Instance
            key={i}
            position={[f.position.x, f.position.y / 2 - 5, f.position.z]}
            scale={[1, f.position.y + 10, 1]}
          />
        ))}
      </Instances>

      <Instances limit={legs.length} range={legs.length}>
        <octahedronGeometry args={[0.7, 0]} />
        <meshStandardMaterial
          color="#dfe9ff"
          emissive="#bcd4ff"
          emissiveIntensity={2.6}
          toneMapped={false}
        />
        {legs.map((f, i) => (
          <Instance key={i} position={[f.position.x, f.position.y + 5.4, f.position.z]} />
        ))}
      </Instances>
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

/** Start/finish arch, straddling the circuit's main straight. */
function StartGate() {
  const p = circuitPoint(0);
  const ahead = circuitPoint(0.02);
  const yaw = Math.atan2(ahead.x - p.x, ahead.z - p.z);

  return (
    <group position={[p.x, p.y, p.z]} rotation={[0, yaw, 0]}>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[(side * WIDTH) / 2, 4.5, 0]} castShadow>
          <boxGeometry args={[0.9, 9, 0.9]} />
          <meshStandardMaterial color={NEON.deckEdge} roughness={0.5} metalness={0.5} flatShading />
        </mesh>
      ))}
      <mesh position={[0, 9, 0]}>
        <boxGeometry args={[WIDTH + 1, 0.8, 0.8]} />
        <meshStandardMaterial color={NEON.lime} emissive={NEON.lime} emissiveIntensity={1.1} />
      </mesh>
      {Array.from({ length: 10 }).map((_, i) => (
        <mesh key={i} position={[-WIDTH / 2 + 0.75 + i * 1.5, 0.3, 0]}>
          <boxGeometry args={[1.5, 0.08, 2.4]} />
          <meshStandardMaterial
            color={i % 2 ? "#f2f5ff" : "#141634"}
            emissive={i % 2 ? "#f2f5ff" : "#000000"}
            emissiveIntensity={i % 2 ? 0.5 : 0}
          />
        </mesh>
      ))}
      <BlockText
        position={[0, 11.5, 0]}
        rotation={[0, Math.PI / 2, 0]}
        size={0.42}
        depth={0.4}
        color="#dfe6ff"
        emissive={NEON.lime}
        emissiveIntensity={0.9}
      >
        CIRCUIT
      </BlockText>
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
          </group>
        );
      })}
    </group>
  );
}

function RaceWatcher() {
  useFrame((_, delta) => {
    updateRace(telemetry.x, telemetry.z, delta, worldStore);
  });
  return null;
}
