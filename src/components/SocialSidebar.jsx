import { IconFacebook, IconInstagram, IconLinkedin, IconTiktok, IconWhatsApp } from './icons'
import { site, whatsappLink } from '../siteConfig'

const items = [
  { href: whatsappLink(), label: 'WhatsApp', Icon: IconWhatsApp, bg: 'bg-[#25D366]' },
  { href: site.social.facebook, label: 'Facebook', Icon: IconFacebook, bg: 'bg-[#1877F2]' },
  {
    href: site.social.instagram,
    label: 'Instagram',
    Icon: IconInstagram,
    bg: 'bg-gradient-to-br from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]',
  },
  { href: site.social.linkedin, label: 'LinkedIn', Icon: IconLinkedin, bg: 'bg-[#0A66C2]' },
  { href: site.social.tiktok, label: 'TikTok', Icon: IconTiktok, bg: 'bg-navy-950' },
]

export default function SocialSidebar() {
  return (
    <div className="fixed left-0 top-1/2 z-40 flex -translate-y-1/2 flex-col gap-1.5">
      {items.map(({ href, label, Icon, bg }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className={`group flex h-11 w-11 items-center justify-center rounded-r-xl text-white shadow-md shadow-black/10 transition-all duration-300 hover:w-[4.6rem] hover:shadow-lg hover:shadow-black/20 ${bg}`}
        >
          <Icon width={19} height={19} className="shrink-0 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  )
}
