// ---------------------------------------------------------------------------
//  Lightweight, privacy-light analytics. Booking is WhatsApp-only, so a wa.me
//  tap IS the conversion — this makes that single event measurable.
//
//  Uses Plausible (loaded async in index.html). Every call is a safe no-op if
//  the script hasn't loaded or isn't configured, so it never throws and never
//  blocks the click. Custom events queue via window.plausible.q until load.
// ---------------------------------------------------------------------------

/**
 * Fire an analytics event.
 * @param {string} event - event name, e.g. "WhatsApp Click"
 * @param {Record<string, string|number>} [props] - custom properties
 */
export function track(event, props) {
  if (typeof window === 'undefined') return
  try {
    window.plausible?.(event, props ? { props } : undefined)
  } catch {
    /* analytics must never break the UI */
  }
}

/** Convenience: the only conversion event on the site. */
export function trackWhatsApp(source) {
  track('WhatsApp Click', { source: source || 'unknown' })
}
