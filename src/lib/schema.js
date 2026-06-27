import { site } from '../data/site.js'
import { images } from '../data/images.js'

const abs = (p) => (p?.startsWith('http') ? p : `${site.url}${p}`)

// LocalBusiness / TravelAgency — included site-wide (in App).
export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'TravelAgency'],
    '@id': `${site.url}/#business`,
    name: site.name,
    description: site.shortDesc,
    url: site.url,
    image: abs(images.ogDefault),
    logo: abs(images.logoStacked),
    telephone: `+${site.whatsappNumber}`,
    priceRange: '€€',
    currenciesAccepted: 'EUR, EGP, GBP, USD',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Soma Bay',
      addressRegion: 'Red Sea Governorate',
      addressCountry: 'EG',
    },
    geo: { '@type': 'GeoCoordinates', latitude: 26.8466, longitude: 33.9876 },
    areaServed: site.serviceAreas.map((name) => ({ '@type': 'Place', name })),
    sameAs: [site.social.tiktok, site.social.instagram, site.social.tiktokSean].filter(Boolean),
    knowsLanguage: ['en', 'ar'],
  }
}

export function faqSchema(faqs = []) {
  if (!faqs.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function breadcrumbSchema(items = []) {
  if (!items.length) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: abs(it.path),
    })),
  }
}

// Boat as a bookable Product/Offer
export function boatSchema(boat) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: `${boat.name} — Private Red Sea Charter`,
    description: boat.blurb,
    image: abs(boat.image),
    brand: { '@type': 'Brand', name: site.name },
    offers: {
      '@type': 'Offer',
      price: boat.priceFrom,
      priceCurrency: 'EUR',
      availability: 'https://schema.org/InStock',
      url: `${site.url}/boats`,
    },
  }
}
