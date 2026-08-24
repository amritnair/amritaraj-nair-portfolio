import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE, ZONES } from "@/world/content";

/**
 * The written portfolio — what you get when you click the name in the game.
 *
 * It reads from the same `content.ts` the districts do, so the two can never
 * disagree: editing a role updates the world and this page together. It also
 * keeps the game's visual language rather than dropping you onto a pale
 * template, because arriving from a neon night world into a white marketing
 * page reads as two different people's work.
 */

const withBase = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:")
    ? href
    : `${import.meta.env.BASE_URL}${href}`;

export default function AllProjects() {
  const [active, setActive] = useState(ZONES[0].id);

  // Highlight whichever section is under the top third of the viewport.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    ZONES.forEach((zone) => {
      const el = document.getElementById(zone.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-[#08061a] text-white">
      <style>{`
        @keyframes rise { from { opacity:0; transform:translateY(18px) } to { opacity:1; transform:none } }
      `}</style>

      {/* Hero */}
      <header className="relative overflow-hidden border-b border-white/10 px-6 pb-14 pt-16 sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{
            background:
              "radial-gradient(70rem 30rem at 20% -10%, #3b2b8f55, transparent 60%), radial-gradient(50rem 24rem at 90% 0%, #c341ff22, transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-4xl">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.42em] text-[#9d8bff]">
            Portfolio
          </p>
          <h1 className="mt-3 text-4xl font-black leading-[0.95] tracking-tight sm:text-6xl">
            <span className="bg-gradient-to-br from-[#c9d4ff] via-white to-[#8f7bff] bg-clip-text text-transparent">
              {PROFILE.name}
            </span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-[#b9b2e8]">{PROFILE.tagline}</p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-white transition hover:scale-[1.03]"
            >
              ▶ Play the world
            </Link>
            <Link
              to="/resume"
              className="rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] text-[#b9b2e8] transition hover:border-white/35 hover:text-white"
            >
              Résumé
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {PROFILE.links.map((link) => (
              <a
                key={link.label}
                href={withBase(link.href)}
                target="_blank"
                rel="noreferrer noopener"
                className="text-[#b9b2e8] underline decoration-[#6b5fd1] underline-offset-4 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </header>

      {/* Section nav: sticky, so you always know where you are in a long page. */}
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#08061a]/92 backdrop-blur-xl">
        <div className="mx-auto flex max-w-4xl gap-1 overflow-x-auto px-6 py-2.5 sm:px-10">
          {ZONES.map((zone) => (
            <a
              key={zone.id}
              href={`#${zone.id}`}
              className="shrink-0 rounded-full px-3.5 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] transition"
              style={
                active === zone.id
                  ? { background: `${zone.color}22`, color: zone.glow }
                  : { color: "#7b74ab" }
              }
            >
              {zone.sign}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-4xl px-6 pb-24 sm:px-10">
        {ZONES.map((zone) => (
          <section key={zone.id} id={zone.id} className="scroll-mt-16 pt-14">
            <div className="flex items-baseline gap-3">
              <span
                aria-hidden
                className="h-3 w-3 rounded-sm"
                style={{ background: zone.glow, boxShadow: `0 0 16px ${zone.glow}` }}
              />
              <h2 className="text-2xl font-black tracking-tight sm:text-3xl">{zone.sign}</h2>
              <p className="text-xs uppercase tracking-[0.18em]" style={{ color: zone.glow }}>
                {zone.caption}
              </p>
            </div>

            <div className="mt-6 space-y-3">
              {zone.cards.map((card, index) => (
                <article
                  key={card.id}
                  className="relative rounded-2xl border border-white/[0.08] bg-gradient-to-b from-white/[0.05] to-white/[0.018] p-6 pl-7 transition-colors hover:border-white/20"
                  style={{ animation: `rise 0.5s ease-out ${index * 60}ms both` }}
                >
                  <span
                    aria-hidden
                    className="absolute inset-y-5 left-0 w-[3px] rounded-full"
                    style={{ background: `linear-gradient(${zone.glow}, transparent)` }}
                  />
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-black tracking-tight">{card.title}</h3>
                    {card.meta && (
                      <span className="rounded-md bg-black/40 px-2 py-1 font-mono text-[0.58rem] uppercase tracking-wider text-[#8a83bb]">
                        {card.meta}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-sm font-semibold" style={{ color: zone.glow }}>
                    {card.subtitle}
                  </p>

                  {card.body && (
                    <p className="mt-3 text-[0.9rem] leading-relaxed text-[#c2bce6]">{card.body}</p>
                  )}

                  {card.bullets.length > 0 && (
                    <ul className="mt-4 space-y-2 border-t border-white/[0.07] pt-4">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3 text-[0.86rem] leading-relaxed">
                          <span
                            aria-hidden
                            className="mt-[0.45rem] h-1 w-1 shrink-0 rounded-full"
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
                          className="rounded-md border px-2 py-[0.15rem] font-mono text-[0.6rem]"
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
                          className="group inline-flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-[0.74rem] font-bold text-[#08061a] transition hover:brightness-110"
                          style={{ backgroundColor: zone.glow }}
                        >
                          {link.label}
                          <span className="transition-transform group-hover:translate-x-0.5">→</span>
                        </a>
                      ))}
                    </div>
                  )}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="border-t border-white/10 px-6 py-10 sm:px-10">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-4">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[#635c93]">
            {PROFILE.email} · {PROFILE.phone}
          </p>
          <Link
            to="/"
            className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[#9d8bff] transition hover:text-white"
          >
            ← Back to the world
          </Link>
        </div>
      </footer>
    </main>
  );
}

/** Sets the numbers in a bullet in the section's colour — people skim for those. */
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
