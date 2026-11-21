import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { courses } from '../data/courses'
import { buildCourseFaqs } from '../data/courseFaqs'
import { verifiedReviews } from '../data/reviews'
import { enrollFormUrl, site, siteUrl, whatsappLink } from '../siteConfig'
import { pageUrl } from '../seoUtils'
import {
  IconArrowRight,
  IconChart,
  IconCheck,
  IconClock,
  IconGlobe,
  IconLocation,
  IconPhone,
  IconPlus,
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
        description={`${course.desc} Taught in Lahore, Pakistan — online and in-person batches available.`}
        keywords={`${course.title}, ${course.title} course in Lahore, ${course.title} course fees in Lahore, ${course.title} training Pakistan, ${course.title} course online, learn ${course.title} in Lahore`}
        path={`/courses/${course.slug}`}
        jsonLd={jsonLd}
      />

      {/* Hero: course summary + enrollment card */}
      <section className={`relative overflow-hidden bg-gradient-to-br ${course.thumb} text-white`}>
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-[1fr_380px] lg:items-start lg:px-8 lg:py-16">
          <div>
            <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-white/60">
              <Link to="/" className="transition-colors hover:text-gold-400">Home</Link>
              <span>/</span>
              <Link to="/courses/" className="transition-colors hover:text-gold-400">Courses</Link>
              <span>/</span>
              <span className="font-semibold text-white/90">{course.title}</span>
            </nav>

            <div className="mt-6 flex items-center gap-4">
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm">
                <course.icon width={32} height={32} />
              </span>
              <div>
                {course.tag && (
                  <span className="mb-1 inline-block rounded-full bg-gold-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-navy-900">
                    {course.tag}
                  </span>
                )}
                <h1 className="font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                  {course.title}
                </h1>
              </div>
            </div>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">{course.desc}</p>

            <div className="mt-6 flex flex-wrap gap-2.5 text-sm font-semibold">
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
                <IconUsers width={16} height={16} className="text-gold-400" /> {course.level}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
                <IconClock width={16} height={16} className="text-gold-400" /> {course.duration}
              </span>
              <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 ring-1 ring-white/10">
                <IconGlobe width={16} height={16} className="text-gold-400" /> {course.mode}
              </span>
            </div>

            <div className="mt-8 rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 sm:p-6">
              <p className="text-xs font-bold uppercase tracking-widest text-gold-400">Course Highlights</p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {course.points.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-sm text-white/85">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-900">
                      <IconCheck width={12} height={12} />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enrollment card */}
          <aside className="rounded-3xl bg-white p-6 text-navy-900 shadow-2xl shadow-black/30 sm:p-7">
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
        <div className="mx-auto flex max-w-7xl gap-1 overflow-x-auto px-5 py-2 text-sm font-semibold lg:px-8">
          {[
            ['overview', 'Overview'],
            ['curriculum', 'Curriculum'],
            ['who', "Who It's For"],
            ['faqs', 'FAQs'],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className="shrink-0 rounded-full px-4 py-2 text-slate-600 transition-colors hover:bg-brand-50 hover:text-brand-700"
            >
              {label}
            </a>
          ))}
        </div>
      </div>

      <section id="overview" className="scroll-mt-24 bg-white py-14 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 md:grid-cols-2 lg:px-8">
          <Reveal className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
              <IconTarget width={20} height={20} />
            </span>
            <h2 className="mt-4 font-heading text-lg font-bold text-navy-900">What Is It?</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{course.whatIsIt}</p>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-emerald-50 text-emerald-600">
              <IconChart width={20} height={20} />
            </span>
            <h2 className="mt-4 font-heading text-lg font-bold text-navy-900">Why It Matters</h2>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{course.whyItMatters}</p>
          </Reveal>
        </div>
      </section>

      <section id="curriculum" className="scroll-mt-24 bg-slate-50 py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">Curriculum</span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              What You'll Learn
            </h2>
            <p className="mt-2 text-sm text-slate-500">
              {course.curriculum.length} topics covered over {course.duration}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-10 grid gap-3 sm:grid-cols-2">
            {course.curriculum.map((item, i) => (
              <div
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100 transition-shadow hover:shadow-md"
              >
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-brand-50 text-xs font-bold text-brand-700">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section id="who" className="scroll-mt-24 bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="flex flex-col items-center gap-5 rounded-3xl bg-gradient-to-br from-brand-50 to-white p-8 text-center ring-1 ring-brand-100 sm:p-10">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white">
              <IconUsers width={22} height={22} />
            </span>
            <h2 className="font-heading text-2xl font-extrabold text-navy-900">Who It's For</h2>
            <p className="max-w-2xl text-base leading-relaxed text-slate-600">{course.whoItsFor}</p>
            <a
              href={enrollFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Enroll for {course.fee} <IconArrowRight width={16} height={16} />
            </a>
          </Reveal>
        </div>
      </section>

      <section id="faqs" className="scroll-mt-24 bg-slate-50 py-14 lg:py-16">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">FAQs</span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Questions About {course.title}
            </h2>
          </Reveal>
          <div className="mt-10 space-y-3">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl border border-slate-200 bg-white px-5 py-4 open:border-brand-200 open:shadow-sm"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-heading text-sm font-bold text-navy-900 sm:text-base">
                  {f.q}
                  <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-transform duration-300 group-open:rotate-45">
                    <IconPlus width={14} height={14} />
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {otherCourses.length > 0 && (
        <section className="bg-white py-14 lg:py-16">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                Explore More
              </span>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                Other Courses You Might Like
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {otherCourses.map((c) => (
                <Link
                  key={c.slug}
                  to={`/courses/${c.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-100"
                >
                  <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${c.thumb}`}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <c.icon width={26} height={26} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-base font-bold text-navy-900">{c.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                    <span className="mt-4 flex items-center gap-1.5 text-sm font-bold text-brand-700 transition-colors duration-300 group-hover:text-brand-800">
                      View Details <IconArrowRight width={14} height={14} />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to Start ${course.title}?`}
        subtitle="Message us now to confirm your spot in the next batch and get all your questions answered immediately."
      />
    </>
  )
}
