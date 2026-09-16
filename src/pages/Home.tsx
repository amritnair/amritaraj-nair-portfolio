import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { PROFILE, UPCOMING, ZONES } from "@/world/content";
import { HERO_ASCII } from "./heroAscii";

/**
 * The landing page.
 *
 * The game used to be the front door, which asked every visitor — recruiters
 * included — to learn to drive before they could read a line of the résumé.
 * The writing is the front door now and the world is a door off it.
 *
 * The hero is a terminal because the rest of the site is a 3D world: the two
 * halves of the same person. It boots, prints who he is, and takes a handful
 * of commands. The art beside it is not an illustration of the car — it is
 * the render on the page below, resampled to characters by `tools/hero.py`.
 */

const withBase = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:")
    ? href
    : `${import.meta.env.BASE_URL}${href}`;

const BOOT = [
  "reached target portfolio.target",
  "started world.service",
  "mounted /dev/résumé",
];

type Line = { kind: "out" | "cmd"; text: string };

const SPEC: [string, string][] = [
  ["name", PROFILE.name.replace(/\b\w+/g, (w) => w[0] + w.slice(1).toLowerCase())],
  ["role", PROFILE.tagline],
  ["email", PROFILE.email],
  ["areas", ZONES.map((z) => z.sign.toLowerCase()).join(" · ")],
  ["next", UPCOMING.map((u) => u.name.toLowerCase()).join(" · ")],
];

/** The commands the prompt understands, and what each prints. */
const COMMANDS: Record<string, () => string[]> = {
  help: () => ["available: whoami · work · stack · next · play · clear"],
  whoami: () => [PROFILE.tagline, `reach me at ${PROFILE.email}`],
  work: () =>
    ZONES.flatMap((zone) => [
      `${zone.sign.toLowerCase()}/`,
      ...zone.cards.map((card) => `  ${card.title} — ${card.subtitle}`),
    ]),
  stack: () => [
    [...new Set(ZONES.flatMap((z) => z.cards.flatMap((c) => c.tags ?? [])))]
      .sort()
      .join(" · "),
  ],
  next: () => UPCOMING.map((u) => `${u.name} — ${u.detail}`),
  play: () => ["launching the world…"],
};

export default function Home() {
  const [active, setActive] = useState("top");

  const sections = useMemo(
    () => [
      { id: "top", label: "Home" },
      ...ZONES.map((z) => ({ id: z.id, label: z.sign })),
      { id: "play", label: "Play" },
      { id: "contact", label: "Contact" },
    ],
    [],
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -70% 0px" },
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const count = ZONES.reduce((n, zone) => n + zone.cards.length, 0);

  return (
    <main className="min-h-screen bg-[#07061a] text-white">
      <style>{`
        @keyframes rise { from { opacity:0; transform:translateY(20px) } to { opacity:1; transform:none } }
        @keyframes blink { 0%,49% { opacity:1 } 50%,100% { opacity:0 } }
      `}</style>

      {/* Right-hand rail. Hidden on phones, where it would cover the content
          it is meant to navigate. */}
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-end gap-2.5 xl:flex">
        {sections.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className="group flex items-center gap-2.5 font-mono text-[0.58rem] uppercase tracking-[0.24em] transition"
            style={{ color: active === id ? "#d9d2ff" : "#544d80" }}
          >
            {label}
            <span
              className="h-px transition-all"
              style={{
                width: active === id ? "1.6rem" : "0.7rem",
                background: active === id ? "#8f7bff" : "#3d3763",
              }}
            />
          </a>
        ))}
      </nav>

      <Terminal />

      <div className="mx-auto max-w-5xl px-6 sm:px-10">
        <Stats count={count} />

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

        <PlayCard />
      </div>

      <Contact />
    </main>
  );
}

/**
 * The hero. A shell that boots, prints a spec block, and takes commands —
 * the ones in COMMANDS, which read the same content.ts the rest of the page
 * does, so the terminal can never tell you about work the page does not list.
 */
function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [booted, setBooted] = useState(false);
  const [input, setInput] = useState("");
  const scroller = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];
    BOOT.forEach((text, i) => {
      timers.push(
        window.setTimeout(() => {
          if (!cancelled) setLines((prev) => [...prev, { kind: "out", text: `[  ok  ] ${text}` }]);
        }, 220 + i * 260),
      );
    });
    timers.push(window.setTimeout(() => !cancelled && setBooted(true), 220 + BOOT.length * 260));
    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    scroller.current?.scrollTo({ top: scroller.current.scrollHeight });
  }, [lines, booted]);

  const run = (raw: string) => {
    const command = raw.trim().toLowerCase();
    if (!command) return;
    if (command === "clear") {
      setLines([]);
      return;
    }
    const handler = COMMANDS[command];
    const output = handler
      ? handler()
      : [`${command}: command not found — try \`help\``];
    setLines((prev) => [
      ...prev,
      { kind: "cmd", text: raw.trim() },
      ...output.map((text) => ({ kind: "out" as const, text })),
    ]);
    if (command === "play") window.setTimeout(() => (window.location.hash = "#/play"), 400);
  };

  return (
    <header id="top" className="scroll-mt-0 border-b border-white/10 px-4 pb-14 pt-6 sm:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-xl border border-white/12 bg-[#0a0820] shadow-[0_40px_120px_-40px_rgba(120,80,255,0.55)]">
          {/* Window chrome */}
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/[0.035] px-4 py-2.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            <span className="ml-3 font-mono text-[0.62rem] tracking-[0.12em] text-[#8a83bb]">
              amrit@portfolio — zsh
            </span>
            <Link
              to="/resume"
              className="ml-auto font-mono text-[0.6rem] uppercase tracking-[0.18em] text-[#8a83bb] transition hover:text-white"
            >
              résumé
            </Link>
          </div>

          <div className="grid gap-6 p-5 sm:p-7 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)]">
            {/* The render, as characters. Hidden below large screens — at
                phone width it would wrap into noise. */}
            <pre
              aria-hidden
              className="hidden select-none overflow-hidden font-mono text-[6.4px] leading-[1.05] text-[#7466d4] lg:block"
            >
              {HERO_ASCII}
            </pre>

            <div ref={scroller} className="max-h-[23rem] overflow-y-auto font-mono text-[0.78rem]">
              {lines.map((line, i) =>
                line.kind === "cmd" ? (
                  <div key={i} className="mt-2 text-[#d9d2ff]">
                    <span className="text-[#6ee7c8]">❯</span> {line.text}
                  </div>
                ) : (
                  <div key={i} className="whitespace-pre-wrap text-[#9a93c9]">
                    {line.text}
                  </div>
                ),
              )}

              {booted && (
                <>
                  <div className="mt-4 h-px bg-white/10" />
                  <dl className="mt-3 space-y-1">
                    {SPEC.map(([key, value]) => (
                      <div key={key} className="flex gap-3">
                        <dt className="w-14 shrink-0 text-[#8f7bff]">{key}</dt>
                        <dd className="min-w-0 text-[#cfc8f2]">{value}</dd>
                      </div>
                    ))}
                  </dl>
                  <div className="mt-3 h-px bg-white/10" />

                  <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1 text-[#6f68a0]">
                    <span>try:</span>
                    {["whoami", "work", "stack", "next", "play"].map((cmd) => (
                      <button
                        key={cmd}
                        type="button"
                        onClick={() => run(cmd)}
                        className="rounded border border-white/10 px-1.5 py-px text-[#9a93c9] transition hover:border-[#8f7bff]/60 hover:text-white"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>

                  <form
                    className="mt-3 flex items-center gap-2"
                    onSubmit={(e) => {
                      e.preventDefault();
                      run(input);
                      setInput("");
                    }}
                  >
                    <span className="text-[#6ee7c8]">❯</span>
                    <input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      spellCheck={false}
                      aria-label="Terminal input"
                      className="min-w-0 flex-1 bg-transparent text-[#d9d2ff] outline-none placeholder:text-[#4f4a75]"
                      placeholder="type `help`"
                    />
                    <span
                      aria-hidden
                      className="h-3.5 w-1.5 bg-[#8f7bff]"
                      style={{ animation: "blink 1.1s step-end infinite" }}
                    />
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        <h1 className="mt-10 text-[clamp(2.4rem,9vw,5.4rem)] font-black leading-[0.88] tracking-[-0.03em]">
          <span
            className="bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(100deg, #d8e0ff 10%, #ffffff 36%, #a48bff 64%, #e9c2ff 90%)",
            }}
          >
            {PROFILE.name}
          </span>
        </h1>
        <p className="mt-4 max-w-xl text-lg text-[#c3bce9]">{PROFILE.tagline}</p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#play"
            className="rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-7 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_36px_-8px_rgba(140,90,255,0.95)] transition hover:scale-[1.03]"
          >
            ▶ Play the world
          </a>
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
              className="px-2 py-3.5 text-xs font-bold uppercase tracking-[0.2em] text-[#8a83bb] underline decoration-[#6b5fd1] underline-offset-[6px] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

/** Counts, derived from the content below, so the page cannot overstate itself. */
function Stats({ count }: { count: number }) {
  return (
    <dl className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
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
  );
}

/** The door to the game, with the render that was made in the same Blender file. */
function PlayCard() {
  return (
    <section id="play" className="scroll-mt-20 pt-24">
      <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent">
        <img
          src={`${import.meta.env.BASE_URL}hero/car.jpg`}
          alt="The car, rendered in Blender"
          width={1600}
          height={1000}
          loading="lazy"
          className="aspect-[16/10] w-full object-cover"
        />
        <div className="p-7 sm:p-10">
          <p className="font-mono text-[0.6rem] uppercase tracking-[0.42em] text-[#9d8bff]">
            The other half
          </p>
          <h2 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl">
            Everything above, as somewhere you can drive
          </h2>
          <p className="mt-4 max-w-2xl text-[0.95rem] leading-relaxed text-[#c2bce6]">
            The same résumé, laid out as an island: four districts you drive into to read,
            a race circuit hung above them, and a garage you spend points in. It runs in
            the browser — no install, no download. The car above is the one you drive.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              to="/play"
              className="rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] text-white shadow-[0_0_40px_-8px_rgba(140,90,255,0.95)] transition hover:scale-[1.03]"
            >
              ▶ Enter the world
            </Link>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#6f68a0]">
              WASD · best in fullscreen
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <footer id="contact" className="mt-24 scroll-mt-20 border-t border-white/10 px-6 py-16 sm:px-10">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-3xl font-black tracking-tight sm:text-4xl">Get in touch</h2>
        <a
          href={`mailto:${PROFILE.email}`}
          className="mt-4 inline-block font-mono text-lg text-[#9d8bff] underline decoration-[#6b5fd1] underline-offset-[6px] transition hover:text-white"
        >
          {PROFILE.email}
        </a>
        <p className="mt-2 font-mono text-[0.72rem] tracking-[0.1em] text-[#6f68a0]">
          {PROFILE.phone}
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
          {PROFILE.links.map((link) => (
            <a
              key={link.label}
              href={withBase(link.href)}
              target="_blank"
              rel="noreferrer noopener"
              className="font-mono text-[0.66rem] uppercase tracking-[0.24em] text-[#8a83bb] transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
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
