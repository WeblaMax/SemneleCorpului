import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { FAQ as ITEMS } from '../data/content'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function FAQ() {
  const [open, setOpen] = useState(0)
  return (
    <section id="faq" className="section section-alt">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="Întrebări frecvente" title="Ai o nelămurire?" />
        <div className="space-y-3">
          {ITEMS.map((f, i) => {
            const on = open === i
            return (
              <Reveal key={f.q} delay={i * 0.05}>
                <div className="glass overflow-hidden">
                  <h3>
                    <button onClick={() => setOpen(on ? -1 : i)} aria-expanded={on} aria-controls={`faq-${i}`} id={`faq-b-${i}`} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left font-semibold">
                      {f.q}
                      <ChevronDown className={`h-5 w-5 shrink-0 text-ocean-strong transition ${on ? 'rotate-180' : ''}`} aria-hidden="true" />
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {on && (
                      <motion.div id={`faq-${i}`} role="region" aria-labelledby={`faq-b-${i}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                        <p className="px-5 pb-5 text-sm text-ocean-ink/85">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
