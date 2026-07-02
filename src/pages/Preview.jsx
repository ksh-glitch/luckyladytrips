import SEO from '../components/SEO.jsx'
import RivieraHome from '../components/heroes/RivieraHome.jsx'

// ---------------------------------------------------------------------------
//  Riviera homepage preview (noindex). A full homepage rebuilt in the 80s
//  travel-poster direction, rendered outside the App layout so the live site's
//  header/footer don't compete with it. Used to evaluate the direction before
//  rolling it into the real homepage.
// ---------------------------------------------------------------------------

export default function Preview() {
  return (
    <>
      <SEO title="Lucky Lady Trips — Riviera preview" path="/preview/riviera" noindex />
      <RivieraHome />
    </>
  )
}
