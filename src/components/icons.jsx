// Clean, consistent line icons (24x24, currentColor). Brand glyphs are filled.
// Usage: <Icon name="anchor" className="h-5 w-5" />

const stroke = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

const PATHS = {
  // --- inclusions ---
  car: (
    <>
      <path d="M3 13l2-5.5A2 2 0 0 1 6.9 6h10.2a2 2 0 0 1 1.9 1.5L21 13" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a2 2 0 0 1-4 0H9a2 2 0 0 1-4 0H4a1 1 0 0 1-1-1z" />
      <path d="M7 16h.01M17 16h.01" />
    </>
  ),
  plate: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4" />
    </>
  ),
  mask: (
    <>
      <path d="M4 8.5A2.5 2.5 0 0 1 6.5 6h11A2.5 2.5 0 0 1 20 8.5v2A4.5 4.5 0 0 1 15.5 15h-.7a2 2 0 0 1-1.7-1l-.4-.6a1 1 0 0 0-1.6 0l-.4.6a2 2 0 0 1-1.7 1h-.7A4.5 4.5 0 0 1 4 10.5z" />
      <path d="M12 15v2a2 2 0 0 0 2 2" />
    </>
  ),
  towel: (
    <>
      <rect x="5" y="4" width="14" height="16" rx="2" />
      <path d="M9 4v16M9 8h6" />
    </>
  ),
  lock: (
    <>
      <rect x="5" y="11" width="14" height="9" rx="2" />
      <path d="M8 11V8a4 4 0 0 1 8 0v3" />
      <path d="M12 15v2" />
    </>
  ),
  tag: (
    <>
      <path d="M3.5 12.5l8-8a2 2 0 0 1 1.4-.6H19a2 2 0 0 1 2 2v5.6a2 2 0 0 1-.6 1.4l-8 8a2 2 0 0 1-2.8 0l-4.1-4.1a2 2 0 0 1 0-2.7z" />
      <circle cx="16" cy="8" r="1.3" />
    </>
  ),
  crew: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6a3 3 0 0 1 0 6M21 19a5.5 5.5 0 0 0-4-5.3" />
    </>
  ),
  fuel: (
    <>
      <path d="M5 21V6a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v15" />
      <path d="M3.5 21h13M9 9h4" />
      <path d="M15 8l2.3 2.3a2 2 0 0 1 .7 1.5V17a1.5 1.5 0 0 0 3 0v-7" />
    </>
  ),

  // --- trips ---
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  fish: (
    <>
      <path d="M3 12c3-4 7-5 11-5 3 0 5 1.6 6.5 5C19 15.4 17 17 14 17c-4 0-8-1-11-5z" />
      <path d="M3 12c-.5-1-1.6-1.8-2-2 .4 2.5.4 3.5 0 6 .8-.3 1.5-1 2-2" />
      <circle cx="15.5" cy="11" r=".8" fill="currentColor" stroke="none" />
    </>
  ),
  anchor: (
    <>
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v13" />
      <path d="M5 12H3a9 9 0 0 0 18 0h-2" />
      <path d="M8 11l-3 1M16 11l3 1M9 9h6" />
    </>
  ),
  sunset: (
    <>
      <path d="M12 3v5M5.6 8.6l1 1M17.4 8.6l-1 1M3 13h2M19 13h2" />
      <path d="M8 13a4 4 0 0 1 8 0" />
      <path d="M2 17h20M5 21h14" />
    </>
  ),
  moon: <path d="M20 14.5A8 8 0 0 1 9.5 4 7 7 0 1 0 20 14.5z" />,
  compass: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M15.5 8.5l-2 5-5 2 2-5z" />
    </>
  ),

  // --- ui ---
  check: <path d="M4.5 12.5l5 5 10-11" />,
  arrowRight: (
    <>
      <path d="M4 12h15" />
      <path d="M13 5l7 7-7 7" />
    </>
  ),
  chevronDown: <path d="M5 9l7 7 7-7" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  heart: <path d="M12 20s-7-4.3-9.2-8.4A4.6 4.6 0 0 1 12 6a4.6 4.6 0 0 1 9.2 5.6C19 15.7 12 20 12 20z" />,
  mapPin: (
    <>
      <path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  phone: (
    <path d="M5 4h3l1.5 4-2 1.5a12 12 0 0 0 5 5l1.5-2 4 1.5V19a2 2 0 0 1-2.2 2A16 16 0 0 1 4 6.2 2 2 0 0 1 5 4z" />
  ),
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M4 7l8 6 8-6" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="16" rx="2" />
      <path d="M4 9h16M8 3v4M16 3v4" />
    </>
  ),
  users: (
    <>
      <circle cx="9" cy="8" r="3" />
      <path d="M3.5 19a5.5 5.5 0 0 1 11 0" />
      <path d="M16 6a3 3 0 0 1 0 6M20.5 19a5.5 5.5 0 0 0-4-5.3" />
    </>
  ),
  sparkle: (
    <path d="M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6z" />
  ),
  feather: (
    <>
      <path d="M20 5c-6 0-11 5-12 11l-2 3" />
      <path d="M8 16c4 0 8-2 10-7M6 13h6" />
    </>
  ),
}

// Filled glyphs (use their own fill rules, no outline stroke)
const FILLED = {
  star: <path fill="currentColor" d="M12 3.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.7-5.2 2.7 1-5.8L3.5 9.7l5.9-.9z" />,
  whatsapp: (
    <path
      fill="currentColor"
      d="M19.05 4.94A9.82 9.82 0 0 0 12.04 2C6.6 2 2.18 6.42 2.18 11.86c0 1.74.46 3.44 1.32 4.94L2.1 22l5.34-1.4a9.83 9.83 0 0 0 4.6 1.17h.01c5.44 0 9.86-4.42 9.86-9.86a9.8 9.8 0 0 0-2.86-6.97zM12.05 20.1h-.01a8.18 8.18 0 0 1-4.17-1.14l-.3-.18-3.17.83.85-3.09-.2-.32a8.16 8.16 0 0 1-1.25-4.35c0-4.52 3.68-8.2 8.21-8.2a8.16 8.16 0 0 1 5.8 2.41 8.15 8.15 0 0 1 2.4 5.8c0 4.53-3.68 8.21-8.2 8.21zm4.5-6.15c-.25-.12-1.46-.72-1.69-.8-.22-.08-.39-.12-.55.13-.16.25-.63.8-.78.96-.14.17-.29.19-.54.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.71-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.41-.55-.42l-.47-.01c-.16 0-.43.06-.65.31-.22.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.73 2.64 4.2 3.7.59.26 1.04.41 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.46-.6 1.66-1.18.2-.58.2-1.07.14-1.18-.06-.1-.22-.16-.47-.28z"
    />
  ),
  tiktok: (
    <path
      fill="currentColor"
      d="M16.5 2h-3v13.2a2.6 2.6 0 1 1-2.6-2.6c.2 0 .5 0 .7.07V9.6a5.7 5.7 0 1 0 5 5.66V8.84a6.6 6.6 0 0 0 3.9 1.27V7.07a3.7 3.7 0 0 1-3.9-3.52V2z"
    />
  ),
  instagram: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.7" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17" cy="7" r="1.1" fill="currentColor" />
    </>
  ),
}

export function Icon({ name, className = 'h-5 w-5', title, ...props }) {
  const filled = FILLED[name]
  const content = filled || PATHS[name]
  if (!content) return null
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden={title ? undefined : true}
      role={title ? 'img' : undefined}
      {...(filled ? {} : stroke)}
      {...props}
    >
      {title ? <title>{title}</title> : null}
      {content}
    </svg>
  )
}

export default Icon
