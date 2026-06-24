import { useRef, forwardRef, useImperativeHandle } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { M, damp } from "./zeldaStyle";

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

const LEG_PIVOT_Y = 0.28;

export const Dog = forwardRef<DogHandle, DogProps>(({
  moving, running,
  furColor   = "#e8e2d8",
  innerColor = "#d8d0c4",
  earStyle   = "floppy",
  bodyScale  = 1,
  npc        = false,
  facingYaw  = 0,
}, ref) => {
  const groupRef  = useRef<THREE.Group>(null);
  const bodyGroup = useRef<THREE.Group>(null);
  const headGroup = useRef<THREE.Group>(null);
  const tailGroup = useRef<THREE.Group>(null);

  const legSwing = useRef({ fl: 0, fr: 0, bl: 0, br: 0 });
  const walkPhase = useRef(0);

  const flSwing = useRef<THREE.Group>(null);
  const frSwing = useRef<THREE.Group>(null);
  const blSwing = useRef<THREE.Group>(null);
  const brSwing = useRef<THREE.Group>(null);

  useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

  useFrame(({ clock }, delta) => {
    const dt = Math.min(delta, 0.033);
    const t = clock.elapsedTime;

    if (npc) {
      if (bodyGroup.current) {
        bodyGroup.current.position.y = damp(bodyGroup.current.position.y, Math.sin(t * 0.8) * 0.004, 2, dt);
      }
      if (tailGroup.current) {
        tailGroup.current.rotation.z = damp(tailGroup.current.rotation.z, 0.3 + Math.sin(t * 1.5) * 0.08, 3, dt);
      }
      return;
    }

    const phaseSpeed = running ? 7.5 : moving ? 4.5 : 0;
    if (moving) walkPhase.current += dt * phaseSpeed;

    const swing = moving ? (running ? 0.22 : 0.14) : 0;
    const phase = walkPhase.current;

    const targets = {
      fl: Math.sin(phase) * swing,
      br: Math.sin(phase + Math.PI * 0.5) * swing,
      fr: Math.sin(phase + Math.PI) * swing,
      bl: Math.sin(phase + Math.PI * 1.5) * swing,
    };

    const swings = { fl: flSwing, fr: frSwing, bl: blSwing, br: brSwing };
    (Object.keys(swings) as (keyof typeof swings)[]).forEach(key => {
      legSwing.current[key] = damp(legSwing.current[key], targets[key], 8, dt);
      if (swings[key].current) swings[key].current!.rotation.x = legSwing.current[key];
    });

    if (bodyGroup.current && moving) {
      const bob = Math.sin(phase * 2) * (running ? 0.008 : 0.005);
      bodyGroup.current.position.y = damp(bodyGroup.current.position.y, bob, 6, dt);
    } else if (bodyGroup.current) {
      bodyGroup.current.position.y = damp(bodyGroup.current.position.y, 0, 4, dt);
    }

    if (tailGroup.current) {
      const tail = moving ? 0.25 + Math.sin(phase * 1.2) * 0.06 : 0.2;
      tailGroup.current.rotation.z = damp(tailGroup.current.rotation.z, tail, 4, dt);
    }
  });

  const dark = "#1a1410";

  const Leg = ({ x, z, swingRef }: {
    x: number; z: number;
    swingRef: React.RefObject<THREE.Group | null>;
  }) => (
    <group position={[x, LEG_PIVOT_Y, z]}>
      <group ref={swingRef}>
        <M color={furColor} castShadow position={[0, -0.14, 0]} roughness={0.92}>
          <capsuleGeometry args={[0.045, 0.2, 8, 16]} />
        </M>
        <M color={furColor} castShadow position={[0, -0.3, 0.02]} rotation={[0.15, 0, 0]} roughness={0.92}>
          <capsuleGeometry args={[0.038, 0.12, 8, 16]} />
        </M>
        <M color={innerColor} position={[0, -0.36, 0.04]} roughness={0.85}>
          <sphereGeometry args={[0.055, 16, 16]} />
        </M>
      </group>
    </group>
  );

  return (
    <group ref={groupRef} rotation={[0, facingYaw, 0]}>
      <group ref={bodyGroup} scale={bodyScale}>
        <M color={furColor} castShadow position={[0, 0.4, 0]} scale={[1, 0.9, 1.15]} roughness={0.93}>
          <sphereGeometry args={[0.27, 24, 20]} />
        </M>
        <M color={furColor} castShadow position={[0, 0.36, -0.2]} scale={[0.9, 0.82, 0.9]} roughness={0.93}>
          <sphereGeometry args={[0.23, 20, 18]} />
        </M>
        <M color={innerColor} position={[0, 0.42, 0.2]} scale={[0.8, 0.78, 0.62]} roughness={0.9}>
          <sphereGeometry args={[0.21, 20, 18]} />
        </M>

        <M color={furColor} castShadow position={[0, 0.56, 0.18]} rotation={[0.4, 0, 0]} roughness={0.93}>
          <cylinderGeometry args={[0.09, 0.12, 0.2, 16]} />
        </M>

        <group ref={headGroup} position={[0, 0.72, 0.3]}>
          <M color={furColor} castShadow roughness={0.92}>
            <sphereGeometry args={[0.19, 24, 20]} />
          </M>
          <M color={innerColor} position={[0, -0.02, 0.15]} roughness={0.88}>
            <sphereGeometry args={[0.095, 20, 16]} />
          </M>
          <M color={dark} position={[0, 0.01, 0.24]} roughness={0.35} metalness={0.05}>
            <sphereGeometry args={[0.03, 16, 16]} />
          </M>
          {([-1, 1] as const).map(side => (
            <group key={side} position={[side * -0.08, 0.04, 0.14]}>
              <M color="#4a3018" roughness={0.4}>
                <sphereGeometry args={[0.024, 16, 16]} />
              </M>
              <mesh position={[side * -0.006, 0.008, 0.02]}>
                <sphereGeometry args={[0.006, 8, 8]} />
                <meshBasicMaterial color="#f8f8f8" />
              </mesh>
            </group>
          ))}

          {earStyle === "floppy" ? (
            <>
              <M color={innerColor} castShadow position={[0.16, 0.06, -0.04]} scale={[0.55, 1, 0.45]} roughness={0.9}>
                <sphereGeometry args={[0.1, 16, 14]} />
              </M>
              <M color={innerColor} castShadow position={[-0.16, 0.06, -0.04]} scale={[0.55, 1, 0.45]} roughness={0.9}>
                <sphereGeometry args={[0.1, 16, 14]} />
              </M>
            </>
          ) : (
            <>
              <M color={furColor} castShadow position={[0.13, 0.14, -0.03]} rotation={[0, 0, 0.2]} roughness={0.92}>
                <coneGeometry args={[0.06, 0.18, 12]} />
              </M>
              <M color={furColor} castShadow position={[-0.13, 0.14, -0.03]} rotation={[0, 0, -0.2]} roughness={0.92}>
                <coneGeometry args={[0.06, 0.18, 12]} />
              </M>
            </>
          )}
        </group>

        <Leg x={0.14}  z={0.13} swingRef={flSwing} />
        <Leg x={-0.14} z={0.13} swingRef={frSwing} />
        <Leg x={0.13}  z={-0.17} swingRef={blSwing} />
        <Leg x={-0.13} z={-0.17} swingRef={brSwing} />

        <group ref={tailGroup} position={[0, 0.44, -0.36]}>
          <M color={furColor} castShadow position={[0.03, 0.06, -0.03]} rotation={[-0.35, 0, 0.4]} roughness={0.93}>
            <capsuleGeometry args={[0.035, 0.18, 8, 16]} />
          </M>
        </group>
      </group>
    </group>
  );
});

Dog.displayName = "Dog";
