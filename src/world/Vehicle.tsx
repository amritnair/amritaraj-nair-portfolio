import { useRef } from "react";
import * as THREE from "three";
import { NEON } from "./palette";

/**
 * The player's car: a low-slung light-runner. Almost all of its read comes
 * from emissive trim rather than form — in a night world lit mostly by bloom,
 * a dark wedge with bright edges is legible from across the island in a way
 * that a detailed but unlit model never is.
 */
export type VehicleRig = {
  /** Front-left, front-right, back-left, back-right. */
  wheels: (THREE.Group | null)[];
  /** The two steerable front hubs. */
  hubs: (THREE.Group | null)[];
  /** Thruster meshes, brightened under throttle. */
  thrusters: (THREE.Mesh | null)[];
  thrusterLight: THREE.PointLight | null;
};

export const useVehicleRig = () =>
  useRef<VehicleRig>({
    wheels: [null, null, null, null],
    hubs: [null, null],
    thrusters: [null, null],
    thrusterLight: null,
  });

const SHELL = "#10122c";
const SHELL_LIGHT = "#1b1f45";
const TRIM = NEON.cyan;
const ACCENT = NEON.magenta;

type AnimateArgs = {
  /** Signed forward speed, world units/sec. */
  speed: number;
  steer: number;
  throttle: number;
  brake: boolean;
  delta: number;
};

export function animateVehicle(
  rig: VehicleRig,
  { speed, steer, throttle, brake, delta }: AnimateArgs,
) {
  const spin = speed * delta * 2.2;
  rig.wheels.forEach((wheel) => {
    if (wheel) wheel.rotation.x -= spin;
  });

  // Front hubs ease to the steering angle instead of snapping to it.
  const steerRate = 1 - Math.pow(0.0002, delta);
  rig.hubs.forEach((hub) => {
    if (hub) hub.rotation.y = THREE.MathUtils.lerp(hub.rotation.y, steer * 0.42, steerRate);
  });

  // Thrusters flare on power and glow red-hot under braking.
  const load = brake ? 1 : Math.max(throttle, 0);
  const target = 3 + load * 9 + Math.min(Math.abs(speed) / 26, 1) * 4;
  const rate = 1 - Math.pow(0.004, delta);
  rig.thrusters.forEach((mesh) => {
    if (!mesh) return;
    const material = mesh.material as THREE.MeshStandardMaterial;
    material.emissiveIntensity = THREE.MathUtils.lerp(material.emissiveIntensity, target, rate);
    material.color.set(brake ? "#ff3b6b" : TRIM);
    material.emissive.set(brake ? "#ff2a5f" : TRIM);
  });
  if (rig.thrusterLight) {
    rig.thrusterLight.intensity = THREE.MathUtils.lerp(
      rig.thrusterLight.intensity,
      8 + load * 26,
      rate,
    );
    rig.thrusterLight.color.set(brake ? "#ff2a5f" : TRIM);
  }
}

/** Thin glowing strip, the motif the whole vehicle is built from. */
function Strip({
  position,
  args,
  color = TRIM,
  intensity = 4,
  rotation,
}: {
  position: [number, number, number];
  args: [number, number, number];
  color?: string;
  intensity?: number;
  rotation?: [number, number, number];
}) {
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={intensity}
        toneMapped={false}
      />
    </mesh>
  );
}

export function VehicleShell({ rig }: { rig: React.MutableRefObject<VehicleRig> }) {
  return (
    <group>
      {/* Main hull — wide, flat and low. */}
      <mesh castShadow receiveShadow position={[0, 0.02, 0]}>
        <boxGeometry args={[1.96, 0.44, 4.0]} />
        <meshStandardMaterial color={SHELL} roughness={0.28} metalness={0.75} flatShading />
      </mesh>
      {/* Nose, stepped down and narrowed so the front reads as a blade. */}
      <mesh castShadow position={[0, -0.06, -2.14]}>
        <boxGeometry args={[1.62, 0.28, 0.72]} />
        <meshStandardMaterial color={SHELL} roughness={0.3} metalness={0.7} flatShading />
      </mesh>
      <mesh castShadow position={[0, -0.13, -2.62]}>
        <boxGeometry args={[1.24, 0.16, 0.42]} />
        <meshStandardMaterial color={SHELL_LIGHT} roughness={0.3} metalness={0.7} flatShading />
      </mesh>
      {/* Shoulders over the rear wheels. */}
      {[-0.94, 0.94].map((x) => (
        <mesh key={x} castShadow position={[x, 0.16, 1.28]}>
          <boxGeometry args={[0.42, 0.5, 1.5]} />
          <meshStandardMaterial color={SHELL_LIGHT} roughness={0.3} metalness={0.7} flatShading />
        </mesh>
      ))}

      {/* Canopy: a single tinted wedge, no frame — frames read as clutter at
          this scale and kill the silhouette. */}
      <mesh castShadow position={[0, 0.42, -0.16]} rotation={[0.06, 0, 0]}>
        <boxGeometry args={[1.32, 0.46, 1.9]} />
        <meshStandardMaterial
          color="#0d1b3a"
          emissive={TRIM}
          emissiveIntensity={0.35}
          roughness={0.06}
          metalness={0.9}
          transparent
          opacity={0.86}
        />
      </mesh>

      {/* Flank strips — the line that says "light-runner". */}
      {[-1.0, 1.0].map((x) => (
        <Strip key={x} position={[x, 0.06, 0.1]} args={[0.06, 0.1, 3.5]} />
      ))}
      {/* Belly seam and nose blade */}
      <Strip position={[0, -0.2, 0.1]} args={[1.3, 0.06, 3.2]} intensity={2.4} color={ACCENT} />
      <Strip position={[0, -0.13, -2.82]} args={[1.16, 0.09, 0.09]} intensity={7} />
      {/* Spine running back to the tail */}
      <Strip position={[0, 0.25, 1.5]} args={[0.9, 0.07, 0.07]} intensity={5} color={ACCENT} />

      {/* Tail light bar */}
      <Strip position={[0, 0.16, 2.0]} args={[1.7, 0.12, 0.08]} intensity={6} color={ACCENT} />

      {/* Thrusters */}
      {[-0.52, 0.52].map((x, i) => (
        <mesh
          key={x}
          position={[x, 0.02, 2.06]}
          rotation={[Math.PI / 2, 0, 0]}
          ref={(el) => (rig.current.thrusters[i] = el)}
        >
          <cylinderGeometry args={[0.26, 0.26, 0.12, 12]} />
          <meshStandardMaterial
            color={TRIM}
            emissive={TRIM}
            emissiveIntensity={4}
            toneMapped={false}
          />
        </mesh>
      ))}
      <pointLight
        position={[0, 0.1, 2.5]}
        distance={14}
        decay={2}
        intensity={10}
        color={TRIM}
        ref={(el) => (rig.current.thrusterLight = el)}
      />

      {/* Headlights, plus the cone that actually lights the road. */}
      {[-0.5, 0.5].map((x) => (
        <mesh key={x} position={[x, -0.06, -2.48]}>
          <boxGeometry args={[0.34, 0.12, 0.1]} />
          <meshStandardMaterial
            color="#dff4ff"
            emissive="#bfe9ff"
            emissiveIntensity={6}
            toneMapped={false}
          />
        </mesh>
      ))}
      <spotLight
        position={[0, 0.1, -2.3]}
        target-position={[0, -1, -16]}
        angle={0.6}
        penumbra={0.7}
        intensity={44}
        distance={34}
        color="#d8f2ff"
      />
      {/* Underglow — the car sits in its own pool of light. */}
      <pointLight position={[0, -0.4, 0]} distance={9} decay={2} intensity={9} color={ACCENT} />

      <Wheels rig={rig} />
    </group>
  );
}

function Wheels({ rig }: { rig: React.MutableRefObject<VehicleRig> }) {
  const mounts: [number, number, number][] = [
    [-1.02, -0.3, -1.32],
    [1.02, -0.3, -1.32],
    [-1.02, -0.3, 1.36],
    [1.02, -0.3, 1.36],
  ];

  return (
    <>
      {mounts.map(([x, y, z], index) => (
        <group
          key={index}
          position={[x, y, z]}
          ref={(el) => {
            if (index < 2) rig.current.hubs[index] = el;
          }}
        >
          <group ref={(el) => (rig.current.wheels[index] = el)}>
            {/* Tyre */}
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.54, 0.54, 0.36, 14]} />
              <meshStandardMaterial color="#0c0e1f" roughness={0.9} flatShading />
            </mesh>
            {/* Glowing rim, lightcycle-style, on the outboard face only. */}
            <mesh
              rotation={[Math.PI / 2, 0, 0]}
              position={[x > 0 ? 0.19 : -0.19, 0, 0]}
              scale={[1, 1, 1]}
            >
              <torusGeometry args={[0.34, 0.055, 8, 20]} />
              <meshStandardMaterial
                color={TRIM}
                emissive={TRIM}
                emissiveIntensity={4.5}
                toneMapped={false}
              />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]} position={[x > 0 ? 0.2 : -0.2, 0, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 0.06, 8]} />
              <meshStandardMaterial color="#8fa8ff" metalness={0.9} roughness={0.2} flatShading />
            </mesh>
          </group>
        </group>
      ))}
    </>
  );
}
