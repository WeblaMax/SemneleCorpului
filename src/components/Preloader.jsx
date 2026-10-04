import { lazy, Suspense, useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import HeartFallback from './HeartFallback'

const HeartScene = lazy(() => import('./HeartScene'))
const DURATION = 3600

function webglOk() {
  try {
    const c = document.createElement('canvas')
    return !!(c.getContext('webgl2') || c.getContext('webgl'))
  } catch {
    return false
  }
}

export default function Preloader({ onDone, reducedMotion }) {
  const start = useMemo(() => performance.now(), [])
  const [hasModel, setHasModel] = useState(false)
  const use3d = useMemo(() => !reducedMotion && webglOk(), [reducedMotion])

  useEffect(() => {
    const t = setTimeout(onDone, reducedMotion ? 1000 : DURATION)
    return () => clearTimeout(t)
  }, [onDone, reducedMotion])

  // Folosește modelul GLB doar dacă există în /public/models
  useEffect(() => {
    if (reducedMotion) return
    fetch('/models/heart.glb', { method: 'HEAD' })
      .then((r) => setHasModel(r.ok && !(r.headers.get('content-type') || '').includes('text/html')))
      .catch(() => {})
  }, [reducedMotion])

  const logo = (
    <img src="/logo.png" alt="Semnalul Corpului" className="h-24 w-24 rounded-full shadow-glow sm:h-28 sm:w-28" width="112" height="112" />
  )

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-aurora"
      role="status"
      aria-label="Se încarcă"
      initial={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.12, transition: { duration: 0.7, ease: 'easeInOut' } }}
    >
      {reducedMotion ? (
        logo
      ) : (
        <>
          <div className="relative flex h-72 w-72 items-center justify-center sm:h-80 sm:w-80">
            {[0, 1].map((i) => (
              <span
                key={i}
                className="wave-ring absolute h-44 w-44 rounded-full"
                style={{ background: 'radial-gradient(circle, rgba(255,170,80,.55), rgba(255,140,60,0) 70%)', animationDelay: `${i * 0.12}s` }}
              />
            ))}
            <span
              className="halo-ring absolute h-60 w-60 rounded-full border-2 border-heal-accent/70 sm:h-64 sm:w-64"
              style={{ boxShadow: '0 0 40px 6px rgba(63,191,143,.45), inset 0 0 40px 4px rgba(28,138,156,.35)', background: 'radial-gradient(circle, rgba(63,191,143,.08), rgba(28,138,156,.18))' }}
            />
            <div className="relative h-52 w-52 sm:h-56 sm:w-56">
              {use3d ? (
                <Suspense fallback={<HeartFallback />}>
                  <HeartScene start={start} hasModel={hasModel} />
                </Suspense>
              ) : (
                <HeartFallback />
              )}
            </div>
          </div>
          <svg viewBox="0 0 300 60" className="mt-2 h-14 w-72 sm:w-80" aria-hidden="true">
            <path d="M0 30 H80 L92 30 L100 22 L108 30 H122 L130 38 L142 4 L154 54 L164 30 H196 Q206 12 218 30 H300" fill="none" stroke="rgba(28,138,156,.25)" strokeWidth="2" />
            <path className="ekg-line" pathLength="1" d="M0 30 H80 L92 30 L100 22 L108 30 H122 L130 38 L142 4 L154 54 L164 30 H196 Q206 12 218 30 H300" fill="none" stroke="#1C8A9C" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <motion.div className="mt-3" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 1.2 }}>
            {logo}
          </motion.div>
        </>
      )}
      <button
        onClick={onDone}
        className="absolute bottom-6 right-6 rounded-full border border-ocean-strong/30 bg-white/50 px-4 py-2 text-xs font-medium text-ocean-ink/80 backdrop-blur hover:bg-white/80"
      >
        Sari peste
      </button>
    </motion.div>
  )
}
