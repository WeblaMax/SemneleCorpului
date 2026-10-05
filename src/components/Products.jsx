import { useMemo, useState } from 'react'
import { X, Plus, MessageCircle, Search } from 'lucide-react'
import { products, categories, imageUrl, CURRENCY } from '../data/products'
import { systems } from '../data/systems'
import { useCart } from '../context/CartContext'
import { orderLink } from '../utils/whatsapp'
import Reveal from './Reveal'
import ProductModal from './ProductModal'

function ProductCard({ p, delay, onOpen }) {
  const { add } = useCart()
  return (
    <Reveal delay={delay} className="h-full">
      <article className="glass card-hover flex h-full flex-col overflow-hidden">
        <button onClick={() => onOpen(p)} className="block aspect-[4/3] w-full overflow-hidden bg-heal-bg/60" aria-label={`Detalii: ${p.title}`}>
          <img src={imageUrl(p)} alt={p.title} loading="lazy" decoding="async" width="560" height="420" className="h-full w-full object-cover transition duration-500 hover:scale-105" />
        </button>
        <div className="flex flex-1 flex-col p-4">
          <h4 className="font-heading text-base font-semibold leading-snug">{p.title}</h4>
          <p className="mt-1 line-clamp-2 flex-1 text-sm text-ocean-ink/75">{p.short}</p>
          <p className="mt-3 font-heading text-xl font-bold text-ocean-strong">{p.price} {CURRENCY}</p>
          <div className="mt-3 flex gap-2">
            <a href={orderLink([{ product: p, qty: 1 }])} target="_blank" rel="noopener noreferrer" className="btn-primary min-w-0 flex-1 !px-2 !text-xs sm:!px-3 sm:!text-sm">
              <MessageCircle className="hidden h-4 w-4 sm:block" aria-hidden="true" /> Comandă
            </a>
            <button onClick={() => add(p.id)} className="btn-ghost shrink-0 !px-3" aria-label={`Adaugă în coș: ${p.title}`}><Plus className="h-4 w-4" /></button>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default function Products({ system, category, onCategory, onClearSystem }) {
  const [open, setOpen] = useState(null)
  const [q, setQ] = useState('')
  const sys = systems.find((s) => s.id === system)

  const available = useMemo(() => (sys ? categories.filter((c) => sys.categories.includes(c.slug)) : categories), [sys])
  const shown = category ? available.filter((c) => c.slug === category) : available
  const term = q.trim().toLowerCase()
  const groups = shown
    .map((c) => ({ ...c, items: products.filter((p) => p.category === c.slug && (!term || `${p.title} ${p.short}`.toLowerCase().includes(term))) }))
    .filter((g) => g.items.length)

  const chip = (on) => `shrink-0 whitespace-nowrap rounded-full border px-4 py-1.5 text-sm font-medium transition ${on ? 'border-transparent bg-brand-gradient text-white shadow-soft' : 'border-ocean-light bg-white/60 hover:bg-white'}`

  return (
    <section id="produse" className="section !pt-8">
      <div className="container-x">
        <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">{sys ? `Produse: ${sys.label}` : 'Produse'}</h2>

        <div className="mx-auto mb-5 max-w-xl">
          <label className="relative block">
            <span className="sr-only">Caută un produs</span>
            <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-ocean-ink/50" aria-hidden="true" />
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder="Caută un produs…" className="input !rounded-full !py-3 pl-12" />
          </label>
        </div>

        {sys && (
          <div className="mb-4 flex justify-center">
            <button onClick={onClearSystem} className="btn-ghost !px-4 !py-1.5"><X className="h-4 w-4" aria-hidden="true" /> {sys.label} – arată toate</button>
          </div>
        )}

        <div className="-mx-4 mb-8 flex gap-2 overflow-x-auto px-4 pb-2 md:mx-0 md:flex-wrap md:justify-center md:overflow-visible md:px-0" role="group" aria-label="Categorii">
          <button onClick={() => onCategory(null)} aria-pressed={!category} className={chip(!category)}>Toate</button>
          {available.map((c) => (
            <button key={c.slug} onClick={() => onCategory(category === c.slug ? null : c.slug)} aria-pressed={category === c.slug} className={chip(category === c.slug)}>{c.nume}</button>
          ))}
        </div>

        {groups.length === 0 && <p className="py-10 text-center text-ocean-ink/70">Nu am găsit produse. Încearcă alt cuvânt.</p>}
        <div className="space-y-12">
          {groups.map((g) => (
            <div key={g.slug}>
              <h3 className="mb-4 border-b border-ocean-light/70 pb-2 text-xl font-bold">{g.nume}</h3>
              <div className="grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3 xl:grid-cols-4">
                {g.items.map((p, i) => <ProductCard key={p.id} p={p} delay={(i % 4) * 0.06} onOpen={setOpen} />)}
              </div>
            </div>
          ))}
        </div>
      </div>
      <ProductModal product={open} onClose={() => setOpen(null)} />
    </section>
  )
}
