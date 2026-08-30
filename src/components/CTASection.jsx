import { Link } from 'react-router-dom'
import { IconArrowRight, IconWhatsApp } from './icons'
import { whatsappLink } from '../siteConfig'

export default function CTASection({
  title = 'Ready to Start Your Ecommerce Journey?',
  subtitle = "Don't wait — seats for our next batch are filling fast. Reach out now and our team will guide you to the right course.",
}) {
  return (
    <section className="bg-gradient-to-br from-navy-900 via-navy-800 to-brand-700 text-white">
      <div className="mx-auto max-w-5xl px-5 py-16 text-center lg:px-8">
        <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-white/80">{subtitle}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="flex items-center gap-2 rounded-full bg-gold-500 px-7 py-3.5 text-sm font-bold text-navy-900 shadow-lg shadow-gold-500/30 transition hover:bg-gold-400"
          >
            Contact Us Immediately
            <IconArrowRight />
          </Link>
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-sm font-bold transition hover:bg-white/10"
          >
            <IconWhatsApp width={20} height={20} />
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
