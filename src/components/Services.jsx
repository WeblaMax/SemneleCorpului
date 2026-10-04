import { X, ShoppingCart } from 'lucide-react'
import { products, MAIN_SERVICE_IDS, CURRENCY } from '../data/products'
import { systems } from '../data/systems'
import { useCart } from '../context/CartContext'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Services({ filter, onClear }) {
  const { add } = useCart()
  const list = filter ? products.filter((p) => p.systems.includes(filter)) : products.filter((p) => MAIN_SERVICE_IDS.includes(p.id))
  const label = systems.find((s) => s.id === filter)?.label

  return (
    <section id="analize" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Servicii principale" title="Evaluări, analize și pachete dedicate" text="Alege serviciul potrivit și adaugă-l în coș. Te contactăm pentru programare." />
        {filter && (
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3" role="status">
            <span className="text-sm">Filtru activ: <strong>{label}</strong></span>
            <button onClick={onClear} className="btn-ghost !px-4 !py-1.5"><X className="h-4 w-4" aria-hidden="true" /> Șterge filtrul</button>
          </div>
        )}
        {list.length === 0 && <p className="text-center">Nu există servicii pentru acest sistem momentan.</p>}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <Reveal key={p.id + (filter || '')} delay={(i % 3) * 0.1} className="h-full">
              <article className="glass card-hover flex h-full flex-col p-6">
                <span className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-gradient text-white shadow-soft">
                  <Icon name={p.icon} className="h-7 w-7" />
                </span>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm text-ocean-ink/80">{p.description}</p>
                <p className="mt-4 font-heading text-xl font-bold text-ocean-strong">de la {p.price} {CURRENCY}</p>
                <button onClick={() => add(p.id)} className="btn-primary mt-4">
                  <ShoppingCart className="h-4 w-4" aria-hidden="true" /> Adaugă în coș
                </button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
