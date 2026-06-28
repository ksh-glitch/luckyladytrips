import SmartImage from './SmartImage.jsx'
import { Icon } from './icons.jsx'
import { images } from '../data/images.js'
import { storyBadges } from '../data/reviews.js'
import { site } from '../data/site.js'
import { trackTikTok } from '../lib/analytics.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import Button from './Button.jsx'
import Reveal from './Reveal.jsx'

const BADGE_ICON = { tiktok: 'tiktok', heart: 'heart', lock: 'lock' }

/**
 * Founder / family story block. Personality + trust layer, kept after the core
 * offer so the brand still feels bigger than one person.
 */
export default function StorySection({ withCTA = true, showAboutLink = true }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Photo collage — asymmetric, editorial */}
      <Reveal as="div" direction="left" className="relative order-1 lg:order-none">
        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          <div className="col-span-3 overflow-hidden rounded-4xl shadow-card">
            <SmartImage
              src={images.seanPortrait}
              alt="Sean Kileen, founder of Lucky Lady Trips, at golden hour on the Red Sea"
              className="aspect-[3/4] w-full"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-4xl shadow-soft">
              <SmartImage
                src={images.adamCrew}
                alt="Adam, born and raised in Soma Bay, part of the Lucky Lady crew"
                className="aspect-square w-full"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-4xl shadow-soft">
              <SmartImage
                src={images.justineTiggySunset}
                alt="Justine with Tiggy the chihuahua on a Red Sea sunset cruise"
                className="h-full min-h-[8rem] w-full"
              />
            </div>
          </div>
        </div>
        {/* caption chip */}
        <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-navy/80 shadow-card">
          <Icon name="feather" className="h-4 w-4 text-gold-500" />
          Sean, Adam, Justine &amp; the crew
        </span>
      </Reveal>

      {/* Copy */}
      <Reveal as="div" direction="right" delay={80}>
        <span className="eyebrow">Meet the crew</span>
        <h2 className="mt-3 text-display-sm sm:text-display font-display text-balance text-navy">
          The people behind every day on the water
        </h2>
        <div className="prose-warm mt-5 max-w-prose">
          <p>
            Sean and Justine sold everything in the UK and moved to Soma Bay for a better life by the
            sea. What started with One Lucky Lady became a private Red Sea experience built around
            hospitality, freedom and long, easy days on the water.
          </p>
          <p>
            Running trips alongside them is Adam, born and raised right here in the bay. He knows this
            stretch of the Red Sea like the back of his hand: the calmest morning reefs, where the fish
            are biting, and the quietest spot to watch the sun go down.
          </p>
          <p>
            Rio the macaw keeps an eye on the marina, and Tiggy the chihuahua has logged more sunset
            cruises than most. Behind it all is a full local crew who run every trip properly, every time.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {storyBadges.map((b) =>
            b.icon === 'tiktok' ? (
              <a
                key={b.label}
                href={site.social.tiktokSean}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackTikTok('story-badge')}
                className="inline-flex items-center gap-2 rounded-full border border-teal-600/30 bg-teal-600/5 px-3.5 py-1.5 text-sm font-semibold text-teal-700 shadow-soft transition hover:border-teal-600/50 hover:bg-teal-600/10"
              >
                <Icon name="tiktok" className="h-4 w-4" />
                {b.label}
                <Icon name="arrowRight" className="h-3.5 w-3.5" />
              </a>
            ) : (
              <span
                key={b.label}
                className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80 shadow-soft"
              >
                <Icon name={BADGE_ICON[b.icon] || 'sparkle'} className="h-4 w-4 text-teal-600" />
                {b.label}
              </span>
            ),
          )}
        </div>

        {(withCTA || showAboutLink) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {withCTA && <WhatsAppButton source="story" context="We'd love a private day on the water." />}
            {showAboutLink && (
              <Button to="/about" variant="secondary" iconRight="arrowRight">
                Our story
              </Button>
            )}
          </div>
        )}
      </Reveal>
    </div>
  )
}
