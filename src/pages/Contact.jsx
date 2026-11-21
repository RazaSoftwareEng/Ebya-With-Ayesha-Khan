import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import { AccentCard, Highlight, IconTile } from '../components/ui'
import { accentAt, btnGreen, btnOutline } from '../components/uiTokens'
import {
  IconArrowRight,
  IconChat,
  IconCheck,
  IconClock,
  IconLocation,
  IconMail,
  IconPhone,
  IconWhatsApp,
} from '../components/icons'
import { site, whatsappLink, web3formsKey } from '../siteConfig'
import { useHydrated } from '../useHydrated'
import { courses } from '../data/courses'

const contactCards = [
  {
    icon: IconPhone,
    title: 'Call us',
    lines: [site.phoneDisplay],
    href: `tel:${site.phoneDial}`,
    cta: 'Call now',
  },
  {
    icon: IconWhatsApp,
    title: 'WhatsApp',
    lines: [site.whatsappDisplay, 'Fastest way to reach us'],
    href: whatsappLink(),
    cta: 'Message us',
    external: true,
  },
  {
    icon: IconMail,
    title: 'Email us',
    lines: [site.email],
    href: `mailto:${site.email}`,
    cta: 'Send email',
  },
  {
    icon: IconLocation,
    title: 'Visit us',
    lines: [site.address, site.hours],
  },
]

const inputCls =
  'mt-1.5 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm shadow-sm outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-100'

const emptyForm = { name: '', email: '', phone: '', course: '', message: '' }

export default function Contact() {
  const [searchParams] = useSearchParams()
  const hydrated = useHydrated()
  const prefilledCourse = hydrated
    ? courses.find((c) => c.slug === searchParams.get('course'))?.title || ''
    : ''

  const [form, setForm] = useState(emptyForm)
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
      const course = form.course || prefilledCourse || 'Not specified'
      const text = [
        '*New Enquiry — Website Contact Form*',
        '',
        `*Name:* ${form.name.trim()}`,
        `*Phone:* ${form.phone.trim()}`,
        `*Email:* ${form.email.trim()}`,
        `*Interested In:* ${course}`,
        '',
        `*Message:* ${form.message.trim()}`,
      ].join('\n')
      // Email copy via Web3Forms — arrives even if the visitor never taps Send in WhatsApp.
      if (web3formsKey) {
        fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          keepalive: true,
          body: JSON.stringify({
            access_key: web3formsKey,
            subject: `New Website Enquiry — ${form.name.trim()} (${course})`,
            from_name: 'Ayesha Khan Official Website',
            replyto: form.email.trim(),
            Name: form.name.trim(),
            Phone: form.phone.trim(),
            Email: form.email.trim(),
            'Interested In': course,
            Message: form.message.trim(),
          }),
        }).catch(() => {})
      }

      const link = whatsappLink(text)
      // Opens WhatsApp (app on mobile, WhatsApp Web on desktop) with the details pre-typed.
      // (No "noopener" feature here: with it window.open always returns null, which would
      // trigger the fallback and open WhatsApp twice.)
      const win = window.open(link, '_blank')
      if (win) win.opener = null
      else window.location.href = link
      setSubmitted(link)
      setForm(emptyForm)
    }
  }

  return (
    <>
      <Seo
        title="Contact Us – Enroll in eBay Courses in Lahore"
        description="Get in touch with Ayesha Khan Official for course enrollment, corporate training or general questions, by phone, WhatsApp, email or our contact form."
        keywords="contact Ayesha Khan Official, enroll eBay course Lahore, eBay institute Lahore address, eBay course enquiry Pakistan, ecommerce training Lahore contact, eBay academy Paragon City"
        path="/contact"
      />

      <PageHero
        eyebrow="Contact us"
        icon={IconChat}
        title="Let's start your"
        highlight="ecommerce journey."
        subtitle="Have a question about our courses or services? Reach out now. Our team responds quickly and is ready to help."
      />

      <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {contactCards.map((c, i) => (
              <Reveal key={c.title} delay={i * 70} className="h-full">
                <AccentCard accent={accentAt(i)} className="text-center">
                  <span className="relative mx-auto">
                    <IconTile accent={accentAt(i)} icon={c.icon} />
                  </span>
                  <h3 className="relative mt-5 font-heading text-lg font-bold text-navy-900">{c.title}</h3>
                  <div className="relative mt-2 flex-1 space-y-1">
                    {c.lines.map((l) => (
                      <p key={l} className="text-sm break-words text-slate-600">
                        {l}
                      </p>
                    ))}
                  </div>
                  {c.href && (
                    <a
                      href={c.href}
                      target={c.external ? '_blank' : undefined}
                      rel={c.external ? 'noopener noreferrer' : undefined}
                      className="relative mt-5 inline-flex items-center justify-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-semibold text-brand-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-200"
                    >
                      {c.cta} <IconArrowRight width={13} height={13} />
                    </a>
                  )}
                </AccentCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-5">
            <Reveal className="lg:col-span-3">
              <div className="relative overflow-hidden rounded-[2rem] border border-t-4 border-slate-200 border-t-brand-600 bg-white p-6 shadow-xl shadow-brand-600/10 sm:p-10">
                <div className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-brand-100 opacity-60 blur-3xl" />
                <h2 className="relative font-heading text-2xl font-bold tracking-tight text-navy-900 sm:text-3xl">
                  Send us a <Highlight>message</Highlight>
                </h2>
                <p className="relative mt-4 text-sm text-slate-600">
                  Fill out the form and WhatsApp opens with your details ready to send. We usually reply within a
                  few hours.
                </p>

                {submitted && (
                  <div className="relative mt-6 flex items-start gap-3 rounded-2xl bg-emerald-50 p-4 text-sm text-emerald-800 ring-1 ring-emerald-200">
                    <IconCheck width={18} height={18} className="mt-0.5 shrink-0" />
                    <span>
                      Almost done! WhatsApp has opened with your details. Just tap <b>Send</b> there so we
                      receive them. WhatsApp didn&apos;t open?{' '}
                      <a href={submitted} target="_blank" rel="noopener noreferrer" className="font-bold underline">
                        Click here
                      </a>
                      .
                    </span>
                  </div>
                )}

                <form className="relative mt-6 space-y-5" noValidate onSubmit={handleSubmit}>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-semibold text-navy-900">
                        Full name
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        autoComplete="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        className={inputCls}
                      />
                      {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
                    </div>
                    <div>
                      <label htmlFor="phone" className="text-sm font-semibold text-navy-900">
                        Phone number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="03XX-XXXXXXX"
                        className={inputCls}
                      />
                      {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="text-sm font-semibold text-navy-900">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={inputCls}
                    />
                    {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="course" className="text-sm font-semibold text-navy-900">
                      I&apos;m interested in
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={form.course || prefilledCourse}
                      onChange={handleChange}
                      className={inputCls}
                    >
                      <option value="">Select an option</option>
                      {courses.map((c) => (
                        <option key={c.slug}>{c.title}</option>
                      ))}
                      <option>Corporate / Team Training</option>
                      <option>Something Else</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="text-sm font-semibold text-navy-900">
                      Your message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us a bit about your goals or questions..."
                      className={`${inputCls} resize-none`}
                    />
                    {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
                  </div>

                  <button type="submit" className={`w-full sm:w-auto sm:px-10 ${btnGreen}`}>
                    <IconWhatsApp width={18} height={18} /> Send via WhatsApp
                  </button>
                </form>
              </div>
            </Reveal>

            <Reveal delay={80} className="lg:col-span-2">
              <div className="flex h-full flex-col gap-5">
                <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-gradient-to-br from-brand-50 via-white to-gold-50 p-6 shadow-xl shadow-brand-600/5 sm:p-8">
                  <div
                    aria-hidden="true"
                    className="bg-dot-grid pointer-events-none absolute top-0 right-0 h-40 w-40 [mask-image:radial-gradient(circle_at_top_right,black_20%,transparent_70%)]"
                  />
                  <h3 className="relative font-heading text-xl font-bold text-navy-900">Prefer to talk directly?</h3>
                  <p className="relative mt-2 text-sm text-slate-600">Our team is available and ready to answer your questions.</p>

                  <div className="relative mt-6 space-y-4">
                    {[
                      { icon: IconClock, label: 'Business hours', value: site.hours, a: accentAt(0) },
                      { icon: IconLocation, label: 'Our location', value: site.address, a: accentAt(1) },
                    ].map((r) => (
                      <div key={r.label} className="flex items-start gap-3">
                        <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white shadow-md ${r.a.tile}`}>
                          <r.icon width={18} height={18} />
                        </span>
                        <div>
                          <p className="text-sm font-bold text-navy-900">{r.label}</p>
                          <p className="text-sm text-slate-600">{r.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="relative mt-7 flex flex-col gap-3">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnGreen}>
                      <IconWhatsApp width={18} height={18} /> WhatsApp: {site.whatsappDisplay}
                    </a>
                    <a href={`tel:${site.phoneDial}`} className={btnOutline}>
                      <IconPhone width={16} height={16} /> Call: {site.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="min-h-64 flex-1 overflow-hidden rounded-[2rem] border border-slate-200 shadow-xl shadow-slate-900/5">
                  <iframe
                    title={`Map: ${site.address}`}
                    src={`https://www.google.com/maps?q=${encodeURIComponent(site.address)}&output=embed`}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-64 w-full border-0"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
