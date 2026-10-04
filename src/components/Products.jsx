import { useMemo, useState } from 'react'
import { X, ShoppingCart, Info } from 'lucide-react'
import { products, categories, categoryName, imageUrl, CURRENCY } from '../data/products'
import { systems } from '../data/systems'
import { useCart } from '../context/CartContext'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'
import ProductModal from './ProductModal'

function ProductCard({ p, delay, onOpen }) {
  const { add } = useCart()
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass card-hover flex h-full flex-col overflow-hidden">
        <button onClick={() => onOpen(p)} className="block aspect-[4/3] w-full overflow-hidden bg-heal-bg/60" aria-label={`Detalii: ${p.title}`}>
          <img src={imageUrl(p)} alt={p.title} loading="lazy" decoding="async" width="560" height="420" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        </button>
        <div className="flex flex-1 flex-col p-5">
          <span className="mb-2 w-fit rounded-full bg-heal-bg px-3 py-0.5 text-xs font-semibold text-heal-dark">{p.type}</span>
          <h4 className="font-heading text-base font-semibold leading-snug">{p.title}</h4>
          <p className="mt-2 flex-1 text-sm text-ocean-ink/80">{p.short}</p>
          <p className="mt-3 font-heading text-xl font-bold text-ocean-strong">{p.price} {CURRENCY}</p>
          <div className="mt-3 flex gap-2">
            <button onClick={() => add(p.id)} className="btn-primary flex-1 !px-4"><ShoppingCart className="h-4 w-4" aria-hidden="true" /> Adaugă în coș</button>
            <button onClick={() => onOpen(p)} className="btn-ghost !px-3" aria-label={`Detalii ${p.title}`}><Info className="h-4 w-4" /></button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Products({ system, category, onCategory, onClearSystem }) {
  const [open, setOpen] = useState(null)
  const sys = systems.find((s) => s.id === system)

  // Categoriile disponibile: cele ale sistemului ales, altfel toate.
  const available = useMemo(
    () => (sys ? categories.filter((c) => sys.categories.includes(c.slug)) : categories),
    [sys],
  )
  const shown = category ? available.filter((c) => c.slug === category) : available
  const groups = shown.map((c) => ({ ...c, items: products.filter((p) => p.category === c.slug) }))

  return (
    <section id="produse" className="section">
      <div className="container-x">
        <SectionHeading
          eyebrow="Produse"
          title={sys ? `Produse pentru: ${sys.label}` : 'Toate produsele, pe categorii'}
          text="Suplimente alimentare și produse naturale. Alege sistemul corpului mai sus sau o categorie de mai jos."
        />

        {sys && (
          <div className="mb-5 flex flex-wrap items-center justify-center gap-3" role="status">
            <span className="text-sm">Sistem ales: <strong>{sys.label}</strong></span>
            <button onClick={onClearSystem} className="btn-ghost !px-4 !py-1.5"><X className="h-4 w-4" aria-hidden="true" /> Arată toate produsele</button>
          </div>
        )}

        <div className="mb-10 flex flex-wrap justify-center gap-2" role="group" aria-label="Categorii de produse">
          <button onClick={() => onCategory(null)} aria-pressed={!category} className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${!category ? 'border-transparent bg-brand-gradient text-white shadow-soft' : 'border-ocean-light bg-white/60 hover:bg-white'}`}>Toate</button>
          {available.map((c) => (
            <button key={c.slug} onClick={() => onCategory(category === c.slug ? null : c.slug)} aria-pressed={category === c.slug}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition ${category === c.slug ? 'border-transparent bg-brand-gradient text-white shadow-soft' : 'border-ocean-light bg-white/60 hover:bg-white'}`}>
              {c.nume}
            </button>
          ))}
        </div>

        <div className="space-y-14">
          {groups.map((g) => (
            <div key={g.slug} id={`cat-${g.slug}`}>
              <h3 className="mb-5 flex items-baseline gap-3 border-b border-ocean-light/70 pb-2 text-xl font-bold md:text-2xl">
                {g.nume} <span className="text-sm font-medium text-ocean-ink/60">{g.items.length} produse</span>
              </h3>
              <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {g.items.map((p, i) => <ProductCard key={p.id} p={p} delay={(i % 3) * 0.08} onOpen={setOpen} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductModal product={open} onClose={() => setOpen(null)} />
    </section>
  )
}
