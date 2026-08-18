import { useCallback, useEffect, useRef } from 'react'
import { Icon } from './icons.jsx'

/**
 * Minimal, dependency-free lightbox for the gallery. Renders nothing until
 * `index` is set. Arrow keys / swipe-sized buttons step through `photos`,
 * Escape or a backdrop click closes. Scroll is locked while open.
 */
export default function Lightbox({ photos, index, onClose, onStep }) {
  const open = index != null
  const closeRef = useRef(null)

  const step = useCallback(
    (dir) => onStep((index + dir + photos.length) % photos.length),
    [index, photos.length, onStep],
  )

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowRight') step(1)
      else if (e.key === 'ArrowLeft') step(-1)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    closeRef.current?.focus()
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose, step])

  if (!open) return null
  const photo = photos[index]

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${photos.length}: ${photo.alt}`}
      className="fixed inset-0 z-[90] flex items-center justify-center bg-navy-950/95 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
    >
      <figure className="relative flex max-h-full max-w-5xl flex-col" onClick={(e) => e.stopPropagation()}>
        <img
          src={photo.src}
          alt={photo.alt}
          className="max-h-[78vh] w-auto rounded-2xl object-contain shadow-lift"
        />
        <figcaption className="mt-3 flex items-baseline justify-between gap-4 text-sm text-white/70">
          <span className="text-pretty">{photo.alt}</span>
          <span className="shrink-0 tabular-nums text-white/45">
            {index + 1} / {photos.length}
          </span>
        </figcaption>
      </figure>

      <button
        ref={closeRef}
        onClick={onClose}
        aria-label="Close photo"
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
      >
        <Icon name="close" className="h-5 w-5" />
      </button>

      {photos.length > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            aria-label="Previous photo"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:left-5"
          >
            <Icon name="arrowRight" className="h-5 w-5 rotate-180" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); step(1) }}
            aria-label="Next photo"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-5"
          >
            <Icon name="arrowRight" className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  )
}
