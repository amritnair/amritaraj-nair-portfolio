/**
 * Collision geometry for the roads in the sky, as plain numbers.
 *
 * Lives outside the React components for one reason: the game and the drive
 * test must collide with the *same* road. The test in `tools/drive-test.ts`
 * builds its physics world from these functions, so a ramp that passes the
 * test is the ramp the player drives — not a model of it that has drifted.
 *
 * Every piece is a convex hull built from two consecutive cross-sections, and
 * neighbours share their cross-section exactly, so the top faces meet edge to
 * edge. See CLAUDE.md for why boxes and trimeshes were both abandoned.
 */
import { CIRCUIT_HALF, KICKER_ANGLES, RAMP_HALF, inMergeGap, mergeLaneFrames } from "./layout";

type V = { x: number; y: number; z: number };
/** Anything with a position and a banked basis — plain or three.js vectors. */
export type RoadFrame = { position: V; right: V; up: V };

/** A collider piece, and whether it is a barrier rather than road. */
export type Hull = { points: Float32Array; wall: boolean };

/**
 * Friction for road and for barriers.
 *
 * Barriers are frictionless. With the road's friction on them, grazing a wall
 * at fifty units a second braked the car to a standstill — the drive test
 * watched a keyboard player touch the wall on the climb's turn and stop dead,
 * three runs in a row. Arcade walls deflect; they do not grab.
 */
export const ROAD_FRICTION = 1;
export const WALL_FRICTION = 0;

/** Standing barrier height, collider and mesh alike. */
export const WALL_HEIGHT = 4.6;
/** Catch fencing height alongside each kicker, and its length in frames. */
export const CATCH_HEIGHT = 13;
export const CATCH_RUN = 16;
export const CATCH_BLEND = 5;

/**
 * The corners of a slice of road between two frames, as a flat point list for
 * a convex hull. `l0`/`l1` are lateral offsets, `v0`/`v1` heights above the
 * centreline, both in the frame's own basis; `ends` overrides the lateral
 * offsets at the second frame, so a hull can taper.
 */
export function slabPoints(
  a: RoadFrame,
  b: RoadFrame,
  l0: number,
  l1: number,
  v0: number,
  v1: number,
  ends?: [number, number],
) {
  const out = new Float32Array(24);
  let i = 0;
  for (const [n, f] of [a, b].entries()) {
    const m0 = ends && n ? ends[0] : l0;
    const m1 = ends && n ? ends[1] : l1;
    for (const [l, v] of [
      [m0, v0],
      [m1, v0],
      [m1, v1],
      [m0, v1],
    ]) {
      out[i++] = f.position.x + f.right.x * l + f.up.x * v;
      out[i++] = f.position.y + f.right.y * l + f.up.y * v;
      out[i++] = f.position.z + f.right.z * l + f.up.z * v;
    }
  }
  return out;
}

/**
 * Barrier height frame by frame: the standing height everywhere, rising to
 * catch fencing across each kicker. Keyed by the frame object, not its index —
 * barriers are swept in runs that are slices of the loop, and one wraps past
 * the start line, so an index into a run says nothing about where it is.
 */
export function circuitWallHeights<F extends RoadFrame>(frames: F[]) {
  const steps = frames.length - 1;
  const out = new Map<F, number>(frames.map((f) => [f, WALL_HEIGHT]));
  for (const angle of KICKER_ANGLES) {
    const start = Math.round((angle / (Math.PI * 2)) * steps);
    for (let k = -CATCH_BLEND; k <= CATCH_RUN + CATCH_BLEND; k += 1) {
      const t =
        k < 0 ? 1 + k / CATCH_BLEND : k > CATCH_RUN ? 1 - (k - CATCH_RUN) / CATCH_BLEND : 1;
      const ease = t * t * (3 - 2 * t);
      const frame = frames[(((start + k) % steps) + steps) % steps];
      const height = WALL_HEIGHT + (CATCH_HEIGHT - WALL_HEIGHT) * ease;
      out.set(frame, Math.max(out.get(frame) ?? WALL_HEIGHT, height));
    }
  }
  return (f: F) => out.get(f) ?? WALL_HEIGHT;
}

/** The circuit's colliders: one road hull per frame, walls every third. */
export function circuitHulls<F extends RoadFrame>(frames: F[]): Hull[] {
  const height = circuitWallHeights(frames);
  const out: Hull[] = [];
  for (let i = 0; i + 1 < frames.length; i += 1) {
    const a = frames[i];
    const b = frames[i + 1];
    // Deep below the surface so a hard landing has something to hit.
    out.push({ points: slabPoints(a, b, -CIRCUIT_HALF, CIRCUIT_HALF, 0, -3.5), wall: false });
    if (i % 3 === 0 && i + 3 < frames.length) {
      const far = frames[i + 3];
      // Open the inner side only where the whole piece runs beside the lane.
      // Testing just its start left the piece that runs past the lane's end
      // out too — ten metres of open edge the drive test fell off.
      const alongside =
        inMergeGap(Math.atan2(a.position.z, a.position.x)) &&
        inMergeGap(Math.atan2(far.position.z, far.position.x));
      for (const side of [-1, 1]) {
        if (side < 0 && alongside) continue;
        out.push({
          points: slabPoints(
            a,
            far,
            side * CIRCUIT_HALF - 0.45,
            side * CIRCUIT_HALF + 0.45,
            Math.max(height(a), height(far)),
            0,
          ),
          wall: true,
        });
      }
    }
  }
  return out;
}

/**
 * How far the climb's inner edge sits from its centreline, frame by frame.
 * Its outer edge never moves: on the merge lane that edge *is* the circuit's
 * inner edge. Over the last frames the inner edge sweeps across to meet it, so
 * running out of lane eases you onto the track.
 *
 * It used to close symmetrically about the centreline, which pulled the outer
 * edge away from the circuit too — a six-metre slot, exactly where the
 * circuit has no inner wall, that the drive test fell straight through.
 */
export function rampWidths(count: number) {
  const close = mergeLaneFrames() - 1;
  return Array.from({ length: count }, (_, i) => {
    const left = count - 1 - i;
    if (left >= close) return RAMP_HALF;
    const t = left / close;
    return 2 * (0.45 + (RAMP_HALF - 0.45) * t * t) - RAMP_HALF;
  });
}

/** True once a climb frame is on the merge lane rather than short of it. */
export function onMergeLane(count: number, i: number) {
  return i >= count - mergeLaneFrames();
}

/** The climb's colliders: road every frame, walls every other one. */
export function rampHulls<F extends RoadFrame>(frames: F[]): Hull[] {
  const widths = rampWidths(frames.length);
  const out: Hull[] = [];
  for (let i = 0; i + 1 < frames.length; i += 1) {
    const a = frames[i];
    const b = frames[i + 1];
    const wa = widths[i];
    const wb = widths[i + 1];
    out.push({ points: slabPoints(a, b, -wa, RAMP_HALF, 0, -2.6, [-wb, RAMP_HALF]), wall: false });
    if (i % 2 === 0 && i + 2 < frames.length) {
      const far = frames[i + 2];
      const wf = widths[i + 2];
      // Inner side always; outer side only below the merge lane, where the
      // ramp's outer edge *is* the circuit's inner edge.
      out.push({
        points: slabPoints(a, far, -wa - 0.45, -wa + 0.45, WALL_HEIGHT, 0, [-wf - 0.45, -wf + 0.45]),
        wall: true,
      });
      if (!onMergeLane(frames.length, i)) {
        out.push({
          points: slabPoints(a, far, wa - 0.45, wa + 0.45, WALL_HEIGHT, 0, [wf - 0.45, wf + 0.45]),
          wall: true,
        });
      }
    }
  }
  return out;
}
