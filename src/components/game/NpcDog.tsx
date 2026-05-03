import { useRef } from "react";
import { Text } from "@react-three/drei";
import { Dog } from "./Dog";
import type { DogHandle } from "./Dog";
import type { NpcConfig } from "./npcData";

interface NpcDogProps {
  npc: NpcConfig;
  isNear: boolean;
}

export default function NpcDog({ npc, isNear }: NpcDogProps) {
  const dogRef = useRef<DogHandle>(null);

  return (
    <group position={npc.position}>
      {/* The dog mesh */}
      <Dog
        ref={dogRef}
        moving={false}
        running={false}
        furColor={npc.furColor}
        innerColor={npc.innerColor}
        earStyle={npc.earStyle}
        bodyScale={npc.bodyScale}
        npc={true}
      />

      {/* Dalmatian spots overlay — only for Pixel */}
      {npc.id === "contact" && (
        <>
          {[
            [0.1, 0.55, 0.18], [-0.12, 0.50, 0.22], [0.08, 0.42, -0.05],
            [-0.05, 0.60, 0.08], [0.18, 0.44, 0.0], [-0.18, 0.38, -0.1],
          ].map(([x, y, z], i) => (
            <mesh key={i} position={[x, y, z]} scale={0.06 + (i % 3) * 0.02}>
              <sphereGeometry args={[1, 8, 6]} />
              <meshStandardMaterial color="#111" roughness={0.9} />
            </mesh>
          ))}
        </>
      )}

      {/* Husky eye markings — only for Luna */}
      {npc.id === "resume" && (
        <>
          <mesh position={[0.09, 0.84, 0.50]} scale={[0.07, 0.07, 0.03]}>
            <sphereGeometry args={[1, 8, 6]} />
            <meshStandardMaterial color="#8a7a6a" roughness={0.9} />
          </mesh>
          <mesh position={[-0.09, 0.84, 0.50]} scale={[0.07, 0.07, 0.03]}>
            <sphereGeometry args={[1, 8, 6]} />
            <meshStandardMaterial color="#8a7a6a" roughness={0.9} />
          </mesh>
        </>
      )}

      {/* Name tag — floats above */}
      <Text
        position={[0, 1.65, 0]}
        fontSize={0.18}
        color={isNear ? npc.accentColor : "rgba(255,255,255,0.75)"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.012}
        outlineColor="#000"
      >
        {npc.name}
      </Text>
      <Text
        position={[0, 1.42, 0]}
        fontSize={0.11}
        color="rgba(200,200,200,0.7)"
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.008}
        outlineColor="#000"
      >
        {npc.breed}
      </Text>

      {/* Prompt when near */}
      {isNear && (
        <Text
          position={[0, 1.9, 0]}
          fontSize={0.15}
          color={npc.accentColor}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.01}
          outlineColor="#000"
        >
          Press E to talk
        </Text>
      )}
    </group>
  );
}
