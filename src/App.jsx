import { useCallback, useEffect, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { chatLink } from './utils/whatsapp'
import { CartProvider } from './context/CartContext'
import Background from './components/Background'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import SystemsSection from './components/SystemsSection'
import Products from './components/Products'
import HowToOrder from './components/HowToOrder'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'

const SEEN = 'sc_intro_seen'
const seen = () => { try { return sessionStorage.getItem(SEEN) === '1' } catch { return false } }

export default function App() {
  const [intro, setIntro] = useState(() => !seen())
  const [system, setSystem] = useState(null)
  const [category, setCategory] = useState(null)
  const pickSystem = (id) => { setSystem(id); setCategory(null) }
  const pickCategory = (c) => { setSystem(null); setCategory(c) }
  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  const finish = useCallback(() => {
    try { sessionStorage.setItem(SEEN, '1') } catch { /* ignorat */ }
    setIntro(false)
  }, [])

  useEffect(() => {
    document.body.style.overflow = intro ? 'hidden' : ''
  }, [intro])

  return (
    <CartProvider>
      <Background />
      <AnimatePresence>{intro && <Preloader key="pre" onDone={finish} reducedMotion={reduced} />}</AnimatePresence>
      <Header />
      <main>
        <Hero />
        <Products system={system} category={category} onCategory={setCategory} onClearSystem={() => pickSystem(null)} />
        <SystemsSection selected={system} onSelect={pickSystem} />
        <HowToOrder />
        <Contact />
      </main>
      <Footer />
      <CartDrawer />
      <a href={chatLink()} target="_blank" rel="noopener noreferrer" aria-label="Scrie pe WhatsApp" className="fixed bottom-5 right-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-heal-dark text-white shadow-glow transition hover:scale-105 sm:hidden"><MessageCircle className="h-7 w-7" aria-hidden="true" /></a>
    </CartProvider>
  )
}
