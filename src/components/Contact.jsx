import { MessageCircle, Phone } from 'lucide-react'
import SocialLinks from './SocialLinks'
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
        <p className="mt-6 flex items-center justify-center gap-2 text-sm"><Phone className="h-4 w-4 text-ocean-strong" aria-hidden="true" /><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:underline">{CONTACT.phone}</a></p>
        <div className="mt-5 flex justify-center"><SocialLinks className="border-ocean-light bg-white/70 text-ocean-strong hover:border-heal-accent hover:text-heal-dark" /></div>
      </Reveal>
    </section>
  )
}
