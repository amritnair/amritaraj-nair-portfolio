import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE, UPCOMING, ZONES } from "@/world/content";

/**
 * The landing page.
 *
 * Stark and editorial on purpose. The previous version was dark, glowing and
 * gradient-lettered, which is the house style of every generated portfolio on
 * the internet — the work stopped being the thing you noticed. Black on white,
 * one typeface, real rules between sections, and the only colour on the page
 * coming from moving images.
 *
 * The rest of the site is a neon 3D world and this page is its opposite. That
 * is the intent: the restraint here is what makes the world read as a choice
 * rather than a default.
 */

const withBase = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:")
    ? href
    : `${import.meta.env.BASE_URL}${href}`;

const REEL = `${import.meta.env.BASE_URL}hero/reel`;
const POSTER = `${import.meta.env.BASE_URL}hero/car.jpg`;

/**
 * The hero photographs, cycled.
 *
 * `position` is a CSS object-position rather than a crop of the file: the
 * panel is tall on desktop and 4:3 on a phone, and a centre crop of the
 * whiteboard shot puts him off the edge of the frame in both. Steering the
 * crop in CSS keeps the originals intact.
 */
const PHOTOS = [
  {
    src: "photos/yc.jpg",
    alt: "Amritaraj outside Y Combinator",
    caption: "yc startup intern expo",
    position: "50% 42%",
  },
  {
    src: "photos/matic.jpg",
    alt: "Amritaraj at the Matic office",
    caption: "matic — summer 2026",
    position: "38% 50%",
  },
  {
    src: "photos/whiteboard.jpg",
    alt: "Amritaraj in an architecture session at Matic",
    caption: "pulsematic, on the whiteboard",
    position: "72% 40%",
  },
];

/** A hairline-boxed label. The reference's one recurring ornament. */
function Tag({ children, tilt = 0 }: { children: React.ReactNode; tilt?: number }) {
  return (
    <span
      className="inline-block whitespace-nowrap rounded-[3px] border border-black px-2.5 py-1 text-[0.7rem] leading-none"
      style={{ transform: tilt ? `rotate(${tilt}deg)` : undefined }}
    >
      {children}
    </span>
  );
}

/**
 * The hero photographs, one at a time.
 *
 * Crossfaded rather than slid, so nothing in the layout moves — the headline
 * beside it is the thing to read, and a panel sliding in the corner of your
 * eye is a competing animation. Holds on the first frame for anyone who has
 * asked the system for less motion.
 */
function Slideshow() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(() => {
      // Nothing advances while the tab is in the background: the interval
      // still fires there, and coming back to a page mid-crossfade looks
      // like a glitch rather than a slideshow.
      if (!document.hidden) setIndex((i) => (i + 1) % PHOTOS.length);
    }, 4200);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="relative h-full w-full overflow-hidden bg-[#0b0b0b]">
      {PHOTOS.map((photo, i) => (
        <img
          key={photo.src}
          src={withBase(photo.src)}
          alt={photo.alt}
          loading={i === 0 ? "eager" : "lazy"}
          className="absolute inset-0 h-full w-full object-cover"
          style={{
            objectPosition: photo.position,
            opacity: i === index ? 1 : 0,
            transition: "opacity 1.1s ease-in-out",
          }}
        />
      ))}

      <div className="absolute bottom-4 left-4 flex items-center gap-3">
        <span className="u-grotesk inline-block rounded-[3px] border border-white/70 bg-black/45 px-2.5 py-1 text-[0.68rem] text-white backdrop-blur">
          {PHOTOS[index].caption}
        </span>
        <span className="flex gap-1.5">
          {PHOTOS.map((photo, i) => (
            <button
              key={photo.src}
              type="button"
              aria-label={photo.alt}
              onClick={() => setIndex(i)}
              className="h-1.5 w-1.5 rounded-full transition-colors"
              style={{ background: i === index ? "#fff" : "rgba(255,255,255,0.38)" }}
            />
          ))}
        </span>
      </div>
    </div>
  );
}

/**
 * The looping render. `autoplay muted playsinline` is supposed to be enough,
 * but a muted autoplay is still refused often enough — a data-saver setting,
 * a background tab at load, Low Power Mode — that the only reliable version
 * asks again once the data is actually there. The poster covers the case
 * where it is refused for good.
 */
function Reel({ className, eager }: { className?: string; eager?: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);

  const nudge = () => {
    const video = ref.current;
    if (video?.paused) void video.play().catch(() => {});
  };

  useEffect(nudge, []);

  return (
    <video
      ref={ref}
      className={className}
      poster={POSTER}
      autoPlay
      muted
      loop
      playsInline
      preload={eager ? "auto" : "metadata"}
      onCanPlay={nudge}
      onLoadedData={nudge}
    >
      <source src={`${REEL}.webm`} type="video/webm" />
      <source src={`${REEL}.mp4`} type="video/mp4" />
    </video>
  );
}

/** Fades a block in the first time it is scrolled to. */
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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

export default function Home() {
  // The site is dark everywhere else, so the page has to claim the document
  // background or an overscroll shows the world's colour behind this one.
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.background;
    root.style.background = "#ffffff";
    return () => {
      root.style.background = previous;
    };
  }, []);

  const sections = [
    ...ZONES.map((z) => ({ id: z.id, label: z.sign.toLowerCase() })),
    { id: "play", label: "play" },
  ];

  return (
    <main className="min-h-screen bg-white text-[#0b0b0b] antialiased">
      <style>{`
        .u-grotesk { font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        @media (prefers-reduced-motion: reduce) { .u-reveal { transition: none !important } }
      `}</style>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-black bg-white/95 backdrop-blur">
        <div className="flex items-center gap-6 px-4 py-3 sm:px-7">
          <a href="#top" className="u-grotesk flex items-center gap-2 text-[0.82rem] font-medium tracking-tight">
            <span aria-hidden className="inline-block h-3 w-3 rounded-full border border-black" />
            amritaraj nair.
          </a>

          <nav className="u-grotesk ml-auto hidden items-center gap-7 text-[0.82rem] text-[#5a5a5a] md:flex">
            {sections.map(({ id, label }) => (
              <a key={id} href={`#${id}`} className="transition-colors hover:text-black">
                {label}
              </a>
            ))}
          </nav>

          <a
            href={`mailto:${PROFILE.email}`}
            className="u-grotesk ml-auto rounded-[3px] bg-black px-3.5 py-1.5 text-[0.78rem] text-white transition-opacity hover:opacity-80 md:ml-0"
          >
            contact
          </a>
        </div>
      </header>

      {/* Hero: moving image on the left, the claim on the right. */}
      <section id="top" className="grid border-b border-black lg:grid-cols-2">
        <div className="relative order-2 aspect-[4/3] overflow-hidden border-t border-black bg-black lg:order-1 lg:aspect-auto lg:min-h-[78vh] lg:border-r lg:border-t-0">
          <Slideshow />
        </div>

        <div className="order-1 flex flex-col justify-between p-6 sm:p-10 lg:order-2">
          <div>
            <Tag>student · builder</Tag>
            {/* The name, not the pitch. A stranger landing here should learn
                whose site this is before they learn what he thinks of himself;
                the claim still gets said, one size down. */}
            <h1 className="u-grotesk mt-8 text-[clamp(2.9rem,8vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.05em]">
              amritaraj
              <br />
              nair
            </h1>
            <p className="u-grotesk mt-6 max-w-lg text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium leading-tight tracking-[-0.02em] text-[#1a1a1a]">
              I build AI products that ship.
            </p>
          </div>

          <div className="mt-12 max-w-md">
            <p className="u-grotesk text-[0.98rem] leading-relaxed text-[#3d3d3d]">
              Computer Science Honors at Texas A&amp;M, minor in Mathematics. I work on
              healthcare AI at Matic, run engineering at ClinicalHours, and build Thorp
              solo. Three of the four shipped to real users this year.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              {PROFILE.links.map((link) => (
                <a
                  key={link.label}
                  href={withBase(link.href)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="u-grotesk border-b border-black pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55"
                >
                  {link.label.toLowerCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Each area of the résumé, as an editorial run. */}
      {ZONES.map((zone) => (
        <section key={zone.id} id={zone.id} className="scroll-mt-14 border-b border-black">
          <div className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10">
            <h2 className="u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
              {zone.sign.toLowerCase()}
            </h2>
            <p className="u-grotesk text-right text-[0.78rem] text-[#5a5a5a]">{zone.caption}</p>
          </div>

          <div className="border-t border-black">
            {zone.cards.map((card) => (
              <Reveal
                key={card.id}
                className="u-reveal grid gap-x-10 gap-y-5 border-b border-[#dcdcdc] px-6 py-10 last:border-b-0 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)]"
              >
                <div>
                  <h3 className="u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]">
                    {card.title}
                  </h3>
                  <p className="u-grotesk mt-2 text-[0.88rem] text-[#3d3d3d]">{card.subtitle}</p>
                  {card.meta && (
                    <p className="u-grotesk mt-1 text-[0.76rem] text-[#8a8a8a]">{card.meta}</p>
                  )}
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
                      loading="lazy"
                      className="block w-full"
                    />
                  </figure>
                )}
              </Reveal>
            ))}
          </div>
        </section>
      ))}

      {/* The world. The one place the page lets the colour in. */}
      <section id="play" className="scroll-mt-14 border-b border-black">
        <div className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10">
          <h2 className="u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
            play
          </h2>
          <Tag tilt={-1.5}>interactive</Tag>
        </div>

        <Reveal className="u-reveal relative border-t border-black bg-black">
          <Reel className="aspect-[16/9] w-full object-cover" />
          <span className="u-grotesk absolute bottom-4 left-4 inline-block rounded-[3px] border border-white/70 bg-black/45 px-2.5 py-1 text-[0.68rem] text-white backdrop-blur">
            rendered in blender
          </span>
        </Reveal>

        <div className="grid gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10">
          <h3 className="u-grotesk text-[clamp(1.5rem,3vw,2.1rem)] font-medium leading-[1.02] tracking-[-0.035em]">
            The same résumé,
            <br />
            as somewhere you drive
          </h3>
          <div>
            <p className="u-grotesk max-w-2xl text-[1rem] leading-relaxed text-[#3d3d3d]">
              An island with four districts you drive into to read, a race circuit hung
              above them and a garage you spend points in. Built with React Three Fiber
              and Rapier; the car is modelled in Blender. It runs in the browser — no
              install, no download.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/play"
                className="u-grotesk inline-block rounded-[3px] bg-black px-5 py-2.5 text-[0.82rem] text-white transition-opacity hover:opacity-80"
              >
                enter the world →
              </Link>
              <span className="u-grotesk text-[0.76rem] text-[#8a8a8a]">
                wasd · best in fullscreen
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <footer className="px-6 py-14 sm:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10">
          <h2 className="u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
            get in touch
          </h2>
          <div>
            <a
              href={`mailto:${PROFILE.email}`}
              className="u-grotesk text-[clamp(1.3rem,3.4vw,2.2rem)] font-medium leading-tight tracking-[-0.035em] underline decoration-1 underline-offset-[6px] transition-opacity hover:opacity-55"
            >
              {PROFILE.email}
            </a>
            <p className="u-grotesk mt-3 text-[0.86rem] text-[#5a5a5a]">{PROFILE.phone}</p>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {PROFILE.links.map((link) => (
                <a
                  key={link.label}
                  href={withBase(link.href)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="u-grotesk border-b border-black pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55"
                >
                  {link.label.toLowerCase()} ↗
                </a>
              ))}
            </div>

            <p className="u-grotesk mt-12 max-w-md text-[0.78rem] leading-relaxed text-[#8a8a8a]">
              Open to summer 2027 engineering internships.
              {UPCOMING.length > 0 && ` Currently: ${UPCOMING.map((u) => u.name.toLowerCase()).join(", ")}.`}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
