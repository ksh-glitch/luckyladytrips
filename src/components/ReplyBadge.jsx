import { site } from '../data/site.js'
import { images } from '../data/images.js'
import { whatsappUrl } from '../lib/whatsapp.js'
import { trackWhatsApp } from '../lib/analytics.js'
import { Icon } from './icons.jsx'
import cn from '../lib/cn.js'

/**
 * "A real person answers this" reassurance, built to be seen: Sean's face at a
 * size you can actually read, a live green dot, and the reply promise as the
 * headline rather than fine print.
 *
 * `source` makes the whole badge a tappable WhatsApp entry point (attributed
 * like any other CTA) — use it wherever the badge stands alone. Omit it beside
 * a form's submit button, where a second link would compete with the button.
 * `light` styles it for dark backgrounds (hero, CTA bands).
 */
export default function ReplyBadge({ light = false, source, className = '' }) {
  const interactive = Boolean(source)
  const src = `reply-badge:${source}`

  const shell = cn(
    'inline-flex max-w-full items-center gap-3.5 rounded-full py-2 pl-2 pr-4 text-left transition duration-300 ease-smooth sm:pr-5',
    light
      ? 'border border-white/25 bg-white/12 backdrop-blur'
      : 'border border-sand-200 bg-white shadow-soft',
    interactive && 'group hover:-translate-y-0.5',
    interactive && (light ? 'hover:bg-white/20' : 'hover:border-teal-600/30 hover:shadow-lift'),
    className
  )

  const inner = (
    <>
      <span className="relative shrink-0">
        <img
          src={images.seanAvatar}
          alt="Sean, your host in Soma Bay"
          width="192"
          height="192"
          loading="lazy"
          decoding="async"
          className={cn(
            'h-12 w-12 rounded-full object-cover ring-2 sm:h-14 sm:w-14',
            light ? 'ring-white/60' : 'ring-teal-600/25'
          )}
        />
        {/* Live "online" dot — the halo is what pulls the eye across the page. */}
        <span aria-hidden="true" className="absolute -bottom-0.5 -right-0.5 flex h-3.5 w-3.5 sm:h-4 sm:w-4">
          <span className="absolute inline-flex h-full w-full animate-live-ping rounded-full bg-emerald-400" />
          <span
            className={cn(
              'relative inline-flex h-full w-full rounded-full bg-emerald-500 ring-2',
              light ? 'ring-navy-950/70' : 'ring-white'
            )}
          />
        </span>
      </span>

      <span className="min-w-0">
        <span
          className={cn(
            'block text-[0.95rem] font-bold leading-tight sm:text-base',
            light ? 'text-white' : 'text-navy'
          )}
        >
          {site.reply.lead}
        </span>
        <span
          className={cn(
            'mt-0.5 block text-xs leading-tight sm:text-sm',
            light ? 'text-white/75' : 'text-navy/65'
          )}
        >
          {site.reply.time}
        </span>
      </span>

      {interactive && (
        <Icon
          name="whatsapp"
          aria-hidden="true"
          className={cn(
            'ml-0.5 h-5 w-5 shrink-0 transition-transform duration-300 ease-smooth group-hover:scale-110',
            light ? 'text-emerald-300' : 'text-teal-600'
          )}
        />
      )}
    </>
  )

  if (!interactive) return <span className={shell}>{inner}</span>

  return (
    <a
      href={whatsappUrl(undefined, src)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsApp(src)}
      aria-label={`${site.reply.lead} on WhatsApp — ${site.reply.time.toLowerCase()}`}
      className={shell}
    >
      {inner}
    </a>
  )
}
