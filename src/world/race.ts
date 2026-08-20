import { circuitPoint } from "./layout";
import { telemetry } from "./store";

/**
 * Lap timing for the speedway.
 *
 * The rule is deliberately strict about order: crossing the line arms a lap,
 * every checkpoint has to be taken in sequence, and only then does the line
 * count as a finish. Without the ordering you could score a lap by reversing
 * back and forth over the start gate.
 */

/** Checkpoint angles around the circuit, in the direction of travel. */
export const CHECKPOINTS = [Math.PI * 0.5, Math.PI, Math.PI * 1.5];

/** A gate's position on the circuit, in world space. */
export const gateAt = (angle: number) => circuitPoint(angle);

/** How close the car has to pass to a gate for it to register. */
const GATE_RADIUS = 9;
/** Guards against re-triggering the start line on the same pass. */
const REARM_RADIUS = 16;

export type RaceState = {
  running: boolean;
  /** Index into CHECKPOINTS that must be taken next. */
  checkpoint: number;
  time: number;
  /** True once the car has left the start gate's radius since last crossing. */
  armed: boolean;
};

const state: RaceState = { running: false, checkpoint: 0, time: 0, armed: true };

const gate = (angle: number) => gateAt(angle);

const near = (x: number, z: number, point: { x: number; z: number }, radius: number) => {
  const dx = x - point.x;
  const dz = z - point.z;
  return dx * dx + dz * dz < radius * radius;
};

type Sink = { finishLap: (time: number) => void };

export function updateRace(x: number, z: number, delta: number, sink: Sink) {
  const start = gate(0);

  if (state.running) {
    state.time += delta;

    const target = CHECKPOINTS[state.checkpoint];
    if (target !== undefined && near(x, z, gate(target), GATE_RADIUS)) {
      state.checkpoint += 1;
    }

    // A lap only closes once every checkpoint is behind you.
    if (state.checkpoint >= CHECKPOINTS.length && near(x, z, start, GATE_RADIUS)) {
      sink.finishLap(state.time);
      state.running = false;
      state.checkpoint = 0;
      state.time = 0;
      state.armed = false;
    }

    // Dropping off the circuit abandons the lap, rather than leaving a timer
    // running for the rest of the session. The loop is a ring around the
    // island, so "off it" means back over the middle.
    // Falling off counts as abandoning too: the circuit never drops below 22,
    // so anything under 16 is the ring road, the island or the sea.
    const fromCentre = Math.hypot(x, z);
    if (fromCentre < 100 || telemetry.y < 16) {
      state.running = false;
      state.checkpoint = 0;
      state.time = 0;
    }
  } else if (state.armed && near(x, z, start, GATE_RADIUS)) {
    state.running = true;
    state.checkpoint = 0;
    state.time = 0;
    state.armed = false;
  }

  if (!state.armed && !near(x, z, start, REARM_RADIUS)) state.armed = true;

  telemetry.raceRunning = state.running;
  telemetry.raceTime = state.time;
  telemetry.raceCheckpoint = state.checkpoint;
  telemetry.raceTotal = CHECKPOINTS.length;
}

export function resetRace() {
  state.running = false;
  state.checkpoint = 0;
  state.time = 0;
  state.armed = true;
}
