import SEO from '../components/SEO.jsx'
import SmartImage from '../components/SmartImage.jsx'
import HeroVideo from '../components/HeroVideo.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import BoatCard from '../components/BoatCard.jsx'
import InclusionIcon from '../components/InclusionIcon.jsx'
import SunArcTrips from '../components/SunArcTrips.jsx'
import Magnetic from '../components/Magnetic.jsx'
import StorySection from '../components/StorySection.jsx'
import TikTokCallout from '../components/TikTokCallout.jsx'
import SocialProof from '../components/SocialProof.jsx'
import ReviewMarquee from '../components/ReviewMarquee.jsx'
import FAQAccordion from '../components/FAQAccordion.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/icons.jsx'

import { images } from '../data/images.js'
import { boats } from '../data/boats.js'
import { inclusionsStrip, inclusionsList, noExtras } from '../data/inclusions.js'
import { trips } from '../data/trips.js'
import { faqs } from '../data/faqs.js'
import { reviews, reviewsPublished } from '../data/reviews.js'
import { site } from '../data/site.js'
import { localBusinessSchema, faqSchema } from '../lib/schema.js'

export default function Home() {
  return (
    <>
      <SEO
        title="Private All-Inclusive Red Sea Boat Trips"
        description={site.shortDesc}
        path="/"
        schema={[localBusinessSchema(), faqSchema(faqs.slice(0, 8))]}
      />

      {/* 2 — HERO ------------------------------------------------------- */}
      <section className="relative flex min-h-[92svh] items-end overflow-hidden">
        <div className="absolute inset-0">
          <HeroVideo
            poster={images.hero}
            src={images.heroVideo}
            alt="One Lucky Lady private boat on the turquoise Red Sea at Soma Bay in golden afternoon light"
            className="h-full w-full"
            imgClassName="object-[center_30%]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/55 to-navy-900/35" />
            <div className="absolute inset-0 bg-gradient-to-r from-navy-950/55 to-transparent" />
            <div aria-hidden="true" className="grain-layer pointer-events-none absolute inset-0 opacity-[0.07]" />
          </HeroVideo>
        </div>

        <div className="container relative z-10 pb-16 pt-28 sm:pb-20 lg:pb-28">
          <span className="chip animate-fade-in">
            <Icon name="mapPin" className="h-4 w-4 text-gold-400" />
            Soma Bay · Hurghada · Red Sea
          </span>

          <h1 className="mt-5 max-w-4xl text-balance font-display text-[2.6rem] leading-[1.03] text-white sm:text-display-lg lg:text-[4.4rem]">
            Private Red Sea boat trips, made effortless.
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85 sm:text-xl">
            Private day trips, fishing trips, overnight escapes and catamaran charters from Soma Bay and
            across the Red Sea. Food, drinks, towels, snorkelling gear, pickup and crew included.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Magnetic className="w-full sm:w-auto">
              <WhatsAppButton size="lg" source="hero" fullWidth className="sm:w-auto" />
            </Magnetic>
            <Button to="/boats" variant="secondary" size="lg" iconRight="arrowRight" className="!border-white/30 !bg-white/10 !text-white backdrop-blur hover:!bg-white/20">
              View our boats
            </Button>
          </div>

          <p className="mt-4 text-sm text-white/75">
            Not ready to book?{' '}
            <WhatsAppButton
              intent="quote"
              source="hero"
              variant="link"
              showIcon={false}
              className="text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
            />
          </p>

          <div className="mt-5 flex flex-col gap-2 text-sm font-medium text-white/75 sm:flex-row sm:items-center sm:gap-5">
            <span className="inline-flex items-center gap-2">
              <Icon name="whatsapp" className="h-4 w-4 text-gold-400" />
              {site.reply.time}
            </span>
            <span className="inline-flex items-center gap-2">
              <Icon name="tag" className="h-4 w-4 text-gold-400" />
              The price you see is the price you pay.
            </span>
          </div>
        </div>
      </section>

      {/* 2b — TIKTOK (recognition first, for @redseasean-led traffic) - */}
      <TikTokCallout source="home" />

      {/* 3 — INCLUSIONS STRIP ------------------------------------------ */}
      <section className="relative z-20 -mt-px border-b border-sand-200/70 bg-sand-50/95 py-7 backdrop-blur">
        <div className="container">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {inclusionsStrip.map((it) => (
              <InclusionIcon key={it.label} icon={it.icon} label={it.label} />
            ))}
          </div>
        </div>
      </section>

      {/* 4 — BOATS ------------------------------------------------------ */}
      <section className="section">
        <div className="container">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionHeading
              eyebrow="Choose your boat"
              title="Three boats. Every experience."
              intro="From an intimate cruiser to a 14-guest catamaran and a fast fishing speedboat. Pick the boat that fits your day."
            />
            <Button to="/boats" variant="ghost" iconRight="arrowRight" className="shrink-0 self-start sm:self-auto">
              Compare all boats
            </Button>
          </div>

          <div className="mt-10 grid gap-5 lg:mx-auto lg:max-w-4xl">
            {boats.map((boat, i) => (
              <Reveal key={boat.id} delay={i * 70}>
                <BoatCard boat={boat} layout="row" flag={boat.id === 'one-lucky-lady' ? 'The original' : undefined} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5 — ALL-INCLUSIVE PROMISE (navy band) ------------------------- */}
      <section className="section">
        <div className="container">
          <div className="on-dark relative overflow-hidden rounded-5xl bg-navy-900 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
            <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl" />

            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <span className="eyebrow !text-gold-300 before:!bg-gold-400">All-inclusive, honestly</span>
                <h2 className="mt-3 text-balance font-display text-display-sm text-white sm:text-display">
                  The price you see is the price you pay.
                </h2>
                <p className="mt-5 max-w-md text-pretty leading-relaxed text-white/75">
                  No surprise fees. No awkward add-ons. No photographer pressure. Just your group, your
                  crew, and a fully arranged Red Sea day.
                </p>

                <ul className="mt-7 flex flex-wrap gap-2.5">
                  {noExtras.map((n) => (
                    <li key={n} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1.5 text-sm text-white/80">
                      <Icon name="close" className="h-3.5 w-3.5 text-gold-400" />
                      {n}
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <WhatsAppButton variant="white" source="navy-band" />
                </div>
              </div>

              <div className="rounded-4xl border border-white/10 bg-white/[0.05] p-6 sm:p-8">
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-gold-300">Included as standard</p>
                <ul className="mt-5 space-y-4">
                  {inclusionsList.map((inc) => (
                    <li key={inc.title} className="flex gap-3.5">
                      <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-500/20 text-teal-300">
                        <Icon name={inc.icon} className="h-5 w-5" />
                      </span>
                      <div>
                        <p className="font-semibold text-white">{inc.title}</p>
                        <p className="text-sm text-white/65">{inc.desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6 — TRIP TYPES (signature sun-arc) ---------------------------- */}
      <SunArcTrips trips={trips} />

      {/* 7 — STORY ----------------------------------------------------- */}
      <section className="section">
        <div className="container">
          <StorySection />
        </div>
      </section>

      {/* 8 — SOCIAL PROOF --------------------------------------------- */}
      <section className="section bg-white/50">
        <div className="container">
          <SectionHeading
            eyebrow="Trusted on the Red Sea"
            title="Loved by expats, hotel guests & returning visitors"
            align="center"
            className="mx-auto"
          />
          <div className="mt-10">
            {reviewsPublished && reviews.length ? <ReviewMarquee reviews={reviews} /> : <SocialProof compact />}
          </div>
        </div>
      </section>

      {/* 9 — FAQ ------------------------------------------------------- */}
      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Good to know" title="Your questions, answered" intro="Everything you might want to check before you message us." />
            <div className="mt-6 hidden lg:block">
              <WhatsAppButton source="faq" />
            </div>
          </div>
          <div className="card px-6 py-2 sm:px-8">
            <FAQAccordion items={faqs.slice(0, 8)} />
          </div>
        </div>
      </section>

      {/* 10 — FINAL CTA ----------------------------------------------- */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <SmartImage src={images.oneLuckyLadyNight} alt="One Lucky Lady lit with blue deck lighting in Soma Bay marina after dark" className="h-full w-full" />
          <div className="absolute inset-0 bg-navy-950/80" />
          <div aria-hidden="true" className="grain-layer pointer-events-none absolute inset-0 opacity-[0.06]" />
        </div>
        <div className="on-dark container relative z-10 py-20 text-center text-white sm:py-28">
          <h2 className="mx-auto max-w-2xl text-balance font-display text-display-sm text-white sm:text-display-lg">
            Ready to plan your Red Sea escape?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-white/80">
            Tell us your dates and group size. We&apos;ll check availability and arrange the rest: pickup,
            food, drinks, gear and crew included.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <WhatsAppButton variant="white" size="lg" label="Check availability on WhatsApp" source="final-cta" />
            <Button to="/boats" variant="ghost" size="lg" className="!text-white hover:!bg-white/10" iconRight="arrowRight">
              View boats
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
