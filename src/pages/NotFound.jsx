import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
import { Highlight } from '../components/ui'
import { btnOutline, btnPrimary } from '../components/uiTokens'
import { IconArrowRight } from '../components/icons'

export default function NotFound() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you are looking for does not exist. Browse our eBay, Shopify and TikTok Shop courses instead."
        path="/404"
        noindex
      />
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-gold-50 py-24 lg:py-32">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-2xl px-5 text-center lg:px-8">
          <p className="bg-gradient-to-r from-brand-600 to-emerald-500 bg-clip-text font-heading text-7xl font-bold text-transparent sm:text-8xl">
            404
          </p>
          <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
            This page <Highlight>doesn&apos;t exist</Highlight>
          </h1>
          <p className="mt-6 text-slate-600">
            The link may be broken or the page may have moved. Head back home or explore our courses.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link to="/" className={btnPrimary}>
              Go to homepage
            </Link>
            <Link to="/courses/" className={btnOutline}>
              View courses <IconArrowRight width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
