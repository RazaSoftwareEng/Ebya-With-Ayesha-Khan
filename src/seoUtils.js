import { siteUrl } from './siteConfig'

// Netlify serves every prerendered page at its trailing-slash URL (and 301s the
// bare path to it), so canonical / sitemap / schema URLs must use that form.
export function pageUrl(path = '/') {
  return `${siteUrl}${path.endsWith('/') ? path : `${path}/`}`
}

export const SITE_NAME = 'Ayesha Khan Official'
export const TITLE_SUFFIX = 'eBay with Ayesha Khan'

const TITLE_MAX = 78
const DESCRIPTION_MAX = 160

function clip(text, max) {
  if (text.length <= max) return text
  const cut = text.slice(0, max - 1)
  return `${cut.slice(0, cut.lastIndexOf(' ')).replace(/[\s,;:.—-]+$/, '')}…`
}

export function buildSeoMeta({
  title,
  rawTitle,
  description,
  path = '/',
  type = 'website',
  image = '/og-image.jpg',
  noindex = false,
}) {
  const branded = title ? `${title} | ${TITLE_SUFFIX}` : TITLE_SUFFIX
  return {
    fullTitle: rawTitle || (branded.length <= TITLE_MAX ? branded : title),
    description: clip(description, DESCRIPTION_MAX),
    type,
    url: pageUrl(path),
    imageUrl: image.startsWith('http') ? image : `${siteUrl}${image}`,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
  }
}
