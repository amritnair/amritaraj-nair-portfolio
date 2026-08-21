import { useRef } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { ACESFilmicToneMapping } from "three";
import { VehicleShell, useVehicleRig } from "../Vehicle";
import { NEON } from "../palette";
import { PAINT_BY_ID, PAINTS } from "../garage";

/**
 * A turntable of the actual car, in its own canvas.
 *
 * It renders the same `VehicleShell` the world does rather than a mock-up, so
 * a paint or body kit is shown exactly as it will look on the road — the whole
 * point of picking one here instead of guessing from a swatch.
 *
 * Deliberately a second, tiny canvas rather than a camera move in the main
 * scene: the world keeps running behind the panel, and stealing its camera
 * would mean putting it back afterwards without disturbing the drive.
 */
export default function CarPreview({
  paint,
  design,
  wheel,
}: {
  paint: string;
  design: string;
  wheel: string;
}) {
  const resolved = PAINT_BY_ID[paint] ?? PAINTS[0];

  return (
    <Canvas
      dpr={[1, 1.5]}
      shadows
      gl={{ antialias: true, toneMapping: ACESFilmicToneMapping }}
      camera={{ fov: 32, position: [8.4, 4.2, 9.6], near: 0.1, far: 60 }}
      style={{ width: "100%", height: "100%" }}
    >
      <color attach="background" args={["#0b0920"]} />
      <fogExp2 attach="fog" args={["#0b0920", 0.055]} />

      <ambientLight intensity={0.38} color="#7f76c8" />
      {/* Two coloured key lights: the car is mostly dark panels, and a single
          white key flattens it into a silhouette. */}
      {/* Soft: a hard key on a metallic canopy turns it into a white slab. */}
      <directionalLight position={[7, 5.5, 5]} intensity={0.75} color="#cfe4ff" castShadow />
      <pointLight position={[-6, 3, -4]} intensity={70} distance={22} color={NEON.magenta} />
      <pointLight position={[5, 2, -5]} intensity={55} distance={20} color={NEON.cyan} />

      <Turntable paint={resolved} design={design} wheel={wheel} />
      <Platform />
    </Canvas>
  );
}

function Turntable({
  paint,
  design,
  wheel,
}: {
  paint: (typeof PAINTS)[number];
  design: string;
  wheel: string;
}) {
  const rig = useVehicleRig();
  const group = useRef<THREE.Group>(null);

  useFrame(({ clock }, delta) => {
    if (!group.current) return;
    group.current.rotation.y += delta * 0.35;
    // A touch of float, so a static model doesn't read as a still image.
    group.current.position.y = Math.sin(clock.elapsedTime * 0.9) * 0.06;
    // Spin the wheels slowly — parked but alive.
    rig.current.wheels.forEach((wheel) => {
      if (wheel) wheel.rotation.x -= delta * 0.6;
    });
  });

  return (
    <group ref={group} position={[0, 0.1, 0]} scale={0.78}>
      <VehicleShell rig={rig} paint={paint} design={design} wheel={wheel} />
    </group>
  );
}

/** Lit disc under the car, plus a grid that fades out into the fog. */
function Platform() {
  return (
    <group position={[0, -0.86, 0]}>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <circleGeometry args={[4.2, 48]} />
        <meshStandardMaterial color="#171338" roughness={0.45} metalness={0.5} />
      </mesh>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.02, 0]}>
        <ringGeometry args={[4.0, 4.25, 64]} />
        <meshStandardMaterial
          color={NEON.cyan}
          emissive={NEON.cyan}
          emissiveIntensity={2.4}
          toneMapped={false}
        />
      </mesh>
      <gridHelper args={[40, 40, NEON.deckEdge, NEON.deckEdge]} position={[0, -0.01, 0]} />
    </group>
  );
}
