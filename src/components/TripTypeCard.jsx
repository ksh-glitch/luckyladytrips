import { Icon } from './icons.jsx'
import { enquiryFor, whatsappUrl } from '../lib/whatsapp.js'
import { trackWhatsApp } from '../lib/analytics.js'

/**
 * Trip-type card — icon, name, who it's best for, short blurb, WhatsApp link.
 */
export default function TripTypeCard({ trip }) {
  return (
    <a
      href={whatsappUrl(enquiryFor({ trip: trip.formValue }))}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(`trip-card:${trip.id}`)}
      className="card group flex flex-col p-6 transition-all duration-300 ease-smooth hover:-translate-y-1 hover:border-teal-600/30 hover:shadow-card focus-visible:-translate-y-1"
    >
      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-600/15 to-sea-500/10 text-teal-700 transition-colors duration-300 group-hover:from-teal-600 group-hover:to-teal-500 group-hover:text-white">
        <Icon name={trip.icon} className="h-6 w-6" />
      </span>
      <h3 className="mt-5 font-display text-xl text-navy">{trip.name}</h3>
      <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold-700">{trip.bestFor}</p>
      <p className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-navy/65">{trip.blurb}</p>
      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
        Check availability
        <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </span>
    </a>
  )
}
