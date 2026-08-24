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
      className="pointer-events-auto fixed inset-y-0 right-0 z-30 flex w-[30rem] max-w-[42vw] flex-col border-l border-white/10 bg-[#080616]/[0.98] backdrop-blur-xl"
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
            <h2 className="mt-1.5 text-[2.6rem] font-black leading-[0.9] tracking-tight text-white">
              {zone.sign}
            </h2>
            <p className="mt-1.5 max-w-[22rem] text-[0.82rem] leading-snug text-[#a9a2d8]">
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
            className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.055] to-white/[0.02] p-5 pl-6"
            style={{ animation: `panel-in 0.42s cubic-bezier(.2,.8,.2,1) ${index * 80}ms both` }}
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

            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[1.05rem] font-black leading-tight tracking-tight text-white">
                  {card.title}
                </h3>
                <p
                  className="mt-0.5 text-[0.76rem] font-semibold"
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
              <p className="mt-3 text-[0.83rem] leading-[1.6] text-[#c2bce6]">{card.body}</p>
            )}

            {card.bullets.length > 0 && (
              <ul className="mt-3.5 space-y-2 border-t border-white/[0.07] pt-3.5">
                {card.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-2.5 text-[0.79rem] leading-[1.55]">
                    <span
                      aria-hidden
                      className="mt-[0.42rem] h-1 w-1 shrink-0 rounded-full"
                      style={{ background: zone.glow }}
                    />
                    <span className="text-[#a8a1d4]">{highlight(bullet, zone.glow)}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.tags && card.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-1.5">
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
              <div className="mt-4 flex flex-wrap gap-2">
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
