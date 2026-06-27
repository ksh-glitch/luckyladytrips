import { Icon } from './icons.jsx'
import { whatsappUrl, enquiryFor } from '../lib/whatsapp.js'
import { trackWhatsApp } from '../lib/analytics.js'
import cn from '../lib/cn.js'

const VARIANTS = {
  primary: 'btn-primary',
  white: 'btn bg-white text-teal-700 shadow-cta hover:-translate-y-0.5 hover:shadow-lift hover:bg-white',
  outline: 'btn border border-white/40 bg-white/10 text-white backdrop-blur hover:bg-white/20',
  gold: 'btn bg-gold-500 text-navy-900 shadow-soft hover:bg-gold-400 hover:-translate-y-0.5',
}
const SIZES = { sm: 'btn-sm', md: '', lg: 'btn-lg' }

/**
 * The single reusable "Check availability" WhatsApp CTA.
 * Pass `boat`/`trip`/`context` to pre-fill a tailored enquiry, or `message`.
 */
export default function WhatsAppButton({
  label = 'Check availability',
  message,
  boat,
  trip,
  context,
  source = 'cta',
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  showIcon = true,
  className = '',
  onClick,
  ...props
}) {
  const text = message || (boat || trip || context ? enquiryFor({ boat, trip, context }) : undefined)
  const handleClick = (e) => {
    trackWhatsApp(boat ? `${source}:${boat}` : source)
    onClick?.(e)
  }
  return (
    <a
      href={whatsappUrl(text)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${label} on WhatsApp`}
      onClick={handleClick}
      className={cn('group', VARIANTS[variant], SIZES[size], fullWidth && 'w-full', className)}
      {...props}
    >
      {showIcon && <Icon name="whatsapp" className="h-[1.2em] w-[1.2em]" />}
      <span>{label}</span>
    </a>
  )
}
