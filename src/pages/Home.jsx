import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { CourseCard, SectionHeading, StepCards } from '../components/ui'
import ayeshaAvatar from '../components/assets/ayesha-avatar.webp'
import {
  IconArrowLeft,
  IconArrowRight,
  IconAward,
  IconChart,
  IconCheck,
  IconChat,
  IconClock,
  IconClose,
  IconGlobe,
  IconLocation,
  IconPlus,
  IconShoppingBag,
  IconSparkles,
  IconStar,
  IconShield,
  IconTag,
  IconTarget,
  IconUsers,
  IconWhatsApp,
} from '../components/icons'
import {
  LogoEtsy,
  LogoFacebook,
  LogoGoogleAds,
  LogoInstagram,
  LogoPayoneer,
  LogoShopify,
  LogoTikTok,
} from '../components/brandLogos'
import { site, whatsappLink } from '../siteConfig'
import { courses } from '../data/courses'

// Soft, per-course accent used for the icon tiles (light surfaces, no heavy gradients).
const courseTint = {
  ebay: 'bg-brand-50 text-brand-600',
  shopify: 'bg-emerald-50 text-emerald-600',
  'tiktok-shop': 'bg-rose-50 text-rose-600',
  etsy: 'bg-orange-50 text-orange-600',
  ai: 'bg-violet-50 text-violet-600',
  'digital-marketing': 'bg-sky-50 text-sky-600',
}

const fee = courses[0].fee

const facts = [
  { icon: IconTag, label: 'Course fee', value: `${fee} each` },
  { icon: IconClock, label: 'Duration', value: '3 months' },
  { icon: IconGlobe, label: 'Classes', value: 'Online & in-person' },
  { icon: IconLocation, label: 'Campus', value: site.address },
]

// Marketplaces, ad platforms and tools covered across the courses (moving strip).
// `mark` renders the brand's logo / colour scheme; `hover` tints the pill border.
const platforms = [
  { name: 'eBay', mark: 'ebay', hover: 'hover:border-[#0064D2]/40' },
  { name: 'Amazon', mark: 'amazon', hover: 'hover:border-[#FF9900]/50' },
  { name: 'Shopify', Logo: LogoShopify, color: 'text-[#5E8E3E]', hover: 'hover:border-[#95BF47]/60' },
  { name: 'TikTok Shop', Logo: LogoTikTok, color: 'text-black tiktok-glitch', hover: 'hover:border-[#FE2C55]/40' },
  { name: 'Etsy', Logo: LogoEtsy, color: 'text-[#F16521]', hover: 'hover:border-[#F16521]/40' },
  { name: 'AliExpress', mark: 'aliexpress', hover: 'hover:border-[#FF4747]/40' },
  { name: 'Facebook Ads', Logo: LogoFacebook, color: 'text-[#0866FF]', hover: 'hover:border-[#0866FF]/40' },
  { name: 'Instagram', Logo: LogoInstagram, color: 'instagram-gradient', hover: 'hover:border-[#FF0069]/40' },
  { name: 'Google Ads', Logo: LogoGoogleAds, color: 'text-[#4285F4]', hover: 'hover:border-[#4285F4]/40' },
  { name: 'TikTok Ads', Logo: LogoTikTok, color: 'text-black tiktok-glitch', hover: 'hover:border-[#25F4EE]/60' },
  { name: 'ChatGPT', mark: 'chatgpt', hover: 'hover:border-[#10A37F]/40' },
  { name: 'Canva', mark: 'canva', hover: 'hover:border-[#7D2AE8]/40' },
  { name: 'Payoneer', Logo: LogoPayoneer, color: 'text-[#FF4800]', hover: 'hover:border-[#FF4800]/40' },
]

function PlatformMark({ p }) {
  if (p.Logo) return <p.Logo width={20} height={20} className={`shrink-0 ${p.color}`} />
  if (p.mark === 'amazon')
    return (
      <span aria-hidden="true" className="relative grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#232F3E] font-heading text-sm leading-none font-bold text-white">
        a
        <span className="absolute bottom-[3px] left-1 h-[2px] w-3.5 rounded-full bg-[#FF9900]" />
      </span>
    )
  // Simple Icons' AliExpress mark is a tiny wordmark — unreadable at this size.
  if (p.mark === 'aliexpress')
    return (
      <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-gradient-to-br from-[#FF4747] to-[#FF7A00] font-heading text-xs font-bold text-white">
        A
      </span>
    )
  if (p.mark === 'chatgpt')
    return (
      <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center rounded-md bg-[#10A37F] text-white">
        <IconSparkles width={14} height={14} />
      </span>
    )
  if (p.mark === 'canva')
    return (
      <span aria-hidden="true" className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-gradient-to-br from-[#00C4CC] to-[#7D2AE8] font-heading text-xs font-bold text-white italic">
        C
      </span>
    )
  return null
}

function PlatformName({ p }) {
  // eBay's wordmark colours are its recognisable scheme — render the name in them.
  if (p.mark === 'ebay')
    return (
      <span className="font-heading text-lg font-bold tracking-tight">
        <span className="text-[#E53238]">e</span>
        <span className="text-[#0064D2]">B</span>
        <span className="text-[#F5AF02]">a</span>
        <span className="text-[#86B817]">y</span>
      </span>
    )
  return p.name
}

const features = [
  {
    icon: IconTarget,
    title: 'Practical, not theoretical',
    desc: 'Real store setups, real product research and real listings from the first week.',
  },
  {
    icon: IconUsers,
    title: 'Mentor-led learning',
    desc: 'Direct guidance from Ayesha Khan and her team, not just pre-recorded videos.',
  },
  {
    icon: IconCheck,
    title: 'Assignments every module',
    desc: 'You practise each skill on your own account and get feedback before moving on.',
  },
  {
    icon: IconChart,
    title: 'Built around your first sale',
    desc: 'Every module points at one goal: getting you from zero to selling, step by step.',
  },
  {
    icon: IconShield,
    title: 'Account-safe methods',
    desc: 'We teach platform policies early, so you build a business that lasts.',
  },
  {
    icon: IconAward,
    title: 'Support after the course',
    desc: 'Keep asking questions after your batch ends. You are never on your own.',
  },
]

const steps = [
  { title: 'Talk to us', desc: 'Call, WhatsApp or use the contact form to tell us your goals.' },
  { title: 'Pick a course', desc: 'We recommend the course that fits your experience and time.' },
  { title: 'Learn by doing', desc: 'Weekly classes with hands-on tasks on real platforms.' },
  { title: 'Launch & grow', desc: 'Go live with your store and keep getting support as you grow.' },
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
    q: 'How much is the course fee?',
    a: `Every course is ${fee} for the complete 3-month course. Message us on WhatsApp for payment details and the next batch dates.`,
  },
  {
    q: 'Are the courses online or in-person?',
    a: `Both. In-person batches run at our campus in ${site.address}, and live online batches are available for students anywhere in Pakistan.`,
  },
  {
    q: 'Do companies get a separate training package?',
    a: "Yes, we design customized corporate training and team workshops. Reach out to discuss your company's specific needs.",
  },
  {
    q: 'What support do I get after the course ends?',
    a: 'All students get access to a support channel where you can ask questions even after completing the course.',
  },
]

function FaqItem({ faq, isOpen, onToggle }) {
  return (
    <div
      className={`rounded-2xl border bg-white transition-all duration-300 ${
        isOpen ? 'border-brand-200 shadow-lg shadow-brand-600/10' : 'border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-heading text-base font-semibold text-navy-900">{faq.q}</span>
        <span
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-brand-600 text-white shadow-md shadow-brand-600/30' : 'bg-brand-50 text-brand-600'
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
        <p className="overflow-hidden px-6 pb-5 text-sm leading-relaxed text-slate-600">{faq.a}</p>
      </div>
    </div>
  )
}

function HeroGraphic() {
  const shown = courses
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      <div className="pointer-events-none absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-brand-100/70 via-white to-gold-100/70" />

      <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-6">
        <div className="flex items-center gap-3">
          <img
            src={ayeshaAvatar}
            alt="Ayesha Khan"
            width={48}
            height={48}
            fetchPriority="high"
            className="h-12 w-12 rounded-full object-cover ring-4 ring-brand-50"
          />
          <div>
            <p className="font-heading text-sm font-semibold text-navy-900">Ayesha Khan</p>
            <p className="text-xs text-slate-500">Founder &amp; Lead Mentor</p>
          </div>
          <span className="ml-auto rounded-full bg-gold-50 px-3 py-1 text-[11px] font-semibold text-gold-600">
            Admissions open
          </span>
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">Our courses</p>
        <ul className="mt-3 space-y-2">
          {shown.map((c) => (
            <li key={c.slug}>
              <Link
                to={`/courses/${c.slug}/`}
                className="group flex items-center gap-3 rounded-2xl border border-slate-100 p-3 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50/50"
              >
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${courseTint[c.slug]}`}>
                  <c.icon width={18} height={18} />
                </span>
                <span className="min-w-0">
                  <span className="block truncate text-sm font-semibold text-navy-900">{c.title}</span>
                  <span className="block text-xs text-slate-500">{c.duration} · {c.fee}</span>
                </span>
                <IconArrowRight
                  width={16}
                  height={16}
                  className="ml-auto shrink-0 text-slate-300 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:text-brand-600"
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="absolute -bottom-5 -left-4 hidden items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg shadow-slate-900/5 sm:flex">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-gold-50 text-gold-600">
          <IconCheck width={16} height={16} />
        </span>
        <span className="text-xs font-semibold text-navy-900">Hands-on from week one</span>
      </div>
    </div>
  )
}

// Decorative layered wave for the bottom-right of the hero (navy → blue → green).
function HeroWave() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 320"
      preserveAspectRatio="none"
      className="pointer-events-none absolute right-0 bottom-0 h-20 w-full sm:h-28 lg:h-32"
    >
      <defs>
        <linearGradient id="hw-green" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#34d399" stopOpacity="0" />
          <stop offset="0.55" stopColor="#34d399" stopOpacity="0.55" />
          <stop offset="1" stopColor="#10b981" stopOpacity="0.9" />
        </linearGradient>
        <linearGradient id="hw-blue" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#2563eb" stopOpacity="0" />
          <stop offset="0.6" stopColor="#2563eb" stopOpacity="0.75" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
        <linearGradient id="hw-navy" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#0f2138" stopOpacity="0" />
          <stop offset="0.5" stopColor="#0f2138" stopOpacity="0.85" />
          <stop offset="1" stopColor="#0a1628" />
        </linearGradient>
      </defs>
      <path d="M0 300 C 420 300 760 250 1040 150 C 1220 85 1340 40 1440 20 L1440 320 L0 320 Z" fill="url(#hw-green)" />
      <path d="M300 320 C 640 300 920 250 1140 170 C 1280 120 1370 90 1440 80 L1440 320 Z" fill="url(#hw-blue)" />
      <path d="M620 320 C 900 310 1120 270 1290 210 C 1360 185 1410 170 1440 165 L1440 320 Z" fill="url(#hw-navy)" />
    </svg>
  )
}

function CoursesSlide() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-600">
          <span className="h-2 w-2 rounded-full bg-gold-500" />
          eBay &amp; ecommerce institute · Lahore &amp; online
        </span>

        <h1 className="mt-5 font-heading text-4xl leading-[1.1] font-bold tracking-tight text-navy-900 lg:text-5xl">
          Learn to sell online.
          <br />
          Build a{' '}
          <span className="bg-gradient-to-r from-brand-600 to-gold-600 bg-clip-text text-transparent">real income.</span>
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          Practical, mentor-led courses in eBay, Shopify, TikTok Shop, Etsy, AI and digital marketing, taught by
          Ayesha Khan in {site.address} and online.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/courses/"
            className="inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
          >
            Explore courses <IconArrowRight width={16} height={16} />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900"
          >
            <IconWhatsApp width={18} height={18} className="text-[#25D366]" /> Ask on WhatsApp
          </a>
        </div>

        <ul className="mt-6 flex flex-wrap gap-2">
          {['Beginner friendly', 'Hands-on assignments', 'Support after the course'].map((t) => (
            <CheckChip key={t}>{t}</CheckChip>
          ))}
        </ul>
      </div>

      <HeroGraphic />
    </div>
  )
}

function CheckChip({ children }) {
  return (
    <li className="flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-[13px] font-medium text-navy-900 shadow-sm ring-1 ring-slate-100">
      <span className="grid h-5 w-5 place-items-center rounded-full bg-emerald-500 text-white">
        <IconCheck width={12} height={12} strokeWidth={2.6} />
      </span>
      {children}
    </li>
  )
}

const consultancyCards = [
  {
    title: 'eBay Consultancy',
    icon: IconTag,
    tile: 'bg-brand-600 shadow-brand-600/30',
    border: 'border-t-brand-600',
    glow: 'bg-brand-100',
    shadow: 'shadow-brand-600/15',
    items: ['eBay store setup & development', 'Winning product research', 'Account & listing management', 'One-on-one mentorship'],
  },
  {
    title: 'Shopify Marketing',
    icon: IconShoppingBag,
    tile: 'bg-emerald-500 shadow-emerald-500/30',
    border: 'border-t-emerald-500',
    glow: 'bg-emerald-100',
    shadow: 'shadow-emerald-600/15',
    items: ['Shopify store design & SEO', 'Facebook, Instagram & Google ads', 'Branding & marketing strategy', 'Turning traffic into sales'],
  },
]

function ConsultancySlide() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
          <IconUsers width={15} height={15} /> Consultancy &amp; services
        </span>

        <h2 className="mt-5 font-heading text-4xl leading-[1.1] font-bold tracking-tight text-navy-900 lg:text-5xl">
          eBay Consultancy
          <br />
          <span className="bg-gradient-to-r from-emerald-600 to-gold-500 bg-clip-text text-transparent">
            &amp; Shopify Marketing.
          </span>
        </h2>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
          Beyond courses, get hands-on expert help to set up, run and grow your eBay store and your Shopify
          marketing.
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {['Free consultation', 'Done-for-you setup', 'Ongoing support'].map((t) => (
            <CheckChip key={t}>{t}</CheckChip>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={whatsappLink('Hi! I would like a free consultation for my eBay / Shopify store.')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5"
          >
            <IconWhatsApp width={18} height={18} /> Get a free consultation <IconArrowRight width={16} height={16} />
          </a>
          <Link
            to="/services/"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900"
          >
            View services <IconArrowRight width={16} height={16} />
          </Link>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {consultancyCards.map((c) => (
          <div
            key={c.title}
            className={`group relative overflow-hidden rounded-3xl border border-t-4 border-slate-200 bg-white p-5 shadow-2xl transition-transform duration-300 hover:-translate-y-1 ${c.border} ${c.shadow}`}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-70 blur-3xl ${c.glow}`}
            />
            <span className={`relative grid h-10 w-10 place-items-center rounded-xl text-white shadow-lg ${c.tile}`}>
              <c.icon width={19} height={19} />
            </span>
            <p className="relative mt-4 font-heading text-base font-bold tracking-tight whitespace-nowrap text-navy-900">{c.title}</p>
            <ul className="relative mt-3 space-y-2">
              {c.items.map((it) => (
                <li key={it} className="flex items-start gap-2 text-[13px] leading-snug text-slate-600">
                  <IconCheck width={15} height={15} strokeWidth={2.4} className="mt-0.5 shrink-0 text-emerald-500" />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

const heroSlides = [CoursesSlide, ConsultancySlide]

function HeroCarousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (dir) => setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500)
    return () => clearInterval(t)
  }, [paused])

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Highlights"
      className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-gold-50"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="pointer-events-none absolute -top-40 right-10 h-[28rem] w-[28rem] rounded-full bg-brand-100/60 blur-3xl" />
      <HeroWave />

      <div className="relative mx-auto max-w-7xl px-5 pt-10 pb-20 sm:px-14 lg:px-16 lg:pt-12 lg:pb-24">
        <div className="grid grid-cols-1">
          {heroSlides.map((Slide, i) => (
            <div
              key={i}
              inert={i !== index}
              aria-hidden={i !== index}
              // Outgoing slide fades quickly; incoming waits for it, so the two never overlap visibly.
              className={`min-w-0 [grid-area:1/1] transition-all ease-out ${
                i === index
                  ? 'translate-x-0 opacity-100 delay-200 duration-500'
                  : 'pointer-events-none translate-x-4 opacity-0 duration-200'
              }`}
            >
              <Slide />
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-3 z-10 hidden min-[1400px]:left-14 h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-lg ring-1 ring-slate-100 transition-transform duration-300 hover:scale-105 sm:grid"
      >
        <IconArrowLeft width={20} height={20} />
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute top-1/2 right-3 z-10 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-lg ring-1 ring-slate-100 transition-transform duration-300 hover:scale-105 sm:grid"
      >
        <IconArrowRight width={20} height={20} />
      </button>

      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {heroSlides.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            onClick={() => setIndex(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === index ? 'w-8 bg-brand-600' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

const featureTiles = [
  'bg-brand-600 shadow-brand-600/30',
  'bg-emerald-500 shadow-emerald-500/30',
  'bg-violet-500 shadow-violet-500/30',
  'bg-orange-500 shadow-orange-500/30',
  'bg-sky-500 shadow-sky-500/30',
  'bg-rose-500 shadow-rose-500/30',
]

// Testimonial → the course / audience it relates to (icon + colour on the card).
const testimonialMeta = [
  { icon: IconTag, tile: 'bg-brand-600 shadow-brand-600/30', ring: 'from-brand-400 to-brand-600' },
  { icon: IconShoppingBag, tile: 'bg-emerald-500 shadow-emerald-500/30', ring: 'from-emerald-400 to-emerald-600' },
  { icon: IconUsers, tile: 'bg-sky-500 shadow-sky-500/30', ring: 'from-sky-400 to-sky-600' },
]

function Stars({ className = '' }) {
  return (
    <span className={`flex gap-0.5 text-amber-400 ${className}`} aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} width={15} height={15} />
      ))}
    </span>
  )
}

function TestimonialCarousel() {
  const trackRef = useRef(null)
  const [active, setActive] = useState(0)

  const cardStep = () => {
    const track = trackRef.current
    const card = track?.firstElementChild
    return card ? card.getBoundingClientRect().width + 20 : 0
  }

  const scrollTo = (i) => {
    const track = trackRef.current
    if (!track) return
    const n = testimonials.length
    const next = (i + n) % n
    track.scrollTo({ left: next * cardStep(), behavior: 'smooth' })
  }

  const onScroll = () => {
    const step = cardStep()
    if (step) setActive(Math.round(trackRef.current.scrollLeft / step))
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={onScroll}
        className="no-scrollbar -mx-2 flex snap-x snap-mandatory gap-5 overflow-x-auto px-2 pt-2 pb-8"
      >
        {testimonials.map((t, i) => {
          const m = testimonialMeta[i % testimonialMeta.length]
          return (
            <article
              key={t.name}
              className="flex w-[88%] shrink-0 snap-start flex-col rounded-3xl border border-white bg-white/90 p-7 shadow-xl shadow-slate-900/[0.06] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:w-[60%] lg:w-[calc((100%-2.5rem)/3)]"
            >
              <span className="font-heading text-5xl leading-none font-bold text-brand-200">&ldquo;</span>
              <p className="mt-1 flex-1 text-[15px] leading-relaxed text-slate-700">{t.quote}</p>
              <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
                <span className={`rounded-full bg-gradient-to-br p-[2px] ${m.ring}`}>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-white font-heading text-sm font-bold text-navy-900">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                </span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold text-navy-900">{t.name}</p>
                  <p className="truncate text-xs text-slate-500">{t.role}</p>
                  <Stars className="mt-1" />
                </div>
                <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-lg ${m.tile}`}>
                  <m.icon width={18} height={18} />
                </span>
              </div>
            </article>
          )
        })}
      </div>

      {/* Arrows + dots only matter when the cards don't all fit (below lg). */}
      <button
        type="button"
        aria-label="Previous testimonial"
        onClick={() => scrollTo(active - 1)}
        className="absolute top-1/2 -left-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-lg ring-1 ring-slate-100 transition-transform hover:scale-105 sm:-left-5 lg:hidden"
      >
        <IconArrowLeft width={18} height={18} />
      </button>
      <button
        type="button"
        aria-label="Next testimonial"
        onClick={() => scrollTo(active + 1)}
        className="absolute top-1/2 -right-2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full bg-white text-navy-900 shadow-lg ring-1 ring-slate-100 transition-transform hover:scale-105 sm:-right-5 lg:hidden"
      >
        <IconArrowRight width={18} height={18} />
      </button>
      <div className="flex justify-center gap-2 lg:hidden">
        {testimonials.map((t, i) => (
          <button
            key={t.name}
            type="button"
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => scrollTo(i)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              i === active ? 'w-7 bg-brand-600' : 'w-2.5 bg-slate-300'
            }`}
          />
        ))}
      </div>
    </div>
  )
}

const popupCourses = [courses[0], courses.find((c) => c.slug === 'tiktok-shop') ?? courses[1]]

function EnrollPopup() {
  const [open, setOpen] = useState(false)

  // Show at most once per browser session, and only after the visitor has had
  // time to look at the page — opening on every visit within 2s was intrusive.
  useEffect(() => {
    try {
      if (sessionStorage.getItem('enrollPopupSeen')) return
    } catch {
      // storage blocked — fall through and show once for this page view
    }
    const timer = setTimeout(() => {
      setOpen(true)
      try {
        sessionStorage.setItem('enrollPopupSeen', '1')
      } catch {
        // ignore
      }
    }, 8000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-950/40 p-4 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Course enrollment offer"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl"
      >
        <button
          type="button"
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-slate-50 text-slate-500 transition-colors duration-300 hover:text-navy-900"
        >
          <IconClose width={16} height={16} />
        </button>

        <div className="bg-gradient-to-br from-brand-50 via-white to-gold-50 px-6 pt-6 pb-5">
          <div className="flex items-center gap-3">
            <img
              src={ayeshaAvatar}
              alt="Ayesha Khan"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 rounded-full object-cover ring-4 ring-white"
            />
            <div>
              <p className="font-heading text-sm font-semibold text-navy-900">Ayesha Khan</p>
              <p className="text-xs text-slate-500">Founder &amp; Lead Mentor</p>
            </div>
          </div>
          <p className="mt-5 font-heading text-2xl leading-tight font-bold tracking-tight text-navy-900">
            Your journey to <span className="text-brand-600">earning online</span> starts here
          </p>
          <p className="mt-2 text-sm text-slate-600">
            3-month, mentor-led courses, {fee} each, online or in Lahore.
          </p>
        </div>

        <div className="space-y-2.5 px-6 pt-5">
          {popupCourses.map((c) => (
            <Link
              key={c.slug}
              to={`/courses/${c.slug}/`}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 p-3 transition-colors duration-300 hover:border-brand-200 hover:bg-brand-50/50"
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${courseTint[c.slug]}`}>
                <c.icon width={18} height={18} />
              </span>
              <span className="text-sm font-semibold text-navy-900">{c.title}</span>
              <IconArrowRight width={16} height={16} className="ml-auto shrink-0 text-slate-400" />
            </Link>
          ))}
        </div>

        <div className="px-6 pt-5 pb-6">
          <Link
            to="/courses/"
            onClick={() => setOpen(false)}
            className="flex items-center justify-center gap-2 rounded-full bg-brand-600 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-700"
          >
            View all courses <IconArrowRight width={16} height={16} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <Seo
        rawTitle="eBay with Ayesha Khan – eBay & Ecommerce Courses in Lahore"
        description="Learn eBay with Ayesha Khan: practical, mentor-led eBay, Shopify, TikTok Shop and digital marketing courses in Lahore, Pakistan. Online and in-person."
        keywords="eBay course in Lahore, best eBay course in Lahore, eBay course Pakistan, eBay training institute Lahore, ecommerce institute Lahore, online earning course Lahore, dropshipping course Lahore, TikTok Shop course Lahore, Shopify course Pakistan, Etsy course Lahore, Ayesha Khan eBay, Ayesha Khan Official Lahore, digital marketing course Pakistan, online selling course Lahore, eBay seller training Paragon City"
        path="/"
      />

      <EnrollPopup />

      <HeroCarousel />

      {/* ─── Quick facts ──────────────────────────────────────── */}
      <section className="border-y border-slate-200 bg-slate-50/60">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-5 lg:grid-cols-4 lg:px-8">
          {facts.map((f, i) => (
            <div
              key={f.label}
              className={`flex items-center gap-3 py-6 sm:px-4 ${i > 0 ? 'lg:border-l lg:border-slate-200' : ''} ${
                i % 2 === 1 ? 'border-l border-slate-200 pl-4 lg:pl-4' : ''
              } ${i > 1 ? 'border-t border-slate-200 lg:border-t-0' : ''}`}
            >
              <f.icon width={20} height={20} className="shrink-0 text-brand-600" />
              <span className="min-w-0">
                <span className="block text-xs text-slate-500">{f.label}</span>
                <span className="block truncate text-sm font-semibold text-navy-900 sm:text-base">{f.value}</span>
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Platforms (moving strip, pauses on hover) ───────── */}
      <section className="bg-white pt-10 pb-4 sm:pt-12">
        <p className="px-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
          Platforms &amp; tools you&apos;ll learn to work with
        </p>
        {/* Instagram brand gradient, referenced by .instagram-gradient in index.css */}
        <svg aria-hidden="true" width="0" height="0" className="absolute">
          <defs>
            <linearGradient id="ig-grad" x1="0" y1="1" x2="1" y2="0">
              <stop offset="0" stopColor="#FFD600" />
              <stop offset="0.5" stopColor="#FF0069" />
              <stop offset="1" stopColor="#7638FA" />
            </linearGradient>
          </defs>
        </svg>
        <div className="group relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex w-max animate-marquee py-2 group-hover:[animation-play-state:paused] motion-reduce:animate-none">
            {/* Two copies so the loop is seamless; the second is hidden from screen readers. */}
            {[0, 1].map((copy) =>
              platforms.map((p) => (
                <span
                  key={`${copy}-${p.name}`}
                  aria-hidden={copy === 1 || undefined}
                  className={`mr-3 inline-flex h-12 shrink-0 items-center gap-2.5 rounded-full border border-slate-200 bg-white px-5 font-heading text-sm font-semibold whitespace-nowrap text-navy-900 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md ${p.hover}`}
                >
                  <PlatformMark p={p} />
                  <PlatformName p={p} />
                </span>
              )),
            )}
          </div>
        </div>
      </section>

      {/* ─── Courses ──────────────────────────────────────────── */}
      <section className="bg-gradient-to-b from-white via-slate-50/70 to-white pt-10 pb-20 sm:pt-12 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Our courses"
              icon={IconAward}
              title="Six practical courses. One clear path to"
              highlight="selling online."
              desc={`Every course runs for 3 months with weekly classes and hands-on assignments, ${fee} each.`}
            />
            <Link
              to="/courses/"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-brand-600 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
            >
              View all courses <IconArrowRight width={16} height={16} />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c, i) => (
              <Reveal key={c.slug} delay={(i % 3) * 80} className="h-full">
                <CourseCard course={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why us ───────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-50/70 via-white to-gold-50/60 py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Why choose us"
              icon={IconShield}
              title="Built for real results, not just"
              highlight="certificates."
              desc="Everything we teach is tested on live stores first, so you learn what works in today's ecommerce market, not what worked years ago."
            />
            <Link
              to="/about/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-navy-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-navy-800"
            >
              About Ayesha Khan <IconArrowRight width={16} height={16} />
            </Link>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2">
            {features.map((f, i) => (
              <Reveal
                key={f.title}
                delay={(i % 2) * 80}
                className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-900/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <span
                  className={`grid h-11 w-11 place-items-center rounded-xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110 ${featureTiles[i % featureTiles.length]}`}
                >
                  <f.icon width={20} height={20} />
                </span>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How it works ─────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="How it works"
              icon={IconTarget}
              title="From first message to"
              highlight="first sale."
            />
          </Reveal>

          <div className="mt-14">
            <StepCards steps={steps} />
          </div>
        </div>
      </section>

      {/* ─── Services teaser ──────────────────────────────────── */}
      <section className="bg-white pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="relative grid items-center gap-10 overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-gold-50 p-8 shadow-xl shadow-brand-600/5 sm:p-12 lg:grid-cols-2">
            <div
              aria-hidden="true"
              className="bg-dot-grid pointer-events-none absolute top-0 right-0 h-72 w-72 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]"
            />
            <div
              aria-hidden="true"
              className="bg-dot-grid pointer-events-none absolute bottom-0 left-0 h-56 w-56 [mask-image:radial-gradient(circle_at_bottom_left,black_20%,transparent_70%)]"
            />
            <div className="relative">
              <SectionHeading
                eyebrow="Consultancy & services"
                icon={IconUsers}
                title="Rather have experts"
                highlight="do it for you?"
                desc="Beyond courses, our team sets up, runs and grows eBay stores and Shopify marketing for sellers and businesses."
              />
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={whatsappLink('Hi! I would like a free consultation for my eBay / Shopify store.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <IconWhatsApp width={18} height={18} /> Free consultation
                </a>
                <Link
                  to="/services/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900"
                >
                  View services <IconArrowRight width={16} height={16} />
                </Link>
              </div>
            </div>
            <div className="relative grid gap-4 sm:grid-cols-2">
              {consultancyCards.map((c) => (
                <div
                  key={c.title}
                  className={`relative overflow-hidden rounded-3xl border border-t-4 border-slate-200 bg-white p-6 shadow-2xl transition-transform duration-300 hover:-translate-y-1 ${c.border} ${c.shadow}`}
                >
                  <span
                    aria-hidden="true"
                    className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full opacity-70 blur-3xl ${c.glow}`}
                  />
                  <span className={`relative grid h-11 w-11 place-items-center rounded-xl text-white shadow-lg ${c.tile}`}>
                    <c.icon width={20} height={20} />
                  </span>
                  <p className="relative mt-4 font-heading text-lg font-bold text-navy-900">{c.title}</p>
                  <ul className="relative mt-3 space-y-2.5">
                    {c.items.map((it) => (
                      <li key={it} className="flex items-start gap-2 text-sm text-slate-600">
                        <IconCheck width={16} height={16} strokeWidth={2.4} className="mt-0.5 shrink-0 text-emerald-500" /> {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-50/80 via-white to-gold-50/50 py-20 lg:py-24">
        <div className="pointer-events-none absolute -top-24 -left-32 h-80 w-80 rounded-full bg-brand-100/70 blur-3xl" />
        <div className="pointer-events-none absolute top-1/3 -right-32 h-80 w-80 rounded-full bg-gold-100/70 blur-3xl" />
        {/* Large soft quote marks in opposite corners */}
        <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute top-10 left-6 h-40 w-40 text-brand-100 sm:left-16">
          <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>
        <svg aria-hidden="true" viewBox="0 0 24 24" className="pointer-events-none absolute right-6 bottom-6 h-32 w-32 rotate-180 text-gold-100 sm:right-16">
          <path fill="currentColor" d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
        </svg>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal>
            <SectionHeading
              center
              eyebrow="Student stories"
              icon={IconAward}
              title="What our students & partners"
              highlight="say"
              desc="Real experiences from students and partners who learned and grew with us."
            />
            <div className="mt-6 flex items-center justify-center gap-4">
              <span className="h-px w-16 bg-slate-200 sm:w-24" />
              <span className="flex gap-1 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <IconStar key={i} width={20} height={20} />
                ))}
              </span>
              <span className="h-px w-16 bg-slate-200 sm:w-24" />
            </div>
          </Reveal>

          <Reveal delay={80} className="mt-10">
            <TestimonialCarousel />
          </Reveal>
        </div>
      </section>

      {/* ─── FAQ ──────────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="FAQs"
              icon={IconChat}
              title="Questions,"
              highlight="answered."
              desc="Can't find what you're looking for? Message us, we usually reply within a few hours."
            />
            <div className="relative mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-gold-50 p-6 shadow-xl shadow-brand-600/5">
              <div className="flex items-center gap-3">
                <img
                  src={ayeshaAvatar}
                  alt="Ayesha Khan"
                  width={48}
                  height={48}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover ring-4 ring-white"
                />
                <div>
                  <p className="font-heading text-sm font-bold text-navy-900">Still have questions?</p>
                  <p className="text-xs text-slate-500">Talk to our team directly</p>
                </div>
              </div>
              <div className="mt-5 flex flex-wrap gap-3">
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <IconWhatsApp width={17} height={17} /> WhatsApp us
                </a>
                <Link
                  to="/contact/"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900"
                >
                  Contact page
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={80} className="space-y-3">
            {faqs.map((faq, i) => (
              <FaqItem
                key={faq.q}
                faq={faq}
                isOpen={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? -1 : i)}
              />
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── Closing CTA ──────────────────────────────────────── */}
      <section className="bg-white pb-20 lg:pb-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 px-8 py-14 text-center text-white shadow-2xl shadow-brand-600/25 sm:px-14">
            <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-emerald-400/30 blur-2xl" />
            {/* Concentric rings centred on the bottom-right and top-left corners */}
            {[
              { pos: 'right-0 bottom-0 translate-x-1/2 translate-y-1/2', sizes: [28, 20, 12] },
              { pos: 'top-0 left-0 -translate-x-1/2 -translate-y-1/2', sizes: [20, 12] },
            ].map((g) =>
              g.sizes.map((size) => (
                <span
                  key={`${g.pos}-${size}`}
                  aria-hidden="true"
                  style={{ width: `${size}rem`, height: `${size}rem` }}
                  className={`pointer-events-none absolute rounded-full border-2 border-white/15 ${g.pos}`}
                />
              )),
            )}
            <h2 className="relative mx-auto max-w-2xl font-heading text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to start your <span className="text-emerald-300">ecommerce journey?</span>
            </h2>
            <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80">
              Tell us your goal and we&apos;ll help you pick the right course for the next batch.
            </p>
            <div className="relative mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/courses/"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:-translate-y-0.5"
              >
                Browse courses <IconArrowRight width={16} height={16} />
              </Link>
              <a
                href={`tel:${site.phoneDial}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10"
              >
                Call {site.phoneDisplay}
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
