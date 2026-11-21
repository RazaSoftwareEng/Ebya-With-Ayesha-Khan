import { useEffect, useRef, useState } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import {
  IconMenu,
  IconClose,
  IconPhone,
  IconMail,
  IconLocation,
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconTiktok,
  IconChevronDown,
  IconSearch,
  IconArrowRight,
  IconWhatsApp,
  IconUsers,
  IconChat,
  IconMonitor,
} from './icons'
import { site, enrollFormUrl, whatsappLink } from '../siteConfig'
import { courses } from '../data/courses'
import { services } from '../data/services'
import ayeshaAvatar from './assets/ayesha-avatar.webp'
import ThemeToggle from './ThemeToggle'
import { accentAt, courseAccent } from './uiTokens'

const moreLinks = [
  { to: '/about/', label: 'About Us', icon: IconUsers, desc: 'Meet Ayesha Khan, our story and values' },
  { to: '/blog/', label: 'Blog', icon: IconMonitor, desc: 'Practical guides on eBay and ecommerce' },
  { to: '/contact/', label: 'Contact Us', icon: IconChat, desc: 'Call, WhatsApp, email or visit our campus' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [query, setQuery] = useState('')
  const coursesRef = useRef(null)
  const servicesRef = useRef(null)
  const moreRef = useRef(null)
  const { pathname } = useLocation()
  const moreActive = moreLinks.some((l) => pathname.startsWith(l.to.slice(0, -1)))
  const navigate = useNavigate()
  const hoverTimer = useRef(null)

  const openMenu = (which) => {
    clearTimeout(hoverTimer.current)
    setCoursesOpen(which === 'courses')
    setServicesOpen(which === 'services')
    setMoreOpen(which === 'more')
  }
  const scheduleClose = () => {
    clearTimeout(hoverTimer.current)
    hoverTimer.current = setTimeout(() => {
      setCoursesOpen(false)
      setServicesOpen(false)
      setMoreOpen(false)
    }, 200)
  }
  useEffect(() => () => clearTimeout(hoverTimer.current), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!coursesOpen) return
    const onClickOutside = (e) => {
      if (coursesRef.current && !coursesRef.current.contains(e.target)) setCoursesOpen(false)
    }
    const onEscape = (e) => e.key === 'Escape' && setCoursesOpen(false)
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [coursesOpen])

  useEffect(() => {
    if (!servicesOpen) return
    const onClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) setServicesOpen(false)
    }
    const onEscape = (e) => e.key === 'Escape' && setServicesOpen(false)
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [servicesOpen])

  useEffect(() => {
    if (!moreOpen) return
    const onClickOutside = (e) => {
      if (moreRef.current && !moreRef.current.contains(e.target)) setMoreOpen(false)
    }
    const onEscape = (e) => e.key === 'Escape' && setMoreOpen(false)
    document.addEventListener('mousedown', onClickOutside)
    document.addEventListener('keydown', onEscape)
    return () => {
      document.removeEventListener('mousedown', onClickOutside)
      document.removeEventListener('keydown', onEscape)
    }
  }, [moreOpen])

  const closeAll = () => {
    clearTimeout(hoverTimer.current)
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
    setOpen(false)
    setCoursesOpen(false)
    setMobileCoursesOpen(false)
    setServicesOpen(false)
    setMobileServicesOpen(false)
    setMoreOpen(false)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    const term = query.trim()
    navigate(term ? `/courses/?q=${encodeURIComponent(term)}` : '/courses/')
    setQuery('')
    closeAll()
  }

  // Desktop nav pills: active page = solid brand pill, open dropdown = raised white pill.
  const pillBase =
    'flex items-center gap-1 whitespace-nowrap rounded-full border px-3 py-2 text-sm font-semibold tracking-wide transition-all duration-300 xl:px-4'
  const pillActive = 'border-transparent bg-brand-600 text-white shadow-md shadow-brand-600/30'
  const pillOpen = 'border-slate-200 bg-white text-brand-700 shadow-sm'
  const pillIdle = 'border-transparent text-slate-600 hover:bg-white hover:text-brand-700 hover:shadow-sm'
  const navLinkClass = ({ isActive }) => `${pillBase} ${isActive ? pillActive : pillIdle}`

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-navy-900 text-white/85 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-1.5 text-[13px] lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a
              href={`tel:${site.phoneDial}`}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-gold-400"
            >
              <IconPhone width={15} height={15} /> {site.phoneDisplay}
            </a>
            <span aria-hidden="true" className="hidden h-3.5 w-px bg-white/25 sm:block" />
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors duration-300 hover:text-gold-400"
            >
              <IconWhatsApp width={15} height={15} /> {site.whatsappDisplay}
            </a>
            <span aria-hidden="true" className="hidden h-3.5 w-px bg-white/25 sm:block" />
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-gold-400"
            >
              <IconMail width={15} height={15} /> {site.email}
            </a>
            <span aria-hidden="true" className="hidden h-3.5 w-px bg-white/25 lg:block" />
            <span className="hidden items-center gap-2 lg:flex">
              <IconLocation width={15} height={15} /> {site.address}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-7 w-7 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconFacebook width={14} height={14} />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-7 w-7 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconInstagram width={14} height={14} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-7 w-7 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconLinkedin width={14} height={14} />
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-7 w-7 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconTiktok width={14} height={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
          scrolled ? 'shadow-lg shadow-slate-900/[0.07]' : 'shadow-sm shadow-slate-900/[0.03]'
        }`}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 -bottom-px h-0.5 bg-gradient-to-r from-brand-500 via-sky-400 to-emerald-400 opacity-80"
        />
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-2 lg:px-8">
          <NavLink to="/" className="flex shrink-0 items-center gap-2.5" onClick={closeAll}>
            <img
              src={ayeshaAvatar}
              alt="Ayesha Khan"
              width={40}
              height={40}
              fetchPriority="high"
              decoding="async"
              className="h-10 w-10 shrink-0 rounded-full object-cover"
            />
            <span className="font-heading leading-tight">
              <span className="block text-base font-bold text-navy-900">Ayesha Khan</span>
              <span className="-mt-0.5 block text-sm font-semibold text-brand-600">
                Official
              </span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1 rounded-full border border-slate-200 bg-slate-50/80 p-1 shadow-inner shadow-slate-900/[0.03] lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>

            <div
              className="relative"
              ref={coursesRef}
              onMouseEnter={() => openMenu('courses')}
              onMouseLeave={scheduleClose}
            >
              <NavLink
                to="/courses/"
                onClick={closeAll}
                onFocus={() => setCoursesOpen(true)}
                aria-expanded={coursesOpen}
                className={({ isActive }) => `${pillBase} ${coursesOpen ? pillOpen : isActive ? pillActive : pillIdle}`}
              >
                Our Courses
                <IconChevronDown
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${coursesOpen ? 'rotate-180' : ''}`}
                />
              </NavLink>

              <div
                className={`absolute left-1/2 top-full z-20 w-[40rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  coursesOpen
                    ? 'pointer-events-auto visible translate-y-0 opacity-100'
                    : 'pointer-events-none invisible -translate-y-2 opacity-0'
                }`}
              >
               <div className="grid grid-cols-[1fr_13rem] gap-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15">
                <div className="grid gap-0.5 p-1">
                  {courses.map((c) => {
                    const a = courseAccent(c.slug)
                    return (
                      <NavLink
                        key={c.slug}
                        to={`/courses/${c.slug}/`}
                        onClick={closeAll}
                        className="group/item flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors duration-200 hover:bg-slate-50"
                      >
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-md transition-transform duration-200 group-hover/item:scale-110 ${a.tile}`}>
                          <c.icon width={18} height={18} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-navy-900 group-hover/item:text-brand-700">{c.title}</span>
                          <span className="block text-xs text-slate-500">{c.level} · {c.duration}</span>
                        </span>
                        <IconArrowRight width={14} height={14} className="shrink-0 text-slate-300 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-brand-600" />
                      </NavLink>
                    )
                  })}
                </div>
                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 via-white to-gold-50 p-5">
                  <div className="bg-dot-grid pointer-events-none absolute -top-4 -right-4 h-28 w-28 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]" />
                  <div className="relative">
                    <span className="inline-block rounded-full bg-emerald-500 px-2.5 py-1 text-[10px] font-bold tracking-wider text-white uppercase">
                      Admissions open
                    </span>
                    <p className="mt-3 font-heading text-2xl font-bold text-navy-900">{courses[0].fee}</p>
                    <p className="text-xs text-slate-500">per course · 3 months</p>
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">
                      Online &amp; in-person classes in {site.address}.
                    </p>
                  </div>
                  <NavLink
                    to="/courses/"
                    onClick={closeAll}
                    className="relative mt-4 flex items-center justify-center gap-1.5 rounded-full bg-brand-600 py-2.5 text-xs font-bold text-white shadow-md shadow-brand-600/25 transition-colors duration-200 hover:bg-brand-700"
                  >
                    View all courses <IconArrowRight width={13} height={13} />
                  </NavLink>
                </div>
              </div>
               </div>
            </div>

            <div
              className="relative"
              ref={servicesRef}
              onMouseEnter={() => openMenu('services')}
              onMouseLeave={scheduleClose}
            >
              <NavLink
                to="/services/"
                onClick={closeAll}
                onFocus={() => setServicesOpen(true)}
                aria-expanded={servicesOpen}
                className={({ isActive }) => `${pillBase} ${servicesOpen ? pillOpen : isActive ? pillActive : pillIdle}`}
              >
                Services
                <IconChevronDown
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                />
              </NavLink>

              <div
                className={`absolute left-1/2 top-full z-20 w-[48rem] -translate-x-1/2 pt-3 transition-all duration-200 ${
                  servicesOpen
                    ? 'pointer-events-auto visible translate-y-0 opacity-100'
                    : 'pointer-events-none invisible -translate-y-2 opacity-0'
                }`}
              >
               <div className="grid grid-cols-[1fr_13rem] gap-2 overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15">
                <div className="grid grid-cols-2 gap-0.5 p-1">
                  {services.map((s, i) => {
                    const a = accentAt(i)
                    return (
                      <NavLink
                        key={s.slug}
                        to={`/services/${s.slug}/`}
                        onClick={closeAll}
                        className="group/item flex items-center gap-3 rounded-2xl px-2.5 py-2 transition-colors duration-200 hover:bg-slate-50"
                      >
                        <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl text-white shadow-md transition-transform duration-200 group-hover/item:scale-110 ${a.tile}`}>
                          <s.icon width={16} height={16} />
                        </span>
                        <span className="text-[13px] leading-snug font-semibold text-navy-900 group-hover/item:text-brand-700">
                          {s.title}
                        </span>
                      </NavLink>
                    )
                  })}
                </div>
                <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-br from-brand-50 via-white to-gold-50 p-5">
                  <div className="bg-dot-grid pointer-events-none absolute -top-4 -right-4 h-28 w-28 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]" />
                  <div className="relative">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                      <IconWhatsApp width={18} height={18} />
                    </span>
                    <p className="mt-3 font-heading text-lg leading-snug font-bold text-navy-900">Free consultation</p>
                    <p className="mt-1.5 text-xs leading-relaxed text-slate-600">
                      Tell us about your store and we&apos;ll suggest the right service, with a clear quote.
                    </p>
                  </div>
                  <div className="relative mt-4 space-y-2">
                    <a
                      href={whatsappLink('Hi! I would like a free consultation for my store.')}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAll}
                      className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/25"
                    >
                      Chat on WhatsApp
                    </a>
                    <NavLink
                      to="/services/"
                      onClick={closeAll}
                      className="flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white py-2.5 text-xs font-bold text-navy-900 transition-colors duration-200 hover:border-brand-200 hover:text-brand-700"
                    >
                      All services <IconArrowRight width={13} height={13} />
                    </NavLink>
                  </div>
                </div>
              </div>
               </div>
            </div>

            <div
              className="relative"
              ref={moreRef}
              onMouseEnter={() => openMenu('more')}
              onMouseLeave={scheduleClose}
            >
              <button
                type="button"
                onClick={() => openMenu('more')}
                onFocus={() => openMenu('more')}
                aria-expanded={moreOpen}
                aria-haspopup="true"
                className={`${pillBase} ${moreOpen ? pillOpen : moreActive ? pillActive : pillIdle}`}
              >
                More
                <IconChevronDown
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${moreOpen ? 'rotate-180' : ''}`}
                />
              </button>

              <div
                className={`absolute right-0 top-full z-20 w-[24rem] pt-3 transition-all duration-200 xl:left-1/2 xl:right-auto xl:-translate-x-1/2 ${
                  moreOpen
                    ? 'pointer-events-auto visible translate-y-0 opacity-100'
                    : 'pointer-events-none invisible -translate-y-2 opacity-0'
                }`}
              >
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-2 shadow-2xl shadow-slate-900/15">
                  <div className="grid gap-0.5 p-1">
                    {moreLinks.map((l, i) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        onClick={closeAll}
                        className={({ isActive }) =>
                          `group/item flex items-start gap-3 rounded-2xl px-3 py-3 transition-colors duration-200 hover:bg-slate-50 ${
                            isActive ? 'bg-brand-50/70' : ''
                          }`
                        }
                      >
                        <span
                          className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-md transition-transform duration-200 group-hover/item:scale-110 ${accentAt(i).tile}`}
                        >
                          <l.icon width={18} height={18} />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-navy-900 group-hover/item:text-brand-700">
                            {l.label}
                          </span>
                          <span className="mt-0.5 block text-xs leading-relaxed text-slate-500">{l.desc}</span>
                        </span>
                        <IconArrowRight
                          width={14}
                          height={14}
                          className="mt-1 shrink-0 text-slate-300 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:text-brand-600"
                        />
                      </NavLink>
                    ))}
                  </div>
                  <div className="mt-1 grid grid-cols-2 gap-2 rounded-2xl bg-gradient-to-br from-brand-50 via-white to-gold-50 p-3">
                    <a
                      href={`tel:${site.phoneDial}`}
                      onClick={closeAll}
                      className="flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white py-2.5 text-xs font-bold text-navy-900 transition-colors hover:border-brand-200 hover:text-brand-700"
                    >
                      <IconPhone width={14} height={14} /> Call us
                    </a>
                    <a
                      href={whatsappLink()}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={closeAll}
                      className="flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 py-2.5 text-xs font-bold text-white shadow-md shadow-emerald-600/25"
                    >
                      <IconWhatsApp width={14} height={14} /> WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </nav>

          <div className="hidden items-center gap-2.5 lg:flex">
            <ThemeToggle />
            <form onSubmit={submitSearch} className="group relative">
              <IconSearch
                width={16}
                height={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search..."
                aria-label="Search courses"
                className="w-36 rounded-full border border-slate-200 bg-slate-50 py-1.5 pl-9 pr-3 text-sm text-slate-700 transition-all duration-300 placeholder:text-slate-400 focus:w-56 focus:border-brand-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </form>
            <a
              href={enrollFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2 text-sm font-bold text-white shadow-md shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-emerald-600/30"
            >
              Enroll Now
              <IconArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`grid overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-out lg:hidden ${
            open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
          }`}
        >
          <nav className="min-h-0 space-y-1 px-5 py-4">
            <form onSubmit={submitSearch} className="relative mb-3">
              <IconSearch
                width={16}
                height={16}
                className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
              />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search courses..."
                aria-label="Search courses"
                className="w-full rounded-full border border-slate-200 bg-slate-50 py-2.5 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-brand-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </form>

            <NavLink
              to="/"
              end
              onClick={closeAll}
              className={({ isActive }) =>
                `block rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-600 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about/"
              onClick={closeAll}
              className={({ isActive }) =>
                `block rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-600 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
                }`
              }
            >
              About Us
            </NavLink>

            <div>
              <button
                type="button"
                onClick={() => setMobileCoursesOpen((v) => !v)}
                aria-expanded={mobileCoursesOpen}
                className="flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700"
              >
                Our Courses
                <IconChevronDown
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${mobileCoursesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  mobileCoursesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 space-y-1 py-1 pl-3">
                  {courses.map((c) => (
                    <NavLink
                      key={c.slug}
                      to={`/courses/${c.slug}/`}
                      onClick={closeAll}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-brand-50/60 hover:text-brand-700"
                    >
                      {c.title}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/courses/"
                    onClick={closeAll}
                    className="block rounded-lg px-3 py-2 text-sm font-bold text-brand-700"
                  >
                    View All Courses
                  </NavLink>
                </div>
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={() => setMobileServicesOpen((v) => !v)}
                aria-expanded={mobileServicesOpen}
                className="flex w-full items-center justify-between rounded-lg border border-transparent px-3 py-2.5 text-sm font-semibold text-slate-600 transition-all duration-300 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700"
              >
                Services
                <IconChevronDown
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                />
              </button>
              <div
                className={`grid overflow-hidden transition-all duration-300 ease-out ${
                  mobileServicesOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="min-h-0 space-y-1 py-1 pl-3">
                  {services.map((s) => (
                    <NavLink
                      key={s.slug}
                      to={`/services/${s.slug}/`}
                      onClick={closeAll}
                      className="block rounded-lg px-3 py-2 text-sm text-slate-600 transition-colors duration-200 hover:bg-brand-50/60 hover:text-brand-700"
                    >
                      {s.title}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/services/"
                    onClick={closeAll}
                    className="block rounded-lg px-3 py-2 text-sm font-bold text-brand-700"
                  >
                    View All Services
                  </NavLink>
                </div>
              </div>
            </div>
            <NavLink
              to="/blog/"
              onClick={closeAll}
              className={({ isActive }) =>
                `block rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-600 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact/"
              onClick={closeAll}
              className={({ isActive }) =>
                `block rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-600 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
                }`
              }
            >
              Contact Us
            </NavLink>

            <div className="mt-3 space-y-2 border-t border-slate-100 pt-3">
              <a
                href={`tel:${site.phoneDial}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600"
              >
                <IconPhone width={17} height={17} /> {site.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600"
              >
                <IconWhatsApp width={17} height={17} /> {site.whatsappDisplay}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600"
              >
                <IconMail width={17} height={17} /> {site.email}
              </a>
              <span className="flex items-start gap-2 rounded-lg px-3 py-2 text-sm text-slate-500">
                <IconLocation width={17} height={17} className="mt-0.5 shrink-0" /> {site.address}
              </span>
            </div>

            <a
              href={enrollFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeAll}
              className="mt-2 block rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Enroll Now
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
