import { Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import { services } from '../data/services'
import { buildServiceFaqs } from '../data/serviceFaqs'
import { site, siteUrl, whatsappLink } from '../siteConfig'
import { pageUrl } from '../seoUtils'
import { AccentCard, DetailHero, FaqList, IconTile, SectionHeading, ServiceCard } from '../components/ui'
import { accentAt, btnGreen, btnOutline } from '../components/uiTokens'
import { IconAward, IconChart, IconChat, IconCheck, IconPhone, IconTarget, IconUsers, IconWhatsApp } from '../components/icons'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = services.find((s) => s.slug === slug)

  if (!service) return <Navigate to="/services/" replace />

  const otherServices = services.filter((s) => s.slug !== slug).slice(0, 3)
  const accent = accentAt(services.indexOf(service))
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
        description={`${service.desc} Serving sellers and businesses in Lahore, Pakistan, online and in-person.`}
        keywords={`${service.title}, ${service.title} in Lahore, ${service.title} Pakistan, ${service.title} service Lahore, hire ${service.title} Lahore`}
        path={`/services/${service.slug}`}
        jsonLd={jsonLd}
      />

      <DetailHero
        crumbs={[{ label: 'Home', to: '/' }, { label: 'Services', to: '/services/' }, { label: service.title }]}
        accent={accent}
        icon={service.icon}
        title={service.title}
        desc={service.desc}
      >
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={whatsappLink(`Hi! I'm interested in your ${service.title} service.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={btnGreen}
          >
            <IconWhatsApp width={18} height={18} /> Get a free consultation
          </a>
          <a href={`tel:${site.phoneDial}`} className={btnOutline}>
            <IconPhone width={16} height={16} /> Call {site.phoneDisplay}
          </a>
        </div>
      </DetailHero>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 lg:px-8">
          {[
            { title: 'What is it?', text: service.whatIsIt, icon: IconTarget, a: accentAt(0) },
            { title: 'Why it matters', text: service.whyItMatters, icon: IconChart, a: accentAt(1) },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="h-full">
              <AccentCard accent={b.a}>
                <IconTile accent={b.a} icon={b.icon} size="sm" />
                <h2 className="relative mt-5 font-heading text-xl font-bold text-navy-900">{b.title}</h2>
                <p className="relative mt-2 text-[15px] leading-relaxed text-slate-600">{b.text}</p>
              </AccentCard>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50/70 via-white to-gold-50/60 py-14 sm:py-16 lg:py-20">
        <div className="relative mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading center eyebrow="What's included" icon={IconCheck} title="Everything covered in" highlight="this service." />
          </Reveal>
          <Reveal delay={80} className="mt-10 grid gap-3 sm:grid-cols-2">
            {service.included.map((item) => (
              <div
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
                  <IconCheck width={13} height={13} strokeWidth={2.6} />
                </span>
                <span className="text-sm font-medium text-slate-700">{item}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-8 text-center shadow-xl shadow-brand-600/5 sm:p-12">
            <div
              aria-hidden="true"
              className="bg-dot-grid pointer-events-none absolute top-0 right-0 h-48 w-48 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]"
            />
            <span className="relative mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
              <IconUsers width={22} height={22} />
            </span>
            <h2 className="relative mt-5 font-heading text-2xl font-bold text-navy-900 sm:text-3xl">Who it&apos;s for</h2>
            <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{service.whoItsFor}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50/70 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading center eyebrow="FAQs" icon={IconChat} title="Questions about" highlight={service.title} />
          </Reveal>
          <div className="mt-10">
            <FaqList faqs={faqs} />
          </div>
        </div>
      </section>

      {otherServices.length > 0 && (
        <section className="bg-white py-14 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal>
              <SectionHeading center eyebrow="Explore more" icon={IconAward} title="Other services" highlight="you might like." />
            </Reveal>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {otherServices.map((s) => (
                <Reveal key={s.slug} className="h-full">
                  <ServiceCard service={s} index={services.indexOf(s)} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection
        title={`Ready to get started with ${service.title}?`}
        subtitle="Message us now for a free consultation and a clear quote for your specific needs."
      />
    </>
  )
}
