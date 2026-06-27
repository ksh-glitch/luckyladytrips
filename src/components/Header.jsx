import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { nav } from '../data/site.js'
import { Icon } from './icons.jsx'
import { whatsappUrl } from '../lib/whatsapp.js'
import { trackWhatsApp } from '../lib/analytics.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import MobileMenu from './MobileMenu.jsx'
import Logo from './Logo.jsx'
import cn from '../lib/cn.js'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-smooth',
          scrolled
            ? 'border-b border-sand-200/80 bg-sand-50/85 shadow-soft backdrop-blur-md'
            : 'border-b border-transparent bg-sand-50/60 backdrop-blur-sm',
        )}
      >
        <div className="container flex h-16 items-center justify-between gap-3">
          <Logo variant="color" imgClassName="h-11 w-auto sm:h-12" />

          {/* Desktop nav */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {nav.map((item) => (
                <li key={item.to}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      cn(
                        'relative rounded-full px-4 py-2 text-sm font-medium transition-colors',
                        isActive ? 'text-teal-700' : 'text-navy/75 hover:text-navy',
                      )
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        <span
                          className={cn(
                            'absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-gold-500 transition-transform duration-300',
                            isActive ? 'scale-x-100' : 'scale-x-0',
                          )}
                        />
                      </>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <WhatsAppButton size="sm" source="header" />
            </div>

            {/* Mobile WhatsApp icon */}
            <a
              href={whatsappUrl(undefined, 'header')}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackWhatsApp('header')}
              aria-label="Check availability on WhatsApp"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-teal-600 text-white shadow-cta transition hover:bg-teal-700 active:translate-y-px lg:hidden"
            >
              <Icon name="whatsapp" className="h-5 w-5" />
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-navy/10 text-navy transition hover:bg-navy/5 lg:hidden"
            >
              <Icon name="menu" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu">
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
    </>
  )
}
