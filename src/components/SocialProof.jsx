import { reviews, reviewsPublished, trustPoints } from '../data/reviews.js'
import ReviewCard from './ReviewCard.jsx'
import { Icon } from './icons.jsx'
import { site } from '../data/site.js'

/**
 * Social proof. Shows real reviews once `reviewsPublished` is true; until then,
 * an honest, premium placeholder (no fabricated testimonials).
 */
export default function SocialProof({ compact = false }) {
  if (reviewsPublished && reviews.length) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {reviews.slice(0, compact ? 3 : reviews.length).map((r, i) => (
          <ReviewCard key={i} review={r} />
        ))}
      </div>
    )
  }

  return (
    <div className="grid items-center gap-6 lg:grid-cols-3">
      {trustPoints.map((t, i) => (
        <div key={i} className="card flex items-start gap-3 p-6">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-teal-700">
            <Icon name={['heart', 'users', 'shield'][i] || 'sparkle'} className="h-5 w-5" />
          </span>
          <p className="text-pretty font-medium leading-snug text-navy/80">{t}</p>
        </div>
      ))}
      <div className="lg:col-span-3">
        <div className="flex flex-col items-center gap-3 rounded-4xl border border-dashed border-sand-300 bg-white/40 px-6 py-8 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            <Icon name="star" className="h-3.5 w-3.5 text-gold-400" />
            Guest reviews coming soon
          </span>
          <p className="max-w-xl text-pretty text-navy/65">
            We&apos;re collecting reviews from real guests. In the meantime, see the days for yourself on
            Sean&apos;s TikTok — {site.social.tiktokFollowers} followers and counting.
          </p>
          <a href={site.social.tiktokSean} target="_blank" rel="noopener noreferrer" className="link-underline inline-flex items-center gap-1.5 text-sm">
            <Icon name="tiktok" className="h-4 w-4" />
            Watch on TikTok
          </a>
        </div>
      </div>
    </div>
  )
}
