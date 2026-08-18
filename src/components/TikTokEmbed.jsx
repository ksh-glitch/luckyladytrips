import { useState } from 'react'
import { track } from '../lib/analytics.js'

// Pull the numeric video id out of a tiktok.com/@user/video/<id> URL.
const videoId = (url) => url.match(/\/video\/(\d+)/)?.[1]

/**
 * Click-to-load TikTok embed. Shows the self-hosted thumbnail (fast, no
 * third-party request, no cookies) until tapped, then swaps in TikTok's
 * official player iframe. Keeps the page light and EU-visitor friendly —
 * TikTok's scripts only load after a deliberate tap.
 */
export default function TikTokEmbed({ video, source = 'tiktok-page' }) {
  const [playing, setPlaying] = useState(false)
  const id = videoId(video.url)

  const start = () => {
    track('TikTok Play', { video: video.label, source })
    setPlaying(true)
  }

  return (
    <figure className="overflow-hidden rounded-3xl bg-navy-950 shadow-card">
      <div className="relative aspect-[9/16]">
        {playing && id ? (
          <iframe
            src={`https://www.tiktok.com/player/v1/${id}?autoplay=1&rel=0`}
            title={video.label}
            allow="autoplay; encrypted-media; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={start}
            aria-label={`Play "${video.label}" — ${video.views} views on TikTok`}
            className="group absolute inset-0 block w-full text-left"
          >
            <img src={video.thumb} alt={video.label} loading="lazy" className="h-full w-full object-cover" />
            <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/85 via-navy-950/10 to-navy-950/30" />
            <span aria-hidden="true" className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-navy-950 shadow-lift transition duration-300 ease-smooth group-hover:scale-110 group-hover:bg-white">
              <svg viewBox="0 0 24 24" fill="currentColor" className="ml-1 h-7 w-7"><path d="M8 5v14l11-7z" /></svg>
            </span>
            <span className="absolute inset-x-0 top-0 flex justify-end p-3">
              <span className="rounded-full bg-navy-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                {video.views} views
              </span>
            </span>
          </button>
        )}
      </div>
      <figcaption className="flex items-center justify-between gap-3 px-4 py-3.5">
        <span className="min-w-0 truncate text-sm font-semibold text-white">{video.label}</span>
        <a
          href={video.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('TikTok Click', { source: `${source}-open` })}
          className="shrink-0 text-xs font-semibold text-white/55 transition hover:text-gold-300"
        >
          Open on TikTok
        </a>
      </figcaption>
    </figure>
  )
}
