import { Link, useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Seo from '../components/Seo'
import { IconArrowRight, IconCheck, IconClock, IconStar, IconGlobe, IconClose } from '../components/icons'
import { courses } from '../data/courses'

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  const q = (searchParams.get('q') || '').trim()
  const qLower = q.toLowerCase()

  const filteredCourses = qLower
    ? courses.filter(
        (c) =>
          c.title.toLowerCase().includes(qLower) ||
          c.desc.toLowerCase().includes(qLower) ||
          c.level.toLowerCase().includes(qLower),
      )
    : courses

  const clearSearch = () => setSearchParams({})

  return (
    <>
      <Seo
        title="eBay, Shopify & TikTok Shop Courses"
        description="Practical, mentor-led courses in eBay, Shopify, TikTok Shop, Etsy, AI for ecommerce, and digital marketing in Lahore, Pakistan — for beginners through to companies."
        path="/courses"
      />

      <PageHero
        eyebrow="Our Courses"
        title="Master the Platforms That Actually Sell"
        subtitle="From eBay and Shopify to TikTok Shop, Etsy, AI and digital marketing — pick the practical, mentor-led course built for where you want to sell."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {q && (
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-brand-100 bg-brand-50/60 px-5 py-3.5">
              <p className="text-sm font-semibold text-navy-900">
                {filteredCourses.length > 0
                  ? `Showing ${filteredCourses.length} result${filteredCourses.length === 1 ? '' : 's'} for "${q}"`
                  : `No courses found for "${q}"`}
              </p>
              <button
                type="button"
                onClick={clearSearch}
                className="flex items-center gap-1.5 text-sm font-semibold text-brand-700 hover:text-brand-800"
              >
                <IconClose width={14} height={14} /> Clear search
              </button>
            </div>
          )}

          {filteredCourses.length === 0 && (
            <p className="py-10 text-center text-slate-600">
              Try a different keyword, or{' '}
              <Link to="/contact" className="font-semibold text-brand-700 hover:text-brand-800">
                contact us
              </Link>{' '}
              and we'll help you find the right course.
            </p>
          )}

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((c) => (
              <div
                key={c.title}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-100"
              >
                <div className={`relative flex h-44 items-center justify-center bg-gradient-to-br ${c.thumb}`}>
                  {c.tag && (
                    <span className="absolute top-3 left-3 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-900">
                      {c.tag}
                    </span>
                  )}
                  <span className="absolute top-3 right-3 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {c.level}
                  </span>
                  <span className="grid h-16 w-16 place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <c.icon width={30} height={30} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-lg font-bold text-navy-900">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>

                  <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <IconClock width={16} height={16} /> {c.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <IconGlobe width={16} height={16} /> {c.mode}
                    </span>
                  </div>

                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-200 pt-5">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <IconCheck width={16} height={16} className="mt-0.5 shrink-0 text-brand-600" />
                        {p}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to={`/courses/${c.slug}`}
                    className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-600 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-700 hover:shadow-lg"
                  >
                    View Full Details <IconArrowRight width={16} height={16} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <div className="flex justify-center gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </div>
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Contact our team for a free, no-obligation consultation. We'll recommend the best
            course based on your goals and experience level.
          </p>
        </div>
      </section>

      <CTASection
        title="Seats Fill Up Quickly — Contact Us Today"
        subtitle="Message us now to confirm your spot in the next batch and get all your questions answered immediately."
      />
    </>
  )
}
