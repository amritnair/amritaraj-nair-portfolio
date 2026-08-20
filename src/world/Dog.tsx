import { useRef } from "react";
import * as THREE from "three";

/**
 * The player character: a chunky low-poly dog, built from the same flat-shaded
 * boxes as the rest of the island so it sits in the world rather than on top
 * of it. Everything here is primitives — no external asset, no loader, no
 * licence to honour.
 *
 * The rig is deliberately shallow. Four legs, a head, two ears and a tail is
 * all the articulation a chase-cam view can actually read at speed.
 */
export type DogRig = {
  /** Hip/shoulder pivots, ordered front-left, front-right, back-left, back-right. */
  legs: (THREE.Group | null)[];
  head: THREE.Group | null;
  ears: (THREE.Group | null)[];
  tail: THREE.Group | null;
  body: THREE.Group | null;
};

export const createDogRig = (): DogRig => ({
  legs: [null, null, null, null],
  head: null,
  ears: [null, null],
  tail: null,
  body: null,
});

/**
 * Lifts the body so the paws land on the bottom face of the physics collider.
 * The rig hangs off the torso, so this is the one number that decides whether
 * the dog stands on the ground or wades through it.
 */
const BODY_Y = 0.74;

/**
 * Shared by all four legs so the paws land level. Front and back read
 * differently through the haunch and shoulder boxes around them, not through
 * limbs of different lengths — a dog with short front legs looks injured.
 */
const THIGH = 0.58;

const FUR = "#c8783c";
const FUR_DARK = "#a75f2c";
const CREAM = "#f2d9b8";
const NOSE = "#241c26";

/** Distance-based gait phase, so the legs stay in step with the ground. */
const gait = { phase: 0 };

type AnimateArgs = {
  /** Signed forward speed in world units/sec. */
  speed: number;
  /** -1..1 steering input. */
  steer: number;
  /** -1..1 throttle input. */
  throttle: number;
  delta: number;
  elapsed: number;
};

export function animateDog(rig: DogRig, { speed, steer, throttle, delta, elapsed }: AnimateArgs) {
  const pace = Math.abs(speed);
  // Stride frequency rises with speed but flattens out, so a sprint reads as a
  // fast trot rather than a blur of legs.
  gait.phase += delta * (1.6 + Math.min(pace, 26) * 0.42);

  // A trot: diagonal pairs move together (FL+BR, then FR+BL).
  const swing = Math.min(pace / 7, 1) * 0.85;
  const idle = Math.sin(elapsed * 1.6) * 0.03;
  const phases = [0, Math.PI, Math.PI, 0];
  rig.legs.forEach((leg, i) => {
    if (!leg) return;
    const target = swing > 0.02 ? Math.sin(gait.phase + phases[i]) * swing : idle;
    leg.rotation.x = THREE.MathUtils.lerp(leg.rotation.x, target, 1 - Math.pow(0.0001, delta));
  });

  // The body bounces at twice stride frequency — one bob per footfall pair.
  if (rig.body) {
    const bounce = Math.min(pace / 10, 1) * 0.09;
    rig.body.position.y = BODY_Y + Math.abs(Math.sin(gait.phase)) * bounce;
    rig.body.rotation.z = THREE.MathUtils.lerp(
      rig.body.rotation.z,
      -steer * Math.min(pace / 8, 1) * 0.12,
      1 - Math.pow(0.002, delta),
    );
  }

  // Head leads the turn and dips when accelerating, like a dog leaning into a run.
  if (rig.head) {
    const yaw = steer * 0.34 * Math.min(pace / 5 + 0.3, 1);
    const pitch = -throttle * 0.08 + Math.sin(gait.phase * 2) * 0.02;
    const rate = 1 - Math.pow(0.002, delta);
    rig.head.rotation.y = THREE.MathUtils.lerp(rig.head.rotation.y, yaw, rate);
    rig.head.rotation.x = THREE.MathUtils.lerp(rig.head.rotation.x, pitch, rate);
  }

  // Ears flap from the run, and stream backwards at speed.
  const flap = Math.sin(gait.phase * 1.7) * Math.min(pace / 12, 1) * 0.5;
  const streamed = Math.min(pace / 20, 1) * 0.7;
  rig.ears.forEach((ear, i) => {
    if (!ear) return;
    ear.rotation.x = THREE.MathUtils.lerp(ear.rotation.x, streamed + flap * (i ? -1 : 1), 0.2);
  });

  // Tail wags constantly, faster the happier (= faster) the dog is.
  if (rig.tail) {
    rig.tail.rotation.y = Math.sin(elapsed * (5 + pace * 0.5)) * (0.35 + Math.min(pace / 30, 0.35));
    // Positive X leans the tail back and away from the body; at speed it
    // streams out further instead of curling over the spine.
    // Angled well back rather than straight up: from a chase camera an upright
    // tail projects onto the body and disappears into it.
    rig.tail.rotation.x = 0.95 + Math.min(pace / 26, 0.35);
  }
}

export function DogShell({ rig }: { rig: React.MutableRefObject<DogRig> }) {
  return (
    <group position={[0, BODY_Y, 0]} ref={(el) => (rig.current.body = el)}>
      {/* Torso. Longer and shallower than instinct suggests — a tall box on
          four legs reads as a bear, and the length is what says "dog". */}
      <mesh castShadow receiveShadow position={[0, 0.08, 0.1]}>
        <boxGeometry args={[1.2, 0.86, 2.5]} />
        <meshStandardMaterial color={FUR} roughness={0.75} flatShading />
      </mesh>
      {/* Chest, a touch broader and lighter */}
      <mesh castShadow receiveShadow position={[0, -0.02, -1.0]}>
        <boxGeometry args={[1.28, 0.84, 0.8]} />
        <meshStandardMaterial color={FUR_DARK} roughness={0.75} flatShading />
      </mesh>
      {/* Belly patch */}
      <mesh position={[0, -0.3, 0.1]}>
        <boxGeometry args={[1.04, 0.34, 2.2]} />
        <meshStandardMaterial color={CREAM} roughness={0.8} flatShading />
      </mesh>
      {/* Haunches, sitting proud of the torso so the back legs have a hip */}
      <mesh castShadow position={[0, 0.1, 1.3]}>
        <boxGeometry args={[1.32, 0.94, 0.72]} />
        <meshStandardMaterial color={FUR_DARK} roughness={0.75} flatShading />
      </mesh>
      {/* Neck: carries the head up and forward off the shoulders */}
      <mesh castShadow position={[0, 0.34, -1.16]} rotation={[0.34, 0, 0]}>
        <boxGeometry args={[0.78, 0.8, 0.7]} />
        <meshStandardMaterial color={FUR} roughness={0.75} flatShading />
      </mesh>

      <Head rig={rig} />
      <Tail rig={rig} />

      {/* Legs. x/z place the shoulder or hip; the pivot sits at the top so the
          whole limb swings from it. */}
      {(
        [
          [-0.52, -1.02, "front"],
          [0.52, -1.02, "front"],
          [-0.52, 1.14, "back"],
          [0.52, 1.14, "back"],
        ] as const
      ).map(([x, z, kind], index) => (
        <group
          key={index}
          position={[x, -0.16, z]}
          ref={(el) => (rig.current.legs[index] = el)}
        >
          <Leg kind={kind} />
        </group>
      ))}
    </group>
  );
}

function Leg({ kind }: { kind: "front" | "back" }) {
  return (
    <group>
      {/* Upper — thicker at the back, where the haunch muscle sits */}
      <mesh castShadow position={[0, -THIGH / 2, 0]}>
        <boxGeometry args={[0.34, THIGH, kind === "back" ? 0.5 : 0.42]} />
        <meshStandardMaterial color={FUR_DARK} roughness={0.8} flatShading />
      </mesh>
      {/* Lower */}
      <mesh castShadow position={[0, -THIGH - 0.24, 0.02]}>
        <boxGeometry args={[0.27, 0.5, 0.32]} />
        <meshStandardMaterial color={FUR} roughness={0.8} flatShading />
      </mesh>
      {/* Paw */}
      <mesh castShadow position={[0, -THIGH - 0.52, -0.04]}>
        <boxGeometry args={[0.32, 0.2, 0.44]} />
        <meshStandardMaterial color={CREAM} roughness={0.85} flatShading />
      </mesh>
    </group>
  );
}

function Head({ rig }: { rig: React.MutableRefObject<DogRig> }) {
  return (
    <group position={[0, 0.72, -1.62]} ref={(el) => (rig.current.head = el)}>
      {/* Skull */}
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.94, 0.86, 0.94]} />
        <meshStandardMaterial color={FUR} roughness={0.7} flatShading />
      </mesh>
      {/* Muzzle */}
      <mesh castShadow position={[0, -0.16, -0.66]}>
        <boxGeometry args={[0.56, 0.44, 0.56]} />
        <meshStandardMaterial color={CREAM} roughness={0.75} flatShading />
      </mesh>
      {/* Nose */}
      <mesh position={[0, -0.06, -0.96]}>
        <boxGeometry args={[0.26, 0.2, 0.12]} />
        <meshStandardMaterial color={NOSE} roughness={0.35} flatShading />
      </mesh>
      {/* Eyes — faintly lit so they catch you in the dark */}
      {[-0.26, 0.26].map((x) => (
        <mesh key={x} position={[x, 0.12, -0.49]}>
          <boxGeometry args={[0.16, 0.18, 0.06]} />
          <meshStandardMaterial
            color="#1b1524"
            emissive="#7fd4ff"
            emissiveIntensity={0.55}
            roughness={0.2}
          />
        </mesh>
      ))}
      {/* Ears, pivoting from the top of the skull */}
      {[-0.34, 0.34].map((x, i) => (
        <group key={x} position={[x, 0.42, 0.06]} ref={(el) => (rig.current.ears[i] = el)}>
          <mesh castShadow position={[0, 0.22, 0]} rotation={[0, 0, x < 0 ? 0.16 : -0.16]}>
            <boxGeometry args={[0.28, 0.46, 0.18]} />
            <meshStandardMaterial color={FUR_DARK} roughness={0.8} flatShading />
          </mesh>
        </group>
      ))}

      {/* Collar tag: the world is lit for a car with headlights, so the dog
          carries its own pool of light rather than driving into the dark. */}
      <mesh position={[0, -0.34, 0.42]}>
        <boxGeometry args={[0.86, 0.2, 0.86]} />
        <meshStandardMaterial color="#c341ff" emissive="#8f5bff" emissiveIntensity={1.6} />
      </mesh>
      <mesh position={[0, -0.5, 0.02]}>
        <boxGeometry args={[0.22, 0.22, 0.08]} />
        <meshStandardMaterial color="#ffe9a8" emissive="#ffe9a8" emissiveIntensity={5} />
      </mesh>
      <spotLight
        position={[0, -0.2, -0.6]}
        target-position={[0, -2.4, -13]}
        angle={0.72}
        penumbra={0.75}
        intensity={34}
        distance={28}
        color="#ffeec2"
      />
    </group>
  );
}

function Tail({ rig }: { rig: React.MutableRefObject<DogRig> }) {
  return (
    // Long enough to be legible from the chase camera, which sits almost
    // directly behind it — a short tail just reads as another body block.
    <group position={[0, 0.42, 1.6]} ref={(el) => (rig.current.tail = el)}>
      <mesh castShadow position={[0, 0.44, 0]}>
        <boxGeometry args={[0.24, 0.9, 0.24]} />
        <meshStandardMaterial color={FUR} roughness={0.8} flatShading />
      </mesh>
      <mesh castShadow position={[0, 1.0, 0]}>
        <boxGeometry args={[0.28, 0.42, 0.28]} />
        <meshStandardMaterial color={CREAM} roughness={0.8} flatShading />
      </mesh>
    </group>
  );
}

/** Convenience hook so the controller can hold one stable rig object. */
export function useDogRig() {
  return useRef<DogRig>(createDogRig());
}
