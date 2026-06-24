import { type ReactNode } from "react";
import * as THREE from "three";

export const GROUND_Y = 0.74;

export const Z = {
  grass:      "#4a7c3f",
  grassDark:  "#3a6632",
  grassLight: "#5d9450",
  dirt:       "#9a8060",
  dirtDark:   "#7a6848",
  wood:       "#6b4a30",
  woodDark:   "#523820",
  bark:       "#4a3828",
  rock:       "#7a7570",
  rockDark:   "#5a5550",
  rockLight:  "#9a9590",
  foliage1:   "#3d6b38",
  foliage2:   "#4a7a42",
  foliage3:   "#5a8a50",
  foliage4:   "#6a9a5a",
  flower:     ["#d4a830", "#c06060", "#48a070", "#5088a8", "#c890a0"] as const,
};

export function damp(current: number, target: number, lambda: number, delta: number) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * delta));
}

interface MeshProps {
  color: string;
  emissive?: string;
  emissiveIntensity?: number;
  roughness?: number;
  metalness?: number;
  transparent?: boolean;
  opacity?: number;
  castShadow?: boolean;
  receiveShadow?: boolean;
  position?: [number, number, number];
  rotation?: [number, number, number];
  scale?: number | [number, number, number];
  children: ReactNode;
}

export function M({
  color,
  emissive,
  emissiveIntensity = 0,
  roughness = 0.88,
  metalness = 0.02,
  transparent,
  opacity = 1,
  castShadow,
  receiveShadow,
  position,
  rotation,
  scale,
  children,
}: MeshProps) {
  return (
    <mesh
      position={position}
      rotation={rotation}
      scale={scale}
      castShadow={castShadow}
      receiveShadow={receiveShadow}
    >
      {children}
      <meshStandardMaterial
        color={color}
        roughness={roughness}
        metalness={metalness}
        emissive={emissive ?? "#000000"}
        emissiveIntensity={emissiveIntensity}
        transparent={transparent}
        opacity={opacity}
        envMapIntensity={0.35}
      />
    </mesh>
  );
}

export const Stylized = M;
