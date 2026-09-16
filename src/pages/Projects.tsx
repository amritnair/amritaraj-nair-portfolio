import { useEffect } from "react";
import { Link } from "react-router-dom";
import { PROFILE, ZONES } from "@/world/content";
import { ProjectCard, Tag, withBase } from "./site";

/**
 * The full gallery: everything, including the work that no longer earns a
 * place on the landing page.
 *
 * The landing page is an argument and this is the record. Keeping the two
 * separate is what lets the front page stay short without anything real
 * having to be deleted to keep it that way.
 */
export default function Projects() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.background;
    root.style.background = "#ffffff";
    window.scrollTo(0, 0);
    return () => {
      root.style.background = previous;
    };
  }, []);

  const total = ZONES.reduce((n, zone) => n + zone.cards.length, 0);

  return (
    <main className="min-h-screen bg-white text-[#0b0b0b] antialiased">
      <style>{`.u-grotesk { font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif; }`}</style>

      <header className="sticky top-0 z-50 border-b border-black bg-white/95 backdrop-blur">
        <div className="flex items-center gap-6 px-4 py-3 sm:px-7">
          <Link
            to="/"
            className="u-grotesk flex items-center gap-2 text-[0.82rem] font-medium tracking-tight"
          >
            <span aria-hidden className="inline-block h-3 w-3 rounded-full border border-black" />
            amritaraj nair.
          </Link>
          <Link
            to="/"
            className="u-grotesk ml-auto text-[0.82rem] text-[#5a5a5a] transition-colors hover:text-black"
          >
            ← back
          </Link>
          <a
            href={`mailto:${PROFILE.email}`}
            className="u-grotesk rounded-[3px] bg-black px-3.5 py-1.5 text-[0.78rem] text-white transition-opacity hover:opacity-80"
          >
            contact
          </a>
        </div>
      </header>

      <section className="border-b border-black px-6 py-14 sm:px-10">
        <Tag>everything</Tag>
        <h1 className="u-grotesk mt-7 text-[clamp(2.4rem,7vw,5rem)] font-medium leading-[0.9] tracking-[-0.05em]">
          the full
          <br />
          gallery
        </h1>
        <p className="u-grotesk mt-6 max-w-lg text-[0.98rem] leading-relaxed text-[#3d3d3d]">
          Every piece of work on this site, archived entries included — {total} in all.
          The front page carries the ones worth leading with.
        </p>
      </section>

      {ZONES.map((zone) => (
        <section key={zone.id} className="border-b border-black">
          <div className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10">
            <h2 className="u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
              {zone.sign.toLowerCase()}
            </h2>
            <p className="u-grotesk text-right text-[0.78rem] text-[#5a5a5a]">{zone.caption}</p>
          </div>
          <div className="border-t border-black">
            {zone.cards.map((card, index) => (
              <div key={card.id} className="relative">
                {card.archived && (
                  <span className="u-grotesk absolute right-6 top-10 z-10 rounded-[3px] border border-[#8a8a8a] px-2 py-0.5 text-[0.62rem] text-[#8a8a8a] sm:right-10">
                    archived
                  </span>
                )}
                <ProjectCard card={card} zone={zone} index={index} />
              </div>
            ))}
          </div>
        </section>
      ))}

      <footer className="px-6 py-14 sm:px-10">
        <Link
          to="/"
          className="u-grotesk border-b border-black pb-0.5 text-[0.86rem] transition-opacity hover:opacity-55"
        >
          ← back to the front page
        </Link>
        <p className="u-grotesk mt-6 text-[0.78rem] text-[#8a8a8a]">
          <a href={`mailto:${PROFILE.email}`} className="hover:text-black">
            {PROFILE.email}
          </a>
          {" · "}
          <a
            href={withBase(PROFILE.links[1].href)}
            target="_blank"
            rel="noreferrer noopener"
            className="hover:text-black"
          >
            linkedin
          </a>
        </p>
      </footer>
    </main>
  );
}
