import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { Icon } from '../components/icons.jsx'
import { site } from '../data/site.js'
import { faqs } from '../data/faqs.js'
import { localBusinessSchema, faqSchema } from '../lib/schema.js'

export default function FAQ() {
  return (
    <>
      <SEO
        title="FAQ — Private Red Sea Boat Trips"
        description="Answers on what's included, private trips, pickup, choosing a boat, weather, children, custom trips and how to check availability with Lucky Lady Trips."
        path="/faq"
        schema={[localBusinessSchema(), faqSchema(faqs)]}
      />

      <PageHero
        eyebrow="Good to know"
        title="Everything you might want to ask"
        intro="If your question isn't here, message us on WhatsApp — Sean and the crew reply personally."
      >
        <WhatsAppButton size="lg" />
      </PageHero>

      <section className="section pt-6">
        <div className="container grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <div className="card p-6">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700">
                <Icon name="whatsapp" className="h-6 w-6" />
              </span>
              <h2 className="mt-4 font-display text-xl text-navy">Still have a question?</h2>
              <p className="mt-2 text-sm leading-relaxed text-navy/65">
                Message us directly and we&apos;ll sort it. No call centres, no bots — just the people who run
                the trips.
              </p>
              <div className="mt-5">
                <WhatsAppButton fullWidth />
              </div>
              <a href={`https://wa.me/${site.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="mt-3 flex items-center justify-center gap-2 text-sm font-medium text-navy/65">
                <Icon name="whatsapp" className="h-4 w-4 text-teal-600" />
                {site.whatsappDisplay}
              </a>
            </div>
          </aside>

          <div className="card px-6 py-2 sm:px-8">
            <FAQAccordion items={faqs} />
          </div>
        </div>
      </section>
    </>
  )
}
