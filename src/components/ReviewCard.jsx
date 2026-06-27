import { Icon } from './icons.jsx'

function Stars({ rating = 5 }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Icon key={i} name="star" className={i < rating ? 'h-4 w-4 text-gold-500' : 'h-4 w-4 text-sand-300'} />
      ))}
    </div>
  )
}

/**
 * Real guest review card. Used once reviews are added to data/reviews.js.
 */
export default function ReviewCard({ review }) {
  return (
    <figure className="card flex flex-col p-6">
      <Stars rating={review.rating} />
      <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-navy/80">
        “{review.text}”
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between border-t border-sand-200 pt-4">
        <div>
          <p className="font-semibold text-navy">{review.name}</p>
          {review.location && <p className="text-sm text-navy/65">{review.location}</p>}
        </div>
        {review.source && (
          <span className="inline-flex items-center gap-1 text-xs font-medium text-navy/65">
            <Icon name="check" className="h-3.5 w-3.5 text-teal-600" />
            {review.source}
          </span>
        )}
      </figcaption>
    </figure>
  )
}
