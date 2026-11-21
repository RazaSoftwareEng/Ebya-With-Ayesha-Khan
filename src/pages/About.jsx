import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ayeshaAvatar from '../components/assets/ayesha-avatar.webp'
import { AccentCard, IconTile, SectionHeading } from '../components/ui'
import { accentAt, btnGreen, btnOutline } from '../components/uiTokens'
import {
  IconArrowRight,
  IconAward,
  IconCheck,
  IconGlobe,
  IconRocket,
  IconShield,
  IconTarget,
  IconUsers,
  IconWhatsApp,
} from '../components/icons'
import { site, whatsappLink } from '../siteConfig'

const stats = [
  { value: '2,500+', label: 'Students trained' },
  { value: '5+', label: 'Years of experience' },
  { value: '95%', label: 'Student success rate' },
  { value: '30+', label: 'Corporate partners' },
]

const values = [
  {
    icon: IconShield,
    title: 'Trust first',
    desc: 'Every course, quote and promise is something we stand behind. No shortcuts, no false claims.',
  },
  {
    icon: IconTarget,
    title: 'Practical focus',
    desc: "We teach what actually works in today's market, tested through real stores and real sales.",
  },
  {
    icon: IconUsers,
    title: 'Student first',
    desc: 'Your questions, your pace, your goals. Our curriculum adapts to you, not the other way around.',
  },
  {
    icon: IconRocket,
    title: 'Growth mindset',
    desc: 'The ecommerce world evolves fast, and so do we. Our content is updated to stay current.',
  },
]

const milestones = [
  { year: 'Year 1', text: 'Started training individual students in eBay selling fundamentals.' },
  { year: 'Year 2-3', text: 'Expanded into dropshipping and product research coaching as demand grew.' },
  { year: 'Year 4', text: 'Launched corporate training programs for companies building ecommerce teams.' },
  { year: 'Today', text: 'Trusted by thousands of students and dozens of companies across multiple countries.' },
]

const trustPoints = [
  'Transparent course content and pricing, with no hidden surprises',
  'Real mentorship, not just pre-recorded video libraries',
  'A track record built on genuine student success stories',
  'Ongoing support that continues after the course ends',
]

export default function About() {
  return (
    <>
      <Seo
        title="About Ayesha Khan | Ecommerce Mentor, Lahore"
        description="Meet Ayesha Khan, a Lahore-based eBay and ecommerce mentor. Practical, mentor-led training trusted by thousands of students and companies."
        keywords="Ayesha Khan eBay, Ayesha Khan Official Lahore, eBay mentor in Lahore, best eBay trainer Lahore, ecommerce institute Paragon City Lahore, eBay trainer Pakistan, female eBay mentor Pakistan"
        path="/about"
      />

      <PageHero
        eyebrow="About us"
        icon={IconUsers}
        title="Meet"
        highlight="Ayesha Khan Official."
        subtitle="A training institute built on one simple belief: anyone can build a real online business with the right guidance."
      />

      {/* ─── Story + founder card ─────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8">
          <Reveal>
            <SectionHeading
              eyebrow="Our story"
              icon={IconRocket}
              title="From one seller's experience to a"
              highlight="trusted institute."
            />
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-slate-600 sm:text-base">
              <p>
                Ayesha Khan Official began with a simple goal: helping everyday people understand how online
                selling really works, without the confusion, jargon or unrealistic promises often found online.
              </p>
              <p>
                What started as one-on-one mentoring for a handful of students has grown into a full academy
                offering structured courses in eBay selling, dropshipping and ecommerce growth, trusted by
                thousands of students and dozens of companies looking to train their teams.
              </p>
              <p>
                Today, our mission remains the same: practical, honest, mentor-led education that gets real
                results, one student, one store, one sale at a time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="relative">
            <div className="pointer-events-none absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-brand-100/70 via-white to-gold-100/70" />
            <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 sm:p-7">
              <div className="flex items-center gap-4">
                <img
                  src={ayeshaAvatar}
                  alt="Ayesha Khan"
                  width={72}
                  height={72}
                  className="h-18 w-18 rounded-full object-cover shadow-md ring-4 ring-brand-50"
                />
                <div>
                  <p className="font-heading text-lg font-bold text-navy-900">Ayesha Khan</p>
                  <p className="text-sm text-slate-500">Founder &amp; Lead Mentor</p>
                  <p className="mt-1 text-xs text-slate-500">{site.address}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-2 gap-3">
                {stats.map((s, i) => (
                  <div
                    key={s.label}
                    className="rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-4 text-center"
                  >
                    <p className={`font-heading text-2xl font-bold ${accentAt(i).text}`}>{s.value}</p>
                    <p className="mt-1 text-xs font-medium text-slate-500">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Mission & vision ─────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50/70 via-white to-gold-50/60 py-14 sm:py-16 lg:py-20">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl gap-5 px-5 md:grid-cols-2 lg:px-8">
          {[
            {
              icon: IconTarget,
              title: 'Our mission',
              text: 'To make practical ecommerce education accessible to every student and company, equipping people with real, income-generating skills through eBay, dropshipping and online store management.',
            },
            {
              icon: IconGlobe,
              title: 'Our vision',
              text: 'To become the most trusted ecommerce training name for students and businesses, known for honest teaching, measurable results and lasting support.',
            },
          ].map((b, i) => (
            <Reveal key={b.title} delay={i * 80} className="h-full">
              <AccentCard accent={accentAt(i)}>
                <IconTile accent={accentAt(i)} icon={b.icon} />
                <h2 className="relative mt-5 font-heading text-2xl font-bold text-navy-900">{b.title}</h2>
                <p className="relative mt-3 text-[15px] leading-relaxed text-slate-600">{b.text}</p>
              </AccentCard>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ─── Values ───────────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading center eyebrow="Our values" icon={IconShield} title="What guides" highlight="everything we do." />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70} className="h-full">
                <AccentCard accent={accentAt(i + 2)}>
                  <IconTile accent={accentAt(i + 2)} icon={v.icon} size="sm" />
                  <h3 className="relative mt-5 font-heading text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="relative mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
                </AccentCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Journey timeline ─────────────────────────────────── */}
      <section className="bg-slate-50/70 py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading center eyebrow="Our journey" icon={IconRocket} title="How we grew into a" highlight="trusted institute." />
          </Reveal>
          <ol className="relative mt-12 space-y-5 before:absolute before:top-2 before:bottom-2 before:left-[1.35rem] before:w-0.5 before:bg-gradient-to-b before:from-brand-300 before:to-emerald-300 sm:before:left-[1.6rem]">
            {milestones.map((m, i) => (
              <Reveal as="li" key={m.year} delay={i * 80} className="relative flex gap-4 sm:gap-6">
                <span
                  className={`relative z-10 grid h-11 w-11 shrink-0 place-items-center rounded-2xl text-white shadow-lg sm:h-13 sm:w-13 ${accentAt(i).tile}`}
                >
                  <IconCheck width={18} height={18} strokeWidth={2.4} />
                </span>
                <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
                  <p className={`font-heading text-sm font-bold ${accentAt(i).text}`}>{m.year}</p>
                  <p className="mt-1 text-[15px] leading-relaxed text-slate-600">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── Why trust us ─────────────────────────────────────── */}
      <section className="bg-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 lg:px-8">
          <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-gold-50 p-7 shadow-xl shadow-brand-600/5 sm:p-10 lg:grid-cols-2">
            <div
              aria-hidden="true"
              className="bg-dot-grid pointer-events-none absolute top-0 right-0 h-56 w-56 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]"
            />
            <div className="relative">
              <SectionHeading eyebrow="Why us" icon={IconAward} title="Why students & companies" highlight="trust us." />
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnGreen}>
                  <IconWhatsApp width={18} height={18} /> Talk to us
                </a>
                <Link to="/courses/" className={btnOutline}>
                  Browse courses <IconArrowRight width={16} height={16} />
                </Link>
              </div>
            </div>
            <ul className="relative grid gap-3">
              {trustPoints.map((t) => (
                <li
                  key={t}
                  className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
                    <IconCheck width={13} height={13} strokeWidth={2.6} />
                  </span>
                  <span className="text-sm font-medium text-slate-700">{t}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  )
}
