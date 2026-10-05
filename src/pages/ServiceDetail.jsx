import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { services } from '../data/services'
import { buildServiceFaqs } from '../data/serviceFaqs'
import { site, siteUrl, whatsappLink } from '../siteConfig'
import { pageUrl } from '../seoUtils'
import { IconArrowLeft, IconArrowRight, IconCheck, IconPlus, IconWhatsApp } from '../components/icons'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services/" replace />

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)
  const faqs = buildServiceFaqs(service)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.title,
      description: service.desc,
      serviceType: service.title,
      areaServed: [
        { '@type': 'City', name: 'Lahore' },
        { '@type': 'Country', name: 'Pakistan' },
      ],
      provider: {
        '@type': 'Organization',
        name: site.name,
        sameAs: siteUrl,
      },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Services', item: pageUrl('/services') },
        { '@type': 'ListItem', position: 3, name: service.title, item: pageUrl(`/services/${service.slug}`) },
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
        title={`${service.title} in Lahore`}
        description={`${service.desc} Serving sellers and businesses in Lahore, Pakistan — online and in-person.`}
        keywords={`${service.title}, ${service.title} in Lahore, ${service.title} Pakistan, ${service.title} service Lahore, hire ${service.title} Lahore`}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />

      <section className={`relative overflow-hidden bg-gradient-to-br ${service.thumb} text-white`}>
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <Link
            to="/services/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors duration-300 hover:text-gold-400"
          >
            <IconArrowLeft width={16} height={16} /> All Services
          </Link>

          <div className="mt-6 flex items-center gap-4">
            <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm">
              <service.icon width={32} height={32} />
            </span>
            <h1 className="font-heading text-3xl font-extrabold sm:text-4xl">{service.title}</h1>
          </div>

          <p className="mt-5 max-w-2xl text-base text-white/75 sm:text-lg">{service.desc}</p>

          <a
            href={whatsappLink(`Hi! I'm interested in your ${service.title} service.`)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl"
          >
            <IconWhatsApp width={18} height={18} /> Get a Free Consultation
          </a>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7">
            <h2 className="font-heading text-lg font-bold text-navy-900">What Is It?</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.whatIsIt}</p>
          </Reveal>
          <Reveal delay={100} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-7">
            <h2 className="font-heading text-lg font-bold text-navy-900">Why It Matters</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.whyItMatters}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              What's Included
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Everything Covered in This Service
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-10 grid gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
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
              {service.whoItsFor}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">FAQs</span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Questions About {service.title}
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

      {otherServices.length > 0 && (
        <section className="bg-white py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                Explore More
              </span>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                Other Services You Might Like
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {otherServices.map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}/`}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-100"
                >
                  <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${s.thumb}`}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <s.icon width={26} height={26} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-base font-bold text-navy-900">{s.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
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
        title={`Ready to Get Started With ${service.title}?`}
        subtitle="Message us now for a free consultation and a clear quote for your specific needs."
      />
    </>
  )
}
