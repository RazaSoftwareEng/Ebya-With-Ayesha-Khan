import { useState } from 'react'
import PageHero from '../components/PageHero'
import {
  IconCheck,
  IconClock,
  IconLocation,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from '../components/icons'
import { site, whatsappLink } from '../siteConfig'

const contactCards = [
  {
    icon: IconPhone,
    title: 'Call Us',
    lines: [site.phoneDisplay],
    href: `tel:${site.phoneDial}`,
    cta: 'Call Now',
  },
  {
    icon: IconWhatsApp,
    title: 'WhatsApp',
    lines: ['Fastest way to reach us'],
    href: whatsappLink(),
    cta: 'Message on WhatsApp',
    external: true,
  },
  {
    icon: IconMail,
    title: 'Email Us',
    lines: [site.email],
    href: `mailto:${site.email}`,
    cta: 'Send Email',
  },
  {
    icon: IconLocation,
    title: 'Visit Us',
    lines: [site.address, site.hours],
  },
]

const initialForm = { name: '', email: '', phone: '', course: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const validate = () => {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Please enter your name.'
    if (!form.email.trim()) {
      errs.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address.'
    }
    if (!form.phone.trim()) errs.phone = 'Please enter your phone number.'
    if (!form.message.trim()) errs.message = 'Please tell us a little about your query.'
    return errs
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    setErrors(errs)
    if (Object.keys(errs).length === 0) {
      setSubmitted(true)
      setForm(initialForm)
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Let's Start Your Ecommerce Journey Today"
        subtitle="Have a question about our courses or services? Reach out now — our team responds quickly and is ready to help."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c) => (
              <div
                key={c.title}
                className="flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-6 text-center"
              >
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-navy-900 text-gold-400">
                  <c.icon width={22} height={22} />
                </div>
                <h3 className="mt-4 font-heading text-base font-bold text-navy-900">{c.title}</h3>
                <div className="mt-2 flex-1 space-y-1">
                  {c.lines.map((l) => (
                    <p key={l} className="text-sm text-slate-600">{l}</p>
                  ))}
                </div>
                {c.href && (
                  <a
                    href={c.href}
                    target={c.external ? '_blank' : undefined}
                    rel={c.external ? 'noopener noreferrer' : undefined}
                    className="mt-4 inline-block rounded-full bg-brand-600 px-4 py-2 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700"
                  >
                    {c.cta}
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <div className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6 sm:p-10">
                <h2 className="font-heading text-2xl font-extrabold text-navy-900">
                  Send Us a Message
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill out the form and we'll get back to you as soon as possible — usually within a
                  few hours.
                </p>

                {submitted && (
                  <div className="mt-6 flex items-start gap-3 rounded-xl bg-green-50 p-4 text-sm text-green-700 ring-1 ring-green-200">
                    <IconCheck width={18} height={18} className="mt-0.5 shrink-0" />
                    <span>
                      Thank you! Your message has been noted. For a faster response, feel free to{' '}
                      <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                        WhatsApp us
                      </a>{' '}
                      right away.
                    </span>
                  </div>
                )}

                <form className="mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-semibold text-navy-900">
                        Full Name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-semibold text-navy-900">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="03XX-XXXXXXX"
                        className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-navy-900">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="course" className="text-sm font-semibold text-navy-900">
                      I'm Interested In
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={form.course}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    >
                      <option value="">Select an option</option>
                      <option>eBay Selling Fundamentals</option>
                      <option>Dropshipping Mastery</option>
                      <option>Product Research & Sourcing</option>
                      <option>Ecommerce Store Growth</option>
                      <option>Corporate Team Training</option>
                      <option>Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-navy-900">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your goals or questions..."
                      className="mt-1.5 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-navy-900 py-3.5 text-sm font-bold text-white transition hover:bg-navy-800 sm:w-auto sm:px-10"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="h-full rounded-3xl bg-navy-900 p-8 text-white">
                <h3 className="font-heading text-lg font-bold">Prefer to Talk Directly?</h3>
                <p className="mt-2 text-sm text-white/75">
                  Our team is available and ready to answer your questions right now.
                </p>

                <div className="mt-6 space-y-4">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-gold-400">
                      <IconClock width={18} height={18} />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Business Hours</p>
                      <p className="text-sm text-white/70">{site.hours}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-gold-400">
                      <IconLocation width={18} height={18} />
                    </span>
                    <div>
                      <p className="text-sm font-bold">Our Location</p>
                      <p className="text-sm text-white/70">{site.address}</p>
                    </div>
                  </div>
                </div>

                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#25D366] py-3.5 text-sm font-bold text-white transition hover:opacity-90"
                >
                  <IconWhatsApp width={20} height={20} /> Chat with Us Instantly
                </a>
                <a
                  href={`tel:${site.phoneDial}`}
                  className="mt-3 flex items-center justify-center gap-2 rounded-xl border-2 border-white/25 py-3.5 text-sm font-bold transition hover:bg-white/10"
                >
                  <IconPhone width={18} height={18} /> {site.phoneDisplay}
                </a>

                <div className="mt-8 rounded-2xl border border-dashed border-white/20 p-5 text-center">
                  <IconLocation width={26} height={26} className="mx-auto text-gold-400" />
                  <p className="mt-2 text-xs text-white/60">
                    Map preview available once the exact studio address is confirmed.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
