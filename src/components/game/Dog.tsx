import { useRef, forwardRef, useImperativeHandle } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export interface DogHandle {
  group: THREE.Group | null;
}

interface DogProps {
  moving: boolean;
  running: boolean;
}

export const Dog = forwardRef<DogHandle, DogProps>(({ moving, running }, ref) => {
  const groupRef  = useRef<THREE.Group>(null);
  const bodyRef   = useRef<THREE.Group>(null);  // entire dog floats on this
  const chestRef  = useRef<THREE.Mesh>(null);
  const headGroup = useRef<THREE.Group>(null);
  // Each leg group pivots from shoulder/hip
  const fl = useRef<THREE.Group>(null); // front-left
  const fr = useRef<THREE.Group>(null); // front-right
  const bl = useRef<THREE.Group>(null); // back-left
  const br = useRef<THREE.Group>(null); // back-right
  const tailGroup = useRef<THREE.Group>(null);

  useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const freq = running ? 11 : 6.5;

    // Diagonal trot gait: FL+BR move together (phase 0), FR+BL offset by π
    const phaseA = Math.sin(t * freq);           // FL, BR
    const phaseB = Math.sin(t * freq + Math.PI); // FR, BL

    const swingAmt = moving ? (running ? 0.72 : 0.55) : 0;
    const liftAmt  = moving ? (running ? 0.28 : 0.18) : 0;

    if (fl.current) {
      fl.current.rotation.x = phaseA * swingAmt;
      fl.current.position.z = phaseA * liftAmt * 0.12;
    }
    if (br.current) {
      br.current.rotation.x = phaseA * swingAmt;
      br.current.position.z = phaseA * liftAmt * 0.12;
    }
    if (fr.current) {
      fr.current.rotation.x = phaseB * swingAmt;
      fr.current.position.z = phaseB * liftAmt * 0.12;
    }
    if (bl.current) {
      bl.current.rotation.x = phaseB * swingAmt;
      bl.current.position.z = phaseB * liftAmt * 0.12;
    }

    if (bodyRef.current) {
      if (moving) {
        // Bounce: body rises on double-support
        const bounce = Math.abs(Math.sin(t * freq)) * 0.055;
        bodyRef.current.position.y = bounce;
        // Subtle roll — shifts weight side to side
        bodyRef.current.rotation.z = Math.sin(t * freq) * 0.04;
        // Slight forward lean when running
        bodyRef.current.rotation.x = running ? -0.06 : 0;
      } else {
        // Breathing idle
        bodyRef.current.position.y = Math.sin(t * 1.8) * 0.012;
        bodyRef.current.rotation.z = 0;
        bodyRef.current.rotation.x = 0;
      }
    }

    // Head sway / look
    if (headGroup.current) {
      if (moving) {
        headGroup.current.rotation.x = Math.sin(t * freq * 0.5) * 0.06;
        headGroup.current.rotation.z = Math.sin(t * freq * 0.5) * 0.03;
      } else {
        // idle look-around
        headGroup.current.rotation.y = Math.sin(t * 0.6) * 0.25;
        headGroup.current.rotation.x = Math.sin(t * 0.9) * 0.04;
      }
    }

    // Tail
    if (tailGroup.current) {
      const wagSpeed = moving ? (running ? 14 : 9) : 3.5;
      const wagAmt   = moving ? (running ? 0.7 : 0.55) : 0.35;
      tailGroup.current.rotation.z = 0.5 + Math.sin(t * wagSpeed) * wagAmt;
      tailGroup.current.rotation.y = Math.sin(t * wagSpeed * 0.7) * 0.2;
    }
  });

  const fur   = "#f5f0e5";
  const inner = "#e8ddc8";
  const dark  = "#111111";
  const pink  = "#e87878";

  return (
    <group ref={groupRef}>
      {/* bodyRef — entire dog, for bounce/sway */}
      <group ref={bodyRef}>

        {/* ── Torso ── */}
        <mesh ref={chestRef} position={[0, 0.40, 0]} scale={[1, 0.88, 1.22]} castShadow>
          <sphereGeometry args={[0.28, 16, 12]} />
          <meshStandardMaterial color={fur} roughness={0.88} />
        </mesh>
        {/* rump */}
        <mesh position={[0, 0.37, -0.22]} scale={[0.9, 0.82, 0.9]} castShadow>
          <sphereGeometry args={[0.24, 12, 10]} />
          <meshStandardMaterial color={fur} roughness={0.88} />
        </mesh>
        {/* chest fur puff */}
        <mesh position={[0, 0.44, 0.22]} scale={[0.85, 0.85, 0.7]}>
          <sphereGeometry args={[0.20, 10, 8]} />
          <meshStandardMaterial color="#faf6ee" roughness={0.92} />
        </mesh>

        {/* ── Neck ── */}
        <mesh position={[0, 0.60, 0.20]} rotation={[0.45, 0, 0]} castShadow>
          <cylinderGeometry args={[0.10, 0.13, 0.24, 10]} />
          <meshStandardMaterial color={fur} roughness={0.9} />
        </mesh>

        {/* ── Head ── */}
        <group ref={headGroup} position={[0, 0.76, 0.34]}>
          {/* skull */}
          <mesh castShadow>
            <sphereGeometry args={[0.195, 16, 12]} />
            <meshStandardMaterial color={fur} roughness={0.88} />
          </mesh>
          {/* brow bump */}
          <mesh position={[0, 0.10, 0.08]}>
            <sphereGeometry args={[0.115, 10, 8]} />
            <meshStandardMaterial color="#faf5ed" roughness={0.92} />
          </mesh>
          {/* cheek puffs */}
          <mesh position={[ 0.13, -0.02, 0.10]}>
            <sphereGeometry args={[0.10, 10, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>
          <mesh position={[-0.13, -0.02, 0.10]}>
            <sphereGeometry args={[0.10, 10, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>

          {/* Snout */}
          <mesh position={[0, -0.038, 0.175]} scale={[1, 0.85, 0.9]}>
            <sphereGeometry args={[0.10, 12, 9]} />
            <meshStandardMaterial color={inner} roughness={0.82} />
          </mesh>
          {/* Nose */}
          <mesh position={[0, -0.005, 0.268]}>
            <sphereGeometry args={[0.032, 10, 8]} />
            <meshStandardMaterial color={dark} roughness={0.25} metalness={0.1} />
          </mesh>
          {/* nose shine */}
          <mesh position={[0.012, 0.005, 0.296]}>
            <sphereGeometry args={[0.008, 6, 6]} />
            <meshStandardMaterial color="white" roughness={0.1} />
          </mesh>

          {/* Eyes */}
          <mesh position={[ 0.082, 0.055, 0.172]}>
            <sphereGeometry args={[0.030, 12, 10]} />
            <meshStandardMaterial color={dark} roughness={0.2} />
          </mesh>
          <mesh position={[-0.082, 0.055, 0.172]}>
            <sphereGeometry args={[0.030, 12, 10]} />
            <meshStandardMaterial color={dark} roughness={0.2} />
          </mesh>
          {/* Eye shines */}
          <mesh position={[ 0.092, 0.068, 0.196]}>
            <sphereGeometry args={[0.009, 6, 6]} />
            <meshStandardMaterial color="white" roughness={0.05} />
          </mesh>
          <mesh position={[-0.072, 0.068, 0.196]}>
            <sphereGeometry args={[0.009, 6, 6]} />
            <meshStandardMaterial color="white" roughness={0.05} />
          </mesh>
          {/* Brown eye ring */}
          <mesh position={[ 0.082, 0.055, 0.170]}>
            <sphereGeometry args={[0.032, 12, 10]} />
            <meshStandardMaterial color="#6b3a1f" roughness={0.3} transparent opacity={0.6} />
          </mesh>
          <mesh position={[-0.082, 0.055, 0.170]}>
            <sphereGeometry args={[0.032, 12, 10]} />
            <meshStandardMaterial color="#6b3a1f" roughness={0.3} transparent opacity={0.6} />
          </mesh>

          {/* Tongue */}
          <mesh position={[0, -0.09, 0.245]} rotation={[0.35, 0, 0]} scale={[1, 0.7, 0.6]}>
            <sphereGeometry args={[0.050, 10, 7]} />
            <meshStandardMaterial color={pink} roughness={0.55} />
          </mesh>

          {/* Ears — floppy */}
          <mesh position={[ 0.175, 0.09, -0.06]} rotation={[0.1, 0, 0.55]} scale={[0.7, 1.1, 0.6]} castShadow>
            <sphereGeometry args={[0.108, 10, 8]} />
            <meshStandardMaterial color={inner} roughness={0.88} />
          </mesh>
          <mesh position={[-0.175, 0.09, -0.06]} rotation={[0.1, 0, -0.55]} scale={[0.7, 1.1, 0.6]} castShadow>
            <sphereGeometry args={[0.108, 10, 8]} />
            <meshStandardMaterial color={inner} roughness={0.88} />
          </mesh>
        </group>

        {/* ── Legs ── each group pivots from shoulder/hip ── */}
        {/* Front-left */}
        <group ref={fl} position={[ 0.155, 0.28, 0.13]}>
          <mesh position={[0, -0.17, 0]} castShadow>
            <capsuleGeometry args={[0.052, 0.22, 6, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>
          <mesh position={[0, -0.30, 0.025]} scale={[1.1, 0.8, 1.15]}>
            <sphereGeometry args={[0.065, 10, 8]} />
            <meshStandardMaterial color={inner} roughness={0.72} />
          </mesh>
        </group>
        {/* Front-right */}
        <group ref={fr} position={[-0.155, 0.28, 0.13]}>
          <mesh position={[0, -0.17, 0]} castShadow>
            <capsuleGeometry args={[0.052, 0.22, 6, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>
          <mesh position={[0, -0.30, 0.025]} scale={[1.1, 0.8, 1.15]}>
            <sphereGeometry args={[0.065, 10, 8]} />
            <meshStandardMaterial color={inner} roughness={0.72} />
          </mesh>
        </group>
        {/* Back-left */}
        <group ref={bl} position={[ 0.145, 0.27, -0.18]}>
          <mesh position={[0, -0.17, 0]} castShadow>
            <capsuleGeometry args={[0.054, 0.22, 6, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>
          <mesh position={[0, -0.30, 0.02]} scale={[1.1, 0.8, 1.15]}>
            <sphereGeometry args={[0.065, 10, 8]} />
            <meshStandardMaterial color={inner} roughness={0.72} />
          </mesh>
        </group>
        {/* Back-right */}
        <group ref={br} position={[-0.145, 0.27, -0.18]}>
          <mesh position={[0, -0.17, 0]} castShadow>
            <capsuleGeometry args={[0.054, 0.22, 6, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>
          <mesh position={[0, -0.30, 0.02]} scale={[1.1, 0.8, 1.15]}>
            <sphereGeometry args={[0.065, 10, 8]} />
            <meshStandardMaterial color={inner} roughness={0.72} />
          </mesh>
        </group>

        {/* ── Tail ── mounted on rump ── */}
        <group ref={tailGroup} position={[0, 0.46, -0.38]}>
          <mesh rotation={[-0.4, 0, 0.4]} castShadow>
            <capsuleGeometry args={[0.042, 0.20, 6, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>
          {/* curl */}
          <mesh position={[0.06, 0.18, -0.06]} scale={0.85}>
            <capsuleGeometry args={[0.036, 0.12, 6, 8]} />
            <meshStandardMaterial color={fur} roughness={0.9} />
          </mesh>
          {/* tail tip */}
          <mesh position={[0.10, 0.26, -0.08]}>
            <sphereGeometry args={[0.058, 10, 8]} />
            <meshStandardMaterial color="white" roughness={0.92} />
          </mesh>
        </group>

      </group>
    </group>
  );
});

Dog.displayName = "Dog";
