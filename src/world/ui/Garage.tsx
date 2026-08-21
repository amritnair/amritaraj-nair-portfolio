import { useEffect, useState } from "react";
import {
  DESIGNS,
  DESIGN_BY_ID,
  ORE_VALUE,
  PAINTS,
  PAINT_BY_ID,
  TRAILS,
  WHEELS,
  canAfford,
  isOwned,
  rankFor,
  rarityFor,
} from "../garage";
import { ORES } from "../Ores";
import { useWorld, worldStore } from "../store";
import CarPreview from "./CarPreview";

/**
 * The locker.
 *
 * Laid out the way a customisation screen has to be to feel good: the car
 * itself is the biggest thing on screen and updates the instant you pick
 * something, categories are tabs rather than a single long scroll, every tile
 * says what it costs and how rare it is, and the kit you've assembled can be
 * saved and swapped back to.
 */

type Tab = "paint" | "kit" | "wheels" | "trail";

const TABS: { id: Tab; label: string }[] = [
  { id: "paint", label: "Paint" },
  { id: "kit", label: "Body kit" },
  { id: "wheels", label: "Wheels" },
  { id: "trail", label: "Trail" },
];

export default function Garage() {
  const open = useWorld((s) => s.garageOpen);
  const garage = useWorld((s) => s.garage);
  const [tab, setTab] = useState<Tab>("paint");

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

  const { points, best, bestLap, ores, paint, design, wheel, trail, loadouts, owned } = garage;
  const rank = rankFor(points);

  return (
    <div className="pointer-events-auto fixed inset-0 z-40 overflow-y-auto bg-[#0d0a24]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-full w-full max-w-6xl flex-col justify-center px-5 py-8">
        <div className="grid gap-4 lg:grid-cols-[1.1fr_1fr]">
          {/* The car, front and centre — you pick by looking at it. */}
          <div className="relative min-h-[20rem] overflow-hidden rounded-3xl border border-white/10 bg-[#0b0920] shadow-2xl lg:min-h-full">
            <CarPreview paint={paint} design={design} wheel={wheel} />

            <div className="pointer-events-none absolute inset-x-0 top-0 flex items-start justify-between gap-3 bg-gradient-to-b from-[#0b0920] via-[#0b0920]/70 to-transparent px-6 pb-12 pt-5">
              <div>
                <div className="font-mono text-[0.55rem] uppercase tracking-[0.3em] text-[#ff9f2f]">
                  {rank.current.name}
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span className="font-mono text-2xl font-black tabular-nums text-white">
                    {points.toLocaleString()}
                  </span>
                  <span className="font-mono text-[0.55rem] uppercase tracking-widest text-[#6f68a0]">
                    points
                  </span>
                </div>
                {rank.next && (
                  <div className="mt-1.5 w-40">
                    <div className="h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full origin-left rounded-full bg-gradient-to-r from-[#ff9f2f] to-[#ff5fd2]"
                        style={{ transform: `scaleX(${rank.progress})` }}
                      />
                    </div>
                    <div className="mt-1 font-mono text-[0.52rem] uppercase tracking-widest text-[#6f68a0]">
                      {(rank.next.at - points).toLocaleString()} to {rank.next.name}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-gradient-to-t from-[#0b0920] via-[#0b0920]/75 to-transparent px-6 pb-5 pt-14">
              <div>
                <div className="text-xl font-black tracking-tight text-white">
                  {PAINT_BY_ID[paint]?.name ?? "—"}
                </div>
                <div className="font-mono text-[0.56rem] uppercase tracking-[0.24em] text-[#8f88bd]">
                  {DESIGN_BY_ID[design]?.name ?? "—"} · {WHEELS.find((w) => w.id === wheel)?.name}
                </div>
              </div>
              <div className="text-right font-mono text-[0.54rem] uppercase tracking-widest text-[#6f68a0]">
                {bestLap !== null && <div>Best lap {bestLap.toFixed(2)}s</div>}
                {best > 0 && <div>Best chain {Math.round(best).toLocaleString()}</div>}
                <div>
                  ◈ {ores.length}/{ORES.length} ore
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col rounded-3xl border border-white/10 bg-[#140f30]/95 p-5 shadow-2xl sm:p-6">
            <header className="flex flex-wrap items-center justify-between gap-3">
              <h2 className="text-xl font-black tracking-tight text-white">Shop</h2>
              <div className="flex gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setTab(t.id)}
                    className={`rounded-full px-3 py-1.5 font-mono text-[0.56rem] uppercase tracking-[0.18em] transition ${
                      tab === t.id
                        ? "bg-white/90 text-[#140f30]"
                        : "text-[#8f88bd] hover:text-white"
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </header>

            <div className="mt-4 min-h-[15rem] flex-1">
              {tab === "paint" && (
                <Grid>
                  {PAINTS.map((item) => (
                    <Tile
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      cost={item.cost}
                      points={points}
                      owned={owned}
                      active={item.id === paint}
                      onPick={() => worldStore.selectPaint(item.id)}
                      swatch={`linear-gradient(135deg, ${item.shell} 42%, ${item.trim} 100%)`}
                    />
                  ))}
                </Grid>
              )}

              {tab === "kit" && (
                <Grid>
                  {DESIGNS.map((item) => (
                    <Tile
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      note={item.blurb}
                      cost={item.cost}
                      points={points}
                      owned={owned}
                      active={item.id === design}
                      onPick={() => worldStore.selectDesign(item.id)}
                    />
                  ))}
                </Grid>
              )}

              {tab === "wheels" && (
                <Grid>
                  {WHEELS.map((item) => (
                    <Tile
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      note={item.spokes ? `${item.spokes} spokes` : "Solid face"}
                      cost={item.cost}
                      points={points}
                      owned={owned}
                      active={item.id === wheel}
                      onPick={() => worldStore.selectWheel(item.id)}
                    />
                  ))}
                </Grid>
              )}

              {tab === "trail" && (
                <Grid>
                  {TRAILS.map((item) => (
                    <Tile
                      key={item.id}
                      id={item.id}
                      name={item.name}
                      cost={item.cost}
                      points={points}
                      owned={owned}
                      active={item.id === trail}
                      onPick={() => worldStore.selectTrail(item.id)}
                      swatch={
                        item.color
                          ? `linear-gradient(135deg, ${item.color}, #0b0920)`
                          : `linear-gradient(135deg, ${PAINT_BY_ID[paint]?.trim ?? "#fff"}, #0b0920)`
                      }
                    />
                  ))}
                </Grid>
              )}
            </div>

            {/* Saved kits. Three slots is enough to keep a look you like while
                experimenting with another. */}
            <section className="mt-4 border-t border-white/10 pt-3">
              <div className="font-mono text-[0.54rem] uppercase tracking-[0.28em] text-[#9d8bff]">
                Saved kits
              </div>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {loadouts.map((kit, slot) => (
                  <div
                    key={slot}
                    className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2"
                  >
                    <div className="truncate text-[0.72rem] font-bold text-white">
                      {kit ? kit.name : `Slot ${slot + 1}`}
                    </div>
                    <div className="mt-1.5 flex gap-1">
                      <button
                        type="button"
                        onClick={() => worldStore.saveLoadout(slot, `Kit ${slot + 1}`)}
                        className="flex-1 rounded-md border border-white/15 px-1.5 py-1 font-mono text-[0.5rem] uppercase tracking-wider text-[#b9b2e8] transition hover:border-white/40 hover:text-white"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        disabled={!kit}
                        onClick={() => worldStore.applyLoadout(slot)}
                        className="flex-1 rounded-md bg-white/90 px-1.5 py-1 font-mono text-[0.5rem] uppercase tracking-wider text-[#140f30] transition hover:bg-white disabled:opacity-30"
                      >
                        Equip
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
              <span className="font-mono text-[0.54rem] uppercase tracking-widest text-[#6f68a0]">
                Drift · jumps · ore ({ORE_VALUE}) · clean laps
              </span>
              <button
                type="button"
                onClick={() => worldStore.closeGarage()}
                className="rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-6 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:scale-[1.03]"
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

function Grid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">{children}</div>;
}

/**
 * One item. Locked tiles still show what they are and what they cost — hiding
 * them would remove the reason to go and earn the points.
 */
/**
 * One item in the shop.
 *
 * Three states rather than two: owned items equip on click, affordable ones
 * show their price and buy on click, and the rest show how far off you are.
 * Everything stays visible — hiding what you can't afford removes the reason
 * to go and earn it.
 */
function Tile({
  id,
  name,
  note,
  cost,
  points,
  owned,
  active,
  onPick,
  swatch,
}: {
  id: string;
  name: string;
  note?: string;
  cost: number;
  points: number;
  owned: string[];
  active: boolean;
  onPick: () => void;
  swatch?: string;
}) {
  const have = isOwned(id, cost, owned);
  const affordable = canAfford(cost, points);
  const rarity = rarityFor(cost);
  const short = cost - points;

  const click = () => {
    if (have) {
      onPick();
      return;
    }
    // Buying equips it straight away — nobody buys a paint to leave it in a box.
    if (worldStore.purchase(id, cost)) onPick();
  };

  const state = active
    ? "Equipped"
    : have
      ? "Owned"
      : affordable
        ? `Buy · ${cost.toLocaleString()}`
        : `${short.toLocaleString()} short`;

  return (
    <button
      type="button"
      disabled={!have && !affordable}
      onClick={click}
      className={`group relative overflow-hidden rounded-xl border px-3 py-2.5 text-left transition ${
        active
          ? "border-white bg-white/10"
          : have
            ? "border-white/12 bg-white/[0.03] hover:border-white/35"
            : affordable
              ? "border-[#7dffd0]/40 bg-[#7dffd0]/[0.06] hover:border-[#7dffd0]"
              : "cursor-not-allowed border-white/8 bg-white/[0.02]"
      }`}
      style={{ boxShadow: active ? `inset 0 0 0 1px ${rarity.color}` : undefined }}
    >
      {/* Rarity reads as a colour bar rather than a word competing for space. */}
      <span
        className="absolute inset-x-0 top-0 h-[3px]"
        style={{ background: rarity.color, opacity: have || affordable ? 1 : 0.4 }}
      />
      <div className="flex items-center gap-2">
        {swatch && (
          <span
            className="h-7 w-7 shrink-0 rounded-lg border border-white/20"
            style={{ background: swatch, opacity: have || affordable ? 1 : 0.4 }}
          />
        )}
        <div className="min-w-0">
          <div
            className={`truncate text-[0.8rem] font-bold ${have || affordable ? "text-white" : "text-[#8f88bd]"}`}
          >
            {name}
          </div>
          <div
            className="font-mono text-[0.52rem] uppercase tracking-wider"
            style={{ color: have ? rarity.color : affordable ? "#7dffd0" : "#6f68a0" }}
          >
            {state}
          </div>
        </div>
      </div>
      {note && <p className="mt-1 truncate text-[0.62rem] text-[#6f68a0]">{note}</p>}
    </button>
  );
}
