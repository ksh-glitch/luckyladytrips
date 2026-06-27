import { useLocation } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import SmartImage from '../components/SmartImage.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { Icon } from '../components/icons.jsx'
import { boats } from '../data/boats.js'
import { localBusinessSchema, boatSchema } from '../lib/schema.js'
import cn from '../lib/cn.js'

function BoatDetail({ boat, index }) {
  const flip = index % 2 === 1
  const { hash } = useLocation()
  // When arriving from a boat card, morph the matching image (shared-element View Transition).
  const morphStyle = hash === `#${boat.id}` ? { viewTransitionName: `boat-${boat.id}` } : undefined
  return (
    <section id={boat.id} className="scroll-mt-24">
      <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
        {/* Media */}
        <div className={cn(flip && 'lg:order-2')}>
          <div style={morphStyle} className="overflow-hidden rounded-4xl shadow-card">
            <SmartImage
              src={boat.image}
              alt={boat.imageAlt}
              hasPhoto={boat.hasRealPhoto}
              gradient={boat.placeholderGradient}
              label={`${boat.name} · photo coming soon`}
              icon="anchor"
              className="aspect-[4/3] w-full"
            />
          </div>
          {boat.gallery?.length > 0 && (
            <div className="mt-3 grid grid-cols-3 gap-3">
              {boat.gallery.map((g, i) => (
                <div key={i} className="overflow-hidden rounded-2xl shadow-soft">
                  <SmartImage src={g.src} alt={g.alt} className="aspect-square w-full" />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Content */}
        <div className={cn(flip && 'lg:order-1')}>
          <span className="eyebrow">{boat.positioning}</span>
          <h2 className="mt-3 font-display text-display-sm text-navy">{boat.name}</h2>
          {boat.renameable && (
            <p className="mt-1 text-sm italic text-navy/65">Name to be announced. The boat speaks for itself.</p>
          )}
          <p className="prose-warm mt-4 max-w-prose">{boat.blurb}</p>
          {boat.dayAboard && (
            <p className="mt-4 max-w-prose border-l-2 border-gold-400 pl-4 font-display text-lg italic leading-relaxed text-navy/80">
              {boat.dayAboard}
            </p>
          )}

          {/* specs */}
          <dl className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            <div className="rounded-2xl border border-sand-200 bg-white/70 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/65">Guests</dt>
              <dd className="mt-1 font-display text-lg text-navy">{boat.capacity}</dd>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-white/70 p-4">
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/65">From</dt>
              <dd className="mt-1 font-display text-lg text-navy">€{boat.priceFrom}<span className="text-sm font-sans text-navy/65"> / day</span></dd>
            </div>
            <div className="col-span-2 rounded-2xl border border-sand-200 bg-white/70 p-4 sm:col-span-1">
              <dt className="text-xs font-semibold uppercase tracking-wide text-navy/65">Best for</dt>
              <dd className="mt-1 font-medium text-navy">{boat.bestFor}</dd>
            </div>
          </dl>

          {/* highlights */}
          <ul className="mt-6 space-y-2.5">
            {boat.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-navy/75">
                <Icon name="check" className="mt-1 h-4 w-4 shrink-0 text-teal-600" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          {/* uses */}
          <div className="mt-5 flex flex-wrap gap-2">
            {boat.uses.map((u) => (
              <span key={u} className="rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-navy/70">{u}</span>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <WhatsAppButton boat={boat.name} source="boat-detail" label={`Enquire about ${boat.name}`} />
            <Button to="/contact" variant="secondary" iconRight="arrowRight">Check availability</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function Boats() {
  return (
    <>
      <SEO
        title="Our Boats: One Lucky Lady, Locke Catamaran & Speedboat"
        description="Three private Red Sea boats: One Lucky Lady (from €250), the 14-guest Locke Catamaran (from €450) and a Speedboat (from €150). All-inclusive private charters."
        path="/boats"
        schema={[localBusinessSchema(), ...boats.map(boatSchema)]}
      />

      <PageHero
        eyebrow="Our fleet"
        title="Three boats. Every Red Sea experience."
        intro="An intimate cruiser, a spacious 14-guest catamaran, and a fast private speedboat. Whatever the day, there's a boat that fits. And it's always yours alone."
      >
        <WhatsAppButton size="lg" />
        <Button to="/trips" variant="secondary" size="lg" iconRight="arrowRight">Explore trips</Button>
      </PageHero>

      {/* quick nav */}
      <div className="border-y border-sand-200/70 bg-white/50">
        <div className="container flex gap-2.5 overflow-x-auto py-4 no-scrollbar">
          {boats.map((b) => (
            <a key={b.id} href={`#${b.id}`} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sand-100 px-4 py-2 text-sm font-medium text-navy/75 transition hover:text-teal-700">
              {b.name}
              <span className="text-navy/65">€{b.priceFrom}+</span>
            </a>
          ))}
        </div>
      </div>

      <div className="section">
        <div className="container space-y-20 lg:space-y-28">
          {boats.map((boat, i) => (
            <Reveal key={boat.id}>
              <BoatDetail boat={boat} index={i} />
            </Reveal>
          ))}
        </div>
      </div>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container">
          <div className="on-dark rounded-5xl bg-navy-900 px-6 py-14 text-center text-white sm:px-12">
            <SectionHeading align="center" eyebrow="Not sure which boat?" title="Tell us your group. We'll match the boat" intro="Message us your dates and how many you are. We'll recommend the best fit and confirm availability." light className="mx-auto" />
            <div className="mt-8 flex justify-center">
              <WhatsAppButton variant="white" size="lg" source="boats-cta" context="Not sure which boat suits us. Please recommend." />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
