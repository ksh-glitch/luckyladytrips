import SEO from '../components/SEO.jsx'
import Button from '../components/Button.jsx'
import WhatsAppButton from '../components/WhatsAppButton.jsx'
import { Icon } from '../components/icons.jsx'

export default function NotFound() {
  return (
    <>
      <SEO title="Page not found" path="/404" noindex />
      <section className="flex min-h-[80svh] items-center pt-24">
        <div className="container text-center">
          <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-teal-600/10 text-teal-700">
            <Icon name="compass" className="h-8 w-8" />
          </span>
          <p className="mt-6 font-display text-6xl text-navy">404</p>
          <h1 className="mt-2 font-display text-2xl text-navy">This page drifted off course</h1>
          <p className="mx-auto mt-3 max-w-md text-pretty text-navy/65">
            The page you&apos;re after isn&apos;t here. Let&apos;s get you back on the water.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/" variant="primary" icon="anchor">Back to home</Button>
            <WhatsAppButton variant="secondary" source="404" />
          </div>
        </div>
      </section>
    </>
  )
}
