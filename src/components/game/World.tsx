import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import NpcDog from "./NpcDog";
import { NPC_DOGS } from "./npcData";
import CampfireParticles from "./CampfireParticles";
import { Stylized, Z } from "./zeldaStyle";

function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  return (
    <RigidBody type="fixed" colliders="hull" position={[x, 0, z]}>
      <group scale={scale}>
        <Stylized color={Z.bark} castShadow receiveShadow position={[0, 0.5, 0]}>
          <cylinderGeometry args={[0.1, 0.14, 1.0, 8]} />
        </Stylized>
        {[
          { y: 1.05, r: 0.75, h: 1.0, c: Z.foliage1 },
          { y: 1.75, r: 0.55, h: 0.85, c: Z.foliage2 },
          { y: 2.35, r: 0.38, h: 0.7, c: Z.foliage3 },
          { y: 2.85, r: 0.24, h: 0.55, c: Z.foliage4 },
        ].map((layer, i) => (
          <Stylized key={i} color={layer.c} castShadow position={[0, layer.y, 0]}>
            <coneGeometry args={[layer.r, layer.h, 8]} />
          </Stylized>
        ))}
      </group>
    </RigidBody>
  );
}

function Rock({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  const rot = useMemo<[number, number, number]>(
    () => [0.1, Math.random() * Math.PI * 2, 0],
    []
  );
  return (
    <RigidBody type="fixed" colliders="hull" position={[x, 0, z]}>
      <group rotation={rot} scale={scale}>
        <Stylized color={Z.rock} castShadow receiveShadow position={[0, 0.18, 0]}>
          <dodecahedronGeometry args={[0.28, 0]} />
        </Stylized>
        <Stylized color={Z.rockLight} position={[0.2, 0.24, 0.1]}>
          <dodecahedronGeometry args={[0.16, 0]} />
        </Stylized>
      </group>
    </RigidBody>
  );
}

function GrassTuft({ x, z }: { x: number; z: number }) {
  const blades = useMemo(() =>
    Array.from({ length: 4 }, (_, i) => ({
      angle: (i / 4) * Math.PI * 2,
      h: 0.14 + Math.random() * 0.08,
    })),
  []);
  return (
    <group position={[x, 0, z]}>
      {blades.map((b, i) => (
        <group key={i} rotation={[0, b.angle, 0]}>
          <Stylized
            color={i % 2 === 0 ? Z.grass : Z.grassLight}
            position={[0, b.h / 2, 0]}
          >
            <coneGeometry args={[0.035, b.h, 4]} />
          </Stylized>
        </group>
      ))}
    </group>
  );
}

function Flowers({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0, z]}>
      {Array.from({ length: 5 }, (_, i) => {
        const angle = (i / 5) * Math.PI * 2;
        const r = 0.18 + (i % 2) * 0.1;
        const c = Z.flower[i % Z.flower.length];
        return (
          <group key={i} position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]}>
            <Stylized color={Z.grassDark} position={[0, 0.07, 0]}>
              <cylinderGeometry args={[0.006, 0.006, 0.14, 4]} />
            </Stylized>
            <Stylized color={c} emissive={c} emissiveIntensity={0.2} position={[0, 0.16, 0]}>
              <sphereGeometry args={[0.04, 6, 6]} />
            </Stylized>
          </group>
        );
      })}
    </group>
  );
}

function PathTile({ x, z, variant = 0 }: { x: number; z: number; variant?: number }) {
  const color = variant % 2 === 0 ? Z.dirt : Z.dirtDark;
  return (
    <Stylized color={color} receiveShadow position={[x, 0.02, z]}>
      <boxGeometry args={[1.7, 0.04, 1.7]} />
    </Stylized>
  );
}

function Campfire({ x, z }: { x: number; z: number }) {
  const flameRef = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(t * 6) * 0.08;
    }
  });

  return (
    <group position={[x, 0, z]}>
      {[[-0.18, 0.06, 0], [0.16, 0.06, 0.08], [0, 0.06, -0.18]].map(([lx, ly, lz], i) => (
        <group key={i} position={[lx, ly, lz]} rotation={[0, i * 1.1, 0.3]}>
          <Stylized color={Z.wood} position={[0, 0.28, 0]}>
            <cylinderGeometry args={[0.05, 0.05, 0.55, 6]} />
          </Stylized>
        </group>
      ))}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <Stylized key={i} color={Z.rockDark} position={[Math.cos(a) * 0.28, 0.06, Math.sin(a) * 0.28]}>
            <dodecahedronGeometry args={[0.07, 0]} />
          </Stylized>
        );
      })}
      <Stylized color="#cc4400" emissive="#ff3300" emissiveIntensity={1.2} position={[0, 0.05, 0]}>
        <cylinderGeometry args={[0.16, 0.18, 0.06, 8]} />
      </Stylized>
      <group ref={flameRef} position={[0, 0.22, 0]}>
        <Stylized color="#ff6010" emissive="#ff4400" emissiveIntensity={2.5} transparent opacity={0.88}>
          <coneGeometry args={[0.12, 0.38, 6]} />
        </Stylized>
        <Stylized color="#ffb030" emissive="#ffcc00" emissiveIntensity={3} transparent opacity={0.9} position={[0, -0.06, 0]}>
          <coneGeometry args={[0.08, 0.22, 6]} />
        </Stylized>
      </group>
      <pointLight position={[0, 0.5, 0]} intensity={2} color="#ff8830" distance={10} decay={2} />
      <CampfireParticles position={[0, 0.15, 0]} />
    </group>
  );
}

function Bench({ x, z, rotation = 0 }: { x: number; z: number; rotation?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0, rotation, 0]}>
      <Stylized color={Z.wood} castShadow position={[0, 0.38, 0]}>
        <boxGeometry args={[1.4, 0.08, 0.38]} />
      </Stylized>
      <Stylized color={Z.woodDark} castShadow position={[0, 0.2, -0.14]}>
        <boxGeometry args={[1.4, 0.06, 0.06]} />
      </Stylized>
      {[-0.55, 0.55].map(dx => (
        <Stylized key={dx} color={Z.woodDark} castShadow position={[dx, 0.18, 0]}>
          <boxGeometry args={[0.08, 0.36, 0.1]} />
        </Stylized>
      ))}
    </group>
  );
}

export function Signpost({ x, z, color }: { x: number; z: number; color: string }) {
  return (
    <group position={[x, 0, z]}>
      <Stylized color={Z.wood} castShadow position={[0, 0.7, 0]}>
        <boxGeometry args={[0.1, 1.4, 0.1]} />
      </Stylized>
      <Stylized color={Z.wood} castShadow position={[0, 1.35, 0]}>
        <boxGeometry args={[0.85, 0.5, 0.08]} />
      </Stylized>
      <Stylized color={color} position={[0, 1.35, 0.05]}>
        <boxGeometry args={[0.75, 0.38, 0.02]} />
      </Stylized>
    </group>
  );
}

function HiddenBone({ onFound }: { onFound: () => void }) {
  const bob = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (bob.current) bob.current.position.y = 0.25 + Math.sin(clock.elapsedTime * 2) * 0.05;
  });
  return (
    <group position={[-18, 0, 12]} onClick={onFound}>
      <group ref={bob}>
        <group rotation={[0, 0, Math.PI / 4]}>
          <Stylized color="#f0e8d8" emissive="#ffe8b0" emissiveIntensity={0.5} position={[0, 0, 0]}>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 6]} />
          </Stylized>
        </group>
        {[-0.28, 0.28].map((offset, i) => (
          <Stylized key={i} color="#f0e8d8" emissive="#ffe8b0" emissiveIntensity={0.5} position={[offset * 0.707, offset * 0.707, 0]}>
            <sphereGeometry args={[0.1, 6, 6]} />
          </Stylized>
        ))}
      </group>
      <pointLight intensity={0.6} color="#ffe8a0" distance={4} decay={2} />
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
  [-18, 0, 14], [18, 0, 14], [-15, 0, -14], [15, 0, -14],
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
  [12, 2], [-12, 3], [3, -12], [-4, -14],
];

export function World({
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
    <>
      <RigidBody type="fixed" colliders="cuboid">
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
          <planeGeometry args={[80, 80]} />
          <meshStandardMaterial color={Z.grass} roughness={0.95} />
        </mesh>
      </RigidBody>

      {pathTiles.map(([x, z], i) => <PathTile key={i} x={x} z={z} variant={i} />)}

      {TREE_POSITIONS.map(([x, , z], i) => (
        <Tree key={i} x={x} z={z} scale={0.8 + Math.sin(i * 3.7) * 0.15} />
      ))}

      {ROCK_POSITIONS.map(([x, z], i) => (
        <Rock key={i} x={x} z={z} scale={0.6 + Math.sin(i * 2.1) * 0.2} />
      ))}

      {GRASS_POSITIONS.map(([x, z], i) => (
        <GrassTuft key={`g${i}`} x={x} z={z} />
      ))}

      {FLOWER_POSITIONS.map(([x, z], i) => (
        <Flowers key={i} x={x} z={z} />
      ))}

      <Campfire x={0} z={-2} />
      <Bench x={-2.2} z={-2} rotation={0.5} />
      <Bench x={2.2}  z={-2} rotation={-0.5} />

      {NPC_DOGS.map(npc => (
        <NpcDog key={npc.id} npc={npc} isNear={nearbyNpcId === npc.id} />
      ))}

      <HiddenBone onFound={onBoneFound} />

      {Array.from({ length: 12 }, (_, i) => {
        const angle = (i / 12) * Math.PI * 2;
        const r = 26;
        return (
          <RigidBody key={i} type="fixed" colliders="ball" position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]}>
            <Stylized color={Z.grassDark} castShadow position={[0, 1.2, 0]}>
              <sphereGeometry args={[1.5 + Math.sin(i * 1.9) * 0.4, 8, 6]} />
            </Stylized>
          </RigidBody>
        );
      })}
    </>
  );
}
