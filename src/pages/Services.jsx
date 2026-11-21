import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { AccentCard, IconTile, SectionHeading, ServiceCard, StepCards } from '../components/ui'
import { accentAt, btnGreen, btnOutline } from '../components/uiTokens'
import { IconArrowRight, IconAward, IconCheck, IconTarget, IconUsers, IconWhatsApp } from '../components/icons'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { whatsappLink } from '../siteConfig'

const audiences = [
  {
    icon: IconAward,
    title: 'For individual students',
    desc: 'Personal mentorship, practical training and continued support as you build your own eBay or dropshipping business from scratch.',
    items: ['Flexible course schedules', 'Beginner to advanced tracks', 'Direct mentor access'],
  },
  {
    icon: IconUsers,
    title: 'For companies',
    desc: 'Equip your team with in-demand ecommerce skills through a customized corporate training program built around your business.',
    items: ['Tailored curriculum', 'On-site or online delivery', 'Progress tracking & reporting'],
  },
]

const process = [
  { title: 'Free Consultation', desc: 'Tell us about your goals, budget and experience level.' },
  { title: 'Custom Plan', desc: 'We map out the right service or course package for your needs.' },
  { title: 'Hands-On Execution', desc: 'We work alongside you on setup, training or ongoing coaching.' },
  { title: 'Continued Support', desc: 'Stay connected with our team as your store grows.' },
]

export default function Services() {
  return (
    <>
      <Seo
        title="eBay Consultancy & Shopify Marketing in Lahore"
        description="eBay consultancy and store management, Shopify marketing, TikTok Shop, business websites and Google & Meta ads for sellers in Lahore, Pakistan."
        keywords="eBay consultancy in Lahore, eBay account management Lahore Pakistan, Shopify marketing agency Lahore, ecommerce consultancy Pakistan, dropshipping consultancy Lahore, digital marketing agency Lahore, Google ads Meta ads Lahore, eBay store management Pakistan"
        path="/services"
      />

      <PageHero
        eyebrow="Our Services"
        icon={IconUsers}
        title="More than courses:"
        highlight="full ecommerce support."
        subtitle="From store setup to ongoing growth coaching, we support students and companies at every stage of their ecommerce journey."
      >
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={whatsappLink('Hi! I would like a free consultation for my store.')}
            target="_blank"
            rel="noopener noreferrer"
            className={btnGreen}
          >
            <IconWhatsApp width={18} height={18} /> Free consultation
          </a>
          <Link to="/contact/" className={btnOutline}>
            Discuss your requirements <IconArrowRight width={16} height={16} />
          </Link>
        </div>
      </PageHero>

      <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 3) * 80} className="h-full">
                <ServiceCard service={s} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading center eyebrow="How we work" icon={IconTarget} title="A simple," highlight="guided process." />
          </Reveal>
          <div className="mt-12">
            <StepCards steps={process} />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50/70 via-white to-gold-50/60 py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading center eyebrow="Who we help" icon={IconUsers} title="Built for students" highlight="and companies." />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {audiences.map((a, i) => (
              <Reveal key={a.title} delay={i * 80} className="h-full">
                <AccentCard accent={accentAt(i)}>
                  <IconTile accent={accentAt(i)} icon={a.icon} />
                  <h3 className="relative mt-5 font-heading text-xl font-bold text-navy-900">{a.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{a.desc}</p>
                  <ul className="relative mt-5 space-y-2.5">
                    {a.items.map((it) => (
                      <li key={it} className="flex items-center gap-2.5 text-sm text-slate-700">
                        <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-500 text-white">
                          <IconCheck width={12} height={12} strokeWidth={2.6} />
                        </span>
                        {it}
                      </li>
                    ))}
                  </ul>
                </AccentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
