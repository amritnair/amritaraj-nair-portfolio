import { useEffect } from "react";
import { DESIGNS, DESIGN_BY_ID, ORE_VALUE, PAINTS, PAINT_BY_ID, isUnlocked } from "../garage";
import { ORES } from "../Ores";
import { useWorld, worldStore } from "../store";
import CarPreview from "./CarPreview";

/**
 * The design screen. Opens over the world rather than replacing it, so the car
 * behind stays visible and you can see a paint change land the moment you pick
 * it — a preview swatch never quite convinces the way the actual car does.
 */
export default function Garage() {
  const open = useWorld((s) => s.garageOpen);
  const garage = useWorld((s) => s.garage);

  // G toggles, Escape closes. Registered whenever the world is running so the
  // key works from the road, not just once the panel is already up.
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      if (target && /^(INPUT|TEXTAREA|SELECT)$/.test(target.tagName)) return;
      if (event.code === "KeyG") worldStore.toggleGarage();
      if (event.code === "Escape") worldStore.closeGarage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  const { points, best, bestLap, ores, paint: activePaint, design: activeDesign } = garage;

  return (
    <div className="pointer-events-auto fixed inset-0 z-40 overflow-y-auto bg-[#0d0a24]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-5 py-8">
        <div className="grid gap-4 lg:grid-cols-[1.05fr_1fr]">
          {/* The car itself, front and centre — you pick paint by looking at it. */}
          <div className="relative min-h-[19rem] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0920] shadow-2xl lg:min-h-full">
            <CarPreview paint={activePaint} design={activeDesign} />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#0b0920] via-[#0b0920]/70 to-transparent px-6 pb-5 pt-14">
              <div>
                <div className="font-mono text-[0.58rem] uppercase tracking-[0.3em] text-[#31d8ff]">
                  {DESIGN_BY_ID[activeDesign]?.name ?? "—"}
                </div>
                <div className="text-xl font-black tracking-tight text-white">
                  {PAINT_BY_ID[activePaint]?.name ?? "—"}
                </div>
              </div>
              <div className="text-right font-mono text-[0.56rem] uppercase tracking-widest text-[#6f68a0]">
                Live preview
              </div>
            </div>
          </div>

        <div className="rounded-3xl border border-white/10 bg-[#140f30]/95 p-6 shadow-2xl">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.38em] text-[#31d8ff]">
                Garage
              </p>
              <h2 className="mt-1 text-2xl font-black tracking-tight text-white sm:text-3xl">
                Drift points buy paint
              </h2>
            </div>
            <div className="text-right">
              <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[#8f88bd]">
                Banked
              </div>
              <div className="font-mono text-2xl font-black tabular-nums text-white">
                {points.toLocaleString()}
              </div>
              {best > 0 && (
                <div className="font-mono text-[0.6rem] uppercase tracking-widest text-[#6f68a0]">
                  Best chain {Math.round(best).toLocaleString()}
                </div>
              )}
            </div>
          </header>

          <div className="mt-4 grid gap-2 sm:grid-cols-3">
            <Earner title="Drift">
              Hold <Key>Space</Key> through a corner. The multiplier climbs each second you
              stay sideways, and the chain banks when you straighten up.
            </Earner>
            <Earner title="Speedway">
              Take a ramp to the ring road, then the east bridge. Cross the line to start a
              lap, hit all three gates, come back through.{" "}
              {bestLap !== null && (
                <span className="text-[#7dffd0]">Best {bestLap.toFixed(2)}s.</span>
              )}
            </Earner>
            <Earner title="Diamond ore">
              {ORE_VALUE} points each, hidden off-road in the treeline and out by the rim.{" "}
              <span className="text-[#31d8ff]">
                {ores.length}/{ORES.length} found.
              </span>
            </Earner>
          </div>

          <Section title="Paint">
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
              {PAINTS.map((paint) => {
                const unlocked = isUnlocked(paint.cost, points);
                const active = paint.id === activePaint;
                return (
                  <button
                    key={paint.id}
                    type="button"
                    disabled={!unlocked}
                    onClick={() => worldStore.selectPaint(paint.id)}
                    className={`group relative overflow-hidden rounded-xl border px-3 py-3 text-left transition ${
                      active
                        ? "border-[#31d8ff] bg-[#31d8ff]/10"
                        : unlocked
                          ? "border-white/12 bg-white/[0.03] hover:border-white/30"
                          : "cursor-not-allowed border-white/8 bg-white/[0.02] opacity-55"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="h-7 w-7 shrink-0 rounded-lg border border-white/20"
                        style={{
                          background: `linear-gradient(135deg, ${paint.shell} 40%, ${paint.trim} 100%)`,
                        }}
                      />
                      <div className="min-w-0">
                        <div className="truncate text-sm font-bold text-white">{paint.name}</div>
                        <div className="font-mono text-[0.58rem] uppercase tracking-wider text-[#8f88bd]">
                          {active ? "Equipped" : unlocked ? "Ready" : `${paint.cost.toLocaleString()} pts`}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </Section>

          <Section title="Body kit">
            <div className="grid gap-2 sm:grid-cols-2">
              {DESIGNS.map((design) => {
                const unlocked = isUnlocked(design.cost, points);
                const active = design.id === activeDesign;
                return (
                  <button
                    key={design.id}
                    type="button"
                    disabled={!unlocked}
                    onClick={() => worldStore.selectDesign(design.id)}
                    className={`rounded-xl border px-4 py-3 text-left transition ${
                      active
                        ? "border-[#ff5fd2] bg-[#ff5fd2]/10"
                        : unlocked
                          ? "border-white/12 bg-white/[0.03] hover:border-white/30"
                          : "cursor-not-allowed border-white/8 bg-white/[0.02] opacity-55"
                    }`}
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-sm font-bold text-white">{design.name}</span>
                      <span className="font-mono text-[0.58rem] uppercase tracking-wider text-[#8f88bd]">
                        {active ? "Equipped" : unlocked ? "Ready" : `${design.cost.toLocaleString()} pts`}
                      </span>
                    </div>
                    <p className="mt-1 text-[0.72rem] leading-snug text-[#8f88bd]">{design.blurb}</p>
                  </button>
                );
              })}
            </div>
          </Section>

          <div className="mt-6 flex items-center justify-between gap-4">
            <span className="font-mono text-[0.6rem] uppercase tracking-widest text-[#6f68a0]">
              Esc or G to close
            </span>
            <button
              type="button"
              onClick={() => worldStore.closeGarage()}
              className="rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-7 py-3 text-xs font-bold uppercase tracking-[0.22em] text-white transition hover:scale-[1.03]"
            >
              Back to the road
            </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h3 className="mb-2 font-mono text-[0.6rem] uppercase tracking-[0.3em] text-[#9d8bff]">
        {title}
      </h3>
      {children}
    </section>
  );
}

/** One of the three ways to earn, explained where the spending happens. */
function Earner({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3">
      <div className="font-mono text-[0.58rem] uppercase tracking-[0.28em] text-[#9d8bff]">
        {title}
      </div>
      <p className="mt-1 text-[0.72rem] leading-relaxed text-[#b9b2e8]">{children}</p>
    </div>
  );
}

function Key({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="rounded border border-white/20 bg-white/10 px-1.5 py-0.5 font-mono text-[0.65rem] text-white">
      {children}
    </kbd>
  );
}
