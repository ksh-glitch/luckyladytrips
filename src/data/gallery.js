import { images } from './images.js'

// ---------------------------------------------------------------------------
//  Photo gallery sections. Every entry is a real photo from /public/assets —
//  no placeholders, no stock. To add a photo: drop the file in /public/assets,
//  register it in images.js, then add { src, alt } to the right section here.
//  `clip` (optional) renders the boat's walk-around loop as the section lead.
//  The Locke's branded manufacturer shots (-sailing/-saloon) are left out on
//  purpose — the gallery shows only owned imagery.
// ---------------------------------------------------------------------------

const clips = '/assets/clips'

export const gallerySections = [
  {
    id: 'one-lucky-lady',
    title: 'One Lucky Lady',
    intro: 'The original. A day aboard usually starts at Soma Bay marina and ends somewhere golden.',
    clip: {
      src: `${clips}/one-lucky-lady-loop.mp4`,
      poster: `${clips}/one-lucky-lady-poster.webp`,
      alt: 'One Lucky Lady underway on the Red Sea',
    },
    photos: [
      { src: images.hero, alt: 'One Lucky Lady cruising calm turquoise water off Soma Bay' },
      { src: images.oneLuckyLadySomabay, alt: 'One Lucky Lady moored at Soma Bay marina, the Simply Somabay shoreline sign behind' },
      { src: images.oneLuckyLadyDeck, alt: 'The open rear deck of One Lucky Lady, set up for a day on the water' },
      { src: images.oneLuckyLadyBow, alt: 'Looking forward over the bow of One Lucky Lady at open sea' },
      { src: images.oneLuckyLadyMarina, alt: 'One Lucky Lady resting on flat, clear water near the coast' },
      { src: images.oneLuckyLadyCockpit, alt: 'The helm and cockpit of One Lucky Lady' },
      { src: images.oneLuckyLadyBeach, alt: 'One Lucky Lady anchored off a quiet beach' },
      { src: images.oneLuckyLadyNight, alt: 'One Lucky Lady lit with soft deck lighting at anchor after dark' },
    ],
  },
  {
    id: 'locke-catamaran',
    title: 'The Locke Catamaran',
    intro: 'Four cabins, a wide steady deck, and room for fourteen to spread out.',
    clip: {
      src: `${clips}/locke-catamaran-loop.mp4`,
      poster: `${clips}/locke-catamaran-poster.webp`,
      alt: 'The Locke Catamaran on the Red Sea',
    },
    photos: [
      { src: images.lockeCatamaran, alt: 'The Locke Catamaran on Red Sea water' },
      { src: images.lockeCatamaranForedeck, alt: 'The wide foredeck of the Locke Catamaran' },
      { src: images.lockeCatamaranSunpads, alt: 'Sun pads laid out on the Locke Catamaran' },
    ],
  },
  {
    id: 'private-speedboat',
    title: 'The Private Speedboat',
    intro: 'Twin Yamaha 200s. Fast to the reefs, faster to the fishing marks.',
    clip: {
      src: `${clips}/private-speedboat-loop.mp4`,
      poster: `${clips}/private-speedboat-poster.webp`,
      alt: 'The private speedboat on the Red Sea',
    },
    photos: [
      { src: images.privateSpeedboat, alt: 'The private speedboat moored on turquoise water' },
      { src: images.privateSpeedboatBow, alt: 'The bow of the private speedboat over clear shallows' },
      { src: images.privateSpeedboatEngines, alt: 'Twin Yamaha 200 engines on the private speedboat' },
    ],
  },
  {
    id: 'beneath-the-surface',
    title: 'Beneath the surface',
    intro: 'The reefs we anchor over — Tobia Arba, Ras Abu Soma and the quiet spots between.',
    photos: [
      { src: images.snorkelling, alt: 'Sunlit Red Sea reef with hard corals and shoals of fish, seen from just below the surface' },
      { src: images.reefClownfish, alt: 'Clownfish sheltering in an anemone on a Red Sea reef' },
      { src: images.reefFreediver, alt: 'A freediver gliding over Red Sea coral' },
    ],
  },
  {
    id: 'the-life',
    title: 'The crew & the life',
    intro: 'Sean, Justine, Adam and the days that made 18.9K people follow along.',
    photos: [
      { src: images.seanJustine, alt: 'Sean and Justine relaxing on the bow between stops' },
      { src: images.adamCrew, alt: 'Adam of the Lucky Lady crew aboard on a trip day' },
      { src: images.justineTiggySunset, alt: 'Justine and Tiggy the dog watching a Red Sea sunset from the deck' },
    ],
  },
]

// Flat list (in page order) so the lightbox can step through every photo.
export const galleryPhotos = gallerySections.flatMap((s) =>
  s.photos.map((p) => ({ ...p, section: s.title })),
)
