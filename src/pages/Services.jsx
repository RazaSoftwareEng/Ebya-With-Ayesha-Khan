import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Seo from '../components/Seo'
import {
  IconArrowRight,
  IconAdTarget,
  IconAward,
  IconBox,
  IconCheck,
  IconChart,
  IconCode,
  IconGlobe,
  IconMegaphone,
  IconMonitor,
  IconRocket,
  IconShield,
  IconShoppingBag,
  IconTarget,
  IconTiktok,
  IconUsers,
  IconWhatsApp,
} from '../components/icons'
import { Link } from 'react-router-dom'
import { whatsappLink } from '../siteConfig'

const services = [
  {
    icon: IconBox,
    title: 'eBay Store Setup & Management',
    desc: 'End-to-end setup and ongoing management of your eBay seller account — profile, policies, shipping and listing structure done right.',
    thumb: 'from-slate-800 to-slate-950',
  },
  {
    icon: IconTiktok,
    title: 'TikTok Shop Setup & Management',
    desc: 'Full TikTok Shop setup and management — product listings, content strategy and order fulfillment handled for you.',
    thumb: 'from-rose-600 to-fuchsia-700',
  },
  {
    icon: IconTarget,
    title: 'Product Research & Sourcing',
    desc: 'We help you identify winning, profitable products and connect with vetted, reliable suppliers.',
    thumb: 'from-brand-600 to-navy-800',
  },
  {
    icon: IconRocket,
    title: 'Dropshipping Setup & Automation',
    desc: 'Full dropshipping workflow setup — order automation, supplier integration and fulfillment tools configured for you.',
    thumb: 'from-emerald-600 to-teal-700',
  },
  {
    icon: IconChart,
    title: 'Store Growth & Ads Management',
    desc: 'Data-driven strategies and paid advertising guidance to scale your existing store\'s revenue.',
    thumb: 'from-amber-500 to-orange-600',
  },
  {
    icon: IconShield,
    title: 'Account Health & Policy Guidance',
    desc: 'Guidance to keep your seller account in good standing and avoid common suspension triggers.',
    thumb: 'from-teal-600 to-emerald-800',
  },
  {
    icon: IconMonitor,
    title: 'Business Website Development',
    desc: 'Professional, mobile-friendly business websites built to represent your brand and convert visitors into customers.',
    thumb: 'from-navy-800 to-brand-800',
  },
  {
    icon: IconShoppingBag,
    title: 'Shopify Store Setup',
    desc: 'Complete Shopify store build — theme setup, product catalog, payment integration and everything needed to start selling.',
    thumb: 'from-emerald-700 to-green-900',
  },
  {
    icon: IconGlobe,
    title: 'Ecommerce Solutions',
    desc: 'End-to-end ecommerce setup across platforms — store architecture, payment gateways and order management systems.',
    thumb: 'from-cyan-600 to-sky-800',
  },
  {
    icon: IconMegaphone,
    title: 'Digital Marketing',
    desc: 'Data-driven social media, content and marketing strategy to grow your brand\'s visibility and drive consistent traffic.',
    thumb: 'from-sky-600 to-blue-800',
  },
  {
    icon: IconAdTarget,
    title: 'Google & Meta Ads',
    desc: 'Expertly managed Google Search, Shopping and Meta ad campaigns built to lower your cost per sale and scale profitably.',
    thumb: 'from-blue-600 to-navy-900',
  },
  {
    icon: IconCode,
    title: 'Custom Software & CRM',
    desc: 'Tailored software and CRM systems to manage your customers, orders and operations exactly the way your business works.',
    thumb: 'from-slate-700 to-navy-900',
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
      <Seo
        title="eBay Consultancy & Shopify Marketing in Lahore"
        description="eBay consultancy and store management, Shopify marketing, TikTok Shop, business websites and Google & Meta ads for sellers in Lahore, Pakistan."
        path="/services"
      />

      <PageHero
        eyebrow="Our Services"
        title="More Than Courses — Full Ecommerce Support"
        subtitle="From store setup to ongoing growth coaching, we support students and companies at every stage of their ecommerce journey."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <div
                key={s.title}
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
                  <a
                    href={whatsappLink(`Hi! I'm interested in your ${s.title} service.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand-600 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-700 hover:shadow-lg"
                  >
                    <IconWhatsApp width={16} height={16} /> Contact Now
                  </a>
                </div>
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
              to="/contact/"
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
