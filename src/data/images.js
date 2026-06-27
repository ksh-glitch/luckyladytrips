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
  logoHorizontal: `${base}/logo-horizontal.png`,
  logoStacked: `${base}/logo-stacked.png`,
  logoNavy: `${base}/logo-navy.png`,
  logoWhite: `${base}/logo-white.png`,
  logoEmblem: `${base}/logo-emblem.png`,
  ogDefault: `${base}/og-default.jpg`,
}
