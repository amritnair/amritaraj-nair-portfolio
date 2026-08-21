import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { telemetry } from "./store";
import { PAINT_BY_ID, PAINTS } from "./garage";
import { useWorld } from "./store";

/**
 * Everything the car leaves behind: tyre smoke while it slides, skid marks on
 * the road under it, and a trail out of the thrusters under boost.
 *
 * All three are pooled particle systems sharing one draw call each. They read
 * the car straight off telemetry rather than taking props, so none of them
 * cause a React render while they're running.
 */

const SMOKE_COUNT = 90;
const MARK_COUNT = 120;
const TRAIL_COUNT = 60;

/** Soft round sprite — untextured points render as hard squares. */
const PUFF = (() => {
  const size = 64;
  const canvas = document.createElement("canvas");
  canvas.width = size;
  canvas.height = size;
  const ctx = canvas.getContext("2d")!;
  const gradient = ctx.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2);
  gradient.addColorStop(0, "rgba(255,255,255,0.9)");
  gradient.addColorStop(0.45, "rgba(255,255,255,0.35)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, size, size);
  const texture = new THREE.CanvasTexture(canvas);
  texture.needsUpdate = true;
  return texture;
})();

type Pool = {
  positions: Float32Array;
  life: Float32Array;
  sizes: Float32Array;
  next: number;
};

const makePool = (count: number): Pool => ({
  positions: new Float32Array(count * 3).fill(9999),
  life: new Float32Array(count),
  sizes: new Float32Array(count),
  next: 0,
});

function emit(pool: Pool, x: number, y: number, z: number, size: number) {
  const i = pool.next % (pool.life.length || 1);
  pool.next += 1;
  pool.positions[i * 3] = x;
  pool.positions[i * 3 + 1] = y;
  pool.positions[i * 3 + 2] = z;
  pool.life[i] = 1;
  pool.sizes[i] = size;
}

export default function Effects() {
  return (
    <group>
      <TyreSmoke />
      <SkidMarks />
      <BoostTrail />
    </group>
  );
}

/** Puffs off the rear wheels whenever the car is sliding. */
function TyreSmoke() {
  const points = useRef<THREE.Points>(null);
  const pool = useMemo(() => makePool(SMOKE_COUNT), []);
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pool.positions, 3));
    geo.setAttribute("size", new THREE.BufferAttribute(pool.sizes, 1));
    return geo;
  }, [pool]);

  useFrame((_, delta) => {
    const sliding = telemetry.driftActive && telemetry.speed > 6;
    if (sliding) {
      const spread = 1.1;
      emit(
        pool,
        telemetry.x + (Math.random() - 0.5) * spread,
        telemetry.y - 0.5,
        telemetry.z + (Math.random() - 0.5) * spread,
        1.4 + Math.random() * 1.6,
      );
    }

    for (let i = 0; i < SMOKE_COUNT; i += 1) {
      if (pool.life[i] <= 0) continue;
      pool.life[i] -= delta * 0.85;
      // Drift upward and fatten as they fade, like smoke rather than dust.
      pool.positions[i * 3 + 1] += delta * 1.4;
      pool.sizes[i] += delta * 2.2;
      if (pool.life[i] <= 0) pool.positions[i * 3 + 1] = 9999;
    }

    geometry.attributes.position.needsUpdate = true;
    geometry.attributes.size.needsUpdate = true;
    if (points.current) {
      const material = points.current.material as THREE.PointsMaterial;
      material.opacity = sliding ? 0.5 : 0.32;
    }
  });

  return (
    <points ref={points} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={2.4}
        map={PUFF}
        alphaMap={PUFF}
        color="#cfd4ff"
        transparent
        opacity={0.4}
        depthWrite={false}
        sizeAttenuation
        toneMapped={false}
      />
    </points>
  );
}

/** Dark streaks left on the road while the tyres are lit up. */
function SkidMarks() {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const pool = useMemo(() => makePool(MARK_COUNT), []);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const headings = useMemo(() => new Float32Array(MARK_COUNT), []);

  useFrame((_, delta) => {
    if (!mesh.current) return;

    if (telemetry.driftActive && telemetry.speed > 6) {
      const i = pool.next % MARK_COUNT;
      headings[i] = telemetry.heading;
      // Two strips, one per rear wheel.
      emit(pool, telemetry.x, telemetry.y - 0.72, telemetry.z, 1);
    }

    for (let i = 0; i < MARK_COUNT; i += 1) {
      const alive = pool.life[i] > 0;
      if (alive) pool.life[i] -= delta * 0.12;
      dummy.position.set(pool.positions[i * 3], pool.positions[i * 3 + 1], pool.positions[i * 3 + 2]);
      dummy.rotation.set(-Math.PI / 2, 0, -headings[i]);
      dummy.scale.setScalar(alive ? 1 : 0.0001);
      dummy.updateMatrix();
      mesh.current.setMatrixAt(i, dummy.matrix);
    }
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined as never, undefined as never, MARK_COUNT]}
      frustumCulled={false}
    >
      <planeGeometry args={[2.0, 1.1]} />
      <meshBasicMaterial color="#0a0a16" transparent opacity={0.38} depthWrite={false} />
    </instancedMesh>
  );
}

/** Streaks out of the thrusters, in the car's own trim colour. */
function BoostTrail() {
  const points = useRef<THREE.Points>(null);
  const pool = useMemo(() => makePool(TRAIL_COUNT), []);
  const paintId = useWorld((s) => s.garage.paint);
  const paint = PAINT_BY_ID[paintId] ?? PAINTS[0];
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(pool.positions, 3));
    return geo;
  }, [pool]);

  useFrame((_, delta) => {
    if (telemetry.boosting) {
      const back = 2.4;
      emit(
        pool,
        telemetry.x + Math.sin(telemetry.heading) * back + (Math.random() - 0.5) * 0.8,
        telemetry.y - 0.1 + (Math.random() - 0.5) * 0.3,
        telemetry.z + Math.cos(telemetry.heading) * back + (Math.random() - 0.5) * 0.8,
        1,
      );
    }

    for (let i = 0; i < TRAIL_COUNT; i += 1) {
      if (pool.life[i] <= 0) continue;
      pool.life[i] -= delta * 2.4;
      pool.positions[i * 3 + 1] += delta * 0.6;
      if (pool.life[i] <= 0) pool.positions[i * 3 + 1] = 9999;
    }
    geometry.attributes.position.needsUpdate = true;

    if (points.current) {
      const material = points.current.material as THREE.PointsMaterial;
      material.opacity = telemetry.boosting ? 0.95 : 0.5;
    }
  });

  return (
    <points ref={points} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        size={1.5}
        map={PUFF}
        alphaMap={PUFF}
        color={paint.trim}
        transparent
        opacity={0.9}
        depthWrite={false}
        sizeAttenuation
        toneMapped={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}
