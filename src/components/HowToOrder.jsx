import { ORDER_STEPS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'

export default function HowToOrder() {
  return (
    <section id="cum-comand" className="section section-alt !py-12 md:!py-16">
      <div className="container-x">
        <h2 className="mb-8 text-center text-2xl font-bold md:text-3xl">Cum comand</h2>
        <ol className="grid gap-5 md:grid-cols-3">
          {ORDER_STEPS.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.1} className="glass flex items-start gap-4 p-5">
              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-soft">
                <Icon name={s.icon} className="h-5 w-5" />
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-ocean-strong">{i + 1}</span>
              </span>
              <div><h3 className="font-semibold">{s.title}</h3><p className="mt-1 text-sm text-ocean-ink/80">{s.text}</p></div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
