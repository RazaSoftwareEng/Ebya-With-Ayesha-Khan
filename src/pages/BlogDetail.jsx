import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo'
import Reveal from '../components/Reveal'
import CTASection from '../components/CTASection'
import { IconArrowLeft, IconArrowRight, IconCheck, IconClock, IconUsers } from '../components/icons'
import { getBlogPostBySlug, getRelatedPosts } from '../data/blogPosts'
import { site } from '../siteConfig'
import { pageUrl } from '../seoUtils'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

// Lets body text use simple [label](url) markup for internal and external links,
// without needing a full markdown renderer or dangerouslySetInnerHTML.
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g

function renderInline(text) {
  const parts = []
  let last = 0
  let match
  let i = 0
  LINK_RE.lastIndex = 0
  while ((match = LINK_RE.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    const [, label, href] = match
    if (href.startsWith('/')) {
      parts.push(
        <Link key={i++} to={href} className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-800">
          {label}
        </Link>,
      )
    } else {
      parts.push(
        <a
          key={i++}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-brand-700 underline decoration-brand-200 underline-offset-2 hover:text-brand-800"
        >
          {label}
        </a>,
      )
    }
    last = LINK_RE.lastIndex
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}

function BodyBlock({ block }) {
  if (block.type === 'h2') {
    const Icon = block.icon
    return (
      <h2 className="mt-10 flex items-center gap-3 font-heading text-xl font-bold text-navy-900 sm:text-2xl">
        {Icon && (
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-50 text-brand-600">
            <Icon width={18} height={18} />
          </span>
        )}
        {block.text}
      </h2>
    )
  }
  if (block.type === 'ul') {
    return (
      <ul className="mt-4 space-y-3">
        {block.items.map((item) => (
          <li key={item} className="flex items-start gap-3 text-slate-600">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-50 text-brand-600">
              <IconCheck width={12} height={12} />
            </span>
            <span>{renderInline(item)}</span>
          </li>
        ))}
      </ul>
    )
  }
  return <p className="mt-4 leading-relaxed text-slate-600">{renderInline(block.text)}</p>
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
            <h1 className="font-heading text-2xl font-extrabold text-navy-900">
              Article Not Found
            </h1>
            <p className="mt-3 text-slate-600">
              The article you're looking for doesn't exist or may have been moved.
            </p>
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

  const related = getRelatedPosts(post.slug)

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
      mainEntityOfPage: pageUrl(`/blog/${post.slug}`),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: pageUrl('/') },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: pageUrl('/blog') },
        { '@type': 'ListItem', position: 3, name: post.title, item: pageUrl(`/blog/${post.slug}`) },
      ],
    },
  ]

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

      <section className={`relative overflow-hidden bg-gradient-to-br ${post.thumb} text-white`}>
        <div className="absolute inset-0 bg-navy-950/55" />
        <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-5 py-16 lg:px-8 lg:py-20">
          <nav className="flex items-center gap-2 text-xs font-semibold text-white/60">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/blog/" className="hover:text-white">Blog</Link>
          </nav>

          <span className="mt-5 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
            {post.category}
          </span>
          <h1 className="mt-4 font-heading text-2xl font-extrabold leading-tight sm:text-3xl lg:text-4xl">
            {post.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-white/70">
            <span className="flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-brand-500 text-xs font-bold text-white">
                {post.author.split(' ').map((n) => n[0]).join('')}
              </span>
              {post.author}
            </span>
            <span>{formatDate(post.date)}</span>
            <span className="flex items-center gap-1.5">
              <IconClock width={16} height={16} /> {post.readTime}
            </span>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 lg:py-16">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <Reveal className="text-base">
            {post.body.map((block, i) => (
              <BodyBlock key={i} block={block} />
            ))}
          </Reveal>

          <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-slate-100 pt-6">
            <Link
              to="/blog/"
              className="flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700"
            >
              <IconArrowLeft width={16} height={16} /> Back to Blog
            </Link>
            <Link
              to="/contact/"
              className="flex items-center gap-2 rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white transition hover:bg-brand-700"
            >
              <IconUsers width={16} height={16} /> Talk to Our Team
            </Link>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <Reveal className="mx-auto max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-600">
                Keep Reading
              </span>
              <h2 className="mt-3 font-heading text-2xl font-extrabold text-navy-900 sm:text-3xl">
                More From the Blog
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((r, i) => (
                <Reveal
                  key={r.slug}
                  delay={i * 80}
                  className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-100"
                >
                  <div className={`relative flex h-32 items-center justify-center bg-gradient-to-br ${r.thumb}`}>
                    <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                      <r.icon width={26} height={26} />
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-heading text-lg font-bold text-navy-900">{r.title}</h3>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{r.excerpt}</p>
                    <Link
                      to={`/blog/${r.slug}/`}
                      aria-label={`Read article: ${r.title}`}
                      className="mt-5 flex items-center gap-2 text-sm font-bold text-brand-600 hover:text-brand-700"
                    >
                      Read Article <IconArrowRight width={16} height={16} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </>
  )
}
