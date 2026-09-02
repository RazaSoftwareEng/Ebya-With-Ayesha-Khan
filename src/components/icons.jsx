const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function IconMenu(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M3 6h18M3 12h18M3 18h18" />
    </svg>
  )
}

export function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" width={24} height={24} {...base} {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

export function IconArrowRight(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...props}>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  )
}

export function IconCheck(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...props}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  )
}

export function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
      <path d="M4 5c0 8.284 6.716 15 15 15l2-4-5-2-1.5 2A12.5 12.5 0 0 1 8.5 9.5L10.5 8l-2-5-4 2Z" />
    </svg>
  )
}

export function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
      <path d="M4 6h16v12H4z" />
      <path d="M4 7l8 6 8-6" />
    </svg>
  )
}

export function IconLocation(props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
      <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
      <circle cx="12" cy="9" r="2.5" />
    </svg>
  )
}

export function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function IconWhatsApp(props) {
  return (
    <svg viewBox="0 0 32 32" width={28} height={28} fill="currentColor" {...props}>
      <path d="M16.02 3C9.4 3 4 8.37 4 15c0 2.36.68 4.55 1.87 6.4L4 29l7.8-1.83A11.94 11.94 0 0 0 16.02 27C22.63 27 28 21.63 28 15S22.63 3 16.02 3Zm0 21.7c-1.96 0-3.8-.53-5.38-1.46l-.38-.22-4.63 1.09 1.1-4.5-.25-.4A9.63 9.63 0 0 1 5.7 15c0-5.68 4.63-10.3 10.32-10.3S26.34 9.32 26.34 15s-4.63 9.7-10.32 9.7Zm5.62-7.27c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15-.2.3-.78.98-.96 1.18-.18.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.79-1.68-2.09-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.68-1.64-.93-2.24-.24-.58-.49-.5-.68-.51h-.58c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.13 3.26 5.17 4.57.72.31 1.29.5 1.73.64.73.23 1.39.2 1.92.12.59-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  )
}

export function IconUsers(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M2.8 19c0-3 2.8-5.2 6.2-5.2S15.2 16 15.2 19" />
      <circle cx="17" cy="9" r="2.4" />
      <path d="M15.6 13.8c2.6.3 4.6 2.2 4.6 5.2" />
    </svg>
  )
}

export function IconAward(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5 7 21l5-2.5 5 2.5-1.5-7.5" />
    </svg>
  )
}

export function IconChart(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <path d="M4 20V10M11 20V4M18 20v-7" />
    </svg>
  )
}

export function IconGlobe(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9Z" />
    </svg>
  )
}

export function IconRocket(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <path d="M13.5 2.5c3 0 6 3 6 6-2 3-4 5-6 6l-3.5 3.5-2-2L11.5 12c1-2 3-4 6-6-2-1-4-1-6 0-2 1-3.5 2.5-4.5 4.5L3.5 12l2-2c1.5-3 3.5-5.5 6-6.5.7-.3 1.3-.5 2-1Z" />
      <path d="M8 15.5 5.5 18M6 21c.2-1.5.6-2.6 1.5-3.5" />
      <circle cx="15.5" cy="8.5" r="1.3" />
    </svg>
  )
}

export function IconShield(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

export function IconTarget(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function IconBox(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} {...base} {...props}>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M3 7.5V16.5L12 21l9-4.5V7.5" />
      <path d="M12 12v9" />
    </svg>
  )
}

export function IconStar(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.5L12 17.6 6.2 20.5l1.1-6.5-4.8-4.6 6.6-.9L12 2.5Z" />
    </svg>
  )
}

export function IconPlay(props) {
  return (
    <svg viewBox="0 0 24 24" width={22} height={22} fill="currentColor" {...props}>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" />
    </svg>
  )
}

export function IconFacebook(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} fill="currentColor" {...props}>
      <path d="M14 9h3V5.5h-3C11.5 5.5 10 7 10 9.5V12H8v3.5h2V22h3.5v-6.5H16l.5-3.5h-3V9.8c0-.6.3-.8 1-.8Z" />
    </svg>
  )
}

export function IconInstagram(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...base} strokeWidth={1.6} {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" />
    </svg>
  )
}

export function IconYoutube(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...base} strokeWidth={1.6} {...props}>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="M10.5 9.5v5l4.5-2.5-4.5-2.5Z" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function IconChat(props) {
  return (
    <svg viewBox="0 0 24 24" width={26} height={26} fill="currentColor" {...props}>
      <path d="M4 4h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9l-5 4v-4H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  )
}

export function IconSend(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" {...props}>
      <path d="M3 11.5 21 3l-6 18-3.5-7.5L3 11.5Z" />
    </svg>
  )
}

export function IconChevronDown(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...props}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  )
}

export function IconPlus(props) {
  return (
    <svg viewBox="0 0 24 24" width={18} height={18} {...base} {...props}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconArrowLeft(props) {
  return (
    <svg viewBox="0 0 24 24" width={20} height={20} {...base} {...props}>
      <path d="M19 12H5M11 6l-6 6 6 6" />
    </svg>
  )
}
