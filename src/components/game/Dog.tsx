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
  const groupRef = useRef<THREE.Group>(null);
  const bodyRef  = useRef<THREE.Mesh>(null);
  const fl = useRef<THREE.Group>(null); // front-left leg
  const fr = useRef<THREE.Group>(null);
  const bl = useRef<THREE.Group>(null);
  const br = useRef<THREE.Group>(null);
  const tailRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);

  useImperativeHandle(ref, () => ({ get group() { return groupRef.current; } }));

  useFrame(({ clock }) => {
    const t = clock.elapsedTime;
    const speed = running ? 12 : 7;
    const swing = moving ? Math.sin(t * speed) * 0.55 : 0;

    if (fl.current) fl.current.rotation.x =  swing;
    if (fr.current) fr.current.rotation.x = -swing;
    if (bl.current) bl.current.rotation.x = -swing;
    if (br.current) br.current.rotation.x =  swing;

    if (bodyRef.current) {
      bodyRef.current.position.y = moving ? Math.abs(Math.sin(t * speed)) * 0.045 : 0;
    }

    // tail wag
    if (tailRef.current) {
      tailRef.current.rotation.z = moving
        ? 0.6 + Math.sin(t * 10) * 0.5
        : 0.4 + Math.sin(t * 3) * 0.25;
    }

    // head bob
    if (headRef.current) {
      headRef.current.rotation.x = moving ? Math.sin(t * speed * 0.5) * 0.08 : 0;
    }
  });

  const furColor = "#f5f0e8";
  const darkColor = "#1a1a1a";
  const noseColor = "#2a1a1a";
  const tongueColor = "#e87070";

  return (
    <group ref={groupRef}>
      {/* ── Body ── */}
      <mesh ref={bodyRef} position={[0, 0.38, 0]} castShadow>
        <sphereGeometry args={[0.28, 16, 12]} />
        <meshStandardMaterial color={furColor} roughness={0.9} />
      </mesh>

      {/* body fur bumps */}
      <mesh position={[0.08, 0.42, 0.15]} castShadow>
        <sphereGeometry args={[0.14, 10, 8]} />
        <meshStandardMaterial color={furColor} roughness={0.95} />
      </mesh>
      <mesh position={[-0.08, 0.42, 0.15]} castShadow>
        <sphereGeometry args={[0.13, 10, 8]} />
        <meshStandardMaterial color={furColor} roughness={0.95} />
      </mesh>

      {/* ── Neck ── */}
      <mesh position={[0, 0.58, 0.18]} rotation={[0.4, 0, 0]} castShadow>
        <cylinderGeometry args={[0.11, 0.14, 0.22, 10]} />
        <meshStandardMaterial color={furColor} roughness={0.9} />
      </mesh>

      {/* ── Head ── */}
      <group ref={headRef} position={[0, 0.72, 0.3]}>
        <mesh castShadow>
          <sphereGeometry args={[0.20, 16, 12]} />
          <meshStandardMaterial color={furColor} roughness={0.9} />
        </mesh>

        {/* forehead puff */}
        <mesh position={[0, 0.10, 0.05]}>
          <sphereGeometry args={[0.13, 10, 8]} />
          <meshStandardMaterial color={furColor} roughness={0.95} />
        </mesh>

        {/* Snout */}
        <mesh position={[0, -0.04, 0.17]} castShadow>
          <sphereGeometry args={[0.10, 12, 8]} />
          <meshStandardMaterial color="#e8dcc8" roughness={0.85} />
        </mesh>

        {/* Nose */}
        <mesh position={[0, 0.00, 0.265]}>
          <sphereGeometry args={[0.035, 10, 8]} />
          <meshStandardMaterial color={noseColor} roughness={0.3} />
        </mesh>

        {/* Eyes */}
        <mesh position={[ 0.085, 0.05, 0.175]}>
          <sphereGeometry args={[0.028, 10, 8]} />
          <meshStandardMaterial color={darkColor} roughness={0.2} />
        </mesh>
        <mesh position={[-0.085, 0.05, 0.175]}>
          <sphereGeometry args={[0.028, 10, 8]} />
          <meshStandardMaterial color={darkColor} roughness={0.2} />
        </mesh>
        {/* Eye shine */}
        <mesh position={[ 0.092, 0.062, 0.195]}>
          <sphereGeometry args={[0.01, 6, 6]} />
          <meshStandardMaterial color="white" roughness={0.1} />
        </mesh>
        <mesh position={[-0.078, 0.062, 0.195]}>
          <sphereGeometry args={[0.01, 6, 6]} />
          <meshStandardMaterial color="white" roughness={0.1} />
        </mesh>

        {/* Tongue */}
        <mesh position={[0, -0.095, 0.24]} rotation={[0.3, 0, 0]}>
          <sphereGeometry args={[0.045, 10, 6]} />
          <meshStandardMaterial color={tongueColor} roughness={0.6} />
        </mesh>

        {/* Ears */}
        <mesh position={[ 0.17, 0.12, -0.04]} rotation={[0, 0, 0.5]} castShadow>
          <sphereGeometry args={[0.095, 10, 8]} />
          <meshStandardMaterial color="#e8dcc0" roughness={0.9} />
        </mesh>
        <mesh position={[-0.17, 0.12, -0.04]} rotation={[0, 0, -0.5]} castShadow>
          <sphereGeometry args={[0.095, 10, 8]} />
          <meshStandardMaterial color="#e8dcc0" roughness={0.9} />
        </mesh>
      </group>

      {/* ── Legs — each leg is a group so rotation pivots from top ── */}
      {/* Front-left */}
      <group ref={fl} position={[ 0.14, 0.28, 0.14]}>
        <mesh position={[0, -0.18, 0]} castShadow>
          <capsuleGeometry args={[0.055, 0.24, 6, 8]} />
          <meshStandardMaterial color={furColor} roughness={0.9} />
        </mesh>
        {/* paw */}
        <mesh position={[0, -0.32, 0.02]}>
          <sphereGeometry args={[0.065, 10, 8]} />
          <meshStandardMaterial color="#e8dcc0" roughness={0.7} />
        </mesh>
      </group>

      {/* Front-right */}
      <group ref={fr} position={[-0.14, 0.28, 0.14]}>
        <mesh position={[0, -0.18, 0]} castShadow>
          <capsuleGeometry args={[0.055, 0.24, 6, 8]} />
          <meshStandardMaterial color={furColor} roughness={0.9} />
        </mesh>
        <mesh position={[0, -0.32, 0.02]}>
          <sphereGeometry args={[0.065, 10, 8]} />
          <meshStandardMaterial color="#e8dcc0" roughness={0.7} />
        </mesh>
      </group>

      {/* Back-left */}
      <group ref={bl} position={[ 0.14, 0.28, -0.16]}>
        <mesh position={[0, -0.18, 0]} castShadow>
          <capsuleGeometry args={[0.055, 0.24, 6, 8]} />
          <meshStandardMaterial color={furColor} roughness={0.9} />
        </mesh>
        <mesh position={[0, -0.32, 0.02]}>
          <sphereGeometry args={[0.065, 10, 8]} />
          <meshStandardMaterial color="#e8dcc0" roughness={0.7} />
        </mesh>
      </group>

      {/* Back-right */}
      <group ref={br} position={[-0.14, 0.28, -0.16]}>
        <mesh position={[0, -0.18, 0]} castShadow>
          <capsuleGeometry args={[0.055, 0.24, 6, 8]} />
          <meshStandardMaterial color={furColor} roughness={0.9} />
        </mesh>
        <mesh position={[0, -0.32, 0.02]}>
          <sphereGeometry args={[0.065, 10, 8]} />
          <meshStandardMaterial color="#e8dcc0" roughness={0.7} />
        </mesh>
      </group>

      {/* ── Tail ── */}
      <group ref={tailRef} position={[0, 0.44, -0.26]}>
        <mesh rotation={[-0.5, 0, 0]} castShadow>
          <capsuleGeometry args={[0.045, 0.22, 6, 8]} />
          <meshStandardMaterial color={furColor} roughness={0.9} />
        </mesh>
        {/* tail tip puff */}
        <mesh position={[0, 0.16, -0.08]}>
          <sphereGeometry args={[0.06, 10, 8]} />
          <meshStandardMaterial color="white" roughness={0.95} />
        </mesh>
      </group>
    </group>
  );
});

Dog.displayName = "Dog";
