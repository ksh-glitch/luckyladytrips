import { site } from '../data/site.js'

// Default enquiry template (used by every "Check availability" button).
export const defaultEnquiry = `Hi Sean, I'd like to check availability for Lucky Lady Trips.

Preferred date:
Number of guests:
Preferred boat:
Trip type:
Pickup location / hotel:
Special requests:`

/**
 * Build a wa.me link with a pre-filled message.
 * @param {string} [message] - the message body (defaults to the enquiry template)
 */
export function whatsappUrl(message = defaultEnquiry) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`
}

/**
 * Build a contextual enquiry message, e.g. pre-selecting a boat or trip type.
 * @param {{ boat?: string, trip?: string, context?: string }} opts
 */
export function enquiryFor({ boat, trip, context } = {}) {
  const lines = ["Hi Sean, I'd like to check availability for Lucky Lady Trips.", '']
  if (context) lines.push(context, '')
  lines.push(`Preferred date:`)
  lines.push(`Number of guests:`)
  lines.push(`Preferred boat:${boat ? ' ' + boat : ''}`)
  lines.push(`Trip type:${trip ? ' ' + trip : ''}`)
  lines.push(`Pickup location / hotel:`)
  lines.push(`Special requests:`)
  return lines.join('\n')
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
