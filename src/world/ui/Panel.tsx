import { useEffect } from "react";
import { ZONE_BY_ID } from "../content";
import { useWorld, worldStore } from "../store";

const withBase = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:")
    ? href
    : `${import.meta.env.BASE_URL}${href}`;

export default function Panel() {
  const openZone = useWorld((s) => s.openZone);
  const zone = openZone ? ZONE_BY_ID[openZone] : null;

  useEffect(() => {
    if (!zone) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") worldStore.closePanel();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [zone]);

  if (!zone) return null;

  return (
    <aside
      key={zone.id}
      className="pointer-events-auto fixed inset-y-0 right-0 z-30 flex w-[34rem] max-w-[46vw] flex-col border-l backdrop-blur-xl"
      style={{
        borderColor: `${zone.color}40`,
        // Tinted towards the district rather than flat black: the panel is
        // meant to read as this place's readout, not as a browser dialog
        // parked over the game.
        background: `linear-gradient(200deg, ${zone.color}1f, #07051400 42%), #070514f2`,
        boxShadow: `-30px 0 70px -30px ${zone.color}66`,
      }}
    >
      <style>{`
        @keyframes panel-in { from { opacity:0; transform:translateY(16px) } to { opacity:1; transform:none } }
        @keyframes rail-grow { from { transform:scaleY(0) } to { transform:scaleY(1) } }
      `}</style>

      {/* Header: the district's colour is the whole identity of the panel, so
          it gets a real gradient rather than a one-pixel accent line. */}
      <header
        className="relative shrink-0 overflow-hidden px-6 pb-5 pt-6"
        style={{
          background: `linear-gradient(160deg, ${zone.color}38, transparent 70%)`,
          borderBottom: `1px solid ${zone.color}33`,
        }}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div
              className="font-mono text-[0.56rem] uppercase tracking-[0.36em]"
              style={{ color: zone.glow }}
            >
              {zone.cards.length} {zone.cards.length === 1 ? "entry" : "entries"}
            </div>
            <h2 className="mt-2 text-[3.1rem] font-black leading-[0.86] tracking-[-0.02em] text-white">
              {zone.sign}
            </h2>
            <p className="mt-2 max-w-[24rem] text-[0.9rem] leading-snug text-[#bdb6e4]">
              {zone.caption}
            </p>
          </div>
          <button
            type="button"
            onClick={() => worldStore.closePanel()}
            aria-label="Close panel"
            className="shrink-0 rounded-lg border border-white/15 bg-black/30 px-2.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-widest text-[#b9b2e8] transition hover:bg-white/10 hover:text-white"
          >
            Esc
          </button>
        </div>
      </header>

      <div className="flex-1 space-y-3 overflow-y-auto px-6 py-5">
        {zone.cards.map((card, index) => (
          <article
            key={card.id}
            className="relative overflow-hidden rounded-2xl border p-5 pl-7"
            style={{
              borderColor: `${zone.color}30`,
              background: `linear-gradient(180deg, ${zone.color}14, #ffffff05)`,
              animation: `panel-in 0.42s cubic-bezier(.2,.8,.2,1) ${index * 80}ms both`,
            }}
          >
            {/* Accent rail, drawn on rather than a border, so it can animate. */}
            <span
              aria-hidden
              className="absolute inset-y-4 left-0 w-[3px] origin-top rounded-full"
              style={{
                background: `linear-gradient(${zone.glow}, ${zone.color}00)`,
                animation: `rail-grow 0.5s ease-out ${index * 80 + 120}ms both`,
              }}
            />

            <span
              aria-hidden
              className="pointer-events-none absolute right-3 top-1 select-none text-[3.2rem] font-black leading-none opacity-[0.09]"
              style={{ color: zone.glow }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <div className="relative flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[1.18rem] font-black leading-tight tracking-tight text-white">
                  {card.title}
                </h3>
                <p
                  className="mt-1 text-[0.82rem] font-semibold"
                  style={{ color: zone.glow }}
                >
                  {card.subtitle}
                </p>
              </div>
              {card.meta && (
                <span className="shrink-0 rounded-md bg-black/40 px-2 py-1 font-mono text-[0.56rem] uppercase tracking-wider text-[#8a83bb]">
                  {card.meta}
                </span>
              )}
            </div>

            {card.body && (
              <p className="relative mt-3 text-[0.9rem] leading-[1.65] text-[#d3cdf2]">{card.body}</p>
            )}

            {card.bullets.length > 0 && (
              <ul className="relative mt-4 space-y-2.5 border-t border-white/[0.09] pt-4">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-[0.86rem] leading-[1.6]">
                    <span
                      aria-hidden
                      className="mt-[0.46rem] h-1.5 w-1.5 shrink-0 rotate-45"
                      style={{ background: zone.glow }}
                    />
                    <span className="text-[#bcb5e2]">{highlight(bullet, zone.glow)}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.tags && card.tags.length > 0 && (
              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md border px-2 py-[0.15rem] font-mono text-[0.58rem] tracking-wide"
                    style={{
                      borderColor: `${zone.color}40`,
                      background: `${zone.color}12`,
                      color: zone.glow,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {card.links && card.links.length > 0 && (
              <div className="relative mt-4 flex flex-wrap gap-2">
                {card.links.map((link) => (
                  <a
                    key={link.label}
                    href={withBase(link.href)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="group/link inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[0.72rem] font-bold text-[#08061a] transition hover:brightness-110"
                    style={{ backgroundColor: zone.glow }}
                  >
                    {link.label}
                    <span className="transition-transform group-hover/link:translate-x-0.5">→</span>
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <footer className="shrink-0 border-t border-white/10 px-6 py-3">
        <p className="font-mono text-[0.56rem] uppercase tracking-[0.24em] text-[#635c93]">
          Drive out to close · Esc
        </p>
      </footer>
    </aside>
  );
}

/**
 * Pulls the numbers out of a bullet and sets them in the district's colour.
 *
 * Every one of these lines has a result buried in it — "90+ minutes", "$50K+
 * ARR", "top 10%" — and in a uniform grey paragraph none of them are found.
 * Numbers are what people actually skim for.
 */
function highlight(text: string, color: string) {
  const parts = text.split(/(\$?\d[\d,.]*\+?%?[KMB]?\+?)/g);
  return parts.map((part, i) =>
    /^\$?\d/.test(part) ? (
      <strong key={i} style={{ color }} className="font-bold">
        {part}
      </strong>
    ) : (
      <span key={i}>{part}</span>
    ),
  );
}
