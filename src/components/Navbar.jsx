import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IconMenu, IconClose, IconPhone } from './icons'
import { site } from '../siteConfig'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/services', label: 'Our Services' },
  { to: '/blog', label: 'Blog' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `relative rounded-full border px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300 ${
      isActive
        ? 'border-brand-200 bg-brand-50 text-brand-700 shadow-[0_0_16px_-4px_rgba(124,58,237,0.35)]'
        : 'border-transparent text-slate-600 hover:-translate-y-0.5 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700 hover:shadow-[0_0_16px_-6px_rgba(124,58,237,0.4)]'
    }`

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-shadow duration-300 ${
        scrolled ? 'shadow-md shadow-slate-900/5' : 'border-b border-slate-100'
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-600 font-heading text-lg font-bold text-white">
            AK
          </span>
          <span className="font-heading leading-tight">
            <span className="block text-base font-bold text-navy-900 sm:text-lg">Ayesha Khan</span>
            <span className="-mt-1 block text-sm font-semibold text-brand-600 sm:text-base">
              Official
            </span>
          </span>
        </NavLink>

        <nav className="hidden items-center gap-1.5 lg:flex">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href={`tel:${site.phoneDial}`}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors duration-300 hover:text-brand-700"
          >
            <IconPhone width={18} height={18} />
            {site.phoneDisplay}
          </a>
          <NavLink
            to="/contact"
            className="rounded-full bg-brand-600 px-5 py-2.5 text-sm font-bold text-white shadow-md shadow-brand-600/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg hover:shadow-brand-600/30"
          >
            Contact Us
          </NavLink>
        </div>

        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="grid h-10 w-10 place-items-center rounded-lg bg-brand-50 text-brand-700 lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <IconClose /> : <IconMenu />}
        </button>
      </div>

      <div
        className={`grid overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 ease-out lg:hidden ${
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <nav className="min-h-0 space-y-1 px-5 py-4">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg border px-3 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'border-brand-200 bg-brand-50 text-brand-700'
                    : 'border-transparent text-slate-600 hover:border-brand-100 hover:bg-brand-50/60 hover:text-brand-700'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={`tel:${site.phoneDial}`}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-slate-600"
          >
            <IconPhone width={18} height={18} /> {site.phoneDisplay}
          </a>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-brand-600 px-5 py-3 text-center text-sm font-bold text-white"
          >
            Contact Us Now
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
