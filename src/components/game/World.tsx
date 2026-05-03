import { useMemo } from "react";
import * as THREE from "three";
import { Text } from "@react-three/drei";

/* ── Tree ─────────────────────────────────────────────────────────── */
function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, 0, z]} scale={scale}>
      {/* trunk */}
      <mesh position={[0, 0.55, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.09, 0.13, 1.1, 8]} />
        <meshStandardMaterial color="#5c3d1e" roughness={1} />
      </mesh>
      {/* foliage layers */}
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
  const rot = useMemo(() => [
    Math.random() * Math.PI,
    Math.random() * Math.PI,
    Math.random() * Math.PI * 0.3,
  ] as [number, number, number], []);
  return (
    <mesh position={[x, 0.18 * scale, z]} rotation={rot} scale={scale} castShadow receiveShadow>
      <dodecahedronGeometry args={[0.28, 0]} />
      <meshStandardMaterial color="#8a8275" roughness={1} />
    </mesh>
  );
}

/* ── Flower patch ─────────────────────────────────────────────────── */
function Flowers({ x, z }: { x: number; z: number }) {
  const colors = ["#f9c74f", "#f8961e", "#f3722c", "#ff6b9d", "#c77dff"];
  return (
    <group position={[x, 0.01, z]}>
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const r = 0.3 + Math.random() * 0.4;
        return (
          <mesh key={i} position={[Math.cos(angle) * r, 0.16, Math.sin(angle) * r]}>
            <sphereGeometry args={[0.05, 6, 6]} />
            <meshStandardMaterial color={colors[i % colors.length]} roughness={0.8} emissive={colors[i % colors.length]} emissiveIntensity={0.2} />
          </mesh>
        );
      })}
    </group>
  );
}

/* ── Portfolio sign post ──────────────────────────────────────────── */
export interface SignData {
  id: string;
  position: [number, number, number];
  label: string;
  emoji: string;
  color: string;
}

export const SIGNS: SignData[] = [
  { id: "about",    position: [ 8,  0,  -6], label: "About Me",  emoji: "🧑‍💻", color: "#4fc3f7" },
  { id: "projects", position: [-8,  0,  -6], label: "Projects",  emoji: "🚀", color: "#81c784" },
  { id: "contact",  position: [ 0,  0, -14], label: "Contact",   emoji: "✉️",  color: "#ffb74d" },
  { id: "resume",   position: [14,  0,   0], label: "Resume",    emoji: "📄", color: "#ce93d8" },
];

function SignPost({ sign, nearbyId }: { sign: SignData; nearbyId: string | null }) {
  const isNear = nearbyId === sign.id;
  return (
    <group position={sign.position}>
      {/* Post */}
      <mesh position={[0, 1.0, 0]} castShadow>
        <cylinderGeometry args={[0.06, 0.06, 2.0, 8]} />
        <meshStandardMaterial color="#8B5E3C" roughness={1} />
      </mesh>
      {/* Board */}
      <mesh position={[0, 2.2, 0]} castShadow>
        <boxGeometry args={[1.6, 0.7, 0.1]} />
        <meshStandardMaterial color={sign.color} roughness={0.5} emissive={isNear ? sign.color : "#000"} emissiveIntensity={isNear ? 0.4 : 0} />
      </mesh>
      {/* Text on board */}
      <Text
        position={[0, 2.2, 0.06]}
        fontSize={0.2}
        color="white"
        anchorX="center"
        anchorY="middle"
        font={undefined}
      >
        {sign.label}
      </Text>
      {/* Near indicator */}
      {isNear && (
        <Text
          position={[0, 3.1, 0]}
          fontSize={0.22}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          Press E to view
        </Text>
      )}
    </group>
  );
}

/* ── Path tiles ───────────────────────────────────────────────────── */
function PathTile({ x, z }: { x: number; z: number }) {
  return (
    <mesh position={[x, 0.01, z]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.8, 1.8]} />
      <meshStandardMaterial color="#c8b89a" roughness={1} />
    </mesh>
  );
}

/* ── World ────────────────────────────────────────────────────────── */
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
  [7, 2], [-7, 1], [0, 6], [1, -5],
];

export function World({ nearbySignId }: { nearbySignId: string | null }) {
  const pathTiles = useMemo(() => {
    const tiles: [number, number][] = [];
    for (let z = 0; z >= -16; z -= 2) tiles.push([0, z]);
    for (let x = 0; x <= 14; x += 2) tiles.push([x, 0]);
    for (let x = -2; x >= -8; x -= 2) tiles.push([x, 0]);
    for (let x = 2; x <= 8; x += 2) tiles.push([x, -6]);
    for (let x = -2; x >= -8; x -= 2) tiles.push([x, -6]);
    return tiles;
  }, []);

  return (
    <>
      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[80, 80, 1, 1]} />
        <meshStandardMaterial color="#5a8a3c" roughness={1} />
      </mesh>

      {/* Path */}
      {pathTiles.map(([x, z], i) => <PathTile key={i} x={x} z={z} />)}

      {/* Trees */}
      {TREE_POSITIONS.map(([x, , z], i) => (
        <Tree key={i} x={x} z={z} scale={0.7 + Math.sin(i * 3.7) * 0.25} />
      ))}

      {/* Rocks */}
      {ROCK_POSITIONS.map(([x, z], i) => (
        <Rock key={i} x={x} z={z} scale={0.5 + Math.sin(i * 2.1) * 0.3} />
      ))}

      {/* Flowers */}
      {FLOWER_POSITIONS.map(([x, z], i) => (
        <Flowers key={i} x={x} z={z} />
      ))}

      {/* Signs */}
      {SIGNS.map(sign => (
        <SignPost key={sign.id} sign={sign} nearbyId={nearbySignId} />
      ))}

      {/* Boundary fence suggestion — low hills */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        return (
          <mesh key={i} position={[Math.cos(angle) * 28, 0.6, Math.sin(angle) * 28]} castShadow>
            <sphereGeometry args={[1.2 + Math.sin(i * 1.9) * 0.4, 8, 6]} />
            <meshStandardMaterial color="#4a7030" roughness={1} />
          </mesh>
        );
      })}
    </>
  );
}
