import { images } from './images.js'

// ---------------------------------------------------------------------------
//  The three boats.  Edit prices, capacities and copy here.
//  `image` falls back to a gradient placeholder if the file isn't present yet.
// ---------------------------------------------------------------------------

export const boats = [
  {
    id: 'one-lucky-lady',
    name: 'One Lucky Lady',
    tagline: 'The original private Red Sea escape',
    positioning: 'The original private Red Sea escape',
    capacity: '4–6 guests',
    capacityMax: 6,
    priceFrom: 250,
    bestFor: 'Couples, families & small groups',
    uses: ['Snorkelling', 'Relaxing', 'Sunset cruises', 'Private day trips'],
    image: images.hero,
    imageAlt: 'One Lucky Lady private boat moored in the turquoise water at Soma Bay marina',
    gallery: [
      { src: images.oneLuckyLady, alt: 'One Lucky Lady stern with cushioned deck seating' },
      { src: images.oneLuckyLadyDeck, alt: 'One Lucky Lady bow and helm in golden afternoon light' },
      { src: images.oneLuckyLadyNight, alt: 'One Lucky Lady lit up with blue deck lighting after dark' },
    ],
    hasRealPhoto: true,
    dayAboard:
      'Just you and yours. A couple stretched out on the bow, the kids daring each other off the back, a long lunch at anchor. Small enough to feel like your own boat, easy enough that you lose track of the time.',
    blurb:
      'The boat that started it all. One Lucky Lady is our intimate cruiser: easy, comfortable and yours for the day. Perfect for a couple, a family or a small group who want the Red Sea to themselves without the crowds.',
    highlights: [
      'Shaded cockpit and sun-pad bow for lazy afternoons',
      'Snorkelling straight off the back at quiet reefs',
      'Ideal for sunset cruises and golden-hour swims',
    ],
    placeholderGradient: 'from-sea-700 via-teal-600 to-teal-400',
  },
  {
    id: 'locke-catamaran',
    name: 'Locke Catamaran',
    tagline: 'Spacious, stable, made for groups',
    positioning: 'Spacious, stable, made for groups',
    capacity: 'Up to 14 guests',
    capacityMax: 14,
    rooms: 4,
    priceFrom: 450,
    bestFor: 'Larger groups, families & celebrations',
    uses: ['Group day trips', 'Celebrations', 'Custom charters', 'Overnight escapes'],
    image: images.lockeCatamaran,
    imageAlt: 'The Locke Catamaran, a spacious multi-deck catamaran for up to 14 guests',
    gallery: [],
    hasRealPhoto: false,
    dayAboard:
      'Room for the whole party. Two hulls, four cabins and decks wide enough to spread right out. This is the boat for the birthday that runs late, the family that travels deep, and the night that drifts into sunrise at anchor.',
    blurb:
      'Room to spread out. The Locke Catamaran carries up to 14 guests across two hulls with four cabins below: stable underfoot, generous on deck, and built for the days that turn into celebrations. The natural choice for bigger groups and overnight escapes.',
    highlights: [
      'Four cabins for changing, resting or staying overnight',
      'Wide, stable decks, kind to first-timers and kids',
      'Made for birthdays, family days and group charters',
    ],
    placeholderGradient: 'from-navy-900 via-sea-700 to-teal-600',
  },
  {
    id: 'private-speedboat',
    name: 'Private Speedboat',
    tagline: 'Fast, private, built for adventure',
    positioning: 'Fast, private, built for adventure',
    capacity: '4–6 guests',
    capacityMax: 6,
    priceFrom: 150,
    bestFor: 'Anglers & quick private runs',
    uses: ['Fishing trips', 'Quick escapes', 'Snorkelling stops', 'Fast Red Sea runs'],
    image: images.privateSpeedboat,
    imageAlt: 'The Private Speedboat, fast and agile for fishing and quick Red Sea runs',
    gallery: [],
    hasRealPhoto: false,
    // name can be swapped later if the boat is named
    renameable: true,
    dayAboard:
      'Quick and quiet. First out to the marks at dawn, first into a calm bay before the crowd arrives, and back whenever you please. A nimble, private way to fish, snorkel, or simply outrun the tourist boats.',
    blurb:
      'When you want to move. Quick to the reefs, quick to the fishing marks, and quick to a quiet bay before anyone else arrives. Our speedboat is the agile option for anglers and small groups who like a bit of pace with their privacy.',
    highlights: [
      'First to the best marks for a morning of fishing',
      'Nimble enough to chase the calmest, quietest water',
      'A fast, private alternative to the big tourist boats',
    ],
    placeholderGradient: 'from-teal-700 via-sea-700 to-sea-500',
  },
]

export const boatById = Object.fromEntries(boats.map((b) => [b.id, b]))

// Options for the availability form's boat dropdown
export const boatOptions = [
  'Not sure, recommend the best boat',
  ...boats.map((b) => b.name),
]

// Per-person equivalent of the whole-boat "from" price. Used to clarify that
// e.g. €450 is the whole boat (up to 14), not a per-head rate. Derived so it
// stays correct if a price or capacity changes.
export const perPerson = (boat) => Math.round(boat.priceFrom / boat.capacityMax)
