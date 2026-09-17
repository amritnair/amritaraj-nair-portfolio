/**
 * Searches the climb's plan for the gentlest drivable shape.
 *
 * Run it with:  npm run search:ramp
 *
 * Scores each plan on the tightest turn a player meets (smoothed over five
 * frames, so a single noisy sample does not decide it), and rejects any plan
 * that crowds the circuit barrier, clips the ring road, climbs too steeply,
 * dips on the way up, or runs its merge across the start line. The winner is
 * what RAMP_PLAN in layout.ts should be. Geometry only — `npm run test:drive`
 * is what says whether a car can actually drive the result.
 */
import {
  CIRCUIT_HALF,
  CIRCUIT_RAMP_ANGLE,
  DECK_WIDTH,
  RAMP_HALF,
  RING_RADIUS,
  buildRamp,
  circuitFrames,
  type RampPlan,
} from "../src/world/layout";

const circuit = circuitFrames();
const inner = circuit.map((g) => ({
  x: g.position.x - g.right.x * CIRCUIT_HALF,
  z: g.position.z - g.right.z * CIRCUIT_HALF,
}));

export function score(plan: RampPlan) {
  if (plan.mergeFrom + plan.mergeLength > 1.45) return null; // would cross the start line
  const { frames, laneFrames } = buildRamp(plan);
  const approachEnd = frames.length - laneFrames;

  const radii: number[] = [];
  let maxGrade = 0;
  let downhill = false;
  for (let i = 1; i < frames.length; i += 1) {
    const a = frames[i];
    const b = frames[i - 1];
    const d = Math.hypot(a.position.x - b.position.x, a.position.z - b.position.z);
    let turn = a.yaw - b.yaw;
    turn = ((turn + Math.PI) % (Math.PI * 2)) - Math.PI;
    radii.push(Math.abs(turn) > 1e-9 ? d / Math.abs(turn) : Infinity);
    maxGrade = Math.max(maxGrade, (Math.abs(a.pitch) * 180) / Math.PI);
    if (a.position.y < b.position.y - 0.02) downhill = true;
  }
  let tightest = Infinity;
  for (let i = 2; i < approachEnd - 3; i += 1) {
    const k = radii.slice(i - 2, i + 3).reduce((s, r) => s + 1 / r, 0) / 5;
    if (k > 0) tightest = Math.min(tightest, 1 / k);
  }

  let barrier = Infinity;
  for (let i = 0; i < approachEnd; i += 1) {
    const f = frames[i];
    const bearing = (((Math.atan2(f.position.z, f.position.x) - CIRCUIT_RAMP_ANGLE) % (Math.PI * 2)) + Math.PI * 2) % (Math.PI * 2);
    if (bearing > plan.mergeFrom - 0.12) continue; // the barrier is open here: this is the merge
    const ex = f.position.x + f.right.x * RAMP_HALF;
    const ez = f.position.z + f.right.z * RAMP_HALF;
    for (const g of inner) barrier = Math.min(barrier, Math.hypot(ex - g.x, ez - g.z));
  }

  let ringRoof = Infinity;
  for (const f of frames) {
    const r = Math.hypot(f.position.x, f.position.z);
    if (Math.abs(r - RING_RADIUS) < DECK_WIDTH / 2 + RAMP_HALF) ringRoof = Math.min(ringRoof, 12.3 - (f.position.y + 1.7));
  }

  const valid = !downhill && maxGrade <= 14 && barrier >= 2 && ringRoof >= 3 && Number.isFinite(tightest);
  return { valid, tightest, barrier, maxGrade, ringRoof, frames: frames.length };
}

function main() {
  const results: { plan: RampPlan; s: NonNullable<ReturnType<typeof score>> }[] = [];
  let tried = 0;
  // Coarse pass found the region; this is the fine pass around it.
  for (let turnFrom = 64; turnFrom <= 72; turnFrom += 2) {
    for (let turnRadius = 48; turnRadius <= 62; turnRadius += 2) {
      for (let sweepDeg = 108; sweepDeg <= 132; sweepDeg += 4) {
        for (let mergeFrom = 0.82; mergeFrom <= 1.0 + 1e-9; mergeFrom += 0.04) {
          for (const approach of [4, 6, 8]) {
            const plan: RampPlan = {
              climbFrom: 14,
              climbTo: turnFrom - 4,
              turnFrom,
              turnRadius,
              turnSweep: (sweepDeg * Math.PI) / 180,
              mergeFrom: Math.round(mergeFrom * 100) / 100,
              mergeLength: 0.34,
              approach,
            };
            tried += 1;
            const s = score(plan);
            if (s && s.valid) results.push({ plan, s });
          }
        }
      }
    }
  }
  results.sort((a, b) => b.s.tightest - a.s.tightest);
  console.log(`tried ${tried}, valid ${results.length}`);
  for (const { plan, s } of results.slice(0, 5)) {
    console.log(
      `  tightest R ${s.tightest.toFixed(1).padStart(5)} | barrier ${s.barrier.toFixed(1)} | grade ${s.maxGrade.toFixed(1)}° | ring roof ${s.ringRoof.toFixed(1)} || ` +
        `turnFrom ${plan.turnFrom} radius ${plan.turnRadius} sweep ${Math.round((plan.turnSweep * 180) / Math.PI)}° mergeFrom ${plan.mergeFrom} approach ${plan.approach}`,
    );
  }
}

main();
