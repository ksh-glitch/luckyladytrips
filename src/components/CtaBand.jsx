import cn from '../lib/cn.js'

/**
 * The one closing CTA band. Every inner page ends on this exact surface:
 * navy, gold hairline, teal orb, same radius and rhythm. Children supply
 * the heading, copy and buttons.
 */
export default function CtaBand({ children, className = '' }) {
  return (
    <div className={cn('on-dark relative overflow-hidden rounded-5xl bg-navy-900 px-6 py-14 text-center text-white sm:px-12 sm:py-16', className)}>
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-500/60 to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-16 h-64 w-64 rounded-full bg-teal-500/15 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  )
}
