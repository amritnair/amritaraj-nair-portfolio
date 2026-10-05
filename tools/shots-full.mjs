// Full-page screenshots of the live project sites, for the auto-scrolling
// previews on the written page. Run with: npm run shots:full
//
// Why Playwright and not tools/shots.sh's one-shot headless Chrome:
//   * full-page capture — the previews scroll the whole page, not a viewport.
//   * reducedMotion: "reduce" — clinicalhours reveals its sections on scroll,
//     so a plain grab comes back as a black page. Reduced motion makes the
//     reveal-on-scroll content paint immediately.
// Uses playwright-core against the system Chrome (channel: "chrome"), so there
// is no bundled-browser download. Output is committed; CI has no browser.
// Needs ffmpeg (same as shots.sh) to downscale to 1000px wide.

import { chromium } from "playwright-core";
import { execFileSync } from "node:child_process";
import { mkdtempSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

const SITES = {
  "thorp-home": "https://thorp-trade.vercel.app",
  clinicalhours: "https://clinicalhours.org",
  prophecy: "https://amritnair.github.io/prophecy/",
};

// Drive the page top to bottom and back so lazy and on-scroll content loads.
const SCROLL = () =>
  new Promise((resolve) => {
    let y = 0;
    const step = () => {
      window.scrollTo(0, y);
      y += 500;
      if (y < document.body.scrollHeight) setTimeout(step, 120);
      else {
        window.scrollTo(0, 0);
        setTimeout(resolve, 700);
      }
    };
    step();
  });

const tmp = mkdtempSync(join(tmpdir(), "shots-"));
const browser = await chromium.launch({ channel: "chrome" });
const context = await browser.newContext({
  viewport: { width: 1440, height: 900 },
  deviceScaleFactor: 2,
  reducedMotion: "reduce",
});

for (const [name, url] of Object.entries(SITES)) {
  const page = await context.newPage();
  await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
  await page.evaluate(SCROLL);
  const png = join(tmp, `${name}.png`);
  await page.screenshot({ path: png, fullPage: true });
  execFileSync("ffmpeg", [
    "-y", "-loglevel", "error", "-i", png,
    "-vf", "scale=1000:-1", "-q:v", "5",
    `public/shots/${name}.jpg`,
  ]);
  console.log(`${name} -> public/shots/${name}.jpg`);
  await page.close();
}

await browser.close();
