import { createContext, useContext, useRef } from "react";
import * as THREE from "three";
import { PAINTS, WHEEL_BY_ID, WHEELS, type Paint } from "./garage";

/**
 * The player's car: a low-slung light-runner. Almost all of its read comes
 * from emissive trim rather than form — in a night world lit mostly by bloom,
 * a dark wedge with bright edges is legible from across the island in a way
 * that a detailed but unlit model never is.
 *
 * Paint and body kit are chosen in the garage; both are applied here.
 */
export type VehicleRig = {
  /** Front-left, front-right, back-left, back-right. */
  wheels: (THREE.Group | null)[];
  /** The two steerable front hubs. */
  hubs: (THREE.Group | null)[];
  /** All four mounts, moved vertically to fake suspension travel. */
  mounts: (THREE.Group | null)[];
  /** Thruster meshes, brightened under throttle. */
  thrusters: (THREE.Mesh | null)[];
  thrusterLight: THREE.PointLight | null;
};

export const useVehicleRig = () =>
  useRef<VehicleRig>({
    wheels: [null, null, null, null],
    hubs: [null, null],
    mounts: [null, null, null, null],
    thrusters: [null, null],
    thrusterLight: null,
  });

/**
 * Paint travels by context rather than props: every strip and panel needs it,
 * and threading colours through six levels of nested geometry would bury the
 * shapes in plumbing.
 */
const PaintContext = createContext<Paint>(PAINTS[0]);
const usePaint = () => useContext(PaintContext);

/** Lightened shell colour, for shoulders and secondary panels. */
function lighten(hex: string, amount = 0.14) {
  return `#${new THREE.Color(hex).lerp(new THREE.Color("#ffffff"), amount).getHexString()}`;
}

type AnimateArgs = {
  /** Signed forward speed, world units/sec. */
  speed: number;
  steer: number;
  throttle: number;
  brake: boolean;
  delta: number;
  paint: Paint;
  /** How hard the car is sliding sideways, for weight transfer. */
  lateral: number;
  /** Vertical speed, so a landing visibly compresses the springs. */
  vertical: number;
  braking: boolean;
};

/** Rest height of a wheel mount, and how far it may travel either way. */
const MOUNT_Y = -0.3;
const TRAVEL = 0.17;

export function animateVehicle(
  rig: VehicleRig,
  { speed, steer, throttle, brake, delta, paint, lateral, vertical, braking }: AnimateArgs,
) {
  const spin = speed * delta * 2.2;
  rig.wheels.forEach((wheel) => {
    if (wheel) wheel.rotation.x -= spin;
  });

  /*
   * Suspension. Weight moves the way it would in a real car: forwards under
   * braking, back under power, and outwards through a corner — so the body
   * visibly leans on the loaded corner instead of floating level. A hard
   * landing compresses everything at once.
   */
  const slam = Math.min(Math.abs(vertical) / 18, 1);
  const squat = braking ? -1 : Math.max(throttle, 0);
  const springRate = 1 - Math.pow(0.0006, delta);
  rig.mounts.forEach((mount, i) => {
    if (!mount) return;
    const front = i < 2;
    const outer = i % 2 === 0 ? -1 : 1;
    // Positive compresses (mount rises towards the body).
    const pitchLoad = front ? -squat * 0.6 : squat * 0.6;
    const rollLoad = -steer * outer * Math.min(lateral / 8, 1) * 0.9;
    const target = MOUNT_Y + THREE.MathUtils.clamp(pitchLoad + rollLoad + slam, -1, 1) * TRAVEL;
    mount.position.y = THREE.MathUtils.lerp(mount.position.y, target, springRate);
  });

  // Front hubs ease to the steering angle instead of snapping to it.
  const steerRate = 1 - Math.pow(0.0002, delta);
  rig.hubs.forEach((hub) => {
    if (hub) hub.rotation.y = THREE.MathUtils.lerp(hub.rotation.y, steer * 0.42, steerRate);
  });

  // Thrusters flare on power and burn red under braking — which doubles as the
  // drift tell, since the handbrake is how you break traction.
  const load = brake ? 1 : Math.max(throttle, 0);
  const target = 3 + load * 9 + Math.min(Math.abs(speed) / 26, 1) * 4;
  const rate = 1 - Math.pow(0.004, delta);
  const glow = brake ? "#ff2a5f" : paint.trim;
  rig.thrusters.forEach((mesh) => {
    if (!mesh) return;
    const material = mesh.material as THREE.MeshStandardMaterial;
    material.emissiveIntensity = THREE.MathUtils.lerp(material.emissiveIntensity, target, rate);
    material.color.set(glow);
    material.emissive.set(glow);
  });
  if (rig.thrusterLight) {
    rig.thrusterLight.intensity = THREE.MathUtils.lerp(
      rig.thrusterLight.intensity,
      8 + load * 26,
      rate,
    );
    rig.thrusterLight.color.set(glow);
  }
}

/** Thin glowing strip, the motif the whole vehicle is built from. */
function Strip({
  position,
  args,
  color,
  intensity = 4,
  rotation,
}: {
  position: [number, number, number];
  args: [number, number, number];
  color?: string;
  intensity?: number;
  rotation?: [number, number, number];
}) {
  const paint = usePaint();
  const hue = color ?? paint.trim;
  return (
    <mesh position={position} rotation={rotation}>
      <boxGeometry args={args} />
      <meshStandardMaterial
        color={hue}
        emissive={hue}
        emissiveIntensity={intensity}
        toneMapped={false}
      />
    </mesh>
  );
}

export function VehicleShell({
  rig,
  paint,
  design,
  wheel = "disc",
}: {
  rig: React.MutableRefObject<VehicleRig>;
  paint: Paint;
  design: string;
  wheel?: string;
}) {
  return (
    <PaintContext.Provider value={paint}>
      <group>
        <Hull />
        <Trim />
        <Thrusters rig={rig} />
        <Lights />
        <Wheels rig={rig} covered={design === "hover"} style={wheel} />
        <BodyKit design={design} />
      </group>
    </PaintContext.Provider>
  );
}

function Hull() {
  const paint = usePaint();
  const panel = lighten(paint.shell);

  return (
    <>
      {/* Main hull — wide, flat and low. */}
      <mesh castShadow receiveShadow position={[0, 0.02, 0]}>
        <boxGeometry args={[1.96, 0.44, 4.0]} />
        <meshStandardMaterial color={paint.shell} roughness={0.28} metalness={0.75} flatShading />
      </mesh>
      {/* Nose, stepped down and narrowed so the front reads as a blade. */}
      <mesh castShadow position={[0, -0.06, -2.14]}>
        <boxGeometry args={[1.62, 0.28, 0.72]} />
        <meshStandardMaterial color={paint.shell} roughness={0.3} metalness={0.7} flatShading />
      </mesh>
      <mesh castShadow position={[0, -0.13, -2.62]}>
        <boxGeometry args={[1.24, 0.16, 0.42]} />
        <meshStandardMaterial color={panel} roughness={0.3} metalness={0.7} flatShading />
      </mesh>
      {/* Shoulders over the rear wheels. */}
      {[-0.94, 0.94].map((x) => (
        <mesh key={x} castShadow position={[x, 0.16, 1.28]}>
          <boxGeometry args={[0.42, 0.5, 1.5]} />
          <meshStandardMaterial color={panel} roughness={0.3} metalness={0.7} flatShading />
        </mesh>
      ))}
      {/* Canopy: a single tinted wedge, no frame — frames read as clutter at
          this scale and kill the silhouette. */}
      <mesh castShadow position={[0, 0.42, -0.16]} rotation={[0.06, 0, 0]}>
        <boxGeometry args={[1.32, 0.46, 1.9]} />
        <meshStandardMaterial
          color="#0d1b3a"
          emissive={paint.trim}
          emissiveIntensity={0.35}
          roughness={0.06}
          metalness={0.9}
          transparent
          opacity={0.86}
        />
      </mesh>
    </>
  );
}

function Trim() {
  const paint = usePaint();
  return (
    <>
      {/* Flank strips — the line that says "light-runner". */}
      {[-1.0, 1.0].map((x) => (
        <Strip key={x} position={[x, 0.06, 0.1]} args={[0.06, 0.1, 3.5]} />
      ))}
      <Strip position={[0, -0.2, 0.1]} args={[1.3, 0.06, 3.2]} intensity={2.4} color={paint.accent} />
      <Strip position={[0, -0.13, -2.82]} args={[1.16, 0.09, 0.09]} intensity={7} />
      <Strip position={[0, 0.25, 1.5]} args={[0.9, 0.07, 0.07]} intensity={5} color={paint.accent} />
      <Strip position={[0, 0.16, 2.0]} args={[1.7, 0.12, 0.08]} intensity={6} color={paint.accent} />
    </>
  );
}

function Thrusters({ rig }: { rig: React.MutableRefObject<VehicleRig> }) {
  const paint = usePaint();
  return (
    <>
      {[-0.52, 0.52].map((x, i) => (
        <mesh
          key={x}
          position={[x, 0.02, 2.06]}
          rotation={[Math.PI / 2, 0, 0]}
          ref={(el) => (rig.current.thrusters[i] = el)}
        >
          <cylinderGeometry args={[0.26, 0.26, 0.12, 12]} />
          <meshStandardMaterial
            color={paint.trim}
            emissive={paint.trim}
            emissiveIntensity={4}
            toneMapped={false}
          />
        </mesh>
      ))}
      <pointLight
        position={[0, 0.1, 2.5]}
        distance={14}
        decay={2}
        intensity={10}
        color={paint.trim}
        ref={(el) => (rig.current.thrusterLight = el)}
      />
    </>
  );
}

function Lights() {
  const paint = usePaint();
  return (
    <>
      {[-0.5, 0.5].map((x) => (
        <mesh key={x} position={[x, -0.06, -2.48]}>
          <boxGeometry args={[0.34, 0.12, 0.1]} />
          <meshStandardMaterial
            color="#dff4ff"
            emissive="#bfe9ff"
            emissiveIntensity={6}
            toneMapped={false}
          />
        </mesh>
      ))}
      <spotLight
        position={[0, 0.1, -2.3]}
        target-position={[0, -1, -16]}
        angle={0.6}
        penumbra={0.7}
        intensity={44}
        distance={34}
        color="#d8f2ff"
      />
      {/* Underglow — the car sits in its own pool of light. */}
      <pointLight position={[0, -0.4, 0]} distance={9} decay={2} intensity={9} color={paint.accent} />
    </>
  );
}

/**
 * The unlockable body kits. Each is additive geometry on the same hull, so a
 * kit can never break the silhouette the physics collider assumes.
 */
function BodyKit({ design }: { design: string }) {
  const paint = usePaint();

  if (design === "stripe") {
    return (
      <>
        {[-0.34, 0.34].map((x) => (
          <mesh key={x} position={[x, 0.25, -0.1]}>
            <boxGeometry args={[0.26, 0.04, 3.9]} />
            <meshStandardMaterial
              color={paint.trim}
              emissive={paint.trim}
              emissiveIntensity={2.6}
              toneMapped={false}
            />
          </mesh>
        ))}
      </>
    );
  }

  if (design === "wing") {
    return (
      <>
        {[-0.78, 0.78].map((x) => (
          <mesh key={x} castShadow position={[x, 0.5, 1.86]}>
            <boxGeometry args={[0.12, 0.5, 0.3]} />
            <meshStandardMaterial color={lighten(paint.shell)} roughness={0.4} metalness={0.6} />
          </mesh>
        ))}
        <mesh castShadow position={[0, 0.76, 1.9]}>
          <boxGeometry args={[2.1, 0.1, 0.6]} />
          <meshStandardMaterial color={paint.shell} roughness={0.35} metalness={0.7} flatShading />
        </mesh>
        <Strip position={[0, 0.82, 1.9]} args={[2.0, 0.05, 0.12]} intensity={5} />
      </>
    );
  }

  if (design === "hover") {
    return (
      <>
        {/* Skirt: a continuous glowing lip around the base. */}
        {[
          { position: [0, -0.24, -1.6] as [number, number, number], args: [1.9, 0.1, 0.12] },
          { position: [0, -0.24, 1.8] as [number, number, number], args: [1.9, 0.1, 0.12] },
          { position: [-1.0, -0.24, 0.1] as [number, number, number], args: [0.12, 0.1, 3.6] },
          { position: [1.0, -0.24, 0.1] as [number, number, number], args: [0.12, 0.1, 3.6] },
        ].map((bar, i) => (
          <Strip
            key={i}
            position={bar.position}
            args={bar.args as [number, number, number]}
            color={paint.accent}
            intensity={4}
          />
        ))}
      </>
    );
  }

  if (design === "spike") {
    return (
      <>
        {/* Roof fin */}
        <mesh castShadow position={[0, 0.78, 0.5]}>
          <boxGeometry args={[0.1, 0.42, 1.3]} />
          <meshStandardMaterial color={paint.shell} roughness={0.35} metalness={0.7} flatShading />
        </mesh>
        <Strip position={[0, 0.99, 0.5]} args={[0.06, 0.06, 1.2]} intensity={6} />
        {/* Nose canards */}
        {[-1.0, 1.0].map((x) => (
          <mesh key={x} castShadow position={[x, -0.08, -2.0]} rotation={[0, 0, x > 0 ? -0.2 : 0.2]}>
            <boxGeometry args={[0.5, 0.07, 0.5]} />
            <meshStandardMaterial color={lighten(paint.shell)} roughness={0.4} metalness={0.6} />
          </mesh>
        ))}
        {[-1.05, 1.05].map((x) => (
          <Strip key={x} position={[x, -0.05, -2.16]} args={[0.42, 0.05, 0.06]} intensity={5} />
        ))}
      </>
    );
  }

  return null;
}

function Wheels({
  rig,
  covered,
  style,
}: {
  rig: React.MutableRefObject<VehicleRig>;
  covered: boolean;
  style: string;
}) {
  const paint = usePaint();
  const rim = WHEEL_BY_ID[style] ?? WHEELS[0];
  const mounts: [number, number, number][] = [
    [-1.02, -0.3, -1.32],
    [1.02, -0.3, -1.32],
    [-1.02, -0.3, 1.36],
    [1.02, -0.3, 1.36],
  ];

  return (
    <>
      {mounts.map(([x, y, z], index) => (
        <group
          key={index}
          position={[x, y, z]}
          ref={(el) => {
            rig.current.mounts[index] = el;
            if (index < 2) rig.current.hubs[index] = el;
          }}
        >
          <group ref={(el) => (rig.current.wheels[index] = el)}>
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.54, 0.54, 0.36, 14]} />
              <meshStandardMaterial color="#0c0e1f" roughness={0.9} flatShading />
            </mesh>
            {/* Glowing rim, lightcycle-style, on the outboard face only. */}
            <mesh rotation={[Math.PI / 2, 0, 0]} position={[x > 0 ? 0.19 : -0.19, 0, 0]}>
              <torusGeometry args={[rim.rim, 0.055, 8, 20]} />
              <meshStandardMaterial
                color={paint.trim}
                emissive={paint.trim}
                emissiveIntensity={4.5}
                toneMapped={false}
              />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]} position={[x > 0 ? 0.2 : -0.2, 0, 0]}>
              <cylinderGeometry args={[0.16, 0.16, 0.06, 8]} />
              <meshStandardMaterial color="#8fa8ff" metalness={0.9} roughness={0.2} flatShading />
            </mesh>
            {/* Spokes, drawn as thin bars across the rim face. */}
            {Array.from({ length: rim.spokes }).map((_, spoke) => (
              <mesh
                key={spoke}
                position={[x > 0 ? 0.21 : -0.21, 0, 0]}
                rotation={[(spoke / rim.spokes) * Math.PI, 0, Math.PI / 2]}
              >
                <boxGeometry args={[0.05, 0.04, rim.rim * 1.9]} />
                <meshStandardMaterial
                  color={paint.trim}
                  emissive={paint.trim}
                  emissiveIntensity={1.6}
                  toneMapped={false}
                />
              </mesh>
            ))}
          </group>

          {/* Wheel covers don't spin with the wheel, so they sit outside the
              spinning group. */}
          {covered && (
            <mesh rotation={[0, 0, Math.PI / 2]} position={[x > 0 ? 0.3 : -0.3, 0, 0]}>
              <cylinderGeometry args={[0.6, 0.6, 0.06, 12]} />
              <meshStandardMaterial
                color={lighten(paint.shell, 0.2)}
                metalness={0.8}
                roughness={0.25}
                flatShading
              />
            </mesh>
          )}
        </group>
      ))}
    </>
  );
}
