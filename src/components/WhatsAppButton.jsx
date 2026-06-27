import { Icon } from './icons.jsx'
import { whatsappUrl, enquiryFor, quoteRequest } from '../lib/whatsapp.js'
import { trackWhatsApp } from '../lib/analytics.js'
import cn from '../lib/cn.js'

const VARIANTS = {
  primary: 'btn-primary',
  white: 'btn bg-white text-teal-700 shadow-cta hover:-translate-y-0.5 hover:shadow-lift hover:bg-white',
  outline: 'btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20',
  gold: 'btn bg-gold-500 text-navy-900 shadow-soft hover:bg-gold-400 hover:-translate-y-0.5',
  // Text-style CTA (no button chrome) for the soft "get prices" path. Colour via className.
  link: 'inline-flex items-center gap-1.5 font-semibold underline-offset-4 transition hover:underline',
}
const SIZES = { sm: 'btn-sm', md: '', lg: 'btn-lg' }

/**
 * The single reusable WhatsApp CTA.
 *  - `intent="book"` (default) pre-fills the full enquiry template.
 *  - `intent="quote"` pre-fills a lighter "send me dates & prices" message — the
 *    soft path for visitors not ready to book, so their number is still captured.
 * Pass `boat` / `trip` / `context` to tailor the message, or `message` to override.
 * Every link carries the `source` into BOTH analytics and the message body
 * (as "— ref: …"), so Sean can see where each enquiry came from inside WhatsApp.
 */
export default function WhatsAppButton({
  label,
  message,
  boat,
  trip,
  context,
  source = 'cta',
  intent = 'book',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  showIcon = true,
  className = '',
  onClick,
  ...props
}) {
  const isQuote = intent === 'quote'
  const resolvedLabel = label ?? (isQuote ? 'Get dates & prices' : 'Check availability')
  const base = boat ? `${source}:${boat}` : source
  const src = isQuote ? `quote:${base}` : base
  const text =
    message ??
    (isQuote
      ? quoteRequest({ boat, trip })
      : boat || trip || context
        ? enquiryFor({ boat, trip, context })
        : undefined)

  const handleClick = (e) => {
    trackWhatsApp(src)
    onClick?.(e)
  }
  return (
    <a
      href={whatsappUrl(text, src)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${resolvedLabel} on WhatsApp`}
      onClick={handleClick}
      className={cn('group', VARIANTS[variant], SIZES[size], fullWidth && 'w-full', className)}
      {...props}
    >
      {showIcon && <Icon name="whatsapp" className="h-[1.2em] w-[1.2em]" />}
      <span>{resolvedLabel}</span>
    </a>
  )
}
