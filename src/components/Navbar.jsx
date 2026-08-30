import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IconMenu, IconClose, IconPhone } from './icons'
import { site } from '../siteConfig'

const links = [
  { to: '/', label: 'Home' },
  { to: '/courses', label: 'Courses' },
  { to: '/services', label: 'Our Services' },
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
    `text-sm font-semibold tracking-wide transition-colors ${
      isActive ? 'text-gold-500' : 'text-white/85 hover:text-gold-400'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-shadow ${
        scrolled ? 'shadow-lg shadow-navy-950/20' : ''
      }`}
    >
      <div className="bg-navy-900 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <NavLink to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500 font-heading text-lg font-bold text-navy-900">
              EK
            </span>
            <span className="font-heading leading-tight">
              <span className="block text-base font-bold sm:text-lg">Ebay With</span>
              <span className="-mt-1 block text-sm font-semibold text-gold-400 sm:text-base">
                Ayesha Khan
              </span>
            </span>
          </NavLink>

          <nav className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={link.to === '/'} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${site.phoneDial}`}
              className="flex items-center gap-2 text-sm font-semibold text-white/85 hover:text-gold-400"
            >
              <IconPhone width={18} height={18} />
              {site.phoneDisplay}
            </a>
            <NavLink
              to="/contact"
              className="rounded-full bg-gold-500 px-5 py-2.5 text-sm font-bold text-navy-900 shadow-md shadow-gold-500/30 transition hover:bg-gold-400"
            >
              Contact Us Now
            </NavLink>
          </div>

          <button
            type="button"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-lg bg-white/10 text-white lg:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="space-y-1 bg-navy-800 px-5 py-4 lg:hidden">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                  isActive ? 'bg-navy-700 text-gold-400' : 'text-white/85'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <a
            href={`tel:${site.phoneDial}`}
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-semibold text-white/85"
          >
            <IconPhone width={18} height={18} /> {site.phoneDisplay}
          </a>
          <NavLink
            to="/contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-full bg-gold-500 px-5 py-3 text-center text-sm font-bold text-navy-900"
          >
            Contact Us Now
          </NavLink>
        </nav>
      )}
    </header>
  )
}
