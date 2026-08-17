import { useEffect, useMemo } from 'react'
import SEO from '../components/SEO.jsx'
import CountUp from '../components/CountUp.jsx'
import { Icon } from '../components/icons.jsx'
import { site } from '../data/site.js'
import { images } from '../data/images.js'
import { reviews } from '../data/reviews.js'
import { whatsappUrl } from '../lib/whatsapp.js'
import { track, trackWhatsApp, trackTikTok } from '../lib/analytics.js'
import cn from '../lib/cn.js'

// ---------------------------------------------------------------------------
//  /links — the "link in bio" / QR landing page.
//  Full-bleed photo of One Lucky Lady behind a glass UI: identity, proof
//  (follower count-up, real review), then every way to reach us. Standalone —
//  no header/footer — so a QR scan lands on zero distractions.
//
//  TRACKING: append ?src=<tag> to segment where visitors came from:
//    /links?src=qr · /links?src=tiktok · /links?src=ig
//  Views fire "Links Page View", taps fire "Link Click" (both carry src),
//  and the WhatsApp message itself embeds "ref: links-<src>".
// ---------------------------------------------------------------------------

function useSrc() {
  return useMemo(() => {
    if (typeof window === 'undefined') return 'direct'
    const src = new URLSearchParams(window.location.search).get('src')
    return (src || 'direct').slice(0, 32)
  }, [])
}

function LinkRow({ href, icon, title, sub, onClick, chipClass, external = true }) {
  return (
    <a
      href={href}
      onClick={onClick}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className="group flex w-full items-center gap-4 rounded-3xl border border-white/12 bg-white/[0.08] px-5 py-4 text-left text-white backdrop-blur-md transition duration-300 ease-smooth hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/[0.14]"
    >
      <span className={cn('flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl', chipClass || 'bg-white/10')}>
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-semibold leading-tight">{title}</span>
        {sub && <span className="mt-0.5 block text-sm leading-tight text-white/60">{sub}</span>}
      </span>
      <Icon name="arrowRight" className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 ease-smooth group-hover:translate-x-1 group-hover:text-white/80" />
    </a>
  )
}

export default function Links() {
  const src = useSrc()

  useEffect(() => {
    track('Links Page View', { src })
  }, [src])

  const hit = (link) => () => track('Link Click', { link, src })
  const review = reviews[0]

  return (
    <>
      <SEO title="Links & Contact" description={site.shortDesc} path="/links" noindex />

      <main className="relative min-h-svh overflow-hidden bg-navy-950 px-5 pb-14 pt-12 text-white sm:pt-16">
        {/* full-bleed backdrop: the boat herself, held behind a deep scrim */}
        <div aria-hidden="true" className="absolute inset-0">
          <img
            src={images.oneLuckyLadyBeach}
            alt=""
            className="h-full w-full object-cover object-[center_30%]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/88 to-navy-950" />
          <div className="absolute -top-32 left-1/2 h-80 w-[34rem] -translate-x-1/2 rounded-full bg-teal-500/20 blur-3xl" />
          <div className="grain-layer absolute inset-0 opacity-[0.06]" />
        </div>

        <div className="relative mx-auto w-full max-w-md">
          {/* ---------- identity ---------- */}
          <div className="flex flex-col items-center text-center">
            <span className="relative">
              <span aria-hidden="true" className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-gold-400 via-teal-400 to-sea-700 opacity-90" />
              <img
                src={images.seanAvatar}
                alt="Sean, your host in Soma Bay"
                width="192"
                height="192"
                className="relative h-28 w-28 rounded-full border-[3px] border-navy-950 object-cover"
              />
              <span aria-hidden="true" className="absolute bottom-1 right-1 flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-live-ping rounded-full bg-emerald-400" />
                <span className="relative inline-flex h-full w-full rounded-full bg-emerald-500 ring-2 ring-navy-950" />
              </span>
            </span>

            <img src={images.logoPrimary} alt={`${site.name} logo`} width="720" height="240" className="mt-6 h-12 w-auto" />

            <p className="mt-3 max-w-xs text-pretty text-[0.95rem] leading-relaxed text-white/75">
              Private, all-inclusive Red Sea boat trips. Three boats, always yours alone.
            </p>
            <p className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-white/55">
              <Icon name="mapPin" className="h-4 w-4 text-gold-400" />
              Soma Bay &amp; Hurghada, Egypt
            </p>
          </div>

          {/* ---------- proof band ---------- */}
          <dl className="mt-7 grid grid-cols-3 overflow-hidden rounded-3xl border border-white/12 bg-white/[0.07] backdrop-blur-md">
            {[
              { big: <><CountUp to={site.social.tiktokFollowerCount} />+</>, label: 'TikTok followers' },
              { big: <CountUp to={3} format={(n) => String(Math.round(n))} />, label: 'private boats' },
              { big: '€0', label: 'hidden fees' },
            ].map((s, i) => (
              <div key={s.label} className={cn('flex flex-col items-center gap-0.5 px-2 py-4', i > 0 && 'border-l border-white/10')}>
                <dd className="font-display text-2xl leading-none text-white">{s.big}</dd>
                <dt className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/50">{s.label}</dt>
              </div>
            ))}
          </dl>

          {/* ---------- WhatsApp: the one true CTA ---------- */}
          <div className="mt-6 space-y-3">
            <a
              href={whatsappUrl(undefined, `links-${src}`)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp(`links-${src}`)}
              className="group relative flex w-full items-center gap-4 overflow-hidden rounded-3xl bg-teal-600 px-5 py-5 text-left shadow-cta transition duration-300 ease-smooth hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lift"
            >
              <span aria-hidden="true" className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-white/10 blur-md transition-transform duration-700 ease-smooth group-hover:translate-x-[400%]" />
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/15">
                <Icon name="whatsapp" className="h-6 w-6" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-lg font-bold leading-tight">Check availability on WhatsApp</span>
                <span className="mt-0.5 block text-sm text-white/80">{site.reply.lead} · {site.reply.time.toLowerCase()}</span>
              </span>
              <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-white/80 transition-transform duration-300 ease-smooth group-hover:translate-x-1" />
            </a>

            {/* ---------- TikTok feature card ---------- */}
            <a
              href={site.social.tiktokSean}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackTikTok(`links-${src}`)}
              className="group block rounded-3xl bg-gradient-to-br from-[#25F4EE]/60 via-white/15 to-[#FE2C55]/60 p-[1.5px] transition duration-300 ease-smooth hover:-translate-y-0.5"
            >
              <span className="block rounded-[calc(1.5rem-1.5px)] bg-navy-950/95 px-5 py-5 backdrop-blur-md">
                <span className="flex items-center gap-3">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-navy-950">
                    <Icon name="tiktok" className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-bold leading-tight">{site.social.tiktokSeanHandle}</span>
                    <span className="mt-0.5 block text-sm leading-tight text-white/60">Sean's daily life on the Red Sea</span>
                  </span>
                  <span className="shrink-0 rounded-full bg-white px-3.5 py-1.5 text-sm font-bold text-navy-950 transition group-hover:bg-gold-300">
                    Follow
                  </span>
                </span>
                <span className="mt-4 flex items-end justify-between gap-3 border-t border-white/10 pt-4">
                  <span>
                    <span className="block font-display text-3xl leading-none text-white">
                      <CountUp to={site.social.tiktokFollowerCount} />+
                    </span>
                    <span className="mt-1 block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-white/50">
                      followers &amp; counting
                    </span>
                  </span>
                  <span className="flex -space-x-2">
                    {[images.reefClownfish, images.snorkelling, images.reefFreediver].map((t, i) => (
                      <img key={i} src={t} alt="" loading="lazy" className="h-12 w-12 rounded-xl border-2 border-navy-950 object-cover" style={{ transform: `rotate(${(i - 1) * 6}deg)` }} />
                    ))}
                  </span>
                </span>
              </span>
            </a>

            {/* ---------- the rest of the ways in ---------- */}
            <LinkRow
              href={`tel:+${site.whatsappNumber}`}
              external={false}
              onClick={hit('call')}
              icon="phone"
              chipClass="bg-teal-400/15 text-teal-300"
              title="Call or save our number"
              sub={site.whatsappDisplay}
            />
            <LinkRow
              href="/lucky-lady-trips.vcf"
              external={false}
              onClick={hit('vcard')}
              icon="users"
              chipClass="bg-gold-400/15 text-gold-300"
              title="Save our contact card"
              sub="One tap to add us to your phone"
            />
            <LinkRow
              href={site.social.tiktok}
              onClick={() => trackTikTok(`links-${src}-boat`)}
              icon="tiktok"
              chipClass="bg-white/10"
              title="TikTok · @luckyladyeg"
              sub="The boats, the trips, the guests"
            />
            <LinkRow
              href={site.social.instagram}
              onClick={hit('instagram')}
              icon="instagram"
              chipClass="bg-gradient-to-br from-[#F58529]/30 via-[#DD2A7B]/30 to-[#8134AF]/30 text-white"
              title="Instagram"
              sub="@one_lucky_lady_boat_trips"
            />
            <LinkRow
              href={`mailto:${site.email}`}
              external={false}
              onClick={hit('email')}
              icon="mail"
              chipClass="bg-sea-500/20 text-sea-300 text-white/80"
              title="Email us"
              sub={site.email}
            />
            <LinkRow
              href="/"
              external={false}
              onClick={hit('website')}
              icon="anchor"
              chipClass="bg-white/10"
              title="Explore the full website"
              sub="Boats, trips, prices & reviews"
            />
          </div>

          {/* ---------- one real review ---------- */}
          <figure className="mt-6 rounded-3xl border border-white/12 bg-white/[0.07] px-5 py-5 backdrop-blur-md">
            <div className="flex gap-1" aria-label={`${review.rating} out of 5 stars`}>
              {Array.from({ length: review.rating }).map((_, i) => (
                <Icon key={i} name="star" className="h-4 w-4 text-gold-400" />
              ))}
            </div>
            <blockquote className="mt-3 text-pretty font-display text-lg italic leading-relaxed text-white/90">
              “{review.text}”
            </blockquote>
            <figcaption className="mt-3 text-sm font-medium text-white/55">
              {review.name} · {review.location}
            </figcaption>
          </figure>

          {/* ---------- trust line ---------- */}
          <p className="mt-7 flex items-center justify-center gap-2 text-center text-sm font-medium text-white/60">
            <Icon name="tag" className="h-4 w-4 text-gold-400" />
            The price you see is the price you pay.
          </p>
          <p className="mt-2 text-center text-xs font-medium tracking-wide text-white/35">
            luckyladytrips.com
          </p>
        </div>
      </main>
    </>
  )
}
