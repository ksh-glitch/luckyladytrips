import SmartImage from './SmartImage.jsx'
import { Icon } from './icons.jsx'
import { images } from '../data/images.js'
import { storyBadges } from '../data/reviews.js'
import WhatsAppButton from './WhatsAppButton.jsx'
import Button from './Button.jsx'

const BADGE_ICON = { tiktok: 'tiktok', heart: 'heart', lock: 'lock' }

/**
 * Founder / family story block. Personality + trust layer, kept after the core
 * offer so the brand still feels bigger than one person.
 */
export default function StorySection({ withCTA = true, showAboutLink = true }) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      {/* Photo collage — asymmetric, editorial */}
      <div className="relative order-1 lg:order-none">
        <div className="grid grid-cols-5 gap-3 sm:gap-4">
          <div className="col-span-3 overflow-hidden rounded-4xl shadow-card">
            <SmartImage
              src={images.seanJustine}
              alt="Sean and Justine relaxing on the bow of One Lucky Lady on the Red Sea"
              className="aspect-[3/4] w-full"
            />
          </div>
          <div className="col-span-2 flex flex-col gap-3 sm:gap-4">
            <div className="overflow-hidden rounded-3xl shadow-soft">
              <SmartImage
                src={images.justineTiggySunset}
                alt="Justine holding Tiggy the chihuahua during a sunset cruise"
                className="aspect-square w-full"
              />
            </div>
            <div className="flex-1 overflow-hidden rounded-3xl shadow-soft">
              <SmartImage
                src={images.seanPortrait}
                alt="Sean Kileen, founder of Lucky Lady Trips, at golden hour on the Red Sea"
                className="h-full min-h-[8rem] w-full"
              />
            </div>
          </div>
        </div>
        {/* caption chip */}
        <span className="absolute -bottom-3 left-1/2 inline-flex -translate-x-1/2 items-center gap-2 rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-navy/80 shadow-card">
          <Icon name="feather" className="h-4 w-4 text-gold-500" />
          Sean, Justine, Rio &amp; Tiggy
        </span>
      </div>

      {/* Copy */}
      <div>
        <span className="eyebrow">Meet the crew</span>
        <h2 className="mt-3 text-display-sm sm:text-display font-display text-balance text-navy">
          Meet Sean, Justine, Rio &amp; Tiggy
        </h2>
        <div className="prose-warm mt-5 max-w-prose">
          <p>
            Sean and Justine sold everything in the UK and moved to Soma Bay for a better life by the
            sea. What started with One Lucky Lady became a private Red Sea experience built around
            hospitality, freedom and long, easy days on the water.
          </p>
          <p>
            Rio the macaw keeps an eye on the marina, and Tiggy the chihuahua puppy has logged more
            sunset cruises than most. You&apos;ll often find Sean on the water — but behind the brand is
            a full crew who run every trip properly, every time.
          </p>
        </div>

        <div className="mt-6 flex flex-wrap gap-2.5">
          {storyBadges.map((b) => (
            <span
              key={b.label}
              className="inline-flex items-center gap-2 rounded-full border border-sand-200 bg-white px-3.5 py-1.5 text-sm font-medium text-navy/80 shadow-soft"
            >
              <Icon name={BADGE_ICON[b.icon] || 'sparkle'} className="h-4 w-4 text-teal-600" />
              {b.label}
            </span>
          ))}
        </div>

        {(withCTA || showAboutLink) && (
          <div className="mt-8 flex flex-wrap gap-3">
            {withCTA && <WhatsAppButton context="We'd love a private day on the water." />}
            {showAboutLink && (
              <Button to="/about" variant="secondary" iconRight="arrowRight">
                Our story
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
