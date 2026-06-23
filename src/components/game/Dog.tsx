import { useRef, forwardRef, useImperativeHandle } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { Stylized, damp } from "./zeldaStyle";

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

export const Dog = forwardRef<DogHandle, DogProps>(({
  moving, running,
  furColor   = "#f5f0e5",
  innerColor = "#e8ddc8",
  earStyle   = "floppy",
  bodyScale  = 1,
  npc        = false,
  facingYaw  = 0,
}, ref) => {
  const groupRef   = useRef<THREE.Group>(null);
  const bodyGroup  = useRef<THREE.Group>(null);
  const headGroup  = useRef<THREE.Group>(null);
  const earL       = useRef<THREE.Group>(null);
  const earR       = useRef<THREE.Group>(null);
  const fl = useRef<THREE.Group>(null);
  const fr = useRef<THREE.Group>(null);
  const bl = useRef<THREE.Group>(null);
  const br = useRef<THREE.Group>(null);
  const tailGroup  = useRef<THREE.Group>(null);

  const legPhase   = useRef({ fl: 0, fr: 0, bl: 0, br: 0 });
  const legLift    = useRef({ fl: 0, fr: 0, bl: 0, br: 0 });
  const earLRot    = useRef(0);
  const earRRot    = useRef(0);
  const tailCurl   = useRef(0.5);
  const bodyBob    = useRef(0);
  const bodyLean   = useRef(0);
  const headYaw    = useRef(0);
  const headPitch  = useRef(0);
  useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;
    const freq = running ? 9.5 : 5.5;
    const dt = Math.min(delta, 0.05);

    if (npc) {
      if (bodyGroup.current) {
        bodyGroup.current.position.y = damp(bodyGroup.current.position.y, Math.sin(t * 1.4) * 0.018, 4, dt);
        bodyGroup.current.rotation.z = damp(bodyGroup.current.rotation.z, Math.sin(t * 0.7) * 0.025, 3, dt);
      }
      if (tailGroup.current) {
        const target = 0.5 + Math.sin(t * 5) * 0.45;
        tailGroup.current.rotation.z = damp(tailGroup.current.rotation.z, target, 6, dt);
      }
      if (headGroup.current) {
        headGroup.current.rotation.y = damp(headGroup.current.rotation.y, Math.sin(t * 0.45) * 0.35, 2.5, dt);
        headGroup.current.rotation.x = damp(headGroup.current.rotation.x, Math.sin(t * 0.6) * 0.06, 3, dt);
      }
      return;
    }

    const lift = moving ? (running ? 0.14 : 0.08) : 0;
    const swing = moving ? (running ? 0.75 : 0.55) : 0;

    const phases = {
      fl: Math.sin(t * freq),
      br: Math.sin(t * freq + Math.PI * 0.5),
      fr: Math.sin(t * freq + Math.PI),
      bl: Math.sin(t * freq + Math.PI * 1.5),
    };

    const legs = { fl, fr, bl, br } as const;
    (Object.keys(legs) as (keyof typeof legs)[]).forEach(key => {
      const leg = legs[key];
      const ph = phases[key];
      const targetRot = ph * swing;
      const targetLift = Math.max(0, ph) * lift;
      legPhase.current[key] = damp(legPhase.current[key], targetRot, 14, dt);
      legLift.current[key] = damp(legLift.current[key], targetLift, 16, dt);
      if (leg.current) {
        leg.current.rotation.x = legPhase.current[key];
        leg.current.position.y = legLift.current[key];
      }
    });

    if (bodyGroup.current) {
      if (moving) {
        const bounceTarget = (Math.cos(t * freq * 2) * 0.5 + 0.5) * (running ? 0.08 : 0.05);
        bodyBob.current = damp(bodyBob.current, bounceTarget, 10, dt);
        bodyGroup.current.position.y = bodyBob.current;
        bodyGroup.current.rotation.y = damp(bodyGroup.current.rotation.y, Math.sin(t * freq) * 0.05, 8, dt);
        bodyGroup.current.rotation.z = damp(bodyGroup.current.rotation.z, Math.sin(t * freq) * 0.035, 8, dt);
        const leanTarget = running ? -0.1 : 0;
        bodyLean.current = damp(bodyLean.current, leanTarget, 6, dt);
        bodyGroup.current.rotation.x = bodyLean.current;
      } else {
        bodyBob.current = damp(bodyBob.current, Math.sin(t * 1.5) * 0.015, 3, dt);
        bodyGroup.current.position.y = bodyBob.current;
        bodyGroup.current.rotation.y = damp(bodyGroup.current.rotation.y, 0, 5, dt);
        bodyGroup.current.rotation.z = damp(bodyGroup.current.rotation.z, 0, 5, dt);
        bodyLean.current = damp(bodyLean.current, 0, 5, dt);
        bodyGroup.current.rotation.x = bodyLean.current;
      }
    }

    if (headGroup.current) {
      if (moving) {
        headPitch.current = damp(headPitch.current, Math.sin(t * freq * 0.5) * 0.08, 8, dt);
        headYaw.current = damp(headYaw.current, 0, 6, dt);
      } else {
        headYaw.current = damp(headYaw.current, Math.sin(t * 0.5) * 0.3, 2, dt);
        headPitch.current = damp(headPitch.current, Math.sin(t * 0.8) * 0.05, 2.5, dt);
      }
      headGroup.current.rotation.y = headYaw.current;
      headGroup.current.rotation.x = headPitch.current;
    }

    const hYaw = headGroup.current?.rotation.y ?? 0;
    earLRot.current = damp(earLRot.current, hYaw * 0.35 + (running ? Math.sin(t * freq) * 0.15 : 0), 7, dt);
    earRRot.current = damp(earRRot.current, hYaw * 0.35 - (running ? Math.sin(t * freq) * 0.15 : 0), 7, dt);
    if (earL.current) earL.current.rotation.z = 0.55 + earLRot.current;
    if (earR.current) earR.current.rotation.z = -0.55 - earRRot.current;

    const targetCurl = moving
      ? (running ? 0.85 + Math.sin(t * 12) * 0.5 : 0.55 + Math.sin(t * 8) * 0.4)
      : 0.35 + Math.sin(t * 3) * 0.25;
    tailCurl.current = damp(tailCurl.current, targetCurl, 7, dt);
    if (tailGroup.current) {
      tailGroup.current.rotation.z = tailCurl.current;
      tailGroup.current.rotation.y = damp(
        tailGroup.current.rotation.y,
        Math.sin(t * (moving ? 8 : 2.5)) * 0.25,
        6, dt
      );
    }
  });

  const dark = "#1a1410";
  const pink = "#e87878";
  const s = bodyScale;

  const ToonEye = ({ side }: { side: 1 | -1 }) => (
    <group position={[side * -0.095, 0.065, 0.19]}>
      <Stylized color="#f8f4e8">
        <sphereGeometry args={[0.038, 8, 8]} />
      </Stylized>
      <group position={[0, 0, 0.02]}>
        <Stylized color="#3a2010">
          <sphereGeometry args={[0.026, 8, 8]} />
        </Stylized>
      </group>
      <group position={[side * -0.008, 0.012, 0.038]}>
        <mesh>
          <sphereGeometry args={[0.009, 6, 6]} />
          <meshBasicMaterial color="white" />
        </mesh>
      </group>
    </group>
  );

  return (
    <group ref={groupRef} rotation={[0, Math.PI + facingYaw, 0]}>
      <group ref={bodyGroup} scale={s}>

        {/* Torso — chunky Wind Waker proportions */}
        <Stylized color={furColor} castShadow>
          <sphereGeometry args={[0.3, 10, 8]} />
        </Stylized>
        <group position={[0, -0.02, -0.26]} scale={[0.9, 0.85, 0.9]}>
          <Stylized color={furColor} castShadow>
            <sphereGeometry args={[0.26, 8, 8]} />
          </Stylized>
        </group>
        <group position={[0, 0.06, 0.26]} scale={[0.85, 0.8, 0.7]}>
          <Stylized color={innerColor}>
            <sphereGeometry args={[0.24, 8, 8]} />
          </Stylized>
        </group>

        {/* Neck */}
        <group position={[0, 0.58, 0.24]} rotation={[0.5, 0, 0]}>
          <Stylized color={furColor} castShadow>
            <cylinderGeometry args={[0.11, 0.14, 0.22, 8]} />
          </Stylized>
        </group>

        {/* Head — oversized for Zelda charm */}
        <group ref={headGroup} position={[0, 0.77, 0.35]}>
          <Stylized color={furColor} castShadow>
            <sphereGeometry args={[0.21, 10, 8]} />
          </Stylized>
          <group position={[0, 0.12, 0.06]}>
            <Stylized color={furColor}>
              <sphereGeometry args={[0.12, 8, 8]} />
            </Stylized>
          </group>
          {([-1, 1] as const).map(side => (
            <group key={side} position={[side * -0.14, -0.02, 0.08]}>
              <Stylized color={furColor}>
                <sphereGeometry args={[0.1, 8, 8]} />
              </Stylized>
            </group>
          ))}

          {/* Snout */}
          <group position={[0, -0.04, 0.2]} scale={[1, 0.85, 0.95]}>
            <Stylized color={innerColor}>
              <sphereGeometry args={[0.11, 8, 8]} />
            </Stylized>
          </group>
          <group position={[0, 0, 0.3]}>
            <Stylized color={dark}>
              <sphereGeometry args={[0.036, 8, 8]} />
            </Stylized>
          </group>

          <ToonEye side={1} />
          <ToonEye side={-1} />

          {/* Tongue */}
          <group position={[0, -0.1, 0.27]} rotation={[0.4, 0, 0]} scale={[1, 0.7, 0.6]}>
            <Stylized color={pink}>
              <sphereGeometry args={[0.05, 8, 6]} />
            </Stylized>
          </group>

          {/* Ears */}
          {earStyle === "floppy" ? (
            <>
              <group ref={earL} position={[0.19, 0.1, -0.05]}>
                <group rotation={[0.1, 0, 0]} scale={[0.7, 1.2, 0.6]}>
                  <Stylized color={innerColor} castShadow>
                    <sphereGeometry args={[0.12, 8, 8]} />
                  </Stylized>
                </group>
              </group>
              <group ref={earR} position={[-0.19, 0.1, -0.05]}>
                <group rotation={[0.1, 0, 0]} scale={[0.7, 1.2, 0.6]}>
                  <Stylized color={innerColor} castShadow>
                    <sphereGeometry args={[0.12, 8, 8]} />
                  </Stylized>
                </group>
              </group>
            </>
          ) : (
            <>
              <group ref={earL} position={[0.15, 0.2, -0.04]}>
                <group rotation={[0, 0, 0.25]}>
                  <Stylized color={furColor} castShadow>
                    <coneGeometry args={[0.08, 0.24, 6]} />
                  </Stylized>
                </group>
              </group>
              <group ref={earR} position={[-0.15, 0.2, -0.04]}>
                <group rotation={[0, 0, -0.25]}>
                  <Stylized color={furColor} castShadow>
                    <coneGeometry args={[0.08, 0.24, 6]} />
                  </Stylized>
                </group>
              </group>
            </>
          )}
        </group>

        {/* Legs — shorter, stubbier */}
        {[
          { ref: fl, x:  0.16, z: 0.15 },
          { ref: fr, x: -0.16, z: 0.15 },
          { ref: bl, x:  0.15, z: -0.2 },
          { ref: br, x: -0.15, z: -0.2 },
        ].map(({ ref: legRef, x, z }) => (
          <group key={`${x}${z}`} ref={legRef} position={[x, 0.24, z]}>
            <group position={[0, -0.14, 0]} scale={[1, 0.85, 1]}>
              <Stylized color={furColor} castShadow>
                <capsuleGeometry args={[0.055, 0.2, 6, 8]} />
              </Stylized>
            </group>
            <group position={[0, -0.28, 0.03]} rotation={[0.25, 0, 0]}>
              <Stylized color={furColor} castShadow>
                <capsuleGeometry args={[0.045, 0.12, 6, 8]} />
              </Stylized>
            </group>
            <group position={[0, -0.36, 0.05]} scale={[1.15, 0.75, 1.25]}>
              <Stylized color={innerColor}>
                <sphereGeometry args={[0.065, 8, 8]} />
              </Stylized>
            </group>
          </group>
        ))}

        {/* Tail */}
        <group ref={tailGroup} position={[0, 0.48, -0.42]}>
          <group rotation={[-0.45, 0, 0.45]}>
            <Stylized color={furColor} castShadow>
              <capsuleGeometry args={[0.042, 0.22, 6, 8]} />
            </Stylized>
          </group>
          <group position={[0.08, 0.18, -0.08]} rotation={[-0.2, 0, 0.65]}>
            <Stylized color={furColor}>
              <capsuleGeometry args={[0.034, 0.14, 6, 8]} />
            </Stylized>
          </group>
          <group position={[0.12, 0.3, -0.1]}>
            <Stylized color="#fff8f0">
              <sphereGeometry args={[0.06, 8, 8]} />
            </Stylized>
          </group>
        </group>

      </group>
    </group>
  );
});

Dog.displayName = "Dog";
