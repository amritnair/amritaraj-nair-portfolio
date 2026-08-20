import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RigidBody, CuboidCollider, type RapierRigidBody } from "@react-three/rapier";
import { readControls } from "./controls";
import { telemetry, useWorld, worldStore } from "./store";
import { PAINT_BY_ID, PAINTS } from "./garage";
import { VehicleShell, animateVehicle, useVehicleRig } from "./Vehicle";

/** Just inside the plaza ring, nose pointed at the title. */
export const SPAWN: [number, number, number] = [0, 1.6, 11];

const ACCELERATION = 46;
const REVERSE_ACCELERATION = 26;
const MAX_SPEED = 26;
const TURN_RATE = 2.5;
const GRIP = 0.86;

/** Sideways speed, in units/sec, below which you are simply driving. */
const DRIFT_ENTRY = 3.4;
/** You have to be actually moving for a slide to count. */
const DRIFT_MIN_SPEED = 7;
/** Grace period before a chain banks, so a brief straightening doesn't end it. */
const DRIFT_GRACE = 0.75;

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

type DriftState = { chain: number; held: number; lapsed: number };

/**
 * Scores a slide. Points accrue while the car is moving sideways fast enough,
 * scaled by how sideways it is and by a multiplier that climbs the longer the
 * chain is held. Straightening out for longer than the grace period banks the
 * chain and resets the multiplier — which is what makes a long, linked drift
 * worth more than the same seconds spread over several short ones.
 */
function scoreDrift(
  drift: DriftState,
  { lateral, speed, delta }: { lateral: number; speed: number; delta: number },
) {
  const sliding = lateral > DRIFT_ENTRY && speed > DRIFT_MIN_SPEED;

  if (sliding) {
    drift.held += delta;
    drift.lapsed = 0;
    // Multiplier climbs a step per second held, capped so a single endless
    // donut can't outscore actually driving the island.
    const multiplier = Math.min(1 + Math.floor(drift.held), 8);
    drift.chain += lateral * speed * 0.12 * multiplier * delta;
    telemetry.driftMultiplier = multiplier;
    telemetry.driftAngle = Math.min(lateral / 12, 1);
    telemetry.driftActive = true;
  } else if (drift.chain > 0) {
    drift.lapsed += delta;
    telemetry.driftAngle = Math.max(telemetry.driftAngle - delta * 2, 0);
    if (drift.lapsed >= DRIFT_GRACE) {
      worldStore.bankDrift(drift.chain);
      drift.chain = 0;
      drift.held = 0;
      drift.lapsed = 0;
      telemetry.driftMultiplier = 1;
      telemetry.driftActive = false;
    }
  } else {
    telemetry.driftActive = false;
    telemetry.driftMultiplier = 1;
    telemetry.driftAngle = Math.max(telemetry.driftAngle - delta * 2, 0);
  }

  telemetry.driftChain = drift.chain;
}

export default function Car({ onMove }: { onMove?: (p: THREE.Vector3) => void }) {
  const body = useRef<RapierRigidBody>(null);
  const chassis = useRef<THREE.Group>(null);
  const rig = useVehicleRig();
  // Paint and kit come from the garage; re-reading them per frame would mean a
  // store subscription in the render loop, so they ride in as render state.
  const garage = useWorld((s) => s.garage);
  const paint = PAINT_BY_ID[garage.paint] ?? PAINTS[0];
  const paintRef = useRef(paint);
  paintRef.current = paint;
  const cameraReady = useRef(false);
  const smoothedLook = useRef(new THREE.Vector3());
  /** Live drift chain: points banked so far and how long since it lapsed. */
  const drift = useRef({ chain: 0, held: 0, lapsed: 0 });

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

    // Rolling resistance and handbrake. Braking *on* the throttle is a drift,
    // not a stop, so it barely scrubs speed — otherwise a slide dies before it
    // has scored anything. Braking off the throttle still stops the car hard.
    if (throttle === 0 || input.brake) {
      const drag = input.brake ? (throttle > 0 ? 0.75 : 3.2) : 0.9;
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
    // The handbrake sharpens the turn-in; without it you can break traction but
    // never rotate far enough to hold a slide.
    const turnRate = TURN_RATE * (input.brake ? 1.4 : 1);
    rb.setAngvel({ x: 0, y: steer * turnRate * steerFactor * direction, z: 0 }, true);

    const translation = rb.translation();
    carPosition.set(translation.x, translation.y, translation.z);

    if (input.reset || translation.y < -14) reset();

    telemetry.x = carPosition.x;
    telemetry.z = carPosition.z;
    telemetry.heading = Math.atan2(forward.x, forward.z);
    telemetry.speed = Math.abs(alongForward);
    worldStore.setSpeed(telemetry.speed);
    onMove?.(carPosition);

    scoreDrift(drift.current, {
      lateral: Math.abs(alongRight),
      speed: Math.abs(alongForward),
      delta,
    });

    // The shell banks into a turn and squats under power. Wheels, hubs and
    // thrusters are animated one level down.
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

    animateVehicle(rig.current, {
      speed: alongForward,
      steer,
      throttle,
      brake: input.brake,
      delta,
      paint: paintRef.current,
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
      name="player"
    >
      <CuboidCollider args={[1.0, 0.5, 2.05]} density={2.6} />
      <group ref={chassis}>
        <VehicleShell rig={rig} paint={paint} design={garage.design} />
      </group>
    </RigidBody>
  );
}
