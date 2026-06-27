import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import TripTypeCard from '../components/TripTypeCard.jsx'
import AnatomyOfADay from '../components/AnatomyOfADay.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/icons.jsx'
import { trips } from '../data/trips.js'
import { localBusinessSchema } from '../lib/schema.js'

const steps = [
  { icon: 'whatsapp', title: 'Message us', body: 'Send your dates, group size and the kind of day you want on WhatsApp.' },
  { icon: 'compass', title: 'We plan it', body: 'We recommend the right boat and route, and confirm one all-inclusive price.' },
  { icon: 'sun', title: 'We arrange it all', body: 'Pickup, food, drinks, gear and crew sorted. You just turn up and enjoy the day.' },
]

export default function Trips() {
  return (
    <>
      <SEO
        title="Red Sea Trips — Day Trips, Snorkelling, Fishing & Overnight"
        description="Private Red Sea trips from Soma Bay & Hurghada: day trips, snorkelling, fishing, sunset cruises, overnight escapes and custom charters. All-inclusive, private only."
        path="/trips"
        schema={localBusinessSchema()}
      />

      <PageHero
        eyebrow="Ways to spend the day"
        title="Private Red Sea days, built around you"
        intro="Pick a trip type or mix a few. Every trip is private, all-inclusive, and arranged end to end — you choose the day, we handle the rest."
      >
        <WhatsAppButton size="lg" />
        <Button to="/boats" variant="secondary" size="lg" iconRight="arrowRight">View our boats</Button>
      </PageHero>

      <section className="section pt-6">
        <div className="container">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trips.map((trip, i) => (
              <Reveal key={trip.id} delay={(i % 3) * 70}>
                <TripTypeCard trip={trip} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Anatomy of a day — sell the experience, not the asset */}
      <div className="bg-white/50">
        <AnatomyOfADay trip={trips[0]} />
      </div>

      {/* How it works */}
      <section className="section bg-white/50">
        <div className="container">
          <SectionHeading eyebrow="How it works" title="From message to marina in three steps" align="center" className="mx-auto" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative card p-7">
                <span className="absolute right-6 top-6 font-display text-4xl text-sand-200">{i + 1}</span>
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700">
                  <Icon name={s.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-navy">{s.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-navy/65">{s.body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex justify-center">
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </section>
    </>
  )
}
