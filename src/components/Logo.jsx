import { Link } from 'react-router-dom'
import { images } from '../data/images.js'
import { site } from '../data/site.js'
import cn from '../lib/cn.js'

// Each variant has its own intrinsic pixel size — declaring the real width/height
// reserves the correct aspect-ratio box (no layout shift on load) and stops the
// logo looking slightly squished/offset.
const VARIANTS = {
  color: { src: images.logoPrimary, w: 600, h: 204 },
  white: { src: images.logoWhite, w: 156, h: 130 },
  navy: { src: images.logoNavy, w: 153, h: 130 },
  emblem: { src: images.logoEmblem, w: 245, h: 256 },
}

/**
 * Brand logo. Wraps in a Link to home unless `as="span"`.
 * variant: 'color' (header) | 'white' (dark footer) | 'navy' | 'emblem'
 */
export default function Logo({ variant = 'color', className = '', imgClassName = 'h-9 w-auto', as = 'link' }) {
  const v = VARIANTS[variant] || VARIANTS.color
  const img = (
    <img
      src={v.src}
      alt={`${site.name} logo`}
      className={imgClassName}
      width={v.w}
      height={v.h}
      decoding="async"
    />
  )
  if (as === 'span') return <span className={cn('inline-flex items-center', className)}>{img}</span>
  return (
    <Link to="/" aria-label={`${site.name} — home`} className={cn('inline-flex items-center', className)}>
      {img}
    </Link>
  )
}
