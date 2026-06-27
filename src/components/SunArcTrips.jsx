import { useEffect, useRef } from 'react'
import SectionHeading from './SectionHeading.jsx'
import TripTypeCard from './TripTypeCard.jsx'
import Reveal from './Reveal.jsx'

// Sky palette stops for the day → dusk → night arc. [topRGB, bottomRGB].
const STOPS = [
  [[244, 197, 107], [243, 227, 201]], // golden hour
  [[111, 183, 196], [205, 233, 236]], // teal midday/dusk
  [[6, 32, 63], [11, 37, 69]], // deep night navy
]
const lerp = (a, b, t) => Math.round(a + (b - a) * t)
const mix = (c1, c2, t) => `rgb(${lerp(c1[0], c2[0], t)},${lerp(c1[1], c2[1], t)},${lerp(c1[2], c2[2], t)})`

function skyAt(p) {
  // p 0..1 across the section's traversal of the viewport.
  const [a, b] = p < 0.5 ? [STOPS[0], STOPS[1]] : [STOPS[1], STOPS[2]]
  const t = p < 0.5 ? p / 0.5 : (p - 0.5) / 0.5
  return { top: mix(a[0], b[0], t), bottom: mix(a[1], b[1], t) }
}

/**
 * Signature "sun-arc" Trip Types section. As the visitor scrolls through, the
 * sky grades from golden-hour gold → teal dusk → deep night navy, and a sun
 * marker arcs across and hands off to a moon. The six trips already run a
 * morning-to-night order, so the page itself dramatizes "a day on the water".
 *
 * Concept-driven motion (Awwwards Creativity) with no library: a rAF-throttled
 * scroll listener sets CSS variables; everything else is CSS. Works in every
 * modern browser (incl. Firefox). Respects prefers-reduced-motion by rendering
 * a single static graded sky. Cards stay opaque white so text contrast is
 * constant regardless of the sky behind them.
 */
export default function SunArcTrips({ trips }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) {
      // Static, pleasant golden-to-teal sky; sun at its peak.
      const s = skyAt(0.32)
      el.style.setProperty('--sky-top', s.top)
      el.style.setProperty('--sky-bottom', s.bottom)
      el.style.setProperty('--sun-x', '0.5')
      el.style.setProperty('--sun-y', '1')
      el.style.setProperty('--day', '0.32')
      return
    }

    let ticking = false
    const update = () => {
      ticking = false
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight || 1
      // 0 as the section enters from the bottom → 1 as it exits past the top.
      const p = Math.min(1, Math.max(0, (vh - rect.top) / (vh + rect.height)))
      const s = skyAt(p)
      el.style.setProperty('--sky-top', s.top)
      el.style.setProperty('--sky-bottom', s.bottom)
      el.style.setProperty('--day', p.toFixed(3))
      el.style.setProperty('--sun-x', p.toFixed(3))
      el.style.setProperty('--sun-y', Math.sin(p * Math.PI).toFixed(3)) // 0 at ends, 1 at peak
    }
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="section relative overflow-hidden"
      style={{ '--sky-top': 'rgb(244,197,107)', '--sky-bottom': 'rgb(243,227,201)', '--sun-x': '0.5', '--sun-y': '1', '--day': '0.32' }}
    >
      {/* Sky */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ background: 'linear-gradient(to bottom, var(--sky-top), var(--sky-bottom))' }} />
      {/* Sun / moon marker travelling the arc */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-[55%]">
        <div
          className="absolute h-16 w-16 -translate-x-1/2 rounded-full"
          style={{
            left: 'calc(var(--sun-x) * 100%)',
            top: 'calc((1 - var(--sun-y)) * 100%)',
          }}
        >
          {/* sun */}
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#FFF1CE_0%,#F6C56B_55%,rgba(246,197,107,0)_72%)]" style={{ opacity: 'calc(1 - var(--day))' }} />
          {/* moon */}
          <span className="absolute inset-0 rounded-full bg-[radial-gradient(circle,#F4F7FF_0%,#C8D6EC_52%,rgba(200,214,236,0)_70%)]" style={{ opacity: 'var(--day)' }} />
        </div>
      </div>
      {/* subtle grain to bind the gradient */}
      <div aria-hidden="true" className="grain-layer pointer-events-none absolute inset-0 opacity-[0.05]" />

      <div className="container relative z-10">
        <SectionHeading
          eyebrow="Ways to spend the day"
          title="Find your kind of day on the water"
          intro="From a slow golden morning to dinner under the stars — every trip is private and built around your group. Tap any to start a WhatsApp enquiry."
          align="center"
          className="mx-auto"
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trips.map((trip, i) => (
            <Reveal key={trip.id} delay={(i % 3) * 90} direction="up">
              <TripTypeCard trip={trip} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
