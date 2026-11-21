import { Link, useSearchParams } from 'react-router-dom'
import { useHydrated } from '../useHydrated'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { CourseCard, SectionHeading } from '../components/ui'
import { btnGreen, btnOutline } from '../components/uiTokens'
import { IconArrowRight, IconClose, IconStar, IconWhatsApp } from '../components/icons'
import { whatsappLink } from '../siteConfig'
import { courses } from '../data/courses'

export default function Courses() {
  const [searchParams, setSearchParams] = useSearchParams()
  // The prerendered HTML has no query string, so apply ?q= only after hydration.
  const hydrated = useHydrated()
  const q = hydrated ? (searchParams.get('q') || '').trim() : ''
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
        title="eBay, Shopify & TikTok Shop Courses in Lahore"
        description="Practical, mentor-led courses in eBay, Shopify, TikTok Shop, Etsy, AI for ecommerce, and digital marketing in Lahore, Pakistan, for beginners through to companies."
        keywords="eBay course in Lahore, eBay course fees in Lahore, Shopify course Lahore, TikTok Shop course Pakistan, Etsy course Pakistan, AI for ecommerce course Lahore, digital marketing course Lahore, ecommerce courses Pakistan, dropshipping course Lahore, best ecommerce institute Lahore"
        path="/courses"
      />

      <PageHero
        eyebrow="Our Courses"
        title="Master the platforms that"
        highlight="actually sell."
        subtitle={`eBay, Shopify, TikTok Shop, Etsy, AI and digital marketing. Every course is 3 months, mentor-led and hands-on, ${courses[0].fee} each.`}
      />

      <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {q && (
            <div className="mb-8 flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-brand-100 bg-brand-50/60 px-5 py-3.5 shadow-sm">
              <p className="text-sm font-semibold text-navy-900">
                {filteredCourses.length > 0
                  ? `Showing ${filteredCourses.length} result${filteredCourses.length === 1 ? '' : 's'} for: ${q}`
                  : `No courses found for: ${q}`}
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
              <Link to="/contact/" className="font-semibold text-brand-700 hover:text-brand-800">
                contact us
              </Link>{' '}
              and we'll help you find the right course.
            </p>
          )}

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredCourses.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 80} className="h-full">
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white pb-4">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="relative grid items-center gap-8 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-gold-50 p-7 shadow-xl shadow-brand-600/5 sm:p-10 lg:grid-cols-[1.3fr_1fr]">
            <div
              aria-hidden="true"
              className="bg-dot-grid pointer-events-none absolute top-0 right-0 h-56 w-56 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]"
            />
            <div className="relative">
              <SectionHeading
                eyebrow="Free guidance"
                icon={IconStar}
                title="Not sure which course is"
                highlight="right for you?"
                desc="Tell us your goal and experience level. We'll recommend the best course for you, free and with no obligation."
              />
            </div>
            <div className="relative flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a
                href={whatsappLink('Hi! Can you help me choose the right course?')}
                target="_blank"
                rel="noopener noreferrer"
                className={btnGreen}
              >
                <IconWhatsApp width={18} height={18} /> Ask on WhatsApp
              </a>
              <Link to="/contact/" className={btnOutline}>
                Contact form <IconArrowRight width={16} height={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
