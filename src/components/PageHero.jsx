import cn from '../lib/cn.js'

/**
 * Warm ivory hero for inner pages. Clears the fixed header and adds tasteful,
 * subtle decoration (no heavy backgrounds).
 */
export default function PageHero({ eyebrow, title, intro, children, align = 'left', className = '' }) {
  const centered = align === 'center'
  return (
    <section className={cn('relative overflow-hidden pt-28 lg:pt-36', className)}>
      {/* soft sea-blue glow, top-right */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-10 h-72 w-72 rounded-full bg-sea-300/30 blur-3xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -left-20 top-24 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />

      <div className="container relative pb-10 lg:pb-14">
        <div className={cn('max-w-3xl', centered && 'mx-auto text-center')}>
          {eyebrow && <span className={cn('eyebrow', centered && 'before:hidden sm:before:inline-block')}>{eyebrow}</span>}
          <h1 className="mt-3 text-balance font-display text-[2.4rem] leading-[1.05] text-navy sm:text-display lg:text-display-lg">
            {title}
          </h1>
          {intro && (
            <p className={cn('mt-5 text-pretty text-lg leading-relaxed text-navy/70', centered ? 'mx-auto max-w-2xl' : 'max-w-2xl')}>
              {intro}
            </p>
          )}
          {children && <div className={cn('mt-7 flex flex-wrap gap-3', centered && 'justify-center')}>{children}</div>}
        </div>
      </div>
    </section>
  )
}
