// Shared building blocks for the site-wide look introduced on the Home page:
// pill eyebrows, headings with a green highlighted word, accent cards with a
// coloured top border + glow + tinted shadow, and numbered step cards.
import { Link } from 'react-router-dom'
import { IconArrowRight, IconAward, IconPlus } from './icons'
import { accentAt, courseAccent, formatPostDate } from './uiTokens'

/* ── Typography ───────────────────────────────────────────────────────── */

// Green highlighted word(s) with a hand-drawn underline swoosh.
export function Highlight({ children }) {
  return (
    <span className="relative inline-block text-emerald-500">
      {children}
      <svg
        aria-hidden="true"
        viewBox="0 0 200 20"
        preserveAspectRatio="none"
        className="absolute -bottom-2 left-0 h-3 w-full text-emerald-400"
      >
        <path d="M3 14 C 50 4, 140 2, 197 9" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      </svg>
    </span>
  )
}

export function Sparkle({ className = '' }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 40 40" className={`pointer-events-none h-8 w-8 ${className}`}>
      <g stroke="currentColor" strokeWidth="3.5" strokeLinecap="round">
        <path d="M20 4v9" />
        <path d="M6 14l7 5" />
        <path d="M34 14l-7 5" />
      </g>
    </svg>
  )
}

export function Eyebrow({ icon: Icon = IconAward, children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full bg-brand-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 ${className}`}
    >
      {Icon && <Icon width={15} height={15} />} {children}
    </span>
  )
}

/** Pill eyebrow + heading whose `highlight` part is green; centred ones get sparkles. */
export function SectionHeading({ eyebrow, icon, title, highlight, desc, center = false, as: Tag = 'h2' }) {
  return (
    <div className={center ? 'relative mx-auto max-w-3xl text-center' : 'max-w-2xl'}>
      {eyebrow && <Eyebrow icon={icon}>{eyebrow}</Eyebrow>}
      <Tag className="relative mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
        {center && <Sparkle className="absolute -top-3 -left-6 hidden -rotate-12 text-emerald-400 sm:block" />}
        {title} {highlight && <Highlight>{highlight}</Highlight>}
        {center && <Sparkle className="absolute -top-3 -right-6 hidden rotate-12 text-emerald-400 sm:block" />}
      </Tag>
      {desc && <p className="mt-5 text-base leading-relaxed text-slate-600">{desc}</p>}
    </div>
  )
}

/* ── Page hero (light, used by inner pages) ───────────────────────────── */
export function PageHeroLight({ eyebrow, icon, title, highlight, subtitle, children }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-brand-50 via-white to-gold-50">
      <div className="pointer-events-none absolute -top-32 -right-20 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-gold-100/60 blur-3xl" />
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute top-0 right-0 hidden h-64 w-64 [mask-image:radial-gradient(circle_at_top_right,black_15%,transparent_70%)] sm:block"
      />
      <div className="relative mx-auto max-w-4xl px-5 py-14 text-center sm:py-16 lg:px-8 lg:py-20">
        {eyebrow && <Eyebrow icon={icon}>{eyebrow}</Eyebrow>}
        <h1 className="mt-5 font-heading text-3xl leading-[1.15] font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
          {title} {highlight && <Highlight>{highlight}</Highlight>}
        </h1>
        {subtitle && <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

/* ── Cards ────────────────────────────────────────────────────────────── */

/** Card with coloured top border, corner glow and tinted shadow. */
export function AccentCard({ accent, className = '', children, as: Tag = 'div', ...rest }) {
  return (
    <Tag
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-t-4 border-slate-200 bg-gradient-to-b from-white to-slate-50/60 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl sm:p-7 ${accent.border} ${accent.shadow} ${className}`}
      {...rest}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full opacity-60 blur-3xl transition-opacity duration-300 group-hover:opacity-100 ${accent.glow}`}
      />
      {children}
    </Tag>
  )
}

export function IconTile({ accent, icon: Icon, size = 'md' }) {
  const s = size === 'sm' ? 'h-10 w-10 rounded-xl' : 'h-12 w-12 rounded-2xl'
  return (
    <span
      className={`relative grid shrink-0 place-items-center text-white shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 ${s} ${accent.tile}`}
    >
      <Icon width={size === 'sm' ? 19 : 22} height={size === 'sm' ? 19 : 22} />
    </span>
  )
}

export function CourseCard({ course: c }) {
  const accent = courseAccent(c.slug)
  return (
    <AccentCard as={Link} to={`/courses/${c.slug}/`} accent={accent} aria-label={`${c.title}: view details`}>
      <div className="relative flex items-start justify-between gap-3">
        <IconTile accent={accent} icon={c.icon} />
        {c.tag && (
          <span className="rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-[11px] font-semibold text-slate-600 backdrop-blur">
            {c.tag}
          </span>
        )}
      </div>
      <h3 className="relative mt-6 font-heading text-xl font-bold tracking-tight text-navy-900">{c.title}</h3>
      <p className="relative mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">{c.desc}</p>
      <p className="relative mt-5 text-xs text-slate-500">
        {c.level} · {c.duration} · {c.mode}
      </p>
      <div className="relative mt-5 flex items-center justify-between border-t border-slate-200/70 pt-5">
        <span className="font-heading text-lg font-bold text-navy-900">{c.fee}</span>
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600">
          View details
          <IconArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </AccentCard>
  )
}

export function ServiceCard({ service: s, index }) {
  const accent = accentAt(index)
  return (
    <AccentCard as={Link} to={`/services/${s.slug}/`} accent={accent} aria-label={`${s.title}: view details`}>
      <IconTile accent={accent} icon={s.icon} />
      <h3 className="relative mt-6 font-heading text-lg font-bold tracking-tight text-navy-900">{s.title}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-slate-600">{s.desc}</p>
      <span className="relative mt-5 inline-flex items-center gap-1.5 border-t border-slate-200/70 pt-5 text-sm font-semibold text-brand-600">
        View details
        <IconArrowRight width={15} height={15} className="transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </AccentCard>
  )
}

const stepColors = [
  'from-brand-500 to-brand-700 shadow-brand-600/30',
  'from-sky-400 to-sky-600 shadow-sky-500/30',
  'from-violet-400 to-violet-600 shadow-violet-500/30',
  'from-emerald-400 to-emerald-600 shadow-emerald-500/30',
]

/** Numbered step cards joined by a dashed line on large screens. */
export function StepCards({ steps }) {
  return (
    <div className="relative grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      <div className="pointer-events-none absolute top-9 right-[12%] left-[12%] hidden border-t-2 border-dashed border-slate-200 lg:block" />
      {steps.map((s, i) => (
        <div
          key={s.title}
          className="relative rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-lg shadow-slate-900/[0.04] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
        >
          <span
            className={`mx-auto -mt-1 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br font-heading text-lg font-bold text-white shadow-lg ${stepColors[i % stepColors.length]}`}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <h3 className="mt-5 font-heading text-lg font-bold text-navy-900">{s.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.desc}</p>
        </div>
      ))}
    </div>
  )
}

/* ── FAQ accordion (native <details>, no JS) ─────────────────────────── */
export function FaqList({ faqs }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 open:border-brand-200 open:shadow-lg open:shadow-brand-600/10 hover:shadow-md"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-heading text-[15px] font-semibold text-navy-900 sm:px-6 sm:py-5 sm:text-base [&::-webkit-details-marker]:hidden">
            {f.q}
            <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600 transition-all duration-300 group-open:rotate-45 group-open:bg-brand-600 group-open:text-white">
              <IconPlus width={14} height={14} />
            </span>
          </summary>
          <p className="px-5 pb-5 text-sm leading-relaxed text-slate-600 sm:px-6">{f.a}</p>
        </details>
      ))}
    </div>
  )
}

/** Light detail-page header with breadcrumb, accent icon, title and description. */
export function DetailHero({ crumbs, accent, icon: Icon, tag, title, desc, children, aside }) {
  return (
    <section className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-brand-50 via-white to-gold-50">
      <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
      <div className={`pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full opacity-60 blur-3xl ${accent.glow}`} />
      <div
        className={`relative mx-auto grid max-w-7xl gap-10 px-5 py-10 sm:py-12 lg:px-8 lg:py-16 ${
          aside ? 'lg:grid-cols-[minmax(0,1fr)_380px] lg:items-start' : ''
        }`}
      >
        <div className="min-w-0">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            {crumbs.map((c, i) => (
              <span key={c.label} className="flex items-center gap-1.5">
                {i > 0 && <span>/</span>}
                {c.to ? (
                  <Link to={c.to} className="hover:text-brand-700">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-semibold text-navy-900">{c.label}</span>
                )}
              </span>
            ))}
          </nav>
          <div className="mt-6 flex items-center gap-4">
            <span className={`grid h-14 w-14 shrink-0 place-items-center rounded-2xl text-white shadow-lg sm:h-16 sm:w-16 ${accent.tile}`}>
              <Icon width={28} height={28} />
            </span>
            <div className="min-w-0">
              {tag && (
                <span className="mb-1.5 inline-block rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold tracking-widest text-white uppercase">
                  {tag}
                </span>
              )}
              <h1 className="font-heading text-3xl leading-tight font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
                {title}
              </h1>
            </div>
          </div>
          {desc && <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">{desc}</p>}
          {children}
        </div>
        {aside}
      </div>
    </section>
  )
}

/* ── Blog card ───────────────────────────────────────────────────────── */
export function BlogCard({ post, featured = false }) {
  return (
    <Link
      to={`/blog/${post.slug}/`}
      aria-label={`Read article: ${post.title}`}
      className={`group flex h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl ${
        featured ? 'flex-col md:flex-row' : 'flex-col'
      }`}
    >
      <div
        className={`relative flex shrink-0 items-center justify-center overflow-hidden bg-gradient-to-br ${post.thumb} ${
          featured ? 'h-44 md:h-auto md:w-2/5' : 'h-36'
        }`}
      >
        <div className="bg-dot-grid pointer-events-none absolute inset-0 opacity-20" />
        <span
          className={`relative grid place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 ${
            featured ? 'h-20 w-20' : 'h-14 w-14'
          }`}
        >
          <post.icon width={featured ? 36 : 26} height={featured ? 36 : 26} />
        </span>
        <span className="absolute top-3 left-3 rounded-full bg-white/90 px-3 py-1 text-[10px] font-bold tracking-wide text-navy-900 uppercase">
          {post.category}
        </span>
        {featured && (
          <span className="absolute top-3 right-3 rounded-full bg-emerald-500 px-3 py-1 text-[10px] font-bold tracking-wide text-white uppercase">
            Latest
          </span>
        )}
      </div>
      <div className={`flex flex-1 flex-col ${featured ? 'p-6 sm:p-8' : 'p-6'}`}>
        <h2
          className={`font-heading leading-snug font-bold text-navy-900 transition-colors group-hover:text-brand-700 ${
            featured ? 'text-2xl sm:text-3xl' : 'text-lg'
          }`}
        >
          {post.title}
        </h2>
        <p className={`mt-3 flex-1 leading-relaxed text-slate-600 ${featured ? 'text-base' : 'line-clamp-3 text-sm'}`}>{post.excerpt}</p>
        <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
          <span>{formatPostDate(post.date)}</span>
          <span className="h-1 w-1 rounded-full bg-slate-300" />
          <span>{post.readTime}</span>
          <span className="ml-auto inline-flex items-center gap-1 font-semibold text-brand-600">
            Read <IconArrowRight width={14} height={14} className="transition-transform group-hover:translate-x-1" />
          </span>
        </div>
      </div>
    </Link>
  )
}
