import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE, UPCOMING, ZONES } from "@/world/content";

/**
 * The written portfolio — what you get when you click the name in the game.
 *
 * It reads from the same `content.ts` the districts do, so the two can never
 * disagree: editing a role updates the world and this page together. It keeps
 * the game's visual language rather than dropping you onto a pale template,
 * because arriving from a neon night world into a white marketing page reads
 * as two different people's work.
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
      { rootMargin: "-15% 0px -70% 0px" },
    );
    ZONES.forEach((zone) => {
      const el = document.getElementById(zone.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const count = ZONES.reduce((n, zone) => n + zone.cards.length, 0);

  return (
    <main className="min-h-screen bg-[#08061a] text-white">
      <style>{`
        @keyframes rise { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:none } }
        @keyframes sweep { from { background-position: 0% 50% } to { background-position: 200% 50% } }
      `}</style>

      {/* Hero. Deliberately oversized: this page is reached by clicking a name,
          so the name is what should be waiting when you land. */}
      <header className="relative overflow-hidden border-b border-white/10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(58rem 30rem at 15% -20%, #4b32c355, transparent 62%), radial-gradient(44rem 26rem at 88% 8%, #c341ff28, transparent 62%), radial-gradient(38rem 22rem at 50% 120%, #31d8ff1f, transparent 60%)",
          }}
        />
        {/* Faint grid, so the empty space reads as designed rather than blank. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff0a 1px, transparent 1px), linear-gradient(90deg, #ffffff0a 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(70% 60% at 50% 30%, black, transparent)",
          }}
        />

        <div className="relative mx-auto max-w-5xl px-6 pb-16 pt-20 sm:px-10 sm:pt-28">
          <p className="font-mono text-[0.62rem] uppercase tracking-[0.45em] text-[#9d8bff]">
            Portfolio · {new Date().getFullYear()}
          </p>

          <h1 className="mt-5 text-[clamp(2.9rem,11vw,7rem)] font-black leading-[0.86] tracking-[-0.03em]">
            <span
              className="bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(100deg, #d8e0ff 8%, #ffffff 34%, #a48bff 62%, #e9c2ff 88%)",
                backgroundSize: "200% 100%",
                animation: "sweep 9s linear infinite alternate",
              }}
            >
              {PROFILE.name}
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#c3bce9] sm:text-xl">
            {PROFILE.tagline}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <Link
              to="/"
              className="group rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_36px_-8px_rgba(140,90,255,0.95)] transition hover:scale-[1.03]"
            >
              <span className="mr-2 inline-block transition-transform group-hover:translate-x-0.5">
                ▶
              </span>
              Play the world
            </Link>
            <Link
              to="/resume"
              className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#b9b2e8] transition hover:border-white/35 hover:text-white"
            >
              Résumé
            </Link>
            {PROFILE.links.map((link) => (
              <a
                key={link.label}
                href={withBase(link.href)}
                target="_blank"
                rel="noreferrer noopener"
                className="rounded-full px-3 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8a83bb] underline decoration-[#6b5fd1] decoration-1 underline-offset-[6px] transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Counts, not claims. Anything here is derived from the content
              below, so the page cannot boast about work it does not list. */}
          <dl className="mt-14 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              [String(count), "Things shipped"],
              [String(ZONES.length), "Areas"],
              [String(UPCOMING.length), "Up next"],
              ["A&M", "CS Honors"],
            ].map(([value, label]) => (
              <div key={label} className="bg-[#0b0822] px-5 py-4">
                <dt className="text-2xl font-black tracking-tight text-white">{value}</dt>
                <dd className="mt-0.5 font-mono text-[0.56rem] uppercase tracking-[0.18em] text-[#8a83bb]">
                  {label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      {/* Section nav: sticky, so you always know where you are in a long page. */}
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-[#08061a]/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl gap-1 overflow-x-auto px-6 py-3 sm:px-10">
          {ZONES.map((zone) => (
            <a
              key={zone.id}
              href={`#${zone.id}`}
              className="shrink-0 rounded-full border px-4 py-1.5 font-mono text-[0.6rem] uppercase tracking-[0.2em] transition"
              style={
                active === zone.id
                  ? {
                      background: `${zone.color}20`,
                      color: zone.glow,
                      borderColor: `${zone.glow}55`,
                    }
                  : { color: "#7b74ab", borderColor: "transparent" }
              }
            >
              {zone.sign}
            </a>
          ))}
        </div>
      </nav>

      <div className="mx-auto max-w-5xl px-6 pb-28 sm:px-10">
        {ZONES.map((zone) => (
          <section key={zone.id} id={zone.id} className="scroll-mt-20 pt-20">
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/10 pb-5">
              <h2
                className="text-4xl font-black tracking-tight sm:text-5xl"
                style={{ color: zone.glow }}
              >
                {zone.sign}
              </h2>
              <p className="font-mono text-[0.62rem] uppercase tracking-[0.24em] text-[#7b74ab]">
                {zone.caption}
              </p>
              <span className="ml-auto font-mono text-[0.62rem] text-[#4f4a75]">
                {String(zone.cards.length).padStart(2, "0")}
              </span>
            </div>

            <div className="mt-8 space-y-5">
              {zone.cards.map((card, index) => (
                <article
                  key={card.id}
                  className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-gradient-to-b from-white/[0.055] to-transparent p-6 pl-8 transition-colors duration-200 hover:border-white/25 sm:p-8 sm:pl-10"
                  style={{ animation: `rise 0.5s ease-out ${index * 70}ms both` }}
                >
                  {/* The rail is the card's only colour until you hover it. */}
                  <span
                    aria-hidden
                    className="absolute inset-y-0 left-0 w-[3px] opacity-70 transition-opacity group-hover:opacity-100"
                    style={{ background: `linear-gradient(${zone.glow}, transparent 85%)` }}
                  />
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -left-20 -top-24 h-52 w-52 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-40"
                    style={{ background: zone.color }}
                  />

                  <div className="relative flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-xl font-black tracking-tight sm:text-2xl">{card.title}</h3>
                    {card.meta && (
                      <span className="rounded-md bg-black/40 px-2.5 py-1 font-mono text-[0.56rem] uppercase tracking-wider text-[#8a83bb]">
                        {card.meta}
                      </span>
                    )}
                  </div>
                  <p
                    className="relative mt-1 text-sm font-semibold tracking-wide"
                    style={{ color: zone.glow }}
                  >
                    {card.subtitle}
                  </p>

                  {card.body && (
                    <p className="relative mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#c2bce6]">
                      {card.body}
                    </p>
                  )}

                  {card.bullets.length > 0 && (
                    <ul className="relative mt-5 space-y-2.5 border-t border-white/[0.07] pt-5">
                      {card.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-3.5 text-[0.9rem] leading-relaxed">
                          <span
                            aria-hidden
                            className="mt-[0.5rem] h-1.5 w-1.5 shrink-0 rotate-45"
                            style={{ background: zone.glow }}
                          />
                          <span className="text-[#a8a1d4]">{highlight(bullet, zone.glow)}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {card.tags && card.tags.length > 0 && (
                    <div className="relative mt-5 flex flex-wrap gap-1.5">
                      {card.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border px-2.5 py-1 font-mono text-[0.6rem]"
                          style={{
                            borderColor: `${zone.color}45`,
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
                    <div className="relative mt-5 flex flex-wrap gap-2">
                      {card.links.map((link) => (
                        <a
                          key={link.label}
                          href={withBase(link.href)}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="group/link inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-[0.74rem] font-bold text-[#08061a] transition hover:brightness-110"
                          style={{ backgroundColor: zone.glow }}
                        >
                          {link.label}
                          <span className="transition-transform group-hover/link:translate-x-0.5">
                            →
                          </span>
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

      <footer className="border-t border-white/10 px-6 py-12 sm:px-10">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4">
          <a
            href={`mailto:${PROFILE.email}`}
            className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-[#8a83bb] transition hover:text-white"
          >
            {PROFILE.email} · {PROFILE.phone}
          </a>
          <Link
            to="/"
            className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-[#9d8bff] transition hover:text-white"
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
