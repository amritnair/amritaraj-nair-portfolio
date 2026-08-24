import { telemetry, worldStore } from "./store";

/**
 * Procedural audio: everything is synthesised in WebAudio, so there are no
 * asset files, nothing to load, and the whole soundscape is a few oscillators
 * driven off the same telemetry the HUD reads.
 *
 * The engine is a pair of detuned saws through a lowpass — pitch and brightness
 * ride on speed, so acceleration is *audible* long before the speedo says
 * anything. Drift is filtered noise. Boost opens the filter and adds a sub
 * osc. One-shots (pickup, landing, purchase) are short envelope blips.
 *
 * Browsers refuse audio before a user gesture, so start() is called from the
 * existing play-button click, and everything no-ops until then.
 */

let ctx: AudioContext | null = null;
let master: GainNode | null = null;

let engineOsc: OscillatorNode | null = null;
let engineOsc2: OscillatorNode | null = null;
let engineFilter: BiquadFilterNode | null = null;
let engineGain: GainNode | null = null;

let subOsc: OscillatorNode | null = null;
let subGain: GainNode | null = null;

let noiseSource: AudioBufferSourceNode | null = null;
let noiseFilter: BiquadFilterNode | null = null;
let noiseGain: GainNode | null = null;

let muted = false;
let raf = 0;

const MASTER_LEVEL = 0.5;

export function isMuted() {
  return muted;
}

export function toggleMute() {
  muted = !muted;
  if (master && ctx) {
    master.gain.setTargetAtTime(muted ? 0 : MASTER_LEVEL, ctx.currentTime, 0.05);
  }
  try {
    localStorage.setItem("amrit-world-muted", muted ? "1" : "0");
  } catch {
    /* fine */
  }
  return muted;
}

/** Builds the graph. Safe to call twice; only the first call does anything. */
export function startAudio() {
  if (ctx) {
    // A suspended context after tab-switch just needs resuming.
    if (ctx.state === "suspended") void ctx.resume();
    return;
  }
  try {
    ctx = new AudioContext();
  } catch {
    return; // No audio support; the game is fine without it.
  }

  try {
    muted = localStorage.getItem("amrit-world-muted") === "1";
  } catch {
    /* fine */
  }

  master = ctx.createGain();
  master.gain.value = muted ? 0 : MASTER_LEVEL;
  master.connect(ctx.destination);

  // --- engine ---------------------------------------------------------------
  engineFilter = ctx.createBiquadFilter();
  engineFilter.type = "lowpass";
  engineFilter.frequency.value = 220;
  engineFilter.Q.value = 2;

  engineGain = ctx.createGain();
  engineGain.gain.value = 0.0;

  engineOsc = ctx.createOscillator();
  engineOsc.type = "sawtooth";
  engineOsc.frequency.value = 40;
  engineOsc2 = ctx.createOscillator();
  engineOsc2.type = "sawtooth";
  engineOsc2.frequency.value = 40.7; // slight detune: one saw sounds like a toy

  engineOsc.connect(engineFilter);
  engineOsc2.connect(engineFilter);
  engineFilter.connect(engineGain);
  engineGain.connect(master);
  engineOsc.start();
  engineOsc2.start();

  // --- boost sub ------------------------------------------------------------
  subOsc = ctx.createOscillator();
  subOsc.type = "sine";
  subOsc.frequency.value = 55;
  subGain = ctx.createGain();
  subGain.gain.value = 0;
  subOsc.connect(subGain);
  subGain.connect(master);
  subOsc.start();

  // --- drift noise ----------------------------------------------------------
  const seconds = 2;
  const buffer = ctx.createBuffer(1, ctx.sampleRate * seconds, ctx.sampleRate);
  const data = buffer.getChannelData(0);
  for (let i = 0; i < data.length; i += 1) data[i] = Math.random() * 2 - 1;

  noiseSource = ctx.createBufferSource();
  noiseSource.buffer = buffer;
  noiseSource.loop = true;
  noiseFilter = ctx.createBiquadFilter();
  noiseFilter.type = "bandpass";
  noiseFilter.frequency.value = 900;
  noiseFilter.Q.value = 0.8;
  noiseGain = ctx.createGain();
  noiseGain.gain.value = 0;
  noiseSource.connect(noiseFilter);
  noiseFilter.connect(noiseGain);
  noiseGain.connect(master);
  noiseSource.start();

  // Drive it all off telemetry on our own rAF — same pattern as the HUD.
  const tick = () => {
    if (ctx && engineOsc && engineOsc2 && engineFilter && engineGain && subGain && noiseGain) {
      const t = ctx.currentTime;
      const pace = Math.min(telemetry.speed / 30, 1.45);

      // Pitch climbs with speed; a fake gear-step keeps it from being a siren.
      const gear = Math.floor(pace * 3.2);
      const inGear = pace * 3.2 - gear;
      const hz = 42 + gear * 14 + inGear * 46;
      engineOsc.frequency.setTargetAtTime(hz, t, 0.06);
      engineOsc2.frequency.setTargetAtTime(hz * 1.013, t, 0.06);
      engineFilter.frequency.setTargetAtTime(
        200 + pace * 900 + (telemetry.boosting ? 1400 : 0),
        t,
        0.08,
      );
      engineGain.gain.setTargetAtTime(telemetry.speed > 0.4 ? 0.16 + pace * 0.1 : 0.05, t, 0.1);

      subGain.gain.setTargetAtTime(telemetry.boosting ? 0.22 : 0, t, 0.05);
      noiseGain.gain.setTargetAtTime(
        telemetry.driftActive && telemetry.speed > 6 ? 0.12 : 0,
        t,
        0.07,
      );
    }
    raf = requestAnimationFrame(tick);
  };
  raf = requestAnimationFrame(tick);

  // One-shots ride on store events rather than polling.
  watchStore();
}

/** Short pitched blip — the whole one-shot vocabulary is this envelope. */
function blip(freq: number, duration: number, type: OscillatorType = "sine", level = 0.3) {
  if (!ctx || !master) return;
  const t = ctx.currentTime;
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(level, t);
  gain.gain.exponentialRampToValueAtTime(0.001, t + duration);
  osc.connect(gain);
  gain.connect(master);
  osc.start(t);
  osc.stop(t + duration);
}

function watchStore() {
  let lastOres = -1;
  let lastLap: unknown = null;
  let lastTrick: unknown = null;
  let lastPoints = -1;

  worldStore.subscribe(() => {
    const s = worldStore.get();

    // Ore pickup: rising two-note chime.
    if (lastOres >= 0 && s.garage.ores.length > lastOres) {
      blip(660, 0.12, "sine", 0.25);
      setTimeout(() => blip(990, 0.2, "sine", 0.25), 90);
    }
    lastOres = s.garage.ores.length;

    // Lap finished: little fanfare, higher if it was a best.
    if (s.lastLap && s.lastLap !== lastLap) {
      const base = s.lastLap.best ? 523 : 392;
      [0, 120, 240].forEach((ms, i) => setTimeout(() => blip(base * (1 + i * 0.26), 0.22, "triangle", 0.28), ms));
    }
    lastLap = s.lastLap;

    // Trick landed: thump plus a chirp when it was clean.
    if (s.lastTrick && s.lastTrick !== lastTrick) {
      blip(90, 0.18, "sine", 0.4);
      setTimeout(() => blip(1320, 0.1, "square", 0.12), 60);
    }
    lastTrick = s.lastTrick;

    // Spending points (a purchase): soft till sound.
    if (lastPoints > 0 && s.garage.points < lastPoints) {
      blip(880, 0.08, "triangle", 0.2);
      setTimeout(() => blip(1174, 0.14, "triangle", 0.2), 70);
    }
    lastPoints = s.garage.points;
  });
}

export function stopAudio() {
  cancelAnimationFrame(raf);
  if (ctx) void ctx.close();
  ctx = null;
}
