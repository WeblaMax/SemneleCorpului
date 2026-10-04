import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { X, Minus, Plus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { CURRENCY } from '../data/products'

export default function CartDrawer() {
  const { open, setOpen, lines, total, setQty, remove } = useCart()

  useEffect(() => {
    if (!open) return
    const k = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', k)
    return () => document.removeEventListener('keydown', k)
  }, [open, setOpen])

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div className="fixed inset-0 z-50 bg-ocean-ink/40 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} />
          <motion.aside role="dialog" aria-modal="true" aria-label="Coș de cumpărături" className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-ocean-light bg-ocean-bg shadow-glow"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} transition={{ type: 'tween', duration: 0.35 }}>
            <div className="flex items-center justify-between border-b border-ocean-light/60 p-5">
              <h2 className="text-lg font-bold">Coșul tău</h2>
              <button autoFocus onClick={() => setOpen(false)} aria-label="Închide coșul" className="rounded-full p-2 hover:bg-white/60"><X className="h-5 w-5" /></button>
            </div>
            <div className="flex-1 space-y-3 overflow-y-auto p-5">
              {lines.length === 0 && <p className="py-10 text-center text-ocean-ink/70">Coșul este gol. Adaugă o evaluare sau un pachet.</p>}
              {lines.map(({ id, qty, product }) => (
                <div key={id} className="glass flex items-center gap-3 p-3">
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-semibold">{product.title}</p>
                    <p className="text-sm text-ocean-strong">{product.price} {CURRENCY}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <button onClick={() => setQty(id, qty - 1)} aria-label="Scade cantitatea" className="rounded-full border border-ocean-light p-1.5 hover:bg-white"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-6 text-center text-sm font-semibold" aria-live="polite">{qty}</span>
                    <button onClick={() => setQty(id, qty + 1)} aria-label="Crește cantitatea" className="rounded-full border border-ocean-light p-1.5 hover:bg-white"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <button onClick={() => remove(id)} aria-label={`Șterge ${product.title}`} className="rounded-full p-2 text-red-600/80 hover:bg-red-50"><Trash2 className="h-4 w-4" /></button>
                </div>
              ))}
            </div>
            <div className="border-t border-ocean-light/60 p-5">
              <p className="mb-4 flex justify-between font-heading text-lg font-bold"><span>Total</span><span>{total} {CURRENCY}</span></p>
              <a href="#/checkout" onClick={() => setOpen(false)} aria-disabled={!lines.length} className={`btn-primary w-full ${lines.length ? '' : 'pointer-events-none opacity-50'}`}>Finalizează comanda</a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
