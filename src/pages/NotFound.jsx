import { Link } from 'react-router-dom'
import Seo from '../components/Seo'
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
      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-2xl px-5 text-center lg:px-8">
          <p className="font-heading text-sm font-bold uppercase tracking-widest text-brand-600">Error 404</p>
          <h1 className="mt-3 font-heading text-3xl font-extrabold text-navy-900 sm:text-4xl">
            This page doesn't exist
          </h1>
          <p className="mt-4 text-slate-600">
            The link may be broken or the page may have moved. Head back home or explore our courses.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/"
              className="rounded-full bg-brand-600 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-700"
            >
              Go to Homepage
            </Link>
            <Link
              to="/courses"
              className="flex items-center gap-2 rounded-full border-2 border-slate-200 px-7 py-3 text-sm font-bold text-navy-900 transition-all duration-300 hover:border-brand-200 hover:bg-brand-50"
            >
              View Courses <IconArrowRight width={16} height={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
