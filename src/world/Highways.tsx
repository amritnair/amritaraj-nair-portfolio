import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import { RigidBody, CuboidCollider } from "@react-three/rapier";
import { NEON } from "./palette";
import {
  DECK_WIDTH,
  ISLAND_RADIUS,
  RAMP_ANGLES,
  RAMP_LENGTH,
  RING_HEIGHT,
  RING_RADIUS,
} from "./layout";

/**
 * The skyway. The ring is real road — it has colliders, two on-ramps up from
 * the island, and kerbs low enough to be thrown over by a bad drift. The two
 * spans crossing above it are scenery only, kept high and out of the way.
 *
 * Everything reads through emissive trim on dark decks, so the cost is
 * geometry rather than lighting.
 */

/** Segments in the driveable ring. More is smoother underfoot but costs bodies. */
const RING_SEGMENTS = 64;

export default function Highways() {
  return (
    <group>
      <RingSkyway />
      <RingSurface />
      {RAMP_ANGLES.map((angle) => (
        <Ramp key={angle} angle={angle} />
      ))}
      {/* Purely scenic, and high enough overhead to stay out of the way. */}
      <CrossSpan rotation={Math.PI / 4} height={30} length={ISLAND_RADIUS * 2.1} />
      <CrossSpan rotation={-Math.PI / 4} height={37} length={ISLAND_RADIUS * 2.1} />
      <Pylons />
      <RingTraffic />
    </group>
  );
}

/**
 * The physics for the ring: a chord-shaped slab per segment, with a low kerb
 * on each side. The kerbs are deliberately short — high walls turn the ring
 * into a bumper-car track, while a low lip lets a bad drift throw you off the
 * edge, which is the fun version of the same mistake.
 */
function RingSurface() {
  const segments = useMemo(
    () =>
      Array.from({ length: RING_SEGMENTS }).map((_, i) => {
        const angle = (i / RING_SEGMENTS) * Math.PI * 2;
        // Chord length, plus a slice of overlap so neighbours never leave a
        // seam for a wheel to catch on.
        const half = (Math.PI * RING_RADIUS) / RING_SEGMENTS + 0.35;
        return { angle, half };
      }),
    [],
  );

  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      {segments.map(({ angle, half }, i) => (
        <group
          key={i}
          position={[Math.cos(angle) * RING_RADIUS, RING_HEIGHT, Math.sin(angle) * RING_RADIUS]}
          rotation={[0, -angle, 0]}
        >
          {/* Deck slab. Its top face sits flush with the visual deck. */}
          <CuboidCollider args={[DECK_WIDTH / 2, 0.35, half]} position={[0, -0.35, 0]} />
          {[-1, 1].map((side) => (
            <CuboidCollider
              key={side}
              args={[0.35, 0.55, half]}
              position={[(side * DECK_WIDTH) / 2, 0.2, 0]}
            />
          ))}
        </group>
      ))}
    </RigidBody>
  );
}

/**
 * A straight on-ramp from the island up to the ring. Rapier gets one rotated
 * slab; the visual is the same slab with rails, so what you see is what you
 * drive on.
 */
function Ramp({ angle }: { angle: number }) {
  const pitch = Math.atan2(RING_HEIGHT, RAMP_LENGTH);
  const span = Math.hypot(RING_HEIGHT, RAMP_LENGTH);
  // Runs inward from the ring towards the island centre.
  const outer = new THREE.Vector3(Math.cos(angle), 0, Math.sin(angle));
  const mid = outer.clone().multiplyScalar(RING_RADIUS - RAMP_LENGTH / 2);

  return (
    <group
      position={[mid.x, RING_HEIGHT / 2, mid.z]}
      rotation={[0, -angle + Math.PI / 2, 0]}
    >
      {/* Negative pitch: a rotation about X sends local +z downward, and local
          +z here points outward at the ring — the positive sign builds a ramp
          that starts 13 units up at the island end and lands at the skyway's
          feet, which is exactly backwards. */}
      <group rotation={[-pitch, 0, 0]}>
        <mesh receiveShadow castShadow>
          <boxGeometry args={[DECK_WIDTH, 0.6, span]} />
          <meshStandardMaterial color={NEON.deck} roughness={0.5} metalness={0.5} flatShading />
        </mesh>
        {[-1, 1].map((side) => (
          <mesh key={side} position={[(side * DECK_WIDTH) / 2, 0.42, 0]}>
            <boxGeometry args={[0.3, 0.34, span]} />
            <meshStandardMaterial
              color={side > 0 ? NEON.magenta : NEON.cyan}
              emissive={side > 0 ? NEON.magenta : NEON.cyan}
              emissiveIntensity={3.2}
              toneMapped={false}
            />
          </mesh>
        ))}
        {/* Chevrons pointing up the ramp. */}
        {Array.from({ length: Math.floor(span / 7) }).map((_, i) => (
          <mesh key={i} position={[0, 0.34, -span / 2 + 4 + i * 7]}>
            <boxGeometry args={[3.2, 0.08, 0.7]} />
            <meshStandardMaterial
              color={NEON.lime}
              emissive={NEON.lime}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
        ))}

        <RigidBody type="fixed" colliders={false} friction={1}>
          <CuboidCollider args={[DECK_WIDTH / 2, 0.3, span / 2]} />
          {[-1, 1].map((side) => (
            <CuboidCollider
              key={side}
              args={[0.3, 0.55, span / 2]}
              position={[(side * DECK_WIDTH) / 2, 0.5, 0]}
            />
          ))}
        </RigidBody>
      </group>
    </group>
  );
}

/** The ring: a flat annulus deck with a glowing rail down each edge. */
function RingSkyway() {
  return (
    <group position={[0, RING_HEIGHT, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <ringGeometry args={[RING_RADIUS - DECK_WIDTH / 2, RING_RADIUS + DECK_WIDTH / 2, 128]} />
        <meshStandardMaterial
          color={NEON.deck}
          roughness={0.45}
          metalness={0.6}
          side={THREE.DoubleSide}
        />
      </mesh>
      {/* Edge rails. Two thin rings read as a road at distance far better than
          any amount of surface detail. */}
      {[-DECK_WIDTH / 2, DECK_WIDTH / 2].map((offset, i) => (
        <mesh key={offset} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.16, 0]}>
          <ringGeometry args={[RING_RADIUS + offset - 0.2, RING_RADIUS + offset + 0.2, 128]} />
          <meshStandardMaterial
            color={i ? NEON.magenta : NEON.cyan}
            emissive={i ? NEON.magenta : NEON.cyan}
            emissiveIntensity={3.4}
            toneMapped={false}
            side={THREE.DoubleSide}
          />
        </mesh>
      ))}
      {/* Underside strip, so the deck glows when seen from below — which is the
          only angle the player ever sees it from. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.45, 0]}>
        <ringGeometry args={[RING_RADIUS - 1.6, RING_RADIUS + 1.6, 96]} />
        <meshStandardMaterial
          color={NEON.cyan}
          emissive={NEON.cyan}
          emissiveIntensity={1.1}
          toneMapped={false}
          side={THREE.DoubleSide}
        />
      </mesh>
    </group>
  );
}

/** A straight span crossing the whole island, high enough to clear the signs. */
function CrossSpan({
  rotation,
  height,
  length,
}: {
  rotation: number;
  height: number;
  length: number;
}) {
  return (
    <group position={[0, height, 0]} rotation={[0, rotation, 0]}>
      <mesh receiveShadow castShadow>
        <boxGeometry args={[DECK_WIDTH, 0.5, length]} />
        <meshStandardMaterial color={NEON.deck} roughness={0.45} metalness={0.6} flatShading />
      </mesh>
      {[-1, 1].map((side) => (
        <mesh key={side} position={[(side * DECK_WIDTH) / 2, 0.3, 0]}>
          <boxGeometry args={[0.22, 0.22, length]} />
          <meshStandardMaterial
            color={side > 0 ? NEON.magenta : NEON.cyan}
            emissive={side > 0 ? NEON.magenta : NEON.cyan}
            emissiveIntensity={3.6}
            toneMapped={false}
          />
        </mesh>
      ))}
      {/* Centre dashes give the span a direction and a sense of speed. */}
      {Array.from({ length: Math.floor(length / 12) }).map((_, i) => (
        <mesh key={i} position={[0, 0.28, -length / 2 + 6 + i * 12]}>
          <boxGeometry args={[0.5, 0.1, 4]} />
          <meshStandardMaterial
            color={NEON.lime}
            emissive={NEON.lime}
            emissiveIntensity={2.2}
            toneMapped={false}
          />
        </mesh>
      ))}
      <SpanTraffic length={length} />
    </group>
  );
}

/** Support columns under the ring, with a lit collar at deck height. */
function Pylons() {
  const columns = useMemo(
    () =>
      Array.from({ length: 16 }).map((_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        return [Math.cos(angle) * RING_RADIUS, Math.sin(angle) * RING_RADIUS] as const;
      }),
    [],
  );

  return (
    <group>
      <Instances limit={columns.length} castShadow>
        <cylinderGeometry args={[0.7, 1.3, RING_HEIGHT, 6]} />
        <meshStandardMaterial color={NEON.deckEdge} roughness={0.6} metalness={0.4} flatShading />
        {columns.map(([x, z], i) => (
          <Instance key={i} position={[x, RING_HEIGHT / 2, z]} />
        ))}
      </Instances>

      <Instances limit={columns.length}>
        <torusGeometry args={[1.5, 0.16, 6, 16]} />
        <meshStandardMaterial
          color={NEON.cyan}
          emissive={NEON.cyan}
          emissiveIntensity={2.8}
          toneMapped={false}
        />
        {columns.map(([x, z], i) => (
          <Instance key={i} position={[x, RING_HEIGHT - 2.4, z]} rotation={[Math.PI / 2, 0, 0]} />
        ))}
      </Instances>
    </group>
  );
}

/**
 * Traffic is a streak of light, not a vehicle — at this distance a modelled car
 * would be four unreadable pixels, while a stretched glowing box reads as
 * motion immediately.
 */
const TRAFFIC_GEOMETRY = <boxGeometry args={[0.5, 0.3, 4.5]} />;

function RingTraffic() {
  const group = useRef<THREE.Group>(null);
  const lanes = useMemo(
    () =>
      Array.from({ length: 14 }).map((_, i) => ({
        angle: (i / 14) * Math.PI * 2,
        // Alternate direction and lane, so the two rails carry opposing flows.
        direction: i % 2 ? 1 : -1,
        offset: i % 2 ? 1.9 : -1.9,
        speed: 0.055 + (i % 5) * 0.012,
        color: i % 2 ? NEON.magenta : NEON.cyan,
      })),
    [],
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const lane = lanes[i];
      lane.angle += delta * lane.speed * lane.direction;
      const radius = RING_RADIUS + lane.offset;
      child.position.set(Math.cos(lane.angle) * radius, RING_HEIGHT + 0.4, Math.sin(lane.angle) * radius);
      child.rotation.y = -lane.angle + Math.PI / 2;
    });
  });

  return (
    <group ref={group}>
      {lanes.map((lane, i) => (
        <mesh key={i}>
          {TRAFFIC_GEOMETRY}
          <meshStandardMaterial
            color={lane.color}
            emissive={lane.color}
            emissiveIntensity={6}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function SpanTraffic({ length }: { length: number }) {
  const group = useRef<THREE.Group>(null);
  const lanes = useMemo(
    () =>
      Array.from({ length: 6 }).map((_, i) => ({
        t: (i / 6) * length,
        direction: i % 2 ? 1 : -1,
        offset: i % 2 ? 1.9 : -1.9,
        speed: 26 + (i % 3) * 9,
        color: i % 2 ? NEON.magenta : NEON.cyan,
      })),
    [length],
  );

  useFrame((_, delta) => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      const lane = lanes[i];
      lane.t = (lane.t + delta * lane.speed + length) % length;
      child.position.set(lane.offset, 0.45, lane.direction > 0 ? lane.t - length / 2 : length / 2 - lane.t);
    });
  });

  return (
    <group ref={group}>
      {lanes.map((lane, i) => (
        <mesh key={i}>
          {TRAFFIC_GEOMETRY}
          <meshStandardMaterial
            color={lane.color}
            emissive={lane.color}
            emissiveIntensity={6}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
