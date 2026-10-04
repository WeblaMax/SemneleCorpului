// Inimă SVG cu gradient cald (folosită dacă WebGL nu e disponibil și cât se încarcă modelul 3D).
export default function HeartFallback({ beating = true }) {
  return (
    <svg viewBox="0 0 200 200" className="h-full w-full" role="img" aria-label="Inimă">
      <defs>
        <radialGradient id="hf" cx="38%" cy="30%" r="80%">
          <stop offset="0" stopColor="#FFB26B" />
          <stop offset=".45" stopColor="#F2603A" />
          <stop offset="1" stopColor="#B3201A" />
        </radialGradient>
      </defs>
      <g style={beating ? { transformOrigin: '100px 110px', animation: 'halo var(--beat) ease-in-out infinite' } : undefined}>
        <path d="M92 40 Q92 14 112 14 Q124 14 124 28 L124 44 M76 48 Q64 20 40 30" fill="none" stroke="#E4572E" strokeWidth="14" strokeLinecap="round" />
        <path d="M100 178 C48 132 28 104 32 76 C36 48 76 40 100 70 C124 40 164 48 168 76 C172 104 152 132 100 178Z" fill="url(#hf)" />
        <path d="M70 70 Q84 58 98 76" stroke="#FFD9B0" strokeOpacity=".6" strokeWidth="5" fill="none" strokeLinecap="round" />
      </g>
    </svg>
  )
}
