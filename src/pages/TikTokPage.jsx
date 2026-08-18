import { Link } from 'react-router-dom'
import SEO from '../components/SEO.jsx'
import TikTokEmbed from '../components/TikTokEmbed.jsx'
import BoatClip from '../components/BoatClip.jsx'
import CountUp from '../components/CountUp.jsx'
import CtaBand from '../components/CtaBand.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import { Icon } from '../components/icons.jsx'
import { site } from '../data/site.js'
import { featuredTikToks } from '../data/tiktok.js'
import { boats } from '../data/boats.js'
import { trackTikTok } from '../lib/analytics.js'
import { breadcrumbSchema } from '../lib/schema.js'
import { useSetEnquiry } from '../lib/EnquiryContext.jsx'

const sean = site.social

/**
 * /tiktok — "As seen on TikTok". Turns Sean's 18.9K-follower audience into
 * enquiries: watch the clips people arrive knowing, meet the boats from the
 * videos, then one tap to WhatsApp. Clips are click-to-load (no third-party
 * requests until tapped), so the page stays as fast as the rest of the site.
 */
export default function TikTokPage() {
  useSetEnquiry({ context: 'I found you on TikTok.', source: 'tiktok-page' })

  return (
    <>
      <SEO
        title="As Seen on TikTok: Red Sea Sean & the Boats"
        description="Watch the TikTok clips that made 18.9K people follow life on the Red Sea, then book the same boats — private, all-inclusive, from Soma Bay & Hurghada."
        path="/tiktok"
        schema={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'TikTok', path: '/tiktok' },
        ])}
      />

      {/* Dark hero: the numbers people already know from the app */}
      <section className="on-dark relative overflow-hidden bg-navy-900 pb-16 pt-28 text-white lg:pb-20 lg:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-16 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
        <div aria-hidden="true" className="grain-layer pointer-events-none absolute inset-0 opacity-[0.05]" />

        <div className="container relative">
          <span className="eyebrow">As seen on TikTok</span>
          <h1 className="mt-3 max-w-3xl text-balance font-display text-[2.4rem] leading-[1.05] text-white sm:text-display lg:text-display-lg">
            The boats you follow. The days you can book.
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/75">
            If you found us through {sean.tiktokSeanName}, this is the same life — the reefs, the
            sunsets, the macaw and the dog — bookable as a private, all-inclusive day on the Red Sea.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
            <span className="flex items-baseline gap-2">
              <CountUp to={sean.tiktokFollowerCount} className="font-display text-4xl text-white" />
              <span className="text-sm font-medium text-white/55">followers</span>
            </span>
            <span className="flex items-baseline gap-2">
              <span className="font-display text-4xl text-white">{sean.tiktokLikes}</span>
              <span className="text-sm font-medium text-white/55">likes</span>
            </span>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white/55">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal-400" />
              posting most days
            </span>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg" source="tiktok-hero" context="I found you on TikTok." />
            <a
              href={sean.tiktokSean}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTikTok('tiktok-page-hero')}
              className="btn-secondary btn-lg"
            >
              <Icon name="tiktok" className="h-[1.2em] w-[1.2em]" />
              Follow {sean.tiktokSeanHandle}
            </a>
          </div>
        </div>
      </section>

      {/* The clips — click to play, right here */}
      <section className="on-dark bg-navy-900 pb-16 text-white lg:pb-24">
        <div className="container">
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
            {featuredTikToks.map((video) => (
              <Reveal key={video.url}>
                <TikTokEmbed video={video} />
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-sm text-white/50">
            Clips play right here — or open them on TikTok. For daily life on the water follow{' '}
            <a href={sean.tiktokSean} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('tiktok-page-inline')} className="font-semibold text-gold-300 hover:underline">
              {sean.tiktokSeanHandle}
            </a>
            , and for the boats themselves it&apos;s{' '}
            <a href={sean.tiktok} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('tiktok-page-inline-brand')} className="font-semibold text-gold-300 hover:underline">
              @luckyladyeg
            </a>
            .
          </p>
        </div>
      </section>

      {/* The boats from the videos */}
      <section className="section">
        <div className="container">
          <SectionHeading
            eyebrow="From the feed to the water"
            title="The boats from the videos"
            intro="Every clip was filmed on one of these three. Pick yours and the day is private from the first minute."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boats.map((boat) => (
              <Reveal key={boat.id} className="card group overflow-hidden">
                <Link to="/boats" className="block" aria-label={`See ${boat.name} on the boats page`}>
                  <BoatClip
                    clip={boat.clip}
                    poster={boat.clipPoster || boat.image}
                    alt={`${boat.name} on the Red Sea`}
                    className="aspect-[4/3]"
                  />
                  <div className="p-5">
                    <h3 className="font-display text-xl text-navy">{boat.name}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-navy/65">{boat.tagline || boat.blurb}</p>
                    <span className="link-underline mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
                      See the boat
                      <Icon name="arrowRight" className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Close: book the day you've been watching */}
      <section className="section pt-0">
        <div className="container">
          <CtaBand>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-display-sm text-white sm:text-display">
              Stop scrolling it. Book it.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/80">
              Message Sean directly — the same Sean from the videos. Dates, group size, and he&apos;ll sort the rest.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton variant="white" size="lg" source="tiktok-cta" context="I found you on TikTok." />
              <Button to="/gallery" variant="ghost" size="lg" iconRight="arrowRight">
                See the photo gallery
              </Button>
            </div>
          </CtaBand>
        </div>
      </section>
    </>
  )
}
