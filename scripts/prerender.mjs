// Runs after `vite build` and the SSR build. Renders every route to static HTML
// (with per-page <title>, meta tags and JSON-LD) so crawlers and link-preview
// bots get real content without executing JavaScript.
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const distDir = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')
const SITE_URL = 'https://ayeshakhanofficial.com'

const { render, getRoutes, buildSeoMeta, NOT_FOUND_PATH } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)

const template = await readFile(join(distDir, 'index.html'), 'utf8')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

const STRIP = [
  /<title>[\s\S]*?<\/title>\s*/,
  /<meta\s+name="description"[\s\S]*?\/>\s*/,
  /<meta\s+name="robots"[\s\S]*?\/>\s*/,
  /<link\s+rel="canonical"[\s\S]*?\/>\s*/,
  /<meta\s+property="og:(?:type|title|description|url|image)"[\s\S]*?\/>\s*/g,
  /<meta\s+name="twitter:(?:card|title|description|image)"[\s\S]*?\/>\s*/g,
]

function headTags(seo) {
  const m = buildSeoMeta(seo)
  const tags = [
    `<title>${esc(m.fullTitle)}</title>`,
    `<meta name="description" content="${esc(m.description)}" />`,
    `<meta name="robots" content="${m.robots}" />`,
    `<link rel="canonical" href="${m.url}" />`,
    `<meta property="og:type" content="${esc(m.type)}" />`,
    `<meta property="og:title" content="${esc(m.fullTitle)}" />`,
    `<meta property="og:description" content="${esc(m.description)}" />`,
    `<meta property="og:url" content="${m.url}" />`,
    `<meta property="og:image" content="${m.imageUrl}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(m.fullTitle)}" />`,
    `<meta name="twitter:description" content="${esc(m.description)}" />`,
    `<meta name="twitter:image" content="${m.imageUrl}" />`,
  ]
  if (seo.jsonLd) {
    const json = JSON.stringify(seo.jsonLd).replace(/</g, '\\u003c')
    tags.push(`<script id="seo-jsonld" type="application/ld+json">${json}</script>`)
  }
  return tags.join('\n    ')
}

function buildPage(url) {
  const { html, seo } = render(url)
  if (!seo) throw new Error(`No <Seo> rendered for ${url}`)
  let page = template
  for (const re of STRIP) page = page.replace(re, '')
  if (!page.includes('<div id="root"></div>')) throw new Error('Root placeholder missing in template')
  page = page.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  page = page.replace('</head>', `    ${headTags(seo)}\n  </head>`)
  return page
}

async function writePage(routePath, file) {
  const out = join(distDir, file)
  await mkdir(dirname(out), { recursive: true })
  await writeFile(out, buildPage(routePath))
}

const routes = getRoutes()
for (const { path } of routes) {
  await writePage(path, path === '/' ? 'index.html' : `${path.slice(1)}/index.html`)
  console.log(`prerendered ${path}`)
}
await writePage(NOT_FOUND_PATH + '-not-found', '404.html')
console.log('prerendered 404.html')

const urls = routes
  .map(
    (r) =>
      `  <url>\n    <loc>${SITE_URL}${r.path === '/' ? '/' : `${r.path}/`}</loc>\n` +
      (r.lastmod ? `    <lastmod>${r.lastmod}</lastmod>\n` : '') +
      `    <priority>${r.priority}</priority>\n  </url>`,
  )
  .join('\n')
await writeFile(
  join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
)
console.log(`sitemap.xml written (${routes.length} urls)`)

await rm(ssrDir, { recursive: true, force: true })
