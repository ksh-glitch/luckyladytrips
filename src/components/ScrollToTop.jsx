import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Scroll to top on route change (skip when navigating to an in-page #anchor).
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) return
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname, hash])
  return null
}
