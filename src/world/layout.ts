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
  return false;
}
