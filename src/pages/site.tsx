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
      className="inline-block whitespace-nowrap rounded-[3px] border border-black px-2.5 py-1 text-[0.7rem] leading-none"
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
    <Reveal className="u-reveal grid gap-x-10 gap-y-5 border-b border-[#dcdcdc] px-6 py-10 last:border-b-0 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]">
      <div>
        <h3 className="u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]">
          {card.title}
        </h3>
        <p className="u-grotesk mt-2 text-[0.88rem] text-[#3d3d3d]">{card.subtitle}</p>
        {card.meta && <p className="u-grotesk mt-1 text-[0.76rem] text-[#8a8a8a]">{card.meta}</p>}
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
                className="u-grotesk grid grid-cols-[1.1rem_minmax(0,1fr)] text-[0.93rem] leading-relaxed text-[#3d3d3d]"
              >
                <span aria-hidden className="pt-[0.55rem]">
                  <span className="block h-px w-2.5 bg-black" />
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
                className="u-grotesk inline-block rounded-[3px] bg-black px-2.5 py-1 text-[0.7rem] leading-none text-white transition-opacity hover:opacity-80"
              >
                {link.label} ↗
              </a>
            ))}
          </div>
        )}
      </div>

      {card.shot && (
        <figure className="col-span-full mt-4 border border-black bg-black">
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
