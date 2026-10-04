import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { CartProvider } from './context/CartContext'
import Background from './components/Background'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import SystemsSection from './components/SystemsSection'
import Products from './components/Products'
import Quiz from './components/Quiz'
import HowItWorks from './components/HowItWorks'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Checkout from './components/Checkout'

const SEEN = 'sc_intro_seen'
const seen = () => { try { return sessionStorage.getItem(SEEN) === '1' } catch { return false } }

export default function App() {
  const [intro, setIntro] = useState(() => !seen())
  const [system, setSystem] = useState(null)
  const [category, setCategory] = useState(null)
  const pickSystem = (id) => { setSystem(id); setCategory(null) }
  const pickCategory = (c) => { setSystem(null); setCategory(c) }
  const [route, setRoute] = useState(window.location.hash)
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const finish = useCallback(() => {
    try { sessionStorage.setItem(SEEN, '1') } catch { /* ignorat */ }
    setIntro(false)
  }, [])

  useEffect(() => {
    const on = () => { setRoute(window.location.hash); if (window.location.hash === '#/checkout') window.scrollTo(0, 0) }
    window.addEventListener('hashchange', on)
    return () => window.removeEventListener('hashchange', on)
  }, [])

  useEffect(() => {
    document.body.style.overflow = intro ? 'hidden' : ''
  }, [intro])

  const checkout = route === '#/checkout'

  return (
    <CartProvider>
      <Background />
      <AnimatePresence>{intro && <Preloader key="pre" onDone={finish} reducedMotion={reduced} />}</AnimatePresence>
      <Header />
      {checkout ? (
        <Checkout />
      ) : (
        <main>
          <Hero />
          <SystemsSection selected={system} onSelect={pickSystem} />
          <Products system={system} category={category} onCategory={setCategory} onClearSystem={() => pickSystem(null)} />
          <Quiz onPick={pickCategory} />
          <HowItWorks />
          <Reviews />
          <FAQ />
          <Contact />
        </main>
      )}
      <Footer />
      <CartDrawer />
    </CartProvider>
  )
}
