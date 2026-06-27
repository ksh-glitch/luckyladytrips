import { Icon } from './icons.jsx'

function MarqueeReview({ review }) {
  return (
    <figure className="card mx-2.5 flex w-[18.5rem] shrink-0 flex-col p-5">
      <div className="flex gap-0.5" aria-label={`${review.rating} out of 5 stars`}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Icon key={i} name="star" className={i < review.rating ? 'h-4 w-4 text-gold-500' : 'h-4 w-4 text-sand-300'} />
        ))}
      </div>
      <blockquote className="mt-3 flex-1 text-pretty text-sm leading-relaxed text-navy/80">
        &ldquo;{review.text}&rdquo;
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <span className="font-semibold text-navy">{review.name}</span>
        {review.location && <span className="text-navy/60"> · {review.location}</span>}
      </figcaption>
    </figure>
  )
}

/**
 * Seamless, auto-scrolling row of guest reviews. CSS-only (no JS/rAF), pauses on
 * hover/focus, and degrades to a horizontally scrollable static row under
 * prefers-reduced-motion. Two identical copies make the loop seamless.
 */
export default function ReviewMarquee({ reviews }) {
  if (!reviews?.length) return null
  const Copy = ({ hidden }) => (
    <ul className="flex shrink-0 items-stretch" aria-hidden={hidden || undefined}>
      {reviews.map((r, i) => (
        <li key={i} className="flex">
          <MarqueeReview review={r} />
        </li>
      ))}
    </ul>
  )
  return (
    <div className="marquee-viewport no-scrollbar mask-fade-x relative -mx-4 overflow-hidden py-1">
      <div className="marquee-track">
        <Copy />
        <Copy hidden />
      </div>
    </div>
  )
}
