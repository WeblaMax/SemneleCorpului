import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import BodySilhouette from './BodySilhouette'

export default function Hero() {
  return (
    <section id="acasa" className="relative overflow-hidden px-4 pb-16 pt-28 sm:px-6 md:pb-24 md:pt-32">
      <div className="container-x grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }}>
          <span className="glass inline-flex items-center gap-2 !rounded-full px-4 py-1.5 text-xs font-semibold text-heal-dark">
            <Sparkles className="h-4 w-4" aria-hidden="true" /> Evaluări, analize și pachete de sănătate
          </span>
          <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Ascultă <span className="bg-brand-gradient bg-clip-text text-transparent">semnalele</span> corpului tău
          </h1>
          <p className="mt-5 max-w-xl text-base text-ocean-ink/80 sm:text-lg">
            O evaluare completă a organismului, de la analize de laborator la consultație, explicată clar și pe înțelesul tău. Afli ce îți spune corpul înainte să strige.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#analize" className="btn-primary">Alege evaluarea <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="#quiz" className="btn-ghost">Fă testul rapid</a>
          </div>
        </motion.div>
        <motion.div className="relative mx-auto flex h-[420px] w-full max-w-sm items-center justify-center md:h-[520px]" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }}>
          <div className="absolute inset-6 rounded-full bg-gradient-to-b from-ocean-light/50 to-heal-accent/20 blur-2xl" aria-hidden="true" />
          <BodySilhouette className="relative h-full w-auto drop-shadow-[0_20px_40px_rgba(28,138,156,0.25)]" />
        </motion.div>
      </div>
    </section>
  )
}
