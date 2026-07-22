import { useEffect, useRef } from "react";
import { ISLAND_RADIUS } from "../Island";
import { PROFILE, ZONE_BY_ID, ZONES } from "../content";
import { telemetry, useWorld, worldStore } from "../store";

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

  useEffect(() => {
    let frame = 0;
    const tick = () => {
      const kph = Math.round(telemetry.speed * 3.6);
      if (value.current) value.current.textContent = String(kph);
      if (bar.current) bar.current.style.transform = `scaleX(${Math.min(kph / 110, 1)})`;
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
    </div>
  );
}
