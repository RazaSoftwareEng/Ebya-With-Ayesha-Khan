import { Link } from 'react-router-dom'
import { IconPhone, IconMail, IconLocation, IconClock, IconFacebook, IconInstagram, IconYoutube } from './icons'
import { site } from '../siteConfig'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy-950 text-white/70">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-gold-500 font-heading text-lg font-bold text-navy-900">
              EK
            </span>
            <span className="font-heading text-white">
              <span className="block text-base font-bold">Ebay With</span>
              <span className="-mt-1 block text-sm font-semibold text-gold-400">Ayesha Khan</span>
            </span>
          </div>
          <p className="mt-4 text-sm leading-relaxed">
            Practical eBay, dropshipping &amp; ecommerce short courses that turn beginners into
            confident online sellers — trusted by students and companies alike.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href={site.social.facebook}
              aria-label="Facebook"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-navy-900"
            >
              <IconFacebook />
            </a>
            <a
              href={site.social.instagram}
              aria-label="Instagram"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-navy-900"
            >
              <IconInstagram />
            </a>
            <a
              href={site.social.youtube}
              aria-label="YouTube"
              className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-gold-500 hover:text-navy-900"
            >
              <IconYoutube />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Quick Links
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-gold-400">Home</Link></li>
            <li><Link to="/courses" className="hover:text-gold-400">Courses</Link></li>
            <li><Link to="/services" className="hover:text-gold-400">Our Services</Link></li>
            <li><Link to="/about" className="hover:text-gold-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-gold-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Our Courses
          </h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/courses" className="hover:text-gold-400">eBay Selling Fundamentals</Link></li>
            <li><Link to="/courses" className="hover:text-gold-400">Dropshipping Mastery</Link></li>
            <li><Link to="/courses" className="hover:text-gold-400">Product Research &amp; Sourcing</Link></li>
            <li><Link to="/courses" className="hover:text-gold-400">Ecommerce Store Growth</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-white">
            Get In Touch
          </h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li className="flex items-start gap-2.5">
              <IconPhone width={18} height={18} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={`tel:${site.phoneDial}`} className="hover:text-gold-400">{site.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconMail width={18} height={18} className="mt-0.5 shrink-0 text-gold-400" />
              <a href={`mailto:${site.email}`} className="hover:text-gold-400">{site.email}</a>
            </li>
            <li className="flex items-start gap-2.5">
              <IconLocation width={18} height={18} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{site.address}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <IconClock width={18} height={18} className="mt-0.5 shrink-0 text-gold-400" />
              <span>{site.hours}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-5 py-5 text-xs sm:flex-row lg:px-8">
          <p>© {year} Ebay With Ayesha Khan. All rights reserved.</p>
          <p>Empowering students &amp; companies to sell online with confidence.</p>
        </div>
      </div>
    </footer>
  )
}
