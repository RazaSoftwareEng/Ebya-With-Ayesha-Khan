import { IconBox, IconRocket, IconTarget } from '../components/icons'

// All articles below are original write-ups produced for this site — not copied from
// any external source. Update dates/author as new posts are published.
export const blogPosts = [
  {
    slug: 'ebay-beginner-mistakes-to-avoid',
    title: '7 Mistakes New eBay Sellers Make (and How to Fix Them)',
    excerpt:
      'Most first-time eBay sellers lose money in the same handful of ways. Here are the seven slip-ups we see most often in our courses, and the simple fixes for each one.',
    category: 'eBay Selling',
    author: 'Ayesha Khan',
    date: '2026-07-18',
    readTime: '6 min read',
    icon: IconBox,
    tint: 'bg-violet-50 text-violet-600',
    bar: 'from-violet-500 to-violet-300',
    body: [
      {
        type: 'p',
        text: "Every new seller makes mistakes — that part is normal. What separates the sellers who stick with eBay from the ones who quit after a few weeks is how quickly those mistakes get caught and corrected. After training thousands of beginners, we keep seeing the same handful of errors show up again and again. Here they are, along with the fix for each.",
      },
      { type: 'h2', text: '1. Pricing purely by guesswork' },
      {
        type: 'p',
        text: 'New sellers often price an item based on what they paid for it plus a "nice-sounding" markup, without checking what identical or similar listings have actually sold for. eBay\'s completed and sold listings filter exists for exactly this reason — use it before you list anything. If similar items consistently sell in a tight price band, that band is your starting point, not your gut feeling.',
      },
      { type: 'h2', text: '2. Weak titles and thin descriptions' },
      {
        type: 'p',
        text: 'A listing title is a search query, not a product name. Buyers find you by typing keywords into eBay\'s search bar, so your title needs to include the brand, model, size, color and condition where relevant — in plain, searchable language. Pair that with a description that answers the questions a buyer would actually ask: exact condition, what\'s included, and any flaws, photographed clearly.',
      },
      { type: 'h2', text: '3. Ignoring shipping costs until after listing' },
      {
        type: 'p',
        text: 'Shipping is where new sellers quietly lose their entire profit margin. Weigh and measure your item before you list it, get an actual shipping quote, and build that number into your price or your shipping charge deliberately — don\'t find out the real cost after the sale is already made.',
      },
      { type: 'h2', text: '4. Not reading eBay\'s policies before listing' },
      {
        type: 'p',
        text: 'Restricted categories, prohibited items, and listing duplication rules exist whether or not you\'ve read them. A surprising number of early account issues come from sellers unknowingly breaking a policy they never checked. Spend twenty minutes with eBay\'s seller policies before your first listing — it will save you far more time later.',
      },
      { type: 'h2', text: '5. Slow or inconsistent communication' },
      {
        type: 'p',
        text: 'Buyers judge sellers on responsiveness as much as on the product itself. A message left unanswered for two days doesn\'t just risk that one sale — it drags down your seller metrics, which affects how your other listings are shown in search. Set a habit of checking messages at least once or twice a day.',
      },
      { type: 'h2', text: '6. Skipping proper photos' },
      {
        type: 'p',
        text: 'Phone cameras today are good enough for professional-looking product photos — the problem is usually lighting and background, not the camera. Shoot in natural daylight against a plain, uncluttered surface, and include multiple angles plus close-ups of any flaws. Listings with clear, honest photos get fewer returns and fewer disputes.',
      },
      { type: 'h2', text: '7. Treating the first sale as the finish line' },
      {
        type: 'p',
        text: 'Making your first sale feels like a milestone, and it is — but it\'s the start, not the end. What actually builds a sustainable eBay business is tracking which listings perform, adjusting pricing and titles based on real data, and reinvesting time into the products that are working.',
      },
      {
        type: 'p',
        text: 'None of these fixes require advanced skills — they require attention and a bit of structure, which is exactly what we walk through step by step inside our eBay Selling Fundamentals course.',
      },
    ],
  },
  {
    slug: 'find-winning-dropshipping-products',
    title: 'How to Find Winning Dropshipping Products: A Practical Framework',
    excerpt:
      'Product research is the single biggest factor in dropshipping success — and the most misunderstood. Here is the framework we teach for finding products worth building a store around.',
    category: 'Dropshipping',
    author: 'Ayesha Khan',
    date: '2026-08-02',
    readTime: '7 min read',
    icon: IconTarget,
    tint: 'bg-amber-50 text-amber-600',
    bar: 'from-amber-500 to-orange-400',
    body: [
      {
        type: 'p',
        text: 'Ask ten dropshipping beginners how they picked their first product, and most will say "it looked cool" or "it was going viral on social media." That approach occasionally works — and fails far more often than it succeeds. Winning products are found through a repeatable process, not luck. Here is the framework we teach our students.',
      },
      { type: 'h2', text: 'Start with a problem, not a product' },
      {
        type: 'p',
        text: 'The products that sell consistently almost always solve a specific, felt problem — they save time, remove a frustration, or make an existing task noticeably easier. Before you fall in love with an item, ask what problem it actually solves for the buyer. If you can\'t answer that in one sentence, keep looking.',
      },
      { type: 'h2', text: 'Check for real, sustained demand' },
      {
        type: 'p',
        text: 'A product spiking for one week on social media is a trend, not a business. Look for search and sales patterns that hold up over several months, not just a single viral moment. Steady demand is far more valuable than a short-lived spike, because it gives you time to test, optimize and scale before the opportunity disappears.',
      },
      { type: 'h2', text: 'Do the margin math before you fall in love with anything' },
      {
        type: 'ul',
        items: [
          'Product cost plus realistic shipping time and cost',
          'Payment processing fees',
          'Expected advertising cost per sale in your niche',
          'Returns and customer service overhead',
        ],
      },
      {
        type: 'p',
        text: 'Add these up and compare against your planned selling price. If the margin is thin after all of that, the product isn\'t "almost good" — it\'s the wrong product for a dropshipping model, no matter how appealing it looks.',
      },
      { type: 'h2', text: 'Evaluate the competition honestly' },
      {
        type: 'p',
        text: 'Some competition is healthy — it proves demand exists. What you want to avoid is a market so saturated that dozens of stores are selling the identical item with nothing to differentiate on except price. Look for a product where you can add value through better photos, bundling, niche targeting or customer experience, not just a lower price tag.',
      },
      { type: 'h2', text: 'Vet your supplier before you vet the product further' },
      {
        type: 'p',
        text: 'A great product from an unreliable supplier is still a bad business decision. Before committing, order a sample yourself, check real processing and shipping times, and ask direct questions about defect rates and return handling. Your customer will blame your store for a supplier\'s mistake, not the supplier — so this step is not optional.',
      },
      { type: 'h2', text: 'Test small before you scale' },
      {
        type: 'p',
        text: 'Even a product that passes every check above should be tested with a small, controlled budget first. Track actual conversion rate, actual cost per sale, and real customer feedback for a couple of weeks before committing serious ad spend. The market will tell you the truth faster than any amount of pre-launch analysis.',
      },
      {
        type: 'p',
        text: 'Product research is a skill, and like any skill it gets faster and more accurate with repetition. We walk through this exact process — tools included — inside our Product Research & Sourcing course.',
      },
    ],
  },
  {
    slug: 'dropshipping-vs-traditional-ecommerce',
    title: 'Dropshipping vs Traditional Ecommerce: Which Model Should You Start With?',
    excerpt:
      "Both models can build a real business, but they demand different budgets, skills and patience. Here's an honest comparison to help you choose the right starting point.",
    category: 'Ecommerce Strategy',
    author: 'Ayesha Khan',
    date: '2026-08-20',
    readTime: '6 min read',
    icon: IconRocket,
    tint: 'bg-emerald-50 text-emerald-600',
    bar: 'from-emerald-500 to-emerald-300',
    body: [
      {
        type: 'p',
        text: "New students ask us this question more than almost any other: should I start with dropshipping, or should I buy inventory and run a traditional online store? There isn't a single right answer — it depends on your starting budget, how much risk you can tolerate, and how hands-on you want to be. Here's an honest breakdown of both.",
      },
      { type: 'h2', text: 'Starting capital' },
      {
        type: 'p',
        text: 'Dropshipping wins clearly here. You don\'t pay for inventory until a customer has already paid you, which makes it the more accessible starting point if your budget is limited. Traditional ecommerce requires upfront capital tied up in stock before you\'ve made a single sale — real money at risk before you know if the product will move.',
      },
      { type: 'h2', text: 'Profit margins' },
      {
        type: 'p',
        text: "This is where traditional ecommerce usually pulls ahead. Buying inventory in bulk brings the per-unit cost down significantly, which means healthier margins per sale. Dropshipping margins are typically thinner because you're paying supplier prices on individual units with no bulk discount, and often absorbing longer shipping times that increase customer service costs.",
      },
      { type: 'h2', text: 'Speed and quality control' },
      {
        type: 'p',
        text: "With your own inventory, you control packaging, quality checks and shipping speed directly — which builds trust and repeat customers faster. With dropshipping, you're depending on a supplier's warehouse and fulfillment process, which means less control over how the customer's experience actually turns out.",
      },
      { type: 'h2', text: 'Risk if a product doesn\'t sell' },
      {
        type: 'p',
        text: "Dropshipping wins again here. If a product doesn't sell, you simply stop advertising it and move on — no unsold stock sitting in a warehouse. With traditional ecommerce, unsold inventory is money and shelf space you don't get back easily, which makes product research even more critical before you commit to a bulk order.",
      },
      { type: 'h2', text: 'Time to build real brand equity' },
      {
        type: 'p',
        text: 'Traditional ecommerce generally builds a more defensible, sellable brand over time — because you control the product, the packaging and the entire customer journey. Dropshipping can absolutely grow into a real brand too, but it usually takes longer and more deliberate effort, since the product itself is more easily copied by competitors using the same supplier.',
      },
      { type: 'h2', text: 'So which should you start with?' },
      {
        type: 'p',
        text: "If your budget is limited and you want to learn how online selling actually works — traffic, conversion, customer service, ad spend — before risking real capital on inventory, dropshipping is the more sensible starting point. Once you understand what sells and why, many of our students transition winning dropshipping products into bulk-inventory versions of the same items to capture better margins.",
      },
      {
        type: 'p',
        text: 'There is no universally "better" model — only the model that matches where you are right now. We cover both paths in depth, including exactly when and how to transition between them, inside our course tracks.',
      },
    ],
  },
]

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}

export function getRelatedPosts(slug, count = 2) {
  return blogPosts.filter((post) => post.slug !== slug).slice(0, count)
}
