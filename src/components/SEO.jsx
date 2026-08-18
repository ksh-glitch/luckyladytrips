import { Head } from 'vite-react-ssg'
import { site } from '../data/site.js'
import { images } from '../data/images.js'

const abs = (p) => (p?.startsWith('http') ? p : `${site.url}${p}`)

/**
 * Per-page <head> management (title, meta, canonical, OG/Twitter, JSON-LD).
 * `schema` may be a single object or an array of objects (nulls are ignored).
 * `alternates` renders hreflang links for translated pages: [{ hrefLang, href }].
 */
export default function SEO({
  title,
  description = site.shortDesc,
  path = '/',
  image = images.ogDefault,
  type = 'website',
  noindex = false,
  schema,
  lang = 'en',
  ogLocale = 'en_GB',
  alternates = [],
}) {
  const fullTitle = title
    ? title.includes(site.name)
      ? title // avoid double-appending the brand if the title already includes it
      : `${title} | ${site.name}`
    : `${site.name}: Private All-Inclusive Red Sea Boat Trips`
  const canonical = `${site.url}${path === '/' ? '/' : path}`
  const ogImage = abs(image)
  const schemas = (Array.isArray(schema) ? schema : [schema]).filter(Boolean)

  return (
    <Head>
      <html lang={lang} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      {alternates.map((a) => (
        <link key={a.hrefLang} rel="alternate" hrefLang={a.hrefLang} href={abs(a.href)} />
      ))}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:locale" content={ogLocale} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {schemas.map((s, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(s)}
        </script>
      ))}
    </Head>
  )
}
