// ---------------------------------------------------------------------------
//  Central brand + site configuration.  Edit copy, contact details and nav here.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Lucky Lady Trips',
  legalName: 'Lucky Lady Trips',
  tagline: 'Three private boats. One all-inclusive Red Sea experience.',
  shortDesc:
    'Private, all-inclusive Red Sea boat trips from Soma Bay & Hurghada — food, drinks, pickup, towels and snorkelling gear included.',
  url: 'https://luckyladytrips.com',
  domain: 'luckyladytrips.com',

  // Contact
  whatsappNumber: '201205726571', // E.164 without the +, used for wa.me links
  whatsappDisplay: '+20 120 572 6571',
  email: 'sean@luckyladytrips.com',

  // Service area
  baseLocation: 'Soma Bay, Red Sea, Egypt',
  locations: ['Soma Bay', 'Hurghada', 'Red Sea'],
  serviceAreas: ['Soma Bay', 'Hurghada', 'Safaga', 'Red Sea Governorate'],

  // Social
  social: {
    tiktok: 'https://www.tiktok.com/@luckyladyeg', // business account
    tiktokSean: 'https://www.tiktok.com/@redseasean', // Sean's personal (15K+ followers)
    instagram: 'https://www.instagram.com/one_lucky_lady_boat_trips/',
    tiktokFollowers: '15K+',
  },
}

// Main navigation (header + footer)
export const nav = [
  { label: 'Boats', to: '/boats' },
  { label: 'Trips', to: '/trips' },
  { label: 'About', to: '/about' },
  { label: 'Reviews', to: '/reviews' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
]

// Popular SEO landing pages surfaced in the footer for internal linking
export const footerExplore = [
  { label: 'Soma Bay Boat Trips', to: '/soma-bay-boat-trips' },
  { label: 'Hurghada Private Boat Trips', to: '/hurghada-private-boat-trips' },
  { label: 'Red Sea Catamaran Charter', to: '/red-sea-catamaran-charter' },
  { label: 'Soma Bay Snorkelling Trips', to: '/soma-bay-snorkelling-trips' },
  { label: 'Hurghada Fishing Trips', to: '/hurghada-fishing-trips' },
  { label: 'Overnight Boat Trips', to: '/red-sea-overnight-boat-trips' },
  { label: 'All-Inclusive Boat Trips', to: '/all-inclusive-boat-trips-hurghada' },
  { label: 'Private Yacht Charter', to: '/private-yacht-charter-soma-bay' },
]
