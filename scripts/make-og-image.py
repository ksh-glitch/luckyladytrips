#!/usr/bin/env python3
import math

W, H = 1200, 630

# ---- brand palette ----
NAVY_DEEP = "#04102A"
NAVY = "#0B2545"
TEAL = "#0E7A82"
TEAL_D = "#0B4F57"
TEAL_L = "#1AA0A9"
GOLD = "#E2B257"
GOLD_L = "#F6CE78"
CORAL = "#E0608A"
PEACH = "#F4946A"
SAND = "#FCF9F3"

sun_cx, sun_cy, sun_r = 600, 486, 168
horizon = 432

parts = []
parts.append(f'<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="{W}" height="{H}" viewBox="0 0 {W} {H}">')

# ---------- defs ----------
parts.append('<defs>')
parts.append(f'''<linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="{NAVY_DEEP}"/>
  <stop offset="0.30" stop-color="#22265F"/>
  <stop offset="0.52" stop-color="{CORAL}"/>
  <stop offset="0.70" stop-color="{PEACH}"/>
  <stop offset="0.80" stop-color="{GOLD_L}"/>
</linearGradient>''')
parts.append(f'''<radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
  <stop offset="0" stop-color="#FFF6DC"/>
  <stop offset="0.45" stop-color="{GOLD_L}"/>
  <stop offset="1" stop-color="{GOLD}"/>
</radialGradient>''')
parts.append(f'''<radialGradient id="sunGlow" cx="0.5" cy="0.5" r="0.5">
  <stop offset="0" stop-color="{GOLD_L}" stop-opacity="0.9"/>
  <stop offset="1" stop-color="{GOLD_L}" stop-opacity="0"/>
</radialGradient>''')
parts.append(f'''<radialGradient id="logoGlow" cx="0.5" cy="0.5" r="0.5">
  <stop offset="0" stop-color="{SAND}" stop-opacity="0.18"/>
  <stop offset="1" stop-color="{SAND}" stop-opacity="0"/>
</radialGradient>''')
parts.append(f'''<linearGradient id="sea1" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="{TEAL_L}"/><stop offset="1" stop-color="{TEAL}"/></linearGradient>''')
parts.append(f'''<linearGradient id="sea2" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="{TEAL}"/><stop offset="1" stop-color="{TEAL_D}"/></linearGradient>''')
parts.append(f'''<linearGradient id="sea3" x1="0" y1="0" x2="0" y2="1">
  <stop offset="0" stop-color="{TEAL_D}"/><stop offset="1" stop-color="{NAVY}"/></linearGradient>''')
# grain
parts.append('''<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" stitchTiles="stitch"/>
  <feColorMatrix type="saturate" values="0"/></filter>''')
# soft drop shadow for text
parts.append('''<filter id="tshadow" x="-20%" y="-20%" width="140%" height="140%">
  <feDropShadow dx="0" dy="3" stdDeviation="6" flood-color="#04102A" flood-opacity="0.55"/></filter>''')
parts.append('</defs>')

# ---------- sky ----------
parts.append(f'<rect width="{W}" height="{H}" fill="url(#sky)"/>')

# ---------- sun glow ----------
parts.append(f'<circle cx="{sun_cx}" cy="{sun_cy}" r="360" fill="url(#sunGlow)"/>')

# ---------- sunburst rays (op-art) ----------
rays = []
n = 40
for i in range(n):
    a = (360.0 / n) * i
    # only draw rays that point generally upward / outward across whole circle but fade lower ones
    rad = math.radians(a)
    spread = math.radians(360.0 / n * 0.42)
    L = 760
    x1 = sun_cx + math.cos(rad - spread) * sun_r * 0.6
    y1 = sun_cy + math.sin(rad - spread) * sun_r * 0.6
    x2 = sun_cx + math.cos(rad + spread) * sun_r * 0.6
    y2 = sun_cy + math.sin(rad + spread) * sun_r * 0.6
    tx = sun_cx + math.cos(rad) * L
    ty = sun_cy + math.sin(rad) * L
    op = 0.16 if i % 2 == 0 else 0.09
    rays.append(f'<polygon points="{x1:.1f},{y1:.1f} {x2:.1f},{y2:.1f} {tx:.1f},{ty:.1f}" fill="{GOLD_L}" opacity="{op}"/>')
parts.append(f'<g>{"".join(rays)}</g>')

# ---------- sparkles / stars ----------
import random
random.seed(7)
stars = []
def star(cx, cy, s, op):
    pts = []
    for k in range(8):
        ang = math.radians(45*k - 90)
        r = s if k % 2 == 0 else s*0.38
        pts.append(f'{cx+math.cos(ang)*r:.1f},{cy+math.sin(ang)*r:.1f}')
    return f'<polygon points="{" ".join(pts)}" fill="{SAND}" opacity="{op}"/>'
for (cx, cy, s, op) in [(180,90,11,0.9),(1040,70,14,0.95),(980,150,7,0.7),(250,170,6,0.6),(1110,210,8,0.7),(120,250,7,0.6),(760,70,9,0.8),(430,60,6,0.55)]:
    stars.append(star(cx,cy,s,op))
parts.append("".join(stars))

# ---------- sun disc ----------
parts.append(f'<circle cx="{sun_cx}" cy="{sun_cy}" r="{sun_r}" fill="url(#sun)"/>')
# eccentric sun "scan lines"
for yy in range(int(sun_cy - sun_r*0.2), int(sun_cy + sun_r), 16):
    half = math.sqrt(max(0, sun_r**2 - (yy - sun_cy)**2))
    parts.append(f'<rect x="{sun_cx-half:.1f}" y="{yy}" width="{2*half:.1f}" height="5" fill="{PEACH}" opacity="0.35"/>')

# ---------- sea: layered waves ----------
def wave_path(base_y, amp, wl, fill, op=1.0, phase=0.0):
    pts = [f'M -20 {base_y:.1f}']
    x = -20
    step = wl/2
    up = True
    while x < W+40:
        nx = x + step
        cy = base_y - amp if up else base_y + amp*0.4
        pts.append(f'Q {(x+nx)/2:.1f} {cy:.1f} {nx:.1f} {base_y:.1f}')
        x = nx
        up = not up
    pts.append(f'L {W+40} {H+40} L -20 {H+40} Z')
    return f'<path d="{" ".join(pts)}" fill="{fill}" opacity="{op}"/>'

parts.append(wave_path(horizon, 10, 150, "url(#sea1)"))
parts.append(wave_path(horizon+44, 14, 200, "url(#sea2)"))
parts.append(wave_path(horizon+104, 18, 260, "url(#sea3)"))

# little gold glints on the water
for (gx, gy, gw) in [(520,470,70),(640,500,90),(420,512,60),(720,470,50),(560,540,110),(360,560,70)]:
    parts.append(f'<ellipse cx="{gx}" cy="{gy}" rx="{gw}" ry="3" fill="{GOLD_L}" opacity="0.5"/>')

# ---------- boat silhouette riding a wave ----------
bx, by = 858, 452
boat = f'''<g transform="translate({bx},{by})">
  <path d="M -52 8 Q -40 30 0 30 Q 40 30 52 8 L 40 8 L -40 8 Z" fill="{NAVY}"/>
  <rect x="-34" y="-2" width="68" height="10" rx="3" fill="{SAND}"/>
  <path d="M -30 -2 L -26 -34 L 30 -34 L 34 -2 Z" fill="{NAVY}"/>
  <rect x="-3" y="-58" width="3" height="26" fill="{NAVY}"/>
  <path d="M 0 -56 L 22 -44 L 0 -38 Z" fill="{GOLD}"/>
</g>'''
parts.append(boat)

# ---------- palm silhouettes framing ----------
def palm(x0, flip=False):
    s = -1 if flip else 1
    g = f'<g transform="translate({x0},{H}) scale({s},1)">'
    g += f'<path d="M 0 0 C 6 -120 -2 -210 26 -262 C 8 -250 4 -230 2 -210 C 18 -240 40 -252 70 -250 C 44 -244 26 -228 16 -206 C 40 -226 78 -228 104 -212 C 70 -212 44 -200 28 -184 C 52 -196 86 -190 108 -170 C 76 -176 48 -170 30 -156 C 30 -120 26 -60 18 0 Z" fill="{NAVY_DEEP}" opacity="0.96"/>'
    g += '</g>'
    return g
parts.append(palm(96))
parts.append(palm(1104, flip=True))

# ---------- tagline ----------
parts.append(f'''<text x="600" y="252" text-anchor="middle" filter="url(#tshadow)"
  font-family="Georgia, 'Times New Roman', serif" font-size="74" font-style="italic" font-weight="bold" fill="{SAND}">Private Red Sea days,</text>''')
parts.append(f'''<text x="600" y="330" text-anchor="middle" filter="url(#tshadow)"
  font-family="Georgia, 'Times New Roman', serif" font-size="74" font-style="italic" font-weight="bold" fill="{GOLD_L}">made effortless.</text>''')
# eccentric kicker pill
parts.append(f'''<g transform="translate(600,372)">
  <rect x="-232" y="-19" width="464" height="38" rx="19" fill="{NAVY_DEEP}" opacity="0.55" stroke="{GOLD}" stroke-opacity="0.6"/>
  <text x="0" y="6" text-anchor="middle" font-family="Helvetica, Arial, sans-serif" font-size="20" letter-spacing="3" font-weight="bold" fill="{SAND}">THREE BOATS · ONE UNFORGETTABLE DAY</text>
</g>''')

# ---------- footer chip ----------
wa = f'''<g transform="translate(-150,-14) scale(0.052)">
  <path fill="#25D366" d="M256 0C115 0 0 115 0 256c0 45 12 88 33 126L0 512l136-32c36 19 77 30 120 30 141 0 256-115 256-256S397 0 256 0z"/>
  <path fill="#fff" d="M380 320c-6 16-33 30-46 31-12 1-22 5-74-15-62-26-101-89-104-93-3-4-25-33-25-63s16-45 21-51c6-6 12-7 16-7l12 0c4 0 9-1 14 11 5 12 17 42 18 45 2 3 3 7 1 11-2 4-3 7-6 10-3 4-6 8-9 11-3 3-6 6-3 12 3 6 14 23 30 37 21 18 38 24 44 27 6 3 9 2 12-1 3-4 14-16 18-22 4-6 8-5 13-3 5 2 33 16 39 19 6 3 10 4 11 7 1 2 1 11-5 27z"/>
</g>'''
parts.append(f'''<g transform="translate(600,586)">
  <rect x="-300" y="-26" width="600" height="52" rx="26" fill="{NAVY_DEEP}" opacity="0.62" stroke="{SAND}" stroke-opacity="0.18"/>
  <g transform="translate(-150,2)">{wa}</g>
  <text x="-120" y="7" font-family="Helvetica, Arial, sans-serif" font-size="22" font-weight="bold" fill="{SAND}">Tap to come aboard</text>
  <text x="270" y="7" text-anchor="end" font-family="Helvetica, Arial, sans-serif" font-size="20" fill="{GOLD_L}">@redseasean</text>
</g>''')

# ---------- soft light behind the logo (top-left) so it pops on the dark sky ----------
parts.append('<ellipse cx="244" cy="118" rx="310" ry="150" fill="url(#logoGlow)"/>')

# ---------- grain overlay ----------
parts.append(f'<rect width="{W}" height="{H}" filter="url(#grain)" opacity="0.06"/>')
# thin poster frame
parts.append(f'<rect x="14" y="14" width="{W-28}" height="{H-28}" rx="18" fill="none" stroke="{SAND}" stroke-opacity="0.25" stroke-width="2"/>')

parts.append('</svg>')

open("og.svg", "w").write("\n".join(parts))
print("wrote og.svg")
