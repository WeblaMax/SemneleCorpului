import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { REVIEWS } from '../data/content'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const go = (d) => setI((v) => (v + d + REVIEWS.length) % REVIEWS.length)

  useEffect(() => {
    if (paused) return
    const t = setInterval(() => setI((v) => (v + 1) % REVIEWS.length), 7000)
    return () => clearInterval(t)
  }, [paused])

  const r = REVIEWS[i]
  return (
    <section id="recenzii" className="section">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="Recenzii" title="Ce spun clienții noștri" text="Texte de exemplu – înlocuiește-le cu recenzii reale." />
        <div className="glass relative p-8 text-center sm:p-10" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} role="region" aria-roledescription="carusel" aria-label="Recenzii">
          <Quote className="mx-auto mb-3 h-8 w-8 text-heal-accent" aria-hidden="true" />
          <div className="min-h-[170px]" aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.figure key={i} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }} transition={{ duration: 0.35 }}>
                <div className="mb-3 flex justify-center gap-1" aria-label="5 din 5 stele">
                  {Array.from({ length: 5 }).map((_, k) => <Star key={k} className="h-4 w-4 fill-amber-400 text-amber-400" aria-hidden="true" />)}
                </div>
                <blockquote className="text-lg leading-relaxed">„{r.text}"</blockquote>
                <figcaption className="mt-4 text-sm font-semibold">{r.name} <span className="font-normal text-ocean-ink/65">· {r.role}</span></figcaption>
              </motion.figure>
            </AnimatePresence>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4">
            <button onClick={() => go(-1)} className="rounded-full border border-ocean-light bg-white/70 p-2 hover:bg-white" aria-label="Recenzia anterioară"><ChevronLeft className="h-5 w-5" /></button>
            <div className="flex gap-2">
              {REVIEWS.map((_, k) => (
                <button key={k} onClick={() => setI(k)} aria-label={`Recenzia ${k + 1}`} aria-current={k === i} className={`h-2.5 rounded-full transition-all ${k === i ? 'w-7 bg-brand-gradient' : 'w-2.5 bg-ocean-light'}`} />
              ))}
            </div>
            <button onClick={() => go(1)} className="rounded-full border border-ocean-light bg-white/70 p-2 hover:bg-white" aria-label="Recenzia următoare"><ChevronRight className="h-5 w-5" /></button>
          </div>
        </div>
      </div>
    </section>
  )
}
