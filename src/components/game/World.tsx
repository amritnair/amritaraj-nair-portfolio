import { useMemo, useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, ContactShadows, Environment } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import NpcDog from "./NpcDog";
import { NPC_DOGS } from "./npcData";
import CampfireParticles from "./CampfireParticles";
import { M, Z } from "./zeldaStyle";

export const TREE_POSITIONS: [number, number][] = [
  [-5, 3], [-6, 7], [-3, 10], [-9, 5], [-12, -2],
  [-11, -8], [-7, -12], [-4, -16], [-14, 9], [-16, 2],
  [5, 3], [7, 7], [4, 10], [10, 5], [13, -2],
  [12, 9], [16, 3], [11, -8], [7, -12], [18, -5],
  [0, 12], [2, 16], [-2, 14], [0, -18], [3, -20],
  [-3, -19], [20, 8], [22, -3], [-20, -6], [-22, 4],
  [-18, 14], [18, 14], [-15, -14], [15, -14],
];

const ROCK_POSITIONS: [number, number][] = [
  [-4, 2], [4, 2], [3, -8], [-5, -10], [9, -4], [-9, -3],
  [6, 12], [-6, 13], [11, 6], [-11, 7], [15, -7], [-15, -7],
];

const OBSTACLES = [...TREE_POSITIONS, ...ROCK_POSITIONS];
const OBSTACLE_R = 0.9;

/** Push point out of circular obstacles (trees, rocks) */
export function resolveObstacles(x: number, z: number): [number, number] {
  let nx = x;
  let nz = z;
  for (const [ox, oz] of OBSTACLES) {
    const dx = nx - ox;
    const dz = nz - oz;
    const d = Math.hypot(dx, dz);
    if (d < OBSTACLE_R) {
      const s = OBSTACLE_R / Math.max(d, 0.001);
      nx = ox + dx * s;
      nz = oz + dz * s;
    }
  }
  return [nx, nz];
}

function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  const blobs = useMemo(() => [
    { p: [0, 1.35, 0] as const, r: 0.95, c: Z.foliage1 },
    { p: [-0.28, 1.55, 0.18] as const, r: 0.7, c: Z.foliage2 },
    { p: [0.22, 1.65, -0.2] as const, r: 0.65, c: Z.foliage2 },
    { p: [0.1, 2.15, 0.1] as const, r: 0.58, c: Z.foliage3 },
    { p: [0, 2.65, 0] as const, r: 0.42, c: Z.foliage4 },
  ], []);

  return (
    <group position={[x, 0, z]} scale={scale}>
      <M color={Z.bark} castShadow receiveShadow position={[0, 0.65, 0]} roughness={0.95}>
        <cylinderGeometry args={[0.07, 0.12, 1.3, 16]} />
      </M>
      {blobs.map((b, i) => (
        <M key={i} color={b.c} castShadow roughness={0.92} position={b.p}>
          <sphereGeometry args={[b.r, 24, 20]} />
        </M>
      ))}
    </group>
  );
}

function Rock({ x, z, scale = 1, rotY = 0 }: { x: number; z: number; scale?: number; rotY?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0.15, rotY, 0.08]} scale={scale}>
      <M color={Z.rock} castShadow receiveShadow position={[0, 0.22, 0]} roughness={0.95}>
        <icosahedronGeometry args={[0.34, 1]} />
      </M>
      <M color={Z.rockLight} position={[0.2, 0.18, 0.15]} roughness={0.92}>
        <icosahedronGeometry args={[0.2, 1]} />
      </M>
    </group>
  );
}

function Wildflower({ x, z }: { x: number; z: number }) {
  const c = Z.flower[Math.abs(Math.floor(x * 3 + z * 7)) % Z.flower.length];
  return (
    <group position={[x, 0, z]}>
      <M color="#3d6835" position={[0, 0.08, 0]} roughness={0.9}>
        <cylinderGeometry args={[0.004, 0.004, 0.16, 6]} />
      </M>
      <M color={c} position={[0, 0.19, 0]} roughness={0.7}>
        <sphereGeometry args={[0.045, 12, 12]} />
      </M>
    </group>
  );
}

function PathTile({ x, z }: { x: number; z: number }) {
  return (
    <mesh position={[x, 0.025, z]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
      <planeGeometry args={[1.75, 1.75]} />
      <meshStandardMaterial color={Z.dirt} roughness={0.98} metalness={0} />
    </mesh>
  );
}

function Campfire({ x, z }: { x: number; z: number }) {
  const flameRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (flameRef.current) flameRef.current.scale.y = 1 + Math.sin(clock.elapsedTime * 5) * 0.06;
  });
  return (
    <group position={[x, 0, z]}>
      {[[-0.2, 0.05, 0], [0.17, 0.05, 0.08], [0, 0.05, -0.18]].map(([lx, ly, lz], i) => (
        <group key={i} position={[lx, ly, lz]} rotation={[0.2, i * 1.2, 0.25]}>
          <M color={Z.wood} position={[0, 0.25, 0]} roughness={0.95}>
            <cylinderGeometry args={[0.045, 0.055, 0.5, 12]} />
          </M>
        </group>
      ))}
      {Array.from({ length: 10 }, (_, i) => {
        const a = (i / 10) * Math.PI * 2;
        return (
          <M key={i} color={Z.rockDark} position={[Math.cos(a) * 0.3, 0.05, Math.sin(a) * 0.3]} roughness={0.98}>
            <icosahedronGeometry args={[0.07, 0]} />
          </M>
        );
      })}
      <group ref={flameRef} position={[0, 0.2, 0]}>
        <M color="#e85020" emissive="#ff4010" emissiveIntensity={2} transparent opacity={0.85} roughness={0.4}>
          <sphereGeometry args={[0.12, 16, 16]} />
        </M>
        <M color="#ffb040" emissive="#ff9010" emissiveIntensity={3} transparent opacity={0.7} position={[0, 0.12, 0]}>
          <sphereGeometry args={[0.07, 12, 12]} />
        </M>
      </group>
      <pointLight position={[0, 0.55, 0]} intensity={2.5} color="#ff9040" distance={10} decay={2} />
      <CampfireParticles position={[0, 0.18, 0]} />
    </group>
  );
}

function Bench({ x, z, rotation = 0 }: { x: number; z: number; rotation?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0, rotation, 0]}>
      <RoundedBox args={[1.45, 0.09, 0.38]} radius={0.02} smoothness={4} position={[0, 0.4, 0]} castShadow receiveShadow>
        <meshStandardMaterial color={Z.wood} roughness={0.88} />
      </RoundedBox>
      <RoundedBox args={[1.45, 0.06, 0.07]} radius={0.015} smoothness={4} position={[0, 0.22, -0.14]} castShadow>
        <meshStandardMaterial color={Z.woodDark} roughness={0.9} />
      </RoundedBox>
      {[-0.58, 0.58].map(dx => (
        <RoundedBox key={dx} args={[0.09, 0.38, 0.09]} radius={0.015} smoothness={4} position={[dx, 0.19, 0]} castShadow>
          <meshStandardMaterial color={Z.woodDark} roughness={0.9} />
        </RoundedBox>
      ))}
    </group>
  );
}

export function Signpost({ x, z, color }: { x: number; z: number; color: string }) {
  return (
    <group position={[x, 0, z]}>
      <M color={Z.bark} castShadow position={[0, 0.75, 0]} roughness={0.95}>
        <cylinderGeometry args={[0.05, 0.06, 1.5, 12]} />
      </M>
      <RoundedBox args={[0.85, 0.48, 0.06]} radius={0.02} smoothness={4} position={[0, 1.42, 0]} castShadow>
        <meshStandardMaterial color={Z.wood} roughness={0.85} />
      </RoundedBox>
      <RoundedBox args={[0.75, 0.36, 0.02]} radius={0.01} smoothness={4} position={[0, 1.42, 0.04]}>
        <meshStandardMaterial color={color} roughness={0.75} metalness={0.05} />
      </RoundedBox>
    </group>
  );
}

const FLOWER_POSITIONS: [number, number][] = [
  [2, 4], [-2, 5], [5, -3], [-5, -4], [3, 8], [-3, 9],
  [7, 2], [-7, 1], [0, 6], [1, -5], [6, -8], [-6, -7],
];

export function WorldEnvironment({
  nearbyNpcId,
  onBoneFound,
}: {
  nearbyNpcId: string | null;
  onBoneFound: () => void;
}) {
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
    <group>
      <Environment preset="park" background={false} />
      <ContactShadows position={[0, 0.01, 0]} opacity={0.5} scale={45} blur={2.5} far={18} />

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color={Z.grass} roughness={0.98} metalness={0} />
      </mesh>

      {pathTiles.map(([x, z], i) => <PathTile key={`p${i}`} x={x} z={z} />)}

      {TREE_POSITIONS.map(([x, z], i) => (
        <Tree key={`t${i}`} x={x} z={z} scale={0.85 + Math.sin(i * 3.7) * 0.12} />
      ))}

      {ROCK_POSITIONS.map(([x, z], i) => (
        <Rock key={`r${i}`} x={x} z={z} scale={0.6 + Math.sin(i * 2.1) * 0.18} rotY={i * 1.3} />
      ))}

      {FLOWER_POSITIONS.map(([x, z], i) => (
        <Wildflower key={`f${i}`} x={x} z={z} />
      ))}

      <Campfire x={0} z={-2} />
      <Bench x={-2.5} z={-2} rotation={0.5} />
      <Bench x={2.5}  z={-2} rotation={-0.5} />

      <Suspense fallback={null}>
        {NPC_DOGS.map(npc => (
          <NpcDog key={npc.id} npc={npc} isNear={nearbyNpcId === npc.id} />
        ))}
      </Suspense>

      <group position={[-18, 0, 12]} onClick={onBoneFound}>
        <M color="#e8e0d0" emissive="#ffe8b0" emissiveIntensity={0.4} rotation={[0, 0, Math.PI / 4]} roughness={0.8}>
          <cylinderGeometry args={[0.05, 0.05, 0.45, 12]} />
        </M>
      </group>

      {Array.from({ length: 10 }, (_, i) => {
        const angle = (i / 10) * Math.PI * 2;
        const r = 25;
        return (
          <M
            key={`h${i}`}
            color={Z.grassDark}
            castShadow
            roughness={0.98}
            position={[Math.cos(angle) * r, 1.2, Math.sin(angle) * r]}
            scale={[2.2 + Math.sin(i) * 0.4, 1.4, 1.8 + Math.cos(i * 1.5) * 0.3]}
          >
            <sphereGeometry args={[1, 24, 18]} />
          </M>
        );
      })}
    </group>
  );
}

export function WorldColliders() {
  return (
    <RigidBody type="fixed" colliders={false}>
      <CuboidCollider args={[40, 0.5, 40]} position={[0, -0.5, 0]} />
    </RigidBody>
  );
}

export function World(props: { nearbyNpcId: string | null; onBoneFound: () => void }) {
  return <WorldEnvironment {...props} />;
}
