import { motion } from 'framer-motion'

// Apariție la scroll: fade + slide-up. `delay` permite stagger pe carduri.
export default function Reveal({ children, delay = 0, className = '', as = 'div' }) {
  const M = motion[as]
  return (
    <M
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </M>
  )
}
