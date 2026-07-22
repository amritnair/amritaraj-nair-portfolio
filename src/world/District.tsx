import { useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CuboidCollider, CylinderCollider } from "@react-three/rapier";
import BlockText from "./BlockText";
import type { Zone } from "./content";
import { useWorld } from "./store";

/** One resume district: a lit plaza, a ring of pylons and a block-letter sign. */
export default function District({ zone }: { zone: Zone }) {
  const [x, z] = zone.position;
  const active = useWorld((s) => s.activeZone === zone.id);
  const visited = useWorld((s) => s.visited.includes(zone.id));
  const sign = useRef<THREE.Group>(null);
  const beam = useRef<THREE.Mesh>(null);
  const light = useRef<THREE.PointLight>(null);

  // Face the sign back down its road toward the central plaza.
  const facing = useMemo(() => Math.atan2(-x, -z), [x, z]);
  const pylons = useMemo(
    () =>
      Array.from({ length: 10 }).map((_, i) => {
        const angle = (i / 10) * Math.PI * 2 + Math.PI / 10;
        return [Math.cos(angle) * (zone.radius + 4), Math.sin(angle) * (zone.radius + 4)] as const;
      }),
    [zone.radius],
  );

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    if (sign.current) {
      sign.current.position.y = 16 + Math.sin(t * 0.9) * 0.5;
      sign.current.rotation.y = facing + Math.sin(t * 0.4) * 0.05;
    }
    const pulse = active ? 1.5 + Math.sin(t * 4) * 0.35 : 1;
    if (beam.current) {
      const material = beam.current.material as THREE.MeshBasicMaterial;
      material.opacity = 0.1 * pulse + (visited ? 0.05 : 0);
    }
    if (light.current) light.current.intensity = 52 * pulse;
  });

  return (
    <>
      {/* Kept as a top-level sibling rather than nested in the offset group
          below: rigid bodies position themselves, so nesting would double the
          offset on the colliders. */}
      <RigidBody type="fixed" colliders={false} position={[x, 0, z]}>
        {/* Raised deck */}
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.05, 0]} receiveShadow>
          <circleGeometry args={[zone.radius + 6, 56]} />
          <meshStandardMaterial color="#4a4688" roughness={0.85} />
        </mesh>
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.07, 0]} receiveShadow>
          <ringGeometry args={[zone.radius - 1.2, zone.radius, 56]} />
          <meshStandardMaterial
            color={zone.glow}
            emissive={zone.glow}
            emissiveIntensity={active ? 2.6 : 1.7}
            toneMapped={false}
          />
        </mesh>

        {pylons.map(([px, pz], i) => (
          <CylinderCollider key={i} args={[3.5, 0.8]} position={[px, 3.5, pz]} />
        ))}
      </RigidBody>

      <group position={[x, 0, z]}>
        {/* Pylons */}
        {pylons.map(([px, pz], i) => (
          <group key={i} position={[px, 0, pz]}>
            <mesh castShadow receiveShadow position={[0, 3.4, 0]}>
              <boxGeometry args={[1.5, 6.8, 1.5]} />
              <meshStandardMaterial color="#37336b" roughness={0.7} flatShading />
            </mesh>
            <mesh position={[0, 7.2, 0]}>
              <octahedronGeometry args={[0.85, 0]} />
              <meshStandardMaterial
                color={zone.glow}
                emissive={zone.color}
                emissiveIntensity={3.2}
                toneMapped={false}
              />
            </mesh>
          </group>
        ))}

        {/* Light shaft */}
        <mesh ref={beam} position={[0, 22, 0]}>
          <cylinderGeometry args={[zone.radius - 2, zone.radius + 1, 44, 24, 1, true]} />
          <meshBasicMaterial
            color={zone.glow}
            transparent
            opacity={0.12}
            side={THREE.DoubleSide}
            depthWrite={false}
            toneMapped={false}
          />
        </mesh>

        <pointLight ref={light} position={[0, 12, 0]} color={zone.color} distance={70} decay={2} />

        <group ref={sign}>
          <BlockText
            size={0.95}
            depth={1.2}
            color={zone.glow}
            emissive={zone.color}
            emissiveIntensity={active ? 2.2 : 1.1}
            wave={0.25}
          >
            {zone.sign}
          </BlockText>
        </group>
      </group>
    </>
  );
}

/** Knockable trophies — pure toy, they respawn when you drive off. */
export function TrophyPins({ position }: { position: [number, number] }) {
  // Rigid bodies are placed in world space — a parent <group> transform would
  // move the meshes but not the colliders, so the offsets are baked in here.
  const pins = useMemo(() => {
    const out: [number, number, number][] = [];
    for (let row = 0; row < 4; row += 1) {
      for (let col = 0; col <= row; col += 1) {
        out.push([position[0] + (col - row / 2) * 2.4, 1.4, position[1] + row * 2.2 - 3]);
      }
    }
    return out;
  }, [position]);

  return (
    <>
      {pins.map((pin, i) => (
        <Trophy key={i} position={pin} />
      ))}
    </>
  );
}

function Trophy({ position }: { position: [number, number, number] }) {
  const body = useRef<React.ComponentRef<typeof RigidBody>>(null);
  const home = useRef(new THREE.Vector3(...position));

  useFrame(() => {
    const rb = body.current;
    if (!rb) return;
    const p = rb.translation();
    // Recover if it gets flung off the deck or falls through the world.
    if (
      p.y < -6 ||
      new THREE.Vector3(p.x, 0, p.z).distanceTo(
        new THREE.Vector3(home.current.x, 0, home.current.z),
      ) > 40
    ) {
      rb.setTranslation({ x: home.current.x, y: home.current.y + 6, z: home.current.z }, true);
      rb.setLinvel({ x: 0, y: 0, z: 0 }, true);
      rb.setAngvel({ x: 0, y: 0, z: 0 }, true);
    }
  });

  return (
    <RigidBody
      ref={body}
      position={position}
      colliders={false}
      mass={0.4}
      restitution={0.35}
      linearDamping={0.4}
      angularDamping={0.6}
    >
      <CuboidCollider args={[0.45, 1.3, 0.45]} />
      <mesh castShadow position={[0, -1.15, 0]}>
        <boxGeometry args={[1.1, 0.3, 1.1]} />
        <meshStandardMaterial color="#3a3468" roughness={0.6} flatShading />
      </mesh>
      <mesh castShadow position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.16, 0.24, 1.0, 6]} />
        <meshStandardMaterial color="#ffc861" metalness={0.8} roughness={0.25} flatShading />
      </mesh>
      <mesh castShadow position={[0, 0.45, 0]}>
        <cylinderGeometry args={[0.62, 0.3, 1.2, 8]} />
        <meshStandardMaterial
          color="#ffd67a"
          emissive="#ff9d2e"
          emissiveIntensity={0.9}
          metalness={0.85}
          roughness={0.2}
          flatShading
        />
      </mesh>
      {[-0.72, 0.72].map((x) => (
        <mesh key={x} position={[x, 0.5, 0]} rotation={[0, 0, x > 0 ? -0.5 : 0.5]}>
          <torusGeometry args={[0.3, 0.08, 6, 10, Math.PI]} />
          <meshStandardMaterial color="#ffd67a" metalness={0.85} roughness={0.2} />
        </mesh>
      ))}
    </RigidBody>
  );
}

/** A launch ramp. There is no reason for this other than that it is fun. */
export function Ramp({
  position,
  rotation = 0,
}: {
  position: [number, number];
  rotation?: number;
}) {
  return (
    <RigidBody
      type="fixed"
      colliders="hull"
      position={[position[0], 0, position[1]]}
      rotation={[0, rotation, 0]}
    >
      <mesh castShadow receiveShadow rotation={[-0.3, 0, 0]} position={[0, 1.3, 0]}>
        <boxGeometry args={[9, 0.6, 12]} />
        <meshStandardMaterial color="#5b56a4" roughness={0.7} flatShading />
      </mesh>
      <mesh position={[0, 1.72, -5.4]} rotation={[-0.3, 0, 0]}>
        <boxGeometry args={[9, 0.12, 1.2]} />
        <meshStandardMaterial
          color="#ffd67a"
          emissive="#ffae3a"
          emissiveIntensity={2.5}
          toneMapped={false}
        />
      </mesh>
    </RigidBody>
  );
}

/** Stacked crates in the plaza, there to be scattered. */
export function CrateStack({ position }: { position: [number, number] }) {
  const crates = useMemo(() => {
    const out: [number, number, number][] = [];
    for (let level = 0; level < 3; level += 1) {
      const span = 3 - level;
      for (let i = 0; i < span; i += 1) {
        out.push([position[0] + (i - (span - 1) / 2) * 1.7, 0.85 + level * 1.6, position[1]]);
      }
    }
    return out;
  }, [position]);

  return (
    <>
      {crates.map((crate, i) => (
        <RigidBody key={i} position={crate} colliders={false} mass={0.5} restitution={0.2}>
          <CuboidCollider args={[0.78, 0.78, 0.78]} />
          <mesh castShadow receiveShadow>
            <boxGeometry args={[1.56, 1.56, 1.56]} />
            <meshStandardMaterial color="#6d5cc4" roughness={0.65} flatShading />
          </mesh>
          <mesh>
            <boxGeometry args={[1.62, 0.16, 1.62]} />
            <meshStandardMaterial
              color="#c3b4ff"
              emissive="#8f7bff"
              emissiveIntensity={1.4}
              toneMapped={false}
            />
          </mesh>
        </RigidBody>
      ))}
    </>
  );
}
