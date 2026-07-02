import { Link } from 'react-router-dom'
import SEO from './SEO.jsx'
import SmartImage from './SmartImage.jsx'
import SectionHeading from './SectionHeading.jsx'
import BoatCard from './BoatCard.jsx'
import FAQAccordion from './FAQAccordion.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import Button from './Button.jsx'
import CtaBand from './CtaBand.jsx'
import Reveal from './Reveal.jsx'
import { Icon } from './icons.jsx'
import { boatById } from '../data/boats.js'
import { seoPages } from '../data/seoPages.js'
import { inclusionsStrip } from '../data/inclusions.js'
import { faqSchema, breadcrumbSchema, localBusinessSchema } from '../lib/schema.js'
import { useSetEnquiry } from '../lib/EnquiryContext.jsx'

function Paragraphs({ text, className = '' }) {
  return text.split('\n\n').map((p, i) => (
    <p key={i} className={className}>
      {p}
    </p>
  ))
}

export default function SEOPageTemplate({ page }) {
  const boats = (page.bestBoats || []).map((id) => boatById[id]).filter(Boolean)
  const related = seoPages.filter((p) => p.slug !== page.slug).slice(0, 4)
  const path = `/${page.slug}`

  // Make the global sticky CTA prefill this page's topic.
  useSetEnquiry({ context: `I'm interested in: ${page.hero.kicker}.`, source: `seo:${page.slug}` })

  return (
    <>
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        image={page.image}
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: page.hero.h1, path },
          ]),
          faqSchema(page.faqs),
        ]}
      />

      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <SmartImage src={page.image} alt={page.imageAlt} className="h-full w-full" loading="eager" fetchPriority="high" imgClassName="object-[center_40%]" />
          <div className="scrim-hero absolute inset-0" />
        </div>

        <div className="on-dark relative container flex min-h-[72vh] flex-col justify-end pb-14 pt-28 sm:min-h-[68vh] lg:min-h-[64vh] lg:pb-20">
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-white/75">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="hover:text-gold-300">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-white">{page.hero.kicker}</li>
            </ol>
          </nav>

          <span className="chip w-fit">
            <Icon name="mapPin" className="h-4 w-4 text-gold-400" />
            {page.hero.kicker}
          </span>

          <h1 className="mt-4 max-w-3xl text-balance font-display text-[2.4rem] leading-[1.05] text-white sm:text-display lg:text-display-lg">
            {page.hero.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-white/85">
            {page.hero.intro}
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton size="lg" source={`seo-hero:${page.slug}`} context={`I'm interested in: ${page.hero.kicker}.`} />
            <Button to="/boats" variant="secondary" size="lg" iconRight="arrowRight">
              View our boats
            </Button>
          </div>
        </div>
      </section>

      {/* Inclusions strip */}
      <div className="border-y border-sand-200/70 bg-white/60">
        <div className="container flex gap-2.5 overflow-x-auto py-4 no-scrollbar">
          {inclusionsStrip.map((it) => (
            <span key={it.label} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sand-100 px-3.5 py-1.5 text-sm font-medium text-navy/80">
              <Icon name={it.icon} className="h-4 w-4 text-teal-600" />
              {it.label}
            </span>
          ))}
        </div>
      </div>

      {/* Intro + highlights */}
      <section className="section">
        <div className="container grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal className="prose-warm max-w-prose text-lg">
            <Paragraphs text={page.hero.intro} className="text-navy/80" />
            <p className="mt-4">{page.intro2}</p>
          </Reveal>

          <Reveal className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1" delay={80}>
            {page.highlights.map((h) => (
              <div key={h.title} className="card flex gap-3 p-5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl bg-teal-600/10 text-teal-700">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display text-lg text-navy">{h.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-navy/65">{h.body}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* Body sections */}
      <section className="bg-white/50 py-16 lg:py-24">
        <div className="container space-y-14">
          {page.sections.map((s, i) => (
            <Reveal key={i} className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
              <h2 className="text-balance font-display text-2xl text-navy sm:text-display-sm">{s.heading}</h2>
              <div className="prose-warm max-w-prose">
                <Paragraphs text={s.body} />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Featured boats */}
      {boats.length > 0 && (
        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Choose your boat" title="The right boat for this trip" intro="Private only, all-inclusive, and priced with nothing hidden." />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {boats.map((b) => (
                <BoatCard key={b.id} boat={b} layout="tall" flag={b.id === 'one-lucky-lady' ? 'The original' : undefined} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-white/50 py-16 lg:py-24">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow="Good to know" title="Questions, answered" align="center" />
          <div className="mt-12">
            <FAQAccordion items={page.faqs} />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <CtaBand>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-display-sm text-white sm:text-display">{page.cta.heading}</h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/80">{page.cta.sub}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton variant="white" size="lg" source={`seo-cta:${page.slug}`} context={`I'm interested in: ${page.hero.kicker}.`} />
              <Button to="/trips" variant="ghost" size="lg" iconRight="arrowRight">
                Explore trips
              </Button>
            </div>
          </CtaBand>

          {/* internal links */}
          <div className="mt-12">
            <p className="label">Keep exploring</p>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {related.map((r) => (
                <Link key={r.slug} to={`/${r.slug}`} className="inline-flex items-center gap-1.5 rounded-full border border-sand-200 bg-white px-4 py-2 text-sm font-medium text-navy/75 shadow-soft transition hover:border-teal-600/30 hover:text-teal-700">
                  {r.hero.kicker}
                  <Icon name="arrowRight" className="h-3.5 w-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
