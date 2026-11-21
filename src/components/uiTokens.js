// Design tokens shared by ui.jsx and the pages (kept out of the component file
// so React Fast Refresh keeps working).

/* ── Accent palettes (full class strings so Tailwind can see them) ───────── */
export const accents = [
  { border: 'border-t-brand-600', tile: 'bg-brand-600 shadow-brand-600/30', glow: 'bg-brand-100', shadow: 'shadow-brand-600/10 hover:shadow-brand-600/20', text: 'text-brand-600' },
  { border: 'border-t-emerald-500', tile: 'bg-emerald-500 shadow-emerald-500/30', glow: 'bg-emerald-100', shadow: 'shadow-emerald-600/10 hover:shadow-emerald-600/20', text: 'text-emerald-600' },
  { border: 'border-t-violet-500', tile: 'bg-violet-500 shadow-violet-500/30', glow: 'bg-violet-100', shadow: 'shadow-violet-600/10 hover:shadow-violet-600/20', text: 'text-violet-600' },
  { border: 'border-t-orange-500', tile: 'bg-orange-500 shadow-orange-500/30', glow: 'bg-orange-100', shadow: 'shadow-orange-600/10 hover:shadow-orange-600/20', text: 'text-orange-600' },
  { border: 'border-t-sky-500', tile: 'bg-sky-500 shadow-sky-500/30', glow: 'bg-sky-100', shadow: 'shadow-sky-600/10 hover:shadow-sky-600/20', text: 'text-sky-600' },
  { border: 'border-t-rose-500', tile: 'bg-rose-500 shadow-rose-500/30', glow: 'bg-rose-100', shadow: 'shadow-rose-600/10 hover:shadow-rose-600/20', text: 'text-rose-600' },
]

const courseAccentIndex = { ebay: 0, shopify: 1, ai: 2, etsy: 3, 'digital-marketing': 4, 'tiktok-shop': 5 }
export const courseAccent = (slug) => accents[courseAccentIndex[slug] ?? 0]
export const accentAt = (i) => accents[i % accents.length]

/* ── Buttons ──────────────────────────────────────────────────────────── */
export const btnPrimary =
  'inline-flex items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700'
export const btnGreen =
  'inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-emerald-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-600/25 transition-all duration-300 hover:-translate-y-0.5'
export const btnOutline =
  'inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-navy-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-navy-900'

export function formatPostDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' })
}
