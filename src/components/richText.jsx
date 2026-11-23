// Kept out of ui.jsx (same reason as uiTokens.js) so React Fast Refresh keeps
// working: a file that mixes component and non-component exports loses it.
import { Link } from 'react-router-dom'

// Lets plain data-file strings use simple [label](url) markup for internal and
// external links, without needing a full markdown renderer or
// dangerouslySetInnerHTML. Internal paths (starting with "/") render as an
// in-app <Link>; anything else opens in a new tab. Shared by blog, course and
// service detail pages so a link added to any data file looks the same everywhere.
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g
const richLinkClass =
  'font-semibold text-brand-700 underline decoration-brand-200 decoration-2 underline-offset-4 transition-colors hover:text-brand-800 hover:decoration-brand-400'

export function renderInline(text) {
  if (!text) return text
  const parts = []
  let last = 0
  let match
  let i = 0
  LINK_RE.lastIndex = 0
  while ((match = LINK_RE.exec(text))) {
    if (match.index > last) parts.push(text.slice(last, match.index))
    const [, label, href] = match
    if (href.startsWith('/')) {
      parts.push(
        <Link key={i++} to={href} className={richLinkClass}>
          {label}
        </Link>,
      )
    } else {
      parts.push(
        <a key={i++} href={href} target="_blank" rel="noopener noreferrer" className={richLinkClass}>
          {label}
        </a>,
      )
    }
    last = LINK_RE.lastIndex
  }
  if (last < text.length) parts.push(text.slice(last))
  return parts
}
