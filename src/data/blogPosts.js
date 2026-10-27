import {
  IconAdTarget,
  IconAward,
  IconBox,
  IconCheck,
  IconChart,
  IconClock,
  IconCode,
  IconGift,
  IconGlobe,
  IconMegaphone,
  IconMonitor,
  IconRocket,
  IconSearch,
  IconShield,
  IconShoppingBag,
  IconSparkles,
  IconStar,
  IconTag,
  IconTarget,
  IconTiktok,
  IconUsers,
} from '../components/icons'

// All articles below are original write-ups produced for this site — not copied from
// any external source. Update dates/author as new posts are published.
//
// Body text supports simple [label](url) markup for links: internal paths (starting
// with "/") render as in-app <Link>s, anything else opens in a new tab. An "h2" block
// can carry an optional `icon` (a component from ../components/icons) rendered as a
// small badge next to the heading. See BlogDetail.jsx's renderInline() and BodyBlock().
export const blogPosts = [
  {
    slug: 'pakistan-se-ebay-kaise-shuru-karein',
    title: 'How to Start Selling on eBay From Pakistan: A Complete Beginner\'s Guide',
    excerpt:
      "If you want to start selling on eBay from Pakistan but aren't sure where to begin, this guide walks through every step — from account setup to your first sale.",
    category: 'Getting Started',
    author: 'Ayesha Khan',
    date: '2026-09-19',
    readTime: '11 min read',
    icon: IconRocket,
    thumb: 'from-brand-700 to-navy-900',
    body: [
      {
        type: 'p',
        text: "eBay is one of the largest online marketplaces in the world, with buyers across the US, UK, Europe and Australia shopping on it every single day. A growing number of Pakistani sellers want in, but most get stuck on the same question: where do I actually start? This guide walks through the full process, step by step, from opening an account to shipping your first order.",
      },
      { type: 'h2', text: 'How eBay Actually Works', icon: IconGlobe },
      {
        type: 'p',
        text: "On eBay, you create a listing for an item, buyers find it through search or browsing, and when an order comes in, you ship the item to the buyer. Most Pakistani sellers sell to international buyers, which means understanding shipping logistics and payment processing before you list your first item — not after.",
      },
      { type: 'h2', text: 'Set Your Goals and Budget First', icon: IconTarget },
      {
        type: 'p',
        text: "Before you do anything else, decide how much time and how much money you're actually willing to put in. A common mistake among beginners is investing heavily in inventory or tools in the first week, then panicking when the first month doesn't bring instant results. Start small, learn what works, then scale deliberately.",
      },
      { type: 'h2', text: 'Preparing Your eBay Seller Account', icon: IconShield },
      {
        type: 'p',
        text: "Read eBay's [official seller policies](https://www.ebay.com/help/policies/selling-policies/selling-practices-policy) carefully before creating your account — these rules change over time, and most early account problems come from sellers who never read them. Use accurate information (your real name, address and contact details), and run the account under your own identity. Fake or inconsistent information is one of the fastest ways to get an account suspended before you've even made a sale.",
      },
      { type: 'h2', text: 'Choosing Your First Product', icon: IconSearch },
      {
        type: 'p',
        text: "Look for a product with real demand, decent margin, and that isn't fragile or oversized to ship. Use eBay's \"sold items\" filter to check what's actually selling — not just what's listed. A page full of listings with zero sales tells you nothing about real demand; a page of items selling repeatedly over the last few months tells you everything.",
      },
      {
        type: 'ul',
        items: [
          'Demand: has this item sold repeatedly over the last few months?',
          'Margin: after sourcing, shipping and eBay fees, what actually remains?',
          'Competition: how many sellers list the same item, and at what price?',
          'Shipping: what does it weigh, how big is it, and how fast can it move?',
        ],
      },
      {
        type: 'p',
        text: "We go much deeper into this exact process in our separate guide on [finding a winning product on eBay](/blog/ebay-winning-product-kaise-dhoondein/), including the five questions we teach every student to ask before committing to a product.",
      },
      { type: 'h2', text: 'Sourcing: Where to Get Your Inventory', icon: IconBox },
      {
        type: 'p',
        text: "Inventory can come from local markets, wholesalers or suppliers. Test a new supplier's quality and delivery speed with a small order first — don't commit to a large order before you've personally received and inspected a sample. A supplier that looks reliable on paper can still fall short once real orders start flowing.",
      },
      { type: 'h2', text: 'Writing Listings That Actually Sell', icon: IconTag },
      {
        type: 'p',
        text: "Your title should match exactly what a buyer types into search: brand, model, size, color and condition, in plain language. Take photos in natural light against a clean background, from multiple angles, and write an honest description that answers the questions a buyer would actually have before they feel confident clicking \"buy.\"",
      },
      { type: 'h2', text: 'Shipping and Getting Paid', icon: IconChart },
      {
        type: 'p',
        text: "Work out your real shipping cost before you finalize pricing — this is where margin quietly disappears for new sellers. For receiving payments, check which payout methods eBay currently supports for your region. Many Pakistani sellers use services like [Payoneer](https://www.payoneer.com/), but always verify the current options available for your specific situation before committing.",
      },
      { type: 'h2', text: 'Talking to Buyers and Handling Your First Sale', icon: IconUsers },
      {
        type: 'p',
        text: "Respond to buyer messages quickly, ship on time, and handle any issue professionally rather than defensively. Your first sale isn't the finish line — it's the starting signal. Track which listings perform, and put more energy into the ones that are actually working rather than spreading effort evenly across everything.",
      },
      { type: 'h2', text: 'Mistakes Worth Avoiding From Day One', icon: IconCheck },
      {
        type: 'p',
        text: "Most of the account and sales problems new sellers run into trace back to a small, repeatable set of mistakes. We cover these in detail in [7 mistakes new eBay sellers make](/blog/ebay-beginner-mistakes-to-avoid/) — worth reading before, not after, your first listing goes live.",
      },
      {
        type: 'ul',
        items: [
          'Pricing from guesswork instead of checking sold listings',
          'Writing titles that skip the keywords buyers actually search for',
          'Finding out the real shipping cost only after the item sells',
          'Ignoring account health until something already looks wrong — our [account health & policy guidance](/services/account-health-policy-guidance/) is built for exactly this',
        ],
      },
      { type: 'h2', text: 'How Long Until You See Real Results?', icon: IconClock },
      {
        type: 'p',
        text: "Set realistic expectations before you start. Most sellers who stay consistent see their first sale within the first two to four weeks, but a steady, repeatable income usually takes two to three months of listing, adjusting and reinvesting in what works. Sellers who quit in week two almost always quit right before the data would have started paying off. Patience paired with structure — not luck — is what separates sellers who build something real from sellers who give up early.",
      },
      {
        type: 'p',
        text: "If you'd rather learn all of this with a mentor, step by step and hands-on, our [eBay Selling Mastery course](/courses/ebay/) runs both in-person in Lahore and online. If you don't have time to set the account up yourself, our [eBay store setup & management service](/services/ebay-store-setup-management/) can do it for you. [Message us on WhatsApp](/contact/) for details on the next batch.",
      },
    ],
  },
  {
    slug: 'ebay-winning-product-kaise-dhoondein',
    title: 'How to Find a Winning Product on eBay: A Simple Framework',
    excerpt:
      'Picking the right product is the single biggest factor in eBay selling success. This simple framework tells you exactly which products are worth your time and money.',
    category: 'Product Research',
    author: 'Ayesha Khan',
    date: '2026-09-19',
    readTime: '9 min read',
    icon: IconTarget,
    thumb: 'from-emerald-600 to-teal-700',
    body: [
      {
        type: 'p',
        text: "New sellers often make the mistake of selling what they personally like, instead of what buyers are actually purchasing. A winning product is one with real demand, a margin that survives all your costs, and logistics simple enough that you can source and ship it reliably. Below are the five questions we run every product idea through before green-lighting it.",
      },
      { type: 'h2', text: 'Question One: Is There Real Demand?', icon: IconSearch },
      {
        type: 'p',
        text: "Search the product on eBay and apply the [\"Sold Items\" filter](https://www.ebay.com/help/selling/listings/creating-managing-listings/using-sold-listings-completed-listings?id=4150). If the item has sold repeatedly over the last few months, demand exists. If there are only active listings with no sold history, that's a product to skip — plenty of listings with zero sales is not the same thing as demand.",
      },
      { type: 'h2', text: 'Question Two: Does the Margin Hold Up?', icon: IconChart },
      {
        type: 'p',
        text: "Don't judge a product on price alone. Add up the full cost — product price, sourcing and packaging, shipping, and eBay's fees — then subtract that total from your selling price. Whatever remains is your real margin, and it's often smaller than sellers initially assume.",
      },
      { type: 'h2', text: 'Question Three: How Much Competition Is There?', icon: IconUsers },
      {
        type: 'p',
        text: "Check how many sellers list the same item and at what price. If several large, established sellers are already undercutting on price, a new seller will struggle to find room. Look instead for products where the competition is reasonable and there's space to differentiate.",
      },
      { type: 'h2', text: 'Question Four: How Risky Are Shipping and Returns?', icon: IconBox },
      {
        type: 'ul',
        items: [
          'Fragile or breakable items increase returns and disputes',
          'Heavy or oversized items quietly eat into your margin through shipping',
          'Items with size or color variants tend to generate more returns',
        ],
      },
      { type: 'h2', text: 'Question Five: Can You Trust the Supplier?', icon: IconShield },
      {
        type: 'p',
        text: "Even a great product can lose money through an unreliable supplier. Order a sample before placing a large order, check the quality yourself, and time the delivery. Rather than relying entirely on one supplier, line up a backup from the start — if your main supplier ever runs into stock or quality issues, you won't be left scrambling. If you'd rather not manage this part yourself, our [product research & sourcing service](/services/product-research-sourcing/) does it for you.",
      },
      { type: 'h2', text: 'Where to Find the Data', icon: IconChart },
      {
        type: 'p',
        text: "eBay's sold listings are the most direct source of truth. [Google Trends](https://trends.google.com/trends/) is useful for understanding whether interest in a category is rising or falling over time, particularly for seasonal products where timing matters as much as the product itself.",
      },
      { type: 'h2', text: 'Turning Research Into a Listing', icon: IconTag },
      {
        type: 'p',
        text: "Finding the right product is only half the job — the other half is turning that research into a listing that actually converts: the right title, the right photos, the right price. If you're starting completely from scratch and still need to set up your account, our [complete guide to starting on eBay from Pakistan](/blog/pakistan-se-ebay-kaise-shuru-karein/) is a good place to begin.",
      },
      {
        type: 'p',
        text: "Product research is a skill that gets sharper with repetition. We work through this exact process with students hands-on, and it's a core part of our [eBay Selling Mastery course](/courses/ebay/).",
      },
    ],
  },
  {
    slug: 'dropshipping-kya-hai-pakistan-mein',
    title: 'What Is Dropshipping? A Clear Explanation for Pakistani Sellers',
    excerpt:
      "Dropshipping lets you sell products without holding any inventory yourself. Here's exactly how it works, its real pros and cons, and what to watch for if you're doing it on eBay.",
    category: 'Dropshipping Basics',
    author: 'Ayesha Khan',
    date: '2026-09-19',
    readTime: '9 min read',
    icon: IconBox,
    thumb: 'from-slate-800 to-slate-950',
    body: [
      {
        type: 'p',
        text: "Dropshipping is a business model where you never physically stock the product you're selling. When a customer orders from you, you pass that order to your supplier, who ships the item directly to the customer. Your profit is the difference between what the customer paid you and what you paid your supplier.",
      },
      { type: 'h2', text: 'How Dropshipping Actually Works', icon: IconGlobe },
      {
        type: 'ul',
        items: [
          'You create a listing — on eBay or your own store',
          'A customer places an order and pays you',
          'You forward that same order to your supplier',
          'Your supplier ships the item directly to the customer',
        ],
      },
      { type: 'h2', text: 'The Real Advantages', icon: IconAward },
      {
        type: 'ul',
        items: [
          "You don't need a large upfront investment to buy stock",
          'You can test multiple products with relatively low risk',
          'The business can be run from anywhere with an internet connection',
        ],
      },
      { type: 'h2', text: 'The Real Risks', icon: IconShield },
      {
        type: 'ul',
        items: [
          'Margins are usually thinner, so you need to get your numbers exactly right',
          "Delivery speed and product quality depend entirely on your supplier",
          'The customer holds you responsible for problems — not your supplier',
        ],
      },
      { type: 'h2', text: 'Special Rules on eBay', icon: IconShield },
      {
        type: 'p',
        text: "Under eBay's [dropshipping policy](https://www.ebay.com/help/policies/selling-policies/dropshipping-policy?id=4649), you — the seller — remain fully responsible for the transaction. Buying from another retail store and having it shipped directly to your eBay buyer is generally against policy. Your supplier needs to be part of an actual supply arrangement, not simply a retail storefront you're buying from one order at a time. Policies change over time, so read eBay's current dropshipping policy page before you start.",
      },
      { type: 'h2', text: 'A Practical Way to Get Started', icon: IconRocket },
      {
        type: 'ul',
        items: [
          "Pick one small niche — don't spread across many categories at once",
          'Test with one trustworthy supplier on a small scale first',
          'Track margin, delivery time and complaints for every single order',
          "Double down on whatever is clearly working, rather than spreading effort evenly",
        ],
      },
      { type: 'h2', text: 'Dropshipping vs Holding Your Own Stock', icon: IconChart },
      {
        type: 'p',
        text: "Every new seller eventually asks whether dropshipping or buying inventory outright is the better starting point, and the honest answer depends on your budget and risk tolerance. We've written a full [comparison of dropshipping vs traditional ecommerce](/blog/dropshipping-vs-traditional-ecommerce/) that walks through both sides in detail.",
      },
      {
        type: 'p',
        text: "Dropshipping looks simple on the surface, but understanding it properly is what separates sellers who build something sustainable from sellers who burn out after a few disappointing months. Our [eBay Selling Mastery course](/courses/ebay/) covers dropshipping as a full, hands-on module, and if you'd rather have the backend built for you, our [dropshipping setup & automation service](/services/dropshipping-setup-automation/) does exactly that.",
      },
    ],
  },
  {
    slug: 'ebay-beginner-mistakes-to-avoid',
    title: '7 Mistakes New eBay Sellers Make (and How to Fix Them)',
    excerpt:
      'Most first-time eBay sellers lose money in the same handful of ways. Here are the seven slip-ups we see most often in our courses, and the simple fixes for each one.',
    category: 'eBay Selling',
    author: 'Ayesha Khan',
    date: '2026-07-18',
    readTime: '9 min read',
    icon: IconBox,
    thumb: 'from-slate-800 to-slate-950',
    body: [
      {
        type: 'p',
        text: "Every new seller makes mistakes — that part is normal. What separates the sellers who stick with eBay from the ones who quit after a few weeks is how quickly those mistakes get caught and corrected. After training thousands of beginners in our [eBay Selling Mastery course](/courses/ebay/), we keep seeing the same handful of errors show up again and again. Here they are, along with the fix for each.",
      },
      { type: 'h2', text: 'Pricing Purely by Guesswork', icon: IconChart },
      {
        type: 'p',
        text: 'New sellers often price an item based on what they paid for it plus a "nice-sounding" markup, without checking what identical or similar listings have actually sold for. eBay\'s [sold and completed listings filter](https://www.ebay.com/help/selling/listings/creating-managing-listings/using-sold-listings-completed-listings?id=4150) exists for exactly this reason — use it before you list anything. If similar items consistently sell in a tight price band, that band is your starting point, not your gut feeling.',
      },
      { type: 'h2', text: 'Weak Titles and Thin Descriptions', icon: IconTag },
      {
        type: 'p',
        text: "A listing title is a search query, not a product name. Buyers find you by typing keywords into eBay's search bar, so your title needs to include the brand, model, size, color and condition where relevant — in plain, searchable language. Pair that with a description that answers the questions a buyer would actually ask: exact condition, what's included, and any flaws, photographed clearly.",
      },
      { type: 'h2', text: 'Ignoring Shipping Costs Until After Listing', icon: IconBox },
      {
        type: 'p',
        text: "Shipping is where new sellers quietly lose their entire profit margin. Weigh and measure your item before you list it, get an actual shipping quote, and build that number into your price or your shipping charge deliberately — don't find out the real cost after the sale is already made.",
      },
      { type: "h2", text: "Not Reading eBay's Policies Before Listing", icon: IconShield },
      {
        type: 'p',
        text: "Restricted categories, prohibited items, and listing duplication rules exist whether or not you've read them. A surprising number of early account issues come from sellers unknowingly breaking a policy they never checked. Spend twenty minutes with [eBay's selling practices policy](https://www.ebay.com/help/policies/selling-policies/selling-practices-policy) before your first listing — it will save you far more time later. If your account has already picked up a warning, our [account health guidance](/services/account-health-policy-guidance/) can help you get back on track.",
      },
      { type: 'h2', text: 'Slow or Inconsistent Communication', icon: IconUsers },
      {
        type: 'p',
        text: "Buyers judge sellers on responsiveness as much as on the product itself. A message left unanswered for two days doesn't just risk that one sale — it drags down your seller metrics, which affects how your other listings are shown in search. Set a habit of checking messages at least once or twice a day.",
      },
      { type: 'h2', text: 'Skipping Proper Photos', icon: IconMonitor },
      {
        type: 'p',
        text: 'Phone cameras today are good enough for professional-looking product photos — the problem is usually lighting and background, not the camera. Shoot in natural daylight against a plain, uncluttered surface, and include multiple angles plus close-ups of any flaws. Listings with clear, honest photos get fewer returns and fewer disputes.',
      },
      { type: 'h2', text: 'Treating the First Sale as the Finish Line', icon: IconAward },
      {
        type: 'p',
        text: "Making your first sale feels like a milestone, and it is — but it's the start, not the end. What actually builds a sustainable eBay business is tracking which listings perform, adjusting pricing and titles based on real data, and reinvesting time into the products that are working.",
      },
      { type: 'h2', text: 'A Quick Checklist Before You List Anything', icon: IconCheck },
      {
        type: 'p',
        text: "If you only take one thing from this article, use it as a pre-listing checklist. Run through it every time, not just for your first item — the sellers who stay disciplined about this are the ones whose stores are still growing a year later.",
      },
      {
        type: 'ul',
        items: [
          'Checked sold listings for a realistic price, not a guessed one',
          'Title includes brand, model, size, color and condition where relevant',
          'Shipping cost weighed and quoted, not estimated',
          "Listing complies with eBay's current selling policies",
        ],
      },
      {
        type: 'p',
        text: "None of these fixes require advanced skills — they require attention and a bit of structure, which is exactly what we walk through step by step inside our [eBay Selling Mastery course](/courses/ebay/). If you're just getting started from scratch, our [beginner's guide to starting on eBay from Pakistan](/blog/pakistan-se-ebay-kaise-shuru-karein/) covers the setup steps that come before this list.",
      },
    ],
  },
  {
    slug: 'find-winning-dropshipping-products',
    title: 'How to Find Winning Dropshipping Products: A Practical Framework',
    excerpt:
      'Product research is the single biggest factor in dropshipping success — and the most misunderstood. Here is the framework we teach for finding products worth building a store around.',
    category: 'Product Research',
    author: 'Ayesha Khan',
    date: '2026-08-02',
    readTime: '9 min read',
    icon: IconTarget,
    thumb: 'from-amber-500 to-orange-600',
    body: [
      {
        type: 'p',
        text: 'Ask ten dropshipping beginners how they picked their first product, and most will say "it looked cool" or "it was going viral on social media." That approach occasionally works — and fails far more often than it succeeds. Winning products are found through a repeatable process, not luck. Here is the framework we teach our students.',
      },
      { type: 'h2', text: 'Start With a Problem, Not a Product', icon: IconTarget },
      {
        type: 'p',
        text: "The products that sell consistently almost always solve a specific, felt problem — they save time, remove a frustration, or make an existing task noticeably easier. Before you fall in love with an item, ask what problem it actually solves for the buyer. If you can't answer that in one sentence, keep looking.",
      },
      { type: 'h2', text: 'Check for Real, Sustained Demand', icon: IconSearch },
      {
        type: 'p',
        text: "A product spiking for one week on social media is a trend, not a business. [Google Trends](https://trends.google.com/trends/) is a free way to check whether search interest holds up over several months, not just a single viral moment. Steady demand is far more valuable than a short-lived spike, because it gives you time to test, optimize and scale before the opportunity disappears.",
      },
      { type: "h2", text: "Do the Margin Math Before You Commit", icon: IconChart },
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
        text: "Add these up and compare against your planned selling price. If the margin is thin after all of that, the product isn't \"almost good\" — it's the wrong product for a dropshipping model, no matter how appealing it looks.",
      },
      { type: 'h2', text: 'Evaluate the Competition Honestly', icon: IconUsers },
      {
        type: 'p',
        text: "Some competition is healthy — it proves demand exists. What you want to avoid is a market so saturated that dozens of stores are selling the identical item with nothing to differentiate on except price. Look for a product where you can add value through better photos, bundling, niche targeting or customer experience, not just a lower price tag.",
      },
      { type: 'h2', text: 'Vet Your Supplier Before Anything Else', icon: IconShield },
      {
        type: 'p',
        text: "A great product from an unreliable supplier is still a bad business decision. Before committing, order a sample yourself, check real processing and shipping times, and ask direct questions about defect rates and return handling. Your customer will blame your store for a supplier's mistake, not the supplier — so this step is not optional. This is exactly what our [product research & sourcing service](/services/product-research-sourcing/) handles for sellers who'd rather not do it alone.",
      },
      { type: 'h2', text: 'Test Small Before You Scale', icon: IconRocket },
      {
        type: 'p',
        text: "Even a product that passes every check above should be tested with a small, controlled budget first. Track actual conversion rate, actual cost per sale, and real customer feedback for a couple of weeks before committing serious ad spend. The market will tell you the truth faster than any amount of pre-launch analysis. For the ad side of this, our [beginner's ad budget framework](/blog/facebook-google-ads-budget-for-beginners/) walks through exactly how much to spend during this testing phase.",
      },
      { type: 'h2', text: 'eBay vs Your Own Store for a New Product', icon: IconGlobe },
      {
        type: 'p',
        text: "Many of our students validate a product on eBay first, where there's existing buyer traffic, before building a dedicated Shopify store around it once it's proven. If you're weighing that decision, our comparison of [dropshipping vs traditional ecommerce](/blog/dropshipping-vs-traditional-ecommerce/) is a useful next read.",
      },
      {
        type: 'p',
        text: "Product research is a skill, and like any skill it gets faster and more accurate with repetition. We walk through this exact process — tools included — inside our [Shopify Store Mastery course](/courses/shopify/).",
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
    readTime: '9 min read',
    icon: IconRocket,
    thumb: 'from-emerald-600 to-teal-700',
    body: [
      {
        type: 'p',
        text: "New students ask us this question more than almost any other: should I start with dropshipping, or should I buy inventory and run a traditional online store? There isn't a single right answer — it depends on your starting budget, how much risk you can tolerate, and how hands-on you want to be. Here's an honest breakdown of both.",
      },
      { type: 'h2', text: 'Starting Capital', icon: IconChart },
      {
        type: 'p',
        text: "Dropshipping wins clearly here. You don't pay for inventory until a customer has already paid you, which makes it the more accessible starting point if your budget is limited. Traditional ecommerce requires upfront capital tied up in stock before you've made a single sale — real money at risk before you know if the product will move.",
      },
      { type: 'h2', text: 'Profit Margins', icon: IconAward },
      {
        type: 'p',
        text: "This is where traditional ecommerce usually pulls ahead. Buying inventory in bulk brings the per-unit cost down significantly, which means healthier margins per sale. Dropshipping margins are typically thinner because you're paying supplier prices on individual units with no bulk discount, and often absorbing longer shipping times that increase customer service costs.",
      },
      { type: 'h2', text: 'Speed and Quality Control', icon: IconShield },
      {
        type: 'p',
        text: "With your own inventory, you control packaging, quality checks and shipping speed directly — which builds trust and repeat customers faster. With dropshipping, you're depending on a supplier's warehouse and fulfillment process, which means less control over how the customer's experience actually turns out.",
      },
      { type: 'h2', text: "Risk if a Product Doesn't Sell", icon: IconBox },
      {
        type: 'p',
        text: "Dropshipping wins again here. If a product doesn't sell, you simply stop advertising it and move on — no unsold stock sitting in a warehouse. With traditional ecommerce, unsold inventory is money and shelf space you don't get back easily, which makes [product research](/blog/find-winning-dropshipping-products/) even more critical before you commit to a bulk order.",
      },
      { type: 'h2', text: 'Time to Build Real Brand Equity', icon: IconStar },
      {
        type: 'p',
        text: 'Traditional ecommerce generally builds a more defensible, sellable brand over time — because you control the product, the packaging and the entire customer journey. Dropshipping can absolutely grow into a real brand too, but it usually takes longer and more deliberate effort, since the product itself is more easily copied by competitors using the same supplier.',
      },
      { type: 'h2', text: 'Where Does Each Model Fit Best?', icon: IconGlobe },
      {
        type: 'p',
        text: "Platform matters here too. eBay and TikTok Shop tend to suit the dropshipping path well because of their built-in buyer traffic, while Shopify is where most students move once they're ready to build a standalone, inventory-backed brand. If you're still deciding between platforms entirely, our [eBay vs Shopify vs TikTok Shop vs Etsy comparison](/blog/ebay-vs-shopify-vs-tiktok-shop-vs-etsy/) breaks that down separately from the business-model question.",
      },
      { type: 'h2', text: 'So Which Should You Start With?', icon: IconRocket },
      {
        type: 'p',
        text: "If your budget is limited and you want to learn how online selling actually works — traffic, conversion, customer service, ad spend — before risking real capital on inventory, dropshipping is the more sensible starting point. Once you understand what sells and why, many of our students transition winning dropshipping products into bulk-inventory versions of the same items to capture better margins, often with our [Shopify store setup service](/services/shopify-store-setup/) handling the move.",
      },
      {
        type: 'p',
        text: 'There is no universally "better" model — only the model that matches where you are right now. We cover both paths in depth, including exactly when and how to transition between them, inside our [eBay](/courses/ebay/) and [Shopify](/courses/shopify/) course tracks.',
      },
    ],
  },
  {
    slug: 'tiktok-shop-beginners-guide',
    title: 'TikTok Shop for Beginners: How Selling Actually Works',
    excerpt:
      'TikTok Shop lets you sell without ever leaving the app — but it works differently from a traditional marketplace. Here is what beginners need to understand before their first listing.',
    category: 'TikTok Shop',
    author: 'Ayesha Khan',
    date: '2026-09-05',
    readTime: '9 min read',
    icon: IconTiktok,
    thumb: 'from-rose-600 to-fuchsia-700',
    body: [
      {
        type: 'p',
        text: "TikTok Shop is one of the fastest-growing sales channels we teach right now, and also one of the most misunderstood. Sellers coming from eBay or Shopify often assume it works the same way with a different interface — it doesn't. Here is what actually matters if you're starting from zero.",
      },
      { type: 'h2', text: 'What Makes TikTok Shop Different', icon: IconTiktok },
      {
        type: 'p',
        text: "On a marketplace like eBay, buyers arrive already searching for something specific. On TikTok Shop, most sales start with someone who wasn't looking to buy anything — they got interested because of a video. That single difference changes almost everything about how you should approach the platform.",
      },
      { type: 'h2', text: 'Content Comes Before Ads', icon: IconSparkles },
      {
        type: 'p',
        text: "New sellers often want to jump straight to paid promotion. On TikTok Shop, organic content is what proves a product works before you spend anything on ads. A handful of genuine, well-made product videos will teach you more about what resonates than a week of guessing with an ad budget.",
      },
      { type: 'h2', text: 'Setting Up a Shop That Gets Approved', icon: IconShield },
      {
        type: 'p',
        text: "TikTok reviews shops and products before they go live, and incomplete information is the most common reason for delays. Have your business details, product images and category information ready and accurate before you apply through the [TikTok Shop Seller Center](https://seller-us.tiktok.com/) — rushing this step is the easiest way to add days to your launch. If you'd rather have this handled for you, our [TikTok Shop setup & management service](/services/tiktok-shop-setup-management/) covers the whole process.",
      },
      { type: 'h2', text: 'Working With Creators and Affiliates', icon: IconUsers },
      {
        type: 'p',
        text: "You don't have to be on camera yourself. TikTok Shop's affiliate program lets creators promote your products for a commission, which means your catalog can get in front of audiences you'd never reach alone. Start with a handful of small creators in your niche rather than chasing the biggest names first.",
      },
      { type: 'h2', text: 'Common Beginner Mistakes', icon: IconCheck },
      {
        type: 'ul',
        items: [
          'Treating it like a listing platform instead of a content platform',
          "Giving up after two or three videos that didn't perform",
          'Ignoring comments, which hurts how much reach future videos get',
          "Pricing without accounting for TikTok Shop's commission structure",
        ],
      },
      { type: 'h2', text: 'How TikTok Shop Compares to eBay for a First-Time Seller', icon: IconGlobe },
      {
        type: 'p',
        text: "If you're choosing between platforms rather than committing to TikTok Shop specifically, it's worth weighing how each one finds you customers. eBay relies on search intent that already exists; TikTok Shop relies on content creating that intent. Our [full platform comparison](/blog/ebay-vs-shopify-vs-tiktok-shop-vs-etsy/) goes through the trade-offs of eBay, Shopify, TikTok Shop and Etsy side by side.",
      },
      { type: 'h2', text: 'A Realistic Content Schedule for Your First Month', icon: IconClock },
      {
        type: 'p',
        text: "Aim for at least three to five posts a week in your first month — consistency matters more than any single video going viral. Review what each video's watch time and comments tell you, and adjust your next batch accordingly. Most sellers who give up do so after fewer than ten videos, which is rarely enough data to judge whether the approach is actually working.",
      },
      {
        type: 'p',
        text: "TikTok Shop rewards consistency and content quality more than ad budget, which is exactly what makes it accessible to new sellers. We walk through account setup, content strategy and the affiliate program step by step inside our [TikTok Shop Selling course](/courses/tiktok-shop/).",
      },
    ],
  },
  {
    slug: 'ai-tools-for-ecommerce-sellers',
    title: '5 Practical Ways Ecommerce Sellers Are Using AI Right Now',
    excerpt:
      'AI tools are cutting the time sellers spend on research, listings and customer support. Here are five practical use cases you can start applying this week.',
    category: 'AI Tools',
    author: 'Ayesha Khan',
    date: '2026-09-10',
    readTime: '8 min read',
    icon: IconSparkles,
    thumb: 'from-brand-600 to-navy-800',
    body: [
      {
        type: 'p',
        text: "Most of the AI discussion online is about the future. This is about right now — the specific, unglamorous tasks our students are already handing off to AI tools to save real hours every week. None of it requires technical skill, just knowing where to point the tool.",
      },
      { type: 'h2', text: 'Product and Niche Research, Faster', icon: IconSearch },
      {
        type: 'p',
        text: "Instead of manually browsing category after category, sellers are using AI to summarize trend data, compare competing products and shortlist ideas worth a closer look. It doesn't replace your own judgment — it just gets you to the shortlist faster so you can spend your time validating, not searching. Our [product research framework](/blog/find-winning-dropshipping-products/) is still the right process to validate whatever the AI shortlists.",
      },
      { type: "h2", text: "Writing Listings That Don't Sound Robotic", icon: IconTag },
      {
        type: 'p',
        text: "A first AI draft of a listing is rarely ready to publish as-is, but it's a genuinely useful starting point — it gets the structure and keywords in place so you're editing instead of starting from a blank page. The sellers who get the best results still rewrite the first two lines themselves, since that's what buyers actually read.",
      },
      { type: 'h2', text: 'Basic Product Photography and Image Cleanup', icon: IconMonitor },
      {
        type: 'p',
        text: "Background removal, simple touch-ups and generating lifestyle-style backgrounds for a plain product photo used to require design skills or a paid editor. AI image tools have made this a five-minute task, which matters most for sellers who can't arrange a full photoshoot for every item.",
      },
      { type: 'h2', text: 'A First Line of Customer Support', icon: IconUsers },
      {
        type: 'p',
        text: "A simple AI chatbot trained on your shipping policy, return policy and FAQs can handle the repetitive questions that eat up a seller's day, while flagging anything unusual for a real response from you. This is especially useful outside business hours, when a buyer's question would otherwise sit unanswered.",
      },
      { type: "h2", text: "What AI Still Can't Do for You", icon: IconShield },
      {
        type: 'p',
        text: "AI won't vet a supplier, won't catch a policy violation specific to your marketplace, and won't build the kind of customer trust a genuinely thoughtful reply does. Treat it as a way to move faster through repetitive work, not a replacement for the judgment calls that actually grow a store — things like the [account health checks](/services/account-health-policy-guidance/) and supplier vetting we cover elsewhere on this blog.",
      },
      { type: 'h2', text: 'Where to Start If This Is All New to You', icon: IconRocket },
      {
        type: 'p',
        text: "Don't try to adopt all five use cases in one week. Pick the task that currently costs you the most time — for most sellers that's either listing writing or customer support — and bring in one AI tool for just that task. Once it's a habit, layer in the next one.",
      },
      { type: 'h2', text: 'A Note on Data and Privacy', icon: IconShield },
      {
        type: 'p',
        text: "Before uploading customer details or supplier contracts into any AI tool, check what that tool actually does with your data. Stick to tools with a clear, reputable privacy policy for anything involving real customer or business information, and keep genuinely sensitive data out of AI workflows entirely where you don't need to use it.",
      },
      {
        type: 'p',
        text: "The sellers seeing the biggest time savings aren't using more tools than everyone else — they're using a handful of them consistently, inside a workflow. That workflow is exactly what we build with students inside our [AI for Ecommerce Sellers course](/courses/ai/).",
      },
    ],
  },
  {
    slug: 'facebook-google-ads-budget-for-beginners',
    title: "How Much Should You Spend on Ads? A Beginner's Budget Framework",
    excerpt:
      'Most new sellers either spend too little to learn anything or too much before they understand what is working. Here is a simple framework for budgeting your first ad campaigns.',
    category: 'Digital Marketing',
    author: 'Ayesha Khan',
    date: '2026-09-13',
    readTime: '9 min read',
    icon: IconMegaphone,
    thumb: 'from-sky-600 to-blue-800',
    body: [
      {
        type: 'p',
        text: "\"How much should I spend on ads?\" is one of the first questions every new seller asks us, and it's also one of the easiest to get wrong in both directions. Spend too little and you never collect enough data to learn anything. Spend too much before you understand your numbers, and you can lose real money fast. Here is the framework we teach.",
      },
      { type: 'h2', text: 'Start With a Testing Budget, Not a Growth Budget', icon: IconTarget },
      {
        type: 'p',
        text: "Your first two to three weeks of ad spend should be treated as the cost of learning, not the cost of scaling. The goal isn't profit yet — it's finding out which audience, creative and offer combination actually gets a response, on a budget small enough that a bad result doesn't hurt.",
      },
      { type: 'h2', text: 'Know Your Numbers Before You Spend a Rupee', icon: IconChart },
      {
        type: 'p',
        text: "Before any ad goes live, know your product margin and roughly what you can afford to pay to acquire a customer and still profit. Without that number, you have no way to judge whether a campaign is actually working or just feels exciting because sales are coming in.",
      },
      { type: 'h2', text: 'Split Your Budget Across a Small Number of Tests', icon: IconAdTarget },
      {
        type: 'ul',
        items: [
          'Two to three audiences, not ten, so each gets enough spend to mean something',
          'Two to three ad creatives per audience, tested against each other',
          "One clear offer per test — don't change the price and the creative at the same time",
          "A fixed daily budget you won't exceed no matter how tempting it feels",
        ],
      },
      { type: 'h2', text: 'When to Increase Spend', icon: IconAward },
      {
        type: 'p',
        text: 'Increase budget on a campaign only after it has shown a consistent, profitable result over several days — not after one good afternoon. Scale gradually, in steps of around 20 to 30 percent, rather than doubling a budget overnight, which often makes the same campaign perform worse.',
      },
      { type: 'h2', text: 'When to Cut a Campaign', icon: IconShield },
      {
        type: 'p',
        text: "If a campaign has spent roughly two to three times your target cost-per-sale with no results, it has told you what you need to know — stop it and move that budget to your next test. Holding onto an underperforming campaign out of hope is the single most common way beginners waste their ad budget.",
      },
      { type: 'h2', text: 'Tracking Tools Worth Setting Up First', icon: IconMonitor },
      {
        type: 'p',
        text: "None of this framework works without accurate tracking. Before your first campaign goes live, set up conversion tracking properly through [Meta Business Suite](https://www.facebook.com/business/help) and [Google Ads](https://support.google.com/google-ads/) so every rupee spent is tied to a result you can actually see. Guessing from \"it feels like sales went up\" is how most beginners lose track of what's working.",
      },
      { type: 'h2', text: 'Which Platform Should Get Your First Budget?', icon: IconGlobe },
      {
        type: 'p',
        text: "If you're brand new, start on whichever platform your audience already spends time on and where your product is visually easy to showcase — Meta (Facebook and Instagram) generally suits visual, impulse-buy products, while Google Search Ads suit products people actively search for by name. Test one platform properly before splitting budget across several at once.",
      },
      {
        type: 'p',
        text: "None of this requires a large budget to start — it requires structure. We build this exact testing and scaling framework with students, across Facebook, Instagram, Google and TikTok, inside our [Digital Marketing for Ecommerce course](/courses/digital-marketing/), and we manage campaigns hands-on through our [Google & Meta Ads service](/services/google-meta-ads/) for sellers who'd rather have it done for them.",
      },
    ],
  },
  {
    slug: 'etsy-shop-setup-guide-pakistan',
    title: 'Etsy Shop Setup Guide: Selling Handmade & Creative Products From Pakistan',
    excerpt:
      "Etsy rewards handmade, vintage and craft-supply sellers in a way general marketplaces don't. Here's how to set up a shop from Pakistan that buyers actually trust.",
    category: 'Etsy',
    author: 'Ayesha Khan',
    date: '2026-10-10',
    readTime: '9 min read',
    icon: IconGift,
    thumb: 'from-amber-500 to-orange-600',
    body: [
      {
        type: 'p',
        text: "Etsy is a different kind of marketplace from eBay or Shopify — buyers come specifically looking for handmade, vintage, custom or craft-supply items, and they're usually willing to pay more for something that feels personal. That makes it one of the best platforms for Pakistani sellers with a genuine craft, design or art skill, but it also rewards a very specific kind of listing. Here's how to set a shop up properly from the start.",
      },
      { type: 'h2', text: 'Decide What Actually Qualifies for Etsy', icon: IconCheck },
      {
        type: 'p',
        text: "Etsy's three core categories are handmade goods, vintage items (20+ years old) and craft supplies. If your product doesn't fit one of these cleanly, Etsy likely isn't the right platform for it — that's what marketplaces like [eBay](/courses/ebay/) or your own [Shopify store](/courses/shopify/) are for instead. Be honest about this before you invest time setting up, since Etsy actively reviews shops for fit.",
      },
      { type: 'h2', text: 'Setting Up Your Shop', icon: IconRocket },
      {
        type: 'p',
        text: "Opening a shop on the [Etsy Seller Handbook](https://www.etsy.com/seller-handbook) walks you through the technical steps, but the parts that actually affect sales are your shop name, your banner and profile photo, and your \"About\" section. Buyers on Etsy care about the person or small business behind the product far more than on other marketplaces — don't treat this section as an afterthought.",
      },
      { type: 'h2', text: 'Photos Matter More Here Than Almost Anywhere Else', icon: IconMonitor },
      {
        type: 'p',
        text: "Etsy buyers are judging craftsmanship, materials and scale from photos alone. Use natural light, show the product from multiple angles, include at least one photo with a size reference, and if the item is customizable, show a couple of variations. Listings with five to ten genuinely good photos consistently outperform ones with two or three rushed shots.",
      },
      { type: 'h2', text: 'Pricing Handmade Work Correctly', icon: IconChart },
      {
        type: 'ul',
        items: [
          'Materials cost, including anything wasted during production',
          'Your actual time, priced at a rate you would accept elsewhere',
          "Etsy's listing, transaction and payment processing fees",
          'Packaging and realistic international shipping cost',
        ],
      },
      {
        type: 'p',
        text: "Underpricing handmade work is the most common mistake new Etsy sellers make. If the math above doesn't leave a real margin, either the price needs to go up or the product needs to change — don't absorb the loss hoping volume will fix it.",
      },
      { type: 'h2', text: 'Shipping From Pakistan to International Buyers', icon: IconGlobe },
      {
        type: 'p',
        text: "Most Etsy buyers are in the US, UK, Europe and Australia, so international shipping cost and speed need to be built into your pricing from day one, the same way we cover for [starting on eBay from Pakistan](/blog/pakistan-se-ebay-kaise-shuru-karein/). Offer tracked shipping wherever possible — it reduces disputes dramatically and is often what separates a shop with good reviews from one with constant \"where is my order\" messages.",
      },
      { type: 'h2', text: 'SEO Inside Etsy Search', icon: IconSearch },
      {
        type: 'p',
        text: "Etsy's internal search works similarly to a general search engine: titles, tags and categories all matter. Use the specific, descriptive language a buyer would actually type — material, style, occasion, recipient — rather than vague or purely creative titles. This is one of the areas our [Etsy Store Success course](/courses/etsy/) spends the most time on, because it's where most handmade sellers leave sales on the table.",
      },
      { type: 'h2', text: 'Building Repeat Buyers and Reviews', icon: IconStar },
      {
        type: 'p',
        text: "A thoughtful unboxing experience — a small handwritten note, tidy packaging, a thank-you message — costs very little but noticeably increases review rates and repeat purchases on Etsy specifically, because buyers here are already primed to value that kind of personal touch. Reviews compound over time: a shop with twenty genuine five-star reviews converts noticeably better than one with none, even if the products are otherwise identical.",
      },
      {
        type: 'p',
        text: "Etsy is one of the few platforms where a genuinely well-made product with honest photos and fair pricing can compete with much bigger shops. We walk through shop setup, listing SEO and pricing strategy step by step inside our [Etsy Store Success course](/courses/etsy/) — or [message us](/contact/) if you'd like a free consultation first.",
      },
    ],
  },
  {
    slug: 'ebay-vs-shopify-vs-tiktok-shop-vs-etsy',
    title: 'eBay vs Shopify vs TikTok Shop vs Etsy: Which Should You Start With in Pakistan?',
    excerpt:
      'Four very different platforms, four very different skill sets. Here is an honest, side-by-side comparison to help you pick the right starting point for your budget and goals.',
    category: 'Ecommerce Strategy',
    author: 'Ayesha Khan',
    date: '2026-10-15',
    readTime: '10 min read',
    icon: IconGlobe,
    thumb: 'from-cyan-600 to-sky-800',
    body: [
      {
        type: 'p',
        text: "This is the question we get asked more than any other by students who are completely new to ecommerce: which platform should I actually start on? There's no single right answer, but there is a right answer for your specific budget, skills and goals. Here's an honest look at eBay, Shopify, TikTok Shop and Etsy, side by side.",
      },
      { type: 'h2', text: 'eBay: Built-In Traffic, Fastest to a First Sale', icon: IconGlobe },
      {
        type: 'p',
        text: "eBay's biggest advantage is that buyers are already searching when they arrive — you don't need to build an audience from zero. It suits sellers who want to start selling quickly, test products with minimal setup, and learn the fundamentals of online selling (pricing, listings, customer service) on a platform that already has demand. The trade-off is less control over branding and more competition on price. Our [guide to starting on eBay from Pakistan](/blog/pakistan-se-ebay-kaise-shuru-karein/) covers the exact setup steps, and our [eBay Selling Mastery course](/courses/ebay/) goes deep on the strategy.",
      },
      { type: 'h2', text: 'Shopify: Full Control, Best for Building a Real Brand', icon: IconChart },
      {
        type: 'p',
        text: "Shopify gives you your own store, your own branding, and no marketplace fees eating into every sale — but it also means you're responsible for bringing your own traffic through ads, content or SEO. It's the better long-term choice if your goal is a sellable, defensible brand rather than just a side income, and it's where many of our students move once a product is validated elsewhere. Our [Shopify Store Mastery course](/courses/shopify/) and [Shopify store setup service](/services/shopify-store-setup/) both start from this assumption.",
      },
      { type: 'h2', text: 'TikTok Shop: Fastest-Growing, but Content-First', icon: IconTiktok },
      {
        type: 'p',
        text: "TikTok Shop can move faster than either of the above if you're willing to create content consistently — sales come from video discovery, not search intent, which is a genuinely different skill from running listings. It suits sellers who are comfortable (or willing to get comfortable) on camera, or who can work with creator affiliates. Our [TikTok Shop beginner's guide](/blog/tiktok-shop-beginners-guide/) explains exactly how that discovery process works.",
      },
      { type: 'h2', text: 'Etsy: The Best Fit for Handmade and Creative Products', icon: IconGift },
      {
        type: 'p',
        text: "Etsy only makes sense if your product is genuinely handmade, vintage or a craft supply — it's not a general-purpose marketplace. For sellers who do fit that category, it's one of the least price-competitive platforms, because buyers are paying for craftsmanship, not just the cheapest option. Our [Etsy shop setup guide](/blog/etsy-shop-setup-guide-pakistan/) covers what qualifies and how to price handmade work correctly.",
      },
      { type: 'h2', text: 'A Side-by-Side Summary', icon: IconCheck },
      {
        type: 'ul',
        items: [
          'eBay — best for: fast start, existing buyer traffic, learning the fundamentals',
          'Shopify — best for: long-term brand building, full control, no marketplace fees',
          'TikTok Shop — best for: sellers willing to create consistent video content',
          'Etsy — best for: handmade, vintage or craft-supply products specifically',
        ],
      },
      { type: 'h2', text: 'What About Budget, Not Just Skill?', icon: IconAward },
      {
        type: 'p',
        text: "If your available budget is small, eBay and TikTok Shop tend to need less upfront capital, since you're relying on existing platform traffic rather than paying to build an audience. Shopify generally needs a marketing budget behind it from the start to see real volume. Etsy sits in between — your main investment is time spent on craftsmanship and photography rather than ad spend.",
      },
      { type: "h2", text: "You Don't Have to Pick Only One", icon: IconStar },
      {
        type: 'p',
        text: "Many of our most successful students run more than one platform at once — validating a product on eBay, then building a Shopify store around it once it's proven, while testing TikTok Shop as a separate discovery channel. The platforms aren't mutually exclusive; they're tools for different stages of the same business. If you're also weighing dropshipping against holding your own inventory, our [dropshipping vs traditional ecommerce comparison](/blog/dropshipping-vs-traditional-ecommerce/) covers that separate decision.",
      },
      {
        type: 'p',
        text: "Not sure which combination makes sense for your budget and product? [Message us for a free consultation](/contact/) and we'll recommend a starting point based on your specific situation, not a generic answer.",
      },
    ],
  },
  {
    slug: 'ebay-account-suspended-what-to-do',
    title: 'eBay Account Suspended or Restricted? What to Do Next',
    excerpt:
      "A suspension can feel like the end of your store, but most restrictions have a clear path back. Here's what to check first and how to avoid the mistakes that make it worse.",
    category: 'eBay Selling',
    author: 'Ayesha Khan',
    date: '2026-10-22',
    readTime: '8 min read',
    icon: IconShield,
    thumb: 'from-teal-600 to-emerald-800',
    body: [
      {
        type: 'p',
        text: "Few things are as stressful as logging into eBay and seeing your account restricted or suspended — especially if selling is a real part of your income. The good news is that most restrictions are recoverable if you respond correctly and don't make the situation worse through panic or guesswork. Here's what to actually do.",
      },
      { type: 'h2', text: 'First, Read the Exact Reason eBay Gave You', icon: IconSearch },
      {
        type: 'p',
        text: "eBay almost always states a specific reason — a policy violation, a performance metric issue, or an identity verification problem. Don't skim this message. The fix is completely different depending on whether it's a listing policy issue versus an account standing issue, and acting on the wrong assumption wastes the time you have to respond.",
      },
      { type: "h2", text: "Check eBay's Official Policies for Your Specific Issue", icon: IconShield },
      {
        type: 'p',
        text: "Before doing anything else, read the relevant section of eBay's [selling policies](https://www.ebay.com/help/policies/selling-policies/selling-practices-policy) that matches the reason given. Many sellers appeal based on what they assume the rule says rather than what it actually says, which weakens their case significantly.",
      },
      { type: "h2", text: "Don't Open a Second Account", icon: IconUsers },
      {
        type: 'p',
        text: "This is the single most damaging mistake we see. Opening a new account to keep selling while a restriction is active is itself a policy violation, and it can turn a recoverable, temporary restriction into a permanent one across both accounts. However frustrating the wait is, it's almost always shorter than the consequences of this shortcut.",
      },
      { type: 'h2', text: 'Preparing Your Appeal', icon: IconTag },
      {
        type: 'ul',
        items: [
          'State clearly which policy you understand was violated, in your own words',
          "Explain specifically what you've changed or will change — not just that you're sorry",
          'Attach any evidence that supports your case (invoices, tracking, correspondence)',
          'Keep it factual and concise — long, emotional appeals are read less carefully',
        ],
      },
      { type: 'h2', text: 'Common Causes We See Most Often', icon: IconChart },
      {
        type: 'p',
        text: "In our [account health & policy guidance service](/services/account-health-policy-guidance/), the most frequent causes are late shipping patterns, a spike in buyer disputes, identity verification gaps, and listing practices that unintentionally duplicate or misrepresent items. Several of these connect directly to mistakes we cover in [7 mistakes new eBay sellers make](/blog/ebay-beginner-mistakes-to-avoid/) — many restrictions are the delayed consequence of one of those seven.",
      },
      { type: 'h2', text: 'How Long Does an Appeal Usually Take?', icon: IconClock },
      {
        type: 'p',
        text: "Response times vary, but most straightforward appeals are reviewed within a few business days to a couple of weeks. Repeatedly submitting the same appeal doesn't speed this up and can sometimes work against you — submit one clear, well-prepared appeal and give it time before following up.",
      },
      { type: 'h2', text: 'Preventing It From Happening Again', icon: IconAward },
      {
        type: 'p',
        text: "Once your account is back in good standing, treat it as a reset rather than a close call to forget about. Review your shipping times honestly, keep your messages prompt, and re-check your listings against current policy — policies change more often than most sellers realize. A quarterly self-review takes an hour and prevents most repeat issues.",
      },
      {
        type: 'p',
        text: "If you're currently facing a restriction and aren't sure how to respond, our [account health & policy guidance service](/services/account-health-policy-guidance/) reviews your specific case and helps you put together a proper appeal — [message us on WhatsApp](/contact/) with the details and we'll tell you honestly what we think your options are.",
      },
    ],
  },
  {
    slug: 'shopify-store-setup-checklist',
    title: 'Shopify Store Setup Checklist: Everything to Do Before You Launch',
    excerpt:
      "A Shopify store that looks finished and one that's actually ready to take orders are two different things. Here's the full checklist we run through before any store goes live.",
    category: 'Shopify',
    author: 'Ayesha Khan',
    date: '2026-10-24',
    readTime: '10 min read',
    icon: IconShoppingBag,
    thumb: 'from-emerald-700 to-green-900',
    body: [
      {
        type: 'p',
        text: "Shopify makes it dangerously easy to launch a store that looks finished but isn't actually ready to sell — a theme installed, a few products added, and a \"Launch\" button that quietly skips a dozen things that matter. This is the exact checklist we run through with students and clients before any store goes live, in the order we recommend doing it.",
      },
      { type: 'h2', text: 'Choosing and Customizing Your Theme', icon: IconMonitor },
      {
        type: 'p',
        text: "Pick a theme built for your product type and traffic volume, not just the one that looks best in the demo — a theme loaded with animations and large images can slow your store down on mobile, where most of your traffic will come from. Customize the colors, fonts and homepage layout to match your brand, but resist the urge to install every feature a theme offers. More sections and widgets usually mean slower load times, not more sales.",
      },
      { type: 'h2', text: 'Building Your Product Catalog Properly', icon: IconTag },
      {
        type: 'p',
        text: "Every product needs a clear title, an honest description that answers real buyer questions, accurate variants (size, color, material) and at least three to five genuine photos. Organize products into collections that make sense to a buyer browsing your store, not just categories that make sense to you internally — this directly affects how easy your store is to navigate and how well it performs in Shopify's own search.",
      },
      { type: 'h2', text: 'Payment Gateway and Checkout Setup', icon: IconChart },
      {
        type: 'p',
        text: "Set up and fully test your payment gateway before launch — a checkout that fails or looks untrustworthy at the final step is one of the most common reasons stores lose sales they've already won. Place a real test order yourself, all the way through to payment, so you experience exactly what your customer will.",
      },
      { type: 'h2', text: 'Shipping Rates and Policies', icon: IconBox },
      {
        type: 'p',
        text: "Decide your shipping rates based on real costs, not guesswork — the same mistake that quietly kills margin on marketplaces like eBay kills it here too. Write clear shipping, return and refund policies and publish them where buyers can actually find them before checkout, not buried in a footer link nobody clicks.",
      },
      { type: 'h2', text: 'Essential Apps Worth Installing', icon: IconSparkles },
      {
        type: 'ul',
        items: [
          'A reviews app, so social proof starts building from your first sale',
          'Abandoned cart recovery, which recovers sales you\'d otherwise lose silently',
          'An email capture tool, so you can market to visitors who don\'t buy immediately',
          'Analytics beyond Shopify\'s default dashboard, once your store has real traffic',
        ],
      },
      {
        type: 'p',
        text: "Install only what you'll actually use — a store loaded with a dozen apps you never configured properly is slower and harder to maintain than one with five apps doing real work. Shopify's own [App Store](https://apps.shopify.com/) and [Help Center](https://help.shopify.com/) are the first place to check an app's reviews before installing.",
      },
      { type: 'h2', text: 'Legal Pages and Trust Signals', icon: IconShield },
      {
        type: 'p',
        text: "A privacy policy, terms of service and a visible contact method aren't just legal formalities — they're trust signals that measurably affect whether a first-time visitor feels safe entering their card details. Add a few genuine trust elements: real contact information, clear policies, and if you have any, real customer reviews or a verified social presence.",
      },
      { type: 'h2', text: 'SEO Basics Before You Launch', icon: IconSearch },
      {
        type: 'p',
        text: "Set a clear page title and meta description for your homepage and key product pages, use descriptive (not generic) image file names, and submit your sitemap through [Google Search Console](https://search.google.com/search-console/about) as soon as the store is live. None of this guarantees traffic overnight, but skipping it guarantees you start from zero visibility instead of a head start.",
      },
      { type: 'h2', text: 'Testing a Full Order Before Going Live', icon: IconCheck },
      {
        type: 'ul',
        items: [
          'Place a real order from a customer\'s perspective, on both desktop and mobile',
          'Confirm the order confirmation email actually arrives and looks correct',
          'Check that your fulfillment workflow correctly flags the order to act on',
          'Test at least one return or refund request through your own process',
        ],
      },
      { type: 'h2', text: 'Launch Day and What Comes After', icon: IconRocket },
      {
        type: 'p',
        text: "Launching isn't the finish line — it's closer to the beginning of the actual work. Expect to adjust pricing, descriptions and even your product lineup based on real customer behavior once the store is live. If you're still deciding whether Shopify is the right platform to start on at all, our [eBay vs Shopify vs TikTok Shop vs Etsy comparison](/blog/ebay-vs-shopify-vs-tiktok-shop-vs-etsy/) is worth reading first, and our note on [dropshipping vs traditional ecommerce](/blog/dropshipping-vs-traditional-ecommerce/) covers how to stock the store you're building.",
      },
      {
        type: 'p',
        text: "We walk through every item on this checklist hands-on inside our [Shopify Store Mastery course](/courses/shopify/), and if you'd rather have your store built for you from the ground up, our [Shopify store setup service](/services/shopify-store-setup/) handles the entire process — [message us](/contact/) for a free consultation.",
      },
    ],
  },
  {
    slug: 'marketplace-vs-your-own-website',
    title: 'Marketplace vs Your Own Website: Do You Need Both?',
    excerpt:
      "Selling on eBay or TikTok Shop and having your own website aren't competing choices — they solve different problems. Here's how to think about which one you need, and when.",
    category: 'Ecommerce Strategy',
    author: 'Ayesha Khan',
    date: '2026-10-25',
    readTime: '9 min read',
    icon: IconMonitor,
    thumb: 'from-navy-800 to-brand-800',
    body: [
      {
        type: 'p',
        text: "We get this question from students who already have some traction: \"I'm selling fine on eBay — do I actually need my own website too?\" The honest answer is that marketplaces and your own website solve different problems, and the right setup depends on what stage your business is at, not which option sounds more professional.",
      },
      { type: "h2", text: "What a Marketplace Gives You That a Website Can't", icon: IconGlobe },
      {
        type: 'p',
        text: "A marketplace like [eBay](/courses/ebay/) or [TikTok Shop](/courses/tiktok-shop/) comes with existing buyer traffic from day one. You don't have to convince anyone your platform is trustworthy — the marketplace already did that work. For a new seller with no audience and no marketing budget, this is the fastest realistic path to a first sale, which is exactly why we recommend it as a starting point in our [platform comparison](/blog/ebay-vs-shopify-vs-tiktok-shop-vs-etsy/).",
      },
      { type: "h2", text: "What Your Own Website Gives You That a Marketplace Can't", icon: IconStar },
      {
        type: 'p',
        text: "A website is yours — no marketplace fees on every sale, no algorithm deciding whether your listing gets seen, and full control over branding, customer data and the entire buying experience. It's also the only option that lets you build something a buyer could search for by name, rather than finding you only by browsing a marketplace.",
      },
      { type: 'h2', text: 'The Hidden Cost of Marketplace-Only Selling', icon: IconChart },
      {
        type: 'p',
        text: "Marketplace fees, payment processing costs and increasing competition on price all quietly compound over time. More seriously, you don't own the relationship with your customer — a policy change, a suspension, or an algorithm update can affect your visibility overnight, and you have very little recourse. Sellers who rely entirely on one marketplace are building on land they don't own.",
      },
      { type: 'h2', text: 'When a Website Starts to Make Sense', icon: IconTarget },
      {
        type: 'p',
        text: "The usual signal isn't a specific revenue number — it's when you've validated that a product genuinely sells, and you want to stop paying marketplace fees on every single order, or you want repeat customers to find you directly instead of searching a marketplace each time. Many of our students build their marketplace presence first, then add a website once a product is proven, rather than the other way around.",
      },
      { type: 'h2', text: 'What a Good Small Business Website Actually Needs', icon: IconMonitor },
      {
        type: 'ul',
        items: [
          'Fast load times and a design that works properly on mobile',
          'Clear product pages, pricing and a simple path to checkout or contact',
          'Real trust signals: contact details, policies, genuine reviews',
          'Basic SEO so the site can actually be found, not just exist',
        ],
      },
      { type: 'h2', text: 'Running Both Without Doubling Your Work', icon: IconCode },
      {
        type: 'p',
        text: "The practical risk of running a marketplace and a website together is double data-entry — updating stock in two places, or missing an order because it landed somewhere you weren't checking. This is exactly what proper system architecture solves: connected inventory, orders and payments across every channel you sell on, which is what our [ecommerce solutions service](/services/ecommerce-solutions/) is built around.",
      },
      { type: 'h2', text: 'A Simple Way to Decide', icon: IconCheck },
      {
        type: 'p',
        text: "If you're brand new with no proven product yet, start on a marketplace — it's faster, cheaper, and teaches you what actually sells. Once you have a product with consistent demand, a website stops being a \"nice to have\" and starts being a way to keep more of every sale you're already making.",
      },
      {
        type: 'p',
        text: "Not sure which stage you're at, or want a website that actually represents your brand properly? Our [business website development service](/services/business-website-development/) builds exactly that, and [a free consultation](/contact/) costs nothing to find out what we'd recommend for your specific situation.",
      },
    ],
  },
  {
    slug: 'scaling-past-first-100-sales',
    title: 'Scaling Past Your First 100 Sales: What Actually Changes',
    excerpt:
      "The habits that get you to your first 100 sales often stop working right after — and most sellers don't notice until something breaks. Here's what actually changes as you scale.",
    category: 'Growth & Scaling',
    author: 'Ayesha Khan',
    date: '2026-10-26',
    readTime: '9 min read',
    icon: IconChart,
    thumb: 'from-blue-600 to-navy-900',
    body: [
      {
        type: 'p',
        text: "Your first 100 sales prove that people will actually buy what you're selling — that's a real milestone. What surprises most sellers is that the habits that got them there (doing everything manually, checking messages whenever, tracking numbers in your head) are exactly what starts breaking right after. Here's what actually changes as volume grows, and what to fix before it becomes a problem.",
      },
      { type: 'h2', text: 'Your First 100 Sales Prove the Concept — Then What?', icon: IconTarget },
      {
        type: 'p',
        text: "Getting to 100 sales tells you the product, pricing and positioning work at a small scale. It doesn't tell you whether your current process works at three or five times that volume — and most sellers find out the hard way, mid-rush, instead of planning for it in advance.",
      },
      { type: "h2", text: "Fulfillment Starts to Break Before Anything Else Does", icon: IconBox },
      {
        type: 'p',
        text: "Manually packing and shipping ten orders a week is manageable. Thirty or fifty a week, done the same manual way, is where mistakes start creeping in — wrong items, missed orders, shipping delays. This is usually the first real bottleneck sellers hit, and it's exactly what our [dropshipping setup & automation service](/services/dropshipping-setup-automation/) and [product research & sourcing service](/services/product-research-sourcing/) are designed to get ahead of.",
      },
      { type: "h2", text: "Customer Service Needs a System, Not Just You", icon: IconUsers },
      {
        type: 'p',
        text: "Answering every message personally works at low volume and becomes unsustainable fast as orders grow. Before you're overwhelmed, put basic structure in place: saved replies for common questions, clear response-time expectations, and a simple way to track which messages are still open. An AI-assisted first line of support — which we cover in [practical AI tools for sellers](/blog/ai-tools-for-ecommerce-sellers/) — is often the first upgrade worth making here.",
      },
      { type: 'h2', text: "Ad Spend That Worked Small Doesn't Always Scale Cleanly", icon: IconAdTarget },
      {
        type: 'p',
        text: "A campaign that performed well on a small daily budget doesn't always perform the same way once you increase spend significantly — audiences saturate, costs per sale creep up, and what worked at a small scale needs active management at a larger one. Our [beginner's ad budget framework](/blog/facebook-google-ads-budget-for-beginners/) covers the testing phase; scaling spend responsibly is a different, ongoing discipline, which is exactly what our [store growth & ads management service](/services/store-growth-ads-management/) handles for sellers past that early stage.",
      },
      { type: 'h2', text: 'Your Tracking Needs to Grow Up Too', icon: IconChart },
      {
        type: 'p',
        text: "Tracking orders, customers and inventory in your head — or in a single spreadsheet — works until it suddenly doesn't, usually right when volume spikes and you can least afford the confusion. If you're finding it harder to answer basic questions like \"how many of this item do I have left\" or \"which customers haven't received their order,\" that's the signal. Our [custom software & CRM service](/services/custom-software-crm/) builds systems around exactly this kind of growing pain, instead of forcing your business into a generic tool that doesn't fit how you actually work.",
      },
      { type: 'h2', text: 'Cash Flow Gets Tighter, Not Easier, as You Grow', icon: IconShield },
      {
        type: 'p',
        text: "Counterintuitively, growth often strains cash flow rather than relieving it — more inventory tied up, more ad spend committed before it's returned, more staff or help needed before the extra revenue has actually landed in your account. Plan your reorders and ad budget increases around cash you've already received, not sales you expect to make.",
      },
      { type: 'h2', text: 'Knowing When to Bring in Help', icon: IconRocket },
      {
        type: 'p',
        text: "Trying to personally handle fulfillment, customer service, ad management and bookkeeping all at once past a certain volume isn't dedication — it's usually what quietly caps how big the business can get. Recognizing which specific piece to hand off first (often fulfillment or ad management) is more valuable than trying to do everything a little better yourself.",
      },
      {
        type: 'p',
        text: "If your store has outgrown the systems that got you here, [message us for a free consultation](/contact/) — we'll tell you honestly which service actually fits where you are, whether that's ad management, automation, or a custom system built around how you work.",
      },
    ],
  },
]

export function getBlogPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug)
}

// Newest first — the order posts are defined in above isn't chronological,
// so anything display-facing (the blog listing) should use this instead
// of the raw array.
export function getSortedBlogPosts() {
  return [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date))
}

export function getRelatedPosts(slug, count = 3) {
  const current = getBlogPostBySlug(slug)
  const byNewest = (a, b) => new Date(b.date) - new Date(a.date)
  const others = blogPosts.filter((post) => post.slug !== slug).sort(byNewest)
  if (!current) return others.slice(0, count)

  // Prefer posts in the same category so "related" is actually related,
  // then fill any remaining slots with the rest — newest first within
  // each group.
  const sameCategory = others.filter((post) => post.category === current.category)
  const rest = others.filter((post) => post.category !== current.category)
  return [...sameCategory, ...rest].slice(0, count)
}
