import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <Reveal className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      {eyebrow && <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-heal-dark">{eyebrow}</p>}
      <h2 className="text-3xl font-bold md:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-base text-ocean-ink/80 md:text-lg">{text}</p>}
    </Reveal>
  )
}
