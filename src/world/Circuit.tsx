import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
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
const SEGMENTS = 180;
/** Roll per unit of curvature, capped so the banking never becomes a wall. */
const BANK_GAIN = 5.2;
const BANK_LIMIT = 0.34;

type Segment = {
  position: THREE.Vector3;
  yaw: number;
  pitch: number;
  roll: number;
  length: number;
  angle: number;
};

function buildSegments(): Segment[] {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= SEGMENTS; i += 1) {
    const a = (i / SEGMENTS) * Math.PI * 2;
    const p = circuitPoint(a);
    points.push(new THREE.Vector3(p.x, p.y, p.z));
  }

  const yaws: number[] = [];
  const lengths: number[] = [];
  for (let i = 0; i < SEGMENTS; i += 1) {
    const d = points[i + 1].clone().sub(points[i]);
    yaws.push(Math.atan2(d.x, d.z));
    lengths.push(d.length());
  }

  return Array.from({ length: SEGMENTS }, (_, i) => {
    const from = points[i];
    const to = points[i + 1];
    const d = to.clone().sub(from);
    const flat = Math.hypot(d.x, d.z);

    // Curvature: how much the heading turns per unit travelled. Wrapped to
    // ±π so the seam at the start of the loop isn't read as a hairpin.
    const next = yaws[(i + 1) % SEGMENTS];
    let turn = next - yaws[i];
    turn = ((turn + Math.PI) % (Math.PI * 2)) - Math.PI;
    const curvature = turn / Math.max(lengths[i], 0.001);

    return {
      position: from.clone().lerp(to, 0.5),
      yaw: yaws[i],
      pitch: -Math.atan2(d.y, flat),
      roll: THREE.MathUtils.clamp(curvature * BANK_GAIN, -BANK_LIMIT, BANK_LIMIT),
      length: d.length() + 0.6,
      angle: (i / SEGMENTS) * Math.PI * 2,
    };
  });
}

export default function Circuit() {
  const segments = useMemo(buildSegments, []);

  return (
    <group>
      <Deck segments={segments} />
      <Surface segments={segments} />
      <Pylons segments={segments} />
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

function Deck({ segments }: { segments: Segment[] }) {
  return (
    <group>
      {segments.map((s, i) => (
        <group key={i} position={s.position} rotation={euler(s) as unknown as THREE.Euler}>
          {/* Lighter than the ring's deck, and faintly self-lit. At 30 units up
              there are no lanterns and no island bounce, so an unlit surface
              leaves the rails floating in a void with no road between them —
              and lighting a 1000-unit loop with point lights alone would cost
              far more than giving the deck its own glow. */}
          <mesh receiveShadow>
            <boxGeometry args={[WIDTH, 0.5, s.length]} />
            <meshStandardMaterial
              color="#242a5c"
              emissive="#2b3370"
              emissiveIntensity={0.55}
              roughness={0.55}
              metalness={0.4}
              flatShading
            />
          </mesh>
          {[-1, 1].map((side) => (
            <mesh key={side} position={[(side * WIDTH) / 2, 0.55, 0]}>
              <boxGeometry args={[0.36, 0.8, s.length]} />
              <meshStandardMaterial
                color={side > 0 ? NEON.amber : NEON.cyan}
                emissive={side > 0 ? NEON.amber : NEON.cyan}
                emissiveIntensity={3}
                toneMapped={false}
              />
            </mesh>
          ))}
          {/* Runway studs down both kerbs. These do the real work of making the
              track legible from across the loop. */}
          {i % 3 === 0 &&
            [-1, 1].map((side) => (
              <mesh key={`stud${side}`} position={[(side * (WIDTH / 2 - 1.1)), 0.3, 0]}>
                <boxGeometry args={[0.5, 0.1, 0.5]} />
                <meshStandardMaterial
                  color="#f2f5ff"
                  emissive="#cfe4ff"
                  emissiveIntensity={2.2}
                  toneMapped={false}
                />
              </mesh>
            ))}
          {/* Centre dashes on every fourth segment — a full stripe reads as a
              solid line and kills the sense of speed. */}
          {i % 4 === 0 && (
            <mesh position={[0, 0.28, 0]}>
              <boxGeometry args={[0.5, 0.06, s.length * 0.45]} />
              <meshStandardMaterial
                color={NEON.lime}
                emissive={NEON.lime}
                emissiveIntensity={1.6}
                toneMapped={false}
              />
            </mesh>
          )}
        </group>
      ))}
    </group>
  );
}

/** One static body for the whole loop: deck slab plus a wall each side. */
function Surface({ segments }: { segments: Segment[] }) {
  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      {segments.map((s, i) => (
        <group key={i} position={s.position} rotation={euler(s) as unknown as THREE.Euler}>
          <CuboidCollider args={[WIDTH / 2, 0.25, s.length / 2]} />
          {[-1, 1].map((side) => (
            <CuboidCollider
              key={side}
              args={[0.36, 1.0, s.length / 2]}
              position={[(side * WIDTH) / 2, 1.0, 0]}
            />
          ))}
        </group>
      ))}
    </RigidBody>
  );
}

/**
 * Legs down to the sea, each carrying a lamp at deck height. The lamps matter
 * more than the legs: they are the only thing actually lighting the surface up
 * here, and without them the track is a set of glowing rails around a hole.
 */
function Pylons({ segments }: { segments: Segment[] }) {
  return (
    <group>
      {segments
        .filter((_, i) => i % 12 === 0)
        .map((s, i) => (
          <group key={i} position={[s.position.x, 0, s.position.z]}>
            <mesh position={[0, s.position.y / 2 - 5, 0]}>
              <cylinderGeometry args={[0.9, 1.8, s.position.y + 10, 6]} />
              <meshStandardMaterial color={NEON.deckEdge} roughness={0.6} flatShading />
            </mesh>
            <mesh position={[0, s.position.y + 5.4, 0]}>
              <octahedronGeometry args={[0.7, 0]} />
              <meshStandardMaterial
                color="#dfe9ff"
                emissive="#bcd4ff"
                emissiveIntensity={2.6}
                toneMapped={false}
              />
            </mesh>
            <pointLight
              position={[0, s.position.y + 5.2, 0]}
              color="#a8c6ff"
              intensity={38}
              distance={34}
              decay={2}
            />
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

  const run = landing.radius - CIRCUIT_RAMP_START;
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
