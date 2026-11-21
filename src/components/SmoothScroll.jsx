import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

// One Lenis instance for the whole app (null on the server, or when the visitor
// prefers reduced motion — then the browser's normal scrolling is used).
let lenis = null

function scrollToTop({ immediate = false } = {}) {
  if (lenis) lenis.scrollTo(0, { immediate })
  else window.scrollTo({ top: 0, behavior: immediate ? 'auto' : 'smooth' })
}

/** Inertia ("buttery") wheel scrolling + smooth in-page anchor jumps. */
export function SmoothScroll() {
  const { pathname } = useLocation()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(1 - t, 4), // easeOutQuart — quick start, soft landing
      smoothWheel: true,
      anchors: { offset: -90 }, // keep anchored sections clear of the sticky navbar
      allowNestedScroll: true, // chat window, horizontal testimonial strip, etc.
      // While a modal has locked the page (body overflow hidden), don't scroll behind it.
      virtualScroll: () => document.body.style.overflow !== 'hidden',
    })

    let frame
    const raf = (time) => {
      lenis.raf(time)
      frame = requestAnimationFrame(raf)
    }
    frame = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      lenis = null
    }
  }, [])

  // New page → start at the top instantly (no long animated scroll across pages).
  useEffect(() => {
    scrollToTop({ immediate: true })
  }, [pathname])

  return null
}

/** Thin gradient bar at the very top showing how far down the page you are. */
export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let frame
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-[3px]">
      <div
        className="h-full origin-left bg-gradient-to-r from-brand-500 via-sky-400 to-emerald-400"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  )
}

/** Round "back to top" button that appears after scrolling down a bit. */
export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      setVisible(window.scrollY > 600)
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const r = 22
  const c = 2 * Math.PI * r

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => scrollToTop()}
      className={`fixed right-7 bottom-24 z-40 grid h-12 w-12 place-items-center rounded-full bg-white text-navy-900 shadow-lg shadow-slate-900/10 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:text-brand-600 ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      {/* progress ring */}
      <svg aria-hidden="true" viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90">
        <circle cx="24" cy="24" r={r} fill="none" strokeWidth="2.5" className="stroke-slate-100" />
        <circle
          cx="24"
          cy="24"
          r={r}
          fill="none"
          strokeWidth="2.5"
          strokeLinecap="round"
          className="stroke-brand-600"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - progress)}
        />
      </svg>
      <svg aria-hidden="true" viewBox="0 0 24 24" width={18} height={18} fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19V5M6 11l6-6 6 6" />
      </svg>
    </button>
  )
}
