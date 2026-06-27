import { useEffect, useRef, useState } from 'react'

// Hidden-state transform per direction. Content "enters" from this offset.
const FROM = {
  up: 'translateY(22px)',
  down: 'translateY(-22px)',
  left: 'translateX(-28px)',
  right: 'translateX(28px)',
  in: 'scale(0.96)',
  none: 'none',
}

/**
 * Lightweight scroll-reveal. Adds .is-visible once in view (CSS handles the
 * transition). Respects prefers-reduced-motion via the CSS in globals.css.
 * Renders visible by default on the server so content is never hidden pre-JS
 * (important for SSG + no-JS fallback — this is why we don't use a JS-driven
 * library for the entrance, which would ship hidden markup).
 *
 * @param {('up'|'down'|'left'|'right'|'in'|'none')} [direction] entrance direction
 * @param {number} [delay] stagger delay in ms
 */
export default function Reveal({ as: Tag = 'div', delay = 0, direction = 'up', className = '', style, children, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            io.unobserve(e.target)
          }
        })
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.08 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  const revealStyle = {
    ...(direction !== 'up' ? { '--reveal-from': FROM[direction] || FROM.up } : null),
    ...(delay ? { transitionDelay: `${delay}ms` } : null),
    ...style,
  }

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={Object.keys(revealStyle).length ? revealStyle : undefined}
      {...props}
    >
      {children}
    </Tag>
  )
}
