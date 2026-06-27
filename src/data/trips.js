// ---------------------------------------------------------------------------
//  Trip types.  `icon` maps to a key in components/icons.jsx.
//  `beats` tell the "anatomy of a day" — short, timed moments that sell the
//  experience, not the asset. Owner: adjust timings/wording to match reality.
// ---------------------------------------------------------------------------

export const trips = [
  {
    id: 'private-day-trips',
    name: 'Private Day Trips',
    icon: 'sun',
    bestFor: 'Couples, families & small groups',
    blurb:
      'A full day on the water, yours alone. Swim, snorkel, eat well and anchor wherever the sea looks best.',
    formValue: 'Private day trip',
    beats: [
      { time: 'Morning', label: 'Door-to-deck pickup', body: 'We collect you from your hotel and have you stepping aboard before the day heats up.' },
      { time: 'Late morning', label: 'First anchor', body: 'We find a quiet reef, drop in, and the snorkelling gear comes out for whoever wants it.' },
      { time: 'Midday', label: 'Lunch on the water', body: 'Fresh food and cold drinks served on board while the boat swings gently at anchor.' },
      { time: 'Golden hour', label: 'The slow way back', body: 'One last swim, then an easy cruise home as the light turns gold over Soma Bay.' },
    ],
  },
  {
    id: 'snorkelling-trips',
    name: 'Snorkelling Trips',
    icon: 'fish',
    bestFor: 'First-timers & reef lovers',
    blurb:
      'Quiet reefs, calm water and gear on board for everyone. Stops chosen for what is actually worth seeing.',
    formValue: 'Snorkelling trip',
    beats: [
      { time: 'Morning', label: 'Pickup & briefing', body: 'Collected from your hotel, then a quick, friendly run-through of the gear on the way out.' },
      { time: 'Late morning', label: 'The good reefs', body: 'We anchor at reefs chosen for clear water and what is actually worth seeing — not the busy spots.' },
      { time: 'Midday', label: 'Surface & refuel', body: 'Back aboard for lunch and a rest, then in again wherever the water looks best.' },
      { time: 'Afternoon', label: 'Home unhurried', body: 'A relaxed cruise back, salty and happy, with the gear rinsed and stowed for you.' },
    ],
  },
  {
    id: 'fishing-trips',
    name: 'Fishing Trips',
    icon: 'anchor',
    bestFor: 'Anglers & curious beginners',
    blurb:
      'Out early to the marks for trolling and bottom fishing. Tackle, bait and a crew who know the water.',
    formValue: 'Fishing trip',
    beats: [
      { time: 'Early', label: 'Out before the rest', body: 'An early pickup and a fast run to the marks while the water is glassy and still.' },
      { time: 'Morning', label: 'Lines in', body: 'Trolling and bottom fishing with tackle, bait and a crew who know where they are biting.' },
      { time: 'Midday', label: 'Lunch aboard', body: 'Pause for lunch on the water — and where it is allowed, we will cook what you have caught.' },
      { time: 'Afternoon', label: 'Back to the marina', body: 'A steady run home with the day’s stories and, hopefully, a cool box heavier than it left.' },
    ],
  },
  {
    id: 'sunset-cruises',
    name: 'Sunset Cruises',
    icon: 'sunset',
    bestFor: 'Couples & golden-hour evenings',
    blurb:
      'A slow run out as the light turns gold, a drink in hand, and the marina lights waiting on the way back.',
    formValue: 'Sunset cruise',
    beats: [
      { time: 'Late afternoon', label: 'Easy departure', body: 'Picked up as the heat drops, aboard, and out onto calm evening water.' },
      { time: 'Golden hour', label: 'The light show', body: 'A slow run along the coast as the sun goes down, a drink in hand, nowhere to be.' },
      { time: 'Dusk', label: 'Marina lights', body: 'We turn for home as the first lights come on along the bay.' },
    ],
  },
  {
    id: 'overnight-escapes',
    name: 'Overnight Escapes',
    icon: 'moon',
    bestFor: 'Groups wanting stars & sunrise',
    blurb:
      'Sleep aboard the catamaran at anchor. Dinner under the stars, a quiet night, and a swim before breakfast.',
    formValue: 'Overnight escape',
    beats: [
      { time: 'Afternoon', label: 'Out to anchor', body: 'Aboard the catamaran and out to a quiet anchorage with the rest of the day ahead of you.' },
      { time: 'Evening', label: 'Dinner under the stars', body: 'Dinner on deck as the sky fills in, then a quiet night at anchor with the sea for company.' },
      { time: 'Sunrise', label: 'First swim', body: 'Wake to flat water and an empty sea — a swim and breakfast before anyone else is out.' },
    ],
  },
  {
    id: 'custom-charters',
    name: 'Custom Charters',
    icon: 'compass',
    bestFor: 'Celebrations & bespoke days',
    blurb:
      'Birthdays, proposals, family reunions or just a day built your way. Tell us the plan and we arrange it.',
    formValue: 'Custom trip',
    beats: [
      { time: 'Before', label: 'Tell us the plan', body: 'Birthday, proposal, reunion or something only you would think of — you tell us, we make it happen.' },
      { time: 'The day', label: 'Built your way', body: 'Your route, your pace, your people. We arrange the boat, the food and the details around it.' },
      { time: 'Throughout', label: 'We handle the rest', body: 'You stay in the moment; pickup, crew, catering and timing are all quietly taken care of.' },
    ],
  },
]

// Trip-type options for the availability form dropdown
export const tripOptions = [
  'Private day trip',
  'Snorkelling trip',
  'Fishing trip',
  'Sunset cruise',
  'Overnight escape',
  'Catamaran charter',
  'Custom trip',
]
