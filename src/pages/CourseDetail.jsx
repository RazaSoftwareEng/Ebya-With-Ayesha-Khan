import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { courses } from '../data/courses'
import { buildCourseFaqs } from '../data/courseFaqs'
import { verifiedReviews } from '../data/reviews'
import { enrollFormUrl, site, siteUrl, whatsappLink } from '../siteConfig'
import { pageUrl } from '../seoUtils'
import { AccentCard, CourseCard, FaqList, IconTile, SectionHeading } from '../components/ui'
import { renderInline } from '../components/richText'
import { accentAt, btnPrimary, courseAccent } from '../components/uiTokens'
import {
  IconArrowRight,
  IconAward,
  IconChart,
  IconChat,
  IconCheck,
  IconClock,
  IconGlobe,
  IconLocation,
  IconPhone,
  IconShield,
  IconTarget,
  IconUsers,
  IconWhatsApp,
} from '../components/icons'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)

  if (!course) return <Navigate to="/courses/" replace />

  const otherCourses = courses.filter((c) => c.slug !== slug).slice(0, 3)
  const accent = courseAccent(course.slug)
  const faqs = buildCourseFaqs(course)

  const courseReviews = verifiedReviews.filter((r) => r.course === course.slug)
  const reviewSchema = courseReviews.length
    ? {
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: (courseReviews.reduce((sum, r) => sum + r.rating, 0) / courseReviews.length).toFixed(1),
          reviewCount: courseReviews.length,
          bestRating: 5,
        },
        review: courseReviews.map((r) => ({
          '@type': 'Review',
          author: { '@type': 'Person', name: r.name },
          datePublished: r.date,
          reviewBody: r.text,
          reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
        })),
      }
    : {}

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.desc,
      ...reviewSchema,
      offers: {
        '@type': 'Offer',
        price: course.feeAmount,
        priceCurrency: 'PKR',
        category: 'Paid',
      },
      provider: {
        '@type': 'Organization',
        name: site.name,
        sameAs: siteUrl,
      },
      hasCourseInstance: {
        '@type': 'CourseInstance',
        courseMode: course.mode,
        courseWorkload: course.duration,
        location: {
          '@type': 'Place',
          name: site.address,
        },
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Courses', item: pageUrl('/courses') },
        { '@type': 'ListItem', position: 3, name: course.title, item: pageUrl(`/courses/${course.slug}`) },
      ],
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ]

  return (
    <>
      <Seo
        title={`${course.title} Course in Lahore`}
        description={`${course.desc} Taught in Lahore, Pakistan, with online and in-person batches available.`}
        keywords={`${course.title}, ${course.title} course in Lahore, ${course.title} course fees in Lahore, ${course.title} training Pakistan, ${course.title} course online, learn ${course.title} in Lahore`}
        path={`/courses/${course.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero: course summary + enrollment card */}
      <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-brand-50 via-white to-gold-50">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className={`pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-60 blur-3xl ${accent.glow}`} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:py-12 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start lg:px-8 lg:py-16">
          <div className="min-w-0">
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
              <Link to="/" className="transition-colors hover:text-brand-700">Home</Link>
              <span>/</span>
              <Link to="/courses/" className="transition-colors hover:text-brand-700">Courses</Link>
              <span>/</span>
              <span className="font-semibold text-navy-900">{course.title}</span>
            </nav>

            <div className="mt-6 flex items-center gap-4">
              <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white shadow-lg sm:h-16 sm:w-16 ${accent.tile}`}>
                <course.icon width={28} height={28} />
              </span>
              <div>
                {course.tag && (
                  <span className="mb-1.5 inline-block rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white">
                    {course.tag}
                  </span>
                )}
                <h1 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                  {course.title}
                </h1>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{course.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2.5 text-sm font-semibold">
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-navy-900 shadow-sm ring-1 ring-slate-200">
                <IconUsers width={16} height={16} className="text-brand-600" /> {course.level}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-navy-900 shadow-sm ring-1 ring-slate-200">
                <IconClock width={16} height={16} className="text-brand-600" /> {course.duration}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-navy-900 shadow-sm ring-1 ring-slate-200">
                <IconGlobe width={16} height={16} className="text-brand-600" /> {course.mode}
              </span>
            </div>

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white/80 p-5 shadow-lg shadow-slate-900/[0.04] backdrop-blur sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-brand-700">Course highlights</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-slate-700">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                      <IconCheck width={12} height={12} strokeWidth={2.6} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enrollment card */}
          <aside className={`relative overflow-hidden rounded-3xl border border-t-4 border-slate-200 bg-white p-6 text-navy-900 shadow-2xl sm:p-7 lg:sticky lg:top-28 ${accent.border} ${accent.shadow}`}>
            <p className="text-xs font-bold uppercase tracking-widest text-slate-500">Course Fee</p>
            <p className="mt-1 font-heading text-4xl font-extrabold text-navy-900">{course.fee}</p>
            <p className="mt-1 text-sm text-slate-500">Complete course · {course.duration}</p>

            <ul className="mt-6 divide-y divide-slate-100 border-y border-slate-100 text-sm">
              <li className="flex items-center justify-between gap-3 py-3">
                <span className="flex items-center gap-2 text-slate-500"><IconClock width={16} height={16} /> Duration</span>
                <span className="font-semibold">{course.duration}</span>
              </li>
              <li className="flex items-center justify-between gap-3 py-3">
                <span className="flex items-center gap-2 text-slate-500"><IconUsers width={16} height={16} /> Level</span>
                <span className="text-right font-semibold">{course.level}</span>
              </li>
              <li className="flex items-center justify-between gap-3 py-3">
                <span className="flex items-center gap-2 text-slate-500"><IconGlobe width={16} height={16} /> Class Mode</span>
                <span className="font-semibold">{course.mode}</span>
              </li>
              <li className="flex items-center justify-between gap-3 py-3">
                <span className="flex items-center gap-2 text-slate-500"><IconLocation width={16} height={16} /> Location</span>
                <span className="font-semibold">Lahore</span>
              </li>
            </ul>

            <a
              href={enrollFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 flex items-center justify-center gap-2 rounded-full bg-brand-600 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl"
            >
              Enroll Now <IconArrowRight width={16} height={16} />
            </a>
            <a
              href={whatsappLink(`Hi! I want to enroll in the ${course.title} course (${course.fee}). Please share the next batch details.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[#25D366] py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              <IconWhatsApp width={18} height={18} /> Ask on WhatsApp
            </a>
            <a
              href={`tel:${site.phoneDial}`}
              className="mt-3 flex items-center justify-center gap-2 rounded-full border-2 border-slate-200 py-3 text-sm font-bold text-navy-900 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50"
            >
              <IconPhone width={16} height={16} /> Call {site.phoneDisplay}
            </a>

            <p className="mt-5 flex items-start gap-2 text-xs leading-relaxed text-slate-500">
              <IconShield width={16} height={16} className="mt-0.5 shrink-0 text-emerald-600" />
              Hands-on assignments after every module with mentor support throughout.
            </p>
          </aside>
        </div>
      </section>

      {/* Quick section links */}
      <div className="border-b border-slate-100 bg-white">
        <div className="no-scrollbar mx-auto flex max-w-7xl gap-2 overflow-x-auto px-5 py-3 text-sm font-semibold lg:px-8">
          {[
            ['overview', 'Overview'],
            ['curriculum', 'Curriculum'],
            ['who', "Who It's For"],
            ['faqs', 'FAQs'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-full border border-slate-200 bg-white px-4 py-2 text-slate-600 shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <section id="overview" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 lg:px-8">
          {[
            { title: 'What is it?', text: course.whatIsIt, icon: IconTarget, a: accentAt(0) },
            { title: 'Why it matters', text: course.whyItMatters, icon: IconChart, a: accentAt(1) },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="h-full">
              <AccentCard accent={b.a}>
                <IconTile accent={b.a} icon={b.icon} size="sm" />
                <h2 className="relative mt-5 font-heading text-xl font-bold text-navy-900">{b.title}</h2>
                <p className="relative mt-2 text-[15px] leading-relaxed text-slate-600">{renderInline(b.text)}</p>
              </AccentCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="curriculum" className="scroll-mt-24 bg-gradient-to-br from-brand-50/70 via-white to-gold-50/60 py-14 sm:py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Curriculum"
              icon={IconCheck}
              title="What you will"
              highlight="learn."
              desc={`${course.curriculum.length} topics covered over ${course.duration}, with hands-on assignments after every module.`}
            />
          </Reveal>

          <Reveal delay={80} className="mt-10 grid gap-3 sm:grid-cols-2">
            {course.curriculum.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-xs font-bold text-white shadow-md ${accent.tile}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="who" className="scroll-mt-24 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="relative flex flex-col items-center gap-5 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-xl shadow-brand-600/5 sm:p-12">
            <div
              aria-hidden="true"
              className="bg-dot-grid pointer-events-none absolute top-0 right-0 h-48 w-48 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]"
            />
            <span className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
              <IconUsers width={22} height={22} />
            </span>
            <h2 className="relative font-heading text-2xl font-bold text-navy-900 sm:text-3xl">Who it&apos;s for</h2>
            <p className="relative max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{renderInline(course.whoItsFor)}</p>
            <a href={enrollFormUrl} target="_blank" rel="noopener noreferrer" className={`relative ${btnPrimary}`}>
              Enroll for {course.fee} <IconArrowRight width={16} height={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-24 bg-slate-50/70 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading center eyebrow="FAQs" icon={IconChat} title="Questions about" highlight={course.title} />
          </Reveal>
          <div className="mt-10">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      {otherCourses.length > 0 && (
        <section className="bg-white py-14 sm:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading center eyebrow="Explore more" icon={IconAward} title="Other courses" highlight="you might like." />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherCourses.map((c, i) => (
                <Reveal key={c.slug} delay={i * 80} className="h-full">
                  <CourseCard course={c} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to start ${course.title}?`}
        subtitle="Message us to confirm your spot in the next batch and get your questions answered."
      />
    </>
  )
}
