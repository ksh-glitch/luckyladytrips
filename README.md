# Lucky Lady Trips

Premium, mobile-first marketing site for **Lucky Lady Trips** — private, all-inclusive
Red Sea boat trips from Soma Bay & Hurghada, Egypt.

> Three private boats. One all-inclusive Red Sea experience.
> The price you see is the price you pay.

Built as a fast, statically pre-rendered site (great for SEO + Lighthouse) with
**Vite + React + Tailwind CSS + vite-react-ssg**. Booking for v1 is a **WhatsApp
enquiry flow** — no backend required.

---

## 1. Run locally

```bash
npm install        # install dependencies
npm run dev        # start dev server  →  http://localhost:5173
npm run build      # production build (static HTML per route) → /dist
npm run preview    # preview the production build locally
```

Node 18+ recommended.

### Deploy to Netlify
- Build command: `npm run build`
- Publish directory: `dist`
- `public/_redirects` already handles the SPA fallback (`/* /index.html 200`).
- Point the domain `luckyladytrips.com` at the Netlify site.

Each route is pre-rendered to its own `index.html` (e.g. `/boats/index.html`), so
crawlers and social scrapers see real titles, meta tags and JSON-LD.

---

## 2. Replace the photos

All imagery is referenced from one file: **`src/data/images.js`**.

To swap a photo, drop a file into **`public/assets/`** and point the matching key at
it. Filenames currently used (all WebP for performance):

| Key in images.js        | File                                   | Used for |
|-------------------------|----------------------------------------|----------|
| `hero`                  | `hero-one-lucky-lady.webp`             | Homepage hero |
| `oneLuckyLady`          | `one-lucky-lady.webp`                  | Boat card / fishing page |
| `oneLuckyLadyDeck`      | `one-lucky-lady-deck.webp`             | Snorkelling page |
| `oneLuckyLadyMarina`    | `one-lucky-lady-marina.webp`           | About / Hurghada page |
| `oneLuckyLadySomabay`   | `one-lucky-lady-somabay.webp`          | Soma Bay page |
| `oneLuckyLadyNight`     | `one-lucky-lady-night.webp`            | Final CTA / overnight page |
| `seanJustine`           | `sean-justine.webp`                    | Story collage / catamaran page |
| `seanPortrait`          | `sean-portrait.webp`                   | Story / About |
| `justineTiggySunset`    | `justine-tiggy-sunset.webp`            | Story / yacht charter page |
| `adamCrew`              | `adam-crew.webp`                       | (available) crew |
| `lockeCatamaran`        | `locke-catamaran.webp` *(add this)*    | Locke Catamaran boat photo |
| `privateSpeedboat`      | `private-speedboat.webp` *(add this)*  | Speedboat photo |

**Missing photos fall back to an elegant gradient placeholder automatically**
(see `src/components/SmartImage.jsx`). The Locke Catamaran and Private Speedboat
currently show "photo coming soon" placeholders — drop in real photos named as above
and set `hasRealPhoto: true` for that boat in `src/data/boats.js` to make them appear.

> Tip: keep hero/section images ~1400–1600px wide and export as WebP (~80% quality).

### Logo & favicons
- Logos: `public/assets/logo-horizontal.png` (header), `logo-white.png` (footer),
  `logo-stacked.png`, `logo-navy.png`, `logo-emblem.png`, `logo.svg`.
- Favicons / touch icons live in `public/` (`favicon.ico`, `favicon-32.png`, etc.).
- Social share image: `public/assets/og-default.jpg` (1200×630).

---

## 3. Edit prices, boats, trips & copy

Everything content-related lives in **`src/data/`** — no need to touch components.

| File | What it controls |
|------|------------------|
| `src/data/site.js` | Business name, WhatsApp number, email, locations, nav, footer links |
| `src/data/boats.js` | The three boats: names, **prices**, capacities, taglines, copy, gallery |
| `src/data/trips.js` | Trip types (day trips, snorkelling, fishing, sunset, overnight, custom) |
| `src/data/inclusions.js` | What's included + the "no extras" differentiators |
| `src/data/faqs.js` | FAQ questions/answers (also powers FAQ schema) |
| `src/data/reviews.js` | Reviews + trust points (see below) |
| `src/data/seoPages.js` | The 8 SEO landing pages (unique copy, FAQs, featured boats) |
| `src/data/images.js` | Image paths |

**Change a price:** edit `priceFrom` for that boat in `src/data/boats.js`. It updates
everywhere (cards, boat page, schema).

**WhatsApp number / message:** `src/data/site.js` (`whatsappNumber`) and the templates
in `src/lib/whatsapp.js`.

### Adding real reviews
`src/data/reviews.js` ships with **no fake testimonials**. When you have real ones:
1. Add objects to the `reviews` array (`name`, `location`, `rating`, `text`, `source`).
2. Set `reviewsPublished = true`.
The Reviews page and homepage will switch from the "coming soon" state to real cards.

### Brand colours & fonts
`tailwind.config.js` — sand/navy/teal/gold/sea palette and the Fraunces (display) +
Plus Jakarta Sans (body) fonts. Global styles & component classes (`.btn`, `.card`,
`.eyebrow`, etc.) are in `src/styles/globals.css`.

---

## 4. Project structure

```
public/            favicons, _redirects, robots.txt, site.webmanifest, assets/ (images, logos)
scripts/           generate-sitemap.mjs (runs automatically on build)
src/
  components/      Header, MobileMenu, Footer, StickyMobileCTA, WhatsAppButton,
                   BoatCard, InclusionIcon, TripTypeCard, StorySection, ReviewCard,
                   SocialProof, FAQAccordion, AvailabilityForm, SEO, SEOPageTemplate,
                   SectionHeading, PageHero, SmartImage, Reveal, Logo, Button, icons
  data/            boats, trips, inclusions, faqs, reviews, seoPages, site, images
  lib/             whatsapp (enquiry builders), schema (JSON-LD), cn
  pages/           Home, Boats, Trips, About, Reviews, FAQ, Contact, SEOPage, NotFound
  styles/          globals.css (design system)
  App.jsx          layout shell (header / outlet / footer / sticky CTA)
  routes.jsx       route table (static routes are pre-rendered)
  main.jsx         vite-react-ssg entry
```

---

## 5. Assumptions made

- **Photos available** were only of *One Lucky Lady* (plus Sean, Justine, Adam, Tiggy).
  The **Locke Catamaran** and **Private Speedboat** therefore show tasteful gradient
  placeholders until real photos are added. SEO-page heroes reuse real One Lucky Lady /
  family photos (the pages are about the experience, not a specific hull).
- **Private Speedboat** is kept as a generic name and marked `renameable` in the data so
  a real name can be dropped in later.
- **Reviews** are intentionally not fabricated — placeholder/trust state ships until real
  ones are added.
- **Email** `hello@luckyladytrips.com` is a placeholder — update in `src/data/site.js`.
- **TikTok URL** assumes `tiktok.com/@luckyladytrips` — update in `src/data/site.js`.
- **Geo coordinates** for the LocalBusiness schema use Soma Bay's approximate location.
- British spelling is used in body copy (snorkelling, organise, harbour).
- Currency shown is EUR ("from €…"), matching the brief's prices.
```
