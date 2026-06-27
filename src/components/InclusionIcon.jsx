import { Icon } from './icons.jsx'
import cn from '../lib/cn.js'

/**
 * Single inclusion pill used in the homepage inclusions strip.
 */
export default function InclusionIcon({ icon, label, className = '' }) {
  return (
    <div
      className={cn(
        'flex items-center gap-2.5 rounded-2xl border border-sand-200/70 bg-white/70 px-3.5 py-3 shadow-soft backdrop-blur-sm',
        className,
      )}
    >
      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-700">
        <Icon name={icon} className="h-5 w-5" />
      </span>
      <span className="text-sm font-semibold leading-tight text-navy">{label}</span>
    </div>
  )
}
