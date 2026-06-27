import { createContext, useContext, useEffect, useState } from 'react'

// ---------------------------------------------------------------------------
//  Lets any page register the enquiry context the visitor is currently looking
//  at (a boat, a trip, an SEO landing topic). The global sticky mobile CTA reads
//  it so its pre-filled WhatsApp message matches what's on screen instead of the
//  generic default. Clears automatically on navigation (page unmount).
// ---------------------------------------------------------------------------

const EnquiryContext = createContext({ enquiry: null, setEnquiry: () => {} })

export function EnquiryProvider({ children }) {
  const [enquiry, setEnquiry] = useState(null)
  return <EnquiryContext.Provider value={{ enquiry, setEnquiry }}>{children}</EnquiryContext.Provider>
}

/** Read the active enquiry context, e.g. `{ boat, trip, context, source }`. */
export function useEnquiry() {
  return useContext(EnquiryContext).enquiry
}

/**
 * Register the active enquiry context for the current page. Pass an object like
 * `{ boat, trip, context, source }`. Re-runs if the value changes; clears on
 * unmount so the next route starts from the generic default.
 */
export function useSetEnquiry(opts) {
  const { setEnquiry } = useContext(EnquiryContext)
  const key = JSON.stringify(opts ?? null)
  useEffect(() => {
    setEnquiry(opts ?? null)
    return () => setEnquiry(null)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key])
}
