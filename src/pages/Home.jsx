import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import banner1 from '../components/assets/1.png'
import ayeshaAvatar from '../components/assets/ayesha-avatar.png'
import {
  IconArrowLeft,
  IconArrowRight,
  IconAward,
  IconChart,
  IconCheck,
  IconClock,
  IconGlobe,
  IconLocation,
  IconPlay,
  IconPlus,
  IconRocket,
  IconShield,
  IconStar,
  IconTarget,
  IconUsers,
  IconWhatsApp,
} from '../components/icons'
import { site, whatsappLink } from '../siteConfig'
import { courses } from '../data/courses'

const heroChecklist = [
  'Beginner Friendly',
  'Practical Training',
  'Mentor-Led Guidance',
  'Ongoing Support',
]

const stats = [
  { icon: IconUsers, value: '2,500+', label: 'Students Trained' },
  { icon: IconAward, value: '95%', label: 'Success Rate' },
  { icon: IconChart, value: '5+ Years', label: 'Experience' },
  { icon: IconGlobe, value: '10+', label: 'Countries' },
]

const marketingBadges = [
  { icon: IconAward, title: 'Expert Courses', sub: 'Beginner to Advanced' },
  { icon: IconTarget, title: 'Proven Strategies', sub: 'That Deliver Results' },
  { icon: IconUsers, title: 'Premium Support', sub: 'Whenever You Need' },
  { icon: IconRocket, title: 'Scalable Business', sub: 'Grow Without Limits' },
]

const trustStrip = [
  { icon: IconShield, label: 'Risk-Free Learning' },
  { icon: IconCheck, label: 'Lifetime Access' },
  { icon: IconUsers, label: '1-on-1 Mentorship' },
  { icon: IconAward, label: 'Money-Back Guarantee' },
]

const platforms = [
  { name: 'eBay', color: '#0064D2' },
  { name: 'Shopify', color: '#5E8E3E' },
  { name: 'TikTok Shop', color: '#EE1D52' },
  { name: 'Etsy', color: '#F1641E' },
  { name: 'Facebook Ads', color: '#1877F2' },
  { name: 'Google', color: '#4285F4' },
]

const features = [
  {
    icon: IconAward,
    title: 'Proven Track Record',
    desc: 'Years of hands-on eBay & dropshipping experience turned into a step-by-step curriculum.',
    tint: 'bg-brand-50 text-brand-600',
    bar: 'from-brand-500 to-brand-300',
    hover: 'hover:border-brand-200 hover:shadow-brand-100/70',
  },
  {
    icon: IconUsers,
    title: 'Mentor-Led Learning',
    desc: 'Direct guidance from Ayesha Khan and her team — not just pre-recorded videos.',
    tint: 'bg-emerald-50 text-emerald-600',
    bar: 'from-emerald-500 to-emerald-300',
    hover: 'hover:border-emerald-200 hover:shadow-emerald-100/70',
  },
  {
    icon: IconShield,
    title: 'Trusted by Companies',
    desc: 'Businesses partner with us to train their teams in modern ecommerce operations.',
    tint: 'bg-sky-50 text-sky-600',
    bar: 'from-sky-500 to-sky-300',
    hover: 'hover:border-sky-200 hover:shadow-sky-100/70',
  },
  {
    icon: IconTarget,
    title: 'Practical, Not Theoretical',
    desc: 'Real store setups, real product research, real case studies from day one.',
    tint: 'bg-amber-50 text-amber-600',
    bar: 'from-amber-500 to-amber-300',
    hover: 'hover:border-amber-200 hover:shadow-amber-100/70',
  },
  {
    icon: IconChart,
    title: 'Result-Oriented',
    desc: 'Every module is built around one goal: helping you make your first sale, faster.',
    tint: 'bg-teal-50 text-teal-600',
    bar: 'from-teal-500 to-teal-300',
    hover: 'hover:border-teal-200 hover:shadow-teal-100/70',
  },
  {
    icon: IconGlobe,
    title: 'Ongoing Support',
    desc: 'Get answers to your questions even after the course ends — you are never alone.',
    tint: 'bg-cyan-50 text-cyan-600',
    bar: 'from-cyan-500 to-cyan-300',
    hover: 'hover:border-cyan-200 hover:shadow-cyan-100/70',
  },
]

const popularCourses = courses.slice(0, 3)

const steps = [
  { title: 'Contact Us', desc: 'Reach out via call, WhatsApp or the contact form to discuss your goals.', tint: 'bg-brand-600' },
  { title: 'Pick Your Course', desc: 'We recommend the right short course based on your experience level.', tint: 'bg-sky-500' },
  { title: 'Learn by Doing', desc: 'Follow guided, practical lessons with real eBay & dropshipping tasks.', tint: 'bg-amber-500' },
  { title: 'Launch & Earn', desc: 'Go live with your store and get ongoing support as you grow.', tint: 'bg-emerald-600' },
]

const testimonials = [
  {
    name: 'Hassan Raza',
    role: 'Student, eBay Selling Mastery',
    quote:
      'I had zero experience with online selling. Within a month of the course I made my first sale on eBay. The mentorship made all the difference.',
  },
  {
    name: 'Sana Malik',
    role: 'Student, Shopify Store Mastery',
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
    a: 'No. Our eBay Selling Mastery course is designed for complete beginners. We also offer courses across Shopify, TikTok Shop, Etsy, AI and digital marketing for every skill level.',
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
    <div
      className={`rounded-2xl border bg-white transition-colors duration-300 ${
        isOpen ? 'border-brand-200 shadow-sm' : 'border-slate-200'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
      >
        <span className="font-heading text-sm font-bold text-navy-900 sm:text-base">{faq.q}</span>
        <span
          className={`grid h-7 w-7 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-brand-600 text-white' : 'bg-brand-50 text-brand-600'
          }`}
        >
          <IconPlus width={14} height={14} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p className="overflow-hidden px-5 pb-5 text-sm leading-relaxed text-slate-600">{faq.a}</p>
      </div>
    </div>
  )
}

function BrandSlide() {
  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-gradient-to-br from-brand-50 via-white to-gold-50">
      <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-brand-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-gold-200/40 blur-3xl" />
      <div className="relative mx-auto grid w-full max-w-7xl gap-12 py-10 pr-5 pl-16 sm:pl-20 lg:grid-cols-2 lg:items-center lg:pr-8 lg:pl-24 lg:py-14">
      <div className="animate-fade-up">
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-700">
          <IconStar /> Pakistan's Trusted Ecommerce Institute
        </span>
        <h1 className="mt-5 font-heading text-3xl font-extrabold leading-tight text-navy-900 sm:text-4xl lg:text-5xl">
          Learn. Sell. Succeed.
          <span className="block text-brand-600">Build a Real Online Business.</span>
        </h1>
        <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
          Practical, mentor-led courses to help you launch and grow eBay &amp; Amazon businesses
          with confidence.
        </p>

        <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-3 sm:w-fit sm:grid-cols-2">
          {heroChecklist.map((item, i) => (
            <div key={item} className="flex items-center gap-2 text-sm font-semibold text-slate-700">
              <span
                className={`grid h-5 w-5 shrink-0 place-items-center rounded-full text-white ${
                  i % 2 === 0 ? 'bg-emerald-500' : 'bg-brand-600'
                }`}
              >
                <IconCheck width={12} height={12} />
              </span>
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            to="/courses"
            className="flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl"
          >
            Explore Courses <IconArrowRight />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-slate-200 px-7 py-3.5 text-sm font-bold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50"
          >
            <IconWhatsApp width={18} height={18} /> Chat on WhatsApp
          </a>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <div className="flex -space-x-3">
            {['HR', 'SM', 'BA', 'FZ'].map((initials, i) => (
              <span
                key={initials}
                className={`grid h-9 w-9 place-items-center rounded-full text-xs font-bold text-white ring-2 ring-white ${
                  ['bg-brand-500', 'bg-emerald-500', 'bg-amber-500', 'bg-sky-500'][i]
                }`}
              >
                {initials}
              </span>
            ))}
          </div>
          <div>
            <div className="flex gap-0.5 text-gold-500">
              {Array.from({ length: 5 }).map((_, i) => (
                <IconStar key={i} width={14} height={14} />
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-500">4.9/5 from 2,500+ students</p>
          </div>
        </div>
      </div>

      <div className="relative animate-fade-up">
        <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-gradient-to-br from-brand-100 via-white to-gold-100 blur-2xl" />

        <div className="relative mx-auto max-w-sm">
          <div className="overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-navy-900 via-navy-800 to-brand-700 p-2 shadow-2xl shadow-navy-900/25">
            <div className="overflow-hidden rounded-[2.1rem] bg-white">
              <div className="flex justify-center bg-gradient-to-b from-brand-50 to-white pt-8">
                <img src={ayeshaAvatar} alt="Ayesha Khan — Founder & Lead Mentor" className="w-56 sm:w-64" />
              </div>
              <div className="px-6 pb-7 pt-4 text-center">
                <p className="font-heading text-xl font-extrabold text-navy-900">Ayesha Khan</p>
                <p className="text-sm font-semibold text-brand-600">Founder &amp; Lead Mentor</p>

                <div className="mt-4 grid grid-cols-3 divide-x divide-slate-100 border-t border-slate-100 pt-4">
                  {stats.slice(0, 3).map((s) => (
                    <div key={s.label} className="px-1 text-center">
                      <p className="font-heading text-base font-extrabold text-navy-900">{s.value}</p>
                      <p className="text-[10px] font-semibold text-slate-500">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

function MarketingSlide() {
  return (
    <div className="relative flex h-full w-full items-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-brand-800 text-white">
      <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-gold-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl py-10 pr-5 pl-16 sm:pl-20 lg:pr-8 lg:pl-24 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
              Learn &bull; Apply &bull; Earn
            </span>
            <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
              Master eBay, Shopify
              <span className="block text-gold-400">&amp; TikTok Shop.</span>
            </h2>
            <p className="mt-4 max-w-lg text-white/75">
              Learn proven strategies and get expert, done-for-you support to build, grow and scale
              a profitable online business.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:max-w-md">
              {marketingBadges.map((b) => (
                <div key={b.title} className="flex items-start gap-2.5">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/10 text-gold-400">
                    <b.icon width={18} height={18} />
                  </span>
                  <div>
                    <p className="text-sm font-bold leading-tight">{b.title}</p>
                    <p className="text-xs text-white/60">{b.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/courses"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-900 shadow-lg shadow-gold-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-gold-400 hover:shadow-xl"
            >
              Start Your Journey Today <IconArrowRight width={16} height={16} />
            </Link>
          </div>

          <div className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10 backdrop-blur">
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl bg-white/5 p-4">
                  <s.icon width={18} height={18} className="text-gold-400" />
                  <p className="mt-2 font-heading text-xl font-extrabold">{s.value}</p>
                  <p className="text-xs text-white/60">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="relative mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 border-t border-white/10 pt-6">
          {trustStrip.map((t) => (
            <span key={t.label} className="flex items-center gap-2 text-xs font-semibold text-white/70">
              <t.icon width={16} height={16} className="text-gold-400" /> {t.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function InstituteSlide() {
  return (
    <div className="relative h-full w-full overflow-hidden">
      <img
        src={banner1}
        alt="Ayesha Khan Official institute in Lahore"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/92 via-navy-950/70 to-navy-950/20" />

      <div className="relative mx-auto flex h-full w-full max-w-7xl items-center py-14 pr-5 pl-16 sm:pl-20 lg:pr-8 lg:pl-24">
        <div className="max-w-lg text-white">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
            <IconLocation width={14} height={14} /> Visit Our Institute
          </span>
          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight sm:text-4xl">
            A Real Place to Learn, Grow &amp; Succeed.
          </h2>
          <p className="mt-4 text-white/80">
            Prefer learning in person? Visit us in Lahore for hands-on, mentor-led sessions — not
            just another online course.
          </p>

          <div className="mt-6 space-y-2.5 text-sm text-white/85">
            <p className="flex items-center gap-2">
              <IconLocation width={16} height={16} className="text-gold-400" /> {site.address}
            </p>
            <p className="flex items-center gap-2">
              <IconClock width={16} height={16} className="text-gold-400" /> {site.hours}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(site.address)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-brand-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-brand-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
            >
              Get Directions <IconArrowRight width={16} height={16} />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              <IconWhatsApp width={18} height={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const heroSlideCount = 3

function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % heroSlideCount), 2000)
    return () => clearInterval(id)
  }, [paused])

  const go = (dir) => setIndex((i) => (i + dir + heroSlideCount) % heroSlideCount)

  const slides = [<BrandSlide key="brand" />, <MarketingSlide key="marketing" />, <InstituteSlide key="institute" />]

  return (
    <div
      className="relative h-auto w-full lg:h-[75vh] lg:max-h-[760px] lg:min-h-[600px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="grid h-full w-full">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`[grid-area:1/1] h-full w-full transition-opacity duration-700 ease-in-out ${
              i === index ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            {slide}
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-2 z-20 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy-900 shadow-lg transition-transform duration-300 hover:scale-110 sm:left-4 sm:grid"
      >
        <IconArrowLeft width={18} height={18} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute top-1/2 right-2 z-20 hidden h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white/90 text-navy-900 shadow-lg transition-transform duration-300 hover:scale-110 sm:right-4 sm:grid"
      >
        <IconArrowRight width={18} height={18} />
      </button>

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 rounded-full bg-navy-950/30 px-3 py-2 backdrop-blur-sm">
        {Array.from({ length: heroSlideCount }).map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-white' : 'w-2 bg-white/50 hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

function TestimonialCarousel() {
  const [index, setIndex] = useState(0)
  const go = (dir) => setIndex((i) => (i + dir + testimonials.length) % testimonials.length)
  const t = testimonials[index]

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="rounded-2xl bg-white/10 p-8 backdrop-blur sm:p-10">
        <div className="flex gap-1 text-gold-400">
          {Array.from({ length: 5 }).map((_, i) => (
            <IconStar key={i} />
          ))}
        </div>
        <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg">&ldquo;{t.quote}&rdquo;</p>
        <div className="mt-6 flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-full bg-brand-500 font-heading text-sm font-bold text-white">
            {t.name.split(' ').map((n) => n[0]).join('')}
          </span>
          <div>
            <p className="text-sm font-bold">{t.name}</p>
            <p className="text-xs text-white/60">{t.role}</p>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => go(-1)}
        className="absolute top-1/2 -left-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-lg transition-transform duration-300 hover:scale-110 sm:-left-5"
      >
        <IconArrowLeft width={18} height={18} />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => go(1)}
        className="absolute top-1/2 -right-3 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-lg transition-transform duration-300 hover:scale-110 sm:-right-5"
      >
        <IconArrowRight width={18} height={16} />
      </button>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((item, i) => (
          <button
            key={item.name}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === index ? 'w-6 bg-gold-400' : 'w-2 bg-white/30 hover:bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Seo
        title="eBay, Dropshipping & Ecommerce Courses"
        description="Learn eBay selling and dropshipping through practical, mentor-led short courses. Trusted by 2,500+ students and companies across Pakistan."
        path="/"
      />

      <section className="relative w-full overflow-hidden">
        <Reveal>
          <HeroCarousel />
        </Reveal>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-8">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400">
            Platforms You'll Learn to Sell On
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {platforms.map((p) => (
              <span
                key={p.name}
                style={{ color: p.color }}
                className="font-heading text-lg font-bold opacity-60 transition-all duration-300 hover:scale-110 hover:opacity-100 hover:[filter:drop-shadow(0_0_10px_currentColor)]"
              >
                {p.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
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
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={i * 80}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${f.hover}`}
              >
                <span
                  className={`absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r transition-transform duration-300 ease-out group-hover:scale-x-100 ${f.bar}`}
                />
                <div className={`grid h-14 w-14 place-items-center rounded-2xl transition-transform duration-300 group-hover:scale-110 ${f.tint}`}>
                  <f.icon width={24} height={24} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
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
              className="flex items-center gap-2 text-sm font-bold text-brand-600 transition-colors duration-300 hover:text-brand-700"
            >
              View All Courses <IconArrowRight width={18} height={18} />
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {popularCourses.map((c, i) => (
              <Reveal
                key={c.title}
                delay={i * 100}
                className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-100"
              >
                <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${c.thumb}`}>
                  {c.tag && (
                    <span className="absolute top-3 left-3 rounded-full bg-gold-500 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-900">
                      {c.tag}
                    </span>
                  )}
                  <span className="grid h-14 w-14 place-items-center rounded-full bg-white/15 text-white transition-transform duration-300 group-hover:scale-110">
                    <IconPlay width={22} height={22} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
                      {c.level}
                    </span>
                    <span className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                      <c.icon width={14} height={14} /> {c.duration}
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-lg font-bold text-navy-900">{c.title}</h3>
                  <ul className="mt-4 flex-1 space-y-2.5">
                    {c.points.map((p) => (
                      <li key={p} className="flex items-start gap-2 text-sm text-slate-600">
                        <IconCheck width={16} height={16} className="mt-0.5 shrink-0 text-emerald-600" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/courses/${c.slug}`}
                    className={`mt-6 flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-bold transition-all duration-300 ${
                      i === 0
                        ? 'bg-brand-600 text-white hover:bg-brand-700 hover:shadow-lg'
                        : 'border-2 border-brand-200 text-brand-700 hover:border-brand-600 hover:bg-brand-50'
                    }`}
                  >
                    View Details <IconArrowRight width={16} height={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
              How It Works
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
              From First Message to Your First Sale
            </h2>
          </Reveal>

          <div className="relative mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="pointer-events-none absolute top-7 right-[12.5%] left-[12.5%] hidden h-0.5 bg-gradient-to-r from-brand-200 via-amber-200 to-emerald-200 lg:block" />
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 100} className="group relative text-center">
                <div className={`relative mx-auto grid h-14 w-14 place-items-center rounded-full font-heading text-lg font-extrabold text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${s.tint}`}>
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy-900">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-brand-700 py-16 text-white lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gold-400">
              Success Stories
            </span>
            <h2 className="mt-3 font-heading text-2xl font-extrabold sm:text-3xl">
              What Our Students &amp; Partners Say
            </h2>
          </Reveal>

          <Reveal delay={100} className="mt-12">
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      <section className="bg-slate-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Reveal>
                <span className="text-xs font-bold uppercase tracking-widest text-brand-600">FAQs</span>
                <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                  Frequently Asked Questions
                </h2>
              </Reveal>
              <div className="mt-8 space-y-4">
                {faqs.map((faq, i) => (
                  <Reveal key={faq.q} delay={i * 60}>
                    <FaqItem
                      faq={faq}
                      isOpen={openFaq === i}
                      onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
                    />
                  </Reveal>
                ))}
              </div>
            </div>

            <Reveal delay={120} className="lg:col-span-2">
              <div className="relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 to-emerald-50 p-8">
                <div className="pointer-events-none absolute -top-6 -right-6 h-32 w-32 rounded-full bg-brand-200/40 blur-2xl" />
                <span className="grid h-14 w-14 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                  <IconRocket width={26} height={26} />
                </span>
                <h3 className="mt-5 font-heading text-xl font-extrabold text-navy-900">
                  Ready to Start Your Ecommerce Journey?
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  Don't wait — seats for our next batch are filling fast. Reach out now and our team
                  will guide you to the right course.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  <Link
                    to="/contact"
                    className="flex items-center justify-center gap-2 rounded-full bg-brand-600 py-3 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-700 hover:shadow-lg"
                  >
                    Contact Us Now <IconArrowRight width={16} height={16} />
                  </Link>
                  <a
                    href={whatsappLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 rounded-full border-2 border-white bg-white/60 py-3 text-sm font-bold text-navy-900 transition-all duration-300 hover:bg-white"
                  >
                    <IconWhatsApp width={18} height={18} /> Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
