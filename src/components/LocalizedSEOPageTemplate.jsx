import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import SEO from './SEO.jsx'
import SmartImage from './SmartImage.jsx'
import SectionHeading from './SectionHeading.jsx'
import FAQAccordion from './FAQAccordion.jsx'
import WhatsAppButton from './WhatsAppButton.jsx'
import CtaBand from './CtaBand.jsx'
import Reveal from './Reveal.jsx'
import LanguageSwitcher from './LanguageSwitcher.jsx'
import { Icon } from './icons.jsx'
import { localeUi, localizedBoats, alternatesFor } from '../data/seoPagesI18n.js'
import { faqSchema, breadcrumbSchema, localBusinessSchema } from '../lib/schema.js'
import { useSetEnquiry } from '../lib/EnquiryContext.jsx'

function Paragraphs({ text, className = '' }) {
  return text.split('\n\n').map((p, i) => (
    <p key={i} className={className}>
      {p}
    </p>
  ))
}

/**
 * German / Russian sibling of SEOPageTemplate. Same visual system, but every
 * template string comes from localeUi and the WhatsApp pre-fill is written in
 * the visitor's language. The header/footer around it stay English for now —
 * the landing content, CTAs and FAQ (what search visitors actually read) are
 * fully localized.
 */
export default function LocalizedSEOPageTemplate({ page }) {
  const ui = localeUi[page.lang]
  const boats = localizedBoats[page.lang]
  const path = `/${page.slug}`
  const source = `seo-${page.lang}:${page.groupKey}`

  // Sticky mobile CTA opens the localized template too.
  useSetEnquiry({ message: ui.whatsappMessage, source })

  // The SSG head sets <html lang> statically, but client-side navigation
  // doesn't re-apply html attributes — keep it in sync for screen readers.
  useEffect(() => {
    document.documentElement.lang = ui.htmlLang
    return () => { document.documentElement.lang = 'en' }
  }, [ui.htmlLang])

  return (
    <>
      <SEO
        title={page.metaTitle}
        description={page.metaDescription}
        path={path}
        image={page.image}
        lang={ui.htmlLang}
        ogLocale={ui.ogLocale}
        alternates={alternatesFor(page.groupKey)}
        schema={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: ui.breadcrumbHome, path: '/' },
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
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <nav aria-label="Breadcrumb" className="text-sm text-white/75">
              <ol className="flex items-center gap-2">
                <li><Link to="/" className="hover:text-gold-300">{ui.breadcrumbHome}</Link></li>
                <li aria-hidden="true">/</li>
                <li className="text-white">{page.hero.kicker}</li>
              </ol>
            </nav>
            <LanguageSwitcher groupKey={page.groupKey} current={page.lang} />
          </div>

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

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <WhatsAppButton size="lg" label={ui.whatsappLabel} message={ui.whatsappMessage} source={`${source}-hero`} />
          </div>
          <p className="mt-3 text-sm text-white/65">{ui.replyNote}</p>
        </div>
      </section>

      {/* Inclusions strip */}
      <div className="border-y border-sand-200/70 bg-white/60">
        <div className="container flex gap-2.5 overflow-x-auto py-4 no-scrollbar">
          {ui.inclusions.map((it) => (
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

      {/* Boats, in-language */}
      <section className="section">
        <div className="container">
          <SectionHeading eyebrow={ui.boatsEyebrow} title={ui.boatsTitle} intro={ui.boatsIntro} />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {boats.map((b) => (
              <Reveal key={b.id} className="card overflow-hidden">
                <SmartImage src={b.image} alt={b.name} className="aspect-[4/3] w-full" />
                <div className="p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="font-display text-xl text-navy">{b.name}</h3>
                    <span className="shrink-0 text-sm font-bold text-teal-700">{b.price}</span>
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/65">{b.line}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8">
            <Link to="/boats" className="link-underline inline-flex items-center gap-1.5 text-sm font-semibold text-teal-700">
              {ui.boatsCta}
              <Icon name="arrowRight" className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white/50 py-16 lg:py-24">
        <div className="container max-w-3xl">
          <SectionHeading eyebrow={ui.faqEyebrow} title={ui.faqTitle} align="center" />
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
              <WhatsAppButton variant="white" size="lg" label={ui.whatsappLabel} message={ui.whatsappMessage} source={`${source}-cta`} />
            </div>
            <p className="mt-4 text-sm text-white/60">{ui.replyNote}</p>
          </CtaBand>
        </div>
      </section>
    </>
  )
}
