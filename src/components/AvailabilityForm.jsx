import { useEffect, useState } from 'react'
import { boatOptions } from '../data/boats.js'
import { tripOptions } from '../data/trips.js'
import { enquiryFromForm, whatsappUrl } from '../lib/whatsapp.js'
import { trackWhatsApp } from '../lib/analytics.js'
import { site } from '../data/site.js'
import { Icon } from './icons.jsx'
import cn from '../lib/cn.js'

const GUEST_CHIPS = ['1–2', '3–4', '5–6', '7+']

const fieldBase =
  'w-full rounded-2xl border border-sand-200 bg-white px-4 py-3 text-navy placeholder:text-navy/35 shadow-soft transition focus:border-teal-500 focus:outline-none focus:ring-4 focus:ring-teal-600/10'

function Label({ htmlFor, children, optional }) {
  return (
    <label htmlFor={htmlFor} className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-navy/85">
      {children}
      {optional && <span className="text-xs font-normal text-navy/65">optional</span>}
    </label>
  )
}

export default function AvailabilityForm({ initialBoat = boatOptions[0], initialTrip = '' }) {
  const [v, setV] = useState({
    name: '',
    phone: '',
    date: '',
    flexible: false,
    guests: '',
    boat: initialBoat,
    trip: initialTrip,
    pickup: '',
    requests: '',
  })
  const [error, setError] = useState('')
  const [sent, setSent] = useState(false)
  // Set on the client so SSR markup has no stale min date (avoids hydration mismatch).
  const [today, setToday] = useState('')
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), [])

  const set = (k) => (e) => {
    const val = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setV((s) => ({ ...s, [k]: val }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!v.name.trim()) return setError('Please add your name so Sean knows who he’s talking to.')
    if (!v.phone.trim()) return setError('Please add a WhatsApp number we can reply to.')
    setError('')
    trackWhatsApp('form')
    const url = whatsappUrl(enquiryFromForm(v), 'form')
    window.open(url, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <form onSubmit={onSubmit} noValidate className="card p-6 sm:p-8">
      {/* Fast path for the impatient — skip the form, just open WhatsApp */}
      <div className="mb-6 flex flex-col gap-2.5 rounded-2xl border border-sand-200 bg-sand-50/70 px-4 py-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-navy/70">Prefer to just message us? Skip the form.</p>
        <a
          href={whatsappUrl(undefined, 'form-fastpath')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackWhatsApp('form-fastpath')}
          className="btn-secondary btn-sm shrink-0"
        >
          <Icon name="whatsapp" className="h-4 w-4" />
          Message on WhatsApp
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <Label htmlFor="name">Your name</Label>
          <input id="name" name="name" type="text" autoComplete="name" required value={v.name} onChange={set('name')} placeholder="First & last name" className={fieldBase} />
        </div>
        <div className="sm:col-span-1">
          <Label htmlFor="phone">WhatsApp number</Label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" required value={v.phone} onChange={set('phone')} placeholder="+44 7… / +20 1…" className={fieldBase} />
        </div>

        <div>
          <Label htmlFor="date">Preferred date</Label>
          <input id="date" name="date" type="date" min={today || undefined} value={v.date} onChange={set('date')} className={cn(fieldBase, 'appearance-none')} />
        </div>
        <div className="flex items-end">
          <label htmlFor="flexible" className="flex w-full cursor-pointer items-center gap-3 rounded-2xl border border-sand-200 bg-white px-4 py-3 shadow-soft">
            <input id="flexible" name="flexible" type="checkbox" checked={v.flexible} onChange={set('flexible')} className="h-5 w-5 rounded border-sand-300 text-teal-600 focus:ring-teal-500" />
            <span className="text-sm font-medium text-navy/80">My dates are flexible</span>
          </label>
        </div>

        <div>
          <span id="guests-label" className="mb-1.5 block text-sm font-semibold text-navy/85">Number of guests</span>
          <div className="flex flex-wrap gap-2" role="group" aria-labelledby="guests-label">
            {GUEST_CHIPS.map((g) => {
              const active = v.guests === g
              return (
                <button
                  key={g}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setV((s) => ({ ...s, guests: active ? '' : g }))}
                  className={cn(
                    'rounded-full border px-4 py-2.5 text-sm font-semibold transition',
                    active
                      ? 'border-teal-600 bg-teal-600 text-white shadow-cta'
                      : 'border-sand-200 bg-white text-navy/75 hover:border-teal-600/40 hover:text-teal-700',
                  )}
                >
                  {g}
                </button>
              )
            })}
          </div>
        </div>
        <div>
          <Label htmlFor="boat">Preferred boat</Label>
          <select id="boat" name="boat" value={v.boat} onChange={set('boat')} className={cn(fieldBase, 'appearance-none truncate pr-11 bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat')} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B2545' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M5 9l7 7 7-7'/%3E%3C/svg%3E\")" }}>
            {boatOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>

        <div>
          <Label htmlFor="trip">Trip type</Label>
          <select id="trip" name="trip" value={v.trip} onChange={set('trip')} className={cn(fieldBase, 'appearance-none truncate pr-11 bg-[length:1.1rem] bg-[right_1rem_center] bg-no-repeat')} style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%230B2545' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M5 9l7 7 7-7'/%3E%3C/svg%3E\")" }}>
            <option value="">Choose a trip type…</option>
            {tripOptions.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>
        </div>
        <div>
          <Label htmlFor="pickup">Pickup location / hotel</Label>
          <input id="pickup" name="pickup" type="text" value={v.pickup} onChange={set('pickup')} placeholder="e.g. Kempinski Soma Bay" className={fieldBase} />
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="requests" optional>Special requests</Label>
          <textarea id="requests" name="requests" rows={3} value={v.requests} onChange={set('requests')} placeholder="Birthday, dietary needs, fishing, anything we should know…" className={cn(fieldBase, 'resize-none')} />
        </div>
      </div>

      {error && (
        <p role="alert" className="mt-4 rounded-2xl bg-gold-500/10 px-4 py-3 text-sm font-medium text-navy">
          {error}
        </p>
      )}

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <button type="submit" className="btn-primary btn-lg group w-full sm:w-auto">
          <Icon name="whatsapp" className="h-5 w-5" />
          Send on WhatsApp
        </button>
        <p className="text-sm text-navy/65">
          {sent
            ? 'Opening WhatsApp… we’ll reply personally.'
            : `No deposit yet. This opens a WhatsApp chat with your details ready to send. ${site.reply.time}.`}
        </p>
      </div>
    </form>
  )
}
