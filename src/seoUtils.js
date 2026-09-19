import { siteUrl } from './siteConfig'

export const SITE_NAME = 'Ayesha Khan Official'
export const TITLE_SUFFIX = 'eBay with Ayesha Khan'

export function buildSeoMeta({
  title,
  rawTitle,
  description,
  path = '/',
  type = 'website',
  image = '/og-image.jpg',
  noindex = false,
}) {
  return {
    fullTitle: rawTitle || (title ? `${title} | ${TITLE_SUFFIX}` : TITLE_SUFFIX),
    description,
    type,
    url: `${siteUrl}${path}`,
    imageUrl: image.startsWith('http') ? image : `${siteUrl}${image}`,
    robots: noindex ? 'noindex, nofollow' : 'index, follow',
  }
}
