const PARTICLES = Array.from({ length: 16 }, (_, i) => ({
  left: `${(i * 37) % 100}%`,
  top: `${40 + ((i * 53) % 60)}%`,
  size: 6 + ((i * 7) % 12),
  dur: 14 + ((i * 5) % 16),
  delay: -((i * 3) % 14),
}))

function Leaf({ className, style, flip }) {
  return (
    <svg viewBox="0 0 120 160" className={`leaf absolute ${className}`} style={style} aria-hidden="true" fill="none">
      <g transform={flip ? 'translate(120 0) scale(-1 1)' : undefined}>
        <path d="M60 155 C20 120 10 60 60 5 C110 60 100 120 60 155Z" fill="#3FBF8F" fillOpacity=".22" stroke="#23966B" strokeOpacity=".35" />
        <path d="M60 155 V25 M60 100 L36 78 M60 80 L84 58 M60 120 L38 104" stroke="#23966B" strokeOpacity=".35" strokeLinecap="round" />
      </g>
    </svg>
  )
}

export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-aurora" aria-hidden="true">
      <div className="blob blob-1" />
      <div className="blob blob-2" />
      <div className="blob blob-3" />
      <Leaf className="-left-6 top-24 w-28 md:w-40" style={{ '--r': '-12deg' }} />
      <Leaf className="-right-4 top-1/3 w-24 md:w-36" style={{ '--r': '14deg' }} flip />
      <Leaf className="-bottom-6 left-4 w-28 md:w-44" style={{ '--r': '8deg' }} />
      <Leaf className="-bottom-4 -right-4 w-32 md:w-48" style={{ '--r': '-10deg' }} flip />
      {PARTICLES.map((p, i) => (
        <span
          key={i}
          className="particle"
          style={{ left: p.left, top: p.top, width: p.size, height: p.size, animationDuration: `${p.dur}s`, animationDelay: `${p.delay}s` }}
        />
      ))}
    </div>
  )
}
