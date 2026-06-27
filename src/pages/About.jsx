import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import StorySection from '../components/StorySection.jsx'
import TikTokCallout from '../components/TikTokCallout.jsx'
import SmartImage from '../components/SmartImage.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/icons.jsx'
import { images } from '../data/images.js'
import { localBusinessSchema } from '../lib/schema.js'

const values = [
  { icon: 'lock', title: 'Private, always', body: 'No shared decks, no strangers. Every trip belongs to your group and no one else.' },
  { icon: 'tag', title: 'All-inclusive, honestly', body: 'Pickup, food, drinks, gear, towels, fuel and crew, all included. The price you see is the price you pay.' },
  { icon: 'heart', title: 'Personal, not corporate', body: 'A British family who live here, with a local crew who treat every guest like one of their own.' },
]

export default function About() {
  return (
    <>
      <SEO
        title="About: The Story Behind Lucky Lady Trips"
        description="Sean and Justine left the UK for a life by the Red Sea. What started with One Lucky Lady grew into a private, all-inclusive Red Sea boat company in Soma Bay."
        path="/about"
        schema={localBusinessSchema()}
      />

      <PageHero
        eyebrow="Our story"
        title="A British family, a Red Sea life, and one lucky boat"
        intro="Lucky Lady Trips began with a leap: sell up in the UK, move to Soma Bay, and build a better life by the sea. Years on, it's a private Red Sea experience run by people who actually live it."
      >
        <WhatsAppButton size="lg" source="about-hero" />
      </PageHero>

      {/* The move */}
      <section className="section pt-6">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden rounded-4xl shadow-card">
              <SmartImage src={images.seanPortrait} alt="Sean Kileen at golden hour on the Red Sea" className="aspect-[4/5] w-full" />
            </div>
          </Reveal>
          <Reveal delay={80}>
            <span className="eyebrow">How it started</span>
            <h2 className="mt-3 font-display text-display-sm text-navy">Sold up, sailed off, stayed for good</h2>
            <div className="prose-warm mt-5 max-w-prose">
              <p>
                Sean and Justine swapped grey skies for the Red Sea, trading everything familiar for a
                life on the water in Soma Bay. They started with a single boat, One Lucky Lady, and a
                simple idea: give people a private day at sea, done properly, with nothing hidden.
              </p>
              <p>
                Word spread among expats, hotel guests and returning visitors. Sean became a familiar
                face on the Red Sea, and on TikTok, where {''}
                <a href="https://www.tiktok.com/@redseasean" target="_blank" rel="noopener noreferrer" className="link-underline">15K+ followers</a> {''}
                tune in for the days out, the dog, and the macaw.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Family block */}
      <section className="section bg-white/50">
        <div className="container">
          <StorySection withCTA={false} showAboutLink={false} />
        </div>
      </section>

      {/* TikTok — the top discovery channel */}
      <TikTokCallout source="about" />

      {/* How it grew */}
      <section className="section">
        <div className="container grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal className="lg:order-2">
            <div className="overflow-hidden rounded-4xl shadow-card">
              <SmartImage src={images.oneLuckyLadyMarina} alt="One Lucky Lady moored at Soma Bay marina" className="aspect-[4/3] w-full" />
            </div>
          </Reveal>
          <Reveal delay={80} className="lg:order-1">
            <span className="eyebrow">How it grew</span>
            <h2 className="mt-3 font-display text-display-sm text-navy">One boat became three</h2>
            <div className="prose-warm mt-5 max-w-prose">
              <p>
                Demand outgrew a single boat. Today, alongside One Lucky Lady, the Locke Catamaran carries
                bigger groups and overnight escapes, and a fast private speedboat handles fishing trips and
                quick runs to the quieter reefs.
              </p>
              <p>
                Sean is still on the water most days, but Lucky Lady Trips is bigger than one person now.
                A trusted local crew runs every trip to the same standard, so the experience is the same
                whoever is at the helm.
              </p>
            </div>
            <div className="mt-6">
              <Button to="/boats" variant="secondary" iconRight="arrowRight">Meet the boats</Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-white/50">
        <div className="container">
          <SectionHeading eyebrow="What we stand for" title="How we run every trip" align="center" className="mx-auto" />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((v) => (
              <div key={v.title} className="card p-7">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700">
                  <Icon name={v.icon} className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-xl text-navy">{v.title}</h3>
                <p className="mt-2 text-pretty leading-relaxed text-navy/65">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section pt-0">
        <div className="container">
          <div className="rounded-5xl bg-navy-900 px-6 py-14 text-center text-white sm:px-12">
            <h2 className="mx-auto max-w-2xl text-balance font-display text-display-sm text-white sm:text-display">Come and spend a day with us</h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/80">It&apos;s your boat, your people and your day. We&apos;ll take care of everything else.</p>
            <div className="mt-8 flex justify-center">
              <WhatsAppButton variant="white" size="lg" source="about-cta" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
