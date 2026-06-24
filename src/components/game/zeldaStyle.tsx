import { type ReactNode } from "react";
import * as THREE from "three";

export const GROUND_Y = 0.74;

export const Z = {
  grass:      "#5cb848",
  grassDark:  "#449838",
  grassLight: "#70cc58",
  dirt:       "#c8a870",
  dirtDark:   "#a08050",
  wood:       "#8a5830",
  woodDark:   "#6a4020",
  bark:       "#5c3a1e",
  rock:       "#9a9488",
  rockDark:   "#706860",
  rockLight:  "#b0a898",
  foliage1:   "#3a7830",
  foliage2:   "#4a9038",
  foliage3:   "#5aa848",
  foliage4:   "#6ac050",
  flower:     ["#e8c040", "#e06068", "#50b888", "#58a0c8", "#e0a0b8"] as const,
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

/** Plain lit mesh — always renders outside physics bodies */
export function M({
  color,
  emissive,
  emissiveIntensity = 0,
  roughness = 0.78,
  metalness = 0,
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
      />
    </mesh>
  );
}

/** @deprecated use M */
export const Stylized = M;
