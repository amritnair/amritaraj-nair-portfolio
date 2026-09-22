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

      <ProjectMedia card={card} index={index} />
    </Reveal>
  );
}

/**
 * The card's media: a browser-framed "demo" of the live product. Shot Sensei
 * plays its muted gameplay clip; every other site slowly auto-scrolls its own
 * full-page screenshot, the way you would if you were reading it. Both sit in
 * the same chrome so the section reads as a row of live demos rather than
 * stills. Nothing moves under `prefers-reduced-motion`.
 */
function ProjectMedia({ card, index }: { card: Card; index: number }) {
  if (!card.video && !card.shot) return null;
  // The frame's address bar: the first link that looks like a bare domain.
  const label = card.links?.find((l) => /^[\w-]+(\.[\w-]+)+$/.test(l.label))?.label;

  return (
    <figure className="col-span-full mt-4">
      <Frame label={label}>
        {card.video ? (
          <CardVideo base={card.video} poster={card.poster ?? card.shot} eager={index === 0} />
        ) : (
          <SiteScroll src={withBase(card.shot!)} alt={`${card.title}, the live site`} eager={index === 0} />
        )}
      </Frame>
    </figure>
  );
}

/** A minimal browser window around the media, monochrome to suit the page. */
function Frame({ label, children }: { label?: string; children: React.ReactNode }) {
  return (
    <div className="overflow-hidden rounded-[4px] border border-[var(--ink)] bg-black">
      <div className="flex items-center gap-2 border-b border-white/10 bg-[#0e0e0e] px-3 py-2">
        <span className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        </span>
        {label && (
          <span className="mx-auto max-w-[75%] truncate rounded-[3px] bg-white/[0.08] px-2 py-0.5 text-center text-[0.62rem] text-white/60">
            {label}
          </span>
        )}
      </div>
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-black">{children}</div>
    </div>
  );
}

/**
 * The looping demo clip. `autoplay muted playsinline` is meant to be enough,
 * but a muted autoplay is refused often enough — data saver, a background tab
 * at load, Low Power Mode — that the reliable version asks again once the data
 * is there. The poster covers the case where it is refused for good.
 */
function CardVideo({ base, poster, eager }: { base: string; poster?: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  const onScreen = useRef(false);
  // Browsers pause off-screen or backgrounded clips to save power and don't
  // always resume them, which reads as a frozen card. There are no controls,
  // so resume any pause — but only while the card is actually on screen, or
  // onPause and the browser's own off-screen pause chase each other forever.
  const nudge = () => {
    const video = ref.current;
    if (video?.paused && onScreen.current && !document.hidden) void video.play().catch(() => {});
  };
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const io = new IntersectionObserver(([entry]) => {
      onScreen.current = entry.isIntersecting;
      nudge();
    });
    io.observe(video);
    document.addEventListener("visibilitychange", nudge);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", nudge);
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 h-full w-full object-cover"
      poster={poster ? withBase(poster) : undefined}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? "auto" : "metadata"}
      onCanPlay={nudge}
      onLoadedData={nudge}
      onPause={nudge}
    >
      {/* mp4/h264 first: Safari and iOS often won't fall through from a VP9
          webm to the mp4 and just render blank. h264 plays everywhere, and
          here the mp4 is the smaller file anyway. */}
      <source src={`${withBase(base)}.mp4`} type="video/mp4" />
      <source src={`${withBase(base)}.webm`} type="video/webm" />
    </video>
  );
}

/**
 * A tall full-page screenshot that scrolls itself top-to-bottom and back,
 * like a hands-off tour of the site. Driven by the Web Animations API rather
 * than a per-frame React loop, paused while off-screen and on hover, and left
 * still (showing the hero) when the visitor has asked for less motion.
 */
function SiteScroll({ src, alt, eager }: { src: string; alt: string; eager?: boolean }) {
  const img = useRef<HTMLImageElement>(null);
  const anim = useRef<Animation | null>(null);
  const inView = useRef(false);
  const hovering = useRef(false);

  useEffect(() => {
    const picture = img.current;
    const box = picture?.parentElement; // the Frame's clipping viewport
    if (!box || !picture) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const running = () => inView.current && !hovering.current;
    const sync = () => {
      if (!anim.current) return;
      if (running()) anim.current.play();
      else anim.current.pause();
    };

    const build = () => {
      if (!picture.complete || !picture.naturalWidth) return;
      const distance = picture.clientHeight - box.clientHeight; // px it can travel
      anim.current?.cancel();
      anim.current = null;
      if (distance <= 4) return; // image no taller than the frame — nothing to scroll
      anim.current = picture.animate(
        [{ transform: "translateY(0)" }, { transform: `translateY(${-distance}px)` }],
        // Linear, not ease-in-out: over a 30–50s pass the ease-in ramp makes
        // the first several seconds look motionless. Constant speed reads as a
        // steady scroll that starts moving immediately.
        { duration: (distance / 46) * 1000, direction: "alternate", iterations: Infinity, easing: "linear" },
      );
      sync();
    };

    if (picture.complete) build();
    else picture.addEventListener("load", build, { once: true });

    const io = new IntersectionObserver(
      ([entry]) => {
        inView.current = entry.isIntersecting;
        sync();
      },
      { threshold: 0.05 },
    );
    io.observe(box);

    const ro = new ResizeObserver(build);
    ro.observe(box);

    return () => {
      io.disconnect();
      ro.disconnect();
      anim.current?.cancel();
      picture.removeEventListener("load", build);
    };
  }, [src]);

  return (
    <img
      ref={img}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      draggable={false}
      onMouseEnter={() => {
        hovering.current = true;
        anim.current?.pause();
      }}
      onMouseLeave={() => {
        hovering.current = false;
        if (inView.current) anim.current?.play();
      }}
      className="absolute inset-x-0 top-0 w-full"
    />
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
