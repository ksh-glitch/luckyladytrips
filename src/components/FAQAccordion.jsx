import { useState, useId } from 'react'
import { Icon } from './icons.jsx'
import cn from '../lib/cn.js'

function FAQItem({ item, isOpen, onToggle, index }) {
  const uid = useId()
  return (
    <div className="border-b border-sand-200 last:border-0">
      <h3>
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={isOpen}
          aria-controls={`${uid}-panel`}
          id={`${uid}-btn`}
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
        >
          <span className={cn('font-display text-lg leading-snug transition-colors', isOpen ? 'text-teal-700' : 'text-navy')}>
            {item.q}
          </span>
          <span
            className={cn(
              'flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300',
              isOpen ? 'rotate-180 border-teal-600 bg-teal-600 text-white' : 'border-navy/15 text-navy/70',
            )}
          >
            <Icon name="chevronDown" className="h-4 w-4" />
          </span>
        </button>
      </h3>
      <div
        id={`${uid}-panel`}
        role="region"
        aria-labelledby={`${uid}-btn`}
        className="grid transition-all duration-300 ease-smooth"
        style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden" aria-hidden={!isOpen}>
          <p className="pb-5 pr-12 text-pretty leading-relaxed text-navy/70">{item.a}</p>
        </div>
      </div>
    </div>
  )
}

/**
 * Accessible FAQ accordion. `single` keeps only one panel open at a time.
 */
export default function FAQAccordion({ items = [], single = false, defaultOpen = 0 }) {
  const [open, setOpen] = useState(() => new Set(defaultOpen != null ? [defaultOpen] : []))

  const toggle = (i) =>
    setOpen((prev) => {
      const next = new Set(single ? [] : prev)
      if (prev.has(i)) next.delete(i)
      else next.add(i)
      return next
    })

  return (
    <div className="divide-y divide-sand-200">
      {items.map((item, i) => (
        <FAQItem key={i} item={item} index={i} isOpen={open.has(i)} onToggle={() => toggle(i)} />
      ))}
    </div>
  )
}
