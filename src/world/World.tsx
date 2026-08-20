import { useCallback, useEffect, useRef } from "react";
import * as THREE from "three";
import { useFrame, useThree } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Environment, Stars } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette, SMAA } from "@react-three/postprocessing";
import Island from "./Island";
import Highways from "./Highways";
import District, { CrateStack, Ramp, TrophyPins } from "./District";
import BlockText from "./BlockText";
import Car from "./Car";
import { PALETTE } from "./palette";
import { PROFILE, UPCOMING, ZONES } from "./content";
import { worldStore } from "./store";

export default function World() {
  const inside = useRef<string | null>(null);

  // Zone entry is a distance check rather than a physics sensor — one cheap
  // test per frame, and it can't be missed by a fast-moving car tunnelling.
  const handleMove = useCallback((position: THREE.Vector3) => {
    let found: string | null = null;
    for (const zone of ZONES) {
      const [zx, zz] = zone.position;
      // Must clear the pylon ring at radius + 4: approach a pylon head-on and
      // the car stops against it, so a tighter trigger is unreachable.
      if (Math.hypot(position.x - zx, position.z - zz) < zone.radius + 9) {
        found = zone.id;
        break;
      }
    }
    if (found === inside.current) return;
    if (inside.current) worldStore.leaveZone(inside.current);
    if (found) worldStore.enterZone(found);
    inside.current = found;
  }, []);

  return (
    <>
      <AdaptiveFov />
      <color attach="background" args={[PALETTE.fog]} />
      <fogExp2 attach="fog" args={[PALETTE.fog, 0.0075]} />

      <hemisphereLight args={[PALETTE.horizon, PALETTE.ground, 1.55]} />
      <ambientLight intensity={0.5} color="#6c5fbb" />
      <directionalLight
        position={[48, 70, 28]}
        intensity={1.9}
        color={PALETTE.moon}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-camera-near={1}
        shadow-camera-far={220}
        shadow-camera-left={-90}
        shadow-camera-right={90}
        shadow-camera-top={90}
        shadow-camera-bottom={-90}
        shadow-bias={-0.0006}
      />

      <Stars radius={260} depth={70} count={4200} factor={5} fade speed={0.6} />
      <Environment preset="night" />
      <Moon />

      {/* A fixed step keeps the solver stable and lets rapier interpolate the
          car's transform between steps — "vary" feeds every render hitch
          straight into the physics and shows up as camera judder. */}
      <Physics timeStep={1 / 60} interpolate gravity={[0, -30, 0]}>
        <Island />
        {ZONES.map((zone) => (
          <District key={zone.id} zone={zone} />
        ))}

        <Plaza />
        <CrateStack position={[-15, 4]} />
        <CrateStack position={[15, 4]} />
        <TrophyPins position={[-54, 54]} />
        {/* Ramps sit in the gaps between the four spoke roads. */}
        <Ramp position={[0, -48]} rotation={0} />
        <Ramp position={[56, 0]} rotation={Math.PI / 2} />
        <Ramp position={[0, 50]} rotation={Math.PI} />

        <Car onMove={handleMove} />
      </Physics>

      <Highways />
      <Beacons />

      <EffectComposer multisampling={0}>
        <Bloom
          intensity={1.25}
          luminanceThreshold={0.75}
          luminanceSmoothing={0.28}
          mipmapBlur
          radius={0.72}
        />
        <Vignette offset={0.28} darkness={0.72} />
        <SMAA />
      </EffectComposer>
    </>
  );
}

/**
 * Hold the *horizontal* field of view constant so the framing survives any
 * window shape — a short, wide browser window shouldn't crop the districts.
 */
function AdaptiveFov() {
  const camera = useThree((s) => s.camera) as THREE.PerspectiveCamera;
  const size = useThree((s) => s.size);

  useEffect(() => {
    const aspect = size.width / size.height;
    const targetHorizontal = THREE.MathUtils.degToRad(78);
    const vertical = 2 * Math.atan(Math.tan(targetHorizontal / 2) / Math.max(aspect, 0.3));
    camera.fov = THREE.MathUtils.clamp(THREE.MathUtils.radToDeg(vertical), 45, 82);
    camera.updateProjectionMatrix();
  }, [camera, size]);

  return null;
}

function Moon() {
  return (
    <group position={[130, 82, -170]}>
      <mesh>
        <sphereGeometry args={[16, 24, 24]} />
        <meshBasicMaterial color="#e8e6ff" toneMapped={false} />
      </mesh>
      <mesh>
        <sphereGeometry args={[22, 20, 20]} />
        <meshBasicMaterial color="#8f7bff" transparent opacity={0.16} depthWrite={false} />
      </mesh>
    </group>
  );
}

function Plaza() {
  const title = useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    if (title.current) title.current.position.y = 17 + Math.sin(clock.elapsedTime * 0.7) * 0.6;
  });

  return (
    <group>
      <group ref={title} position={[0, 17, -34]}>
        <BlockText
          size={1.5}
          depth={2.2}
          color="#7fa4ff"
          emissive="#2f5bff"
          emissiveIntensity={1.5}
          wave={0.35}
        >
          {PROFILE.short}
        </BlockText>
      </group>
      <BlockText
        position={[0, 8.4, -34]}
        size={0.44}
        depth={0.4}
        color="#e8e2ff"
        emissive="#9d8bff"
        emissiveIntensity={0.9}
      >
        DRIVE ANYWHERE
      </BlockText>

      {/* Each road gets its destination painted flat on the tarmac, oriented so
          it reads the right way up as you drive out along that spoke. */}
      {ZONES.map((zone) => {
        const [x, z] = zone.position;
        const length = Math.hypot(x, z);
        const dx = x / length;
        const dz = z / length;
        return (
          <BlockText
            key={zone.id}
            position={[dx * 19, 0.35, dz * 19]}
            rotation={[-Math.PI / 2, 0, Math.atan2(-dx, -dz)]}
            size={0.42}
            depth={0.5}
            color={zone.glow}
            emissive={zone.color}
            emissiveIntensity={2.2}
          >
            {zone.sign}
          </BlockText>
        );
      })}
    </group>
  );
}

/** The two upcoming events, as beacons you can see from across the island. */
function Beacons() {
  // Flanking the NEXT district, out past its far edge.
  const positions: [number, number][] = [
    [56, 80],
    [80, 56],
  ];

  return (
    <group>
      {UPCOMING.map((event, i) => (
        <group key={event.id} position={[positions[i][0], 0, positions[i][1]]}>
          <mesh position={[0, 9, 0]} castShadow>
            <cylinderGeometry args={[0.8, 1.6, 18, 6]} />
            <meshStandardMaterial color="#38346d" roughness={0.7} flatShading />
          </mesh>
          <mesh position={[0, 19.5, 0]}>
            <icosahedronGeometry args={[2.3, 0]} />
            <meshStandardMaterial
              color={event.color}
              emissive={event.color}
              emissiveIntensity={4}
              toneMapped={false}
            />
          </mesh>
          <pointLight
            position={[0, 19.5, 0]}
            color={event.color}
            intensity={90}
            distance={55}
            decay={2}
          />
          <BlockText
            position={[0, 25, 0]}
            rotation={[0, Math.atan2(-positions[i][0], -positions[i][1]), 0]}
            size={0.46}
            depth={0.5}
            color="#ffffff"
            emissive={event.color}
            emissiveIntensity={1.8}
          >
            {event.name}
          </BlockText>
        </group>
      ))}
    </group>
  );
}
