import { useEffect, useRef, useState } from 'react'

const compact = (n) => {
  const v = Math.round(n)
  if (v >= 1000) {
    const k = v / 1000
    return (k % 1 === 0 ? k.toFixed(0) : k.toFixed(1)) + 'K'
  }
  return String(v)
}

/**
 * Counts up to `to` once it scrolls into view. SSG-safe (renders the final value
 * on the server / before JS, so no "0" flash for no-JS or crawlers) and respects
 * prefers-reduced-motion (no animation, just the final value).
 */
export default function CountUp({ to, duration = 1500, format = compact, className = '' }) {
  const ref = useRef(null)
  const [val, setVal] = useState(to) // final value by default (SSR-correct)
  const fired = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !fired.current) {
            fired.current = true
            io.disconnect()
            const start = performance.now()
            setVal(0)
            const tick = (now) => {
              const p = Math.min(1, (now - start) / duration)
              const eased = 1 - Math.pow(1 - p, 3)
              setVal(to * eased)
              if (p < 1) requestAnimationFrame(tick)
              else setVal(to)
            }
            requestAnimationFrame(tick)
          }
        })
      },
      { threshold: 0.5 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [to, duration])

  return (
    <span ref={ref} className={className}>
      {format(val)}
    </span>
  )
}
