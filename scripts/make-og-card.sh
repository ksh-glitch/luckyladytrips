#!/bin/bash
# Regenerates public/assets/og-default.jpg — the "business card" share image
# (navy premium design, chosen 17 Aug 2026). Re-run after changing contact
# details, the follower count, the avatar, or the QR.
# Deps: ImageMagick (magick), macOS system fonts (Georgia + Arial/Helvetica).
set -euo pipefail
cd "$(dirname "$0")/.."
A=public/assets
GI="/System/Library/Fonts/Supplemental/Georgia Bold Italic.ttf"
GIT="/System/Library/Fonts/Supplemental/Georgia Italic.ttf"
HB="/System/Library/Fonts/Supplemental/Arial Bold.ttf"; [ -f "$HB" ] || HB="/System/Library/Fonts/Helvetica.ttc"
HR="/System/Library/Fonts/Supplemental/Arial.ttf"; [ -f "$HR" ] || HR="/System/Library/Fonts/Helvetica.ttc"
NAVYD="#04102A"; GOLD="#E2B257"; GOLDL="#F6CE78"; SAND="#FCF9F3"

# ---- edit these when details change -------------------------------------
FOLLOWERS="18.9K"
PHONE="+20 120 572 6571"
# -------------------------------------------------------------------------

T=$(mktemp -d)
magick "$A/sean-avatar.webp" -resize 260x260 \( -size 260x260 xc:none -fill white -draw "circle 130,130 130,2" \) -compose CopyOpacity -composite "$T/av.png"
magick marketing/qr/luckyladytrips-links-qr.png -resize 144x144 "$T/qr.png"
magick "$A/logo-51.png" -resize 330x "$T/logo.png"

magick -size 1200x630 gradient:"$NAVYD"-"#10395A" "$T/og.png"
magick "$T/og.png" -fill none -stroke "$GOLD" -strokewidth 2 -draw "roundrectangle 24,24 1176,606 18,18" \
  -fill "$GOLD" -stroke none -draw "circle 24,24 29,24" -draw "circle 1176,24 1181,24" -draw "circle 24,606 29,606" -draw "circle 1176,606 1181,606" "$T/og.png"
magick "$T/og.png" "$T/logo.png" -geometry +78+60 -composite "$T/og.png"
magick "$T/og.png" -font "$GI" -pointsize 52 -fill "$GOLDL" -annotate +80+276 "Sean & the crew" \
  -font "$HB" -pointsize 21 -kerning 4 -fill "$SAND" -annotate +82+316 "PRIVATE RED SEA BOAT TRIPS" \
  -stroke none -fill "$GOLD" -draw "roundrectangle 82,338 166,344 2,2" "$T/og.png"
labels=("WHATSAPP" "WEB" "TIKTOK" "FIND US")
values=("$PHONE" "luckyladytrips.com" "@RedSeaSean · $FOLLOWERS followers" "Soma Bay Marina · Hurghada, Egypt")
for i in 0 1 2 3; do
  yy=$((400 + i*44))
  magick "$T/og.png" -font "$HB" -pointsize 19 -kerning 2 -fill "$GOLD" -annotate +82+${yy} "${labels[$i]}" \
    -font "$HR" -pointsize 23 -fill "$SAND" -annotate +232+${yy} "${values[$i]}" "$T/og.png"
done
magick "$T/og.png" -font "$GIT" -pointsize 23 -fill "#FCF9F399" -annotate +82+580 "The price you see is the price you pay." "$T/og.png"
magick "$T/og.png" \( -size 276x276 xc:none -stroke "$GOLD" -strokewidth 5 -fill none -draw "circle 138,138 138,5" \) -geometry +787+96 -composite \
  "$T/av.png" -geometry +795+104 -composite "$T/og.png"
magick "$T/og.png" \( -size 158x158 xc:white \) -geometry +854+404 -composite "$T/qr.png" -geometry +861+411 -composite "$T/og.png"
magick "$T/og.png" -font "$HB" -pointsize 17 -kerning 2 -fill "$GOLDL" -annotate +866+590 "SCAN TO BOOK" "$T/og.png"
magick "$T/og.png" -quality 88 "$A/og-default.jpg"
rm -rf "$T"
echo "wrote $A/og-default.jpg"
