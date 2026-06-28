import { Link, useLocation } from 'react-router-dom'
import { site, nav, footerExplore } from '../data/site.js'
import { Icon } from './icons.jsx'
import { trackTikTok, trackWhatsApp } from '../lib/analytics.js'
import { whatsappUrl } from '../lib/whatsapp.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import Logo from './Logo.jsx'

export default function Footer() {
  const year = 2025
  // The homepage already closes with its own full-bleed final CTA, so the
  // footer's CTA band would be a second "book now" in a row. Show it on every
  // other page (which have no such closer), hide it on home.
  const { pathname } = useLocation()
  const showCtaBand = pathname !== '/'

  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      {/* top hairline accent */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />

      <div className="container py-14 lg:py-16">
        {/* CTA band — skipped on the homepage to avoid back-to-back CTAs */}
        {showCtaBand && (
          <div className="mb-12 flex flex-col items-start justify-between gap-5 rounded-4xl border border-white/10 bg-white/[0.04] p-7 sm:flex-row sm:items-center sm:p-9">
            <div>
              <p className="eyebrow !text-gold-300 before:!bg-gold-400">Plan your day</p>
              <p className="mt-2 font-display text-2xl sm:text-3xl text-balance">
                Ready when you are. Let&apos;s find your date.
              </p>
            </div>
            <WhatsAppButton variant="white" size="lg" source="footer" className="shrink-0" />
          </div>
        )}

        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <Logo variant="white" imgClassName="h-12 w-auto" />
            <p className="mt-5 max-w-sm text-pretty leading-relaxed text-white/70">
              Private, all-inclusive Red Sea boat trips from Soma Bay &amp; Hurghada. Three boats, one
              experience, and the price you see is the price you pay.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {site.locations.map((l) => (
                <span key={l} className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-white/80">
                  <Icon name="mapPin" className="h-3.5 w-3.5 text-gold-400" />
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Pages */}
          <nav className="md:col-span-3" aria-label="Site">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Explore</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-white/75 transition hover:text-gold-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SEO landing pages */}
          <nav className="md:col-span-4" aria-label="Popular trips">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">Popular trips</h2>
            <ul className="mt-4 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {footerExplore.map((item) => (
                <li key={item.to}>
                  <Link to={item.to} className="text-sm text-white/70 transition hover:text-gold-300">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact row */}
        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/75">
            <a href={whatsappUrl(undefined, 'footer-number')} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsApp('footer-number')} className="inline-flex items-center gap-2 hover:text-gold-300">
              <Icon name="whatsapp" className="h-4 w-4 text-teal-400" />
              {site.whatsappDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-gold-300">
              <Icon name="mail" className="h-4 w-4 text-teal-400" />
              {site.email}
            </a>
            <a href={site.social.tiktokSean} target="_blank" rel="noopener noreferrer" onClick={() => trackTikTok('footer')} className="inline-flex items-center gap-2 hover:text-gold-300">
              <Icon name="tiktok" className="h-4 w-4 text-teal-400" />
              {site.social.tiktokSeanHandle}
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href={site.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold-400 hover:text-gold-300">
              <Icon name="instagram" className="h-4 w-4" />
            </a>
            <a href={site.social.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/80 transition hover:border-gold-400 hover:text-gold-300">
              <Icon name="tiktok" className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-1 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.legalName}. All rights reserved.</p>
          <p>{site.domain} · Soma Bay · Red Sea · Egypt</p>
        </div>
      </div>

      {/* keep last content clear of the mobile sticky CTA */}
      <div className="h-16 lg:hidden" aria-hidden="true" />
    </footer>
  )
}
