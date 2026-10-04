import { useEffect, useState } from 'react'
import { Menu, X, ShoppingBag } from 'lucide-react'
import { NAV } from '../data/content'
import { useCart } from '../context/CartContext'

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { count, setOpen: openCart } = useCart()

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 10)
    on()
    window.addEventListener('scroll', on, { passive: true })
    return () => window.removeEventListener('scroll', on)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-40 transition ${scrolled ? 'border-b border-ocean-light/50 bg-ocean-bg/80 shadow-soft backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <a href="#acasa" aria-label="Semnalul Corpului – Acasă" className="shrink-0">
          <span className="flex items-center gap-2.5">
            <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-11 w-11 rounded-full shadow-soft" width="44" height="44" />
            <span className="font-heading text-base font-bold leading-tight text-ocean-ink">Semnalul <span className="text-ocean-strong">Corpului</span></span>
          </span>
        </a>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Meniu principal">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} className="text-sm font-medium text-ocean-ink/85 transition hover:text-ocean-strong">{n.label}</a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <button onClick={() => openCart(true)} className="relative rounded-full p-2.5 text-ocean-ink hover:bg-white/60" aria-label={`Coș de cumpărături, ${count} produse`}>
            <ShoppingBag className="h-5 w-5" aria-hidden="true" />
            {count > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-heal-dark px-1 text-[11px] font-bold text-white">{count}</span>
            )}
          </button>
          <a href="#contact" className="btn-primary hidden !py-2.5 sm:inline-flex">Contactează-ne</a>
          <button onClick={() => setOpen((v) => !v)} className="rounded-full p-2.5 text-ocean-ink hover:bg-white/60 lg:hidden" aria-expanded={open} aria-controls="mobile-nav" aria-label={open ? 'Închide meniul' : 'Deschide meniul'}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" className="glass mx-4 mb-3 flex flex-col gap-1 p-3 lg:hidden" aria-label="Meniu mobil">
          {NAV.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-3 font-medium hover:bg-heal-bg">{n.label}</a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-1">Contactează-ne</a>
        </nav>
      )}
    </header>
  )
}
