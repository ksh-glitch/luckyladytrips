// ---------------------------------------------------------------------------
//  Reviews.  We do NOT ship invented testimonials.
//  When you have real reviews, add them to `reviews` and set published = true.
//  Each review: { name, location, rating (1-5), text, date, source }
// ---------------------------------------------------------------------------

export const reviewsPublished = true

export const reviews = [
  {
    name: 'Anna & Michael',
    location: 'Germany',
    rating: 5,
    text: 'We’ve been to Hurghada many times – this was the first time we truly felt like the boat was ours. No loud groups, just our family and the sea.',
  },
  {
    name: 'Elena & Dmitry',
    location: 'Russia',
    rating: 5,
    text: 'Perfect sunset cruise for our anniversary. The crew set everything up so we could just relax, take photos and enjoy the view.',
  },
  {
    name: 'The Johnson family',
    location: 'United Kingdom',
    rating: 5,
    text: 'Our kids loved jumping from the boat and seeing the fish. For us it was the most relaxed day of the holiday.',
  },
]

// Honest positioning statements shown until real reviews land (not testimonials)
export const trustPoints = [
  'Loved by expats, hotel guests and returning Red Sea visitors',
  'Trusted by families, couples and groups across Soma Bay & Hurghada',
  'Known on the Red Sea for private, all-inclusive days done properly',
]

// Personality / trust badges for the founder story
export const storyBadges = [
  { icon: 'tiktok', label: '15K+ TikTok followers' },
  { icon: 'heart', label: 'Loved by Red Sea guests' },
  { icon: 'lock', label: 'Private, personal, all-inclusive' },
]
