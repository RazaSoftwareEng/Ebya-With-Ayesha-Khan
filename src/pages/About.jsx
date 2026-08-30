import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import {
  IconAward,
  IconCheck,
  IconGlobe,
  IconRocket,
  IconShield,
  IconTarget,
  IconUsers,
} from '../components/icons'

const stats = [
  { value: '2,500+', label: 'Students Trained' },
  { value: '5+', label: 'Years of Experience' },
  { value: '95%', label: 'Student Success Rate' },
  { value: '30+', label: 'Corporate Partners' },
]

const values = [
  {
    icon: IconShield,
    title: 'Trust First',
    desc: 'Every course, quote and promise is something we stand behind — no shortcuts, no false claims.',
  },
  {
    icon: IconTarget,
    title: 'Practical Focus',
    desc: 'We teach what actually works in today\'s market, tested through real stores and real sales.',
  },
  {
    icon: IconUsers,
    title: 'Student First',
    desc: 'Your questions, your pace, your goals — our curriculum adapts to you, not the other way around.',
  },
  {
    icon: IconRocket,
    title: 'Growth Mindset',
    desc: 'The ecommerce world evolves fast, and so do we — our content is updated to stay current.',
  },
]

const milestones = [
  { year: 'Year 1', text: 'Started training individual students in eBay selling fundamentals.' },
  { year: 'Year 2–3', text: 'Expanded into dropshipping and product research coaching as demand grew.' },
  { year: 'Year 4', text: 'Launched corporate training programs for companies building ecommerce teams.' },
  { year: 'Today', text: 'Trusted by thousands of students and dozens of companies across multiple countries.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Meet Ebay With Ayesha Khan"
        subtitle="A training academy built on one simple belief: anyone can build a real online business with the right guidance."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Our Story
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              From One Seller's Experience to a Trusted Academy
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Ebay With Ayesha Khan began with a simple goal — helping everyday people understand how
              online selling really works, without the confusion, jargon or unrealistic promises often
              found online.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              What started as one-on-one mentoring for a handful of students has grown into a full
              academy offering structured short courses in eBay selling, dropshipping and ecommerce
              growth — trusted by thousands of individual students and dozens of companies looking to
              train their teams.
            </p>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Today, our mission remains the same: deliver practical, honest, mentor-led education
              that gets real results — one student, one store, one sale at a time.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            {stats.map((s) => (
              <div
                key={s.label}
                className="rounded-2xl bg-navy-900 p-6 text-center text-white shadow-md"
              >
                <p className="font-heading text-2xl font-extrabold text-gold-400">{s.value}</p>
                <p className="mt-1 text-xs font-semibold text-white/70">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                <IconTarget width={22} height={22} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">Our Mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To make practical ecommerce education accessible to every student and company —
                equipping people with real, income-generating skills through eBay, dropshipping and
                online store management.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm ring-1 ring-slate-100">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500/10 text-gold-600">
                <IconGlobe width={22} height={22} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold text-navy-900">Our Vision</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To become the most trusted ecommerce training name for students and businesses,
                known for honest teaching, measurable results and lasting support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Our Values
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              What Guides Everything We Do
            </h2>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <v.icon width={22} height={22} />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy-900">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-navy-900 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Our Journey
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
              How We Grew Into a Trusted Academy
            </h2>
          </div>

          <div className="mt-12 space-y-6">
            {milestones.map((m) => (
              <div key={m.year} className="flex gap-5 rounded-2xl bg-white/5 p-6 backdrop-blur">
                <span className="shrink-0 rounded-full bg-gold-500 px-4 py-1.5 font-heading text-xs font-bold text-navy-900">
                  {m.year}
                </span>
                <p className="text-sm leading-relaxed text-white/80">{m.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <div className="mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-navy-900 text-gold-400">
            <IconAward width={28} height={28} />
          </div>
          <h2 className="mt-5 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Why Students &amp; Companies Trust Us
          </h2>
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {[
              'Transparent course content and pricing — no hidden surprises',
              'Real mentorship, not just pre-recorded video libraries',
              'A track record built on genuine student success stories',
              'Ongoing support that continues after the course ends',
            ].map((i) => (
              <div key={i} className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                <IconCheck width={18} height={18} className="mt-0.5 shrink-0 text-brand-600" />
                <span className="text-sm text-slate-600">{i}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
