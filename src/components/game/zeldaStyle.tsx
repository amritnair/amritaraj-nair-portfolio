import { type ReactNode } from "react";
import * as THREE from "three";

export const GROUND_Y = 0.74;

export const Z = {
  grass:      "#4e9638",
  grassDark:  "#3a7830",
  grassLight: "#62a848",
  dirt:       "#b89868",
  dirtDark:   "#907850",
  wood:       "#7a5030",
  woodDark:   "#5c3a20",
  bark:       "#4a3218",
  rock:       "#8a8278",
  rockDark:   "#686058",
  rockLight:  "#a8a098",
  foliage1:   "#2a5828",
  foliage2:   "#3a7030",
  foliage3:   "#4a8838",
  foliage4:   "#5a9848",
  flower:     ["#d4a840", "#c86068", "#48a878", "#5090b0", "#d8a0b8"] as const,
};

export function damp(current: number, target: number, lambda: number, delta: number) {
  return THREE.MathUtils.lerp(current, target, 1 - Math.exp(-lambda * delta));
}

/** Place a box so its bottom sits on y=0 in local space */
export function boxBottomY(height: number) {
  return height / 2;
}

interface StylizedProps {
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

export function Stylized({
  color,
  emissive,
  emissiveIntensity = 0,
  roughness = 0.82,
  metalness = 0,
  transparent,
  opacity = 1,
  castShadow,
  receiveShadow,
  position,
  rotation,
  scale,
  children,
}: StylizedProps) {
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
      />
    </mesh>
  );
}
