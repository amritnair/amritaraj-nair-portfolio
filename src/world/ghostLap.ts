/**
 * Best-lap ghost.
 *
 * Without opponents there is nothing to race except a number on a clock. A
 * ghost turns a lap into a side-by-side: you can see where you gained and,
 * more usefully, exactly where you lost.
 *
 * Samples are position and heading at a fixed rate, interpolated on playback —
 * storing every frame would tie the recording to whatever framerate the
 * machine happened to manage.
 */

const RATE = 12;
const STEP = 1 / RATE;
/** Two minutes of samples is far more than any lap needs. */
const MAX_SAMPLES = RATE * 120;

export type Sample = { x: number; y: number; z: number; h: number };

const recording: Sample[] = [];
let best: Sample[] = [];
let clock = 0;

export function startRecording() {
  recording.length = 0;
  clock = 0;
}

export function record(delta: number, x: number, y: number, z: number, h: number) {
  clock += delta;
  if (clock < STEP || recording.length >= MAX_SAMPLES) return;
  clock -= STEP;
  recording.push({ x, y, z, h });
}

/** Called when a lap finishes; keeps the run only if it was the fastest. */
export function commitRecording(isBest: boolean) {
  if (isBest && recording.length > 4) best = recording.slice();
  recording.length = 0;
  clock = 0;
}

export const hasGhost = () => best.length > 4;

/**
 * The ghost's pose at a given time into the lap, interpolated between samples.
 * Returns null once the ghost has finished its lap — it should disappear
 * rather than freeze on the line.
 */
export function ghostAt(time: number): Sample | null {
  if (best.length < 2) return null;
  const position = time / STEP;
  const index = Math.floor(position);
  if (index >= best.length - 1) return null;
  const a = best[index];
  const b = best[index + 1];
  const t = position - index;
  // Headings wrap, so interpolate the short way round.
  let dh = b.h - a.h;
  dh = ((dh + Math.PI) % (Math.PI * 2)) - Math.PI;
  return {
    x: a.x + (b.x - a.x) * t,
    y: a.y + (b.y - a.y) * t,
    z: a.z + (b.z - a.z) * t,
    h: a.h + dh * t,
  };
}
