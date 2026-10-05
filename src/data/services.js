import {
  IconAdTarget,
  IconBox,
  IconChart,
  IconCode,
  IconGlobe,
  IconMegaphone,
  IconMonitor,
  IconRocket,
  IconShield,
  IconShoppingBag,
  IconTarget,
  IconTiktok,
} from '../components/icons'

export const services = [
  {
    slug: 'ebay-store-setup-management',
    title: 'eBay Store Setup & Management',
    icon: IconBox,
    thumb: 'from-slate-800 to-slate-950',
    desc: 'End-to-end setup and ongoing management of your eBay seller account — profile, policies, shipping and listing structure done right.',
    whatIsIt:
      'A done-for-you (or done-with-you) eBay seller account build: profile and business policies, shipping templates, category and listing structure, and the settings that keep new accounts healthy from day one.',
    whyItMatters:
      "Most account suspensions and slow sales come from mistakes made in the first few weeks — wrong policies, missing verification, or a listing structure that doesn't scale. Getting this right from the start saves months of avoidable problems.",
    included: [
      'eBay seller account creation & identity verification guidance',
      'Business policies: returns, payment, shipping',
      'Store categories & listing structure setup',
      'Shipping templates and rate configuration',
      'Account settings review for suspension-risk red flags',
    ],
    whoItsFor:
      'New sellers opening their first eBay store, and existing sellers whose account was set up incorrectly and needs a clean-up.',
  },
  {
    slug: 'tiktok-shop-setup-management',
    title: 'TikTok Shop Setup & Management',
    icon: IconTiktok,
    thumb: 'from-rose-600 to-fuchsia-700',
    desc: 'Full TikTok Shop setup and management — product listings, content strategy and order fulfillment handled for you.',
    whatIsIt:
      'Complete TikTok Shop seller onboarding: shop registration, product catalog upload, a short-form content plan built around your products, and order/fulfillment workflow setup.',
    whyItMatters:
      "TikTok Shop rewards sellers who pair the right product listings with consistent, native-feeling content — the two rarely come from the same person in-house. We set up both so your shop is actually discoverable, not just live.",
    included: [
      'TikTok Shop account & catalog setup',
      'Product listing optimization for TikTok search',
      'Short-form content plan tailored to your products',
      'Creator/affiliate collaboration guidance',
      'Order and fulfillment workflow setup',
    ],
    whoItsFor:
      'Sellers who want to launch on TikTok Shop, or existing sellers whose shop is live but not getting views or sales.',
  },
  {
    slug: 'product-research-sourcing',
    title: 'Product Research & Sourcing',
    icon: IconTarget,
    thumb: 'from-brand-600 to-navy-800',
    desc: 'We help you identify winning, profitable products and connect with vetted, reliable suppliers.',
    whatIsIt:
      'A structured product-hunting process using demand, competition and margin data to shortlist products worth selling, followed by introductions to suppliers we have vetted for reliability and pricing.',
    whyItMatters:
      "The single biggest reason new stores fail isn't marketing — it's picking the wrong product. Validating demand and supplier reliability before you invest time or money removes most of that risk.",
    included: [
      'Niche and product shortlisting using proven research methods',
      'Demand, competition & margin analysis for each candidate',
      'Supplier vetting and introductions (including Pakistani suppliers)',
      'Sample ordering guidance before committing to a product',
      'A final product shortlist with sourcing notes',
    ],
    whoItsFor:
      "Sellers who haven't picked a product yet, or sellers whose current product isn't selling and needs validating or replacing.",
  },
  {
    slug: 'dropshipping-setup-automation',
    title: 'Dropshipping Setup & Automation',
    icon: IconRocket,
    thumb: 'from-emerald-600 to-teal-700',
    desc: 'Full dropshipping workflow setup — order automation, supplier integration and fulfillment tools configured for you.',
    whatIsIt:
      'The complete dropshipping backend: supplier integration, automated order routing, tracking sync and the tools that let orders fulfill themselves without you manually processing each one.',
    whyItMatters:
      "Dropshipping only scales when fulfillment is automated. Sellers who process every order by hand hit a ceiling fast — and usually hit it right when sales start picking up.",
    included: [
      'Supplier/platform integration (AliExpress, CJ, local suppliers & more)',
      'Automated order routing and tracking sync',
      'Inventory and pricing sync setup',
      'Returns & customer service workflow',
      'Testing a full order end-to-end before launch',
    ],
    whoItsFor:
      'Sellers running (or about to run) a dropshipping store who are tired of manually processing every order.',
  },
  {
    slug: 'store-growth-ads-management',
    title: 'Store Growth & Ads Management',
    icon: IconChart,
    thumb: 'from-amber-500 to-orange-600',
    desc: "Data-driven strategies and paid advertising guidance to scale your existing store's revenue.",
    whatIsIt:
      "Ongoing, data-driven growth support for stores that are already selling: pricing and listing optimization, paid ad strategy, and a review cadence focused on raising revenue and margin.",
    whyItMatters:
      "A store that's already making sales usually has specific bottlenecks — conversion rate, ad spend efficiency, repeat purchases — that generic advice won't fix. Growth needs to be diagnosed per-store, not templated.",
    included: [
      'Store and listing performance audit',
      'Pricing and conversion-rate optimization',
      'Paid ad strategy across relevant platforms',
      'Monthly performance review and adjustments',
      'Scaling plan tied to your margin, not just traffic',
    ],
    whoItsFor:
      'Sellers with an existing store generating sales who want a structured plan to grow revenue, not just more traffic.',
  },
  {
    slug: 'account-health-policy-guidance',
    title: 'Account Health & Policy Guidance',
    icon: IconShield,
    thumb: 'from-teal-600 to-emerald-800',
    desc: 'Guidance to keep your seller account in good standing and avoid common suspension triggers.',
    whatIsIt:
      "A review of your account's current health metrics, policies and listing practices, flagging the issues that commonly lead to warnings, restrictions or suspensions — plus a plan to fix them.",
    whyItMatters:
      "A suspended account stops your income overnight, often with little warning. Most suspensions trace back to a handful of avoidable patterns, and catching them early is far easier than appealing after the fact.",
    included: [
      'Account health metrics review',
      'Policy compliance check (returns, shipping, item condition)',
      'Listing practice review for common risk triggers',
      'A prioritized fix-it plan',
      'Guidance if you are currently facing a restriction or suspension',
    ],
    whoItsFor:
      'Sellers who have received a warning, are worried about their account standing, or simply want a professional review before it becomes a problem.',
  },
  {
    slug: 'business-website-development',
    title: 'Business Website Development',
    icon: IconMonitor,
    thumb: 'from-navy-800 to-brand-800',
    desc: 'Professional, mobile-friendly business websites built to represent your brand and convert visitors into customers.',
    whatIsIt:
      'A custom-built, mobile-friendly website for your business — brand presence, service or product pages, and a clear path for visitors to contact or buy, built rather than assembled from a generic template.',
    whyItMatters:
      "Many buyers and partners check your website before they trust your brand. A slow, outdated or template-looking site quietly costs you credibility — and customers — before you ever get a chance to talk to them.",
    included: [
      'Custom design matched to your brand',
      'Mobile-responsive, fast-loading pages',
      'Contact forms and WhatsApp/lead capture integration',
      'Basic on-page SEO setup',
      'Hosting and domain setup guidance',
    ],
    whoItsFor:
      "Businesses that don't have a website yet, or have one that looks outdated, loads slowly, or doesn't convert visitors into leads.",
  },
  {
    slug: 'shopify-store-setup',
    title: 'Shopify Store Setup',
    icon: IconShoppingBag,
    thumb: 'from-emerald-700 to-green-900',
    desc: 'Complete Shopify store build — theme setup, product catalog, payment integration and everything needed to start selling.',
    whatIsIt:
      'A complete Shopify store build from the ground up: theme setup and customization, product catalog, payment and shipping configuration, and the essential apps needed to run a store properly.',
    whyItMatters:
      "Shopify makes it easy to launch a store that looks unfinished — missing policies, no payment gateway configured correctly, a theme that isn't optimized for mobile. We make sure it's actually ready to take orders.",
    included: [
      'Theme selection and customization to match your brand',
      'Product catalog upload and collection structure',
      'Payment gateway and shipping configuration',
      'Essential app setup (reviews, upsells, email capture)',
      'Pre-launch checklist and test order',
    ],
    whoItsFor:
      'Entrepreneurs and businesses launching a new Shopify store who want it built correctly the first time.',
  },
  {
    slug: 'ecommerce-solutions',
    title: 'Ecommerce Solutions',
    icon: IconGlobe,
    thumb: 'from-cyan-600 to-sky-800',
    desc: 'End-to-end ecommerce setup across platforms — store architecture, payment gateways and order management systems.',
    whatIsIt:
      'A broader, platform-agnostic ecommerce build for businesses selling (or planning to sell) across more than one channel — store architecture, payment gateways, and order management tying it together.',
    whyItMatters:
      "Selling across multiple platforms without a connected system means double data-entry, stock mismatches and missed orders. The right architecture from the start prevents that from ever becoming a problem.",
    included: [
      'Multi-platform store architecture planning',
      'Payment gateway setup across channels',
      'Order and inventory management system setup',
      'Workflow documentation for your team',
      'Ongoing technical support',
    ],
    whoItsFor:
      'Businesses selling (or planning to sell) across multiple platforms or channels that need everything connected properly.',
  },
  {
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    icon: IconMegaphone,
    thumb: 'from-sky-600 to-blue-800',
    desc: "Data-driven social media, content and marketing strategy to grow your brand's visibility and drive consistent traffic.",
    whatIsIt:
      "A content and social media strategy built around your brand and audience — what to post, where, and how often — paired with the tracking needed to know what's actually driving traffic and sales.",
    whyItMatters:
      "Posting without a strategy rarely builds an audience. A clear content plan tied to real goals — traffic, followers, or sales — is what turns social media from a time sink into a growth channel.",
    included: [
      'Brand and audience strategy',
      'Content calendar and posting plan',
      'Social media account setup/optimization',
      'Performance tracking and monthly reporting',
      'Guidance on organic growth tactics for your niche',
    ],
    whoItsFor:
      'Businesses and sellers who want consistent, strategic social media presence instead of occasional, unplanned posting.',
  },
  {
    slug: 'google-meta-ads',
    title: 'Google & Meta Ads',
    icon: IconAdTarget,
    thumb: 'from-blue-600 to-navy-900',
    desc: 'Expertly managed Google Search, Shopping and Meta ad campaigns built to lower your cost per sale and scale profitably.',
    whatIsIt:
      'Fully managed paid advertising on Google (Search & Shopping) and Meta (Facebook & Instagram) — campaign setup, audience and keyword targeting, creative guidance, and ongoing optimization.',
    whyItMatters:
      "Paid ads can scale a store fast, or burn through a budget just as fast, depending on how they're set up and managed. Proper tracking and weekly optimization is the difference between the two outcomes.",
    included: [
      'Campaign strategy and setup (Search, Shopping, Meta)',
      'Audience and keyword targeting',
      'Ad creative and copy guidance',
      'Conversion tracking setup',
      'Weekly optimization and reporting',
    ],
    whoItsFor:
      'Sellers and businesses ready to invest in paid advertising who want it professionally managed, not run as a guess.',
  },
  {
    slug: 'custom-software-crm',
    title: 'Custom Software & CRM',
    icon: IconCode,
    thumb: 'from-slate-700 to-navy-900',
    desc: 'Tailored software and CRM systems to manage your customers, orders and operations exactly the way your business works.',
    whatIsIt:
      'A custom-built software or CRM system designed around how your business actually operates — tracking customers, orders and processes — instead of forcing your workflow into an off-the-shelf tool.',
    whyItMatters:
      "Generic CRM and spreadsheet systems break down as a business grows. A system built around your real workflow saves hours every week and reduces the errors that come from manual tracking.",
    included: [
      'Requirements review of your current workflow',
      'Custom CRM / internal tool design and build',
      'Order, customer and inventory tracking',
      'Team training on the new system',
      'Ongoing support and updates',
    ],
    whoItsFor:
      'Growing businesses whose current spreadsheets or generic tools can no longer keep up with their order and customer volume.',
  },
]
