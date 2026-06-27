import { Link } from 'react-router-dom'
import { images } from '../data/images.js'
import { site } from '../data/site.js'
import cn from '../lib/cn.js'

const SRC = {
  color: images.logoHorizontal,
  white: images.logoWhite,
  navy: images.logoNavy,
  emblem: images.logoEmblem,
}

/**
 * Brand logo. Wraps in a Link to home unless `as="span"`.
 * variant: 'color' (header) | 'white' (dark footer) | 'navy' | 'emblem'
 */
export default function Logo({ variant = 'color', className = '', imgClassName = 'h-9 w-auto', as = 'link' }) {
  const img = (
    <img
      src={SRC[variant] || SRC.color}
      alt={`${site.name} logo`}
      className={imgClassName}
      width="180"
      height="48"
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
