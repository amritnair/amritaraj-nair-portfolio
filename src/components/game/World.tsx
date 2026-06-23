import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { RigidBody } from "@react-three/rapier";
import * as THREE from "three";
import NpcDog from "./NpcDog";
import { NPC_DOGS } from "./npcData";
import CampfireParticles from "./CampfireParticles";
import { Stylized, Z } from "./zeldaStyle";

/* ── Zelda-style pine tree ────────────────────────────────────────── */
function Tree({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  const sway = useRef(Math.random() * Math.PI * 2);
  const topRef = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    if (!topRef.current) return;
    const t = clock.elapsedTime;
    topRef.current.rotation.z = Math.sin(t * 0.9 + sway.current) * 0.025;
    topRef.current.rotation.x = Math.sin(t * 0.7 + sway.current) * 0.015;
  });

  return (
    <RigidBody type="fixed" colliders="cuboid" position={[x, 0, z]}>
      <group scale={scale}>
        {/* Chunky trunk */}
        <Stylized color={Z.bark} castShadow receiveShadow>
          <cylinderGeometry args={[0.14, 0.2, 1.0, 6]} />
        </Stylized>
        <Stylized color={Z.woodDark} castShadow>
          <cylinderGeometry args={[0.1, 0.14, 0.3, 6]} />
        </Stylized>

        {/* Layered foliage — Wind Waker style stacked cones */}
        <group ref={topRef} position={[0, 0.5, 0]}>
          {[
            { y: 0.55, r: 0.85, h: 1.1, c: Z.foliage1 },
            { y: 1.35, r: 0.62, h: 0.95, c: Z.foliage2 },
            { y: 2.0,  r: 0.42, h: 0.8,  c: Z.foliage3 },
            { y: 2.55, r: 0.26, h: 0.6,  c: Z.foliage4 },
          ].map((layer, i) => (
            <group key={i} position={[0, layer.y, 0]}>
              <Stylized color={layer.c} castShadow>
                <coneGeometry args={[layer.r, layer.h, 6]} />
              </Stylized>
            </group>
          ))}
        </group>
      </group>
    </RigidBody>
  );
}

/* ── Stacked low-poly rock cluster ───────────────────────────────── */
function Rock({ x, z, scale = 1 }: { x: number; z: number; scale?: number }) {
  const rot = useMemo<[number, number, number]>(
    () => [0.1, Math.random() * Math.PI * 2, Math.random() * 0.2],
    []
  );
  const chunks = useMemo(() => [
    { pos: [0, 0, 0] as [number, number, number], s: 1.0, c: Z.rock },
    { pos: [0.22, 0.08, 0.12] as [number, number, number], s: 0.55, c: Z.rockLight },
    { pos: [-0.18, 0.04, -0.1] as [number, number, number], s: 0.42, c: Z.rockDark },
  ], []);

  return (
    <RigidBody type="fixed" colliders="hull" position={[x, 0.15 * scale, z]}>
      <group rotation={rot} scale={scale}>
        {chunks.map((ch, i) => (
          <group key={i} position={ch.pos} scale={ch.s}>
            <Stylized color={ch.c} castShadow receiveShadow>
              <dodecahedronGeometry args={[0.3, 0]} />
            </Stylized>
          </group>
        ))}
      </group>
    </RigidBody>
  );
}

/* ── Grass tuft ───────────────────────────────────────────────────── */
function GrassTuft({ x, z }: { x: number; z: number }) {
  const blades = useMemo(() =>
    Array.from({ length: 5 }, (_, i) => ({
      angle: (i / 5) * Math.PI * 2 + Math.random() * 0.5,
      h: 0.12 + Math.random() * 0.1,
      lean: 0.15 + Math.random() * 0.2,
    })),
  []);

  return (
    <group position={[x, 0.02, z]}>
      {blades.map((b, i) => (
        <group key={i} rotation={[0, b.angle, 0]}>
          <group rotation={[b.lean, 0, 0]} position={[0, b.h * 0.5, 0]}>
            <Stylized
              color={i % 2 === 0 ? Z.grass : Z.grassLight}
             
            >
              <coneGeometry args={[0.04, b.h, 4]} />
            </Stylized>
          </group>
        </group>
      ))}
    </group>
  );
}

/* ── Korok-style flowers ──────────────────────────────────────────── */
function Flowers({ x, z }: { x: number; z: number }) {
  return (
    <group position={[x, 0.01, z]}>
      {Array.from({ length: 7 }, (_, i) => {
        const angle = (i / 7) * Math.PI * 2;
        const r = 0.2 + (i % 3) * 0.12;
        const c = Z.flower[i % Z.flower.length];
        return (
          <group key={i} position={[Math.cos(angle) * r, 0, Math.sin(angle) * r]}>
            <Stylized color={Z.grassDark}>
              <cylinderGeometry args={[0.006, 0.006, 0.14, 4]} />
            </Stylized>
            <group position={[0, 0.16, 0]}>
              <Stylized color={c} emissive={c} emissiveIntensity={0.3}>
                <sphereGeometry args={[0.045, 6, 6]} />
              </Stylized>
            </group>
          </group>
        );
      })}
    </group>
  );
}

/* ── Cobblestone path tile ────────────────────────────────────────── */
function PathTile({ x, z, variant = 0 }: { x: number; z: number; variant?: number }) {
  const color = variant % 2 === 0 ? Z.dirt : Z.dirtDark;
  return (
    <group position={[x, 0.015, z]}>
      <Stylized color={color} receiveShadow>
        <boxGeometry args={[1.7, 0.04, 1.7]} />
      </Stylized>
      {/* Cobble detail */}
      {[[-0.4, 0.03, -0.3], [0.3, 0.03, 0.35], [-0.2, 0.03, 0.5], [0.45, 0.03, -0.4]].map(([px, py, pz], i) => (
        <group key={i} position={[px, py, pz]}>
          <Stylized color={i % 2 ? Z.dirtDark : Z.dirt}>
            <boxGeometry args={[0.35, 0.03, 0.35]} />
          </Stylized>
        </group>
      ))}
    </group>
  );
}

/* ── Animated campfire ────────────────────────────────────────────── */
function Campfire({ x, z }: { x: number; z: number }) {
  const flameRef = useRef<THREE.Group>(null);
  const flame2Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (flameRef.current) {
      flameRef.current.scale.y = 1 + Math.sin(t * 8) * 0.12;
      flameRef.current.rotation.y = Math.sin(t * 3) * 0.15;
    }
    if (flame2Ref.current) {
      flame2Ref.current.scale.setScalar(0.9 + Math.sin(t * 11 + 1) * 0.15);
    }
  });

  return (
    <group position={[x, 0, z]}>
      {/* Log ring */}
      {[[-0.2, 0.06, 0], [0.18, 0.06, 0.08], [0, 0.06, -0.2]].map(([lx, ly, lz], i) => (
        <group key={i} position={[lx, ly, lz]} rotation={[0, i * 1.1, 0.3]}>
          <Stylized color={Z.wood}>
            <cylinderGeometry args={[0.06, 0.06, 0.55, 6]} />
          </Stylized>
        </group>
      ))}
      {/* Stone ring */}
      {Array.from({ length: 8 }, (_, i) => {
        const a = (i / 8) * Math.PI * 2;
        return (
          <group key={i} position={[Math.cos(a) * 0.28, 0.04, Math.sin(a) * 0.28]}>
            <Stylized color={Z.rockDark}>
              <dodecahedronGeometry args={[0.08, 0]} />
            </Stylized>
          </group>
        );
      })}
      {/* Embers base */}
      <Stylized color="#cc4400" emissive="#ff3300" emissiveIntensity={1.5}>
        <cylinderGeometry args={[0.16, 0.18, 0.06, 8]} />
      </Stylized>
      {/* Flames */}
      <group ref={flameRef} position={[0, 0.22, 0]}>
        <Stylized color="#ff6010" emissive="#ff4400" emissiveIntensity={3} transparent opacity={0.9}>
          <coneGeometry args={[0.14, 0.42, 6]} />
        </Stylized>
      </group>
      <group position={[0, 0.14, 0]}>
        <mesh ref={flame2Ref}>
          <coneGeometry args={[0.09, 0.26, 6]} />
          <meshStandardMaterial color="#e8a040" emissive="#d89030" emissiveIntensity={2} transparent opacity={0.9} roughness={0.4} />
        </mesh>
      </group>
      <pointLight position={[0, 0.5, 0]} intensity={2.5} color="#ff8830" distance={10} decay={2} />
      <CampfireParticles position={[0, 0.2, 0]} />
    </group>
  );
}

/* ── Wooden bench ─────────────────────────────────────────────────── */
function Bench({ x, z, rotation = 0 }: { x: number; z: number; rotation?: number }) {
  return (
    <group position={[x, 0, z]} rotation={[0, rotation, 0]}>
      <Stylized color={Z.wood} castShadow>
        <boxGeometry args={[1.5, 0.1, 0.4]} />
      </Stylized>
      <group position={[0, 0.2, 0]}>
        <Stylized color={Z.woodDark} castShadow>
          <boxGeometry args={[1.5, 0.06, 0.08]} />
        </Stylized>
      </group>
      {[-0.6, 0.6].map(dx => (
        <group key={dx} position={[dx, 0, 0]}>
          <Stylized color={Z.woodDark} castShadow>
            <boxGeometry args={[0.1, 0.38, 0.1]} />
          </Stylized>
        </group>
      ))}
    </group>
  );
}

/* ── Zelda signpost ───────────────────────────────────────────────── */
export function Signpost({ x, z, color }: { x: number; z: number; color: string; label?: string }) {
  return (
    <group position={[x, 0, z]}>
      <Stylized color={Z.wood} castShadow>
        <boxGeometry args={[0.12, 1.4, 0.12]} />
      </Stylized>
      <group position={[0, 1.1, 0]}>
        <Stylized color={Z.wood} castShadow>
          <boxGeometry args={[0.9, 0.55, 0.08]} />
        </Stylized>
        <Stylized color={color}>
          <boxGeometry args={[0.82, 0.42, 0.04]} />
        </Stylized>
      </group>
      {/* Arrow tip */}
      <group position={[0.55, 1.1, 0]} rotation={[0, 0, -Math.PI / 2]}>
        <Stylized color={Z.wood}>
          <coneGeometry args={[0.18, 0.25, 4]} />
        </Stylized>
      </group>
    </group>
  );
}

/* ── Hidden bone easter egg ───────────────────────────────────────── */
function HiddenBone({ onFound }: { onFound: () => void }) {
  const bob = useRef<THREE.Group>(null);
  useFrame(({ clock }) => {
    if (bob.current) bob.current.position.y = 0.3 + Math.sin(clock.elapsedTime * 2) * 0.06;
  });

  return (
    <group position={[-18, 0, 12]} onClick={onFound}>
      <group ref={bob}>
        <group rotation={[0, 0, Math.PI / 4]}>
          <Stylized color="#f0e8d8" emissive="#ffe8b0" emissiveIntensity={0.6}>
            <cylinderGeometry args={[0.06, 0.06, 0.5, 6]} />
          </Stylized>
        </group>
        {[-0.28, 0.28].map((offset, i) => (
          <group key={i} position={[offset * 0.707, offset * 0.707, 0]}>
            <Stylized color="#f0e8d8" emissive="#ffe8b0" emissiveIntensity={0.6}>
              <sphereGeometry args={[0.1, 6, 6]} />
            </Stylized>
          </group>
        ))}
      </group>
      <pointLight intensity={0.8} color="#ffe8a0" distance={4} decay={2} />
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
  [-10, 4], [10, 4], [-10, -10], [10, -10],
];

const GRASS_POSITIONS: [number, number][] = [
  [1, 3], [-1, 4], [4, 1], [-4, 1], [2, -2], [-3, -3],
  [8, 0], [-8, 0], [0, 9], [0, -7], [5, 6], [-6, 5],
  [12, 2], [-12, 3], [3, -12], [-4, -14], [14, -2], [-14, -4],
  [1, 1], [-2, -1], [6, 4], [-5, 6], [9, -6], [-8, -8],
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
      {/* Ground with color patches */}
      <RigidBody type="fixed" colliders="cuboid">
        <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.05, 0]}>
          <planeGeometry args={[80, 80, 1, 1]} />
          <meshStandardMaterial color={Z.grass} roughness={0.95} />
        </mesh>
      </RigidBody>

      {/* Grass color variation patches */}
      {[
        [-8, -6, 12, 10], [6, 4, 14, 12], [-4, 8, 10, 8], [10, -8, 11, 9],
      ].map(([x, z, w, h], i) => (
        <mesh key={i} receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[x, 0.005, z]}>
          <planeGeometry args={[w, h]} />
          <meshStandardMaterial color={i % 2 ? Z.grassLight : Z.grassDark} transparent opacity={0.4} roughness={0.95} />
        </mesh>
      ))}

      {pathTiles.map(([x, z], i) => <PathTile key={i} x={x} z={z} variant={i} />)}

      {TREE_POSITIONS.map(([x, , z], i) => (
        <Tree key={i} x={x} z={z} scale={0.75 + Math.sin(i * 3.7) * 0.2} />
      ))}

      {ROCK_POSITIONS.map(([x, z], i) => (
        <Rock key={i} x={x} z={z} scale={0.55 + Math.sin(i * 2.1) * 0.25} />
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

      {/* Rolling hills boundary */}
      {Array.from({ length: 16 }, (_, i) => {
        const angle = (i / 16) * Math.PI * 2;
        const r = 27 + Math.sin(i * 2.3) * 2;
        return (
          <RigidBody key={i} type="fixed" colliders="ball" position={[Math.cos(angle) * r, 0.8, Math.sin(angle) * r]}>
            <Stylized color={Z.grassDark} castShadow>
              <sphereGeometry args={[1.6 + Math.sin(i * 1.9) * 0.6, 6, 5]} />
            </Stylized>
          </RigidBody>
        );
      })}
    </>
  );
}
