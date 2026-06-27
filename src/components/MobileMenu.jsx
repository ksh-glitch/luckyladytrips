import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { nav, site } from '../data/site.js'
import { Icon } from './icons.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import Logo from './Logo.jsx'

export default function MobileMenu({ open, onClose }) {
  const panelRef = useRef(null)
  const triggerRef = useRef(null)

  // Esc to close, lock body scroll, focus the panel, trap Tab, restore focus
  useEffect(() => {
    if (!open) return
    triggerRef.current = document.activeElement // remember what opened the menu

    const getFocusable = () =>
      Array.from(panelRef.current?.querySelectorAll('a[href], button:not([disabled])') || [])

    const onKey = (e) => {
      if (e.key === 'Escape') return onClose()
      if (e.key !== 'Tab') return
      const f = getFocusable()
      if (!f.length) return
      const first = f[0]
      const last = f[f.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    getFocusable()[0]?.focus()

    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
      // restore focus to the element that opened the menu (the hamburger)
      if (triggerRef.current && typeof triggerRef.current.focus === 'function') triggerRef.current.focus()
    }
  }, [open, onClose])

  return (
    <div
      className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`}
      aria-hidden={!open}
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-navy-950/40 backdrop-blur-sm transition-opacity duration-300 ${open ? 'opacity-100' : 'opacity-0'}`}
      />
      {/* Panel */}
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        className={`absolute inset-x-0 top-0 max-h-[100svh] origin-top overflow-y-auto overscroll-contain rounded-b-4xl bg-sand-50 shadow-lift transition-all duration-300 ease-smooth ${
          open ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
        }`}
      >
        <div className="flex h-16 items-center justify-between px-5">
          <span className="flex items-center gap-2">
            <Logo as="span" variant="color" imgClassName="h-8 w-auto" />
            <span className="inline-flex items-center gap-1.5 pb-0.5 text-[0.62rem] font-bold uppercase tracking-[0.3em] text-navy/70">
              <span aria-hidden="true" className="h-px w-2.5 bg-gold-500" />
              Trips
            </span>
          </span>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy hover:bg-navy/5"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <nav className="px-5 pb-4">
          <ul className="divide-y divide-sand-200">
            {nav.map((item, i) => (
              <li key={item.to} className="animate-menu-in" style={{ animationDelay: open ? `${i * 35}ms` : '0ms' }}>
                <Link
                  to={item.to}
                  onClick={onClose}
                  className="flex items-center justify-between py-3.5 font-display text-2xl text-navy"
                >
                  {item.label}
                  <Icon name="arrowRight" className="h-5 w-5 text-teal-600" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="space-y-3 px-5 pb-7">
          <WhatsAppButton fullWidth size="lg" />
          <a
            href={`https://wa.me/${site.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 text-sm font-medium text-navy/70"
          >
            <Icon name="whatsapp" className="h-4 w-4 text-teal-600" />
            {site.whatsappDisplay}
          </a>
        </div>
      </div>
    </div>
  )
}
