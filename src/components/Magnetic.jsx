import { useRef } from 'react'

/**
 * Subtle "magnetic" pull on the single most important element (the hero CTA).
 * Strictly gated to fine pointers and no-reduced-motion, so it's invisible on
 * the touch-first mobile audience and additive only. The displacement is small
 * enough that the target never dodges the cursor; focus-visible is untouched
 * because we only translate a wrapper span, not the button itself.
 */
export default function Magnetic({ children, strength = 0.28, className = '' }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    if (!window.matchMedia('(pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const r = el.getBoundingClientRect()
    const x = (e.clientX - (r.left + r.width / 2)) * strength
    const y = (e.clientY - (r.top + r.height / 2)) * strength
    el.style.transform = `translate(${x.toFixed(1)}px, ${y.toFixed(1)}px)`
  }

  const reset = () => {
    if (ref.current) ref.current.style.transform = ''
  }

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={`inline-block transition-transform duration-300 ease-smooth will-change-transform ${className}`}
    >
      {children}
    </span>
  )
}
