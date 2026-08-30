export default function PageHero({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-navy-900 text-white">
      <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-gold-500/20 blur-3xl" />
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center lg:px-8">
        {eyebrow && (
          <span className="inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-gold-400">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-4 font-heading text-3xl font-extrabold sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/75 sm:text-lg">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
