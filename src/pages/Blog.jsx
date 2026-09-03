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
  })
}

export default function Blog() {
  return (
    <>
      <Seo
        title="Blog"
        description="Practical, no-fluff articles on eBay selling, dropshipping and ecommerce growth from Ayesha Khan Official."
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
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl"
              >
                <span
                  className={`h-1.5 w-full bg-gradient-to-r ${post.bar}`}
                  aria-hidden="true"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-3">
                    <div className={`grid h-12 w-12 place-items-center rounded-xl ${post.tint}`}>
                      <post.icon width={22} height={22} />
                    </div>
                    <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-bold text-brand-600">
                      {post.category}
                    </span>
                  </div>

                  <h2 className="mt-5 font-heading text-lg font-bold text-navy-900">
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
                    to={`/blog/${post.slug}`}
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
