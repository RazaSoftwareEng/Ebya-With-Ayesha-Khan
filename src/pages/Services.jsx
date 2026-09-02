import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import {
  IconArrowRight,
  IconAward,
  IconBox,
  IconCheck,
  IconChart,
  IconGlobe,
  IconRocket,
  IconShield,
  IconTarget,
  IconUsers,
} from '../components/icons'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: IconBox,
    title: 'eBay Store Setup',
    desc: 'End-to-end setup of your eBay seller account — profile, policies, shipping and listing structure done right from day one.',
  },
  {
    icon: IconTarget,
    title: 'Product Research & Sourcing',
    desc: 'We help you identify winning, profitable products and connect with vetted, reliable suppliers.',
  },
  {
    icon: IconRocket,
    title: 'Dropshipping Setup & Automation',
    desc: 'Full dropshipping workflow setup — order automation, supplier integration and fulfillment tools configured for you.',
  },
  {
    icon: IconUsers,
    title: '1-on-1 Mentorship',
    desc: 'Personalized coaching sessions with Ayesha Khan to work through your specific store, niche and challenges.',
  },
  {
    icon: IconChart,
    title: 'Store Growth & Ads Management',
    desc: 'Data-driven strategies and paid advertising guidance to scale your existing store\'s revenue.',
  },
  {
    icon: IconUsers,
    title: 'Corporate Training Workshops',
    desc: 'Customized ecommerce training programs delivered on-site or online for companies upskilling their teams.',
  },
  {
    icon: IconShield,
    title: 'Account Health & Policy Guidance',
    desc: 'Guidance to keep your seller account in good standing and avoid common suspension triggers.',
  },
  {
    icon: IconGlobe,
    title: 'Multi-Channel Expansion',
    desc: 'Support to expand your existing store across multiple marketplaces without inventory chaos.',
  },
]

const process = [
  { title: 'Free Consultation', desc: 'Tell us about your goals, budget and experience level.' },
  { title: 'Custom Plan', desc: 'We map out the right service or course package for your needs.' },
  { title: 'Hands-On Execution', desc: 'We work alongside you — setup, training or ongoing coaching.' },
  { title: 'Continued Support', desc: 'Stay connected with our team as your store grows.' },
]

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="More Than Courses — Full Ecommerce Support"
        subtitle="From store setup to ongoing growth coaching, we support students and companies at every stage of their ecommerce journey."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <s.icon width={22} height={22} />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              How We Work
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              A Simple, Guided Process
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((s, i) => (
              <div key={s.title} className="text-center">
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-navy-900 font-heading text-lg font-extrabold text-gold-400">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <div className="grid gap-10 rounded-3xl bg-navy-900 p-10 text-white sm:grid-cols-2 lg:p-14">
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500 text-navy-900">
                <IconAward width={22} height={22} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">For Individual Students</h3>
              <p className="mt-2 text-sm text-white/75">
                Get personal mentorship, practical training and continued support as you build your
                own eBay or dropshipping business from scratch.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {['Flexible course schedules', 'Beginner to advanced tracks', 'Direct mentor access'].map(
                  (i) => (
                    <li key={i} className="flex items-center gap-2">
                      <IconCheck width={16} height={16} className="text-gold-400" /> {i}
                    </li>
                  ),
                )}
              </ul>
            </div>
            <div>
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gold-500 text-navy-900">
                <IconUsers width={22} height={22} />
              </div>
              <h3 className="mt-4 font-heading text-xl font-bold">For Companies</h3>
              <p className="mt-2 text-sm text-white/75">
                Equip your team with in-demand ecommerce skills through a customized corporate
                training program built around your business.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-white/80">
                {['Tailored curriculum', 'On-site or online delivery', 'Progress tracking & reporting'].map(
                  (i) => (
                    <li key={i} className="flex items-center gap-2">
                      <IconCheck width={16} height={16} className="text-gold-400" /> {i}
                    </li>
                  ),
                )}
              </ul>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              Discuss Your Requirements <IconArrowRight />
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
