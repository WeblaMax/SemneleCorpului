import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { QUIZ, QUIZ_ANSWERS } from '../data/content'
import { catalog, CURRENCY } from '../data/products'
import { useCart } from '../context/CartContext'
import SectionHeading from './SectionHeading'

function recommend(answers) {
  const total = answers.reduce((a, b) => a + b, 0)
  const top = answers.indexOf(Math.max(...answers))
  const pack = total <= 4 ? 'pachet-esential' : total <= 9 ? 'pachet-complet' : 'pachet-premium'
  const extra = { 0: 'oboseala-cronica', 2: 'dureri-membre', 1: 'somn-stres', 4: 'somn-stres', 3: 'probe' }[top]
  return { pack, extra: answers[top] >= 2 ? extra : null }
}

export default function Quiz() {
  const { add } = useCart()
  const [step, setStep] = useState(0)
  const [answers, setAnswers] = useState([])
  const done = step >= QUIZ.length
  const progress = Math.round((Math.min(step, QUIZ.length) / QUIZ.length) * 100)
  const res = done ? recommend(answers) : null

  const answer = (v) => { setAnswers((a) => [...a, v]); setStep((s) => s + 1) }
  const reset = () => { setAnswers([]); setStep(0) }

  return (
    <section id="quiz" className="section">
      <div className="container-x max-w-3xl">
        <SectionHeading eyebrow="Test rapid" title="Ce semnal îți transmite corpul?" text="5 întrebări, sub un minut. La final îți recomandăm un pachet." />
        <div className="glass p-6 sm:p-8">
          <div className="mb-6" aria-label={`Progres: ${progress}%`}>
            <div className="mb-1 flex justify-between text-xs font-medium"><span>{done ? 'Gata!' : `Întrebarea ${step + 1} din ${QUIZ.length}`}</span><span>{progress}%</span></div>
            <div className="h-2.5 overflow-hidden rounded-full bg-ocean-light/50" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={progress}>
              <motion.div className="h-full rounded-full bg-brand-gradient" animate={{ width: `${progress}%` }} transition={{ duration: 0.5 }} />
            </div>
          </div>
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div key={step} initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.3 }}>
                <h3 className="text-xl font-semibold">{QUIZ[step].q}</h3>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {QUIZ_ANSWERS.map((a, v) => (
                    <button key={a} onClick={() => answer(v)} className="rounded-2xl border border-ocean-light bg-white/70 px-4 py-3 text-left text-sm font-medium transition hover:-translate-y-0.5 hover:border-heal-accent hover:bg-heal-bg hover:shadow-glow">{a}</button>
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div key="res" initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} aria-live="polite">
                <p className="text-sm font-semibold text-heal-dark">Recomandarea noastră</p>
                <h3 className="mt-1 text-2xl font-bold">{catalog[res.pack].title}</h3>
                <p className="mt-1 text-ocean-ink/80">{catalog[res.pack].tagline} – {catalog[res.pack].price} {CURRENCY}</p>
                {res.extra && <p className="mt-3 rounded-2xl bg-heal-bg/70 p-3 text-sm">Pe lângă acesta, semnalele tale indică și <strong>{catalog[res.extra].title}</strong> (de la {catalog[res.extra].price} {CURRENCY}).</p>}
                <div className="mt-6 flex flex-wrap gap-3">
                  <button onClick={() => add(res.pack)} className="btn-primary">Adaugă pachetul în coș</button>
                  {res.extra && <button onClick={() => add(res.extra)} className="btn-ghost">Adaugă și {catalog[res.extra].title}</button>}
                  <button onClick={reset} className="btn-ghost">Reia testul</button>
                </div>
                <p className="mt-4 text-xs text-ocean-ink/65">Rezultat orientativ, fără valoare de diagnostic.</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
