import { useProgress } from "@react-three/drei";
import { Link } from "react-router-dom";
import { PROFILE } from "../content";
import { worldStore } from "../store";

const withBase = (href: string) =>
  href.startsWith("http") || href.startsWith("mailto:")
    ? href
    : `${import.meta.env.BASE_URL}${href}`;

/** Mac reports "MacIntel"/"Mac" here regardless of chip. */
const isMac = typeof navigator !== "undefined" && /Mac/i.test(navigator.platform);
const FULLSCREEN_KEY = isMac ? "⌃⌘F" : "F11";

export default function Intro() {
  const { progress, active } = useProgress();
  const ready = progress >= 100 || !active;

  // The world is framed for a full window — a browser with tabs, bookmarks and
  // a dock eating the bottom crops the districts. Offer fullscreen on the way
  // in rather than letting people discover the problem mid-drive.
  const play = async (fullscreen: boolean) => {
    if (fullscreen && !document.fullscreenElement) {
      // A refusal here is not worth blocking on — start the world either way.
      await document.documentElement.requestFullscreen?.().catch(() => {});
    }
    worldStore.start();
  };

  return (
    // Short laptop windows are the common case, not the exception: the whole
    // card has to stay reachable without the play button falling off-screen.
    <div className="pointer-events-auto fixed inset-0 z-50 overflow-y-auto bg-[#0d0a24]/92 backdrop-blur-md">
      <div className="flex min-h-full items-center justify-center px-6 py-8">
        <div className="w-full max-w-2xl text-center text-white">
        <p className="mb-3 font-mono text-[0.68rem] uppercase tracking-[0.42em] text-[#9d8bff]">
          An interactive portfolio
        </p>

        <h1 className="text-4xl font-black leading-[0.95] tracking-tight sm:text-5xl lg:text-6xl">
          <span className="bg-gradient-to-br from-[#c9d4ff] via-white to-[#8f7bff] bg-clip-text text-transparent">
            {PROFILE.name}
          </span>
        </h1>

        <p className="mx-auto mt-3 max-w-md text-sm text-[#b9b2e8] sm:text-base">
          {PROFILE.tagline}
        </p>

        <div className="mx-auto mt-6 grid max-w-md grid-cols-2 gap-2 text-left font-mono text-[0.7rem] text-[#8f88bd] sm:grid-cols-4">
          {[
            ["W / ↑", "Drive"],
            ["S / ↓", "Reverse"],
            ["A D / ← →", "Steer"],
            ["R", "Respawn"],
          ].map(([key, label]) => (
            <div key={key} className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-2">
              <div className="text-[#e4dfff]">{key}</div>
              <div className="mt-0.5 text-[0.62rem] uppercase tracking-wider">{label}</div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            disabled={!ready}
            onClick={() => play(true)}
            className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#5b4bff] to-[#c341ff] px-9 py-4 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-[0_0_40px_-6px_rgba(140,90,255,0.9)] transition hover:scale-[1.03] disabled:cursor-wait disabled:opacity-50"
          >
            <span className="text-base leading-none">▶</span>
            {ready ? "Play fullscreen" : `Loading ${Math.round(progress)}%`}
          </button>

          <Link
            to="/resume"
            className="inline-flex items-center rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-sm font-bold uppercase tracking-[0.22em] text-[#b9b2e8] transition hover:border-white/30 hover:text-white"
          >
            Read the résumé
          </Link>
        </div>

        <p className="mt-4 text-[0.7rem] text-[#6f68a0]">
          Best in fullscreen ({FULLSCREEN_KEY} toggles it) —{" "}
          <button
            type="button"
            disabled={!ready}
            onClick={() => play(false)}
            className="underline decoration-[#6b5fd1] underline-offset-4 transition hover:text-white disabled:opacity-50"
          >
            or play in this window
          </button>
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs">
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
      </div>
    </div>
  );
}
