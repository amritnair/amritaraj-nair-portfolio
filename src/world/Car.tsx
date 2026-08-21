import { useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import {
  RigidBody,
  CuboidCollider,
  useRapier,
  type RapierRigidBody,
} from "@react-three/rapier";
import { readControls } from "./controls";
import { telemetry, useWorld, worldStore } from "./store";
import { PAINT_BY_ID, PAINTS } from "./garage";
import { VehicleShell, animateVehicle, useVehicleRig } from "./Vehicle";
import {
  BOOST_DRAIN,
  BOOST_MAX,
  BOOST_MIN_TO_FIRE,
  BOOST_PER_DRIFT,
  BOOST_PER_LANDING,
  BOOST_SPEED,
  BRAKE_FORCE,
  CAM_DISTANCE,
  CAM_HEIGHT,
  CAM_SPEED_PULLBACK,
  DRIFT_GRIP,
  DRIFT_TURN_GAIN,
  FOV_BOOST_GAIN,
  FOV_SPEED_GAIN,
  GRIP,
  MAX_SPEED,
  REVERSE_ACCELERATION,
  REVERSE_THRESHOLD,
  TURN_RATE,
  driveForce,
} from "./drive";
import { cameraTuning } from "./camera";
import { record } from "./ghostLap";
import { createTrickState, updateTricks } from "./tricks";

/** Just inside the plaza ring, nose pointed at the title. */
export const SPAWN: [number, number, number] = [0, 1.6, 11];


/** Sideways speed, in units/sec, below which you are simply driving. */
const DRIFT_ENTRY = 3.4;
/** You have to be actually moving for a slide to count. */
const DRIFT_MIN_SPEED = 7;
/** Grace period before a chain banks, so a brief straightening doesn't end it. */
const DRIFT_GRACE = 0.75;

/** Ray length below the car's centre that still counts as touching down. */
const GROUND_REACH = 1.35;
/** Airtime below this is a bump in the road, not a jump. */
const MIN_AIRTIME = 0.42;

/** How hard the car pulls itself level once it is back on the ground. */
const RIGHTING_TORQUE = 7.5;
/** Pitch past this, at a standstill, counts as beached rather than driving. */
const BEACHED_PITCH = 0.55;
/** Seconds beached before the car is simply set upright. */
const BEACHED_GRACE = 1.1;

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
const camOffsetUp = new THREE.Vector3(0, CAM_HEIGHT, 0);
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

type AirState = { airborne: boolean; time: number; spin: number; lastYaw: number };

/**
 * Scores a jump. Airtime is the bulk of it; rotation while off the ground is
 * the bonus, counted in whole turns so a wobble pays nothing and a full spin
 * pays properly. Both are only banked on landing — reward for sticking it,
 * not for leaving the ground.
 */
function scoreAir(
  air: AirState,
  { grounded, yaw, delta }: { grounded: boolean; yaw: number; delta: number },
) {
  if (!grounded) {
    let turn = yaw - air.lastYaw;
    turn = ((turn + Math.PI) % (Math.PI * 2)) - Math.PI;
    air.spin += Math.abs(turn);
    air.lastYaw = yaw;
    air.time += delta;
    air.airborne = true;
    telemetry.airTime = air.time;
    telemetry.airSpin = air.spin;
    telemetry.airborne = air.time > 0.2;
    return;
  }

  if (air.airborne && air.time >= MIN_AIRTIME) {
    const spins = Math.floor(air.spin / (Math.PI * 2));
    worldStore.landTrick(air.time, spins);
    telemetry.boost = Math.min(BOOST_MAX, telemetry.boost + BOOST_PER_LANDING);
  }
  air.airborne = false;
  air.time = 0;
  air.spin = 0;
  air.lastYaw = yaw;
  telemetry.airborne = false;
  telemetry.airTime = 0;
  telemetry.airSpin = 0;
}

export default function Car({ onMove }: { onMove?: (p: THREE.Vector3) => void }) {
  const { world, rapier } = useRapier();
  const air = useRef<AirState>({ airborne: false, time: 0, spin: 0, lastYaw: 0 });
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
  const boosting = useRef(false);
  /** Previous frame's forward speed, for spotting impacts. */
  const lastSpeed = useRef(0);
  /** Decaying camera shake, topped up by hits. */
  const shake = useRef(0);
  /** Camera roll through corners. */
  const lean = useRef(0);
  /** How long the car has been stuck at an angle going nowhere. */
  const beached = useRef(0);
  const scratchEuler = useRef(new THREE.Euler(0, 0, 0, "YXZ"));
  const tricks = useRef(createTrickState());
  /** The group tricks rotate — separate from the chassis, which the physics
   *  lean already owns. */
  const shell = useRef<THREE.Group>(null);

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
    // Clamped so a stalled frame can't fling the car across the island. The
    // cap doubles as a slow-motion trap though: on a machine running at 10fps
    // every frame advances only 1/20s of driving, so the car crawls no matter
    // how long you hold the throttle. 1/20 keeps it stable without making a
    // slow machine feel broken.
    const delta = Math.min(rawDelta, 1 / 20);
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

    // Down means brake while you are still rolling forwards, and only becomes
    // reverse once you have nearly stopped. Going straight to reverse at speed
    // is the single most common way an arcade car feels wrong.
    const braking = input.backward > 0 && alongForward > REVERSE_THRESHOLD;
    const throttle = braking ? 0 : input.forward - input.backward;

    // Boost: burns the tank for a higher limiter and a much harder shove.
    const canBoost = telemetry.boost > BOOST_MIN_TO_FIRE || (boosting.current && telemetry.boost > 0);
    const wantsBoost = input.boost && throttle > 0 && canBoost;
    boosting.current = wantsBoost;
    if (wantsBoost) telemetry.boost = Math.max(0, telemetry.boost - BOOST_DRAIN * delta);
    const limit = wantsBoost ? BOOST_SPEED : MAX_SPEED;

    if (braking) {
      impulse.copy(forward).multiplyScalar(-BRAKE_FORCE * mass * delta);
      rb.applyImpulse(impulse, true);
    } else if (throttle !== 0 && Math.abs(alongForward) < limit) {
      const power =
        throttle > 0 ? driveForce(alongForward, limit, wantsBoost) : -REVERSE_ACCELERATION;
      impulse.copy(forward).multiplyScalar(power * mass * delta);
      rb.applyImpulse(impulse, true);
    }

    // Lateral grip: bleed off sideways slide so the car carves instead of skating.
    const gripLoss = input.brake ? GRIP * DRIFT_GRIP : GRIP;
    impulse.copy(right).multiplyScalar(-alongRight * gripLoss * mass);
    rb.applyImpulse(impulse, true);

    // Rolling resistance and handbrake. Braking *on* the throttle is a drift,
    // not a stop, so it barely scrubs speed — otherwise a slide dies before it
    // has scored anything.
    if (throttle === 0 || input.brake) {
      const drag = input.brake ? (throttle > 0 ? 0.7 : 2.4) : 0.85;
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
    const turnRate = TURN_RATE * (input.brake ? DRIFT_TURN_GAIN : 1);
    // Steering drives yaw only. Pitch is left to the physics: zeroing it here
    // pins the car dead level, and a level car on a slope aims its throttle
    // horizontally into the hill instead of up it — which is why the climb to
    // the circuit could be ground at but never completed.
    const spin = rb.angvel();
    rb.setAngvel({ x: spin.x, y: steer * turnRate * steerFactor * direction, z: spin.z }, true);

    const translation = rb.translation();
    carPosition.set(translation.x, translation.y, translation.z);

    if (input.reset || translation.y < -14) reset();

    telemetry.x = carPosition.x;
    telemetry.y = carPosition.y;
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

    // Sliding fills the tank. That loop — drift to earn boost, boost to reach
    // the next corner faster — is the whole reason to take the long way round.
    if (telemetry.driftActive) {
      const fill = Math.min(Math.abs(alongRight) / 9, 1) * BOOST_PER_DRIFT * delta;
      telemetry.boost = Math.min(BOOST_MAX, telemetry.boost + fill);
    }
    telemetry.boosting = wantsBoost;

    // Lay down the ghost trace for this lap as we go.
    if (telemetry.raceRunning) {
      record(delta, carPosition.x, carPosition.y, carPosition.z, telemetry.heading);
    }

    // An impact is a sudden loss of speed you did not ask for. Cheaper and
    // steadier than collision events, which also fire on every landing and on
    // every joint in the road.
    const drop = lastSpeed.current - Math.abs(alongForward);
    if (drop > 7 && !braking && lastSpeed.current > 9) {
      worldStore.registerImpact();
      shake.current = Math.min(1, shake.current + drop / 26);
    }
    lastSpeed.current = Math.abs(alongForward);
    shake.current = Math.max(0, shake.current - delta * 2.6);

    // Grounded test by ray rather than by contact events: one short cast per
    // frame, and it works the same on the island, the ring and the circuit
    // without any of them having to know about it.
    const ray = new rapier.Ray(
      { x: carPosition.x, y: carPosition.y, z: carPosition.z },
      { x: 0, y: -1, z: 0 },
    );
    const hit = world.castRay(ray, GROUND_REACH, true, undefined, undefined, undefined, rb);
    const grounded = hit !== null;
    updateTricks(
      tricks.current,
      shell.current,
      {
        spinLeft: input.spinLeft,
        spinRight: input.spinRight,
        flipForward: input.flipForward,
        flipBack: input.flipBack,
      },
      !grounded,
      delta,
    );
    scoreAir(air.current, {
      grounded,
      yaw: telemetry.heading,
      delta,
    });

    /*
     * Righting. Pitch is free so the car can lie along a ramp, but nothing was
     * ever pulling it back: land nose-down and it stays nose-down, wedged at
     * whatever angle it touched at.
     *
     * On the ground it is torqued level, strongly enough to recover from a bad
     * landing and gently enough not to fight a slope. If it ends up stopped and
     * steeply pitched anyway, it gets stood up outright after a moment — being
     * stuck is never the interesting outcome.
     */
    const pitch = scratchEuler.current.setFromQuaternion(quaternion, "YXZ").x;
    if (grounded && Math.abs(pitch) > 0.02) {
      const spinNow = rb.angvel();
      rb.setAngvel(
        { x: -pitch * RIGHTING_TORQUE - spinNow.x * 0.6, y: spinNow.y, z: spinNow.z },
        true,
      );
    }

    if (grounded && Math.abs(pitch) > BEACHED_PITCH && Math.abs(alongForward) < 2) {
      beached.current += delta;
      if (beached.current > BEACHED_GRACE) {
        // Keep the heading, drop everything else.
        const heading = scratchEuler.current.setFromQuaternion(quaternion, "YXZ").y;
        const upright = new THREE.Quaternion().setFromEuler(
          new THREE.Euler(0, heading, 0, "YXZ"),
        );
        rb.setRotation(
          { x: upright.x, y: upright.y, z: upright.z, w: upright.w },
          true,
        );
        rb.setTranslation(
          { x: carPosition.x, y: carPosition.y + 0.6, z: carPosition.z },
          true,
        );
        rb.setAngvel({ x: 0, y: 0, z: 0 }, true);
        beached.current = 0;
      }
    } else {
      beached.current = 0;
    }

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
      lateral: Math.abs(alongRight),
      vertical: linvel.y,
      braking,
      boosting: wantsBoost,
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

    // Framing reacts to speed: the camera eases back and the lens widens, which
    // is most of what "fast" actually looks like on screen.
    const pace = Math.min(Math.abs(alongForward) / MAX_SPEED, 1.35);
    camTarget
      .copy(visualPosition)
      .addScaledVector(visualForward, -CAM_DISTANCE - pace * CAM_SPEED_PULLBACK)
      .add(camOffsetUp);
    const camera = threeState.camera as THREE.PerspectiveCamera;
    const targetFov =
      cameraTuning.baseFov + pace * FOV_SPEED_GAIN + (wantsBoost ? FOV_BOOST_GAIN : 0);
    if (Math.abs(camera.fov - targetFov) > 0.01) {
      camera.fov = THREE.MathUtils.lerp(camera.fov, targetFov, 1 - Math.pow(0.02, delta));
      camera.updateProjectionMatrix();
    }
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
    // Lean the camera into a corner, proportional to how hard the car is
    // actually turning. Small — this is the difference between a camera that
    // is bolted behind the car and one that feels like it is riding with it.
    const leanTarget = -steer * Math.min(Math.abs(alongForward) / MAX_SPEED, 1) * 0.09;
    lean.current = THREE.MathUtils.lerp(lean.current, leanTarget, 1 - Math.pow(0.02, delta));

    // Knock the camera about on impact — the clearest possible signal that you
    // hit something, and it costs nothing.
    if (shake.current > 0.001) {
      const amount = shake.current * shake.current * 1.4;
      threeState.camera.position.x += (Math.random() - 0.5) * amount;
      threeState.camera.position.y += (Math.random() - 0.5) * amount;
      threeState.camera.position.z += (Math.random() - 0.5) * amount;
    }
    threeState.camera.lookAt(smoothedLook.current);
    threeState.camera.rotateZ(lean.current);
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
      // Pitch free so the car lies along whatever it is driving on; roll still
      // locked, since a car that can roll is a car that ends up on its back.
      enabledRotations={[true, true, false]}
      ccd
      name="player"
    >
      {/* Low friction on purpose. Grip on the road is applied as an impulse in
          the frame loop, so the collider's friction only ever decides what
          happens when you touch a barrier — and high friction there means
          scraping a wall stops you dead instead of sliding along it. */}
      <CuboidCollider args={[1.0, 0.5, 2.05]} density={2.6} friction={0.15} />
      <group ref={chassis}>
        <group ref={shell}>
          <VehicleShell rig={rig} paint={paint} design={garage.design} wheel={garage.wheel} />
        </group>
      </group>
    </RigidBody>
  );
}
