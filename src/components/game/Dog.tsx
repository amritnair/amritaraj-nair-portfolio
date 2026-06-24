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
  furColor   = "#f5f0e5",
  innerColor = "#e8ddc8",
  earStyle   = "floppy",
  bodyScale  = 1,
  npc        = false,
  facingYaw  = 0,
}, ref) => {
  const groupRef  = useRef<THREE.Group>(null);
  const bodyGroup = useRef<THREE.Group>(null);
  const headGroup = useRef<THREE.Group>(null);
  const earL = useRef<THREE.Group>(null);
  const earR = useRef<THREE.Group>(null);
  const tailGroup = useRef<THREE.Group>(null);

  const legSwing = useRef({ fl: 0, fr: 0, bl: 0, br: 0 });
  const legLift  = useRef({ fl: 0, fr: 0, bl: 0, br: 0 });
  const walkPhase = useRef(0);
  const tailAngle = useRef(0.4);
  const headYaw   = useRef(0);
  const headPitch = useRef(0);

  const flSwing = useRef<THREE.Group>(null);
  const frSwing = useRef<THREE.Group>(null);
  const blSwing = useRef<THREE.Group>(null);
  const brSwing = useRef<THREE.Group>(null);
  const flLift  = useRef<THREE.Group>(null);
  const frLift  = useRef<THREE.Group>(null);
  const blLift  = useRef<THREE.Group>(null);
  const brLift  = useRef<THREE.Group>(null);

  useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

  useFrame(({ clock }, delta) => {
    const dt = Math.min(delta, 0.033);
    const t = clock.elapsedTime;

    if (npc) {
      if (bodyGroup.current) {
        bodyGroup.current.position.y = damp(bodyGroup.current.position.y, Math.sin(t * 1.2) * 0.012, 3, dt);
      }
      if (tailGroup.current) {
        tailAngle.current = damp(tailAngle.current, 0.4 + Math.sin(t * 4) * 0.35, 5, dt);
        tailGroup.current.rotation.z = tailAngle.current;
      }
      if (headGroup.current) {
        headGroup.current.rotation.y = damp(headGroup.current.rotation.y, Math.sin(t * 0.4) * 0.2, 2, dt);
      }
      return;
    }

    const speed = running ? 10 : moving ? 6 : 0;
    if (moving) walkPhase.current += dt * speed;

    const swingAmt = moving ? (running ? 0.55 : 0.38) : 0;
    const liftAmt  = moving ? (running ? 0.06 : 0.04) : 0;
    const phase = walkPhase.current;

    const targets = {
      fl: Math.sin(phase) * swingAmt,
      br: Math.sin(phase + Math.PI * 0.5) * swingAmt,
      fr: Math.sin(phase + Math.PI) * swingAmt,
      bl: Math.sin(phase + Math.PI * 1.5) * swingAmt,
    };
    const lifts = {
      fl: Math.max(0, Math.sin(phase)) * liftAmt,
      br: Math.max(0, Math.sin(phase + Math.PI * 0.5)) * liftAmt,
      fr: Math.max(0, Math.sin(phase + Math.PI)) * liftAmt,
      bl: Math.max(0, Math.sin(phase + Math.PI * 1.5)) * liftAmt,
    };

    const swings = { fl: flSwing, fr: frSwing, bl: blSwing, br: brSwing };
    const liftsG = { fl: flLift, fr: frLift, bl: blLift, br: brLift };

    (Object.keys(swings) as (keyof typeof swings)[]).forEach(key => {
      legSwing.current[key] = damp(legSwing.current[key], targets[key], 12, dt);
      legLift.current[key]  = damp(legLift.current[key], lifts[key], 14, dt);
      if (swings[key].current) swings[key].current!.rotation.x = legSwing.current[key];
      if (liftsG[key].current) liftsG[key].current!.position.y = legLift.current[key];
    });

    if (bodyGroup.current) {
      const bob = moving ? Math.abs(Math.sin(phase * 2)) * (running ? 0.035 : 0.02) : Math.sin(t * 1.4) * 0.008;
      bodyGroup.current.position.y = damp(bodyGroup.current.position.y, bob, 8, dt);
      bodyGroup.current.rotation.x = damp(bodyGroup.current.rotation.x, running && moving ? -0.06 : 0, 5, dt);
      bodyGroup.current.rotation.z = damp(bodyGroup.current.rotation.z, moving ? Math.sin(phase) * 0.025 : 0, 6, dt);
    }

    if (headGroup.current) {
      const targetYaw = moving ? 0 : Math.sin(t * 0.45) * 0.18;
      const targetPitch = moving ? Math.sin(phase * 0.5) * 0.04 : Math.sin(t * 0.7) * 0.03;
      headYaw.current = damp(headYaw.current, targetYaw, 5, dt);
      headPitch.current = damp(headPitch.current, targetPitch, 5, dt);
      headGroup.current.rotation.y = headYaw.current;
      headGroup.current.rotation.x = headPitch.current;
    }

    if (earL.current) earL.current.rotation.z = damp(earL.current.rotation.z, 0.5 + headYaw.current * 0.3, 6, dt);
    if (earR.current) earR.current.rotation.z = damp(earR.current.rotation.z, -0.5 - headYaw.current * 0.3, 6, dt);

    const tailTarget = moving
      ? 0.5 + Math.sin(phase * (running ? 2 : 1.5)) * (running ? 0.35 : 0.25)
      : 0.35 + Math.sin(t * 2.5) * 0.15;
    tailAngle.current = damp(tailAngle.current, tailTarget, 6, dt);
    if (tailGroup.current) {
      tailGroup.current.rotation.z = tailAngle.current;
      tailGroup.current.rotation.y = damp(tailGroup.current.rotation.y, moving ? Math.sin(phase * 1.5) * 0.15 : 0, 5, dt);
    }
  });

  const dark = "#1a1410";
  const pink = "#e07070";

  const Leg = ({ x, z, swingRef, liftRef }: {
    x: number; z: number;
    swingRef: React.RefObject<THREE.Group | null>;
    liftRef: React.RefObject<THREE.Group | null>;
  }) => (
    <group position={[x, LEG_PIVOT_Y, z]}>
      <group ref={liftRef}>
        <group ref={swingRef}>
          <M color={furColor} castShadow position={[0, -0.14, 0]}>
            <capsuleGeometry args={[0.05, 0.2, 8, 16]} />
          </M>
          <M color={furColor} castShadow position={[0, -0.3, 0.03]} rotation={[0.2, 0, 0]}>
            <capsuleGeometry args={[0.04, 0.12, 8, 16]} />
          </M>
          <M color={innerColor} position={[0, -0.38, 0.05]} roughness={0.75}>
            <sphereGeometry args={[0.06, 16, 16]} />
          </M>
        </group>
      </group>
    </group>
  );

  return (
    <group ref={groupRef} rotation={[0, Math.PI + facingYaw, 0]}>
      <group ref={bodyGroup} scale={bodyScale}>
        <M color={furColor} castShadow position={[0, 0.42, 0]} scale={[1, 0.88, 1.2]}>
          <sphereGeometry args={[0.28, 24, 20]} />
        </M>
        <M color={furColor} castShadow position={[0, 0.38, -0.22]} scale={[0.88, 0.8, 0.88]}>
          <sphereGeometry args={[0.24, 10, 8]} />
        </M>
        <M color={innerColor} position={[0, 0.44, 0.22]} scale={[0.82, 0.8, 0.65]}>
          <sphereGeometry args={[0.22, 10, 8]} />
        </M>

        <M color={furColor} castShadow position={[0, 0.58, 0.2]} rotation={[0.45, 0, 0]}>
          <cylinderGeometry args={[0.1, 0.13, 0.22, 10]} />
        </M>

        <group ref={headGroup} position={[0, 0.74, 0.32]}>
          <M color={furColor} castShadow>
            <sphereGeometry args={[0.2, 24, 20]} />
          </M>
          <M color={innerColor} position={[0, -0.03, 0.17]}>
            <sphereGeometry args={[0.1, 10, 8]} />
          </M>
          <M color={dark} position={[0, 0.01, 0.26]}>
            <sphereGeometry args={[0.032, 8, 8]} />
          </M>
          {([-1, 1] as const).map(side => (
            <group key={side} position={[side * -0.085, 0.05, 0.16]}>
              <M color="#5c3210">
                <sphereGeometry args={[0.028, 8, 8]} />
              </M>
              <mesh position={[side * -0.008, 0.01, 0.024]}>
                <sphereGeometry args={[0.008, 6, 6]} />
                <meshBasicMaterial color="white" />
              </mesh>
            </group>
          ))}
          <M color={pink} position={[0, -0.08, 0.24]} rotation={[0.35, 0, 0]} scale={[1, 0.65, 0.5]}>
            <sphereGeometry args={[0.045, 8, 6]} />
          </M>

          {earStyle === "floppy" ? (
            <>
              <group ref={earL} position={[0.17, 0.08, -0.05]}>
                <M color={innerColor} castShadow scale={[0.68, 1.1, 0.58]} roughness={0.9}>
                  <sphereGeometry args={[0.11, 16, 14]} />
                </M>
              </group>
              <group ref={earR} position={[-0.17, 0.08, -0.05]}>
                <M color={innerColor} castShadow scale={[0.68, 1.1, 0.58]} roughness={0.9}>
                  <sphereGeometry args={[0.11, 16, 14]} />
                </M>
              </group>
            </>
          ) : (
            <>
              <group ref={earL} position={[0.14, 0.16, -0.04]} rotation={[0, 0, 0.2]}>
                <M color={furColor} castShadow>
                  <coneGeometry args={[0.075, 0.22, 8]} />
                </M>
              </group>
              <group ref={earR} position={[-0.14, 0.16, -0.04]} rotation={[0, 0, -0.2]}>
                <M color={furColor} castShadow>
                  <coneGeometry args={[0.075, 0.22, 8]} />
                </M>
              </group>
            </>
          )}
        </group>

        <Leg x={0.15}  z={0.14} swingRef={flSwing} liftRef={flLift} />
        <Leg x={-0.15} z={0.14} swingRef={frSwing} liftRef={frLift} />
        <Leg x={0.14}  z={-0.18} swingRef={blSwing} liftRef={blLift} />
        <Leg x={-0.14} z={-0.18} swingRef={brSwing} liftRef={brLift} />

        <group ref={tailGroup} position={[0, 0.46, -0.38]}>
          <M color={furColor} castShadow position={[0.04, 0.08, -0.04]} rotation={[-0.4, 0, 0.5]} roughness={0.92}>
            <capsuleGeometry args={[0.038, 0.2, 8, 16]} />
          </M>
          <M color="#fff8f0" position={[0.1, 0.24, -0.08]} roughness={0.88}>
            <sphereGeometry args={[0.055, 16, 14]} />
          </M>
        </group>
      </group>
    </group>
  );
});

Dog.displayName = "Dog";
