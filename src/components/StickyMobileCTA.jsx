import { useEffect, useState } from 'react'
import { Icon } from './icons.jsx'
import { whatsappUrl, enquiryFor } from '../lib/whatsapp.js'
import { useEnquiry } from '../lib/EnquiryContext.jsx'
import { trackWhatsApp } from '../lib/analytics.js'
import { site } from '../data/site.js'

/**
 * Essential mobile sticky CTA. Slides up after the user scrolls past the hero.
 * The whole bar is one large tap target that opens a pre-filled WhatsApp chat —
 * pre-filled with the boat/trip the visitor is currently viewing when known.
 */
export default function StickyMobileCTA() {
  const [show, setShow] = useState(false)
  const enquiry = useEnquiry()

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const href = enquiry ? whatsappUrl(enquiryFor(enquiry)) : whatsappUrl()
  const subtitle = enquiry?.boat
    ? `${enquiry.boat} · ${site.reply.time.toLowerCase()}`
    : site.reply.time

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] transition-all duration-300 ease-smooth lg:hidden ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-6 opacity-0'
      }`}
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Check availability on WhatsApp"
        onClick={() => trackWhatsApp(enquiry?.source ? `sticky:${enquiry.source}` : 'sticky')}
        className="flex items-center gap-3 rounded-full bg-teal-600 px-4 py-3 text-white shadow-lift ring-1 ring-white/15 transition active:translate-y-px"
      >
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/15">
          <Icon name="whatsapp" className="h-6 w-6" />
        </span>
        <span className="min-w-0 flex-1">
          <span className="block text-[0.95rem] font-bold leading-tight">Check availability</span>
          <span className="block truncate text-xs text-white/80">{subtitle}</span>
        </span>
        <Icon name="arrowRight" className="h-5 w-5 shrink-0 text-white/90" />
      </a>
    </div>
  )
}
