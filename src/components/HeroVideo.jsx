import { useEffect, useRef, useState } from 'react'
import SmartImage from './SmartImage.jsx'

/**
 * Cinematic, poster-first hero media.
 *
 * The graded still (`poster`) is ALWAYS the LCP element — eager, high priority.
 * A muted/looping video (`src`) lazily fades in OVER it, but only when it's
 * worth it: desktop-class viewport, fine pointer, not reduced-motion, not
 * Save-Data. On mobile / slow connections / reduced-motion we simply keep the
 * poster, so Core Web Vitals are never hurt. A visible pause control satisfies
 * WCAG 2.2.2 (pause/stop/hide for auto-playing media).
 *
 * Dormant until real footage exists: pass `src={null}` and it renders only the
 * poster — identical to a plain image hero.
 *
 * Overlays (gradients, grain, content scrim) are passed as children and render
 * above both poster and video.
 */
export default function HeroVideo({ poster, src, alt = '', className = '', imgClassName = '', children }) {
  const rootRef = useRef(null)
  const videoRef = useRef(null)
  const [enabled, setEnabled] = useState(false) // device is allowed video
  const [mounted, setMounted] = useState(false) // video element is in the DOM (in view)
  const [playing, setPlaying] = useState(false)

  // Decide whether this session should get video, then lazy-mount when in view.
  useEffect(() => {
    if (!src || typeof window === 'undefined') return
    const okViewport = window.matchMedia('(min-width: 768px)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const saveData = navigator.connection?.saveData === true
    if (!okViewport || !finePointer || reduce || saveData) return
    setEnabled(true)

    const el = rootRef.current
    if (!el || typeof IntersectionObserver === 'undefined') {
      setMounted(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setMounted(true), io.disconnect())),
      { threshold: 0.1 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [src])

  useEffect(() => {
    const vid = videoRef.current
    if (mounted && vid) vid.play().then(() => setPlaying(true)).catch(() => {})
  }, [mounted])

  const toggle = () => {
    const vid = videoRef.current
    if (!vid) return
    if (vid.paused) vid.play().then(() => setPlaying(true)).catch(() => {})
    else { vid.pause(); setPlaying(false) }
  }

  return (
    <div ref={rootRef} className={`relative overflow-hidden ${className}`}>
      <SmartImage src={poster} alt={alt} className="h-full w-full" imgClassName={imgClassName} loading="eager" fetchPriority="high" />

      {enabled && mounted && src && (
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-out ${playing ? 'opacity-100' : 'opacity-0'}`}
          src={src}
          muted
          loop
          playsInline
          autoPlay
          preload="none"
          aria-hidden="true"
          tabIndex={-1}
        />
      )}

      {children}

      {enabled && src && (
        <button
          type="button"
          onClick={toggle}
          aria-label={playing ? 'Pause background video' : 'Play background video'}
          className="absolute bottom-4 right-4 z-30 flex h-10 w-10 items-center justify-center rounded-full bg-navy-950/40 text-white ring-1 ring-white/25 backdrop-blur transition hover:bg-navy-950/60 focus-visible:outline-2"
        >
          {playing ? (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><rect x="6" y="5" width="4" height="14" rx="1" /><rect x="14" y="5" width="4" height="14" rx="1" /></svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13a1 1 0 0 0 1.5.87l11-6.5a1 1 0 0 0 0-1.74l-11-6.5A1 1 0 0 0 8 5.5Z" /></svg>
          )}
        </button>
      )}
    </div>
  )
}
