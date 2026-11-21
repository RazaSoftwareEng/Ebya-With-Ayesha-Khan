import { Link } from 'react-router-dom'
import { IconArrowRight, IconWhatsApp } from './icons'
import { site, whatsappLink } from '../siteConfig'
import Reveal from './Reveal'

// Closing call-to-action box (same look as the end of the Home page).
export default function CTASection({
  title = 'Ready to start your ecommerce journey?',
  subtitle = 'Reach out now and our team will guide you to the right course for the next batch.',
}) {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-600 via-brand-700 to-navy-900 px-6 py-12 text-center text-white shadow-2xl shadow-brand-600/25 sm:px-14 sm:py-14">
          <div className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-emerald-400/30 blur-2xl" />
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
          <h2 className="relative mx-auto max-w-2xl font-heading text-2xl font-bold tracking-tight sm:text-4xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-base text-white/80">{subtitle}</p>
          <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-emerald-500 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/30 transition-transform duration-300 hover:-translate-y-0.5 sm:w-auto"
            >
              <IconWhatsApp width={18} height={18} /> Chat on WhatsApp
            </a>
            <Link
              to="/contact/"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white/10 sm:w-auto"
            >
              Contact us <IconArrowRight width={16} height={16} />
            </Link>
          </div>
          <p className="relative mt-5 text-sm text-white/60">or call {site.phoneDisplay}</p>
        </Reveal>
      </div>
    </section>
  )
}
