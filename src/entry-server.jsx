import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppShell } from './App.jsx'
import { seoStore } from './seoStore.js'
import { buildSeoMeta } from './seoUtils.js'
import { courses } from './data/courses.js'
import { blogPosts } from './data/blogPosts.js'

export { buildSeoMeta }

export const NOT_FOUND_PATH = '/404'

export function getRoutes() {
  return [
    { path: '/', priority: '1.0' },
    { path: '/courses', priority: '0.9' },
    ...courses.map((c) => ({ path: `/courses/${c.slug}`, priority: '0.85' })),
    { path: '/services', priority: '0.8' },
    { path: '/about', priority: '0.7' },
    { path: '/blog', priority: '0.7' },
    ...blogPosts.map((p) => ({ path: `/blog/${p.slug}`, priority: '0.6', lastmod: p.date })),
    { path: '/contact', priority: '0.7' },
  ]
}

export function render(url) {
  seoStore.value = null
  const html = renderToString(
    <StaticRouter location={url}>
      <AppShell />
    </StaticRouter>,
  )
  return { html, seo: seoStore.value }
}
