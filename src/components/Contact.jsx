import { MessageCircle, Phone, MapPin, Clock } from 'lucide-react'
import { CONTACT } from '../data/content'
import { chatLink } from '../utils/whatsapp'
import Reveal from './Reveal'

export default function Contact() {
  return (
    <section id="contact" className="section !py-12 md:!py-16">
      <Reveal className="glass container-x max-w-3xl p-6 text-center sm:p-10">
        <h2 className="text-2xl font-bold md:text-3xl">Ai o întrebare?</h2>
        <p className="mt-2 text-ocean-ink/80">Scrie-ne pe WhatsApp – răspundem cât putem de repede.</p>
        <a href={chatLink()} target="_blank" rel="noopener noreferrer" className="btn-primary mt-6"><MessageCircle className="h-4 w-4" aria-hidden="true" /> Scrie pe WhatsApp</a>
        <ul className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-ocean-strong" aria-hidden="true" /><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:underline">{CONTACT.phone}</a></li>
          <li className="flex items-center gap-2"><Clock className="h-4 w-4 text-ocean-strong" aria-hidden="true" />{CONTACT.hours}</li>
          <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-ocean-strong" aria-hidden="true" />{CONTACT.address}</li>
        </ul>
      </Reveal>
    </section>
  )
}
