import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CuboidCollider, type RapierRigidBody } from "@react-three/rapier";
import { readControls } from "./controls";
import { telemetry, worldStore } from "./store";

/** Just inside the plaza ring, nose pointed at the title. */
export const SPAWN: [number, number, number] = [0, 1.6, 11];

const ACCELERATION = 46;
const REVERSE_ACCELERATION = 26;
const MAX_SPEED = 26;
const TURN_RATE = 2.5;
const GRIP = 0.86;

// Scratch objects — allocating inside useFrame would churn the GC every frame.
const forward = new THREE.Vector3();
const right = new THREE.Vector3();
const velocity = new THREE.Vector3();
const impulse = new THREE.Vector3();
const quaternion = new THREE.Quaternion();
const camTarget = new THREE.Vector3();
const camLook = new THREE.Vector3();
const carPosition = new THREE.Vector3();
// The camera tracks the *interpolated* visual transform, not the raw physics
// pose — those only agree on frames that happen to land on a solver step.
const visualPosition = new THREE.Vector3();
const visualQuaternion = new THREE.Quaternion();
const visualForward = new THREE.Vector3();
const camOffsetUp = new THREE.Vector3(0, 5.6, 0);
const camLookUp = new THREE.Vector3(0, 1.2, 0);

export default function Car({ onMove }: { onMove?: (p: THREE.Vector3) => void }) {
  const body = useRef<RapierRigidBody>(null);
  const chassis = useRef<THREE.Group>(null);
  const wheels = useRef<(THREE.Group | null)[]>([]);
  const cameraReady = useRef(false);
  const smoothedLook = useRef(new THREE.Vector3());

  const reset = () => {
    const rb = body.current;
    if (!rb) return;
    rb.setTranslation({ x: SPAWN[0], y: SPAWN[1], z: SPAWN[2] }, true);
    rb.setRotation({ x: 0, y: 0, z: 0, w: 1 }, true);
    rb.setLinvel({ x: 0, y: 0, z: 0 }, true);
    rb.setAngvel({ x: 0, y: 0, z: 0 }, true);
  };

  useFrame((threeState, rawDelta) => {
    const rb = body.current;
    if (!rb) return;
    const delta = Math.min(rawDelta, 1 / 30);
    const input = readControls();

    const rot = rb.rotation();
    quaternion.set(rot.x, rot.y, rot.z, rot.w);
    forward.set(0, 0, -1).applyQuaternion(quaternion);
    right.set(1, 0, 0).applyQuaternion(quaternion);

    const linvel = rb.linvel();
    velocity.set(linvel.x, linvel.y, linvel.z);
    const alongForward = velocity.dot(forward);
    const alongRight = velocity.dot(right);
    const mass = rb.mass();

    // Throttle / reverse.
    const throttle = input.forward - input.backward;
    if (throttle !== 0 && Math.abs(alongForward) < MAX_SPEED) {
      const power = throttle > 0 ? ACCELERATION : -REVERSE_ACCELERATION;
      impulse.copy(forward).multiplyScalar(power * mass * delta);
      rb.applyImpulse(impulse, true);
    }

    // Lateral grip: bleed off sideways slide so the car carves instead of skating.
    const gripLoss = input.brake ? GRIP * 0.25 : GRIP;
    impulse.copy(right).multiplyScalar(-alongRight * gripLoss * mass);
    rb.applyImpulse(impulse, true);

    // Rolling resistance and handbrake.
    if (throttle === 0 || input.brake) {
      const drag = input.brake ? 3.2 : 0.9;
      impulse.copy(forward).multiplyScalar(-alongForward * drag * mass * delta);
      rb.applyImpulse(impulse, true);
    }

    // Steering scales with speed, and flips when reversing — like a real car.
    const steer = input.left - input.right;
    const speedFactor = Math.min(Math.abs(alongForward) / 6, 1);
    // ...but keep some authority while the throttle is down even at a standstill.
    // Purely speed-scaled steering means nosing into a tree locks you there:
    // forward is blocked, so speed stays zero, so you can never turn away.
    const steerFactor = throttle !== 0 ? Math.max(speedFactor, 0.4) : speedFactor;
    const direction = alongForward < -0.4 ? -1 : 1;
    rb.setAngvel({ x: 0, y: steer * TURN_RATE * steerFactor * direction, z: 0 }, true);

    const translation = rb.translation();
    carPosition.set(translation.x, translation.y, translation.z);

    if (input.reset || translation.y < -14) reset();

    telemetry.x = carPosition.x;
    telemetry.z = carPosition.z;
    telemetry.heading = Math.atan2(forward.x, forward.z);
    telemetry.speed = Math.abs(alongForward);
    worldStore.setSpeed(telemetry.speed);
    onMove?.(carPosition);

    // Visual flourish: the shell leans into corners and squats under power.
    if (chassis.current) {
      const roll = THREE.MathUtils.clamp(-steer * speedFactor * 0.16, -0.2, 0.2);
      const pitch = THREE.MathUtils.clamp(-throttle * 0.05, -0.08, 0.08);
      // Per-second rates rather than raw lerp constants — a fixed 0.12 per
      // frame leans twice as fast on a 120Hz display as it does on a 60Hz one.
      const rollRate = 1 - Math.pow(0.0005, delta);
      const pitchRate = 1 - Math.pow(0.002, delta);
      chassis.current.rotation.z = THREE.MathUtils.lerp(chassis.current.rotation.z, roll, rollRate);
      chassis.current.rotation.x = THREE.MathUtils.lerp(chassis.current.rotation.x, pitch, pitchRate);
    }

    const spin = alongForward * delta * 2.2;
    const steerRate = 1 - Math.pow(0.0002, delta);
    wheels.current.forEach((wheel, index) => {
      if (!wheel) return;
      wheel.rotation.x -= spin;
      // Front wheels ease to the steering angle instead of snapping to it.
      if (index < 2) {
        const hub = wheel.parent!;
        hub.rotation.y = THREE.MathUtils.lerp(hub.rotation.y, steer * 0.42, steerRate);
      }
    });

    // Chase camera: sits behind the car's heading, eases into place. It reads
    // the rendered transform of the rigid body's group, which rapier fills in
    // between fixed solver steps — following rb.translation() instead makes the
    // camera step at 60Hz under a display running at any other rate.
    const visual = chassis.current?.parent;
    if (visual) {
      visual.getWorldPosition(visualPosition);
      visual.getWorldQuaternion(visualQuaternion);
      visualForward.set(0, 0, -1).applyQuaternion(visualQuaternion);
    } else {
      visualPosition.copy(carPosition);
      visualForward.copy(forward);
    }

    camTarget
      .copy(visualPosition)
      .addScaledVector(visualForward, -11 - speedFactor * 3)
      .add(camOffsetUp);
    // Where the camera *wants* to look. Smoothing this as well as the position
    // matters more than it sounds: an instant lookAt on a lagging position is
    // what makes a chase camera feel like it snaps through corners.
    camLook.copy(visualPosition).addScaledVector(visualForward, 6).add(camLookUp);

    if (!cameraReady.current) {
      threeState.camera.position.copy(camTarget);
      smoothedLook.current.copy(camLook);
      cameraReady.current = true;
    } else {
      // Exponential smoothing expressed per-second, so the feel is identical at
      // 60, 120 or 144Hz.
      threeState.camera.position.lerp(camTarget, 1 - Math.pow(0.0022, delta));
      smoothedLook.current.lerp(camLook, 1 - Math.pow(0.0006, delta));
    }
    threeState.camera.lookAt(smoothedLook.current);
  });

  return (
    <RigidBody
      ref={body}
      position={SPAWN}
      colliders={false}
      mass={1}
      friction={0.6}
      restitution={0.1}
      linearDamping={0.35}
      angularDamping={4}
      enabledRotations={[false, true, false]}
      ccd
      name="car"
    >
      <CuboidCollider args={[1.05, 0.55, 2.1]} density={2.4} />
      <group ref={chassis}>
        <CarShell wheelRefs={wheels} />
      </group>
    </RigidBody>
  );
}

function CarShell({ wheelRefs }: { wheelRefs: React.MutableRefObject<(THREE.Group | null)[]> }) {
  return (
    <group>
      {/* Lower body */}
      <mesh castShadow receiveShadow position={[0, 0.05, 0]}>
        <boxGeometry args={[2.0, 0.7, 4.1]} />
        <meshStandardMaterial color="#e0384d" roughness={0.35} metalness={0.25} flatShading />
      </mesh>
      {/* Tapered nose */}
      <mesh castShadow position={[0, 0.02, -2.05]}>
        <boxGeometry args={[1.82, 0.5, 0.5]} />
        <meshStandardMaterial color="#c02a3e" roughness={0.4} metalness={0.2} flatShading />
      </mesh>
      {/* Cabin */}
      <mesh castShadow receiveShadow position={[0, 0.66, 0.12]}>
        <boxGeometry args={[1.66, 0.66, 2.0]} />
        <meshStandardMaterial color="#2a2f52" roughness={0.2} metalness={0.5} flatShading />
      </mesh>
      {/* Windscreen */}
      <mesh position={[0, 0.7, -0.9]}>
        <boxGeometry args={[1.5, 0.5, 0.12]} />
        <meshStandardMaterial
          color="#9ad9ff"
          emissive="#3aa7ff"
          emissiveIntensity={0.5}
          roughness={0.05}
          metalness={0.6}
        />
      </mesh>
      {/* Rear spoiler */}
      <mesh castShadow position={[0, 0.72, 1.95]}>
        <boxGeometry args={[1.9, 0.12, 0.42]} />
        <meshStandardMaterial color="#1b1f38" roughness={0.4} flatShading />
      </mesh>

      {/* Headlights */}
      {[-0.62, 0.62].map((x) => (
        <mesh key={`head${x}`} position={[x, 0.08, -2.28]}>
          <boxGeometry args={[0.42, 0.2, 0.1]} />
          <meshStandardMaterial color="#fff3c4" emissive="#ffe9a8" emissiveIntensity={4} />
        </mesh>
      ))}
      {/* Tail lights */}
      {[-0.66, 0.66].map((x) => (
        <mesh key={`tail${x}`} position={[x, 0.16, 2.06]}>
          <boxGeometry args={[0.4, 0.16, 0.08]} />
          <meshStandardMaterial color="#ff3b3b" emissive="#ff2222" emissiveIntensity={5} />
        </mesh>
      ))}
      {/* Cone of light so the headlights read on the ground at night */}
      <spotLight
        position={[0, 0.4, -2.2]}
        target-position={[0, -1, -14]}
        angle={0.62}
        penumbra={0.7}
        intensity={40}
        distance={30}
        color="#ffeec2"
      />

      {[
        [-1.02, -0.35, -1.32],
        [1.02, -0.35, -1.32],
        [-1.02, -0.35, 1.34],
        [1.02, -0.35, 1.34],
      ].map(([x, y, z], index) => (
        <group key={index} position={[x, y, z]}>
          <group ref={(el) => (wheelRefs.current[index] = el)}>
            <mesh castShadow rotation={[0, 0, Math.PI / 2]}>
              <cylinderGeometry args={[0.52, 0.52, 0.38, 12]} />
              <meshStandardMaterial color="#141726" roughness={0.85} flatShading />
            </mesh>
            <mesh rotation={[0, 0, Math.PI / 2]} position={[x > 0 ? 0.16 : -0.16, 0, 0]}>
              <cylinderGeometry args={[0.26, 0.26, 0.12, 8]} />
              <meshStandardMaterial color="#d8dcf0" metalness={0.7} roughness={0.3} flatShading />
            </mesh>
          </group>
        </group>
      ))}
    </group>
  );
}
