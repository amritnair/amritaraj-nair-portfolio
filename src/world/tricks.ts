import * as THREE from "three";
import { telemetry, worldStore } from "./store";

/**
 * Air tricks.
 *
 * Rotation is applied to the car's *visual* shell rather than the rigid body:
 * a physics car spinning on two axes lands on its roof and gets stuck, which
 * is exactly the failure this game already had once. Spinning the model keeps
 * the landing predictable while still asking for the timing that makes a trick
 * feel earned — you have to bring it back to level before you touch down.
 *
 * Scoring rewards completed rotations. Landing mid-rotation still pays, but at
 * a fraction, so there is a real reason to straighten up rather than hold the
 * key until the deck arrives.
 */

/** Radians per second while a trick key is held. */
const SPIN_RATE = 6.2;
const FLIP_RATE = 5.4;
/** How quickly the shell returns to level once the wheels are down. */
const RECOVER = 0.0004;
/** Within this of level counts as a clean landing. */
const CLEAN_LANDING = 0.35;

const QUARTER = Math.PI / 2;
const FULL = Math.PI * 2;

export type TrickState = {
  /** Accumulated rotation this jump, in radians. */
  spin: number;
  flip: number;
  active: boolean;
};

export const createTrickState = (): TrickState => ({ spin: 0, flip: 0, active: false });

export type TrickInput = {
  spinLeft: boolean;
  spinRight: boolean;
  flipForward: boolean;
  flipBack: boolean;
};

/**
 * Advances the trick rotation. `shell` is the visual group; airborne comes from
 * the ground ray. Returns nothing — everything lands in telemetry for the HUD.
 */
export function updateTricks(
  state: TrickState,
  shell: THREE.Group | null,
  input: TrickInput,
  airborne: boolean,
  delta: number,
) {
  if (!shell) return;

  if (airborne) {
    state.active = true;
    const spinDir = (input.spinRight ? 1 : 0) - (input.spinLeft ? 1 : 0);
    const flipDir = (input.flipForward ? 1 : 0) - (input.flipBack ? 1 : 0);

    state.spin += spinDir * SPIN_RATE * delta;
    state.flip += flipDir * FLIP_RATE * delta;

    shell.rotation.y = state.spin;
    shell.rotation.x += flipDir * FLIP_RATE * delta;

    telemetry.trickSpins = Math.floor(Math.abs(state.spin) / FULL);
    telemetry.trickFlips = Math.floor(Math.abs(state.flip) / FULL);
    telemetry.trickAngle = Math.abs(state.spin) + Math.abs(state.flip);
    return;
  }

  if (state.active) {
    // Landed. Score whole rotations at full value and the remainder at a
    // fraction, then decide whether it was stuck or scrambled.
    const spins = Math.abs(state.spin) / FULL;
    const flips = Math.abs(state.flip) / FULL;
    const whole = Math.floor(spins) + Math.floor(flips);
    const partial = (spins % 1) + (flips % 1);

    const offLevel = Math.abs(wrap(shell.rotation.y)) + Math.abs(wrap(shell.rotation.x));
    const clean = offLevel < CLEAN_LANDING;

    if (whole > 0 || partial > 0.25) {
      worldStore.landTrickRotation(whole, partial, clean);
    }

    state.spin = 0;
    state.flip = 0;
    state.active = false;
    telemetry.trickSpins = 0;
    telemetry.trickFlips = 0;
    telemetry.trickAngle = 0;
  }

  // Ease the shell back to square whatever happened.
  const rate = 1 - Math.pow(RECOVER, delta);
  shell.rotation.y = THREE.MathUtils.lerp(shell.rotation.y, 0, rate);
  shell.rotation.x = THREE.MathUtils.lerp(shell.rotation.x, 0, rate);
}

/** Shortest signed angle to level, so 359° reads as -1° rather than nearly a turn. */
function wrap(angle: number) {
  return ((angle + Math.PI) % FULL + FULL) % FULL - Math.PI;
}

export { QUARTER };
