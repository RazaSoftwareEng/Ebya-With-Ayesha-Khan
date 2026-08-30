import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import { IconArrowRight, IconBox, IconCheck, IconChart, IconClock, IconRocket, IconStar, IconUsers, IconGlobe, IconTarget } from '../components/icons'

const courses = [
  {
    title: 'eBay Selling Fundamentals',
    level: 'Beginner',
    duration: '2 Weeks',
    mode: 'Online / In-Person',
    icon: IconBox,
    desc: 'The perfect starting point for anyone new to online selling — go from zero to your first live eBay listing.',
    points: [
      'Creating & verifying a seller account',
      'Understanding eBay policies & fees',
      'Writing listings that convert',
      'Pricing, shipping & handling orders',
      'Handling returns & customer messages',
    ],
  },
  {
    title: 'Dropshipping Mastery',
    level: 'Intermediate',
    duration: '3 Weeks',
    mode: 'Online / In-Person',
    icon: IconRocket,
    desc: 'Learn the complete dropshipping model — from finding winning products to fulfilling orders without holding stock.',
    points: [
      'Winning product research methods',
      'Finding & vetting reliable suppliers',
      'Store setup & order automation tools',
      'Handling disputes and refunds',
      'Avoiding common beginner mistakes',
    ],
  },
  {
    title: 'Product Research & Sourcing',
    level: 'Intermediate',
    duration: '2 Weeks',
    mode: 'Online',
    icon: IconTarget,
    desc: 'Master the research process top sellers use to consistently find profitable, low-competition products.',
    points: [
      'Using research tools & data effectively',
      'Spotting trending & seasonal products',
      'Evaluating supplier quality & pricing',
      'Calculating true profit margins',
    ],
  },
  {
    title: 'Ecommerce Store Growth',
    level: 'Advanced',
    duration: '4 Weeks',
    mode: 'Online / In-Person',
    icon: IconChart,
    desc: 'For sellers ready to scale — paid advertising, brand building, and data-driven growth strategies.',
    points: [
      'Running profitable paid ad campaigns',
      'Scaling operations & outsourcing',
      'Tracking KPIs and profit analytics',
      'Building repeat-customer systems',
    ],
  },
  {
    title: 'Multi-Channel Selling',
    level: 'Advanced',
    duration: '3 Weeks',
    mode: 'Online',
    icon: IconGlobe,
    desc: 'Expand beyond a single platform and manage inventory across eBay, Amazon and your own store.',
    points: [
      'Cross-listing across marketplaces',
      'Centralized inventory management',
      'Avoiding overselling & stock issues',
      'Channel-specific optimization tips',
    ],
  },
  {
    title: 'Corporate Team Training',
    level: 'For Companies',
    duration: 'Custom',
    mode: 'On-Site / Online',
    icon: IconUsers,
    desc: 'A tailored ecommerce training program designed for companies onboarding or upskilling their teams.',
    points: [
      'Customized curriculum for your team',
      'Hands-on workshops & live Q&A',
      'Progress tracking & reporting',
      'Flexible scheduling around your business',
    ],
  },
]

export default function Courses() {
  return (
    <>
      <PageHero
        eyebrow="Our Courses"
        title="Short Courses Designed to Get You Selling, Fast"
        subtitle="Whether you're a complete beginner or ready to scale, we have a practical, mentor-led course built for your level."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                    <c.icon width={22} height={22} />
                  </div>
                  <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
                    {c.level}
                  </span>
                </div>

                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.desc}</p>

                <div className="mt-4 flex flex-wrap gap-4 text-xs font-semibold text-slate-500">
                  <span className="flex items-center gap-1.5">
                    <IconClock width={16} height={16} /> {c.duration}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <IconGlobe width={16} height={16} /> {c.mode}
                  </span>
                </div>

                <ul className="mt-5 flex-1 space-y-2.5 border-t border-slate-200 pt-5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                      <IconCheck width={16} height={16} className="mt-0.5 shrink-0 text-brand-600" />
                      {p}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gold-500 py-2.5 text-sm font-bold text-navy-900 transition hover:bg-gold-400"
                >
                  Contact to Enroll <IconArrowRight width={16} height={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-5xl px-5 text-center lg:px-8">
          <div className="flex justify-center gap-1 text-gold-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <IconStar key={i} />
            ))}
          </div>
          <h2 className="mt-4 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
            Not Sure Which Course Is Right for You?
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-600">
            Contact our team for a free, no-obligation consultation. We'll recommend the best
            course based on your goals and experience level.
          </p>
        </div>
      </section>

      <CTASection
        title="Seats Fill Up Quickly — Contact Us Today"
        subtitle="Message us now to confirm your spot in the next batch and get all your questions answered immediately."
      />
    </>
  )
}
