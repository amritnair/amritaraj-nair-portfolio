/**
 * Fixed geography of the island, in one place.
 *
 * These constants are shared by the terrain, the skyway and the scatter that
 * dresses the ground. They live apart from the components that use them
 * because the scatter has to know where the ramps land in order to keep trees
 * out of them, and the ramps have to know how big the island is — importing
 * one component from the other just to read a number is a cycle waiting to
 * happen.
 */

export const ISLAND_RADIUS = 118;

/** Driveable elevated ring. */
export const RING_RADIUS = ISLAND_RADIUS - 16;
export const RING_HEIGHT = 13;
export const DECK_WIDTH = 14;

/**
 * Where the on-ramps meet the ring. Chosen to sit in the gaps between the four
 * district spokes (45°, 135°, 225°, 315°) and clear of the jump ramps on the
 * cardinals — a ramp through a district would bury its sign.
 */
export const RAMP_ANGLES = [Math.PI * 0.625, Math.PI * 1.625];
export const RAMP_LENGTH = 62;

/** Half-width of the corridor kept clear of scenery under each ramp. */
export const RAMP_CLEARANCE = 11;

/**
 * The sky circuit: a closed race loop hung above and around the island.
 *
 * Described as radius and height sampled every 30° rather than as a formula,
 * because the whole point is that it is *not* a circle — a constant-radius,
 * constant-height loop is one corner repeated, with nothing to learn and
 * nothing to get better at. This table gives it long sweepers, two tight
 * tucks, a climb and a dive.
 */
const CIRCUIT_NODES: { radius: number; height: number }[] = [
  { radius: 152, height: 24 }, //   0° — start/finish straight
  { radius: 172, height: 27 }, //  30°
  { radius: 178, height: 32 }, //  60° — long outside sweeper, climbing
  { radius: 150, height: 34 }, //  90° — highest point
  { radius: 124, height: 30 }, // 120° — tight tuck in over the island's edge
  { radius: 146, height: 26 }, // 150°
  { radius: 176, height: 22 }, // 180° — lowest, out west
  { radius: 168, height: 22 }, // 210°
  { radius: 138, height: 25 }, // 240°
  { radius: 122, height: 28 }, // 270° — second tuck, tightest corner
  { radius: 158, height: 32 }, // 300°
  { radius: 164, height: 27 }, // 330°
];

/** The circuit's radius and height at any angle, interpolated smoothly. */
export function circuitAt(angle: number) {
  const count = CIRCUIT_NODES.length;
  const span = (Math.PI * 2) / count;
  const raw = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const index = Math.floor(raw / span);
  const t = raw / span - index;
  // Smoothstep between nodes: linear interpolation leaves a crease at every
  // node, which the car feels as a bump every 30°.
  const ease = t * t * (3 - 2 * t);
  const a = CIRCUIT_NODES[index % count];
  const b = CIRCUIT_NODES[(index + 1) % count];
  return {
    radius: a.radius + (b.radius - a.radius) * ease,
    height: a.height + (b.height - a.height) * ease,
  };
}

export function circuitPoint(angle: number) {
  const { radius, height } = circuitAt(angle);
  return { x: Math.cos(angle) * radius, y: height, z: Math.sin(angle) * radius };
}

/**
 * The high ramp climbs from the island, crosses *over* the ring road, and
 * lands on the circuit. It shares an angle with one of the ring ramps so the
 * two run side by side up out of the same clearing — one levels off at the
 * ring, the other keeps climbing over it.
 */
export const CIRCUIT_RAMP_ANGLE = Math.PI * 1.5;
/** Where the climb begins, as a radius from the island centre. */
export const CIRCUIT_RAMP_START = 38;

/**
 * Due south, for two reasons: it is the one heading with no district and no
 * spoke road anywhere near it — the climb needs a straight, uninterrupted
 * 70-unit run — and the car spawns facing it, so the way up is the first
 * thing you see. Landing anywhere else either passes through a district or
 * meets the ring too low to clear it.
 */

/** True when (x, z) sits under the long climb to the circuit. */
export function onCircuitRamp(x: number, z: number, pad = 0) {
  const dirX = Math.cos(CIRCUIT_RAMP_ANGLE);
  const dirZ = Math.sin(CIRCUIT_RAMP_ANGLE);
  const along = x * dirX + z * dirZ;
  if (along < CIRCUIT_RAMP_START - 10 || along > ISLAND_RADIUS) return false;
  return Math.abs(-x * dirZ + z * dirX) < RAMP_CLEARANCE + pad;
}

/** True when (x, z) sits on the footprint of a highway ramp. */
export function onRampCorridor(x: number, z: number, pad = 0) {
  for (const angle of RAMP_ANGLES) {
    const dirX = Math.cos(angle);
    const dirZ = Math.sin(angle);
    // Project onto the ramp's centreline, which runs inward from the ring.
    const along = x * dirX + z * dirZ;
    if (along < RING_RADIUS - RAMP_LENGTH - 6 || along > RING_RADIUS + 6) continue;
    const across = Math.abs(-x * dirZ + z * dirX);
    if (across < RAMP_CLEARANCE + pad) return true;
  }
  return onCircuitRamp(x, z, pad);
}
