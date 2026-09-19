import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { IconArrowRight, IconClock } from '../components/icons'
import { blogPosts } from '../data/blogPosts'

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  })
}

export default function Blog() {
  return (
    <>
      <Seo
        title="eBay & Dropshipping Blog (English & Roman Urdu)"
        description="Practical articles on eBay selling, dropshipping and ecommerce growth — in English and Roman Urdu, including a guide on how to start eBay from Pakistan."
        path="/blog"
      />

      <PageHero
        eyebrow="Our Blog"
        title="Practical Ideas on eBay, Dropshipping & Ecommerce"
        subtitle="Straightforward, no-fluff articles written from real teaching experience — no recycled tips, just what actually works."
      />

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <Reveal
                key={post.slug}
                delay={i * 80}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-brand-100"
              >
                <div className={`relative flex h-36 items-center justify-center bg-gradient-to-br ${post.thumb}`}>
                  <span className="absolute top-3 right-3 rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white backdrop-blur-sm">
                    {post.category}
                  </span>
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-white/15 text-white shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                    <post.icon width={26} height={26} />
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-heading text-lg font-bold text-navy-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                    {post.excerpt}
                  </p>

                  <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-xs font-semibold text-slate-400">
                    <span>{formatDate(post.date)}</span>
                    <span className="flex items-center gap-1.5">
                      <IconClock width={14} height={14} /> {post.readTime}
                    </span>
                  </div>

                  <Link
                    to={`/blog/${post.slug}/`}
                    className="mt-5 flex items-center justify-center gap-2 rounded-full bg-brand-600 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-brand-700 hover:shadow-lg"
                  >
                    Read Article <IconArrowRight width={16} height={16} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Guidance Beyond the Blog?"
        subtitle="Reading is a great start — a real course and a mentor get you there faster. Contact us to find the right course for you."
      />
    </>
  )
}
