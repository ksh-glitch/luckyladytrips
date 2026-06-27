import SEOPageTemplate from '../components/SEOPageTemplate.jsx'
import { seoPageBySlug } from '../data/seoPages.js'
import NotFound from './NotFound.jsx'

export default function SEOPage({ slug }) {
  const page = seoPageBySlug[slug]
  if (!page) return <NotFound />
  return <SEOPageTemplate page={page} />
}
