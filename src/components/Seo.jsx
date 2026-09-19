import { useEffect } from 'react'
import { buildSeoMeta } from '../seoUtils'
import { seoStore } from '../seoStore'

function upsertMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
  return tag
}

function upsertLink(rel, href) {
  let tag = document.head.querySelector(`link[rel="${rel}"]`)
  if (!tag) {
    tag = document.createElement('link')
    tag.setAttribute('rel', rel)
    document.head.appendChild(tag)
  }
  tag.setAttribute('href', href)
  return tag
}

export default function Seo({
  title,
  rawTitle,
  description,
  path = '/',
  type = 'website',
  image = '/og-image.jpg',
  jsonLd,
  noindex = false,
}) {
  // Server render only: lets scripts/prerender.mjs read each page's meta tags.
  if (typeof window === 'undefined') {
    seoStore.value = { title, rawTitle, description, path, type, image, jsonLd, noindex }
  }

  useEffect(() => {
    const meta = buildSeoMeta({ title, rawTitle, description, path, type, image, noindex })

    document.title = meta.fullTitle
    upsertMeta('name', 'description', meta.description)
    upsertMeta('name', 'robots', meta.robots)
    upsertMeta('property', 'og:title', meta.fullTitle)
    upsertMeta('property', 'og:description', meta.description)
    upsertMeta('property', 'og:type', meta.type)
    upsertMeta('property', 'og:url', meta.url)
    upsertMeta('property', 'og:image', meta.imageUrl)
    upsertMeta('name', 'twitter:card', 'summary_large_image')
    upsertMeta('name', 'twitter:title', meta.fullTitle)
    upsertMeta('name', 'twitter:description', meta.description)
    upsertMeta('name', 'twitter:image', meta.imageUrl)
    upsertLink('canonical', meta.url)

    if (jsonLd) {
      let script = document.getElementById('seo-jsonld')
      if (!script) {
        script = document.createElement('script')
        script.id = 'seo-jsonld'
        script.type = 'application/ld+json'
        document.head.appendChild(script)
      }
      script.textContent = JSON.stringify(jsonLd)
    }

    return () => {
      if (jsonLd) {
        document.getElementById('seo-jsonld')?.remove()
      }
    }
  }, [title, rawTitle, description, path, type, image, jsonLd, noindex])

  return null
}
