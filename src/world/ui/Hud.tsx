import { useEffect, useRef } from "react";
import { ISLAND_RADIUS } from "../Island";
import { PROFILE, ZONE_BY_ID, ZONES } from "../content";
import { telemetry, useWorld, worldStore } from "../store";
import { ORES } from "../Ores";
import { rankFor } from "../garage";
import { hasGhost } from "../ghostLap";

const MAP = 132;
const toMap = (v: number) => MAP / 2 + (v / ISLAND_RADIUS) * (MAP / 2 - 8);

export default function Hud() {
  const visited = useWorld((s) => s.visited);
  const activeZone = useWorld((s) => s.activeZone);
  const openZone = useWorld((s) => s.openZone);

  return (
    <>
      <div className="pointer-events-none fixed inset-x-0 top-0 z-20 flex items-start justify-between p-4 sm:p-6">
        <div className="pointer-events-auto rounded-xl border border-white/10 bg-[#0d0a24]/70 px-4 py-2.5 backdrop-blur">
          <div className="text-[0.78rem] font-bold tracking-wide text-white">{PROFILE.name}</div>
          <div className="mt-0.5 flex gap-3 font-mono text-[0.6rem] uppercase tracking-widest text-[#9d8bff]">
            {PROFILE.links.slice(0, 3).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer noopener"
                className="hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="pointer-events-none rounded-xl border border-white/10 bg-[#0d0a24]/70 px-4 py-2.5 text-right backdrop-blur">
          <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[#9d8bff]">
            Districts
          </div>
          <div className="text-lg font-black leading-tight text-white">
            {visited.length}
            <span className="text-[#6b649b]">/{ZONES.length}</span>
          </div>
        </div>
      </div>

      <Minimap />
      <Speedo />
      <DriftMeter />
      <GarageButton />
      <RaceTimer />
      <LapBanner />
      <AirMeter />
      <TrickBanner />
      <CircuitPrompt />
      <AwardToasts />

      {activeZone && !openZone && (
        <button
          type="button"
          onClick={() => worldStore.openPanel(activeZone)}
          className="pointer-events-auto fixed bottom-8 left-1/2 z-20 -translate-x-1/2 animate-pulse rounded-full border border-white/20 bg-[#0d0a24]/85 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur "
        >
          Reopen {ZONE_BY_ID[activeZone].sign}
        </button>
      )}

      {!activeZone && visited.length === 0 && (
        <div className="pointer-events-none fixed bottom-8 left-1/2 z-20 w-max -translate-x-1/2 rounded-full border border-white/10 bg-[#0d0a24]/70 px-5 py-2 text-[0.68rem] uppercase tracking-[0.2em] text-[#b9b2e8] backdrop-blur ">
          Follow a glowing road
        </div>
      )}
    </>
  );
}

/**
 * Live drift chain. Like the speedo, this is driven straight off telemetry on
 * its own rAF — a chain updates every frame, and a React render per frame for
 * a number that's only on screen while sliding is a bad trade.
 */
function DriftMeter() {
  const wrap = useRef<HTMLDivElement>(null);
  const chain = useRef<HTMLSpanElement>(null);
  const multiplier = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const showing = telemetry.driftChain > 0;
      if (wrap.current) {
        wrap.current.style.opacity = showing ? "1" : "0";
        wrap.current.style.transform = `translate(-50%, ${showing ? "0" : "0.6rem"})`;
      }
      if (showing) {
        if (chain.current) chain.current.textContent = String(Math.round(telemetry.driftChain));
        if (multiplier.current) multiplier.current.textContent = `x${telemetry.driftMultiplier}`;
        if (bar.current) bar.current.style.transform = `scaleX(${telemetry.driftAngle})`;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={wrap}
      className="pointer-events-none fixed left-1/2 top-24 z-20 w-max rounded-2xl border border-[#31d8ff]/40 bg-[#0d0a24]/80 px-6 py-3 text-center backdrop-blur transition-all duration-200"
      style={{ opacity: 0, transform: "translate(-50%, 0.6rem)" }}
    >
      <div className="font-mono text-[0.58rem] uppercase tracking-[0.32em] text-[#31d8ff]">
        Drift
      </div>
      <div className="mt-0.5 flex items-baseline justify-center gap-2">
        <span ref={chain} className="font-mono text-3xl font-black tabular-nums text-white">
          0
        </span>
        <span ref={multiplier} className="font-mono text-base font-black text-[#ff5fd2]">
          x1
        </span>
      </div>
      <div className="mx-auto mt-1.5 h-1 w-32 overflow-hidden rounded-full bg-white/10">
        <div
          ref={bar}
          className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#31d8ff] to-[#ff5fd2]"
          style={{ transform: "scaleX(0)" }}
        />
      </div>
    </div>
  );
}

/** Live hangtime, on screen only while the wheels are off the road. */
function AirMeter() {
  const wrap = useRef<HTMLDivElement>(null);
  const time = useRef<HTMLSpanElement>(null);
  const spin = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      if (wrap.current) wrap.current.style.opacity = telemetry.airborne ? "1" : "0";
      if (telemetry.airborne) {
        if (time.current) time.current.textContent = `${telemetry.airTime.toFixed(2)}s`;
        const spins = Math.floor(telemetry.airSpin / (Math.PI * 2));
        if (spin.current) spin.current.textContent = spins > 0 ? `${spins * 360}°` : "";
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={wrap}
      className="pointer-events-none fixed left-1/2 top-40 z-20 w-max -translate-x-1/2 rounded-2xl border border-[#ff9f2f]/50 bg-[#0d0a24]/80 px-6 py-2.5 text-center backdrop-blur transition-opacity duration-150"
      style={{ opacity: 0 }}
    >
      <div className="font-mono text-[0.55rem] uppercase tracking-[0.32em] text-[#ff9f2f]">Air</div>
      <div className="flex items-baseline justify-center gap-2">
        <span ref={time} className="font-mono text-2xl font-black tabular-nums text-white">
          0.00s
        </span>
        <span ref={spin} className="font-mono text-base font-black text-[#7dffd0]" />
      </div>
    </div>
  );
}

/** Announces a landed jump. */
function TrickBanner() {
  const trick = useWorld((s) => s.lastTrick);

  useEffect(() => {
    if (!trick) return;
    const timer = setTimeout(() => worldStore.clearTrickBanner(), 3200);
    return () => clearTimeout(timer);
  }, [trick]);

  if (!trick) return null;

  return (
    <div className="pointer-events-none fixed left-1/2 top-1/3 z-30 w-max -translate-x-1/2 rounded-2xl border border-[#ff9f2f]/60 bg-[#0d0a24]/90 px-8 py-4 text-center backdrop-blur">
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[#ff9f2f]">
        {trick.spins > 0 ? `${trick.spins * 360}° spin` : "Landed"}
      </div>
      <div className="mt-1 font-mono text-3xl font-black tabular-nums text-white">
        {trick.air.toFixed(2)}s air
      </div>
      <div className="font-mono text-sm font-bold text-[#ff5fd2]">
        +{trick.reward.toLocaleString()} pts
      </div>
    </div>
  );
}

/** Asked once each time you arrive on the circuit: race the clock, or cruise. */
function CircuitPrompt() {
  const open = useWorld((s) => s.circuitPrompt);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.code === "Digit1" || event.code === "Enter") {
        worldStore.chooseCircuitMode("race");
      }
      if (event.code === "Digit2" || event.code === "Escape") {
        worldStore.chooseCircuitMode("cruise");
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div className="pointer-events-auto fixed left-1/2 top-28 z-30 w-max max-w-[92vw] -translate-x-1/2 rounded-2xl border border-[#7dffd0]/50 bg-[#0d0a24]/90 px-7 py-5 text-center backdrop-blur">
      <div className="font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[#7dffd0]">
        You're on the circuit
      </div>
      <p className="mt-1.5 text-sm text-[#b9b2e8]">Race the clock, or just drive it?</p>
      <div className="mt-4 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => worldStore.chooseCircuitMode("race")}
          className="rounded-full bg-gradient-to-r from-[#7dffd0] to-[#31d8ff] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#08131f] transition hover:scale-[1.03]"
        >
          Timed lap · 1
        </button>
        <button
          type="button"
          onClick={() => worldStore.chooseCircuitMode("cruise")}
          className="rounded-full border border-white/20 bg-white/[0.05] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#b9b2e8] transition hover:border-white/40 hover:text-white"
        >
          Just cruise · 2
        </button>
      </div>
      <p className="mt-3 font-mono text-[0.58rem] uppercase tracking-widest text-[#6f68a0]">
        A lap starts when you cross the start line
      </p>
    </div>
  );
}

/** Lap clock — only on screen while a speedway lap is actually running. */
function RaceTimer() {
  const wrap = useRef<HTMLDivElement>(null);
  const clock = useRef<HTMLSpanElement>(null);
  const gates = useRef<HTMLSpanElement>(null);
  const ghost = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      if (wrap.current) wrap.current.style.opacity = telemetry.raceRunning ? "1" : "0";
      if (telemetry.raceRunning) {
        if (clock.current) clock.current.textContent = telemetry.raceTime.toFixed(2);
        if (gates.current) {
          gates.current.textContent = `${telemetry.raceCheckpoint}/${telemetry.raceTotal}`;
        }
        if (ghost.current) {
          ghost.current.textContent = hasGhost() ? "Racing your best lap" : "";
        }
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      ref={wrap}
      className="pointer-events-none fixed left-1/2 top-6 z-20 w-max -translate-x-1/2 rounded-2xl border border-[#7dffd0]/40 bg-[#0d0a24]/80 px-6 py-2.5 text-center backdrop-blur transition-opacity duration-200"
      style={{ opacity: 0 }}
    >
      <div className="font-mono text-[0.55rem] uppercase tracking-[0.32em] text-[#7dffd0]">
        Lap
      </div>
      <span ref={clock} className="font-mono text-2xl font-black tabular-nums text-white">
        0.00
      </span>
      <span ref={gates} className="ml-2 font-mono text-xs text-[#8f88bd]">
        0/3
      </span>
      <div ref={ghost} className="font-mono text-[0.55rem] uppercase tracking-widest text-[#31d8ff]" />
    </div>
  );
}

/**
 * The lap result, itemised. A single "+6100" tells you nothing about what you
 * did well; this shows the working, so the next lap has something to aim at.
 */
function LapBanner() {
  const lap = useWorld((s) => s.lastLap);
  const bestLap = useWorld((s) => s.garage.bestLap);

  useEffect(() => {
    if (!lap) return;
    const timer = setTimeout(() => worldStore.clearLapBanner(), 7000);
    return () => clearTimeout(timer);
  }, [lap]);

  if (!lap) return null;

  const delta = bestLap !== null && !lap.best ? lap.time - bestLap : null;

  return (
    <div className="pointer-events-none fixed left-1/2 top-1/4 z-30 w-max min-w-[17rem] -translate-x-1/2 rounded-2xl border border-[#7dffd0]/50 bg-[#0d0a24]/92 px-7 py-5 backdrop-blur">
      <div className="text-center font-mono text-[0.6rem] uppercase tracking-[0.35em] text-[#7dffd0]">
        {lap.best ? "New best lap" : "Lap complete"}
      </div>
      <div className="mt-1 text-center font-mono text-4xl font-black tabular-nums text-white">
        {lap.time.toFixed(2)}s
      </div>
      {delta !== null && (
        <div className="text-center font-mono text-[0.62rem] tabular-nums text-[#ff9f2f]">
          +{delta.toFixed(2)} off your best
        </div>
      )}

      <div className="mt-4 space-y-1 border-t border-white/10 pt-3 font-mono text-[0.68rem]">
        <Row label="Lap time" value={lap.base} />
        <Row
          label={lap.clean ? "Clean lap" : "Clean lap — you hit something"}
          value={lap.cleanBonus}
          muted={!lap.clean}
        />
        <Row label="Style banked this lap" value={lap.styleBonus} muted={lap.styleBonus === 0} />
        <div className="flex items-baseline justify-between border-t border-white/10 pt-2 text-sm font-black text-white">
          <span>Total</span>
          <span className="tabular-nums">{lap.total.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, muted }: { label: string; value: number; muted?: boolean }) {
  return (
    <div className={`flex items-baseline justify-between ${muted ? "text-[#6f68a0]" : "text-[#b9b2e8]"}`}>
      <span>{label}</span>
      <span className="tabular-nums">{value > 0 ? `+${value.toLocaleString()}` : "—"}</span>
    </div>
  );
}

/** Floating "+N" for every award, so points always land somewhere visible. */
function AwardToasts() {
  const awards = useWorld((s) => s.awards);

  useEffect(() => {
    if (!awards.length) return;
    const timers = awards.map((a) => setTimeout(() => worldStore.dismissAward(a.id), 1800));
    return () => timers.forEach(clearTimeout);
  }, [awards]);

  return (
    <div className="pointer-events-none fixed right-4 top-44 z-20 flex flex-col items-end gap-1.5">
      {awards.map((a) => (
        <div
          key={a.id}
          className="rounded-lg border border-[#ff5fd2]/40 bg-[#0d0a24]/85 px-3 py-1.5 text-right backdrop-blur"
        >
          <div className="font-mono text-[0.5rem] uppercase tracking-[0.28em] text-[#ff5fd2]">
            {a.label}
          </div>
          <div className="font-mono text-sm font-black tabular-nums text-white">
            +{a.amount.toLocaleString()}
          </div>
        </div>
      ))}
    </div>
  );
}
/** Entry point to the design screen, with the running points total on it. */
function GarageButton() {
  const points = useWorld((s) => s.garage.points);
  const ores = useWorld((s) => s.garage.ores.length);
  const panelOpen = useWorld((s) => s.openZone !== null);
  const rank = rankFor(points);

  return (
    <button
      type="button"
      onClick={() => worldStore.toggleGarage()}
      className="pointer-events-auto fixed right-4 top-24 z-20 rounded-xl border border-white/10 bg-[#0d0a24]/70 px-4 py-2.5 text-right backdrop-blur transition hover:border-[#31d8ff]/50"
      style={{ transform: panelOpen ? "translateX(min(-28rem, -38vw))" : "none" }}
    >
      <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[#31d8ff]">
        Garage · G
      </div>
      <div className="font-mono text-lg font-black tabular-nums leading-tight text-white">
        {points.toLocaleString()}
      </div>
      <div className="font-mono text-[0.55rem] uppercase tracking-widest text-[#6f68a0]">
        ◈ {ores}/{ORES.length} ore
      </div>
      {/* Rank bar: progression you can see filling without opening anything. */}
      <div className="mt-1.5 flex items-center justify-end gap-1.5">
        <span className="font-mono text-[0.5rem] uppercase tracking-[0.2em] text-[#ff9f2f]">
          {rank.current.name}
        </span>
        <span className="h-1 w-10 overflow-hidden rounded-full bg-white/10">
          <span
            className="block h-full origin-left rounded-full bg-gradient-to-r from-[#ff9f2f] to-[#ff5fd2]"
            style={{ transform: `scaleX(${rank.progress})` }}
          />
        </span>
      </div>
    </button>
  );
}

/** Polls telemetry on its own rAF so the car never triggers React renders. */
function Minimap() {
  const dot = useRef<SVGGElement>(null);
  const visited = useWorld((s) => s.visited);
  const panelOpen = useWorld((s) => s.openZone !== null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      if (dot.current) {
        dot.current.setAttribute(
          "transform",
          `translate(${toMap(telemetry.x).toFixed(1)} ${toMap(telemetry.z).toFixed(1)}) rotate(${(
            -telemetry.heading *
            (180 / Math.PI)
          ).toFixed(1)})`,
        );
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div
      className="pointer-events-none fixed bottom-4 right-4 z-20 rounded-2xl border border-white/10 bg-[#0d0a24]/70 p-2 backdrop-blur transition-transform duration-300"
      style={{ transform: panelOpen ? "translateX(min(-28rem, -38vw))" : "none" }}
    >
      <svg width={MAP} height={MAP} viewBox={`0 0 ${MAP} ${MAP}`} aria-label="Island map">
        <circle
          cx={MAP / 2}
          cy={MAP / 2}
          r={MAP / 2 - 5}
          fill="#1b1740"
          stroke="#3b3470"
          strokeWidth={1.5}
        />
        {ZONES.map((zone) => {
          const [x, z] = zone.position;
          return (
            <line
              key={`road-${zone.id}`}
              x1={MAP / 2}
              y1={MAP / 2}
              x2={toMap(x)}
              y2={toMap(z)}
              stroke={zone.glow}
              strokeOpacity={0.28}
              strokeWidth={3}
            />
          );
        })}
        <circle cx={MAP / 2} cy={MAP / 2} r={11} fill="#4a4488" />
        {ZONES.map((zone) => {
          const [x, z] = zone.position;
          const seen = visited.includes(zone.id);
          return (
            <circle
              key={zone.id}
              cx={toMap(x)}
              cy={toMap(z)}
              r={6}
              fill={seen ? zone.glow : "transparent"}
              stroke={zone.glow}
              strokeWidth={2}
            />
          );
        })}
        <g ref={dot}>
          <path
            d="M 0 -6 L 4.5 5 L 0 2.5 L -4.5 5 Z"
            fill="#ff5f70"
            stroke="#fff"
            strokeWidth={1}
          />
        </g>
      </svg>
    </div>
  );
}

function Speedo() {
  const value = useRef<HTMLSpanElement>(null);
  const bar = useRef<HTMLDivElement>(null);
  const boostBar = useRef<HTMLDivElement>(null);
  const boostWrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const kph = Math.round(telemetry.speed * 3.6);
      if (value.current) value.current.textContent = String(kph);
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(kph / 160, 1)})`;
      if (boostBar.current) {
        boostBar.current.style.transform = `scaleX(${Math.min(telemetry.boost / 100, 1)})`;
      }
      if (boostWrap.current) {
        // Ready to fire reads differently from still filling.
        boostWrap.current.style.opacity = telemetry.boost > 1 ? "1" : "0.35";
        boostWrap.current.style.boxShadow = telemetry.boosting
          ? "0 0 18px -2px rgba(125,255,208,0.9)"
          : "none";
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="pointer-events-none fixed bottom-4 left-4 z-20 rounded-xl border border-white/10 bg-[#0d0a24]/70 px-4 py-2.5 backdrop-blur">
      <div className="flex items-baseline gap-1.5">
        <span ref={value} className="font-mono text-2xl font-black tabular-nums text-white">
          0
        </span>
        <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#9d8bff]">
          km/h
        </span>
      </div>
      <div className="mt-1.5 h-1 w-28 overflow-hidden rounded-full bg-white/10">
        <div
          ref={bar}
          className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#5b4bff] to-[#ff4d9d]"
          style={{ transform: "scaleX(0)" }}
        />
      </div>

      <div ref={boostWrap} className="mt-2 rounded-md transition-opacity">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[0.52rem] uppercase tracking-[0.28em] text-[#7dffd0]">
            Boost
          </span>
          <span className="font-mono text-[0.52rem] uppercase tracking-widest text-[#6f68a0]">
            Shift
          </span>
        </div>
        <div className="mt-1 h-1.5 w-28 overflow-hidden rounded-full bg-white/10">
          <div
            ref={boostBar}
            className="h-full w-full origin-left rounded-full bg-gradient-to-r from-[#7dffd0] to-[#31d8ff]"
            style={{ transform: "scaleX(0)" }}
          />
        </div>
      </div>
    </div>
  );
}
