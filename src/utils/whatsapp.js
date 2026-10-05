import { CONTACT } from '../data/content'
import { CURRENCY } from '../data/products'

// Link wa.me cu mesajul comenzii deja scris. `lines` = [{ product, qty }]
export function orderLink(lines) {
  const total = lines.reduce((s, l) => s + l.product.price * l.qty, 0)
  const items = lines.map((l, i) => `${i + 1}. ${l.product.title} × ${l.qty} – ${l.product.price * l.qty} ${CURRENCY}`).join('\n')
  const text = `Bună ziua! Aș dori să comand:\n\n${items}\n\nTotal: ${total} ${CURRENCY}\n\nVă rog să-mi trimiteți detaliile pentru plata cu cardul și livrarea.`
  return `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(text)}`
}

export const chatLink = () => `https://wa.me/${CONTACT.whatsapp}`
