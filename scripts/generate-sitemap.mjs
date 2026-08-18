// Generates public/sitemap.xml from the site's routes + SEO pages.
// Runs automatically before each build (see package.json "prebuild").
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const { seoPageSlugs } = await import('../src/data/seoPages.js')
const { localizedSeoPageSlugs, translationGroups } = await import('../src/data/seoPagesI18n.js')
const { site } = await import('../src/data/site.js')

const staticPaths = ['/', '/boats', '/trips', '/gallery', '/tiktok', '/about', '/reviews', '/faq', '/contact']
const seoPaths = seoPageSlugs.map((s) => `/${s}`)
const localizedPaths = localizedSeoPageSlugs.map((s) => `/${s}`)
const all = [...staticPaths, ...seoPaths, ...localizedPaths]

// path -> its translation group (so every language version lists all siblings)
const groupByPath = {}
for (const group of Object.values(translationGroups)) {
  for (const href of Object.values(group)) groupByPath[href] = group
}

const today = process.env.SITEMAP_DATE || '2025-01-01'

const alternatesXml = (p) => {
  const group = groupByPath[p]
  if (!group) return ''
  const links = Object.entries(group)
    .concat([['x-default', group.en]])
    .map(([lang, href]) => `    <xhtml:link rel="alternate" hreflang="${lang}" href="${site.url}${href}"/>`)
  return `\n${links.join('\n')}`
}

const urls = all
  .map((p) => {
    const priority = p === '/' ? '1.0' : staticPaths.includes(p) ? '0.8' : '0.7'
    return `  <url>\n    <loc>${site.url}${p === '/' ? '/' : p}</loc>${alternatesXml(p)}\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls}\n</urlset>\n`

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml)
console.log(`Wrote public/sitemap.xml with ${all.length} URLs`)
