import { site } from '../data/site.js'
import { images } from '../data/images.js'
import cn from '../lib/cn.js'

/**
 * Reply reassurance with a real face: Sean's avatar + the honest response-time
 * line from site.reply. A face next to the promise reads as "a real person
 * answers this", which is the whole point at the moment of enquiry.
 * `light` = for dark backgrounds (hero, CTA bands).
 */
export default function ReplyBadge({ light = false, meta = true, className = '' }) {
  return (
    <span className={cn('inline-flex items-center gap-3', className)}>
      <img
        src={images.seanAvatar}
        alt="Sean, your host"
        width="192"
        height="192"
        loading="lazy"
        decoding="async"
        className={cn(
          'h-10 w-10 shrink-0 rounded-full object-cover ring-2',
          light ? 'ring-white/40' : 'ring-teal-600/25'
        )}
      />
      <span className="min-w-0 text-left">
        <span className={cn('block text-sm font-semibold leading-tight', light ? 'text-white' : 'text-navy')}>
          {site.reply.time}
        </span>
        {meta && (
          <span className={cn('mt-0.5 block text-xs leading-tight', light ? 'text-white/70' : 'text-navy/60')}>
            {site.reply.meta}
          </span>
        )}
      </span>
    </span>
  )
}
