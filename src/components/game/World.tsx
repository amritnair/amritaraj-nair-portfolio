import { useMemo } from "react";
import NpcDog from "./NpcDog";
import { NPC_DOGS } from "./npcData";

/* ── Tree ─────────────────────────────────────────────────────────── */
function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, 0, z]} scale={scale}>
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.09, 0.13, 1.1, 8]} />
        <meshStandardMaterial color="#5c3d1e" roughness={1} />
      </mesh>
      <mesh position={[0, 1.55, 0]} castShadow>
        <coneGeometry args={[0.72, 1.2, 8]} />
        <meshStandardMaterial color="#2d5a27" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.25, 0]} castShadow>
        <coneGeometry args={[0.52, 1.0, 8]} />
        <meshStandardMaterial color="#3a6e32" roughness={0.9} />
      </mesh>
      <mesh position={[0, 2.85, 0]} castShadow>
        <coneGeometry args={[0.34, 0.8, 8]} />
        <meshStandardMaterial color="#4a8040" roughness={0.9} />
      </mesh>
    </group>
  );
}

/* ── Rock ─────────────────────────────────────────────────────────── */
function Rock({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  const rot = useMemo<[number, number, number]>(
    () => [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * 0.3],
    []
  );
  return (
    <mesh position={[x, 0.18 * scale, z]} rotation={rot} scale={scale} castShadow receiveShadow>
      <dodecahedronGeometry args={[0.28, 0]} />
      <meshStandardMaterial color="#8a8275" roughness={1} />
    </mesh>
  );
}

/* ── Flower patch ─────────────────────────────────────────────────── */
function Flowers({ x, z }: { x: number; z: number }) {
  const colors = ["#ffd166", "#ef476f", "#06d6a0", "#118ab2", "#ffc8dd"];
  return (
    <group position={[x, 0.01, z]}>
      {Array.from({ length: 9 }, (_, i) => {
        const angle = (i / 9) * Math.PI * 2;
        const r = 0.25 + (i % 3) * 0.15;
        return (
          <group key={i} position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]}>
            <mesh position={[0, 0.08, 0]}>
              <cylinderGeometry args={[0.008, 0.008, 0.16, 5]} />
              <meshStandardMaterial color="#2d6a2d" roughness={1} />
            </mesh>
            <mesh position={[0, 0.18, 0]}>
              <sphereGeometry args={[0.04, 6, 6]} />
              <meshStandardMaterial color={colors[i % colors.length]} roughness={0.7} emissive={colors[i % colors.length]} emissiveIntensity={0.15} />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}

/* ── Path tile ────────────────────────────────────────────────────── */
function PathTile({ x, z }: { x: number; z: number }) {
  return (
    <mesh position={[x, 0.01, z]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.8, 1.8]} />
      <meshStandardMaterial color="#c8b89a" roughness={1} />
    </mesh>
  );
}

/* ── Campfire ─────────────────────────────────────────────────────── */
function Campfire({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      {/* logs */}
      <mesh position={[-0.18, 0.06, 0]} rotation={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 7]} />
        <meshStandardMaterial color="#5c3d1e" roughness={1} />
      </mesh>
      <mesh position={[0.14, 0.06, 0.1]} rotation={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 0.5, 7]} />
        <meshStandardMaterial color="#5c3d1e" roughness={1} />
      </mesh>
      {/* coals */}
      <mesh position={[0, 0.04, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.18, 10]} />
        <meshStandardMaterial color="#cc4400" roughness={1} emissive="#ff3300" emissiveIntensity={0.5} />
      </mesh>
      {/* fire glow */}
      <pointLight position={[0, 0.5, 0]} intensity={1.8} color="#ff7720" distance={6} decay={2} />
    </group>
  );
}

/* ── Bench ────────────────────────────────────────────────────────── */
function Bench({ x, z, rotation = 0 }: { x: number; z: number; rotation?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0, rotation, 0]}>
      <mesh position={[0, 0.38, 0]} castShadow>
        <boxGeometry args={[1.4, 0.08, 0.38]} />
        <meshStandardMaterial color="#7a5230" roughness={0.9} />
      </mesh>
      {[-0.55, 0.55].map(dx => (
        <group key={dx} position={[dx, 0, 0]}>
          <mesh position={[0, 0.18, -0.1]} castShadow>
            <boxGeometry args={[0.08, 0.36, 0.06]} />
            <meshStandardMaterial color="#6a4220" roughness={0.9} />
          </mesh>
          <mesh position={[0, 0.18, 0.1]} castShadow>
            <boxGeometry args={[0.08, 0.36, 0.06]} />
            <meshStandardMaterial color="#6a4220" roughness={0.9} />
          </mesh>
        </group>
      ))}
    </group>
  );
}

const TREE_POSITIONS: [number, number, number][] = [
  [-5, 0,  3], [-6, 0,  7], [-3, 0, 10], [-9, 0,  5], [-12, 0, -2],
  [-11, 0, -8], [-7, 0, -12], [-4, 0, -16], [-14, 0,  9], [-16, 0,  2],
  [ 5, 0,  3], [ 7, 0,  7], [ 4, 0, 10], [10, 0,  5], [ 13, 0, -2],
  [12, 0,  9], [16, 0,  3], [11, 0, -8], [ 7, 0, -12], [18, 0, -5],
  [ 0, 0, 12], [ 2, 0, 16], [-2, 0, 14], [ 0, 0, -18], [ 3, 0, -20],
  [-3, 0, -19], [20, 0,  8], [22, 0, -3], [-20, 0, -6], [-22, 0,  4],
];

const ROCK_POSITIONS: [number, number][] = [
  [-4, 2], [4, 2], [3, -8], [-5, -10], [9, -4], [-9, -3],
  [6, 12], [-6, 13], [11, 6], [-11, 7], [15, -7], [-15, -7],
];

const FLOWER_POSITIONS: [number, number][] = [
  [2, 4], [-2, 5], [5, -3], [-5, -4], [3, 8], [-3, 9],
  [7, 2], [-7, 1], [0, 6], [1, -5], [6, -8], [-6, -7],
];

export function World({ nearbyNpcId }: { nearbyNpcId: string | null }) {
  const pathTiles = useMemo(() => {
    const tiles: [number, number][] = [];
    for (let z = 0; z >= -16; z -= 2) tiles.push([0, z]);
    for (let x = 2; x <= 14; x += 2) tiles.push([x, 0]);
    for (let x = -2; x >= -10; x -= 2) tiles.push([x, 0]);
    for (let x = 2; x <= 9; x += 2) tiles.push([x, -5]);
    for (let x = -2; x >= -9; x -= 2) tiles.push([x, -5]);
    return tiles;
  }, []);

  return (
    <>
      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color="#4a7830" roughness={1} />
      </mesh>

      {/* Paths */}
      {pathTiles.map(([x, z], i) => <PathTile key={i} x={x} z={z} />)}

      {/* Trees */}
      {TREE_POSITIONS.map(([x, , z], i) => (
        <Tree key={i} x={x} z={z} scale={0.72 + Math.sin(i * 3.7) * 0.22} />
      ))}

      {/* Rocks */}
      {ROCK_POSITIONS.map(([x, z], i) => (
        <Rock key={i} x={x} z={z} scale={0.5 + Math.sin(i * 2.1) * 0.28} />
      ))}

      {/* Flowers */}
      {FLOWER_POSITIONS.map(([x, z], i) => (
        <Flowers key={i} x={x} z={z} />
      ))}

      {/* Campfire in center clearing */}
      <Campfire x={0} z={-2} />
      <Bench x={-2.2} z={-2} rotation={0.5} />
      <Bench x={2.2}  z={-2} rotation={-0.5} />

      {/* NPC dogs */}
      {NPC_DOGS.map(npc => (
        <NpcDog key={npc.id} npc={npc} isNear={nearbyNpcId === npc.id} />
      ))}

      {/* Rolling hills boundary */}
      {Array.from({ length: 14 }, (_, i) => {
        const angle = (i / 14) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 27, 0.7, Math.sin(angle) * 27]} castShadow>
            <sphereGeometry args={[1.4 + Math.sin(i * 1.9) * 0.5, 8, 6]} />
            <meshStandardMaterial color="#3d6228" roughness={1} />
          </mesh>
        );
      })}
    </>
  );
}
