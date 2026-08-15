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
  oneLuckyLadyBeach: `${base}/one-lucky-lady-beach.webp`,
  oneLuckyLadyBow: `${base}/one-lucky-lady-bow.webp`,
  oneLuckyLadyCockpit: `${base}/one-lucky-lady-cockpit.webp`,

  // People / story (real photography)
  seanJustine: `${base}/sean-justine.webp`,
  seanPortrait: `${base}/sean-portrait.webp`,
  adamCrew: `${base}/adam-crew.webp`,
  justineTiggySunset: `${base}/justine-tiggy-sunset.webp`,

  // Locke Catamaran (real photography — Bali catamaran)
  lockeCatamaran: `${base}/locke-catamaran.webp`, // 4:3 crop of the sailing shot
  lockeCatamaranSailing: `${base}/locke-catamaran-sailing.webp`, // full portrait under sail
  lockeCatamaranSaloon: `${base}/locke-catamaran-saloon.webp`, // saloon dining with sea view

  // Speedboat awaiting its own photo — drop this file in to replace the placeholder:
  //   /public/assets/private-speedboat.webp
  privateSpeedboat: `${base}/private-speedboat.webp`,

  // Reef / snorkelling (real photography, local reefs)
  snorkelling: `${base}/snorkelling-red-sea.webp`, // sunlit reef panorama with fish
  reefClownfish: `${base}/reef-clownfish.webp`,
  reefFreediver: `${base}/reef-freediver.webp`,

  // Optional supporting photos (drop in to replace placeholders):
  foodOnBoard: `${base}/food-on-board.webp`,
  cabin: `${base}/cabin-or-room.webp`,

  // Brand
  logoPrimary: `${base}/logo-51.png`, // macaw emblem + "Lucky Lady Trips" horizontal lockup (header)
  logoHorizontal: `${base}/logo-horizontal.png`,
  logoStacked: `${base}/logo-stacked.png`,
  logoNavy: `${base}/logo-navy.png`,
  logoWhite: `${base}/logo-white.png`,
  logoEmblem: `${base}/logo-emblem.png`,
  ogDefault: `${base}/og-lucky-lady.jpg`, // 80s synthwave share card: flying macaw + One Lucky Lady cruiser, "Private Red Sea Boat Trips" (Sean kept as a small badge)
}
