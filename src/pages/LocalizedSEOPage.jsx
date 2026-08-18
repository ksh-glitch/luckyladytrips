import LocalizedSEOPageTemplate from '../components/LocalizedSEOPageTemplate.jsx'
import NotFound from './NotFound.jsx'
import { localizedSeoPageBySlug } from '../data/seoPagesI18n.js'

export default function LocalizedSEOPage({ slug }) {
  const page = localizedSeoPageBySlug[slug]
  if (!page) return <NotFound />
  return <LocalizedSEOPageTemplate page={page} />
}
