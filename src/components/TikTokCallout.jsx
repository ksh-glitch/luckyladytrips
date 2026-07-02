import { Icon } from './icons.jsx'
import SmartImage from './SmartImage.jsx'
import CountUp from './CountUp.jsx'
import { site } from '../data/site.js'
import { images } from '../data/images.js'
import { trackTikTok } from '../lib/analytics.js'

const sean = site.social

// Real photos used as "feed" stills (the days out, sunset, night).
const FEED = [
  { src: images.oneLuckyLadyDeck, alt: 'A day on board One Lucky Lady' },
  { src: images.justineTiggySunset, alt: 'Golden-hour cruise on the Red Sea' },
  { src: images.oneLuckyLadyNight, alt: 'One Lucky Lady lit up after dark' },
]

function PlayGlyph({ className = 'h-3.5 w-3.5' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" />
    </svg>
  )
}

/**
 * Prominent, lively TikTok callout. Sean's @RedSeaSean is the brand's top
 * discovery channel — most guests find Lucky Lady there first — so the site
 * shows a live-feeling profile card (animated follower count, a feed of real
 * stills, a sheen) and turns that recognition into a follow + an enquiry.
 */
export default function TikTokCallout({ source = 'home' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="on-dark relative overflow-hidden rounded-5xl bg-navy-900 px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
          <div aria-hidden="true" className="grain-layer pointer-events-none absolute inset-0 opacity-[0.05]" />

          <div className="relative grid items-center gap-9 lg:grid-cols-[1.4fr_1fr]">
            {/* Copy */}
            <div>
              <span className="eyebrow">As seen on TikTok</span>
              <h2 className="mt-3 text-balance font-display text-display-sm text-white sm:text-display">
                You&apos;ve probably already seen us. That&apos;s <span className="whitespace-nowrap text-gold-300">{sean.tiktokSeanName}</span>
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-white/75">
                Most people find Lucky Lady Trips through Sean&apos;s TikTok: the days out, the reefs, the
                macaw and the dog. Watch the Red Sea the way it actually looks, then message us to live it.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={sean.tiktokSean}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTikTok(`callout:${source}`)}
                  className="btn-white"
                >
                  <Icon name="tiktok" className="h-[1.2em] w-[1.2em]" />
                  Follow {sean.tiktokSeanHandle}
                </a>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTikTok(`callout-brand:${source}`)}
                  className="link-underline inline-flex items-center gap-1.5 text-sm"
                >
                  Or the boats&apos; channel @luckyladyeg
                </a>
              </div>
            </div>

            {/* Live-feeling profile card */}
            <div className="glass relative overflow-hidden rounded-4xl p-5">
              <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-sheen" />

              {/* profile header */}
              <div className="relative flex items-center gap-3.5">
                <span className="relative shrink-0">
                  <SmartImage src={images.seanPortrait} alt="Red Sea Sean" className="h-14 w-14 rounded-full ring-2 ring-gold-400/70" imgClassName="rounded-full" />
                  <span className="absolute -bottom-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy-900 ring-2 ring-navy-900">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white text-navy-900">
                      <Icon name="tiktok" className="h-3 w-3" />
                    </span>
                  </span>
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-display text-lg leading-tight text-white">{sean.tiktokSeanName}</span>
                  <span className="block text-sm text-white/55">{sean.tiktokSeanHandle}</span>
                </span>
              </div>

              {/* stats */}
              <div className="relative mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
                <span className="flex items-baseline gap-1">
                  <CountUp to={sean.tiktokFollowerCount} className="font-display text-2xl text-white" />
                  <span className="text-sm font-medium text-white/55">+ followers</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-white/55">
                  <span className="h-2 w-2 rounded-full bg-teal-400 animate-pulse" />
                  posting most days
                </span>
              </div>

              {/* feed */}
              <a
                href={sean.tiktokSean}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackTikTok(`callout-feed:${source}`)}
                aria-label={`Watch ${sean.tiktokSeanName} on TikTok`}
                className="group relative mt-4 grid grid-cols-3 gap-2"
              >
                {FEED.map((t, i) => (
                  <span key={i} className="relative block overflow-hidden rounded-2xl ring-1 ring-white/10">
                    <SmartImage src={t.src} alt={t.alt} className="aspect-[3/4] w-full" imgClassName="transition-transform duration-700 ease-smooth group-hover:scale-110" />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/55 to-transparent" />
                    <span aria-hidden="true" className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/85 pl-0.5 text-navy-900 shadow-soft transition group-hover:scale-110">
                        <PlayGlyph />
                      </span>
                    </span>
                  </span>
                ))}
              </a>

              {/* follow */}
              <a
                href={sean.tiktokSean}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackTikTok(`callout-card:${source}`)}
                className="btn-white relative mt-4 w-full"
              >
                <Icon name="tiktok" className="h-4 w-4" />
                Follow {sean.tiktokSeanHandle}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
