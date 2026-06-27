import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import SocialProof from '../components/SocialProof.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Button from '../components/Button.jsx'
import { Icon } from '../components/icons.jsx'
import { site } from '../data/site.js'
import { localBusinessSchema } from '../lib/schema.js'

export default function Reviews() {
  return (
    <>
      <SEO
        title="Reviews — Loved by Red Sea Guests"
        description="What guests say about private, all-inclusive Red Sea boat trips with Lucky Lady Trips in Soma Bay & Hurghada. Real reviews, no fakes."
        path="/reviews"
        schema={localBusinessSchema()}
      />

      <PageHero
        eyebrow="Word of mouth"
        title="Loved by expats, hotel guests & returning visitors"
        intro="Real words from real guests — families, couples and groups who had the Red Sea to themselves. Here's what a private, all-inclusive day with us actually feels like."
        align="center"
      />

      <section className="section pt-6">
        <div className="container">
          <SocialProof />
        </div>
      </section>

      {/* Leave a review */}
      <section className="section bg-white/50">
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-4xl border border-sand-200 bg-white/70 p-8 text-center shadow-soft sm:p-12">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gold-500/15 text-gold-600">
              <Icon name="star" className="h-6 w-6" />
            </span>
            <h2 className="mt-5 font-display text-2xl text-navy sm:text-3xl">Travelled with us already?</h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-navy/65">
              We&apos;d love to hear how your day went. Send us a message and we&apos;ll share your words here
              (with your permission) to help future guests.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton label="Share your experience" context="I travelled with you and would like to leave a review." />
              <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <Icon name="tiktok" className="h-4 w-4" />
                See us on TikTok
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container">
          <div className="rounded-5xl bg-navy-900 px-6 py-14 text-center text-white sm:px-12">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-display-sm sm:text-display">Plan your own Red Sea day</h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/80">Private, all-inclusive, and priced with nothing hidden. Check availability in a quick message.</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton variant="white" size="lg" />
              <Button to="/boats" variant="ghost" size="lg" className="!text-white hover:!bg-white/10" iconRight="arrowRight">View boats</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
