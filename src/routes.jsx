import App from './App.jsx'
import Home from './pages/Home.jsx'
import Boats from './pages/Boats.jsx'
import Trips from './pages/Trips.jsx'
import About from './pages/About.jsx'
import Reviews from './pages/Reviews.jsx'
import FAQ from './pages/FAQ.jsx'
import Contact from './pages/Contact.jsx'
import SEOPage from './pages/SEOPage.jsx'
import NotFound from './pages/NotFound.jsx'
import Preview from './pages/Preview.jsx'
import { seoPageSlugs } from './data/seoPages.js'

export const routes = [
  // Standalone Riviera homepage preview (noindex). Rendered outside <App /> so
  // the normal header/footer don't compete with the full-bleed poster design.
  { path: '/preview', element: <Preview /> },
  { path: '/preview/riviera', element: <Preview /> },
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'boats', element: <Boats /> },
      { path: 'trips', element: <Trips /> },
      { path: 'about', element: <About /> },
      { path: 'reviews', element: <Reviews /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'contact', element: <Contact /> },
      // SEO landing pages — one static route each (prerendered)
      ...seoPageSlugs.map((slug) => ({ path: slug, element: <SEOPage slug={slug} /> })),
      { path: '*', element: <NotFound /> },
    ],
  },
]
