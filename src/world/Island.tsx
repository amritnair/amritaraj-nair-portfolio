import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { Instance, Instances } from "@react-three/drei";
import { RigidBody, CuboidCollider, CylinderCollider } from "@react-three/rapier";
import { PALETTE, makeRandom } from "./palette";
import { ZONES } from "./content";
import { ISLAND_RADIUS, onRampCorridor, onRingLeg } from "./layout";
import { telemetry } from "./store";

export { ISLAND_RADIUS };

type Scatter = { position: [number, number, number]; scale: number; rotation: number };

/** True when a point is far enough from every plaza, road and the spawn strip. */
function isClear(x: number, z: number, pad: number) {
  if (Math.hypot(x, z) < 26 + pad) return false;
  for (const zone of ZONES) {
    const [zx, zz] = zone.position;
    if (Math.hypot(x - zx, z - zz) < zone.radius + 9 + pad) return false;
    // Keep the spoke roads clear.
    const t = THREE.MathUtils.clamp((x * zx + z * zz) / (zx * zx + zz * zz || 1), 0, 1);
    if (Math.hypot(x - zx * t, z - zz * t) < 8 + pad) return false;
  }
  // Nothing may stand where a highway ramp lands, or trees grow through it.
  if (onRampCorridor(x, z, pad)) return false;
  // Nor inside one of the ring's legs.
  if (onRingLeg(x, z, pad)) return false;
  return true;
}

function scatter(seed: number, count: number, pad: number, minR: number, maxR: number): Scatter[] {
  const random = makeRandom(seed);
  const out: Scatter[] = [];
  let guard = 0;
  while (out.length < count && guard < count * 40) {
    guard += 1;
    const angle = random() * Math.PI * 2;
    const radius = minR + random() * (maxR - minR);
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (!isClear(x, z, pad)) continue;
    out.push({
      position: [x, 0, z],
      scale: 0.7 + random() * 0.7,
      rotation: random() * Math.PI * 2,
    });
  }
  return out;
}

export default function Island() {
  // Sparse enough to drive through — dense woods turn into an invisible wall.
  const trees = useMemo(() => scatter(7, 130, 5, 36, ISLAND_RADIUS - 8), []);
  const rocks = useMemo(() => scatter(23, 110, 1, 30, ISLAND_RADIUS - 4), []);
  const grass = useMemo(() => scatter(91, 900, 0, 26, ISLAND_RADIUS - 2), []);

  return (
    <group>
      <Terrain />
      <Roads />
      <TreeField trees={trees} />
      <RockField rocks={rocks} />
      <GrassField grass={grass} />
      <Lanterns />
      <Fireflies />
      <Boundary />
    </group>
  );
}

function Terrain() {
  return (
    <RigidBody type="fixed" colliders={false} friction={1}>
      {/* Physical floor sits flush with y = 0. */}
      <CuboidCollider args={[ISLAND_RADIUS + 30, 2, ISLAND_RADIUS + 30]} position={[0, -2, 0]} />

      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[ISLAND_RADIUS, 96]} />
        <meshStandardMaterial color={PALETTE.ground} roughness={0.95} />
      </mesh>
      {/* Skirt so the island reads as a floating slab, not a decal. */}
      <mesh position={[0, -5, 0]}>
        <cylinderGeometry args={[ISLAND_RADIUS, ISLAND_RADIUS - 14, 10, 96, 1, true]} />
        <meshStandardMaterial
          color={PALETTE.groundEdge}
          side={THREE.BackSide}
          roughness={1}
          flatShading
        />
      </mesh>
      {/* Central plaza */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]} receiveShadow>
        <circleGeometry args={[24, 64]} />
        <meshStandardMaterial color={PALETTE.pavement} roughness={0.8} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.03, 0]} receiveShadow>
        <ringGeometry args={[20.5, 23, 64]} />
        <meshStandardMaterial
          color="#b9a7ff"
          emissive="#8f7bff"
          emissiveIntensity={1.6}
          roughness={0.5}
        />
      </mesh>
    </RigidBody>
  );
}

function Roads() {
  return (
    <group>
      {ZONES.map((zone) => {
        const [x, z] = zone.position;
        const length = Math.hypot(x, z);
        const angle = Math.atan2(x, z);
        return (
          <group key={zone.id} rotation={[0, angle, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.015, length / 2]} receiveShadow>
              <planeGeometry args={[11, length]} />
              <meshStandardMaterial color={PALETTE.road} roughness={0.85} />
            </mesh>
            {/* Kerb rails. These sit in frame the entire time you're on a road,
                so they do more for the look of the world than anything on the
                horizon does. */}
            {[-5.5, 5.5].map((offset) => (
              // Starting at the plaza ring rather than the origin: run them the
              // full length and all four spokes' rails cross in the middle of
              // the plaza, turning the spawn point into a cage.
              <mesh key={offset} position={[offset, 0.16, (26 + length) / 2]}>
                <boxGeometry args={[0.34, 0.34, length - 26]} />
                <meshStandardMaterial
                  color={zone.color}
                  emissive={zone.color}
                  emissiveIntensity={2.6}
                  toneMapped={false}
                />
              </mesh>
            ))}
            {/* Centre line, glowing in the zone's colour so each spoke is legible. */}
            {Array.from({ length: Math.floor(length / 9) }).map((_, i) => (
              <mesh key={i} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.04, 26 + i * 9]}>
                <planeGeometry args={[0.8, 4]} />
                <meshStandardMaterial
                  color={zone.glow}
                  emissive={zone.glow}
                  emissiveIntensity={2.4}
                  toneMapped={false}
                />
              </mesh>
            ))}
          </group>
        );
      })}
    </group>
  );
}

function TreeField({ trees }: { trees: Scatter[] }) {
  return (
    <group>
      <Instances limit={trees.length} castShadow receiveShadow>
        <cylinderGeometry args={[0.34, 0.5, 2.4, 6]} />
        <meshStandardMaterial color={PALETTE.bark} roughness={0.9} flatShading />
        {trees.map((tree, i) => (
          <Instance
            key={i}
            position={[tree.position[0], 1.2 * tree.scale, tree.position[2]]}
            scale={[tree.scale, tree.scale, tree.scale]}
            rotation={[0, tree.rotation, 0]}
          />
        ))}
      </Instances>

      <Instances limit={trees.length} castShadow>
        <coneGeometry args={[2.5, 4.6, 7]} />
        <meshStandardMaterial color={PALETTE.foliageDark} roughness={0.85} flatShading />
        {trees.map((tree, i) => (
          <Instance
            key={i}
            position={[tree.position[0], 3.6 * tree.scale, tree.position[2]]}
            scale={[tree.scale, tree.scale, tree.scale]}
            rotation={[0, tree.rotation, 0]}
          />
        ))}
      </Instances>

      <Instances limit={trees.length} castShadow>
        <coneGeometry args={[1.7, 3.4, 7]} />
        <meshStandardMaterial color={PALETTE.foliage} roughness={0.8} flatShading />
        {trees.map((tree, i) => (
          <Instance
            key={i}
            position={[tree.position[0], 6.0 * tree.scale, tree.position[2]]}
            scale={[tree.scale, tree.scale, tree.scale]}
            rotation={[0, tree.rotation * 1.7, 0]}
          />
        ))}
      </Instances>

      {/* One shared static body holds every trunk collider. Kept tight to the
          trunk so brushing the foliage doesn't stop the car dead. */}
      <RigidBody type="fixed" colliders={false}>
        {trees.map((tree, i) => (
          <CylinderCollider
            key={i}
            args={[2 * tree.scale, 0.55 * tree.scale]}
            position={[tree.position[0], 2 * tree.scale, tree.position[2]]}
          />
        ))}
      </RigidBody>
    </group>
  );
}

function RockField({ rocks }: { rocks: Scatter[] }) {
  return (
    <Instances limit={rocks.length} castShadow receiveShadow>
      <dodecahedronGeometry args={[1, 0]} />
      <meshStandardMaterial color={PALETTE.rock} roughness={0.95} flatShading />
      {rocks.map((rock, i) => (
        <Instance
          key={i}
          position={[rock.position[0], rock.scale * 0.42, rock.position[2]]}
          scale={[rock.scale, rock.scale * 0.6, rock.scale]}
          rotation={[rock.rotation, rock.rotation * 2, rock.rotation * 0.5]}
        />
      ))}
    </Instances>
  );
}

function GrassField({ grass }: { grass: Scatter[] }) {
  return (
    <Instances limit={grass.length}>
      <coneGeometry args={[0.34, 1.5, 4]} />
      <meshStandardMaterial color={PALETTE.foliageLight} roughness={0.9} flatShading />
      {grass.map((blade, i) => (
        <Instance
          key={i}
          position={[blade.position[0], 0.6 * blade.scale, blade.position[2]]}
          scale={[blade.scale, blade.scale * 1.4, blade.scale]}
          rotation={[0, blade.rotation, (blade.rotation % 0.3) - 0.15]}
        />
      ))}
    </Instances>
  );
}

/** Lamp posts ring the plaza and line the spokes; only a few cast real light. */
function Lanterns() {
  const posts = useMemo(() => {
    const out: { position: [number, number, number]; lit: boolean }[] = [];
    for (let i = 0; i < 12; i += 1) {
      const angle = (i / 12) * Math.PI * 2;
      out.push({
        position: [Math.cos(angle) * 22, 0, Math.sin(angle) * 22],
        lit: i % 3 === 0,
      });
    }
    ZONES.forEach((zone) => {
      const [zx, zz] = zone.position;
      const length = Math.hypot(zx, zz);
      const nx = zx / length;
      const nz = zz / length;
      for (let d = 34; d < length - 12; d += 16) {
        out.push({ position: [nx * d + nz * 7, 0, nz * d - nx * 7], lit: false });
        out.push({ position: [nx * d - nz * 7, 0, nz * d + nx * 7], lit: false });
      }
    });
    return out;
  }, []);

  return (
    <group>
      <Instances limit={posts.length} castShadow>
        <cylinderGeometry args={[0.16, 0.22, 5, 6]} />
        <meshStandardMaterial color="#3b3768" roughness={0.7} flatShading />
        {posts.map((post, i) => (
          <Instance key={i} position={[post.position[0], 2.5, post.position[2]]} />
        ))}
      </Instances>

      <Instances limit={posts.length}>
        <octahedronGeometry args={[0.62, 0]} />
        <meshStandardMaterial
          color={PALETTE.lantern}
          emissive={PALETTE.lantern}
          emissiveIntensity={3.4}
          toneMapped={false}
        />
        {posts.map((post, i) => (
          <Instance key={i} position={[post.position[0], 5.3, post.position[2]]} />
        ))}
      </Instances>

      {posts
        .filter((post) => post.lit)
        .map((post, i) => (
          <pointLight
            key={i}
            position={[post.position[0], 5.3, post.position[2]]}
            color={PALETTE.lantern}
            intensity={26}
            distance={26}
            decay={2}
          />
        ))}
    </group>
  );
}

/**
 * A soft radial dot. Untextured points render as hard squares, which reads as
 * floating debris rather than light.
 */
const SPARK_TEXTURE = (() => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,0.55)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
})();

/**
 * Motes of light over the island that get out of your way.
 *
 * They used to be a static cloud on a barely-perceptible rotation, which from
 * the car read as a field of specks pinned in the air. Now each one drifts on
 * its own, and the car pushes a bubble through them as it passes — so the
 * first thing you notice about them is that they respond to you.
 */
function Fireflies() {
  const points = useRef<THREE.Points>(null);
  const { geometry, positions, drift } = useMemo(() => {
    const random = makeRandom(404);
    const count = 260;
    const pos = new Float32Array(count * 3);
    const vel = new Float32Array(count * 3);
    for (let i = 0; i < count; i += 1) {
      const angle = random() * Math.PI * 2;
      const radius = 20 + random() * (ISLAND_RADIUS - 20);
      pos[i * 3] = Math.cos(angle) * radius;
      pos[i * 3 + 1] = 1.5 + random() * 14;
      pos[i * 3 + 2] = Math.sin(angle) * radius;
      vel[i * 3] = (random() - 0.5) * 0.7;
      vel[i * 3 + 1] = (random() - 0.5) * 0.35;
      vel[i * 3 + 2] = (random() - 0.5) * 0.7;
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
    return { geometry: geo, positions: pos, drift: vel };
  }, []);

  useFrame((_, delta) => {
    const step = Math.min(delta, 1 / 20);
    const count = positions.length / 3;
    const PUSH = 16;

    for (let i = 0; i < count; i += 1) {
      const xi = i * 3;
      positions[xi] += drift[xi] * step;
      positions[xi + 1] += drift[xi + 1] * step;
      positions[xi + 2] += drift[xi + 2] * step;

      // Shoved aside by the car, then left to drift back on their own.
      const dx = positions[xi] - telemetry.x;
      const dz = positions[xi + 2] - telemetry.z;
      const distance = Math.hypot(dx, dz);
      if (distance < PUSH && distance > 0.01) {
        const force = (1 - distance / PUSH) * step * 26;
        positions[xi] += (dx / distance) * force;
        positions[xi + 2] += (dz / distance) * force;
        positions[xi + 1] += force * 0.3;
      }

      // Keep them over the island, and under the skyway.
      const radius = Math.hypot(positions[xi], positions[xi + 2]);
      if (radius > ISLAND_RADIUS - 4 || radius < 16) {
        drift[xi] *= -1;
        drift[xi + 2] *= -1;
      }
      if (positions[xi + 1] > 17 || positions[xi + 1] < 1.2) drift[xi + 1] *= -1;
    }

    geometry.attributes.position.needsUpdate = true;
    if (points.current) points.current.rotation.y += delta * 0.004;
  });

  return (
    <points ref={points} geometry={geometry}>
      <pointsMaterial
        size={0.5}
        map={SPARK_TEXTURE}
        alphaMap={SPARK_TEXTURE}
        color="#ffd79a"
        transparent
        opacity={0.85}
        sizeAttenuation
        toneMapped={false}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Invisible wall so the car can't drive off the edge of the island. */
function Boundary() {
  const segments = 28;
  return (
    <RigidBody type="fixed" colliders={false} restitution={0.4}>
      {Array.from({ length: segments }).map((_, i) => {
        const angle = (i / segments) * Math.PI * 2;
        const r = ISLAND_RADIUS - 3;
        return (
          <CuboidCollider
            key={i}
            args={[(Math.PI * 2 * r) / segments / 2 + 0.6, 4, 0.6]}
            position={[Math.cos(angle) * r, 4, Math.sin(angle) * r]}
            rotation={[0, -angle, 0]}
          />
        );
      })}
    </RigidBody>
  );
}
