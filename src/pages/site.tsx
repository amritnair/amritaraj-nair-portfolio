import { useEffect, useRef, useState } from "react";
import type { Card, Zone } from "@/world/content";

/**
 * The pieces the written pages share: the landing page and the project
 * gallery render the same cards, so the card lives here rather than in both.
 */

export const withBase = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:")
    ? href
    : `${import.meta.env.BASE_URL}${href}`;

/**
 * Scrolls to a section.
 *
 * This exists because the site is on a HashRouter, where the hash *is* the
 * route. An ordinary `href="#work"` therefore does not jump down the page —
 * it navigates to the route `/work`, which does not exist, and the visitor
 * gets a 404. Every in-page jump on this site has to move the scroll position
 * without touching the hash.
 */
export function scrollToSection(id: string) {
  // The very top is the page, not the section: aligning the hero's top edge
  // with the viewport puts it under the sticky header, which clips the first
  // line of it.
  if (id === "top") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

/** A hairline-boxed label. The reference's one recurring ornament. */
export function Tag({ children, tilt = 0 }: { children: React.ReactNode; tilt?: number }) {
  return (
    <span
      className="inline-block whitespace-nowrap rounded-[3px] border border-[var(--ink)] px-2.5 py-1 text-[0.7rem] leading-none"
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      {children}
    </span>
  );
}

/** Fades a block in the first time it is scrolled to. */
export function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShown(true),
      { rootMargin: "-8% 0px -8% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "none" : "translateY(22px)",
        transition: "opacity .7s cubic-bezier(.2,.7,.2,1), transform .7s cubic-bezier(.2,.7,.2,1)",
      }}
    >
      {children}
    </div>
  );
}

/** Sets the numbers in a bullet in the section's colour — people skim for those. */
export function highlight(text: string, color: string) {
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

export function ProjectCard({ card, zone, index }: { card: Card; zone: Zone; index: number }) {
  return (
    <Reveal className="u-reveal grid gap-x-10 gap-y-5 border-b border-[var(--rule-soft)] px-6 py-10 last:border-b-0 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      <div>
        <h3 className="u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]">
          {card.title}
        </h3>
        <p className="u-grotesk mt-2 text-[0.88rem] text-[var(--ink-2)]">{card.subtitle}</p>
        {card.meta && <p className="u-grotesk mt-1 text-[0.76rem] text-[var(--ink-4)]">{card.meta}</p>}
      </div>

      <div>
        {card.body && (
          <p className="u-grotesk max-w-2xl text-[1rem] leading-relaxed">{card.body}</p>
        )}

        {card.bullets.length > 0 && (
          <ul className={`max-w-2xl space-y-2.5 ${card.body ? "mt-6" : ""}`}>
            {card.bullets.map((bullet) => (
              <li
                key={bullet}
                className="u-grotesk grid grid-cols-[1.1rem_minmax(0,1fr)] text-[0.93rem] leading-relaxed text-[var(--ink-2)]"
              >
                <span aria-hidden className="pt-[0.55rem]">
                  <span className="block h-px w-2.5 bg-[var(--ink)]" />
                </span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        )}

        {(card.tags?.length || card.links?.length) && (
          <div className="mt-7 flex flex-wrap items-center gap-2">
            {card.tags?.map((tag) => (
              <Tag key={tag}>{tag}</Tag>
            ))}
            {card.links?.map((link) => (
              <a
                key={link.label}
                href={withBase(link.href)}
                target="_blank"
                rel="noreferrer noopener"
                className="u-grotesk inline-block rounded-[3px] bg-[var(--ink)] px-2.5 py-1 text-[0.7rem] leading-none text-[var(--paper)] transition-opacity hover:opacity-80"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      {card.shot && (
        <figure className="col-span-full mt-4 border border-[var(--ink)] bg-black">
          <img
            src={withBase(card.shot)}
            alt={`${card.title} — screenshot of the live product`}
            width={1600}
            height={1000}
            loading={index === 0 ? "eager" : "lazy"}
            className="block w-full"
          />
        </figure>
      )}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ *
 * Theme
 * ------------------------------------------------------------------ */

/**
 * Light or dark, persisted, defaulting to whatever the system asks for.
 *
 * The class is first set by a script in index.html before React runs, so
 * this only has to read it back and flip it — setting it from here alone
 * would flash the wrong theme for a frame on every load.
 */
export function useTheme() {
  const [dark, setDark] = useState(
    () => typeof document !== "undefined" && document.documentElement.classList.contains("dark"),
  );

  const toggle = () => {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // Private browsing or storage blocked: the toggle still works for the
      // visit, it just will not be remembered.
    }
    setDark(next);
  };

  return { dark, toggle };
}

export function ThemeToggle() {
  const { dark, toggle } = useTheme();
  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      title={dark ? "Light mode" : "Dark mode"}
      className="u-grotesk flex h-7 w-7 items-center justify-center rounded-[3px] border border-[var(--ink)] text-[var(--ink)] transition-opacity hover:opacity-60"
    >
      {/* A half-filled disc reads as "contrast" in either state, which is
          more honest than a sun that turns into a moon: the button does not
          change what it does, only which way it does it. */}
      <svg width="14" height="14" viewBox="0 0 16 16" aria-hidden>
        <circle cx="8" cy="8" r="6.25" fill="none" stroke="currentColor" strokeWidth="1.5" />
        <path d="M8 1.75a6.25 6.25 0 0 1 0 12.5z" fill="currentColor" />
      </svg>
    </button>
  );
}

/**
 * Makes the page own the document background while it is mounted.
 *
 * The rest of the site is the 3D world, which is dark in both themes; without
 * this an overscroll past the end of a written page shows the world's colour
 * rather than the page's.
 */
export function usePaperBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.background;
    root.style.background = "var(--paper)";
    return () => {
      root.style.background = previous;
    };
  }, []);
}

/* ------------------------------------------------------------------ *
 * GitHub contributions
 * ------------------------------------------------------------------ */

type Contributions = { total: number; from: string; levels: string };

const GITHUB_USER = "amritnair";

/**
 * The contribution count and calendar, as GitHub draws it.
 *
 * A snapshot ships with the build so the calendar is on screen at first
 * paint, and a live copy replaces it once it arrives. GitHub's own calendar
 * cannot be fetched from a browser — no CORS — so the live copy comes from a
 * public mirror of it; if that is down or slow, the snapshot simply stays.
 */
export function useContributions(snapshot: Contributions) {
  const [data, setData] = useState(snapshot);

  useEffect(() => {
    const controller = new AbortController();
    fetch(`https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`, {
      signal: controller.signal,
    })
      .then((response) => (response.ok ? response.json() : Promise.reject(response.status)))
      .then((live: { total: { lastYear: number }; contributions: { date: string; level: number }[] }) => {
        if (!live?.contributions?.length) return;
        setData({
          total: live.total.lastYear,
          from: live.contributions[0].date,
          levels: live.contributions.map((day) => day.level).join(""),
        });
      })
      .catch(() => {});
    return () => controller.abort();
  }, []);

  return data;
}

export function ContributionCalendar({ levels, from }: { levels: string; from: string }) {
  // Pad the front so the first column starts on a Sunday, the way GitHub lays
  // it out — otherwise every week is misaligned by the start day.
  const lead = new Date(`${from}T00:00:00`).getDay();
  const cells = [...Array(lead).fill(-1), ...levels.split("").map(Number)];
  const weeks: number[][] = [];
  for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));

  // Monochrome, by opacity of the ink colour, rather than GitHub green: it
  // sits in both themes without a second palette, and the page's one colour
  // is supposed to come from its photographs.
  const shade = [0.09, 0.3, 0.52, 0.76, 1];

  return (
    <div className="overflow-x-auto">
      <div className="flex gap-[3px]" role="img" aria-label="GitHub contribution calendar">
        {weeks.map((week, w) => (
          <div key={w} className="flex flex-col gap-[3px]">
            {week.map((level, d) => (
              <span
                key={d}
                className="block h-[9px] w-[9px] rounded-[2px]"
                style={{
                  background: level < 0 ? "transparent" : "var(--ink)",
                  opacity: level < 0 ? 0 : shade[level],
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
