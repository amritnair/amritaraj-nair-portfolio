import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import { RigidBody, CuboidCollider, CylinderCollider } from "@react-three/rapier";
import { NEON } from "./palette";
import {
  DECK_WIDTH,
  ISLAND_RADIUS,
  RING_HEIGHT,
  ringLegPositions,
  RING_RADIUS,
} from "./layout";

/**
 * The skyway. The ring is still real road — it keeps its colliders, so falling
 * off the circuit onto it is a recovery rather than a reset — but it no longer
 * has ramps of its own: the only climb on the island is the one to the circuit,
 * which crosses over this ring on its way up. The two spans crossing above are
 * scenery only, kept high and out of the way.
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

/**
 * Supports for the ring.
 *
 * They used to stand on the road's own centreline, which put a column in open
 * ground every 40 units at exactly the radius you drive across — extrusions in
 * the middle of the island with no collision, so you drove straight through
 * them. They sit under the deck's outer edge now, the way a viaduct's legs
 * actually do, and any that would land on a spoke road, in a district or in
 * the climb's corridor is simply left out. A missing leg is invisible; a leg
 * through the middle of a path is not.
 */
function Pylons() {
  const columns = ringLegPositions();

  return (
    <group>
      <Instances limit={columns.length} castShadow>
        <cylinderGeometry args={[0.7, 1.3, RING_HEIGHT, 6]} />
        <meshStandardMaterial color={NEON.deckEdge} roughness={0.6} metalness={0.4} flatShading />
        {columns.map(([x, z], i) => (
          <Instance key={i} position={[x, RING_HEIGHT / 2, z]} />
        ))}
      </Instances>

      {/* Solid, because they look solid. Driving through a pillar is worse
          than being stopped by one. */}
      <RigidBody type="fixed" colliders={false}>
        {columns.map(([x, z], i) => (
          <CylinderCollider key={i} args={[RING_HEIGHT / 2, 1.2]} position={[x, RING_HEIGHT / 2, z]} />
        ))}
      </RigidBody>

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

