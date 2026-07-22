import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { layoutText } from "./blockFont";

type Props = {
  children: string;
  position?: [number, number, number];
  rotation?: [number, number, number];
  /** Size of one font pixel in world units. */
  size?: number;
  depth?: number;
  color?: string;
  emissive?: string;
  emissiveIntensity?: number;
  /** Cubes bob on a sine wave travelling left to right. */
  wave?: number;
};

const dummy = new THREE.Object3D();

/**
 * Extruded bitmap-font text built from a single instanced mesh, so a whole
 * skyline of signage costs one draw call each.
 */
export default function BlockText({
  children,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  size = 1,
  depth = 1,
  color = "#ffffff",
  emissive = "#000000",
  emissiveIntensity = 0,
  wave = 0,
}: Props) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const { cubes } = useMemo(() => layoutText(children), [children]);

  const write = (time: number) => {
    if (!mesh.current) return;
    cubes.forEach((cube, i) => {
      const lift = wave ? Math.sin(time * 1.6 + cube.x * 0.35) * wave : 0;
      dummy.position.set(cube.x * size, cube.y * size + lift, 0);
      dummy.scale.setScalar(1);
      dummy.updateMatrix();
      mesh.current!.setMatrixAt(i, dummy.matrix);
    });
    mesh.current.instanceMatrix.needsUpdate = true;
  };

  useLayoutEffect(() => write(0));
  useFrame(({ clock }) => {
    if (wave) write(clock.elapsedTime);
  });

  return (
    <instancedMesh
      ref={mesh}
      args={[undefined as never, undefined as never, cubes.length]}
      position={position}
      rotation={rotation}
      castShadow
      receiveShadow
    >
      <boxGeometry args={[size * 0.96, size * 0.96, depth]} />
      <meshStandardMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        roughness={0.35}
        metalness={0.1}
        flatShading
      />
    </instancedMesh>
  );
}
