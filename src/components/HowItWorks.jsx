import { STEPS } from '../data/content'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const EKG = 'M0 30 H60 L70 30 L78 22 L86 30 H110 L118 36 L128 6 L138 52 L146 30 H200 Q208 14 218 30 H300'

export default function HowItWorks() {
  return (
    <section id="despre" className="section section-alt">
      <div className="container-x">
        <SectionHeading eyebrow="Despre noi · Cum funcționează" title="Patru pași simpli spre claritate" text="Semnalul Corpului te ghidează de la prima întrebare până la rezultate explicate pe înțelesul tău." />
        <div className="relative">
          <svg className="absolute left-[12%] right-[12%] top-6 hidden h-14 w-[76%] md:block" viewBox="0 0 300 60" preserveAspectRatio="none" aria-hidden="true">
            <path d={EKG} fill="none" stroke="#1C8A9C" strokeOpacity=".45" strokeWidth="2" strokeDasharray="2 5" vectorEffect="non-scaling-stroke" strokeLinecap="round" />
          </svg>
          <span className="absolute bottom-8 left-[27px] top-8 w-px border-l-2 border-dotted border-ocean-strong/40 md:hidden" aria-hidden="true" />
          <ol className="relative grid gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => (
              <Reveal as="li" key={s.title} delay={i * 0.12} className="flex gap-4 md:flex-col md:items-center md:text-center">
                <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-brand-gradient text-white shadow-glow">
                  <Icon name={s.icon} className="h-6 w-6" />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-white text-[11px] font-bold text-ocean-strong">{i + 1}</span>
                </span>
                <div>
                  <h3 className="font-semibold">{s.title}</h3>
                  <p className="mt-1 text-sm text-ocean-ink/80">{s.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
