// ---------------------------------------------------------------------------
//  Single source of truth for image paths.  To swap a photo, drop a new file
//  into /public/assets and point the key below at it — nothing else changes.
//  Files that don't exist yet fall back to an elegant gradient placeholder
//  (see <SmartImage>), so the layout never breaks.
// ---------------------------------------------------------------------------

const base = '/assets'

export const images = {
  // Hero / One Lucky Lady (real photography)
  hero: `${base}/hero-one-lucky-lady.webp`,
  // Optional cinematic hero loop (One Lucky Lady underway, graded). When a real
  // ~2-5MB muted loop exists at /public/assets, point this at it and the hero
  // upgrades automatically (poster stays the LCP element). Keep null until then.
  heroVideo: null, // e.g. `${base}/hero-one-lucky-lady.mp4`
  oneLuckyLady: `${base}/one-lucky-lady.webp`,
  oneLuckyLadyDeck: `${base}/one-lucky-lady-deck.webp`,
  oneLuckyLadyMarina: `${base}/one-lucky-lady-marina.webp`,
  oneLuckyLadySomabay: `${base}/one-lucky-lady-somabay.webp`,
  oneLuckyLadyNight: `${base}/one-lucky-lady-night.webp`,

  // People / story (real photography)
  seanJustine: `${base}/sean-justine.webp`,
  seanPortrait: `${base}/sean-portrait.webp`,
  adamCrew: `${base}/adam-crew.webp`,
  justineTiggySunset: `${base}/justine-tiggy-sunset.webp`,

  // Boats awaiting their own photos — drop these files in to replace placeholders:
  //   /public/assets/locke-catamaran.webp
  //   /public/assets/private-speedboat.webp
  lockeCatamaran: `${base}/locke-catamaran.webp`,
  privateSpeedboat: `${base}/private-speedboat.webp`,

  // Optional supporting photos (drop in to replace placeholders):
  foodOnBoard: `${base}/food-on-board.webp`,
  snorkelling: `${base}/snorkelling-red-sea.webp`,
  cabin: `${base}/cabin-or-room.webp`,

  // Brand
  logoPrimary: `${base}/logo-primary.png`, // emblem + "Lucky Lady Trips" lockup (header)
  logoHorizontal: `${base}/logo-horizontal.png`,
  logoStacked: `${base}/logo-stacked.png`,
  logoNavy: `${base}/logo-navy.png`,
  logoWhite: `${base}/logo-white.png`,
  logoEmblem: `${base}/logo-emblem.png`,
  ogDefault: `${base}/og-poster.jpg`, // eccentric Red Sea sunset share card (gen: scripts/make-og-image.py)
}
