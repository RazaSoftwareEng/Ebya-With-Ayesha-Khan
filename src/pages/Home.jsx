import { useState } from 'react'
import { Link } from 'react-router-dom'
import CTASection from '../components/CTASection'
import {
  IconArrowRight,
  IconAward,
  IconBox,
  IconChart,
  IconCheck,
  IconChevronDown,
  IconGlobe,
  IconPlay,
  IconRocket,
  IconShield,
  IconStar,
  IconTarget,
  IconUsers,
  IconWhatsApp,
} from '../components/icons'
import { whatsappLink } from '../siteConfig'

const stats = [
  { value: '2,500+', label: 'Students Trained' },
  { value: '95%', label: 'Success Rate' },
  { value: '5+ Years', label: 'Industry Experience' },
  { value: '10+', label: 'Countries Reached' },
]

const features = [
  {
    icon: IconAward,
    title: 'Proven Track Record',
    desc: 'Years of hands-on eBay & dropshipping experience turned into a step-by-step curriculum.',
  },
  {
    icon: IconUsers,
    title: 'Mentor-Led Learning',
    desc: 'Direct guidance from Ayesha Khan and her team — not just pre-recorded videos.',
  },
  {
    icon: IconShield,
    title: 'Trusted by Companies',
    desc: 'Businesses partner with us to train their teams in modern ecommerce operations.',
  },
  {
    icon: IconTarget,
    title: 'Practical, Not Theoretical',
    desc: 'Real store setups, real product research, real case studies from day one.',
  },
  {
    icon: IconChart,
    title: 'Result-Oriented',
    desc: 'Every module is built around one goal: helping you make your first sale, faster.',
  },
  {
    icon: IconGlobe,
    title: 'Ongoing Support',
    desc: 'Get answers to your questions even after the course ends — you are never alone.',
  },
]

const courses = [
  {
    title: 'eBay Selling Fundamentals',
    level: 'Beginner',
    duration: '2 Weeks',
    icon: IconBox,
    points: ['Account setup & verification', 'Listing optimization', 'Order & customer management'],
  },
  {
    title: 'Dropshipping Mastery',
    level: 'Intermediate',
    duration: '3 Weeks',
    icon: IconRocket,
    points: ['Winning product research', 'Supplier sourcing', 'Automation tools & workflows'],
  },
  {
    title: 'Ecommerce Store Growth',
    level: 'Advanced',
    duration: '4 Weeks',
    icon: IconChart,
    points: ['Paid ads & marketing', 'Scaling operations', 'Analytics & profit tracking'],
  },
]

const steps = [
  { title: 'Contact Us', desc: 'Reach out via call, WhatsApp or the contact form to discuss your goals.' },
  { title: 'Pick Your Course', desc: 'We recommend the right short course based on your experience level.' },
  { title: 'Learn by Doing', desc: 'Follow guided, practical lessons with real eBay & dropshipping tasks.' },
  { title: 'Launch & Earn', desc: 'Go live with your store and get ongoing support as you grow.' },
]

const testimonials = [
  {
    name: 'Hassan Raza',
    role: 'Student, eBay Fundamentals',
    quote:
      'I had zero experience with online selling. Within a month of the course I made my first sale on eBay. The mentorship made all the difference.',
  },
  {
    name: 'Sana Malik',
    role: 'Student, Dropshipping Mastery',
    quote:
      'Ayesha Khan explains everything so clearly. The product research framework alone was worth the entire course fee.',
  },
  {
    name: 'Bilal Ahmed',
    role: 'Operations Lead, Retail Company',
    quote:
      'We enrolled our whole team for a corporate training session. Professional, practical and exactly what our staff needed.',
  },
]

const faqs = [
  {
    q: 'Do I need prior experience to join a course?',
    a: 'No. Our eBay Selling Fundamentals course is designed for complete beginners. We also offer intermediate and advanced tracks for those ready to scale.',
  },
  {
    q: 'Are the courses online or in-person?',
    a: 'We offer both live online sessions and in-person batches depending on the course and your location. Contact us to check current availability.',
  },
  {
    q: 'Do companies get a separate training package?',
    a: 'Yes, we design customized corporate training and team workshops. Reach out to discuss your company\'s specific needs.',
  },
  {
    q: 'What support do I get after the course ends?',
    a: 'All students get access to a support channel where you can ask questions even after completing the course.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-heading text-sm font-bold text-navy-900 sm:text-base">{faq.q}</span>
        <IconChevronDown
          className={`shrink-0 text-brand-600 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.a}</p>}
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <section className="relative overflow-hidden bg-navy-900 text-white">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-600/30 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 -left-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
              <IconStar /> Pakistan's Trusted Ecommerce Academy
            </span>
            <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              Learn eBay, Dropshipping &amp; Build a Real Online Business
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/75 sm:text-lg">
              Ebay With Ayesha Khan offers practical, mentor-led short courses that take you from
              complete beginner to confident online seller — trusted by students and companies alike.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-900 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400"
              >
                Contact Us Now <IconArrowRight />
              </Link>
              <Link
                to="/courses"
                className="flex items-center gap-2 rounded-full border-2 border-white/25 px-7 py-3.5 text-sm font-bold transition hover:bg-white/10"
              >
                <IconPlay width={18} height={18} /> Explore Courses
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-xl font-extrabold text-gold-400 sm:text-2xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs text-white/65 sm:text-sm">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-fade-up">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <p className="font-heading text-sm font-bold text-white">Why Students Trust Us</p>
                <IconShield className="text-gold-400" />
              </div>
              <ul className="mt-4 space-y-4">
                {[
                  'Beginner-friendly, step-by-step lessons',
                  'Live mentorship from Ayesha Khan\'s team',
                  'Real store & product case studies',
                  'Dedicated support after the course',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/85">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gold-500/20 text-gold-400">
                      <IconCheck width={14} height={14} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3 text-sm font-bold text-white transition hover:opacity-90"
              >
                <IconWhatsApp width={18} height={18} /> Chat with Us Instantly
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              Why Choose Us
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Built for Real Results, Not Just Certificates
            </h2>
            <p className="mt-3 text-slate-600">
              Everything we teach is tested in the real world first — so you learn what actually
              works in today's ecommerce market.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-slate-100 bg-slate-50/60 p-6 transition hover:-translate-y-1 hover:border-brand-100 hover:shadow-lg"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <f.icon width={22} height={22} />
                </div>
                <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                Popular Courses
              </span>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                Short Courses That Fit Your Schedule
              </h2>
            </div>
            <Link
              to="/courses"
              className="flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700"
            >
              View All Courses <IconArrowRight width={18} height={18} />
            </Link>
          </div>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {courses.map((c) => (
              <div key={c.title} className="flex flex-col rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                <div className="flex items-center justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <c.icon width={22} height={22} />
                  </div>
                  <span className="rounded-full bg-gold-500/10 px-3 py-1 text-xs font-bold text-gold-600">
                    {c.level}
                  </span>
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">{c.title}</h3>
                <p className="mt-1 text-xs font-semibold text-slate-400">Duration: {c.duration}</p>
                <ul className="mt-4 flex-1 space-y-2.5">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                      <IconCheck width={16} height={16} className="mt-0.5 shrink-0 text-brand-600" />
                      {p}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="mt-6 flex items-center justify-center gap-2 rounded-full bg-navy-900 py-2.5 text-sm font-bold text-white transition hover:bg-navy-800"
                >
                  Contact to Enroll <IconArrowRight width={16} height={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              How It Works
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              From First Message to Your First Sale
            </h2>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="relative text-center">
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

      <section className="bg-navy-900 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Success Stories
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
              What Our Students &amp; Partners Say
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="rounded-2xl bg-white/5 p-6 backdrop-blur">
                <div className="flex gap-1 text-gold-400">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStar key={i} />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/80">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-gold-500 font-heading text-sm font-bold text-navy-900">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-white/60">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-5 lg:px-8">
          <div className="text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">FAQs</span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              Frequently Asked Questions
            </h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
