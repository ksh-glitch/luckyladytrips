import { useEffect, useRef } from 'react'
import cn from '../lib/cn.js'

/**
 * The boat's own walk-around clip as its detail-page media: poster-first,
 * muted 6s loop, plays inline on phones. Reduced-motion users get the poster.
 */
export default function BoatClip({ clip, poster, alt, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) v.pause()
    else v.play().catch(() => {}) // some browsers hold muted autoplay until nudged
  }, [])
  return (
    <video
      ref={ref}
      src={clip}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={alt}
      className={cn('w-full object-cover', className)}
    />
  )
}
