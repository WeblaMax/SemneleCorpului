import { useState } from 'react'
import { MapPin, Clock, Phone, Mail, MessageCircle, Send } from 'lucide-react'
import { CONTACT } from '../data/content'
import { products, packages } from '../data/products'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const submit = (e) => { e.preventDefault(); setSent(true); e.currentTarget.reset() }
  const options = [...products.map((p) => p.title), ...packages.map((p) => `Pachet ${p.name}`)]

  return (
    <section id="contact" className="section">
      <div className="container-x">
        <SectionHeading eyebrow="Contact" title="Programează-te sau scrie-ne" text="Îți răspundem în aceeași zi lucrătoare." />
        <div className="grid gap-6 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <form onSubmit={submit} className="glass grid gap-4 p-6 sm:grid-cols-2 sm:p-8">
              <label className="text-sm font-medium">Nume
                <input required name="nume" autoComplete="name" className="input mt-1" placeholder="Numele tău" />
              </label>
              <label className="text-sm font-medium">Telefon
                <input required name="telefon" type="tel" autoComplete="tel" className="input mt-1" placeholder="+373 ..." />
              </label>
              <label className="text-sm font-medium sm:col-span-2">Email
                <input required name="email" type="email" autoComplete="email" className="input mt-1" placeholder="nume@exemplu.md" />
              </label>
              <label className="text-sm font-medium sm:col-span-2">Serviciul dorit
                <select name="serviciu" className="input mt-1" defaultValue="">
                  <option value="" disabled>Alege serviciul</option>
                  {options.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
              <label className="text-sm font-medium sm:col-span-2">Mesaj
                <textarea name="mesaj" rows="4" className="input mt-1" placeholder="Spune-ne pe scurt ce te preocupă" />
              </label>
              <div className="sm:col-span-2">
                <button type="submit" className="btn-primary"><Send className="h-4 w-4" aria-hidden="true" /> Trimite mesajul</button>
                {sent && <p role="status" className="mt-3 rounded-2xl bg-heal-bg px-4 py-3 text-sm font-medium text-heal-dark">Mulțumim! Ți-am primit mesajul și te contactăm în curând.</p>}
              </div>
            </form>
          </Reveal>
          <Reveal delay={0.12} className="lg:col-span-2">
            <div className="glass h-full space-y-5 p-6 sm:p-8">
              <p className="flex gap-3 text-sm"><MapPin className="h-5 w-5 shrink-0 text-ocean-strong" aria-hidden="true" />{CONTACT.address}</p>
              <p className="flex gap-3 text-sm"><Phone className="h-5 w-5 shrink-0 text-ocean-strong" aria-hidden="true" /><a href={`tel:${CONTACT.phone.replace(/\s/g, '')}`} className="hover:underline">{CONTACT.phone}</a></p>
              <p className="flex gap-3 text-sm"><Mail className="h-5 w-5 shrink-0 text-ocean-strong" aria-hidden="true" /><a href={`mailto:${CONTACT.email}`} className="hover:underline">{CONTACT.email}</a></p>
              <div className="flex gap-3 text-sm">
                <Clock className="h-5 w-5 shrink-0 text-ocean-strong" aria-hidden="true" />
                <dl className="w-full space-y-1">
                  {CONTACT.hours.map(([d, h]) => <div key={d} className="flex justify-between gap-2"><dt>{d}</dt><dd className="font-semibold">{h}</dd></div>)}
                </dl>
              </div>
              <a href={`https://wa.me/${CONTACT.whatsapp}`} target="_blank" rel="noopener noreferrer" className="btn w-full bg-[#23966B] text-white shadow-soft hover:shadow-glow hover:brightness-105">
                <MessageCircle className="h-4 w-4" aria-hidden="true" /> Scrie pe WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
