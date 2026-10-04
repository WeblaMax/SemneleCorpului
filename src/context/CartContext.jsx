import { createContext, useContext, useEffect, useMemo, useState, useCallback } from 'react'
import { catalog } from '../data/products'

const CartContext = createContext(null)
const KEY = 'sc_cart_v1'

function load() {
  try {
    const raw = JSON.parse(localStorage.getItem(KEY) || '[]')
    return Array.isArray(raw) ? raw.filter((i) => catalog[i.id] && i.qty > 0) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(load)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try { localStorage.setItem(KEY, JSON.stringify(items)) } catch { /* ignorat */ }
  }, [items])

  const add = useCallback((id) => {
    setItems((prev) =>
      prev.some((i) => i.id === id)
        ? prev.map((i) => (i.id === id ? { ...i, qty: i.qty + 1 } : i))
        : [...prev, { id, qty: 1 }],
    )
    setOpen(true)
  }, [])
  const remove = useCallback((id) => setItems((p) => p.filter((i) => i.id !== id)), [])
  const setQty = useCallback(
    (id, qty) => setItems((p) => (qty < 1 ? p.filter((i) => i.id !== id) : p.map((i) => (i.id === id ? { ...i, qty } : i)))),
    [],
  )
  const clear = useCallback(() => setItems([]), [])

  const value = useMemo(() => {
    const lines = items.map((i) => ({ ...i, product: catalog[i.id] }))
    return {
      lines,
      count: items.reduce((n, i) => n + i.qty, 0),
      total: lines.reduce((s, l) => s + l.product.price * l.qty, 0),
      open, setOpen, add, remove, setQty, clear,
    }
  }, [items, open, add, remove, setQty, clear])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => useContext(CartContext)
