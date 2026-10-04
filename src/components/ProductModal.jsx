import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, ShoppingCart, Check } from 'lucide-react'
import { imageUrl, categoryName, DISCLAIMER, CURRENCY } from '../data/products'
import { useCart } from '../context/CartContext'

const Row = ({ label, children }) => children ? (
  <div><dt className="text-xs font-semibold uppercase tracking-wide text-heal-dark">{label}</dt><dd className="mt-0.5 text-sm">{children}</dd></div>
) : null

export default function ProductModal({ product: p, onClose }) {
  const { add } = useCart()
  useEffect(() => {
    if (!p) return
    const k = (e) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [p, onClose])

  return (
    <AnimatePresence>
      {p && (
        <motion.div className="fixed inset-0 z-50 flex items-end justify-center bg-ocean-ink/50 p-0 backdrop-blur-sm sm:items-center sm:p-6" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
          <motion.div role="dialog" aria-modal="true" aria-label={p.title} onClick={(e) => e.stopPropagation()}
            className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-ocean-light bg-ocean-bg shadow-glow sm:rounded-3xl"
            initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 40, opacity: 0 }}>
            <div className="relative">
              <img src={imageUrl(p)} alt={p.title} className="aspect-[4/3] w-full object-cover sm:rounded-t-3xl" />
              <button autoFocus onClick={onClose} aria-label="Închide" className="absolute right-3 top-3 rounded-full bg-white/90 p-2 shadow-soft"><X className="h-5 w-5" /></button>
            </div>
            <div className="space-y-4 p-6">
              <div>
                <p className="text-xs font-semibold text-heal-dark">{categoryName[p.category]} · {p.type}</p>
                <h3 className="mt-1 text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-sm text-ocean-ink/85">{p.description}</p>
              </div>
              {p.benefits?.length > 0 && (
                <ul className="space-y-1.5">
                  {p.benefits.map((b) => <li key={b} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-heal-dark" aria-hidden="true" />{b}</li>)}
                </ul>
              )}
              <dl className="grid gap-3 sm:grid-cols-2">
                <Row label="Ambalaj">{p.pack}</Row>
                <Row label="Mod de utilizare">{p.usage}</Row>
                <div className="sm:col-span-2"><Row label="Compoziție">{p.composition}</Row></div>
                <div className="sm:col-span-2"><Row label="Atenționări">{p.warnings}</Row></div>
              </dl>
              <p className="rounded-2xl bg-white/60 p-3 text-xs text-ocean-ink/75">{DISCLAIMER}</p>
              <div className="flex items-center justify-between gap-3">
                <p className="font-heading text-2xl font-bold text-ocean-strong">{p.price} {CURRENCY}</p>
                <button onClick={() => { add(p.id); onClose() }} className="btn-primary"><ShoppingCart className="h-4 w-4" aria-hidden="true" /> Adaugă în coș</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
