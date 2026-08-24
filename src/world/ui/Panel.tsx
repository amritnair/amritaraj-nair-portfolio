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
      className="pointer-events-auto fixed inset-y-0 right-0 z-30 w-[28rem] max-w-[38vw] animate-in slide-in-from-right overflow-y-auto border-l border-white/10 bg-[#0b0820]/[0.97] backdrop-blur-xl"
      style={{ boxShadow: `inset 4px 0 0 -1px ${zone.color}` }}
    >
      {/* The cards deal themselves in rather than appearing as a wall — this
          stagger is most of what makes the panel feel like part of the game
          instead of a web page parked over it. */}
      <style>{`
        @keyframes panel-card-in {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes panel-scan {
          from { transform: translateX(-100%); }
          to { transform: translateX(340%); }
        }
      `}</style>

      <div className="sticky top-0 z-10 flex items-start justify-between gap-4 overflow-hidden border-b border-white/10 bg-[#0b0820] px-5 py-4">
        {/* One light pass over the header on open, like a readout coming live. */}
        <span
          aria-hidden
          className="pointer-events-none absolute inset-y-0 left-0 w-1/3"
          style={{
            background: `linear-gradient(105deg, transparent, ${zone.glow}22, transparent)`,
            animation: "panel-scan 1.1s ease-out 1",
          }}
        />
        <div>
          <h2 className="text-2xl font-black tracking-tight text-white">{zone.sign}</h2>
          <p className="mt-0.5 text-xs uppercase tracking-[0.18em]" style={{ color: zone.glow }}>
            {zone.caption}
          </p>
        </div>
        <button
          type="button"
          onClick={() => worldStore.closePanel()}
          aria-label="Close panel"
          className="shrink-0 rounded-full border border-white/15 px-3 py-1 text-xs text-[#b9b2e8] transition hover:bg-white/10 hover:text-white"
        >
          Esc ✕
        </button>
      </div>

      <div className="space-y-5 px-5 py-5">
        {zone.cards.map((card, index) => (
          <article
            key={card.id}
            className="group rounded-xl border border-white/10 bg-white/[0.035] p-4 transition-colors duration-200"
            style={{
              animation: `panel-card-in 0.4s ease-out ${index * 90}ms both`,
              borderLeft: `2px solid ${zone.color}55`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = `${zone.glow}66`;
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "";
              e.currentTarget.style.background = "";
              e.currentTarget.style.borderLeft = `2px solid ${zone.color}55`;
            }}
          >
            <div className="flex items-baseline justify-between gap-3">
              <h3 className="text-base font-bold text-white">{card.title}</h3>
              {card.meta && (
                <span className="shrink-0 font-mono text-[0.6rem] uppercase tracking-wider text-[#7d76ad]">
                  {card.meta}
                </span>
              )}
            </div>
            <p className="mt-0.5 text-xs font-medium" style={{ color: zone.glow }}>
              {card.subtitle}
            </p>

            {card.body && (
              <p className="mt-2.5 text-[0.82rem] leading-relaxed text-[#b9b2e8]">{card.body}</p>
            )}

            {card.bullets.length > 0 && (
              <ul className="mt-3 space-y-1.5">
                {card.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex gap-2 text-[0.78rem] leading-relaxed text-[#a49dd0]"
                  >
                    <span style={{ color: zone.color }}>▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            )}

            {card.tags && card.tags.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {card.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border px-2 py-0.5 font-mono text-[0.6rem]"
                    style={{
                      borderColor: `${zone.color}44`,
                      background: `${zone.color}14`,
                      color: zone.glow,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {card.links && card.links.length > 0 && (
              <div className="mt-3.5 flex flex-wrap gap-2">
                {card.links.map((link) => (
                  <a
                    key={link.label}
                    href={withBase(link.href)}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-full px-3 py-1.5 text-[0.7rem] font-semibold text-[#0d0a24] transition hover:brightness-110"
                    style={{ backgroundColor: zone.glow }}
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </aside>
  );
}
