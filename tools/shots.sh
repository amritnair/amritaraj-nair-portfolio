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

shoot thorp-home    "https://thorp-trade.vercel.app"
shoot clinicalhours "https://clinicalhours.org"
shoot shotsensei    "https://playshotsensei.com"
