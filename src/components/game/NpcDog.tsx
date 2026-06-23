import { useRef } from "react";
import { Text } from "@react-three/drei";
import { Dog } from "./Dog";
import type { DogHandle } from "./Dog";
import type { NpcConfig } from "./npcData";
import { Signpost } from "./World";
import { Stylized } from "./zeldaStyle";

interface NpcDogProps {
  npc: NpcConfig;
  isNear: boolean;
}

export default function NpcDog({ npc, isNear }: NpcDogProps) {
  const dogRef = useRef<DogHandle>(null);
  const signX = npc.position[0] + Math.sin(npc.facingYaw) * 1.8;
  const signZ = npc.position[2] + Math.cos(npc.facingYaw) * 1.8;

  return (
    <group position={npc.position}>
      <Dog
        ref={dogRef}
        moving={false}
        running={false}
        furColor={npc.furColor}
        innerColor={npc.innerColor}
        earStyle={npc.earStyle}
        bodyScale={npc.bodyScale}
        npc={true}
        facingYaw={npc.facingYaw}
      />

      {npc.id === "contact" && (
        <>
          {[
            [0.1, 0.58, 0.18], [-0.12, 0.52, 0.22], [0.08, 0.44, -0.05],
            [-0.05, 0.64, 0.08], [0.18, 0.46, 0.0], [-0.18, 0.4, -0.1],
          ].map(([x, y, z], i) => (
            <group key={i} position={[x, y, z]} scale={0.06 + (i % 3) * 0.02}>
              <Stylized color="#1a1410">
                <sphereGeometry args={[1, 6, 6]} />
              </Stylized>
            </group>
          ))}
        </>
      )}

      {npc.id === "resume" && (
        <>
          {([0.09, -0.09] as const).map((sx, i) => (
            <group key={i} position={[sx, 0.88, 0.52]} scale={[0.07, 0.07, 0.03]}>
              <Stylized color="#8a7a6a">
                <sphereGeometry args={[1, 6, 6]} />
              </Stylized>
            </group>
          ))}
        </>
      )}

      <Signpost x={signX - npc.position[0]} z={signZ - npc.position[2]} color={npc.accentColor} label={npc.name} />

      <Text
        position={[0, 1.75, 0]}
        fontSize={0.2}
        color={isNear ? npc.accentColor : "#fff8e8"}
        anchorX="center"
        anchorY="middle"
       
        outlineColor="#1a2818"
      >
        {npc.name}
      </Text>
      <Text
        position={[0, 1.5, 0]}
        fontSize={0.12}
        color="#d8e8c8"
        anchorX="center"
        anchorY="middle"
       
        outlineColor="#1a2818"
      >
        {npc.breed}
      </Text>

      {isNear && (
        <Text
          position={[0, 2.05, 0]}
          fontSize={0.16}
          color="#ffe880"
          anchorX="center"
          anchorY="middle"
         
          outlineColor="#1a2818"
        >
          ▼ Press E
        </Text>
      )}
    </group>
  );
}
