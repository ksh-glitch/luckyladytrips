import { Link } from 'react-router-dom'
import { translationGroups } from '../data/seoPagesI18n.js'
import cn from '../lib/cn.js'

const LABELS = { en: 'English', de: 'Deutsch', ru: 'Русский' }

/**
 * EN / DE / RU pills for pages that exist in more than one language.
 * Renders nothing when the page has no translations. The links double as
 * crawlable internal links between hreflang siblings.
 */
export default function LanguageSwitcher({ groupKey, current, className = '' }) {
  const group = translationGroups[groupKey]
  if (!group) return null

  return (
    <nav aria-label="Language" className={cn('flex flex-wrap gap-1.5', className)}>
      {Object.entries(group).map(([lang, href]) => {
        const active = lang === current
        return (
          <Link
            key={lang}
            to={href}
            lang={lang}
            hrefLang={lang}
            aria-current={active ? 'page' : undefined}
            className={cn(
              'rounded-full border px-3 py-1 text-xs font-semibold uppercase tracking-wide transition',
              active
                ? 'border-gold-400/70 bg-white/15 text-white'
                : 'border-white/20 text-white/70 hover:border-white/45 hover:text-white',
            )}
          >
            {LABELS[lang] || lang}
          </Link>
        )
      })}
    </nav>
  )
}
