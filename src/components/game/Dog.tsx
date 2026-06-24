import { useRef, forwardRef, useImperativeHandle, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";
import { SkeletonUtils } from "three-stdlib";

/* OpenDog — Mixamo-compatible canine rig (CC0)
   https://github.com/Sneaky-amxx/Godot4-MixamoLibraries */
const MODEL_URL = `${import.meta.env.BASE_URL}models/dog.glb`;

useGLTF.preload(MODEL_URL);

const CLIPS = {
  idle: "idle-loop",
  walk: "walk-loop",
  run:  "run-loop",
  sit:  "sit-loop",
} as const;

export interface DogHandle {
  group: THREE.Group | null;
}

interface DogProps {
  moving: boolean;
  running: boolean;
  furColor?: string;
  innerColor?: string;
  earStyle?: "floppy" | "pointy";
  bodyScale?: number;
  npc?: boolean;
  facingYaw?: number;
}

function tintMaterials(root: THREE.Object3D, color: string) {
  const c = new THREE.Color(color);
  root.traverse((child) => {
    const mesh = child as THREE.Mesh;
    if (!mesh.isMesh) return;
    const mats = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
    mats.forEach((mat) => {
      if (mat && "color" in mat) (mat as THREE.MeshStandardMaterial).color.copy(c);
    });
  });
}

export const Dog = forwardRef<DogHandle, DogProps>(({
  moving, running,
  furColor,
  bodyScale = 1,
  npc = false,
  facingYaw = 0,
}, ref) => {
  const groupRef = useRef<THREE.Group>(null);
  const activeClip = useRef<string | null>(null);

  const { scene, animations } = useGLTF(MODEL_URL);
  const model = useMemo(() => {
    const clone = SkeletonUtils.clone(scene) as THREE.Group;
    clone.traverse((child) => {
      const mesh = child as THREE.Mesh;
      if (mesh.isMesh) {
        mesh.castShadow = true;
        mesh.receiveShadow = true;
      }
    });
    if (furColor) tintMaterials(clone, furColor);
    return clone;
  }, [scene, furColor]);

  const { actions, mixer } = useAnimations(animations, groupRef);

  useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

  const targetClip = npc
    ? CLIPS.sit
    : running && moving
      ? CLIPS.run
      : moving
        ? CLIPS.walk
        : CLIPS.idle;

  useEffect(() => {
    const next = actions[targetClip];
    if (!next) return;

    const prevName = activeClip.current;
    const prev = prevName ? actions[prevName] : null;
    if (prevName === targetClip) return;

    next.reset()
      .setLoop(THREE.LoopRepeat, Infinity)
      .setEffectiveTimeScale(targetClip === CLIPS.run ? 1.05 : 1)
      .fadeIn(0.2)
      .play();
    prev?.fadeOut(0.2);
    activeClip.current = targetClip;
  }, [actions, targetClip]);

  useFrame((_, delta) => {
    mixer?.update(delta);
  });

  return (
    <group ref={groupRef} rotation={[0, facingYaw, 0]} scale={bodyScale}>
      <primitive object={model} />
    </group>
  );
});

Dog.displayName = "Dog";
