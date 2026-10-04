import { Check } from 'lucide-react'
import { packages, CURRENCY } from '../data/products'
import { useCart } from '../context/CartContext'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Packages() {
  const { add } = useCart()
  return (
    <section id="pachete" className="section section-alt">
      <div className="container-x">
        <SectionHeading eyebrow="Pachete recomandate" title="Alege nivelul de verificare" text="Prețuri clare, fără costuri ascunse." />
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {packages.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.12} className="h-full">
              <article className={`glass card-hover relative flex h-full flex-col p-7 ${p.featured ? '!border-2 !border-heal-accent shadow-glow md:-translate-y-3' : ''}`}>
                {p.featured && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-heal-dark px-4 py-1 text-xs font-bold text-white">Cel mai ales</span>
                )}
                <h3 className="text-xl font-bold">{p.name}</h3>
                <p className="mt-1 text-sm text-ocean-ink/75">{p.tagline}</p>
                <p className="mt-5 font-heading text-4xl font-bold text-ocean-strong">{p.price} <span className="text-base font-semibold">{CURRENCY}</span></p>
                <ul className="mt-5 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-heal-dark" aria-hidden="true" />{f}</li>
                  ))}
                </ul>
                <button onClick={() => add(p.id)} className={`mt-6 ${p.featured ? 'btn-primary' : 'btn-ghost'}`}>Adaugă în coș</button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
