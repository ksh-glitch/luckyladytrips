import cn from '../lib/cn.js'

/**
 * Editorial section heading: eyebrow + serif title + optional intro.
 */
export default function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  as: Tag = 'h2',
  id,
  className = '',
  titleClassName = '',
  light = false,
}) {
  const centered = align === 'center'
  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow && (
        <span className={cn('eyebrow', light && '!text-gold-300', centered && 'before:hidden')}>
          {eyebrow}
        </span>
      )}
      <Tag
        id={id}
        className={cn(
          'mt-3 text-display-sm sm:text-display font-display text-balance',
          light ? 'text-white' : 'text-navy',
          titleClassName,
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p className={cn('mt-4 text-pretty text-[1.05rem] leading-relaxed', light ? 'text-white/80' : 'text-navy/70')}>
          {intro}
        </p>
      )}
    </div>
  )
}
