import { telemetry } from "./store";

/**
 * Lap timing for the speedway.
 *
 * The rule is deliberately strict about order: crossing the line arms a lap,
 * every checkpoint has to be taken in sequence, and only then does the line
 * count as a finish. Without the ordering you could score a lap by reversing
 * back and forth over the start gate.
 */

export const SPEEDWAY = {
  /** Centre of the oval, out past the island's eastern edge. */
  x: 208,
  z: 0,
  /** Deck height — level with the ring road it branches off. */
  y: 13,
  radiusX: 58,
  radiusZ: 40,
};

/** Checkpoint angles around the oval, in the direction of travel. */
export const CHECKPOINTS = [Math.PI * 0.5, Math.PI, Math.PI * 1.5];

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

function gate(angle: number) {
  return {
    x: SPEEDWAY.x + Math.cos(angle) * SPEEDWAY.radiusX,
    z: SPEEDWAY.z + Math.sin(angle) * SPEEDWAY.radiusZ,
  };
}

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

    // Wandering off the circuit entirely abandons the lap, rather than leaving
    // a timer running for the rest of the session.
    const drift = Math.hypot(x - SPEEDWAY.x, z - SPEEDWAY.z);
    if (drift > SPEEDWAY.radiusX + 70) {
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
