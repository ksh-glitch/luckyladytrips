import { Link } from 'react-router-dom'
import SmartImage from './SmartImage.jsx'
import { Icon } from './icons.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import cn from '../lib/cn.js'

function PriceChip({ boat, className = '' }) {
  return (
    <span className={cn('inline-flex items-baseline gap-1 rounded-full bg-navy-900/85 px-3 py-1.5 text-white backdrop-blur', className)}>
      <span className="text-[0.7rem] font-medium uppercase tracking-wider text-white/70">from</span>
      <span className="font-display text-base leading-none">€{boat.priceFrom}</span>
    </span>
  )
}

/**
 * Boat card. `layout="row"` = horizontal (image left) for the homepage list;
 * `layout="tall"` = vertical (image top) for the Boats page grid.
 */
export default function BoatCard({ boat, layout = 'row', flag }) {
  const detailTo = `/boats#${boat.id}`

  if (layout === 'tall') {
    return (
      <article className="card group flex flex-col overflow-hidden transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card">
        <Link to={detailTo} className="relative block aspect-[4/3] overflow-hidden">
          <SmartImage
            src={boat.image}
            alt={boat.imageAlt}
            hasPhoto={boat.hasRealPhoto}
            gradient={boat.placeholderGradient}
            label={`${boat.name} · photo coming soon`}
            icon="anchor"
            className="h-full w-full"
            imgClassName="transition-transform duration-700 ease-smooth group-hover:scale-105"
          />
          <PriceChip boat={boat} className="absolute bottom-3 left-3" />
          {flag && (
            <span className="absolute left-3 top-3 rounded-full bg-gold-500 px-3 py-1 text-xs font-semibold text-navy-900 shadow-soft">
              {flag}
            </span>
          )}
        </Link>
        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-display text-2xl text-navy">{boat.name}</h3>
          <p className="mt-1 text-sm font-medium text-teal-700">{boat.tagline}</p>
          <p className="mt-3 flex-1 text-pretty leading-relaxed text-navy/70">{boat.blurb}</p>
          <dl className="mt-5 flex flex-wrap gap-2">
            <span className="chip-light"><Icon name="users" className="h-4 w-4 text-teal-600" />{boat.capacity}</span>
            {boat.rooms && <span className="chip-light"><Icon name="moon" className="h-4 w-4 text-teal-600" />{boat.rooms} cabins</span>}
          </dl>
          <div className="mt-6 flex items-center gap-3">
            <WhatsAppButton boat={boat.name} label="Check availability" size="sm" className="flex-1" />
            <Link to={detailTo} aria-label={`More about ${boat.name}`} className="btn-secondary btn-sm" >
              Details
            </Link>
          </div>
        </div>
      </article>
    )
  }

  // row layout (horizontal)
  return (
    <article className="card group flex overflow-hidden transition-all duration-300 ease-smooth hover:-translate-y-1 hover:shadow-card">
      <Link to={detailTo} className="relative block w-2/5 shrink-0 overflow-hidden sm:w-[38%]" aria-label={boat.name}>
        <SmartImage
          src={boat.image}
          alt={boat.imageAlt}
          hasPhoto={boat.hasRealPhoto}
          gradient={boat.placeholderGradient}
          label="Photo soon"
          icon="anchor"
          className="h-full min-h-[190px] w-full"
          imgClassName="transition-transform duration-700 ease-smooth group-hover:scale-105"
        />
        <PriceChip boat={boat} className="absolute bottom-2.5 left-2.5" />
        {flag && (
          <span className="absolute left-2.5 top-2.5 rounded-full bg-gold-500 px-2.5 py-0.5 text-[0.68rem] font-semibold text-navy-900 shadow-soft">
            {flag}
          </span>
        )}
      </Link>

      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-6">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="font-display text-xl leading-tight text-navy sm:text-2xl">{boat.name}</h3>
            <p className="mt-0.5 text-sm font-medium text-teal-700">{boat.tagline}</p>
          </div>
        </div>

        <div className="mt-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium text-navy/75">
            <Icon name="users" className="h-3.5 w-3.5 text-teal-600" />{boat.capacity}
          </span>
          <span className="hidden items-center gap-1.5 rounded-full bg-sand-100 px-2.5 py-1 text-xs font-medium text-navy/75 sm:inline-flex">
            <Icon name="anchor" className="h-3.5 w-3.5 text-teal-600" />{boat.bestFor}
          </span>
        </div>

        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-navy/65 sm:line-clamp-3">{boat.blurb}</p>

        <div className="mt-auto flex items-center justify-between pt-4">
          <Link to={detailTo} className="link-underline inline-flex items-center gap-1 text-sm">
            View boat
            <Icon name="arrowRight" className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <span className="text-sm text-navy/65">
            <span className="font-display text-lg text-navy">€{boat.priceFrom}</span> / day
          </span>
        </div>
      </div>
    </article>
  )
}
