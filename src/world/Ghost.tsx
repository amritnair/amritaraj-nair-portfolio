import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { NEON } from "./palette";
import { ghostAt, hasGhost } from "./ghostLap";
import { telemetry } from "./store";

/**
 * Your best lap, replayed alongside you.
 *
 * Deliberately not the car model: a translucent shell in a single flat colour
 * reads instantly as "not you" from any angle, and can't be confused with the
 * real car in a mirror-image corner. It only exists while a lap is running.
 */
export default function Ghost() {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    const node = group.current;
    if (!node) return;

    const pose = telemetry.raceRunning && hasGhost() ? ghostAt(telemetry.raceTime) : null;
    if (!pose) {
      node.visible = false;
      return;
    }
    node.visible = true;
    node.position.set(pose.x, pose.y, pose.z);
    node.rotation.y = pose.h;
  });

  return (
    <group ref={group} visible={false}>
      <mesh position={[0, 0.02, 0]}>
        <boxGeometry args={[1.96, 0.44, 4.0]} />
        <meshBasicMaterial
          color={NEON.cyan}
          transparent
          opacity={0.2}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      <mesh position={[0, 0.42, -0.16]}>
        <boxGeometry args={[1.32, 0.46, 1.9]} />
        <meshBasicMaterial
          color={NEON.cyan}
          transparent
          opacity={0.16}
          depthWrite={false}
          toneMapped={false}
        />
      </mesh>
      {/* Outline strips, so it stays legible against a bright deck. */}
      {[-1, 1].map((x) => (
        <mesh key={x} position={[x, 0.06, 0.1]}>
          <boxGeometry args={[0.08, 0.12, 3.6]} />
          <meshBasicMaterial color={NEON.cyan} transparent opacity={0.75} toneMapped={false} />
        </mesh>
      ))}
    </group>
  );
}
