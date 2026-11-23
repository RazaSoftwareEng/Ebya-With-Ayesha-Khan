import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import ayeshaAvatar from '../components/assets/ayesha-avatar.webp'
import {
  IconArrowLeft,
  IconArrowRight,
  IconCheck,
  IconClock,
  IconFacebook,
  IconLinkedin,
  IconWhatsApp,
} from '../components/icons'
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts'
import { courses } from '../data/courses'
import { site, whatsappLink } from '../siteConfig'
import { pageUrl } from '../seoUtils'
import { renderInline } from '../components/richText'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

const slugify = (text) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

// Which course to promote next to an article, by its category.
const categoryCourse = {
  Shopify: 'shopify',
  'TikTok Shop': 'tiktok-shop',
  Etsy: 'etsy',
  'AI Tools': 'ai',
  'Digital Marketing': 'digital-marketing',
  'Dropshipping Basics': 'dropshipping',
}
const courseForPost = (post) =>
  courses.find((c) => c.slug === (categoryCourse[post.category] ?? 'ebay')) ?? courses[0]

function SectionHeading({ block, number }) {
  const Icon = block.icon
  return (
    <h2
      id={slugify(block.text)}
      className="flex scroll-mt-28 items-center gap-4 font-heading text-2xl font-bold tracking-tight text-navy-900 sm:text-[1.7rem]"
    >
      <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
        {Icon ? <Icon width={20} height={20} /> : <span className="text-sm font-bold">{number}</span>}
        <span className="absolute -top-2 -right-2 grid h-6 min-w-6 place-items-center rounded-full bg-white px-1 text-[10px] font-bold text-brand-700 shadow ring-1 ring-brand-100">
          {String(number).padStart(2, '0')}
        </span>
      </span>
      <span>{block.text}</span>
    </h2>
  )
}

function Checklist({ items }) {
  return (
    <ul className="mt-6 grid gap-3 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-5 sm:p-6">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-[16px] leading-7 text-slate-700">
          <span className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-emerald-500 text-white shadow-sm shadow-emerald-500/30">
            <IconCheck width={13} height={13} strokeWidth={2.6} />
          </span>
          <span>{renderInline(item)}</span>
        </li>
      ))}
    </ul>
  )
}

function InlineCourseCard({ course }) {
  return (
    <aside className="my-12 overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 via-white to-gold-50 p-6 shadow-lg shadow-brand-600/5 sm:flex sm:items-center sm:gap-6 sm:p-7">
      <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-brand-600 text-white shadow-lg shadow-brand-600/25">
        <course.icon width={24} height={24} />
      </span>
      <div className="mt-4 flex-1 sm:mt-0">
        <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Learn this hands-on</p>
        <p className="mt-1 font-heading text-lg font-bold text-navy-900">{course.title}</p>
        <p className="mt-1 text-sm text-slate-600">
          {course.duration} · {course.mode} · {course.fee}
        </p>
      </div>
      <Link
        to={`/courses/${course.slug}/`}
        className="mt-5 inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand-600/25 transition-all hover:-translate-y-0.5 hover:bg-brand-700 sm:mt-0"
      >
        View course <IconArrowRight width={15} height={15} />
      </Link>
    </aside>
  )
}

function ShareButtons({ url, title }) {
  const [copied, setCopied] = useState(false)
  const enc = encodeURIComponent
  const links = [
    { label: 'Share on WhatsApp', Icon: IconWhatsApp, href: `https://wa.me/?text=${enc(`${title} ${url}`)}`, cls: 'hover:bg-[#25D366]' },
    { label: 'Share on Facebook', Icon: IconFacebook, href: `https://www.facebook.com/sharer/sharer.php?u=${enc(url)}`, cls: 'hover:bg-[#1877F2]' },
    { label: 'Share on LinkedIn', Icon: IconLinkedin, href: `https://www.linkedin.com/sharing/share-offsite/?url=${enc(url)}`, cls: 'hover:bg-[#0A66C2]' },
  ]
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(url)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      // clipboard blocked — nothing to do
    }
  }
  return (
    <div className="flex items-center gap-2">
      {links.map(({ label, Icon, href, cls }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-600 transition-all hover:-translate-y-0.5 hover:border-transparent hover:text-white ${cls}`}
        >
          <Icon width={15} height={15} />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="h-9 rounded-full border border-slate-200 bg-white px-3.5 text-xs font-semibold text-slate-600 transition-all hover:-translate-y-0.5 hover:border-brand-200 hover:text-brand-700"
      >
        {copied ? 'Copied ✓' : 'Copy link'}
      </button>
    </div>
  )
}

/** Highlights the section currently being read in the table of contents. */
function useActiveHeading(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!els.length) return
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
      },
      { rootMargin: '-110px 0px -65% 0px' },
    )
    els.forEach((el) => obs.observe(el))
    return () => obs.disconnect()
  }, [ids])
  return active
}

export default function BlogDetail() {
  const { slug } = useParams()
  const post = getBlogPostBySlug(slug)

  if (!post) {
    return (
      <>
        <Seo
          title="Article Not Found"
          description="The article you're looking for doesn't exist or may have been moved."
          path={`/blog/${slug ?? ''}`}
          noindex
        />
        <section className="bg-white py-24 text-center">
          <div className="mx-auto max-w-md px-5">
            <h1 className="font-heading text-2xl font-extrabold text-navy-900">Article Not Found</h1>
            <p className="mt-3 text-slate-600">The article you're looking for doesn't exist or may have been moved.</p>
            <Link
              to="/blog/"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              <IconArrowLeft width={16} height={16} /> Back to Blog
            </Link>
          </div>
        </section>
      </>
    )
  }

  return <Article key={post.slug} post={post} />
}

function Article({ post }) {
  const related = getRelatedPosts(post.slug)
  const course = courseForPost(post)
  const url = pageUrl(`/blog/${post.slug}`)

  const headings = post.body.filter((b) => b.type === 'h2')
  const [ids] = useState(() => headings.map((h) => slugify(h.text)))
  const active = useActiveHeading(ids)

  // Put the inline course card just before the middle section heading.
  const midHeading = headings[Math.floor(headings.length / 2)]
  const [lead, ...rest] = post.body[0]?.type === 'p' ? post.body : [null, ...post.body]

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: post.title,
      description: post.excerpt,
      inLanguage: post.lang ?? 'en',
      author: { '@type': 'Person', name: post.author },
      publisher: { '@type': 'Organization', name: site.name },
      datePublished: post.date,
      mainEntityOfPage: url,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: pageUrl('/blog') },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ]

  let h2Count = 0

  return (
    <>
      <Seo
        title={post.title}
        description={post.excerpt}
        keywords={`${post.title}, eBay Pakistan, dropshipping Pakistan, ecommerce blog Lahore`}
        path={`/blog/${post.slug}`}
        type="article"
        jsonLd={jsonLd}
      />

      {/* ─── Header ───────────────────────────────────────────── */}
      <header className="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-brand-50 via-white to-gold-50">
        <div className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-brand-100/60 blur-3xl" />
        <div className="relative mx-auto max-w-6xl px-5 pt-10 pb-12 lg:px-8 lg:pt-14 lg:pb-16">
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <Link to="/" className="hover:text-brand-700">Home</Link>
            <span>/</span>
            <Link to="/blog/" className="hover:text-brand-700">Blog</Link>
            <span>/</span>
            <span className="text-slate-700">{post.category}</span>
          </nav>

          <div className="mt-6 flex items-center gap-3">
            <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br text-white shadow-lg ${post.thumb}`}>
              <post.icon width={20} height={20} />
            </span>
            <span className="rounded-full bg-brand-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
              {post.category}
            </span>
          </div>

          <h1 className="mt-5 max-w-4xl font-heading text-3xl leading-[1.15] font-bold tracking-tight text-navy-900 sm:text-4xl lg:text-5xl">
            {post.title}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">{post.excerpt}</p>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <img
                src={ayeshaAvatar}
                alt={post.author}
                width={48}
                height={48}
                className="h-12 w-12 rounded-full object-cover ring-4 ring-white shadow"
              />
              <div>
                <p className="text-sm font-bold text-navy-900">{post.author}</p>
                <p className="flex flex-wrap items-center gap-x-3 text-xs text-slate-500">
                  <span>{formatDate(post.date)}</span>
                  <span className="flex items-center gap-1">
                    <IconClock width={13} height={13} /> {post.readTime}
                  </span>
                </p>
              </div>
            </div>
            <ShareButtons url={url} title={post.title} />
          </div>
        </div>
      </header>

      {/* ─── Body + sidebar ───────────────────────────────────── */}
      <section className="bg-white py-12 lg:py-16">
        <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:px-8">
          <article className="min-w-0">
            {/* Mobile table of contents */}
            {headings.length > 2 && (
              <details className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-5 lg:hidden">
                <summary className="cursor-pointer font-heading text-sm font-bold text-navy-900">
                  In this article ({headings.length} sections)
                </summary>
                <ol className="mt-4 space-y-2 text-sm">
                  {headings.map((h, i) => (
                    <li key={h.text}>
                      <a href={`#${ids[i]}`} className="flex gap-2 text-slate-600 hover:text-brand-700">
                        <span className="font-bold text-brand-600">{String(i + 1).padStart(2, '0')}</span> {h.text}
                      </a>
                    </li>
                  ))}
                </ol>
              </details>
            )}

            {lead && (
              <p className="border-l-4 border-brand-500 pl-5 text-lg leading-8 font-medium text-navy-900 sm:text-xl sm:leading-9">
                {renderInline(lead.text)}
              </p>
            )}

            <div className="mt-10">
              {rest.map((block, i) => {
                if (block.type === 'h2') {
                  h2Count += 1
                  return (
                    <div key={i} className={h2Count === 1 ? '' : 'mt-14'}>
                      {block === midHeading && headings.length > 3 && <InlineCourseCard course={course} />}
                      <SectionHeading block={block} number={h2Count} />
                    </div>
                  )
                }
                if (block.type === 'ul') return <Checklist key={i} items={block.items} />
                return (
                  <p key={i} className="mt-5 text-[17px] leading-8 text-slate-700">
                    {renderInline(block.text)}
                  </p>
                )
              })}
            </div>

            {/* Author box */}
            <div className="mt-14 flex flex-col gap-5 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-6 shadow-lg shadow-slate-900/[0.04] sm:flex-row sm:items-center sm:p-8">
              <img
                src={ayeshaAvatar}
                alt={post.author}
                width={72}
                height={72}
                loading="lazy"
                className="h-18 w-18 shrink-0 rounded-full object-cover ring-4 ring-white shadow-md"
              />
              <div className="flex-1">
                <p className="text-xs font-bold uppercase tracking-wider text-brand-700">Written by</p>
                <p className="mt-1 font-heading text-lg font-bold text-navy-900">{post.author}</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">
                  Founder &amp; lead mentor at {site.name}. Teaches practical eBay and ecommerce selling to
                  students in Lahore and online.
                </p>
              </div>
              <a
                href={whatsappLink(`Hi! I just read your article: ${post.title}. I have a question.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all hover:-translate-y-0.5"
              >
                <IconWhatsApp width={17} height={17} /> Ask a question
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
              <Link to="/blog/" className="flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
                <IconArrowLeft width={16} height={16} /> All articles
              </Link>
              <ShareButtons url={url} title={post.title} />
            </div>
          </article>

          {/* Desktop sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-28 space-y-6">
              {headings.length > 0 && (
                <nav aria-label="In this article" className="rounded-3xl border border-slate-200 bg-white p-5 shadow-lg shadow-slate-900/[0.04]">
                  <p className="font-heading text-sm font-bold text-navy-900">In this article</p>
                  <ol className="mt-4 space-y-1 border-l-2 border-slate-100">
                    {headings.map((h, i) => {
                      const on = active === ids[i]
                      return (
                        <li key={h.text}>
                          <a
                            href={`#${ids[i]}`}
                            className={`-ml-0.5 block border-l-2 py-1.5 pl-4 text-[13px] leading-snug transition-colors ${
                              on
                                ? 'border-brand-600 font-semibold text-brand-700'
                                : 'border-transparent text-slate-500 hover:text-navy-900'
                            }`}
                          >
                            {h.text}
                          </a>
                        </li>
                      )
                    })}
                  </ol>
                </nav>
              )}

              <div className="relative overflow-hidden rounded-3xl border border-t-4 border-slate-200 border-t-brand-600 bg-white p-6 shadow-xl shadow-brand-600/10">
                <div className="pointer-events-none absolute -top-14 -right-14 h-40 w-40 rounded-full bg-brand-100 opacity-70 blur-3xl" />
                <span className="relative grid h-11 w-11 place-items-center rounded-xl bg-brand-600 text-white shadow-lg shadow-brand-600/30">
                  <course.icon width={20} height={20} />
                </span>
                <p className="relative mt-4 text-xs font-bold uppercase tracking-wider text-brand-700">Recommended course</p>
                <p className="relative mt-1 font-heading text-lg font-bold text-navy-900">{course.title}</p>
                <p className="relative mt-1 text-sm text-slate-600">
                  {course.duration} · {course.fee}
                </p>
                <Link
                  to={`/courses/${course.slug}/`}
                  className="relative mt-5 flex items-center justify-center gap-2 rounded-full bg-brand-600 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-700"
                >
                  View course <IconArrowRight width={15} height={15} />
                </Link>
                <a
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-2.5 flex items-center justify-center gap-2 rounded-full border border-slate-200 py-2.5 text-sm font-semibold text-navy-900 transition-colors hover:border-slate-300"
                >
                  <IconWhatsApp width={16} height={16} className="text-[#25D366]" /> WhatsApp us
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ─── Related ──────────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="bg-gradient-to-b from-slate-50 to-white py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-5 lg:px-8">
            <Reveal className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="inline-flex rounded-full bg-brand-100/70 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700">
                  Keep reading
                </span>
                <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-navy-900">More from the blog</h2>
              </div>
              <Link to="/blog/" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:text-brand-700">
                All articles <IconArrowRight width={16} height={16} />
              </Link>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal key={r.slug} delay={i * 80} className="h-full">
                  <Link
                    to={`/blog/${r.slug}/`}
                    className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg shadow-slate-900/[0.04] transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
                  >
                    <div className={`relative flex h-28 items-center justify-center bg-gradient-to-br ${r.thumb}`}>
                      <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white/15 text-white backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                        <r.icon width={22} height={22} />
                      </span>
                      <span className="absolute top-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-navy-900">
                        {r.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-heading text-base leading-snug font-bold text-navy-900 group-hover:text-brand-700">{r.title}</h3>
                      <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-slate-600">{r.excerpt}</p>
                      <span className="mt-4 flex items-center gap-1.5 text-xs text-slate-500">
                        <IconClock width={13} height={13} /> {r.readTime}
                        <IconArrowRight width={15} height={15} className="ml-auto text-brand-600 transition-transform group-hover:translate-x-1" />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
