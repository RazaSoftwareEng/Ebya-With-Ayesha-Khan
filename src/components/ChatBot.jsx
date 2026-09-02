import { useEffect, useRef, useState } from 'react'
import { IconChat, IconClose, IconSend } from './icons'
import { site, whatsappLink } from '../siteConfig'

const quickReplies = [
  { label: 'Our Courses', key: 'courses' },
  { label: 'Fees & Enrollment', key: 'fees' },
  { label: 'Timing & Location', key: 'timing' },
  { label: 'Talk to a Human', key: 'human' },
]

const courseNames = [
  'eBay Selling Fundamentals',
  'Dropshipping Mastery',
  'Product Research & Sourcing',
  'Ecommerce Store Growth',
  'Multi-Channel Selling',
  'Corporate Team Training',
]

function botReplyFor(key) {
  switch (key) {
    case 'courses':
      return `We offer these short courses:\n${courseNames.map((c) => `• ${c}`).join('\n')}\n\nWant details on any of these?`
    case 'fees':
      return "Course fees depend on the track and batch. Share your name and course of interest on WhatsApp and our team will send you the exact fee and next batch dates."
    case 'timing':
      return `We're open ${site.hours} at ${site.address}. Courses are available online and in-person.`
    case 'human':
      return "Sure! Tap the button below to chat with our team directly on WhatsApp."
    default:
      return "Thanks for your message! For a quick, detailed answer, tap 'Talk to a Human' and our team will help you on WhatsApp."
  }
}

function matchKeyword(text) {
  const t = text.toLowerCase()
  if (/(course|class|learn|dropship|ebay|training)/.test(t)) return 'courses'
  if (/(fee|price|cost|charges|payment)/.test(t)) return 'fees'
  if (/(time|hour|location|address|open|where)/.test(t)) return 'timing'
  if (/(human|agent|call|person|talk|whatsapp)/.test(t)) return 'human'
  return null
}

export default function ChatBot() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: "Hi! I'm Ayesha Khan Official's assistant. Ask me about our courses, fees, or timings — or pick an option below.",
    },
  ])
  const scrollRef = useRef(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, open])

  const respond = (userText, key) => {
    setMessages((prev) => [
      ...prev,
      { from: 'user', text: userText },
      { from: 'bot', text: botReplyFor(key || matchKeyword(userText)) },
    ])
  }

  const handleQuickReply = (qr) => {
    respond(qr.label, qr.key)
  }

  const handleSend = (e) => {
    e.preventDefault()
    const text = input.trim()
    if (!text) return
    respond(text)
    setInput('')
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex h-[28rem] w-[22rem] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 ring-1 ring-black/5">
          <div className="flex items-center justify-between bg-navy-900 px-4 py-3.5">
            <div>
              <p className="font-heading text-sm font-bold text-white">Ayesha Khan Official</p>
              <p className="text-xs text-gold-400">Usually replies in a few minutes</p>
            </div>
            <button
              type="button"
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="grid h-8 w-8 place-items-center rounded-full text-white/80 hover:bg-white/10 hover:text-white"
            >
              <IconClose width={18} height={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-slate-50 px-4 py-4">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                  m.from === 'bot'
                    ? 'bg-white text-slate-700 shadow-sm'
                    : 'ml-auto bg-brand-600 text-white'
                }`}
              >
                {m.text}
              </div>
            ))}

            <div className="flex flex-wrap gap-2 pt-1">
              {quickReplies.map((qr) => (
                <button
                  key={qr.key}
                  type="button"
                  onClick={() => handleQuickReply(qr)}
                  className="rounded-full border border-brand-100 bg-white px-3 py-1.5 text-xs font-semibold text-brand-600 transition hover:border-brand-500 hover:bg-brand-50"
                >
                  {qr.label}
                </button>
              ))}
            </div>
          </div>

          <a
            href={whatsappLink("Hi! I'd like to know more about your courses.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mx-4 mb-2 rounded-xl bg-[#25D366] px-3 py-2 text-center text-xs font-bold text-white"
          >
            Continue on WhatsApp
          </a>

          <form onSubmit={handleSend} className="flex items-center gap-2 border-t border-slate-100 p-3">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your question..."
              className="w-full flex-1 rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 text-sm outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100"
            />
            <button
              type="submit"
              aria-label="Send message"
              className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gold-500 text-navy-900 transition hover:bg-gold-400"
            >
              <IconSend />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        aria-label={open ? 'Close chat assistant' : 'Open chat assistant'}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-gold-400 shadow-xl shadow-black/20 transition hover:bg-navy-800"
      >
        {open ? <IconClose width={22} height={22} /> : <IconChat />}
      </button>
    </>
  )
}
