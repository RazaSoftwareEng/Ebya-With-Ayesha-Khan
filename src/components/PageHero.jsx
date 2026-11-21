import { PageHeroLight } from './ui'

// Inner-page hero in the light Home-page style. `highlight` (optional) is appended
// to the title in green with an underline swoosh.
export default function PageHero({ eyebrow, icon, title, highlight, subtitle, children }) {
  return (
    <PageHeroLight eyebrow={eyebrow} icon={icon} title={title} highlight={highlight} subtitle={subtitle}>
      {children}
    </PageHeroLight>
  )
}
