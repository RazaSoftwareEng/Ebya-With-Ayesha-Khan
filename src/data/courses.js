import { IconTag, IconShoppingBag, IconTiktok, IconGift, IconSparkles, IconMegaphone } from '../components/icons'

export const courses = [
  {
    slug: 'ebay',
    title: 'eBay Selling Mastery',
    level: 'Beginner to Advanced',
    duration: '3 Months',
    mode: 'Online / In-Person',
    icon: IconTag,
    tag: 'Bestseller',
    thumb: 'from-slate-800 to-slate-950',
    desc: 'Go from zero to a fully optimized eBay store — account setup, listings that convert, and the systems top sellers use to scale.',
    points: [
      'Account setup & verification',
      'Listings that convert',
      'Order, returns & policy management',
      'Scaling to a full catalog',
    ],
    whatIsIt:
      "eBay is one of the world's largest online marketplaces, connecting millions of buyers with sellers across nearly every product category — from everyday items to rare collectibles.",
    whyItMatters:
      "With built-in buyer traffic and a trusted global brand, eBay remains one of the fastest ways for a new seller to make their first sale without building an audience from scratch.",
    curriculum: [
      'Creating & verifying a professional seller account',
      'Understanding eBay policies, fees & seller protections',
      'Keyword research & writing listings that convert',
      'Pricing strategy, shipping & handling setup',
      'Managing orders, returns & customer messages',
      'Avoiding suspensions & maintaining account health',
      'Scaling from a few listings to a full catalog',
      'Tools & software top eBay sellers actually use',
    ],
    whoItsFor:
      'Complete beginners exploring online selling, and existing sellers who want to fix an underperforming store.',
  },
  {
    slug: 'shopify',
    title: 'Shopify Store Mastery',
    level: 'Beginner to Advanced',
    duration: '3 Months',
    mode: 'Online / In-Person',
    icon: IconShoppingBag,
    thumb: 'from-emerald-600 to-teal-700',
    desc: 'Build and launch your own branded Shopify store — from theme setup to your first paid ad campaign.',
    points: [
      'Store setup & theme customization',
      'Product pages that convert',
      'Apps, automation & fulfillment',
      'Driving traffic with paid ads',
    ],
    whatIsIt:
      'Shopify is the leading platform for building your own independent online store — giving you full control over branding, pricing and the customer experience, unlike marketplace selling.',
    whyItMatters:
      'Owning your store means owning your customer relationships, your brand and your profit margins — Shopify is how most successful dropshipping and branded ecommerce businesses are built today.',
    curriculum: [
      'Setting up your store, domain & theme',
      'Product research & building your catalog',
      'Writing product pages that convert visitors into buyers',
      'Connecting suppliers & automating order fulfillment',
      'Essential apps for reviews, upsells & email marketing',
      'Running your first Facebook & TikTok ad campaigns',
      'Reading store analytics & improving conversion rate',
      'Scaling winning products & building a repeat-customer brand',
    ],
    whoItsFor:
      'Sellers who want their own branded store instead of relying on a marketplace, and dropshippers ready to build a long-term business.',
  },
  {
    slug: 'tiktok-shop',
    title: 'TikTok Shop Selling',
    level: 'Beginner to Intermediate',
    duration: '3 Months',
    mode: 'Online',
    icon: IconTiktok,
    tag: 'Trending',
    thumb: 'from-rose-600 to-fuchsia-700',
    desc: 'Tap into one of the fastest-growing sales channels — sell directly to buyers through TikTok Shop and viral content.',
    points: [
      'TikTok Shop setup & product listing',
      'Content that drives sales',
      'Creator & affiliate collaborations',
      'Livestream & video selling basics',
    ],
    whatIsIt:
      'TikTok Shop lets sellers list and sell products directly inside the TikTok app — buyers can purchase without ever leaving a video or livestream.',
    whyItMatters:
      "It's one of the fastest-growing ecommerce channels right now, rewarding creative, content-driven sellers over big ad budgets — a real opportunity for new sellers.",
    curriculum: [
      'Setting up a TikTok Shop seller account & catalog',
      'Understanding TikTok Shop policies & payouts',
      'Creating product videos that actually sell',
      'Working with creators & the affiliate program',
      'Running your first livestream shopping session',
      'Using TikTok ads to boost winning content',
      'Fulfillment, returns & customer service on TikTok Shop',
      'Turning viral moments into repeat sales',
    ],
    whoItsFor:
      'Sellers comfortable on camera or willing to learn, and anyone wanting to reach a younger, fast-moving buyer audience.',
  },
  {
    slug: 'etsy',
    title: 'Etsy Store Success',
    level: 'Beginner to Intermediate',
    duration: '3 Months',
    mode: 'Online',
    icon: IconGift,
    thumb: 'from-amber-500 to-orange-600',
    desc: 'Turn handmade, vintage or print-on-demand products into a thriving Etsy shop with real search visibility.',
    points: [
      'Shop setup & branding',
      'SEO-driven listings',
      'Pricing & production planning',
      'Print-on-demand basics',
    ],
    whatIsIt:
      'Etsy is a marketplace built around handmade goods, vintage items, craft supplies and print-on-demand products — with a buyer audience actively searching for unique, personal items.',
    whyItMatters:
      "Etsy's search-driven marketplace rewards good listing SEO over ad spend, making it one of the most accessible platforms for creative sellers and small-batch producers to get discovered.",
    curriculum: [
      'Setting up a shop that builds buyer trust',
      'Etsy SEO — keywords, tags & titles that get found',
      'Photography & listing presentation that sells',
      'Pricing for profit, including fees & materials',
      'Print-on-demand & handmade production workflows',
      'Managing custom orders & customer messages',
      'Using Etsy Ads & seasonal trends to grow sales',
      'Building repeat buyers & positive reviews',
    ],
    whoItsFor:
      'Creative sellers, crafters, and anyone exploring print-on-demand or handmade products as a business.',
  },
  {
    slug: 'ai',
    title: 'AI for Ecommerce Sellers',
    level: 'All Levels',
    duration: '3 Months',
    mode: 'Online',
    icon: IconSparkles,
    tag: 'New',
    thumb: 'from-brand-600 to-navy-800',
    desc: 'Use practical AI tools to research products, write listings, create visuals and automate customer replies — in a fraction of the time.',
    points: [
      'AI product & niche research',
      'AI-written listings & ad copy',
      'AI image & video creation',
      'Chatbots & automated support',
    ],
    whatIsIt:
      'A hands-on course covering the AI tools modern ecommerce sellers actually use day-to-day — not the theory, the workflow.',
    whyItMatters:
      'Sellers using AI tools are cutting listing creation, research and customer support time dramatically — giving small sellers the speed that used to require a full team.',
    curriculum: [
      'AI tools for product & trend research',
      'Writing high-converting listings & ad copy with AI',
      'Generating product images & videos with AI tools',
      'Building a simple AI chatbot for customer questions',
      'Automating repetitive tasks with no-code AI workflows',
      'Using AI for competitor & pricing analysis',
      'Practical dos, don\'ts & platform policy limits',
      'Building your own AI-assisted daily workflow',
    ],
    whoItsFor:
      'Any seller — beginner to advanced — on eBay, Shopify, Etsy or TikTok Shop who wants to work faster.',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing for Ecommerce',
    level: 'Beginner to Advanced',
    duration: '3 Months',
    mode: 'Online / In-Person',
    icon: IconMegaphone,
    thumb: 'from-sky-600 to-blue-800',
    desc: 'Drive real traffic and sales with Facebook, Instagram, Google & TikTok ads — plus the organic and email tactics that keep customers coming back.',
    points: [
      'Paid ad campaigns that convert',
      'Organic social growth',
      'Email & retargeting',
      'Analytics & budget optimization',
    ],
    whatIsIt:
      'A practical marketing course covering the paid and organic channels ecommerce sellers rely on to drive traffic to their store — whether it is Shopify, Etsy, or a marketplace listing.',
    whyItMatters:
      'The best product in the world still needs buyers to find it — digital marketing skills are what turn a store with zero traffic into one with consistent daily sales.',
    curriculum: [
      'Facebook & Instagram ad campaigns from scratch',
      'Google Shopping & search ads fundamentals',
      'TikTok ads & creative that performs',
      'Retargeting & email marketing flows that recover sales',
      'Organic content & social media growth strategy',
      'Tracking pixels, analytics & reading real performance data',
      'Budgeting, scaling & cutting underperforming campaigns',
      'Building a simple monthly marketing plan',
    ],
    whoItsFor:
      'Store owners and sellers on any platform who want consistent traffic instead of relying on luck.',
  },
]
