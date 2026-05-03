import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const COUNT = 28;

export default function CampfireParticles({ position }: { position: [number, number, number] }) {
  const mesh = useRef<THREE.Points>(null);

  const { positions, velocities, lifetimes, ages } = useMemo(() => {
    const positions  = new Float32Array(COUNT * 3);
    const velocities = new Float32Array(COUNT * 3);
    const lifetimes  = new Float32Array(COUNT);
    const ages       = new Float32Array(COUNT);
    for (let i = 0; i < COUNT; i++) {
      positions[i * 3]     = (Math.random() - 0.5) * 0.25;
      positions[i * 3 + 1] = Math.random() * 0.4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 0.25;
      velocities[i * 3]     = (Math.random() - 0.5) * 0.35;
      velocities[i * 3 + 1] = 0.6 + Math.random() * 1.1;
      velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.35;
      lifetimes[i] = 0.8 + Math.random() * 0.7;
      ages[i]      = Math.random() * lifetimes[i];
    }
    return { positions, velocities, lifetimes, ages };
  }, []);

  const geo = useMemo(() => {
    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions.slice(), 3));
    return g;
  }, [positions]);

  useFrame((_, delta) => {
    if (!mesh.current) return;
    const pos = mesh.current.geometry.attributes.position.array as Float32Array;
    for (let i = 0; i < COUNT; i++) {
      ages[i] += delta;
      if (ages[i] > lifetimes[i]) {
        ages[i] = 0;
        pos[i * 3]     = (Math.random() - 0.5) * 0.2;
        pos[i * 3 + 1] = 0.1;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 0.2;
        velocities[i * 3]     = (Math.random() - 0.5) * 0.3;
        velocities[i * 3 + 1] = 0.6 + Math.random() * 0.9;
        velocities[i * 3 + 2] = (Math.random() - 0.5) * 0.3;
      } else {
        pos[i * 3]     += velocities[i * 3]     * delta;
        pos[i * 3 + 1] += velocities[i * 3 + 1] * delta;
        pos[i * 3 + 2] += velocities[i * 3 + 2] * delta;
        // Drift and decelerate
        velocities[i * 3]     *= 1 - delta * 0.8;
        velocities[i * 3 + 1] *= 1 - delta * 0.25;
        velocities[i * 3 + 2] *= 1 - delta * 0.8;
      }
    }
    mesh.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={mesh} geometry={geo} position={position}>
      <pointsMaterial
        size={0.06}
        color="#ff9030"
        transparent
        opacity={0.85}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        sizeAttenuation
      />
    </points>
  );
}
