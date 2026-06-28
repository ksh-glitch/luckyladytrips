import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import AvailabilityForm from '../components/AvailabilityForm.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { Icon } from '../components/icons.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'
import { trackWhatsApp } from '../lib/analytics.js'
import { site } from '../data/site.js'
import { inclusionsStrip } from '../data/inclusions.js'
import { localBusinessSchema } from '../lib/schema.js'

export default function Contact() {
  return (
    <>
      <SEO
        title="Check Availability: Private Red Sea Boat Trips"
        description="Check availability for a private, all-inclusive Red Sea boat trip from Soma Bay or Hurghada. Send your dates and group size, and we reply personally on WhatsApp."
        path="/contact"
        schema={localBusinessSchema()}
      />

      <PageHero
        eyebrow="Check availability"
        title="Let's plan your Red Sea day"
        intro="Fill in a few details and we'll open WhatsApp with your enquiry ready to send. Prefer to type it yourself? Message us directly. We reply personally."
      />

      <section className="section pt-6">
        <div className="container grid gap-8 lg:grid-cols-[1.4fr_0.85fr] lg:gap-12">
          {/* Form */}
          <div>
            <AvailabilityForm />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <h2 className="font-display text-xl text-navy">Message us directly</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">The fastest way to check a date. We usually reply within a few hours.</p>
              <div className="mt-5">
                <WhatsAppButton fullWidth source="contact-sidebar" />
              </div>
              <div className="mt-4 space-y-3 text-sm">
                <a href={whatsappUrl(undefined, 'contact-number')} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('contact-number')} className="flex items-center gap-3 text-navy/75 hover:text-teal-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700"><Icon name="whatsapp" className="h-4 w-4" /></span>
                  {site.whatsappDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 text-navy/75 hover:text-teal-700">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700"><Icon name="mail" className="h-4 w-4" /></span>
                  {site.email}
                </a>
                <div className="flex items-center gap-3 text-navy/75">
                  <span className="flex h-9 w-9 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700"><Icon name="mapPin" className="h-4 w-4" /></span>
                  {site.baseLocation}
                </div>
              </div>
            </div>

            <div className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-navy/65">Always included</p>
              <ul className="mt-4 grid grid-cols-1 gap-2.5">
                {inclusionsStrip.map((it) => (
                  <li key={it.label} className="flex items-center gap-2.5 text-sm text-navy/75">
                    <Icon name="check" className="h-4 w-4 text-teal-600" />
                    {it.label}
                  </li>
                ))}
              </ul>
              <p className="mt-5 inline-flex items-center gap-2 rounded-full bg-gold-500/10 px-3 py-1.5 text-xs font-semibold text-navy">
                <Icon name="tag" className="h-3.5 w-3.5 text-gold-600" />
                The price you see is the price you pay
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}
