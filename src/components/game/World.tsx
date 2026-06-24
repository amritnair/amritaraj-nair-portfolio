import { useMemo, useRef, Suspense } from "react";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import NpcDog from "./NpcDog";
import { NPC_DOGS } from "./npcData";
import CampfireParticles from "./CampfireParticles";
import { M, Z } from "./zeldaStyle";

/* ── Visual-only props (no RigidBody — physics is separate) ─────── */

function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <group position={[x, 0, z]} scale={scale}>
      <M color={Z.bark} castShadow receiveShadow position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.12, 0.16, 1.1, 8]} />
      </M>
      {[
        { y: 1.15, r: 0.85, h: 1.1, c: Z.foliage1 },
        { y: 1.9,  r: 0.62, h: 0.95, c: Z.foliage2 },
        { y: 2.55, r: 0.42, h: 0.8,  c: Z.foliage3 },
        { y: 3.05, r: 0.28, h: 0.65, c: Z.foliage4 },
      ].map((layer, i) => (
        <M key={i} color={layer.c} castShadow position={[0, layer.y, 0]}>
          <coneGeometry args={[layer.r, layer.h, 8]} />
        </M>
      ))}
    </group>
  );
}

function Rock({ x, z, scale = 1, rotY = 0 }: { x: number; z: number; scale?: number; rotY?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0.1, rotY, 0]} scale={scale}>
      <M color={Z.rock} castShadow receiveShadow position={[0, 0.2, 0]}>
        <dodecahedronGeometry args={[0.32, 0]} />
      </M>
      <M color={Z.rockLight} position={[0.22, 0.26, 0.12]}>
        <dodecahedronGeometry args={[0.18, 0]} />
      </M>
    </group>
  );
}

function GrassTuft({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      {[0, 1.5, 3, 4.5].map((angle, i) => (
        <M
          key={i}
          color={i % 2 === 0 ? Z.grassLight : Z.grass}
          position={[Math.cos(angle) * 0.06, 0.1, Math.sin(angle) * 0.06]}
        >
          <coneGeometry args={[0.04, 0.2, 4]} />
        </M>
      ))}
    </group>
  );
}

function Flowers({ x, z }: { x: number; z: number }) {
  const c = Z.flower[Math.abs(x + z) % Z.flower.length];
  return (
    <group position={[x, 0, z]}>
      <M color={Z.grassDark} position={[0, 0.07, 0]}>
        <cylinderGeometry args={[0.008, 0.008, 0.14, 4]} />
      </M>
      <M color={c} emissive={c} emissiveIntensity={0.35} position={[0, 0.18, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
      </M>
    </group>
  );
}

function PathTile({ x, z, variant = 0 }: { x: number; z: number; variant?: number }) {
  return (
    <M color={variant % 2 === 0 ? Z.dirt : Z.dirtDark} receiveShadow position={[x, 0.03, z]}>
      <boxGeometry args={[1.8, 0.06, 1.8]} />
    </M>
  );
}

function Campfire({ x, z }: { x: number; z: number }) {
  const flameRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (flameRef.current) flameRef.current.scale.y = 1 + Math.sin(clock.elapsedTime * 6) * 0.1;
  });
  return (
    <group position={[x, 0, z]}>
      {[[-0.2, 0, 0], [0.18, 0, 0.1], [0, 0, -0.2]].map(([lx, , lz], i) => (
        <group key={i} position={[lx, 0.06, lz]} rotation={[0, i * 1.1, 0.3]}>
          <M color={Z.wood} position={[0, 0.28, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.55, 6]} />
          </M>
        </group>
      ))}
      <M color="#dd5500" emissive="#ff4400" emissiveIntensity={1.5} position={[0, 0.06, 0]}>
        <cylinderGeometry args={[0.18, 0.2, 0.08, 8]} />
      </M>
      <group ref={flameRef} position={[0, 0.25, 0]}>
        <M color="#ff6010" emissive="#ff4400" emissiveIntensity={3} transparent opacity={0.9}>
          <coneGeometry args={[0.14, 0.42, 6]} />
        </M>
        <M color="#ffb030" emissive="#ffcc00" emissiveIntensity={4} transparent opacity={0.92} position={[0, -0.05, 0]}>
          <coneGeometry args={[0.09, 0.24, 6]} />
        </M>
      </group>
      <pointLight position={[0, 0.6, 0]} intensity={3} color="#ff8830" distance={12} decay={2} />
      <CampfireParticles position={[0, 0.2, 0]} />
    </group>
  );
}

function Bench({ x, z, rotation = 0 }: { x: number; z: number; rotation?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0, rotation, 0]}>
      <M color={Z.wood} castShadow position={[0, 0.4, 0]}>
        <boxGeometry args={[1.5, 0.1, 0.4]} />
      </M>
      <M color={Z.woodDark} castShadow position={[0, 0.22, -0.15]}>
        <boxGeometry args={[1.5, 0.06, 0.08]} />
      </M>
      {[-0.6, 0.6].map(dx => (
        <M key={dx} color={Z.woodDark} castShadow position={[dx, 0.2, 0]}>
          <boxGeometry args={[0.1, 0.4, 0.1]} />
        </M>
      ))}
    </group>
  );
}

export function Signpost({ x, z, color }: { x: number; z: number; color: string }) {
  return (
    <group position={[x, 0, z]}>
      <M color={Z.wood} castShadow position={[0, 0.75, 0]}>
        <boxGeometry args={[0.12, 1.5, 0.12]} />
      </M>
      <M color={Z.wood} castShadow position={[0, 1.45, 0]}>
        <boxGeometry args={[0.9, 0.55, 0.1]} />
      </M>
      <M color={color} position={[0, 1.45, 0.06]}>
        <boxGeometry args={[0.8, 0.4, 0.04]} />
      </M>
    </group>
  );
}

function HiddenBone({ onFound }: { onFound: () => void }) {
  const bob = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (bob.current) bob.current.position.y = 0.3 + Math.sin(clock.elapsedTime * 2) * 0.06;
  });
  return (
    <group position={[-18, 0, 12]} onClick={onFound}>
      <group ref={bob}>
        <M color="#f0e8d8" emissive="#ffe8b0" emissiveIntensity={0.8} rotation={[0, 0, Math.PI / 4]}>
          <cylinderGeometry args={[0.06, 0.06, 0.5, 6]} />
        </M>
        {[-0.28, 0.28].map((offset, i) => (
          <M key={i} color="#f0e8d8" emissive="#ffe8b0" emissiveIntensity={0.8} position={[offset * 0.707, offset * 0.707, 0]}>
            <sphereGeometry args={[0.1, 8, 8]} />
          </M>
        ))}
      </group>
      <pointLight intensity={1} color="#ffe8a0" distance={5} decay={2} />
    </group>
  );
}

const TREE_POSITIONS: [number, number][] = [
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

const FLOWER_POSITIONS: [number, number][] = [
  [2, 4], [-2, 5], [5, -3], [-5, -4], [3, 8], [-3, 9],
  [7, 2], [-7, 1], [0, 6], [1, -5], [6, -8], [-6, -7],
];

const GRASS_POSITIONS: [number, number][] = [
  [1, 3], [-1, 4], [4, 1], [-4, 1], [2, -2], [-3, -3],
  [8, 0], [-8, 0], [0, 9], [0, -7], [5, 6], [-6, 5],
];

/** All visible geometry — rendered outside Rapier bodies */
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
      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[80, 80]} />
        <meshStandardMaterial color={Z.grass} roughness={0.9} />
      </mesh>

      {pathTiles.map(([x, z], i) => <PathTile key={`p${i}`} x={x} z={z} variant={i} />)}

      {TREE_POSITIONS.map(([x, z], i) => (
        <Tree key={`t${i}`} x={x} z={z} scale={0.9 + Math.sin(i * 3.7) * 0.15} />
      ))}

      {ROCK_POSITIONS.map(([x, z], i) => (
        <Rock key={`r${i}`} x={x} z={z} scale={0.65 + Math.sin(i * 2.1) * 0.2} rotY={i * 1.3} />
      ))}

      {GRASS_POSITIONS.map(([x, z], i) => (
        <GrassTuft key={`g${i}`} x={x} z={z} />
      ))}

      {FLOWER_POSITIONS.map(([x, z], i) => (
        <Flowers key={`f${i}`} x={x} z={z} />
      ))}

      <Campfire x={0} z={-2} />
      <Bench x={-2.5} z={-2} rotation={0.5} />
      <Bench x={2.5}  z={-2} rotation={-0.5} />

      <Suspense fallback={null}>
        {NPC_DOGS.map(npc => (
          <NpcDog key={npc.id} npc={npc} isNear={nearbyNpcId === npc.id} />
        ))}
      </Suspense>

      <HiddenBone onFound={onBoneFound} />

      {/* Boundary hills */}
      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 26;
        return (
          <M
            key={`h${i}`}
            color={Z.grassDark}
            castShadow
            position={[Math.cos(angle) * r, 1.4, Math.sin(angle) * r]}
          >
            <sphereGeometry args={[1.8 + Math.sin(i * 1.9) * 0.5, 10, 8]} />
          </M>
        );
      })}
    </group>
  );
}

/** Invisible physics colliders only */
export function WorldColliders() {
  return (
    <>
      <RigidBody type="fixed" colliders={false}>
        <CuboidCollider args={[40, 0.1, 40]} position={[0, -0.1, 0]} />
      </RigidBody>

      {TREE_POSITIONS.map(([x, z], i) => (
        <RigidBody key={`tc${i}`} type="fixed" colliders={false} position={[x, 1.5, z]}>
          <CuboidCollider args={[0.35, 1.5, 0.35]} />
        </RigidBody>
      ))}

      {ROCK_POSITIONS.map(([x, z], i) => (
        <RigidBody key={`rc${i}`} type="fixed" colliders={false} position={[x, 0.25, z]}>
          <CuboidCollider args={[0.4, 0.3, 0.4]} />
        </RigidBody>
      ))}

      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 26;
        return (
          <RigidBody key={`hc${i}`} type="fixed" colliders={false} position={[Math.cos(angle) * r, 1.4, Math.sin(angle) * r]}>
            <CuboidCollider args={[2, 1.8, 2]} />
          </RigidBody>
        );
      })}
    </>
  );
}

/** @deprecated use WorldEnvironment + WorldColliders */
export function World(props: { nearbyNpcId: string | null; onBoneFound: () => void }) {
  return <WorldEnvironment {...props} />;
}
