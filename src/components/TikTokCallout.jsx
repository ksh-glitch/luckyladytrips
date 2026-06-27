import { Icon } from './icons.jsx'
import { site } from '../data/site.js'
import { trackTikTok } from '../lib/analytics.js'

/**
 * Prominent TikTok callout. Sean's @redseasean is the brand's top discovery
 * channel — most guests find Lucky Lady there first — so the site says so loudly
 * and turns that recognition into a follow + an enquiry.
 */
export default function TikTokCallout({ source = 'home' }) {
  return (
    <section className="section">
      <div className="container">
        <div className="on-dark relative overflow-hidden rounded-5xl bg-navy-900 px-6 py-12 sm:px-10 sm:py-14 lg:px-16">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
          <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-teal-500/15 blur-3xl" />
          <div aria-hidden="true" className="grain-layer pointer-events-none absolute inset-0 opacity-[0.05]" />

          <div className="relative grid items-center gap-9 lg:grid-cols-[1.5fr_1fr]">
            <div>
              <span className="eyebrow !text-gold-300 before:!bg-gold-400">As seen on TikTok</span>
              <h2 className="mt-3 text-balance font-display text-display-sm text-white sm:text-display">
                You&apos;ve probably already seen us — that&apos;s Sean, <span className="text-gold-300">@redseasean</span>
              </h2>
              <p className="mt-4 max-w-xl text-pretty leading-relaxed text-white/75">
                Most people find Lucky Lady Trips through Sean&apos;s TikTok — the days out, the reefs, the
                macaw and the dog. {site.social.tiktokFollowers} follow along. Watch the Red Sea the way it
                actually looks, then message us to live it.
              </p>

              <div className="mt-7 flex flex-wrap items-center gap-4">
                <a
                  href={site.social.tiktokSean}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTikTok(`callout:${source}`)}
                  className="btn bg-white text-navy-900 shadow-cta hover:-translate-y-0.5 hover:shadow-lift"
                >
                  <Icon name="tiktok" className="h-[1.2em] w-[1.2em]" />
                  Follow @redseasean
                </a>
                <a
                  href={site.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => trackTikTok(`callout-brand:${source}`)}
                  className="link-underline !text-gold-300 inline-flex items-center gap-1.5 text-sm"
                >
                  Or the boats&apos; channel @luckyladyeg
                </a>
              </div>
            </div>

            {/* Handle / stat card */}
            <a
              href={site.social.tiktokSean}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTikTok(`callout-card:${source}`)}
              aria-label="Sean on TikTok — @redseasean"
              className="group flex items-center gap-4 rounded-4xl border border-white/12 bg-white/[0.05] p-6 transition hover:border-gold-400/40 hover:bg-white/[0.08]"
            >
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-900">
                <Icon name="tiktok" className="h-7 w-7" />
              </span>
              <span className="min-w-0">
                <span className="block font-display text-xl text-white">@redseasean</span>
                <span className="mt-0.5 block text-sm text-white/65">{site.social.tiktokFollowers} followers · the days at sea</span>
              </span>
              <Icon name="arrowRight" className="ml-auto h-5 w-5 text-white/60 transition group-hover:translate-x-0.5 group-hover:text-gold-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
