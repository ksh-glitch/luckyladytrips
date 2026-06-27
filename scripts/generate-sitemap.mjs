// Generates public/sitemap.xml from the site's routes + SEO pages.
// Runs automatically before each build (see package.json "prebuild").
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const { seoPageSlugs } = await import('../src/data/seoPages.js')
const { site } = await import('../src/data/site.js')

const staticPaths = ['/', '/boats', '/trips', '/about', '/reviews', '/faq', '/contact']
const seoPaths = seoPageSlugs.map((s) => `/${s}`)
const all = [...staticPaths, ...seoPaths]

const today = process.env.SITEMAP_DATE || '2025-01-01'

const urls = all
  .map((p) => {
    const priority = p === '/' ? '1.0' : staticPaths.includes(p) ? '0.8' : '0.7'
    return `  <url>\n    <loc>${site.url}${p === '/' ? '/' : p}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>${priority}</priority>\n  </url>`
  })
  .join('\n')

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`

writeFileSync(resolve(__dirname, '../public/sitemap.xml'), xml)
console.log(`Wrote public/sitemap.xml with ${all.length} URLs`)
