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
 * The bearing the climb leaves the island on. Due south, for two reasons: it
 * is the one heading with no district and no spoke road anywhere near it, and
 * the car spawns facing it, so the way up is the first thing you see.
 *
 * Everything about the climb is measured from here — the control points below
 * are angles off this bearing, and so is the merge.
 */
export const CIRCUIT_RAMP_ANGLE = Math.PI * 1.5;

/**
 * True when (x, z) sits under the climb. Declared here and assigned below,
 * because the honest answer walks the ramp's own frames and those cannot be
 * built until the rest of this file exists.
 */
export const onRampCorridor = (x: number, z: number, pad = 0) => onRamp(x, z, pad);

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
let ringLegCache: [number, number][] | null = null;

/**
 * Computed on first use rather than at import: the test for "is this spot
 * under the climb" now walks the climb's own frames, and those are built from
 * the circuit's, which are built from constants further down this file. A
 * module-level constant here would read them before they exist.
 */
export function ringLegPositions(): [number, number][] {
  if (ringLegCache) return ringLegCache;
  const out: [number, number][] = [];
  for (let i = 0; i < 20; i += 1) {
    const angle = (i / 20) * Math.PI * 2;
    const radius = RING_RADIUS + DECK_WIDTH / 2 - 1;
    const x = Math.cos(angle) * radius;
    const z = Math.sin(angle) * radius;
    if (onRamp(x, z, 6)) continue;
    if (onSpokeOrDistrict(x, z, 6)) continue;
    out.push([x, z]);
  }
  ringLegCache = out;
  return out;
}

/**
 * Where the kicker ramps sit on the circuit, in world space. Mirrors the
 * placement the Circuit component derives from its frames — same angles, same
 * side alternation, same lateral offset — so the drive loop can treat them as
 * boost pads without importing the render tree.
 *
 * None of them may sit inside the merge: a launch ramp across the mouth of a
 * slip road fires you off the track at the one place you arrive slowest.
 */
export const KICKER_ANGLES = [0.55, 1.75, 2.9, 4.1, 5.05];

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
    const offset = 1.9; // must match KICKER_OFFSET in Circuit.tsx
    return { x: p.x + rx * side * offset, z: p.z + rz * side * offset };
  });
}

/** True when (x, z) is close enough to a ring leg to overlap it. */
export function onRingLeg(x: number, z: number, pad = 0) {
  for (const [lx, lz] of ringLegPositions()) {
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

/* ------------------------------------------------------------------ *
 * Road frames — the shared language of the circuit and the climb.
 *
 * A frame is one cross-section of road: where its centreline is, and which
 * way is forward, right and up once the road has been banked. Everything
 * driveable up in the sky is described this way, and that is the whole
 * reason the climb can join the circuit without a lip: the ramp's last
 * frames are *built from the circuit's own*, shifted sideways by exactly
 * half of each road, so the two decks are literally the same surface.
 * ------------------------------------------------------------------ */

const TAU = Math.PI * 2;

export type Vec3 = { x: number; y: number; z: number };

export type PathFrame = {
  position: Vec3;
  forward: Vec3;
  right: Vec3;
  up: Vec3;
  yaw: number;
  pitch: number;
  roll: number;
};

export const CIRCUIT_WIDTH = 15;
export const CIRCUIT_HALF = CIRCUIT_WIDTH / 2;
/** Roll per unit of curvature, capped so the banking never becomes a wall. */
const BANK_GAIN = 5.2;
const BANK_LIMIT = 0.34;
/** Frames around the loop. Dense: it is both the mesh and the collision. */
export const CIRCUIT_SEGMENTS = 180;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const smooth = (t: number) => {
  const c = clamp(t, 0, 1);
  return c * c * (3 - 2 * c);
};

/**
 * Basis vectors for a frame from its yaw, pitch and roll.
 *
 * The order is YXZ, not the usual XYZ: yaw first, then pitch and roll in the
 * segment's own frame. XYZ applies roll in world space, which skews a banked,
 * climbing road sideways instead of leaning it.
 */
function basis(yaw: number, pitch: number, roll: number) {
  const cy = Math.cos(yaw);
  const sy = Math.sin(yaw);
  const cp = Math.cos(pitch);
  const sp = Math.sin(pitch);
  const cr = Math.cos(roll);
  const sr = Math.sin(roll);
  return {
    right: { x: cy * cr + sy * sp * sr, y: cp * sr, z: -sy * cr + cy * sp * sr },
    up: { x: -cy * sr + sy * sp * cr, y: cp * cr, z: sy * sr + cy * sp * cr },
    forward: { x: sy * cp, y: -sp, z: cy * cp },
  };
}

/**
 * Turns a centreline into banked frames. Each frame sits at the midpoint of a
 * step, faces along it, and leans by its own curvature — so corners bank into
 * themselves without anyone having to author the roll by hand.
 */
function framesFrom(
  points: Vec3[],
  closed: boolean,
  bankAt?: (i: number, natural: number) => number | null,
  smoothOver = 14,
) {
  const count = points.length - 1;
  const yaws: number[] = [];
  const lengths: number[] = [];
  for (let i = 0; i < count; i += 1) {
    const dx = points[i + 1].x - points[i].x;
    const dy = points[i + 1].y - points[i].y;
    const dz = points[i + 1].z - points[i].z;
    yaws.push(Math.atan2(dx, dz));
    lengths.push(Math.hypot(dx, dy, dz));
  }

  /*
   * Curvature, as heading turned per unit travelled, wrapped to ±π so the
   * seam at the start of a closed loop isn't read as a hairpin — then
   * smoothed along the road before it is allowed to become bank. Raw
   * per-sample curvature on a densely sampled curve is noisy at the
   * millimetre level, and feeding that straight into roll makes the road
   * wobble from side to side like a ribbon in wind.
   */
  const raw: number[] = [];
  for (let i = 0; i < count; i += 1) {
    const next = closed ? yaws[(i + 1) % count] : yaws[Math.min(i + 1, count - 1)];
    let turn = next - yaws[i];
    turn = ((turn + Math.PI) % TAU) - Math.PI;
    raw.push(turn / Math.max(lengths[i], 0.001));
  }
  // Smooth over a fixed length of road rather than a fixed number of frames,
  // so a densely sampled ramp and a coarsely sampled circuit get the same
  // treatment instead of the ramp keeping every ripple the sampling put in.
  const total = lengths.reduce((a, b) => a + b, 0);
  const taps = clamp(Math.round(smoothOver / Math.max(total / count, 0.001)), 1, 16);
  const curvature = raw.map((_, i) => {
    let sum = 0;
    let weight = 0;
    for (let k = -taps; k <= taps; k += 1) {
      const j = closed ? (i + k + count) % count : clamp(i + k, 0, count - 1);
      const w = taps + 1 - Math.abs(k);
      sum += raw[j] * w;
      weight += w;
    }
    return sum / weight;
  });

  const out: PathFrame[] = [];
  for (let i = 0; i < count; i += 1) {
    const a = points[i];
    const b = points[i + 1];
    const dy = b.y - a.y;
    const flat = Math.hypot(b.x - a.x, b.z - a.z);

    const natural = clamp(curvature[i] * BANK_GAIN, -BANK_LIMIT, BANK_LIMIT);
    const override = bankAt?.(i, natural);
    const roll = override === null || override === undefined ? natural : override;
    const yaw = yaws[i];
    const pitch = -Math.atan2(dy, flat);
    out.push({
      position: { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2, z: (a.z + b.z) / 2 },
      yaw,
      pitch,
      roll,
      ...basis(yaw, pitch, roll),
    });
  }
  // Close the loop so a sweep along it has no seam at the start line.
  if (closed) out.push(out[0]);
  return out;
}

let circuitCache: PathFrame[] | null = null;

/** The circuit as banked frames. One call: the mesh and the hulls share it. */
export function circuitFrames(count = CIRCUIT_SEGMENTS): PathFrame[] {
  if (count === CIRCUIT_SEGMENTS && circuitCache) return circuitCache;
  const points: Vec3[] = [];
  for (let i = 0; i <= count; i += 1) points.push(circuitPoint((i / count) * TAU));
  const frames = framesFrom(points, true);
  if (count === CIRCUIT_SEGMENTS) circuitCache = frames;
  return frames;
}

/* ------------------------------------------------------------------ *
 * The climb, and how it joins the circuit.
 * ------------------------------------------------------------------ */

/** One lane wide: the climb is a slip road, not a second racetrack. */
export const RAMP_WIDTH = 12;
export const RAMP_HALF = RAMP_WIDTH / 2;

/**
 * The merge, in circuit angles.
 *
 * The climb used to end in a T-junction on the track's centreline: it arrived
 * dead perpendicular, flat, against a deck banked by up to twenty degrees, so
 * one edge of the ramp stood two metres proud of the road and the other hung
 * two metres under it. That is what "doesn't mesh" was — not a rough surface
 * but a step, and one you met side-on at whatever speed the climb gave you.
 *
 * Now the ramp arrives *alongside* the inner edge, already pointing the way
 * the traffic goes, and runs there long enough to pick your moment. The
 * barrier between the two is open for that whole stretch, which is what makes
 * it a merge instead of a junction.
 */
const MERGE_TO_TURN = 0.75;
const MERGE_FROM = CIRCUIT_RAMP_ANGLE + MERGE_TO_TURN;
const MERGE_TO = CIRCUIT_RAMP_ANGLE + 1.15;

/** True for a point on the loop where the inner barrier has to be open. */
export function inMergeGap(angle: number) {
  const a = ((angle % TAU) + TAU) % TAU;
  return a > MERGE_FROM - 0.05 && a < MERGE_TO;
}

/**
 * Control points for the climb — as an inset from the merge lane, not as a
 * shape of its own.
 *
 * `turn` is how far around the circuit the point sits, measured from the
 * ramp's bearing; `inset` is how many metres inside the lane it lies; `height`
 * is its own. Written this way the climb follows the circuit wherever the
 * circuit wanders, and the number that decides whether the join feels right —
 * how fast the ramp closes on the lane — is the number you are authoring.
 *
 * It leaves the island dead south, the way the car spawns facing, climbs
 * straight while it crosses over the ring road, then spends the rest of its
 * length on one long right-hander that lines it up with the traffic.
 */
const CLIMB_NODES: { turn: number; radius: number; height: number }[] = [
  { turn: 0.0, radius: 16, height: 0 },
  { turn: 0.0, radius: 42, height: 3.4 },
  { turn: 0.03, radius: 68, height: 10.2 },
  { turn: 0.1, radius: 92, height: 17.6 },
  { turn: 0.2, radius: 112, height: 22.0 },
  { turn: 0.33, radius: 128, height: 24.8 },
  { turn: 0.4, radius: 133, height: 26.2 },
];

/**
 * How the last fifty metres close on the lane: a gap that shrinks as the
 * square of the distance left, so the ramp stops converging before it
 * arrives instead of still crossing sideways when it gets there.
 *
 * Radius is the wrong handle for this stretch — the circuit wanders in and
 * out by thirty metres, so a fixed radius drifts towards it and away from it
 * for reasons that have nothing to do with the ramp. It is equally the wrong
 * handle to *drop*: at the bottom of the climb the lane is a hundred metres
 * away and a degree of error in its direction throws the start clear across
 * the island. Each is used over the stretch where it is the number that
 * actually matters.
 */
const MERGE_APPROACH = 9;
const MERGE_APPROACH_FROM = 0.4;
const MERGE_APPROACH_GAP = 12;

const dist = (a: Vec3, b: Vec3) => Math.hypot(b.x - a.x, b.y - a.y, b.z - a.z);
const mix = (a: Vec3, b: Vec3, t: number): Vec3 => ({
  x: lerp(a.x, b.x, t),
  y: lerp(a.y, b.y, t),
  z: lerp(a.z, b.z, t),
});

/**
 * Centripetal Catmull-Rom through a list of points.
 *
 * Centripetal, not uniform: uniform parametrisation overshoots whenever the
 * control points are unevenly spaced, and an overshoot in a road is a kink
 * that doubles back on itself. The first version of this climb had one — a
 * two-metre turn radius and a twenty-degree grade appearing out of nowhere in
 * a span that was supposed to be a gentle sweeper.
 */
function crCurve(nodes: Vec3[], spacing: number): Vec3[] {
  // Phantom ends by reflection, not by repeating the endpoint. A repeated
  // endpoint gives the curve zero speed as it arrives, which bunches the last
  // samples on top of each other — and a frame built from two points a
  // centimetre apart has a meaningless heading.
  const at = (i: number) => {
    if (i < 0) return mix(nodes[0], nodes[1], -1);
    if (i > nodes.length - 1) return mix(nodes[nodes.length - 1], nodes[nodes.length - 2], -1);
    return nodes[i];
  };
  const out: Vec3[] = [];
  for (let i = 0; i < nodes.length - 1; i += 1) {
    const p0 = at(i - 1);
    const p1 = at(i);
    const p2 = at(i + 1);
    const p3 = at(i + 2);
    const knot = (t: number, a: Vec3, b: Vec3) => t + Math.max(Math.sqrt(dist(a, b)), 1e-4);
    const t0 = 0;
    const t1 = knot(t0, p0, p1);
    const t2 = knot(t1, p1, p2);
    const t3 = knot(t2, p2, p3);
    const steps = Math.max(2, Math.round(dist(p1, p2) / spacing));
    for (let s = 0; s < steps; s += 1) {
      const t = lerp(t1, t2, s / steps);
      const a1 = mix(p0, p1, (t - t0) / (t1 - t0));
      const a2 = mix(p1, p2, (t - t1) / (t2 - t1));
      const a3 = mix(p2, p3, (t - t2) / (t3 - t2));
      const b1 = mix(a1, a2, (t - t0) / (t2 - t0));
      const b2 = mix(a2, a3, (t - t1) / (t3 - t1));
      out.push(mix(b1, b2, (t - t1) / (t2 - t1)));
    }
  }
  // Land exactly on the last node — but replace the final sample rather than
  // adding to it when the two are almost on top of each other. A short last
  // step is a frame whose heading is decided by a centimetre of curve, and
  // that shows up as a crease across the road.
  const last = nodes[nodes.length - 1];
  if (out.length && dist(out[out.length - 1], last) < spacing * 0.7) out[out.length - 1] = last;
  else out.push(last);
  return out;
}

/**
 * A few passes of Laplacian smoothing along a centreline, endpoints pinned.
 *
 * The control net for the climb is authored partly against the circuit's own
 * frames, and those carry the sampling of the circuit with them — so the
 * curve through them arrives faithful to a shape that is a few centimetres
 * ragged. Points move by under a fifth of a metre here; headings move a lot,
 * and heading is what a crease in a road is made of.
 */
function relax(points: Vec3[], passes: number): Vec3[] {
  const out = points.map((p) => ({ ...p }));
  for (let pass = 0; pass < passes; pass += 1) {
    const prev = out.map((p) => ({ ...p }));
    for (let i = 1; i < out.length - 1; i += 1) {
      out[i].x = prev[i].x + 0.25 * (prev[i - 1].x + prev[i + 1].x - 2 * prev[i].x);
      out[i].y = prev[i].y + 0.25 * (prev[i - 1].y + prev[i + 1].y - 2 * prev[i].y);
      out[i].z = prev[i].z + 0.25 * (prev[i - 1].z + prev[i + 1].z - 2 * prev[i].z);
    }
  }
  return out;
}

const add = (a: Vec3, b: Vec3, k: number): Vec3 => ({
  x: a.x + b.x * k,
  y: a.y + b.y * k,
  z: a.z + b.z * k,
});

/**
 * The merge lane: the circuit's own frames, shifted inward by half of each
 * road so the lane's outer edge and the track's inner edge are the same line
 * at the same height and the same lean. Nothing here is approximated, which
 * is the point — an approximation is a lip.
 */
function mergeLane(circuit: PathFrame[]): PathFrame[] {
  const count = circuit.length - 1;
  const index = (angle: number) => Math.round((angle / TAU) * count);
  const out: PathFrame[] = [];
  for (let i = index(MERGE_FROM); i <= index(MERGE_TO); i += 1) {
    const f = circuit[i % count];
    out.push({
      ...f,
      position: add(f.position, f.right, -(CIRCUIT_HALF + RAMP_HALF)),
    });
  }
  return out;
}

let rampCache: PathFrame[] | null = null;
let laneCount = 0;

/**
 * How many frames at the top of the climb are the merge lane — the stretch
 * built from the circuit's own frames, where the two roads are one surface.
 * Exported because the renderer has to know where to stop drawing the ramp's
 * outer barrier, and guessing the number is how you end up with a rail across
 * the middle of a merge.
 */
export function mergeLaneFrames() {
  rampFrames();
  return laneCount;
}

/**
 * The whole climb as frames: the authored ascent, then the merge lane.
 *
 * The last three control points of the ascent are the lane's own line,
 * projected back down it — so the curve arrives on the lane already pointing
 * along it. Position, heading and lean are all continuous across the join,
 * which is the only definition of "no bump" that survives contact with a car.
 */
export function rampFrames(): PathFrame[] {
  if (rampCache) return rampCache;

  const circuit = circuitFrames();
  const lane = mergeLane(circuit);
  const entry = lane[0];

  const count = circuit.length - 1;
  /**
   * A point on the lane's line, pushed `inset` metres further inside it.
   *
   * Interpolated between frames rather than snapped to the nearest one: the
   * circuit is sampled every two degrees, which is five metres of road, and
   * rounding to that put a five-metre stagger into control points that were
   * only ever three metres apart. The curve through them wobbled, and the
   * wobble came out as a kink in the last corner of the climb.
   */
  const laneAt = (angle: number, inset: number, height?: number) => {
    const raw = ((angle / TAU) * count) % count;
    const i = Math.floor((raw + count) % count);
    const t = raw - Math.floor(raw);
    const a = circuit[i];
    const b = circuit[(i + 1) % count];
    const reach = -(CIRCUIT_HALF + RAMP_HALF + inset);
    const pa = add(a.position, a.right, reach);
    const pb = add(b.position, b.right, reach);
    const p = mix(pa, pb, t);
    return height === undefined ? p : { ...p, y: height };
  };

  const nodes: Vec3[] = CLIMB_NODES.map(({ turn, radius, height }) => {
    const a = CIRCUIT_RAMP_ANGLE + turn;
    return { x: Math.cos(a) * radius, y: height, z: Math.sin(a) * radius };
  });
  const base = CLIMB_NODES[CLIMB_NODES.length - 1];
  for (let k = 1; k <= MERGE_APPROACH; k += 1) {
    const u = k / (MERGE_APPROACH + 1);
    const turn = lerp(MERGE_APPROACH_FROM, MERGE_TO_TURN, u);
    const gap = MERGE_APPROACH_GAP * (1 - u) * (1 - u);
    const height = lerp(base.height, entry.position.y, smooth(u));
    nodes.push(laneAt(CIRCUIT_RAMP_ANGLE + turn, gap, height));
  }
  nodes.push(entry.position);

  const climb = relax(crCurve(nodes, 2.4), 14);

  /*
   * Lean. The ascent banks by its own curvature like any other road, but over
   * the last stretch it eases into the circuit's lean instead, so that the
   * final frame of the climb and the first frame of the lane agree exactly.
   * Measured in metres from the top rather than in frames: the blend has to
   * finish where the roads meet, not near it.
   */
  const toEnd: number[] = new Array(climb.length).fill(0);
  for (let i = climb.length - 2; i >= 0; i -= 1) toEnd[i] = toEnd[i + 1] + dist(climb[i], climb[i + 1]);
  const BLEND = 55;
  const ascent = framesFrom(climb, false, (i, natural) => {
    const t = smooth(1 - toEnd[i] / BLEND);
    return t <= 0 ? null : lerp(natural, entry.roll, t);
  }, 30);

  // Drop the ascent's last frame: it sits a metre short of the lane's first,
  // and two frames that close together have their heading decided by the
  // rounding of the sample before them, which shows up as a crease across the
  // road exactly where you least want to find one.
  laneCount = lane.length;
  rampCache = [...ascent.slice(0, -1), ...lane];
  return rampCache;
}

/** The climb's centreline in plan, for keeping scenery out from under it. */
let rampPlan: Vec3[] | null = null;

/** True when (x, z) sits under the climb or its merge lane. */
export function onRamp(x: number, z: number, pad = 0) {
  if (!rampPlan) rampPlan = rampFrames().map((f) => f.position);
  const reach = RAMP_HALF + 5 + pad;
  for (const p of rampPlan) {
    const dx = x - p.x;
    const dz = z - p.z;
    if (dx * dx + dz * dz < reach * reach) return true;
  }
  return false;
}

/**
 * The nearest point on either road in the sky, and which way it faces.
 *
 * Used by the one thing that is allowed to move the car without being asked:
 * the catch that puts you back on the circuit when you have left it entirely.
 * Searching both roads rather than the circuit alone matters — leave the
 * track on the inside of the merge and the slip road is the nearer surface,
 * and being set down on the track facing the wrong way across it would be a
 * worse outcome than the fall.
 */
export function nearestSkyRoad(x: number, z: number) {
  let best: PathFrame | null = null;
  let bestDistance = Infinity;
  for (const road of [circuitFrames(), rampFrames()]) {
    for (const f of road) {
      const dx = x - f.position.x;
      const dz = z - f.position.z;
      const d = dx * dx + dz * dz;
      if (d < bestDistance) {
        bestDistance = d;
        best = f;
      }
    }
  }
  return { frame: best as PathFrame, distance: Math.sqrt(bestDistance) };
}
