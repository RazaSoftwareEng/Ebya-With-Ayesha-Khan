import { useEffect, useState } from 'react'
import { IconMoon, IconSun } from './icons'

// The initial class on <html> is set by an inline script in index.html (before
// first paint) so there is no light→dark flash. This button only reads/flips it.
export default function ThemeToggle({ className = '' }) {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    try {
      localStorage.setItem('theme', next ? 'dark' : 'light')
    } catch {
      // storage blocked (private mode) — theme still applies for this page view
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={dark ? 'Light mode' : 'Dark mode'}
      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full border border-slate-200 bg-slate-50 text-slate-600 transition-colors duration-300 hover:border-brand-200 hover:text-brand-600 ${className}`}
    >
      {dark ? <IconSun width={18} height={18} /> : <IconMoon width={18} height={18} />}
    </button>
  )
}
