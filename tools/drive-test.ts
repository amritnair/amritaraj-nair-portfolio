/**
 * Drives the car up the climb and onto the circuit, headlessly, and reports
 * whether it made it.
 *
 * Run it with:  npm run test:drive
 *
 * Why this exists: the in-app preview renders in bursts and drops held keys,
 * so the car never goes faster than a crawl there and nothing about how the
 * climb *drives* can be verified by looking at it. This builds a Rapier world
 * out of the game's own collision geometry (`src/world/roads.ts`), puts the
 * game's car body in it, applies the forces `Car.tsx` applies with the
 * constants in `drive.ts`, and holds the throttle while an autopilot steers
 * along the road. If it cannot get up, a player cannot either.
 *
 * It mirrors the drive forces, not the whole frame loop — scoring, the HUD,
 * tricks and the camera are not physics and are not here. If a force in
 * Car.tsx changes, change it here too, or this test is testing a different car.
 */
import RAPIER from "@dimforge/rapier3d-compat";
import {
  DECK_WIDTH,
  RING_HEIGHT,
  RING_RADIUS,
  CIRCUIT_HEIGHT,
  circuitFrames,
  skyRoadTurn,
  mergeLaneFrames,
  rampFrames,
} from "../src/world/layout";
import { ROAD_FRICTION, WALL_FRICTION, circuitHulls, rampHulls, rampWidths } from "../src/world/roads";
import * as D from "../src/world/drive";

const GRAVITY = -30; // World.tsx <Physics gravity>
const DT = 1 / 60;
const SPAWN = { x: 0, y: 1.6, z: 11 }; // Car.tsx SPAWN
const GROUND_REACH = 1.35; // Car.tsx
const TIME_LIMIT = 45;
/** Pass bars. A player should never be crawling, weaving to the wall, or grinding along it. */
const MIN_CLIMB_SPEED = 12;
const MAX_DRIFT = D.RAMP_HALF_FOR_TEST - 2.5;
const MAX_WALL_FRAMES = 3;

/**
 * How the test drives. "ideal" steers proportionally with no delay — it reads
 * the centreline perfectly and is the best case. "keyboard" is a person: keys
 * are on or off, there is a dead zone before they bother correcting, and they
 * react to what they saw a fifth of a second ago. A road only one of these can
 * drive is a road a player cannot.
 */
type Driver = "ideal" | "keyboard";
/** Where the run begins: rolling from the spawn, or stopped on the climb. */
type Start = { label: string; frame: number | null };
type Scenario = { name: string; assistSign: 1 | -1; driver: Driver; start: Start };

type V3 = { x: number; y: number; z: number };
const rotate = (q: { x: number; y: number; z: number; w: number }, v: V3): V3 => {
  // v' = q v q*
  const ix = q.w * v.x + q.y * v.z - q.z * v.y;
  const iy = q.w * v.y + q.z * v.x - q.x * v.z;
  const iz = q.w * v.z + q.x * v.y - q.y * v.x;
  const iw = -q.x * v.x - q.y * v.y - q.z * v.z;
  return {
    x: ix * q.w + iw * -q.x + iy * -q.z - iz * -q.y,
    y: iy * q.w + iw * -q.y + iz * -q.x - ix * -q.z,
    z: iz * q.w + iw * -q.z + ix * -q.y - iy * -q.x,
  };
};
const dot = (a: V3, b: V3) => a.x * b.x + a.y * b.y + a.z * b.z;

function quatMul(a: { x: number; y: number; z: number; w: number }, b: { x: number; y: number; z: number; w: number }) {
  return {
    w: a.w * b.w - a.x * b.x - a.y * b.y - a.z * b.z,
    x: a.w * b.x + a.x * b.w + a.y * b.z - a.z * b.y,
    y: a.w * b.y - a.x * b.z + a.y * b.w + a.z * b.x,
    z: a.w * b.z + a.x * b.y - a.y * b.x + a.z * b.w,
  };
}

/** Pose that puts the car's nose (-Z) along a road frame, sitting on it. */
function poseOn(frameIndex: number) {
  const f = rampFrames()[frameIndex];
  const n = f.forward;
  const yaw = Math.atan2(-n.x, -n.z);
  const pitch = Math.asin(Math.max(-1, Math.min(1, n.y)));
  const qy = { x: 0, y: Math.sin(yaw / 2), z: 0, w: Math.cos(yaw / 2) };
  const qx = { x: Math.sin(pitch / 2), y: 0, z: 0, w: Math.cos(pitch / 2) };
  return {
    position: {
      x: f.position.x + f.up.x * 1.1,
      y: f.position.y + f.up.y * 1.1,
      z: f.position.z + f.up.z * 1.1,
    },
    rotation: quatMul(qy, qx),
  };
}

function buildWorld(start: Start) {
  const world = new RAPIER.World({ x: 0, y: GRAVITY, z: 0 });

  // Island floor, flush with y = 0 (Island.tsx).
  world.createCollider(
    RAPIER.ColliderDesc.cuboid(148, 2, 148).setTranslation(0, -2, 0).setFriction(1),
  );

  const statics = world.createRigidBody(RAPIER.RigidBodyDesc.fixed());
  for (const hull of [...rampHulls(rampFrames()), ...circuitHulls(circuitFrames())]) {
    const desc = RAPIER.ColliderDesc.convexHull(hull.points);
    if (desc) world.createCollider(desc.setFriction(hull.wall ? WALL_FRICTION : ROAD_FRICTION), statics);
  }

  // The ring road the climb has to get past (Highways.tsx RingSurface).
  const SEGMENTS = 64;
  for (let i = 0; i < SEGMENTS; i += 1) {
    const angle = (i / SEGMENTS) * Math.PI * 2;
    const half = (Math.PI * RING_RADIUS) / SEGMENTS + 0.35;
    const s = Math.sin(-angle / 2);
    const rot = { x: 0, y: s, z: 0, w: Math.cos(-angle / 2) };
    const place = (lx: number, ly: number) => {
      const off = rotate(rot, { x: lx, y: 0, z: 0 });
      return {
        x: Math.cos(angle) * RING_RADIUS + off.x,
        y: RING_HEIGHT + ly,
        z: Math.sin(angle) * RING_RADIUS + off.z,
      };
    };
    const deck = place(0, -0.35);
    world.createCollider(
      RAPIER.ColliderDesc.cuboid(DECK_WIDTH / 2, 0.35, half)
        .setTranslation(deck.x, deck.y, deck.z)
        .setRotation(rot)
        .setFriction(1),
    );
    for (const side of [-1, 1]) {
      const kerb = place((side * DECK_WIDTH) / 2, -0.04);
      world.createCollider(
        RAPIER.ColliderDesc.cuboid(0.35, 0.33, half)
          .setTranslation(kerb.x, kerb.y, kerb.z)
          .setRotation(rot)
          .setFriction(1),
      );
    }
  }

  // The car (Car.tsx <RigidBody> and its collider).
  const pose = start.frame === null ? null : poseOn(start.frame);
  const at = pose ? pose.position : SPAWN;
  const desc = RAPIER.RigidBodyDesc.dynamic().setTranslation(at.x, at.y, at.z);
  if (pose) desc.setRotation(pose.rotation);
  const body = world.createRigidBody(
    desc
      .setLinearDamping(0.35)
      .setAngularDamping(4)
      .enabledRotations(true, true, false)
      .setCcdEnabled(true),
  );
  world.createCollider(
    RAPIER.ColliderDesc.cuboid(1.0, 0.5, 2.05).setDensity(2.6).setFriction(0.15),
    body,
  );
  return { world, body };
}

function run(scenario: Scenario) {
  const { world, body } = buildWorld(scenario.start);
  const seen: number[] = []; // heading errors, for the keyboard driver's reaction delay
  const frames = rampFrames();
  const widths = rampWidths(frames.length);
  const topIndex = frames.length - mergeLaneFrames(); // first frame of the merge lane
  let steerSmooth = 0;
  let wasAirborne = false;

  let best = 0;
  let reachedAt: number | null = null;
  let fellAt: number | null = null;
  let flippedAt: number | null = null;
  let maxLateral = 0;
  let maxPitchDeg = 0;
  let wallHits = 0;
  let climbSpeedSum = 0;
  let climbSamples = 0;
  let minClimbSpeed = Infinity;
  let lastSpeedLog = -1;
  const trace: string[] = [];

  for (let step = 0; step * DT < TIME_LIMIT; step += 1) {
    const t = step * DT;
    const p = body.translation();
    const q = body.rotation();
    const v = body.linvel();
    const mass = body.mass();

    const forward = rotate(q, { x: 0, y: 0, z: -1 });
    const right = rotate(q, { x: 1, y: 0, z: 0 });
    const up = rotate(q, { x: 0, y: 1, z: 0 });
    const alongForward = dot(v, forward);
    const alongRight = dot(v, right);
    const speed = Math.hypot(v.x, v.y, v.z);

    const ray = new RAPIER.Ray({ x: p.x, y: p.y, z: p.z }, { x: 0, y: -1, z: 0 });
    const grounded = world.castRay(ray, GROUND_REACH, true, undefined, undefined, undefined, body) !== null;

    // Where are we on the climb?
    let nearest = 0;
    let nearestD = Infinity;
    for (let i = 0; i < frames.length; i += 1) {
      const f = frames[i].position;
      const d = (f.x - p.x) ** 2 + (f.z - p.z) ** 2;
      if (d < nearestD) {
        nearestD = d;
        nearest = i;
      }
    }
    const f = frames[nearest];
    const lateral = Math.abs((p.x - f.position.x) * f.right.x + (p.z - f.position.z) * f.right.z);
    const onRamp = Math.sqrt(nearestD) < 12;

    if (onRamp && nearest > best) best = nearest;
    if (onRamp && nearest > 2 && nearest < topIndex) {
      maxLateral = Math.max(maxLateral, lateral);
      maxPitchDeg = Math.max(maxPitchDeg, (Math.asin(Math.max(-1, Math.min(1, forward.y))) * 180) / Math.PI);
      climbSpeedSum += Math.abs(alongForward);
      climbSamples += 1;
      if (t > 1.5 && nearest > 6) minClimbSpeed = Math.min(minClimbSpeed, Math.abs(alongForward));
      // Wall inner face is RAMP_HALF - 0.45; the car is 1.0 either side of centre.
      if (lateral > D.RAMP_HALF_FOR_TEST - 0.45 - 1.0) wallHits += 1;
    }
    if (reachedAt === null && best >= topIndex) reachedAt = t;
    if (fellAt === null && best > 8 && best < topIndex && p.y < f.position.y - 4) fellAt = t;
    if (flippedAt === null && up.y < 0.55) flippedAt = t;
    const circuit = circuitFrames();
    let onCircuit = 0;
    let onCircuitD = Infinity;
    for (let i = 0; i < circuit.length; i += 1) {
      const c = circuit[i].position;
      const d = (c.x - p.x) ** 2 + (c.z - p.z) ** 2;
      if (d < onCircuitD) {
        onCircuitD = d;
        onCircuit = i;
      }
    }
    const tick = Math.floor(t * Number(process.env.HZ ?? 2));
    if (tick !== lastSpeedLog) {
      lastSpeedLog = tick;
      trace.push(`t=${String(Math.floor(t)).padStart(2)}s frame ${String(nearest).padStart(3)}/${frames.length} y=${p.y.toFixed(1).padStart(5)} v=${alongForward.toFixed(1).padStart(5)} lat=${lateral.toFixed(1).padStart(4)} steer=${steerSmooth.toFixed(2).padStart(5)} slip=${alongRight.toFixed(1)} yaw=${body.angvel().y.toFixed(2)} upY=${up.y.toFixed(2)} ${grounded ? "ground" : "AIR"} circuit ${onCircuit} x=${p.x.toFixed(0)} z=${p.z.toFixed(0)}`);
    }
    // After the merge the join itself is under test: drive on and do not fall.
    if (reachedAt !== null && fellAt === null && p.y < CIRCUIT_HEIGHT - 4) fellAt = t;
    if (reachedAt !== null && t > reachedAt + 3) break;
    if (fellAt !== null || flippedAt !== null) break;

    // ---- autopilot: hold W and steer ----
    // Two-point steering, the standard model of how people drive: a far point
    // about 0.8 s ahead sets the line, a near point keeps you in the lane.
    // One short look-ahead oscillates at speed; one long one cuts every corner.
    const path = reachedAt !== null && nearest > frames.length - 4 ? circuit : frames;
    const angleTo = (distance: number) => {
      let k = path === circuit ? onCircuit : nearest;
      for (let walked = 0; walked < distance; ) {
        const next = path === circuit ? (k + 1) % circuit.length : Math.min(k + 1, frames.length - 1);
        if (next === k) break;
        walked += Math.hypot(path[next].position.x - path[k].position.x, path[next].position.z - path[k].position.z);
        k = next;
      }
      // Aim at the middle of the road that is left, not the lane's centreline:
      // as the lane closes its inner edge sweeps across, and a driver moves over.
      const shift = path === frames ? (D.RAMP_HALF_FOR_TEST - widths[k]) / 2 : 0;
      const aim = { x: path[k].position.x + path[k].right.x * shift, z: path[k].position.z + path[k].right.z * shift };
      const to = { x: aim.x - p.x, z: aim.z - p.z };
      const cross = forward.z * to.x - forward.x * to.z;
      return Math.atan2(cross, forward.x * to.x + forward.z * to.z);
    };
    // The keyboard driver has the road-follow assist doing the curve, so what
    // a player reacts to is being off the road's line: aim at a spot ahead
    // along the tangent of where the road is now, not at a point round the bend.
    const tangentAim = () => {
      const f = path === circuit ? circuit[onCircuit] : frames[nearest];
      const shift = path === frames ? (D.RAMP_HALF_FOR_TEST - widths[nearest]) / 2 : 0;
      const reach = Math.max(10, Math.abs(alongForward) * 0.4);
      const to = {
        x: f.position.x + f.right.x * shift + f.forward.x * reach - p.x,
        z: f.position.z + f.right.z * shift + f.forward.z * reach - p.z,
      };
      const cross = forward.z * to.x - forward.x * to.z;
      return Math.atan2(cross, forward.x * to.x + forward.z * to.z);
    };
    const heading =
      scenario.driver === "keyboard"
        ? tangentAim()
        : 0.6 * angleTo(Math.max(14, Math.abs(alongForward) * 0.8)) + 0.8 * angleTo(8);
    seen.push(heading);
    let steerTarget: number;
    if (process.env.HANDS_OFF) {
      steerTarget = 0;
    } else if (scenario.driver === "ideal") {
      steerTarget = Math.max(-1, Math.min(1, heading * 2.4));
    } else {
      // A fifth of a second late, and all-or-nothing past a dead zone.
      const perceived = seen[Math.max(0, seen.length - 1 - 12)];
      steerTarget = Math.abs(perceived) < 0.05 ? 0 : Math.sign(perceived);
    }

    // ---- Car.tsx forces ----
    const throttle = 1;
    const limit = D.MAX_SPEED;
    if (grounded && Math.abs(alongForward) < limit) {
      const power = D.driveForce(alongForward, limit, false);
      const climb = scenario.assistSign * forward.y;
      const assist = climb > 0 ? climb * 30 : 0;
      body.applyImpulse(
        { x: forward.x * (power + assist) * mass * DT, y: forward.y * (power + assist) * mass * DT, z: forward.z * (power + assist) * mass * DT },
        true,
      );
    }
    if (grounded) {
      const perFrame = 1 - Math.pow(1 - D.GRIP, DT * 60);
      const k = -alongRight * perFrame * mass;
      body.applyImpulse({ x: right.x * k, y: right.y * k, z: right.z * k }, true);
      if (Math.abs(alongForward) < limit) {
        const regained = Math.abs(alongRight) * perFrame * D.GRIP_REDIRECT * (alongForward < 0 ? -1 : 1) * mass;
        body.applyImpulse({ x: forward.x * regained, y: forward.y * regained, z: forward.z * regained }, true);
      }
    }
    const steerRate = steerTarget === 0 ? D.STEER_RETURN : D.STEER_RESPONSE;
    steerSmooth += (steerTarget - steerSmooth) * (1 - Math.exp(-steerRate * DT));
    const speedFactor = Math.min(Math.abs(alongForward) / 6, 1);
    const steerFactor = throttle !== 0 ? Math.max(speedFactor, 0.4) : speedFactor;
    const speedTame = 1 - (1 - D.HIGH_SPEED_STEER) * Math.min(Math.abs(alongForward) / D.MAX_SPEED, 1);
    const direction = alongForward < -0.4 ? -1 : 1;
    if (grounded) {
      const spin = body.angvel();
      const settle = 1 - Math.exp(-D.GROUND_PITCH_DAMP * DT);
      const along = dot(spin, right);
      body.setAngvel(
        {
          x: spin.x - right.x * along * settle,
          y: steerSmooth * D.TURN_RATE * steerFactor * speedTame * direction + skyRoadTurn(p.x, p.y, p.z, v.x, v.z),
          z: spin.z - right.z * along * settle,
        },
        true,
      );
    }
    if (!grounded && v.y < 0) body.applyImpulse({ x: 0, y: -D.FALL_GRAVITY * mass * DT, z: 0 }, true);
    if (grounded && wasAirborne && v.y < -6) body.setLinvel({ x: v.x, y: v.y * D.LANDING_KEEP, z: v.z }, true);
    wasAirborne = !grounded;
    if (grounded && Math.abs(alongForward) > 8) {
      const k = -D.DOWNFORCE * Math.min(Math.abs(alongForward) / D.MAX_SPEED, 1.4) * mass * DT;
      body.applyImpulse({ x: 0, y: k, z: 0 }, true);
    }

    world.step();
    void speed;
  }

  // "Works" is stricter than "eventually arrives". A player who weaves to the
  // wall, grinds along it, or bleeds to a standstill halfway up has not had a
  // ramp that works, even if the car does reach the top.
  const reasons: string[] = [];
  if (reachedAt === null) reasons.push("never reached the top");
  if (fellAt !== null) reasons.push("fell off");
  if (flippedAt !== null) reasons.push("flipped");
  if (minClimbSpeed < MIN_CLIMB_SPEED) reasons.push(`stalled to ${minClimbSpeed.toFixed(1)} u/s`);
  if (maxLateral > MAX_DRIFT) reasons.push(`weaved ${maxLateral.toFixed(1)} off centre`);
  if (wallHits > MAX_WALL_FRAMES) reasons.push(`scraped a wall for ${wallHits} frames`);
  const ok = reasons.length === 0;
  return {
    ok,
    lines: [
      `  ${ok ? "PASS" : "FAIL"}  ${scenario.name}${ok ? "" : `  — ${reasons.join(", ")}`}`,
      `        reached merge lane: ${reachedAt === null ? `no (furthest frame ${best}/${topIndex})` : `yes, ${reachedAt.toFixed(1)}s`}`,
      `        fell off: ${fellAt === null ? "no" : `yes, ${fellAt.toFixed(1)}s`}   flipped: ${flippedAt === null ? "no" : `yes, ${flippedAt.toFixed(1)}s`}`,
      `        climb speed: mean ${(climbSpeedSum / Math.max(climbSamples, 1)).toFixed(1)}, min ${minClimbSpeed === Infinity ? "-" : minClimbSpeed.toFixed(1)} (u/s)   steepest: ${maxPitchDeg.toFixed(1)}°`,
      `        max drift from centreline: ${maxLateral.toFixed(2)}   frames scraping a wall: ${wallHits}`,
      ...trace.map((l) => `          ${l}`),
    ],
  };
}

/**
 * The catch and the flip both set the car down "facing along" something. Both
 * used to face it the wrong way. Checked here with the same yaw-only rotation
 * three's Euler(0, yaw, 0) produces.
 */
function orientationChecks() {
  const lines: string[] = [];
  let failed = 0;
  const nose = (yaw: number) => rotate({ x: 0, y: Math.sin(yaw / 2), z: 0, w: Math.cos(yaw / 2) }, { x: 0, y: 0, z: -1 });
  for (let deg = 0; deg < 360; deg += 45) {
    const dir = { x: Math.sin((deg * Math.PI) / 180), z: Math.cos((deg * Math.PI) / 180) };
    const n = nose(D.yawToFace(dir.x, dir.z));
    const agree = n.x * dir.x + n.z * dir.z;
    if (agree < 0.999) failed += 1;
  }
  // The flip's fallback goes through telemetry.heading, the nose's direction angle.
  for (let deg = 0; deg < 360; deg += 45) {
    const yaw = (deg * Math.PI) / 180;
    const n0 = nose(yaw);
    const heading = Math.atan2(n0.x, n0.z);
    const n1 = nose(D.yawToFace(Math.sin(heading), Math.cos(heading)));
    if (n0.x * n1.x + n0.z * n1.z < 0.999) failed += 1;
  }
  lines.push(`  ${failed ? "FAIL" : "PASS"}  flip and catch set the car down facing forwards (16 headings)`);
  return { ok: failed === 0, lines };
}

async function main() {
  await RAPIER.init();
  const which = process.argv.slice(2);
  const starts: Start[] = [
    { label: "rolling from spawn", frame: null },
    { label: "stopped at the foot", frame: 4 },
    { label: "stopped halfway up", frame: 30 },
  ];
  const scenarios: Scenario[] = [];
  for (const assistSign of [1] as const) {
    for (const driver of ["ideal", "keyboard"] as const) {
      for (const start of starts) {
        scenarios.push({
          name: `${driver} · ${start.label}`,
          assistSign,
          driver,
          start,
        });
      }
    }
  }
  const selected = scenarios.filter((s) => which.length === 0 || which.every((w) => s.name.includes(w)));
  const orientation = orientationChecks();
  console.log(orientation.lines.join("\n"));
  let failed = orientation.ok ? 0 : 1;
  const verbose = process.env.VERBOSE === "1";
  for (const scenario of selected) {
    const result = run(scenario);
    console.log((verbose ? result.lines : result.lines.slice(0, 5)).join("\n"));
    if (!result.ok) failed += 1;
  }
  const total = selected.length + 1;
  console.log(`\n${total - failed}/${total} passed`);
  process.exitCode = failed ? 1 : 0;
}

void main();
