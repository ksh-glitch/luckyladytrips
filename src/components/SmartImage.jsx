import { useState } from 'react'
import { Icon } from './icons.jsx'

// Elegant placeholder: warm gradient + label, used when a real photo isn't in
// /public/assets yet. Drop the file in and set the data's image to it — done.
function Placeholder({ gradient = 'from-navy-900 via-sea-700 to-teal-600', label, icon = 'anchor', className = '' }) {
  return (
    <div
      className={`absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br ${gradient} ${className}`}
      aria-hidden="true"
    >
      {/* soft wave detail */}
      <svg viewBox="0 0 400 120" preserveAspectRatio="none" className="absolute bottom-0 left-0 h-1/3 w-full opacity-25">
        <path d="M0 70 Q 100 30 200 70 T 400 70 V120 H0 Z" fill="white" />
        <path d="M0 90 Q 100 55 200 90 T 400 90 V120 H0 Z" fill="white" opacity="0.5" />
      </svg>
      <Icon name={icon} className="h-8 w-8 text-white/85" />
      {label && (
        <span className="px-4 text-center text-sm font-medium uppercase tracking-widest text-white/85">
          {label}
        </span>
      )}
    </div>
  )
}

/**
 * Image with a graceful gradient fallback.
 * - hasPhoto={false}  → always render the placeholder (no network request)
 * - hasPhoto truthy   → render the photo over the gradient; fall back on error
 */
export default function SmartImage({
  src,
  alt = '',
  hasPhoto = true,
  gradient,
  label,
  icon,
  className = '',
  imgClassName = '',
  loading = 'lazy',
  fetchPriority,
  sizes,
  width,
  height,
}) {
  const [failed, setFailed] = useState(false)
  const showPhoto = hasPhoto && src && !failed

  return (
    <div className={`relative overflow-hidden bg-navy-900/5 ${className}`}>
      {!showPhoto && <Placeholder gradient={gradient} label={label} icon={icon} />}
      {hasPhoto && src && (
        <img
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          fetchpriority={fetchPriority}
          sizes={sizes}
          width={width}
          height={height}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${failed ? 'hidden' : ''} ${imgClassName}`}
        />
      )}
    </div>
  )
}
