import { useEffect, useMemo } from 'react'
import SEO from '../components/SEO.jsx'
import { Icon } from '../components/icons.jsx'
import { site } from '../data/site.js'
import { images } from '../data/images.js'
import { whatsappUrl } from '../lib/whatsapp.js'
import { track, trackWhatsApp, trackTikTok } from '../lib/analytics.js'
import cn from '../lib/cn.js'

// ---------------------------------------------------------------------------
//  /links — the "link in bio" / QR landing page.
//  One mobile-first card with every way to reach us. Standalone (no header or
//  footer) so a QR scan or a TikTok bio tap lands on zero distractions.
//
//  TRACKING: append ?src=<tag> to segment where visitors came from:
//    /links?src=qr      printed QR codes (cards, stickers, the boats)
//    /links?src=tiktok  TikTok bio  ·  /links?src=ig  Instagram bio
//  Page views fire "Links Page View" and every tap fires "Link Click", both
//  carrying the src, so Plausible can answer "did the QR cards work?".
// ---------------------------------------------------------------------------

function useSrc() {
  return useMemo(() => {
    if (typeof window === 'undefined') return 'direct'
    const src = new URLSearchParams(window.location.search).get('src')
    return (src || 'direct').slice(0, 32)
  }, [])
}

function LinkRow({ href, icon, title, sub, onClick, primary = false, external = true }) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={cn(
        'group flex w-full items-center gap-4 rounded-3xl border px-5 py-4 text-left transition duration-300 ease-smooth hover:-translate-y-0.5',
        primary
          ? 'border-teal-500/40 bg-teal-600 text-white shadow-cta hover:bg-teal-700 hover:shadow-lift'
          : 'border-white/15 bg-white/10 text-white backdrop-blur hover:bg-white/15'
      )}
    >
      <span
        className={cn(
          'flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl',
          primary ? 'bg-white/15' : 'bg-white/10'
        )}
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold leading-tight">{title}</span>
        {sub && (
          <span className={cn('mt-0.5 block text-sm leading-tight', primary ? 'text-white/80' : 'text-white/65')}>
            {sub}
          </span>
        )}
      </span>
      <Icon
        name="arrowRight"
        className={cn(
          'h-4 w-4 shrink-0 transition-transform duration-300 ease-smooth group-hover:translate-x-1',
          primary ? 'text-white/80' : 'text-white/50'
        )}
      />
    </a>
  )
}

export default function Links() {
  const src = useSrc()

  useEffect(() => {
    track('Links Page View', { src })
  }, [src])

  const hit = (link) => () => track('Link Click', { link, src })

  return (
    <>
      <SEO title="Links & Contact" description={site.shortDesc} path="/links" noindex />

      <main className="relative min-h-svh overflow-hidden bg-navy-950 px-5 py-10 text-white sm:py-14">
        {/* ocean glow */}
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="absolute -top-40 left-1/2 h-96 w-[36rem] -translate-x-1/2 rounded-full bg-teal-600/25 blur-3xl" />
          <div className="absolute -bottom-48 left-1/2 h-96 w-[40rem] -translate-x-1/2 rounded-full bg-sea-700/30 blur-3xl" />
        </div>

        <div className="relative mx-auto w-full max-w-md">
          {/* identity */}
          <div className="flex flex-col items-center text-center">
            <span className="relative">
              <img
                src={images.seanAvatar}
                alt="Sean, your host in Soma Bay"
                width="192"
                height="192"
                className="h-24 w-24 rounded-full object-cover ring-4 ring-white/25"
              />
              <span aria-hidden="true" className="absolute bottom-1 right-1 flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-live-ping rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500 ring-2 ring-navy-950" />
              </span>
            </span>

            <img
              src={images.logoPrimary}
              alt={`${site.name} logo`}
              width="720"
              height="240"
              className="mt-5 h-12 w-auto"
            />

            <p className="mt-3 text-pretty text-[0.95rem] leading-relaxed text-white/75">
              Private, all-inclusive Red Sea boat trips from Soma Bay &amp; Hurghada.
              Three boats, always yours alone.
            </p>

            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/60">
              <Icon name="mapPin" className="h-4 w-4 text-gold-400" />
              {site.baseLocation}
            </p>
          </div>

          {/* links */}
          <div className="mt-8 space-y-3">
            <LinkRow
              primary
              href={whatsappUrl(undefined, `links-${src}`)}
              onClick={() => trackWhatsApp(`links-${src}`)}
              icon="whatsapp"
              title="Check availability on WhatsApp"
              sub={`${site.reply.lead} · ${site.reply.time.toLowerCase()}`}
            />
            <LinkRow
              href={`tel:+${site.whatsappNumber}`}
              external={false}
              onClick={hit('call')}
              icon="phone"
              title="Call or save our number"
              sub={site.whatsappDisplay}
            />
            <LinkRow
              href={site.social.tiktokSean}
              onClick={() => trackTikTok(`links-${src}`)}
              icon="tiktok"
              title={`TikTok · ${site.social.tiktokSeanHandle}`}
              sub={`${site.social.tiktokFollowers} followers · daily life on the Red Sea`}
            />
            <LinkRow
              href={site.social.tiktok}
              onClick={() => trackTikTok(`links-${src}-boat`)}
              icon="tiktok"
              title="TikTok · @luckyladyeg"
              sub="The boats, the trips, the guests"
            />
            <LinkRow
              href={site.social.instagram}
              onClick={hit('instagram')}
              icon="instagram"
              title="Instagram"
              sub="@one_lucky_lady_boat_trips"
            />
            <LinkRow
              href={`mailto:${site.email}`}
              external={false}
              onClick={hit('email')}
              icon="mail"
              title="Email us"
              sub={site.email}
            />
            <LinkRow
              href="/"
              external={false}
              onClick={hit('website')}
              icon="anchor"
              title="Explore the full website"
              sub="Boats, trips, prices & reviews"
            />
          </div>

          {/* trust line */}
          <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm font-medium text-white/60">
            <Icon name="tag" className="h-4 w-4 text-gold-400" />
            The price you see is the price you pay.
          </p>
        </div>
      </main>
    </>
  )
}
