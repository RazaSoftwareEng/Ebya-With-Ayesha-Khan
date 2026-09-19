import { useEffect, useRef, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
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
} from './icons'
import { site, enrollFormUrl } from '../siteConfig'
import { courses } from '../data/courses'
import ayeshaAvatar from './assets/ayesha-avatar.webp'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [coursesOpen, setCoursesOpen] = useState(false)
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false)
  const [query, setQuery] = useState('')
  const coursesRef = useRef(null)
  const navigate = useNavigate()

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

  const closeAll = () => {
    setOpen(false)
    setCoursesOpen(false)
    setMobileCoursesOpen(false)
  }

  const submitSearch = (e) => {
    e.preventDefault()
    const term = query.trim()
    navigate(term ? `/courses/?q=${encodeURIComponent(term)}` : '/courses/')
    setQuery('')
    closeAll()
  }

  const navLinkClass = ({ isActive }) =>
    `relative rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
      isActive
        ? 'border-brand-200 bg-brand-50 text-brand-700'
        : 'border-transparent text-slate-600 hover:-translate-y-0.5 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
    }`

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden bg-gradient-to-r from-navy-900 via-navy-800 to-brand-800 text-white/85 sm:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3 text-sm lg:px-8">
          <div className="flex flex-wrap items-center gap-x-7 gap-y-2">
            <a
              href={`tel:${site.phoneDial}`}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-gold-400"
            >
              <IconPhone width={17} height={17} /> {site.phoneDisplay}
            </a>
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors duration-300 hover:text-gold-400"
            >
              <IconMail width={17} height={17} /> {site.email}
            </a>
            <span className="hidden items-center gap-2 lg:flex">
              <IconLocation width={17} height={17} /> {site.address}
            </span>
          </div>

          <div className="flex items-center gap-1.5">
            <a
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="grid h-8 w-8 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconFacebook width={16} height={16} />
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="grid h-8 w-8 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconInstagram width={16} height={16} />
            </a>
            <a
              href={site.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-8 w-8 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconLinkedin width={16} height={16} />
            </a>
            <a
              href={site.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="grid h-8 w-8 place-items-center rounded-full text-white/80 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/15 hover:text-gold-400"
            >
              <IconTiktok width={16} height={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <header
        className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
          scrolled ? 'shadow-md shadow-slate-900/5' : 'border-b border-slate-100'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5 lg:px-8">
          <NavLink to="/" className="flex shrink-0 items-center gap-2.5" onClick={closeAll}>
            <img
              src={ayeshaAvatar}
              alt="Ayesha Khan"
              className="h-11 w-11 shrink-0 rounded-full object-cover"
            />
            <span className="font-heading leading-tight">
              <span className="block text-base font-bold text-navy-900 sm:text-lg">Ayesha Khan</span>
              <span className="-mt-1 block text-sm font-semibold text-brand-600 sm:text-base">
                Official
              </span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-1.5 lg:flex">
            <NavLink to="/" end className={navLinkClass}>
              Home
            </NavLink>
            <NavLink to="/about/" className={navLinkClass}>
              About Us
            </NavLink>

            <div
              className="relative"
              ref={coursesRef}
              onMouseEnter={() => setCoursesOpen(true)}
              onMouseLeave={() => setCoursesOpen(false)}
            >
              <NavLink
                to="/courses/"
                onClick={closeAll}
                onFocus={() => setCoursesOpen(true)}
                aria-expanded={coursesOpen}
                className={`flex items-center gap-1 rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
                  coursesOpen
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-600 hover:-translate-y-0.5 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
                }`}
              >
                Our Courses
                <IconChevronDown
                  width={16}
                  height={16}
                  className={`transition-transform duration-300 ${coursesOpen ? 'rotate-180' : ''}`}
                />
              </NavLink>

              <div
                className={`absolute left-1/2 top-full z-20 mt-2 w-80 -translate-x-1/2 rounded-2xl border border-slate-100 bg-white p-2.5 shadow-xl shadow-slate-900/10 transition-all duration-200 ${
                  coursesOpen
                    ? 'pointer-events-auto translate-y-0 opacity-100'
                    : 'pointer-events-none -translate-y-2 opacity-0'
                }`}
              >
                {courses.map((c) => (
                  <NavLink
                    key={c.slug}
                    to={`/courses/${c.slug}/`}
                    onClick={closeAll}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors duration-200 hover:bg-brand-50/70"
                  >
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-navy-900 text-gold-400">
                      <c.icon width={17} height={17} />
                    </span>
                    <span className="min-w-0">
                      <span className="block truncate text-sm font-semibold text-navy-900">{c.title}</span>
                      <span className="block text-xs text-slate-500">{c.level} · {c.duration}</span>
                    </span>
                  </NavLink>
                ))}
                <NavLink
                  to="/courses/"
                  onClick={closeAll}
                  className="mt-1 flex items-center justify-center gap-1.5 rounded-xl bg-brand-50 py-2.5 text-sm font-bold text-brand-700 transition-colors duration-200 hover:bg-brand-100"
                >
                  View All Courses <IconArrowRight width={14} height={14} />
                </NavLink>
              </div>
            </div>

            <NavLink to="/services/" className={navLinkClass}>
              Services
            </NavLink>
            <NavLink to="/blog/" className={navLinkClass}>
              Blog
            </NavLink>
            <NavLink to="/contact/" className={navLinkClass}>
              Contact Us
            </NavLink>
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
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
                placeholder="Search courses..."
                aria-label="Search courses"
                className="w-40 rounded-full border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 transition-all duration-300 placeholder:text-slate-400 focus:w-56 focus:border-brand-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-100"
              />
            </form>
            <a
              href={enrollFormUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30"
            >
              Enroll Now
            </a>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-brand-50 text-brand-700 lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
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

            <NavLink
              to="/services/"
              onClick={closeAll}
              className={({ isActive }) =>
                `block rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-600 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
                }`
              }
            >
              Services
            </NavLink>
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
              className="mt-2 block rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-bold text-white"
            >
              Enroll Now
            </a>
          </nav>
        </div>
      </header>
    </>
  )
}
