#!/usr/bin/env bash
# Captures each live project and writes the screenshots the written portfolio
# uses. Run it with: npm run shots
#
# Headless Chrome rather than a service, because these are all the owner's own
# sites and nothing needs to leave the machine. The output is committed — the
# deploy runner has no browser.
#
# Two things this has to work around:
#   * --virtual-time-budget never completes on a page with a continuous
#     animation loop, so Chrome hangs forever. Wall-clock cap instead.
#   * Anything behind a sign-in or lazy-loaded renders as skeletons. Capture
#     the marketing surface, look at the result, and do not ship a screenshot
#     of a loading state.
set -uo pipefail

CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
RAW="${TMPDIR:-/tmp}/shots"
OUT="public/shots"
mkdir -p "$RAW" "$OUT"

shoot () { # name url
  "$CHROME" --headless=new --disable-gpu --hide-scrollbars --force-device-scale-factor=2 \
    --window-size=1440,900 --screenshot="$RAW/$1.png" "$2" >/dev/null 2>&1 &
  local pid=$! n=0
  while kill -0 "$pid" 2>/dev/null && [ "$n" -lt 45 ]; do sleep 1; n=$((n + 1)); done
  kill -9 "$pid" 2>/dev/null
  [ -s "$RAW/$1.png" ] || { echo "MISSING $1"; return 1; }
  ffmpeg -y -loglevel error -i "$RAW/$1.png" -vf "scale=1600:-2" -q:v 4 "$OUT/$1.jpg"
  echo "$1 $(stat -f%z "$OUT/$1.jpg") bytes"
}

# thorp-home.jpg and clinicalhours.jpg are NOT captured here any more — the
# written page auto-scrolls their *full-page* screenshots, and clinicalhours
# only reveals its content on scroll, which a one-shot viewport grab misses.
# Those two are captured full-page with reduced-motion emulation (playwright,
# channel=chrome) and downscaled to 1000px wide. Regenerate them with:
#   pip install playwright && python3 - <<'PY'
#   from playwright.sync_api import sync_playwright
#   S={"thorp-home":"https://thorp-trade.vercel.app","clinicalhours":"https://clinicalhours.org"}
#   with sync_playwright() as p:
#     b=p.chromium.launch(channel="chrome"); c=b.new_context(device_scale_factor=2,reduced_motion="reduce",viewport={"width":1440,"height":900})
#     for n,u in S.items():
#       pg=c.new_page(); pg.goto(u,wait_until="networkidle")
#       pg.evaluate("()=>new Promise(r=>{let y=0;const s=()=>{scrollTo(0,y);y+=500;if(y<document.body.scrollHeight)setTimeout(s,120);else{scrollTo(0,0);setTimeout(r,700)}};s()})")
#       pg.screenshot(path=f"/tmp/{n}.png",full_page=True)
#     b.close()
#   PY
#   for n in thorp-home clinicalhours; do ffmpeg -y -i /tmp/$n.png -vf scale=1000:-1 -q:v 5 public/shots/$n.jpg; done
#
# Shot Sensei shows its gameplay clip (shots/shotsensei.{mp4,webm}), trimmed
# from the Devpost demo, so its site is not captured either.
shoot harbor        "https://harbordisaster.xyz"
