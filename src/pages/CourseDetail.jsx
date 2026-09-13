import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { courses } from '../data/courses'
import { enrollFormUrl, site, siteUrl } from '../siteConfig'
import { IconArrowLeft, IconArrowRight, IconCheck, IconClock, IconGlobe, IconUsers } from '../components/icons'

export default function CourseDetail() {
  const { slug } = useParams()
  const course = courses.find((c) => c.slug === slug)

  if (!course) return <Navigate to="/courses" replace />

  const otherCourses = courses.filter((c) => c.slug !== slug).slice(0, 3)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Course',
      name: course.title,
      description: course.desc,
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
        { '@type': 'ListItem', position: 1, name: 'Home', item: siteUrl },
        { '@type': 'ListItem', position: 2, name: 'Courses', item: `${siteUrl}/courses` },
        { '@type': 'ListItem', position: 3, name: course.title, item: `${siteUrl}/courses/${course.slug}` },
      ],
    },
  ]

  return (
    <>
      <Seo
        title={course.title}
        description={`${course.desc} Taught in Lahore, Pakistan — online and in-person batches available.`}
        path={`/courses/${course.slug}`}
        jsonLd={jsonLd}
      />

      <section className={`relative overflow-hidden bg-gradient-to-br ${course.thumb} text-white`}>
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-gold-400"
          >
            <IconArrowLeft width={16} height={16} /> All Courses
          </Link>

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
              <h1 className="font-heading text-3xl font-extrabold sm:text-4xl">{course.title}</h1>
            </div>
          </div>

          <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">{course.desc}</p>

          <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold">
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <IconUsers width={16} height={16} className="text-gold-400" /> {course.level}
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <IconClock width={16} height={16} className="text-gold-400" /> {course.duration}
            </span>
            <span className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2">
              <IconGlobe width={16} height={16} className="text-gold-400" /> {course.mode}
            </span>
          </div>

          <a
            href={enrollFormUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl"
          >
            Enroll Now <IconArrowRight width={16} height={16} />
          </a>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7">
            <h2 className="font-heading text-lg font-bold text-navy-900">What Is It?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{course.whatIsIt}</p>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7">
            <h2 className="font-heading text-lg font-bold text-navy-900">Why It Matters</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{course.whyItMatters}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Curriculum
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              What You'll Learn
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10 grid gap-3 sm:grid-cols-2">
            {course.curriculum.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
                  <IconCheck width={14} height={14} />
                </span>
                <span className="text-sm text-slate-700">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Who It's For
            </span>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {course.whoItsFor}
            </p>
          </Reveal>
        </div>
      </section>

      {otherCourses.length > 0 && (
        <section className="bg-slate-50 py-16 lg:py-20">
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
                  to={`/courses/${c.slug}`}
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
