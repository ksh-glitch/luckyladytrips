import { site } from '../data/site.js'

// Default enquiry template (used by the generic "Check availability" buttons).
export const defaultEnquiry = `Hi Sean, I'd like to check availability for Lucky Lady Trips.

Preferred date:
Number of guests:
Preferred boat:
Trip type:
Pickup location / hotel:
Special requests:`

/**
 * Append a quiet attribution tag so Sean can see, inside WhatsApp itself, which
 * part of the site (or which ad / handle) an enquiry came from. Booking happens
 * off-site, so this single line is the only per-message channel attribution he
 * gets. Kept on its own line at the very bottom, out of the way.
 */
function withRef(message, source) {
  return source ? `${message}\n\n— ref: ${source}` : message
}

// "a" / "an" for a trip phrase, e.g. "an overnight escape" not "a overnight escape".
const aOrAn = (word) => (/^[aeiou]/i.test(word) ? 'an' : 'a')

/**
 * Build a wa.me link with a pre-filled message and an optional attribution ref.
 * @param {string} [message] - the message body (defaults to the enquiry template)
 * @param {string} [source] - attribution tag, appended as "— ref: {source}"
 */
export function whatsappUrl(message = defaultEnquiry, source) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(withRef(message, source))}`
}

/**
 * Build a contextual enquiry message. The opening line adapts to what the
 * visitor tapped (a specific boat or trip) so Sean reads the intent at a glance.
 * @param {{ boat?: string, trip?: string, context?: string }} opts
 */
export function enquiryFor({ boat, trip, context } = {}) {
  let opener = "Hi Sean, I'd like to check availability for Lucky Lady Trips."
  if (boat) opener = `Hi Sean, I'd like to check availability for the ${boat}.`
  else if (trip) opener = `Hi Sean, I'd like to check availability for ${aOrAn(trip)} ${trip.toLowerCase()}.`

  const lines = [opener, '']
  if (context) lines.push(context, '')
  lines.push('Preferred date:')
  lines.push('Number of guests:')
  lines.push(`Preferred boat:${boat ? ' ' + boat : ''}`)
  lines.push(`Trip type:${trip ? ' ' + trip : ''}`)
  lines.push('Pickup location / hotel:')
  lines.push('Special requests:')
  return lines.join('\n')
}

/**
 * Lighter, lower-commitment message for the "Get dates & prices" soft CTA. Aimed
 * at the majority who are still deciding: the goal is just to get them to message
 * (so the number is captured for follow-up), not to fill in a full enquiry.
 * @param {{ boat?: string, trip?: string }} opts
 */
export function quoteRequest({ boat, trip } = {}) {
  if (boat) return `Hi Sean! Could you send me dates and prices for the ${boat}?`
  if (trip) return `Hi Sean! Could you send me dates and prices for ${aOrAn(trip)} ${trip.toLowerCase()}?`
  return 'Hi Sean! Could you send me your dates and prices for Lucky Lady Trips?'
}

/**
 * Build a WhatsApp message from the Check Availability form values.
 * @param {Record<string,string|boolean>} v
 */
export function enquiryFromForm(v) {
  const flexible = v.flexible ? 'Yes' : 'No'
  return [
    "Hi Sean, I'd like to check availability for Lucky Lady Trips.",
    '',
    `Name: ${v.name || ''}`,
    `WhatsApp number: ${v.phone || ''}`,
    `Preferred date: ${v.date || ''}`,
    `Flexible dates: ${flexible}`,
    `Number of guests: ${v.guests || ''}`,
    `Preferred boat: ${v.boat || ''}`,
    `Trip type: ${v.trip || ''}`,
    `Pickup location / hotel: ${v.pickup || ''}`,
    `Special requests: ${v.requests || ''}`,
  ].join('\n')
}
