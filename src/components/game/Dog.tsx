import { useRef, forwardRef, useImperativeHandle } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface DogHandle {
  group: THREE.Group | null;
}

interface DogProps {
  moving: boolean;
  running: boolean;
  /** Base fur color */
  furColor?: string;
  /** Inner/belly/paw color */
  innerColor?: string;
  /** Ear type */
  earStyle?: "floppy" | "pointy";
  /** Body scale multiplier */
  bodyScale?: number;
  /** Make it an NPC — shows idle animations instead of player-driven ones */
  npc?: boolean;
}

export const Dog = forwardRef<DogHandle, DogProps>(({
  moving, running,
  furColor  = "#f5f0e5",
  innerColor = "#e8ddc8",
  earStyle  = "floppy",
  bodyScale = 1,
  npc = false,
}, ref) => {
  const groupRef   = useRef<THREE.Group>(null);
  const bodyGroup  = useRef<THREE.Group>(null);
  const headGroup  = useRef<THREE.Group>(null);
  const earL       = useRef<THREE.Group>(null);
  const earR       = useRef<THREE.Group>(null);
  // Each leg: Group so pivot is from shoulder/hip
  const fl = useRef<THREE.Group>(null);
  const fr = useRef<THREE.Group>(null);
  const bl = useRef<THREE.Group>(null);
  const br = useRef<THREE.Group>(null);
  const tailGroup  = useRef<THREE.Group>(null);

  // Springs for secondary motion
  const earLRot  = useRef(0);
  const earRRot  = useRef(0);
  const tailCurl = useRef(0.5);

  useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

  useFrame(({ clock }, delta) => {
    const t = clock.elapsedTime;
    const freq = running ? 10 : 5.8;

    if (npc) {
      // Idle: slight sway, constant tail wag, random head look
      if (bodyGroup.current) {
        bodyGroup.current.position.y = Math.sin(t * 1.6) * 0.014;
        bodyGroup.current.rotation.z = Math.sin(t * 0.8) * 0.02;
      }
      if (tailGroup.current) {
        tailGroup.current.rotation.z = 0.5 + Math.sin(t * 6) * 0.5;
      }
      if (headGroup.current) {
        headGroup.current.rotation.y = Math.sin(t * 0.5) * 0.3;
        headGroup.current.rotation.x = Math.sin(t * 0.7) * 0.05;
      }
      return;
    }

    // ── 4-beat walk cycle: each leg offset by 0.25 * 2π ──
    // Walk order: FL → BR → FR → BL (classic dog walk)
    const phFL = Math.sin(t * freq + 0);
    const phBR = Math.sin(t * freq + Math.PI * 0.5);
    const phFR = Math.sin(t * freq + Math.PI);
    const phBL = Math.sin(t * freq + Math.PI * 1.5);

    // Paw lift: only during forward swing (positive phase)
    const lift = moving ? (running ? 0.12 : 0.07) : 0;
    const swing = moving ? (running ? 0.7 : 0.52) : 0;

    if (fl.current) {
      fl.current.rotation.x = phFL * swing;
      fl.current.position.y = Math.max(0, phFL) * lift;
    }
    if (br.current) {
      br.current.rotation.x = phBR * swing;
      br.current.position.y = Math.max(0, phBR) * lift;
    }
    if (fr.current) {
      fr.current.rotation.x = phFR * swing;
      fr.current.position.y = Math.max(0, phFR) * lift;
    }
    if (bl.current) {
      bl.current.rotation.x = phBL * swing;
      bl.current.position.y = Math.max(0, phBL) * lift;
    }

    // Body: bounce on double-support, counter-twist shoulders vs hips, lean into run
    if (bodyGroup.current) {
      if (moving) {
        const bounce = (Math.cos(t * freq * 2) * 0.5 + 0.5) * (running ? 0.07 : 0.045);
        bodyGroup.current.position.y = bounce;
        // Counter-twist: shoulders swing against hips
        bodyGroup.current.rotation.y = Math.sin(t * freq) * 0.06;
        // Side sway (weight shift)
        bodyGroup.current.rotation.z = Math.sin(t * freq) * 0.04;
        // Forward lean when running
        bodyGroup.current.rotation.x = running ? -0.08 : THREE.MathUtils.lerp(bodyGroup.current.rotation.x, 0, delta * 4);
      } else {
        // Breathing
        bodyGroup.current.position.y = THREE.MathUtils.lerp(bodyGroup.current.position.y, Math.sin(t * 1.7) * 0.012, delta * 3);
        bodyGroup.current.rotation.y = THREE.MathUtils.lerp(bodyGroup.current.rotation.y, 0, delta * 4);
        bodyGroup.current.rotation.z = THREE.MathUtils.lerp(bodyGroup.current.rotation.z, 0, delta * 4);
        bodyGroup.current.rotation.x = THREE.MathUtils.lerp(bodyGroup.current.rotation.x, 0, delta * 4);
      }
    }

    // Head: bobs with stride, idle look-around
    if (headGroup.current) {
      if (moving) {
        headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, Math.sin(t * freq * 0.5) * 0.07, delta * 8);
        headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, 0, delta * 5);
      } else {
        headGroup.current.rotation.y = THREE.MathUtils.lerp(headGroup.current.rotation.y, Math.sin(t * 0.55) * 0.28, delta * 2);
        headGroup.current.rotation.x = THREE.MathUtils.lerp(headGroup.current.rotation.x, Math.sin(t * 0.9) * 0.05, delta * 2);
      }
    }

    // Ear secondary motion — spring lags behind head
    const headYaw = headGroup.current?.rotation.y ?? 0;
    earLRot.current = THREE.MathUtils.lerp(earLRot.current, headYaw * 0.4 + (running ? Math.sin(t * freq) * 0.18 : 0), delta * 6);
    earRRot.current = THREE.MathUtils.lerp(earRRot.current, headYaw * 0.4 - (running ? Math.sin(t * freq) * 0.18 : 0), delta * 6);
    if (earL.current) earL.current.rotation.z = 0.52 + earLRot.current;
    if (earR.current) earR.current.rotation.z = -0.52 - earRRot.current;

    // Tail: spring wag, energetic when moving
    const targetCurl = moving ? (running ? 0.9 + Math.sin(t * 14) * 0.55 : 0.6 + Math.sin(t * 9) * 0.45) : 0.4 + Math.sin(t * 3.5) * 0.28;
    tailCurl.current = THREE.MathUtils.lerp(tailCurl.current, targetCurl, delta * 8);
    if (tailGroup.current) {
      tailGroup.current.rotation.z = tailCurl.current;
      tailGroup.current.rotation.y = Math.sin(t * (moving ? 9 : 3)) * 0.22;
    }
  });

  const dark = "#111";
  const pink = "#e07070";
  const s = bodyScale;

  return (
    // Root group: position/rotation controlled by player controller
    // Rotated 180° so dog faces -Z (matching movement direction)
    <group ref={groupRef} rotation={[0, Math.PI, 0]}>
      <group ref={bodyGroup} scale={s}>

        {/* ── Torso ── */}
        <mesh position={[0, 0.40, 0]} scale={[1, 0.87, 1.25]} castShadow>
          <sphereGeometry args={[0.28, 16, 12]} />
          <meshStandardMaterial color={furColor} roughness={0.88} />
        </mesh>
        {/* rump */}
        <mesh position={[0, 0.37, -0.24]} scale={[0.88, 0.80, 0.88]} castShadow>
          <sphereGeometry args={[0.24, 12, 10]} />
          <meshStandardMaterial color={furColor} roughness={0.88} />
        </mesh>
        {/* chest puff */}
        <mesh position={[0, 0.44, 0.24]} scale={[0.82, 0.82, 0.68]}>
          <sphereGeometry args={[0.22, 10, 8]} />
          <meshStandardMaterial color={innerColor} roughness={0.92} />
        </mesh>

        {/* ── Neck ── */}
        <mesh position={[0, 0.60, 0.22]} rotation={[0.45, 0, 0]} castShadow>
          <cylinderGeometry args={[0.10, 0.13, 0.24, 10]} />
          <meshStandardMaterial color={furColor} roughness={0.9} />
        </mesh>

        {/* ── Head ── */}
        <group ref={headGroup} position={[0, 0.77, 0.35]}>
          {/* skull */}
          <mesh castShadow>
            <sphereGeometry args={[0.195, 16, 12]} />
            <meshStandardMaterial color={furColor} roughness={0.88} />
          </mesh>
          {/* brow puff */}
          <mesh position={[0, 0.10, 0.07]}>
            <sphereGeometry args={[0.114, 10, 8]} />
            <meshStandardMaterial color={furColor} roughness={0.92} />
          </mesh>
          {/* cheek puffs */}
          <mesh position={[ 0.13, -0.02, 0.09]} scale={[1, 0.9, 0.85]}>
            <sphereGeometry args={[0.10, 10, 8]} />
            <meshStandardMaterial color={furColor} roughness={0.9} />
          </mesh>
          <mesh position={[-0.13, -0.02, 0.09]} scale={[1, 0.9, 0.85]}>
            <sphereGeometry args={[0.10, 10, 8]} />
            <meshStandardMaterial color={furColor} roughness={0.9} />
          </mesh>

          {/* Snout */}
          <mesh position={[0, -0.038, 0.177]} scale={[1, 0.82, 0.90]}>
            <sphereGeometry args={[0.100, 12, 9]} />
            <meshStandardMaterial color={innerColor} roughness={0.80} />
          </mesh>
          {/* Nose tip */}
          <mesh position={[0, -0.004, 0.270]}>
            <sphereGeometry args={[0.033, 10, 8]} />
            <meshStandardMaterial color={dark} roughness={0.2} metalness={0.1} />
          </mesh>
          <mesh position={[0.012, 0.007, 0.298]}>
            <sphereGeometry args={[0.008, 6, 6]} />
            <meshStandardMaterial color="white" roughness={0.05} />
          </mesh>

          {/* Eyes */}
          {([-1, 1] as const).map(side => (
            <group key={side} position={[side * -0.083, 0.055, 0.172]}>
              {/* iris */}
              <mesh>
                <sphereGeometry args={[0.031, 12, 10]} />
                <meshStandardMaterial color="#5c3210" roughness={0.2} />
              </mesh>
              {/* pupil */}
              <mesh position={[0, 0, 0.016]}>
                <sphereGeometry args={[0.020, 10, 8]} />
                <meshStandardMaterial color={dark} roughness={0.1} />
              </mesh>
              {/* shine */}
              <mesh position={[side * -0.010, 0.012, 0.028]}>
                <sphereGeometry args={[0.008, 6, 6]} />
                <meshStandardMaterial color="white" roughness={0.05} />
              </mesh>
            </group>
          ))}

          {/* Tongue */}
          <mesh position={[0, -0.092, 0.248]} rotation={[0.35, 0, 0]} scale={[1, 0.68, 0.55]}>
            <sphereGeometry args={[0.048, 10, 7]} />
            <meshStandardMaterial color={pink} roughness={0.55} />
          </mesh>

          {/* Ears */}
          {earStyle === "floppy" ? (
            <>
              <group ref={earL} position={[ 0.175, 0.09, -0.06]}>
                <mesh rotation={[0.1, 0, 0]} scale={[0.68, 1.15, 0.58]} castShadow>
                  <sphereGeometry args={[0.11, 10, 8]} />
                  <meshStandardMaterial color={innerColor} roughness={0.88} />
                </mesh>
              </group>
              <group ref={earR} position={[-0.175, 0.09, -0.06]}>
                <mesh rotation={[0.1, 0, 0]} scale={[0.68, 1.15, 0.58]} castShadow>
                  <sphereGeometry args={[0.11, 10, 8]} />
                  <meshStandardMaterial color={innerColor} roughness={0.88} />
                </mesh>
              </group>
            </>
          ) : (
            <>
              <group ref={earL} position={[ 0.145, 0.18, -0.05]}>
                <mesh rotation={[0, 0, 0.2]} castShadow>
                  <coneGeometry args={[0.075, 0.22, 8]} />
                  <meshStandardMaterial color={furColor} roughness={0.88} />
                </mesh>
              </group>
              <group ref={earR} position={[-0.145, 0.18, -0.05]}>
                <mesh rotation={[0, 0, -0.2]} castShadow>
                  <coneGeometry args={[0.075, 0.22, 8]} />
                  <meshStandardMaterial color={furColor} roughness={0.88} />
                </mesh>
              </group>
            </>
          )}
        </group>

        {/* ── Legs ── */}
        {[
          { ref: fl, x:  0.155, z: 0.14, label: "fl" },
          { ref: fr, x: -0.155, z: 0.14, label: "fr" },
          { ref: bl, x:  0.145, z: -0.18, label: "bl" },
          { ref: br, x: -0.145, z: -0.18, label: "br" },
        ].map(({ ref: legRef, x, z }) => (
          <group key={`${x}${z}`} ref={legRef} position={[x, 0.27, z]}>
            <mesh position={[0, -0.17, 0]} castShadow>
              <capsuleGeometry args={[0.052, 0.22, 6, 8]} />
              <meshStandardMaterial color={furColor} roughness={0.9} />
            </mesh>
            {/* lower leg */}
            <mesh position={[0, -0.31, 0.04]} rotation={[0.3, 0, 0]} castShadow>
              <capsuleGeometry args={[0.042, 0.14, 6, 8]} />
              <meshStandardMaterial color={furColor} roughness={0.9} />
            </mesh>
            {/* paw */}
            <mesh position={[0, -0.40, 0.06]} scale={[1.1, 0.72, 1.2]}>
              <sphereGeometry args={[0.062, 10, 8]} />
              <meshStandardMaterial color={innerColor} roughness={0.68} />
            </mesh>
          </group>
        ))}

        {/* ── Tail ── */}
        <group ref={tailGroup} position={[0, 0.46, -0.39]}>
          <mesh rotation={[-0.42, 0, 0.4]} castShadow>
            <capsuleGeometry args={[0.040, 0.21, 6, 8]} />
            <meshStandardMaterial color={furColor} roughness={0.9} />
          </mesh>
          {/* curl segment */}
          <mesh position={[0.07, 0.17, -0.07]} rotation={[-0.2, 0, 0.6]}>
            <capsuleGeometry args={[0.032, 0.12, 6, 8]} />
            <meshStandardMaterial color={furColor} roughness={0.9} />
          </mesh>
          {/* tip puff */}
          <mesh position={[0.11, 0.27, -0.09]}>
            <sphereGeometry args={[0.055, 10, 8]} />
            <meshStandardMaterial color="white" roughness={0.92} />
          </mesh>
        </group>

      </group>
    </group>
  );
});

Dog.displayName = "Dog";
