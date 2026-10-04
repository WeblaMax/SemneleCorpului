import { useState } from 'react'
import { ArrowLeft, CheckCircle2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { CURRENCY } from '../data/products'

export default function Checkout() {
  const { lines, total, clear } = useCart()
  const [done, setDone] = useState(null)

  const submit = (e) => {
    e.preventDefault()
    const f = Object.fromEntries(new FormData(e.currentTarget))
    setDone({ name: f.nume, no: `SC-${Date.now().toString().slice(-6)}`, total })
    clear()
  }

  return (
    <main className="px-4 pb-20 pt-28 sm:px-6">
      <div className="container-x max-w-4xl">
        <a href="#/" className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-ocean-strong hover:underline"><ArrowLeft className="h-4 w-4" aria-hidden="true" /> Înapoi la site</a>
        <h1 className="mb-8 text-3xl font-bold">Finalizare comandă</h1>
        {done ? (
          <div className="glass p-8 text-center" role="status">
            <CheckCircle2 className="mx-auto h-14 w-14 text-heal-accent" aria-hidden="true" />
            <h2 className="mt-4 text-2xl font-bold">Mulțumim, {done.name}!</h2>
            <p className="mt-2">Comanda <strong>{done.no}</strong> în valoare de <strong>{done.total} {CURRENCY}</strong> a fost înregistrată. Te contactăm pentru a confirma comanda și livrarea. Plata se face la primirea comenzii.</p>
            <a href="#/" className="btn-primary mt-6">Înapoi la site</a>
          </div>
        ) : lines.length === 0 ? (
          <div className="glass p-8 text-center"><p>Coșul este gol.</p><a href="#/" className="btn-primary mt-4">Alege produsele</a></div>
        ) : (
          <div className="grid gap-6 md:grid-cols-5">
            <form onSubmit={submit} className="glass space-y-4 p-6 md:col-span-3">
              <label className="block text-sm font-medium">Nume complet<input required name="nume" autoComplete="name" className="input mt-1" /></label>
              <label className="block text-sm font-medium">Telefon<input required name="telefon" type="tel" autoComplete="tel" className="input mt-1" /></label>
              <label className="block text-sm font-medium">Email<input required name="email" type="email" autoComplete="email" className="input mt-1" /></label>
              <label className="block text-sm font-medium">Observații (adresă, interval de contact)<textarea name="note" rows="3" className="input mt-1" placeholder="Adresă de livrare, ora potrivită..." /></label>
              <button className="btn-primary w-full">Confirmă comanda</button>
            </form>
            <aside className="glass h-fit p-6 md:col-span-2" aria-label="Sumar comandă">
              <h2 className="mb-3 font-semibold">Sumar</h2>
              <ul className="space-y-2 text-sm">
                {lines.map((l) => <li key={l.id} className="flex justify-between gap-2"><span>{l.qty} × {l.product.title}</span><span className="font-semibold">{l.qty * l.product.price}</span></li>)}
              </ul>
              <p className="mt-4 flex justify-between border-t border-ocean-light pt-3 font-heading font-bold"><span>Total</span><span>{total} {CURRENCY}</span></p>
            </aside>
          </div>
        )}
      </div>
    </main>
  )
}
