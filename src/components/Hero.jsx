import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import BodySilhouette from './BodySilhouette'

export default function Hero() {
  return (
    <section id="acasa" className="relative overflow-hidden px-4 pb-10 pt-24 sm:px-6 md:pb-14 md:pt-28">
      <div className="container-x grid items-center gap-6 md:grid-cols-[1.2fr_1fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
            Ascultă <span className="bg-brand-gradient bg-clip-text text-transparent">semnalele</span> corpului tău
          </h1>
          <p className="mt-4 max-w-xl text-base text-ocean-ink/80 sm:text-lg">
            Suplimente alimentare și produse naturale. Alegi, trimiți comanda pe WhatsApp și plătești cu cardul.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#produse" className="btn-primary">Vezi produsele <ArrowRight className="h-4 w-4" aria-hidden="true" /></a>
            <a href="#cum-comand" className="btn-ghost">Cum comand</a>
          </div>
        </motion.div>
        <motion.div className="relative mx-auto hidden h-[320px] w-full max-w-xs items-center justify-center md:flex" initial={{ opacity: 0, scale: 0.92 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.2 }}>
          <div className="absolute inset-4 rounded-full bg-gradient-to-b from-ocean-light/50 to-heal-accent/20 blur-2xl" aria-hidden="true" />
          <BodySilhouette className="relative h-full w-auto" />
        </motion.div>
      </div>
    </section>
  )
}
