import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE, UPCOMING, ZONES } from "@/world/content";
import {
  ContributionCalendar,
  ProjectCard,
  Reveal,
  Tag,
  ThemeToggle,
  scrollToSection,
  useContributions,
  usePaperBackground,
  withBase,
} from "./site";
import SNAPSHOT from "./contributions.json";

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
  {
    src: "photos/demo.jpg",
    // The patient record on the screen is synthetic demo data, confirmed by
    // him — worth recording, because a legible clinical record on a public
    // page is not something to ship on an assumption.
    alt: "Pulsematic being demonstrated to the team at Matic",
    caption: "demoing pulsematic",
    position: "50% 46%",
  },
  {
    src: "photos/research.jpg",
    alt: "Amritaraj with his cattle-nutrition research poster at Texas A&M",
    caption: "research poster, texas a&m",
    position: "32% 28%",
  },
  {
    src: "photos/tidal.jpg",
    alt: "Amritaraj and teammates with the TidalTAMU mascot",
    caption: "tidaltamu 2026",
    position: "50% 42%",
  },
  {
    src: "photos/shotsensei.jpg",
    alt: "Amritaraj demoing ShotSensei with a pickleball paddle",
    caption: "shotsensei, demo day",
    position: "55% 38%",
  },
  {
    src: "photos/hackathon.jpg",
    alt: "Amritaraj and teammates at HackMIT",
    caption: "hackmit",
    position: "50% 40%",
  },
];

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
      {/* mp4/h264 first — Safari and iOS may not fall through from VP9 webm. */}
      <source src={`${REEL}.mp4`} type="video/mp4" />
      <source src={`${REEL}.webm`} type="video/webm" />
    </video>
  );
}

export default function Home() {
  usePaperBackground();
  const github = useContributions(SNAPSHOT);

  const sections = [
    ...ZONES.map((z) => ({ id: z.id, label: z.sign.toLowerCase() })),
    { id: "resume", label: "résumé" },
    { id: "play", label: "play" },
  ];

  return (
    <main className="min-h-screen bg-[var(--paper)] text-[var(--ink)] antialiased">
      <style>{`
        .u-grotesk { font-family: Inter, 'Helvetica Neue', Helvetica, Arial, sans-serif; }
        @media (prefers-reduced-motion: reduce) { .u-reveal { transition: none !important } }
      `}</style>

      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-[var(--ink)] bg-[var(--paper-glass)] backdrop-blur">
        <div className="flex items-center gap-6 px-4 py-3 sm:px-7">
          <button
            type="button"
            onClick={() => scrollToSection("top")}
            className="u-grotesk flex items-center gap-2 text-[0.82rem] font-medium tracking-tight"
          >
            <span aria-hidden className="inline-block h-3 w-3 rounded-full border border-[var(--ink)]" />
            amritaraj nair.
          </button>

          <nav className="u-grotesk ml-auto hidden items-center gap-7 text-[0.82rem] text-[var(--ink-3)] md:flex">
            {sections.map(({ id, label }) => (
              <button
                key={id}
                type="button"
                onClick={() => scrollToSection(id)}
                className="transition-colors hover:text-[var(--ink)]"
              >
                {label}
              </button>
            ))}
          </nav>

          <div className="ml-auto md:ml-0">
            <ThemeToggle />
          </div>
          <a
            href={`mailto:${PROFILE.email}`}
            className="u-grotesk rounded-[3px] bg-[var(--ink)] px-3.5 py-1.5 text-[0.78rem] text-[var(--paper)] transition-opacity hover:opacity-80 md:ml-0"
          >
            contact
          </a>
        </div>
      </header>

      {/* Hero: moving image on the left, the claim on the right. */}
      <section id="top" className="grid border-b border-[var(--ink)] lg:grid-cols-2">
        <div className="relative order-2 aspect-[4/3] overflow-hidden border-t border-[var(--ink)] bg-black lg:order-1 lg:aspect-auto lg:min-h-[78vh] lg:border-r lg:border-t-0">
          <Slideshow />
        </div>

        <div className="order-1 flex flex-col justify-between p-6 sm:p-10 lg:order-2">
          <div>
            <Tag>student · builder</Tag>
            {/* The name, not a pitch. What this page is gets said plainly
                underneath; the paragraph below already makes the case, and
                making it twice in two sizes was the pitch talking. */}
            <h1 className="u-grotesk mt-8 text-[clamp(2.9rem,8vw,6.2rem)] font-medium leading-[0.88] tracking-[-0.05em]">
              amritaraj
              <br />
              nair
            </h1>
            <p className="u-grotesk mt-6 max-w-lg text-[clamp(1.05rem,2.2vw,1.5rem)] font-medium leading-tight tracking-[-0.02em] text-[var(--ink-3)]">
              portfolio website
            </p>
          </div>

          <div className="mt-12 max-w-md">
            <p className="u-grotesk text-[0.98rem] leading-relaxed text-[var(--ink-2)]">
              Computer Science Honors at Texas A&amp;M, minor in Mathematics. I build AI
              products that ship: healthcare AI at Matic, engineering at ClinicalHours as
              CTO, and Thorp, which I build solo. Every one of them is live for real users
              this year.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
              {PROFILE.links.map((link) => (
                <a
                  key={link.label}
                  href={withBase(link.href)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="u-grotesk border-b border-[var(--ink)] pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55"
                >
                  {link.label.toLowerCase()}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Each area of the résumé, as an editorial run. */}
      {/*
        GitHub activity. Directly under the hero because it is the cheapest
        proof on the page: everything above says what he does, this shows
        how often.
      */}
      <section id="github" className="scroll-mt-14 border-b border-[var(--ink)]">
        <div className="grid items-center gap-6 px-6 py-8 sm:px-10 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-10">
          <div>
            <a
              href="https://github.com/amritnair"
              target="_blank"
              rel="noreferrer noopener"
              className="u-grotesk group inline-block"
            >
              <span className="block text-[clamp(2.2rem,5vw,3.4rem)] font-medium leading-none tracking-[-0.045em]">
                {github.total.toLocaleString()}
              </span>
              <span className="mt-2 block text-[0.84rem] text-[var(--ink-3)] transition-colors group-hover:text-[var(--ink)]">
                contributions on github in the last year ↗
              </span>
            </a>
          </div>
          <ContributionCalendar levels={github.levels} from={github.from} />
        </div>
      </section>

      {ZONES.map((zone) => {
        // Archived work is real and still live, but it is not what he would
        // lead with — it lives in the gallery so the front page stays short
        // without anything having to be deleted to keep it that way.
        const shown = zone.cards.filter((card) => !card.archived);
        const hidden = zone.cards.length - shown.length;
        return (
        <section key={zone.id} id={zone.id} className="scroll-mt-14 border-b border-[var(--ink)]">
          <div className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10">
            <h2 className="u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
              {zone.sign.toLowerCase()}
            </h2>
            <p className="u-grotesk text-right text-[0.78rem] text-[var(--ink-3)]">{zone.caption}</p>
          </div>

          <div className="border-t border-[var(--ink)]">
            {shown.map((card, index) => (
              <ProjectCard key={card.id} card={card} zone={zone} index={index} />
            ))}
          </div>

            {hidden > 0 && (
              <div className="border-t border-[var(--ink)] px-6 py-5 sm:px-10">
                <Link
                  to="/projects"
                  className="u-grotesk inline-flex items-center gap-2 text-[0.86rem] transition-opacity hover:opacity-55"
                >
                  <span className="border-b border-[var(--ink)] pb-0.5">
                    see all {zone.cards.length} in the gallery
                  </span>
                  <span aria-hidden>→</span>
                </Link>
              </div>
            )}
          </section>
        );
      })}

      {/*
        The résumé, on the page.

        Rendered to an image rather than dropped in an <iframe>: an embedded
        PDF viewer is a scrollbar inside a scrollbar, it is grey plugin chrome
        on some browsers and a download prompt on most phones, and it loads a
        megabyte to show one page. This is that page as a picture, with the
        real file one click away for anyone who wants to keep it.
      */}
      <section id="resume" className="scroll-mt-14 border-b border-[var(--ink)]">
        <div className="flex flex-wrap items-baseline justify-between gap-4 px-6 py-5 sm:px-10">
          <h2 className="u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
            résumé
          </h2>
          <div className="flex items-center gap-4">
            <a
              href={withBase("Amritaraj_Nair_Resume.pdf")}
              target="_blank"
              rel="noreferrer noopener"
              className="u-grotesk inline-block rounded-[3px] bg-[var(--ink)] px-3.5 py-1.5 text-[0.78rem] text-[var(--paper)] transition-opacity hover:opacity-80"
            >
              open pdf ↗
            </a>
            <a
              href={withBase("Amritaraj_Nair_Resume.pdf")}
              download
              className="u-grotesk border-b border-[var(--ink)] pb-0.5 text-[0.8rem] transition-opacity hover:opacity-55"
            >
              download
            </a>
          </div>
        </div>

        <Reveal className="u-reveal border-t border-[var(--ink)] bg-[var(--panel)] px-6 py-10 sm:px-10">
          {/*
            Rendered from the PDF's vectors at three times its native size,
            then reduced to a palette. The first version came out of sips,
            which rasterises a PDF at 72 DPI — a 612-pixel page that was then
            stretched to fit and JPEG-compressed, which is triple the blur.
            White background fixed, not themed: a résumé is a sheet of paper.
          */}
          <img
            src={withBase("resume-preview.png")}
            alt="Amritaraj Nair's résumé"
            width={1891}
            height={2448}
            loading="lazy"
            className="mx-auto block w-full max-w-3xl border border-[var(--ink)] bg-white"
          />
        </Reveal>
      </section>

      {/* The world. The one place the page lets the colour in. */}
      <section id="play" className="scroll-mt-14 border-b border-[var(--ink)]">
        <div className="flex items-baseline justify-between gap-6 px-6 py-5 sm:px-10">
          <h2 className="u-grotesk text-[clamp(1.6rem,4vw,2.6rem)] font-medium leading-none tracking-[-0.04em]">
            play
          </h2>
          <Tag tilt={-1.5}>interactive</Tag>
        </div>

        <Reveal className="u-reveal relative border-t border-[var(--ink)] bg-black">
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
            <p className="u-grotesk max-w-2xl text-[1rem] leading-relaxed text-[var(--ink-2)]">
              An island with four districts you drive into to read, a race circuit hung
              above them and a garage you spend points in. Built with React Three Fiber
              and Rapier; the car is modelled in Blender. It runs in the browser. No
              install, no download.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/play"
                className="u-grotesk inline-block rounded-[3px] bg-[var(--ink)] px-5 py-2.5 text-[0.82rem] text-[var(--paper)] transition-opacity hover:opacity-80"
              >
                enter the world →
              </Link>
              <span className="u-grotesk text-[0.76rem] text-[var(--ink-4)]">
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
            <p className="u-grotesk mt-3 text-[0.86rem] text-[var(--ink-3)]">{PROFILE.phone}</p>

            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              {PROFILE.links.map((link) => (
                <a
                  key={link.label}
                  href={withBase(link.href)}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="u-grotesk border-b border-[var(--ink)] pb-0.5 text-[0.82rem] transition-opacity hover:opacity-55"
                >
                  {link.label.toLowerCase()} ↗
                </a>
              ))}
            </div>

            <p className="u-grotesk mt-12 max-w-md text-[0.78rem] leading-relaxed text-[var(--ink-4)]">
              Open to summer 2027 engineering internships.
              {UPCOMING.length > 0 && ` Currently: ${UPCOMING.map((u) => u.name.toLowerCase()).join(", ")}.`}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
