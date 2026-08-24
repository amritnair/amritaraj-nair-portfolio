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
  { radius: 154, height: 24 }, //   0° — start/finish straight
  { radius: 174, height: 26 }, //  30° — opens out...
  { radius: 162, height: 30 }, //  60° — ...and tightens: a long ess on the climb
  { radius: 150, height: 33 }, //  90° — highest point
  { radius: 132, height: 30 }, // 120° — tuck in over the island's edge
  { radius: 148, height: 26 }, // 150°
  { radius: 170, height: 22 }, // 180° — lowest, out west
  { radius: 166, height: 22 }, // 210° — long flat-out sweeper
  { radius: 142, height: 25 }, // 240°
  { radius: 130, height: 28 }, // 270° — tightest corner, where the climb lands
  { radius: 164, height: 31 }, // 300° — flicks out...
  { radius: 148, height: 27 }, // 330° — ...and settles before the line
];

/** Catmull-Rom through four control values. */
function spline(p0: number, p1: number, p2: number, p3: number, t: number) {
  const t2 = t * t;
  const t3 = t2 * t;
  return (
    0.5 *
    (2 * p1 +
      (p2 - p0) * t +
      (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 +
      (-p0 + 3 * p1 - 3 * p2 + p3) * t3)
  );
}

/**
 * The circuit's radius and height at any angle.
 *
 * Catmull-Rom rather than an eased blend between neighbours. Smoothstep looks
 * smooth on paper but its derivative is *zero at both ends*, so the radius
 * stalled at every node and then rushed to the next one — a pump you feel
 * through the wheel every 30 degrees, which is what made the track ride
 * bumpy however fine the collision mesh got. A spline is continuous in the
 * first derivative across nodes, so the curvature flows.
 */
export function circuitAt(angle: number) {
  const count = CIRCUIT_NODES.length;
  const span = (Math.PI * 2) / count;
  const raw = ((angle % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
  const index = Math.floor(raw / span);
  const t = raw / span - index;
  const at = (offset: number) => CIRCUIT_NODES[(index + offset + count * 2) % count];
  const p0 = at(-1);
  const p1 = at(0);
  const p2 = at(1);
  const p3 = at(2);
  return {
    radius: spline(p0.radius, p1.radius, p2.radius, p3.radius, t),
    height: spline(p0.height, p1.height, p2.height, p3.height, t),
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
export const CIRCUIT_RAMP_START = 30;

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
export const onRampCorridor = onCircuitRamp;

/**
 * Districts and the spoke roads that lead to them, as a single test. Shared so
 * that anything placed on the island — scenery, supports, scatter — can ask the
 * same question rather than each re-deriving the layout.
 */
const DISTRICT_POSITIONS: [number, number][] = [
  [-46, -46],
  [46, -46],
  [-54, 54],
  [54, 54],
];

/**
 * Where the ring's legs come down. Exported because two places need to agree
 * on it: the legs themselves, and the scatter that must not grow a tree inside
 * one.
 */
export const RING_LEG_POSITIONS: [number, number][] = (() => {
  const out: [number, number][] = [];
  for (let i = 0; i < 20; i += 1) {
    const angle = (i / 20) * Math.PI * 2;
    const radius = RING_RADIUS + DECK_WIDTH / 2 - 1;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (onCircuitRamp(x, z, 6)) continue;
    if (onSpokeOrDistrict(x, z, 6)) continue;
    out.push([x, z]);
  }
  return out;
})();

/**
 * Where the kicker ramps sit on the circuit, in world space. Mirrors the
 * placement the Circuit component derives from its frames — same angles, same
 * side alternation, same lateral offset — so the drive loop can treat them as
 * boost pads without importing the render tree.
 */
export const KICKER_ANGLES = [0.55, 1.75, 2.9, 4.1, 5.4];

export function kickerPads() {
  return KICKER_ANGLES.map((angle, i) => {
    const p = circuitPoint(angle);
    const ahead = circuitPoint(angle + 0.01);
    const fx = ahead.x - p.x;
    const fz = ahead.z - p.z;
    const len = Math.hypot(fx, fz) || 1;
    // In-plane right of the direction of travel.
    const rx = fz / len;
    const rz = -fx / len;
    const side = i % 2 ? 1 : -1;
    const offset = 7.5 - 3.6; // deck half-width minus kicker half-width
    return { x: p.x + rx * side * offset, z: p.z + rz * side * offset };
  });
}

/** True when (x, z) is close enough to a ring leg to overlap it. */
export function onRingLeg(x: number, z: number, pad = 0) {
  for (const [lx, lz] of RING_LEG_POSITIONS) {
    if (Math.hypot(x - lx, z - lz) < 4 + pad) return true;
  }
  return false;
}

export function onSpokeOrDistrict(x: number, z: number, pad = 0) {
  for (const [dx, dz] of DISTRICT_POSITIONS) {
    if (Math.hypot(x - dx, z - dz) < 22 + pad) return true;
    const t = Math.max(0, Math.min(1, (x * dx + z * dz) / (dx * dx + dz * dz || 1)));
    if (Math.hypot(x - dx * t, z - dz * t) < 9 + pad) return true;
  }
  return false;
}
