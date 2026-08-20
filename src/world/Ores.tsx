import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { NEON } from "./palette";
import { ISLAND_RADIUS, onRampCorridor } from "./layout";
import { ZONES } from "./content";
import { telemetry, useWorld, worldStore } from "./store";
import { ORE_VALUE } from "./garage";

/**
 * Diamond ore: small crystals tucked into the parts of the island nobody has a
 * reason to drive through — behind the treeline, out past the districts, under
 * the skyway. Each is worth points, and staying collected across sessions is
 * what makes hunting them feel worth doing.
 *
 * Placement is deterministic so a player can tell a friend where one is.
 */

const PICKUP_RADIUS = 4.2;

export type Ore = {
  id: string;
  position: [number, number, number];
};

/**
 * Hand-placed rings of ore rather than pure scatter: a random sprinkle either
 * lands in the open where there's nothing to find, or in a thicket you can't
 * reach. These sit in the gaps between spokes, at three depths.
 */
export const ORES: Ore[] = (() => {
  const out: Ore[] = [];
  const bands = [
    { radius: 44, count: 6, offset: 0.42 },
    { radius: 72, count: 8, offset: 0.2 },
    { radius: 99, count: 8, offset: 0.6 },
  ];

  bands.forEach((band, bandIndex) => {
    for (let i = 0; i < band.count; i += 1) {
      const angle = ((i + band.offset) / band.count) * Math.PI * 2;
      const x = Math.cos(angle) * band.radius;
      const z = Math.sin(angle) * band.radius;
      // Never bury one inside a district or under a ramp, where it would be
      // either unreachable or invisible against the glow already there.
      if (onRampCorridor(x, z, 4)) continue;
      if (ZONES.some((zone) => Math.hypot(x - zone.position[0], z - zone.position[1]) < 20)) {
        continue;
      }
      if (Math.hypot(x, z) > ISLAND_RADIUS - 6) continue;
      out.push({ id: `ore-${bandIndex}-${i}`, position: [x, 1.5, z] });
    }
  });

  return out;
})();

export default function Ores() {
  // Subscribed, not read once: collecting one has to make it disappear.
  const collected = useWorld((s) => s.garage.ores);
  return <OreField collected={collected} />;
}

function OreField({ collected }: { collected: string[] }) {
  const group = useRef<THREE.Group>(null);
  const remaining = useMemo(
    () => ORES.filter((ore) => !collected.includes(ore.id)),
    [collected],
  );

  useFrame(({ clock }) => {
    if (!group.current) return;
    const t = clock.elapsedTime;

    group.current.children.forEach((child, i) => {
      const ore = remaining[i];
      if (!ore) return;
      child.rotation.y = t * 1.1 + i;
      child.position.y = ore.position[1] + Math.sin(t * 1.6 + i) * 0.35;

      // Cheap proximity test against the car — squared distance, no allocation,
      // and only the handful of crystals still on the map.
      const dx = telemetry.x - ore.position[0];
      const dz = telemetry.z - ore.position[2];
      if (dx * dx + dz * dz < PICKUP_RADIUS * PICKUP_RADIUS) {
        worldStore.collectOre(ore.id);
      }
    });
  });

  return (
    <group ref={group}>
      {remaining.map((ore) => (
        <group key={ore.id} position={ore.position}>
          <mesh castShadow>
            <octahedronGeometry args={[0.85, 0]} />
            <meshStandardMaterial
              color="#bff6ff"
              emissive={NEON.cyan}
              emissiveIntensity={3.2}
              roughness={0.1}
              metalness={0.4}
              flatShading
              toneMapped={false}
            />
          </mesh>
          {/* A wider, dimmer shell so it reads as a glow rather than a solid. */}
          <mesh scale={1.7}>
            <octahedronGeometry args={[0.85, 0]} />
            <meshBasicMaterial
              color={NEON.cyan}
              transparent
              opacity={0.14}
              depthWrite={false}
              toneMapped={false}
            />
          </mesh>
          <pointLight color={NEON.cyan} intensity={7} distance={11} decay={2} />
        </group>
      ))}
    </group>
  );
}
