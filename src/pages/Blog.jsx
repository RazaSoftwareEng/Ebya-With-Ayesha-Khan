import PageHero from '../components/PageHero'
import CTASection from '../components/CTASection'
import Reveal from '../components/Reveal'
import Seo from '../components/Seo'
import { BlogCard } from '../components/ui'
import { IconChat } from '../components/icons'
import { getSortedBlogPosts } from '../data/blogPosts'

export default function Blog() {
  const [latest, ...rest] = getSortedBlogPosts()

  return (
    <>
      <Seo
        title="eBay, Dropshipping & Ecommerce Blog"
        description="Practical, in-depth articles on eBay selling, dropshipping, TikTok Shop, Etsy and ecommerce growth, written from real teaching experience, not recycled tips."
        keywords="eBay blog Pakistan, eBay guide Lahore, dropshipping blog Pakistan, ecommerce blog Lahore, eBay tips Pakistan, TikTok Shop blog, Etsy blog Pakistan, online selling tips Lahore"
        path="/blog"
      />

      <PageHero
        eyebrow="Our blog"
        icon={IconChat}
        title="Practical ideas on eBay, dropshipping &"
        highlight="ecommerce."
        subtitle="Straightforward, no-fluff articles written from real teaching experience. No recycled tips, just what actually works."
      />

      <section className="bg-gradient-to-b from-white via-slate-50/70 to-white py-14 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          {latest && (
            <Reveal>
              <BlogCard post={latest} featured />
            </Reveal>
          )}
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 80} className="h-full">
                <BlogCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want guidance beyond the blog?"
        subtitle="Reading is a great start. A real course and a mentor get you there faster. Contact us to find the right course for you."
      />
    </>
  )
}
