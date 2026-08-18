import { useState } from 'react'
import SEO from '../components/SEO.jsx'
import PageHero from '../components/PageHero.jsx'
import BoatClip from '../components/BoatClip.jsx'
import Lightbox from '../components/Lightbox.jsx'
import SmartImage from '../components/SmartImage.jsx'
import CtaBand from '../components/CtaBand.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import Button from '../components/Button.jsx'
import Reveal from '../components/Reveal.jsx'
import { gallerySections, galleryPhotos } from '../data/gallery.js'
import { site } from '../data/site.js'
import { breadcrumbSchema } from '../lib/schema.js'
import { useSetEnquiry } from '../lib/EnquiryContext.jsx'

const abs = (p) => `${site.url}${p}`

// Running offset of each section's photos inside the flat lightbox list.
const sectionOffsets = gallerySections.reduce((acc, s, i) => {
  acc.push(i === 0 ? 0 : acc[i - 1] + gallerySections[i - 1].photos.length)
  return acc
}, [])

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  useSetEnquiry({ context: 'I saw the photo gallery on your website.', source: 'gallery' })

  return (
    <>
      <SEO
        title="Photo Gallery: The Boats, the Reefs, the Life"
        description="Real photos from our private Red Sea boat trips: One Lucky Lady, the Locke Catamaran and the speedboat, the reefs we anchor over, and the crew behind it all."
        path="/gallery"
        schema={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Gallery', path: '/gallery' },
          ]),
          {
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'Lucky Lady Trips photo gallery',
            url: `${site.url}/gallery`,
            image: galleryPhotos.map((p) => ({
              '@type': 'ImageObject',
              contentUrl: abs(p.src),
              description: p.alt,
            })),
          },
        ]}
      />

      <PageHero
        eyebrow="Photo gallery"
        title="What the day actually looks like"
        intro="Every photo here was taken on our boats, on our stretch of the Red Sea. No stock, no filters doing the heavy lifting — just the days as they happen."
      />

      <section className="section pt-4 lg:pt-6">
        <div className="container space-y-16 lg:space-y-24">
          {gallerySections.map((section, si) => (
            <Reveal key={section.id} id={section.id}>
              <div className="max-w-2xl">
                <h2 className="font-display text-2xl text-navy sm:text-display-sm">{section.title}</h2>
                <p className="mt-2 text-pretty leading-relaxed text-navy/65">{section.intro}</p>
              </div>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {/* the boat's walk-around loop leads its section, double-wide */}
                {section.clip && (
                  <div className="col-span-2 overflow-hidden rounded-3xl shadow-card">
                    <BoatClip
                      clip={section.clip.src}
                      poster={section.clip.poster}
                      alt={section.clip.alt}
                      className="aspect-[4/3] h-full"
                    />
                  </div>
                )}
                {section.photos.map((photo, pi) => (
                  <button
                    key={photo.src}
                    type="button"
                    onClick={() => setLightboxIndex(sectionOffsets[si] + pi)}
                    aria-label={`View photo: ${photo.alt}`}
                    className="group relative overflow-hidden rounded-3xl shadow-card transition duration-300 ease-smooth hover:-translate-y-0.5 hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  >
                    <SmartImage
                      src={photo.src}
                      alt={photo.alt}
                      className="aspect-[4/3] w-full"
                      sizes="(min-width: 1024px) 25vw, 50vw"
                      imgClassName="transition-transform duration-700 ease-smooth group-hover:scale-105"
                    />
                    <span aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy-950/25 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </button>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <CtaBand>
            <h2 className="mx-auto max-w-2xl text-balance font-display text-display-sm text-white sm:text-display">
              Rather be in the photos than looking at them?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-pretty text-white/80">
              Send us your dates and group size on WhatsApp. Pickup, food, drinks, gear and crew are all included.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <WhatsAppButton variant="white" size="lg" source="gallery-cta" context="I saw the photo gallery on your website." />
              <Button to="/boats" variant="ghost" size="lg" iconRight="arrowRight">
                Meet the boats
              </Button>
            </div>
          </CtaBand>
        </div>
      </section>

      <Lightbox
        photos={galleryPhotos}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onStep={setLightboxIndex}
      />
    </>
  )
}
