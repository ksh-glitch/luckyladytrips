// ---------------------------------------------------------------------------
//  Trip types.  `icon` maps to a key in components/icons.jsx.
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
  },
  {
    id: 'snorkelling-trips',
    name: 'Snorkelling Trips',
    icon: 'fish',
    bestFor: 'First-timers & reef lovers',
    blurb:
      'Quiet reefs, calm water and gear on board for everyone. Stops chosen for what is actually worth seeing.',
    formValue: 'Snorkelling trip',
  },
  {
    id: 'fishing-trips',
    name: 'Fishing Trips',
    icon: 'anchor',
    bestFor: 'Anglers & curious beginners',
    blurb:
      'Out early to the marks for trolling and bottom fishing. Tackle, bait and a crew who know the water.',
    formValue: 'Fishing trip',
  },
  {
    id: 'sunset-cruises',
    name: 'Sunset Cruises',
    icon: 'sunset',
    bestFor: 'Couples & golden-hour evenings',
    blurb:
      'A slow run out as the light turns gold, a drink in hand, and the marina lights waiting on the way back.',
    formValue: 'Sunset cruise',
  },
  {
    id: 'overnight-escapes',
    name: 'Overnight Escapes',
    icon: 'moon',
    bestFor: 'Groups wanting stars & sunrise',
    blurb:
      'Sleep aboard the catamaran at anchor. Dinner under the stars, a quiet night, and a swim before breakfast.',
    formValue: 'Overnight escape',
  },
  {
    id: 'custom-charters',
    name: 'Custom Charters',
    icon: 'compass',
    bestFor: 'Celebrations & bespoke days',
    blurb:
      'Birthdays, proposals, family reunions or just a day built your way. Tell us the plan and we arrange it.',
    formValue: 'Custom trip',
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
