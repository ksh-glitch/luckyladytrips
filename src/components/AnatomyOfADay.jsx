import SectionHeading from './SectionHeading.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import Reveal from './Reveal.jsx'

/**
 * "Anatomy of a day" — the morning-to-sunset story of a trip, told as timed
 * beats. Sells the experience, not the asset. Reusable: pass any trip that has
 * a `beats` array (Trips page features the day trip; SEO pages can pass their
 * matching trip).
 */
export default function AnatomyOfADay({
  trip,
  eyebrow = 'Anatomy of a day',
  title = 'A day on the water, hour by hour',
  intro = 'Every trip is private and arranged end to end. Here’s how an unhurried day with us tends to unfold — yours can bend whichever way you like.',
}) {
  const beats = trip?.beats
  if (!beats?.length) return null

  return (
    <section className="section">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} intro={intro} />

        <ol className="mt-12 grid gap-x-6 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {beats.map((b, i) => (
            <Reveal as="li" key={b.label} delay={i * 90} direction="up" className="relative">
              {/* connector line on desktop */}
              {i < beats.length - 1 && (
                <span aria-hidden="true" className="absolute left-12 top-[18px] hidden h-px w-[calc(100%-2rem)] bg-gradient-to-r from-teal-600/40 to-sand-300/60 lg:block" />
              )}
              <div className="flex items-center gap-3">
                <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-teal-600 text-sm font-bold text-white shadow-cta">
                  {i + 1}
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-700">{b.time}</span>
              </div>
              <h3 className="mt-4 font-display text-lg text-navy">{b.label}</h3>
              <p className="mt-2 text-pretty text-sm leading-relaxed text-navy/65">{b.body}</p>
            </Reveal>
          ))}
        </ol>

        <div className="mt-11">
          <WhatsAppButton size="lg" source="anatomy" trip={trip.formValue} label="Plan a day like this" />
        </div>
      </div>
    </section>
  )
}
