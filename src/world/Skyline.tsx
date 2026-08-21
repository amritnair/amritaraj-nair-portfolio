import { useMemo } from "react";
import * as THREE from "three";
import { Instance, Instances } from "@react-three/drei";
import { NEON, makeRandom } from "./palette";

/**
 * A city on the horizon, well beyond the island.
 *
 * Pure composition: it gives every view something to sit against, so the
 * island reads as part of somewhere rather than a slab in a void, and the
 * circuit's high side has a skyline to be silhouetted by. Two instanced
 * meshes and a glow band — no lights, no shadows, no per-frame work.
 */

const INNER = 340;
const OUTER = 520;
const COUNT = 150;

type Tower = {
  position: [number, number, number];
  scale: [number, number, number];
  rotation: number;
  lit: boolean;
};

function buildTowers(): Tower[] {
  const random = makeRandom(5150);
  return Array.from({ length: COUNT }, () => {
    const angle = random() * Math.PI * 2;
    const radius = INNER + random() * (OUTER - INNER);
    // Taller towers cluster nearer, so the skyline has a front and a back.
    const depth = 1 - (radius - INNER) / (OUTER - INNER);
    const height = 26 + random() * 90 * (0.4 + depth);
    const width = 12 + random() * 22;
    return {
      position: [Math.cos(angle) * radius, height / 2, Math.sin(angle) * radius],
      scale: [width, height, width * (0.7 + random() * 0.6)],
      rotation: random() * Math.PI,
      lit: random() > 0.55,
    };
  });
}

export default function Skyline() {
  const towers = useMemo(buildTowers, []);
  const dark = towers.filter((t) => !t.lit);
  const lit = towers.filter((t) => t.lit);

  return (
    <group>
      <Instances limit={dark.length} range={dark.length}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#16183a" roughness={0.9} flatShading />
        {dark.map((t, i) => (
          <Instance key={i} position={t.position} scale={t.scale} rotation={[0, t.rotation, 0]} />
        ))}
      </Instances>

      {/* The lit ones are what actually reads at this distance. */}
      <Instances limit={lit.length} range={lit.length}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial
          color="#1d2150"
          emissive={NEON.cyan}
          emissiveIntensity={0.35}
          roughness={0.7}
          flatShading
        />
        {lit.map((t, i) => (
          <Instance key={i} position={t.position} scale={t.scale} rotation={[0, t.rotation, 0]} />
        ))}
      </Instances>

      {/* Haze band along the base, so the towers fade into the night rather
          than ending in a hard line on the water. */}
      <mesh position={[0, 26, 0]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[OUTER + 40, OUTER + 40, 90, 48, 1, true]} />
        <meshBasicMaterial
          color="#2a1c5c"
          side={THREE.BackSide}
          transparent
          opacity={0.42}
          depthWrite={false}
        />
      </mesh>
    </group>
  );
}
