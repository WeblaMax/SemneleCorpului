import { systems } from '../data/systems'

const BODY =
  'M88 62 Q88 72 80 76 Q56 82 48 96 L34 200 Q32 210 42 210 Q50 210 52 200 L62 130 L66 220 Q66 250 70 280 L66 370 Q66 384 78 384 L92 384 Q98 384 97 372 L100 300 L103 372 Q102 384 108 384 L122 384 Q134 384 134 370 L130 280 Q134 250 134 220 L138 130 L148 200 Q150 210 158 210 Q168 210 166 200 L152 96 Q144 82 120 76 Q112 72 112 62 Z'

const HEART = 'M0 9 C-14 -2 -9 -12 -3 -12 C-1 -12 0 -9 0 -8 C0 -9 1 -12 3 -12 C9 -12 14 -2 0 9Z'

// Siluetă transparentă cu organe luminoase. `active` = id sistem evidențiat; `idle` = pulsație discretă.
export default function BodySilhouette({ active = null, idle = true, className = '' }) {
  return (
    <svg viewBox="0 0 200 400" className={className} role="img" aria-label="Siluetă umană cu organele principale">
      <defs>
        <linearGradient id="sil" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9FD6DE" stopOpacity=".55" />
          <stop offset="1" stopColor="#3FBF8F" stopOpacity=".25" />
        </linearGradient>
        <radialGradient id="warm">
          <stop offset="0" stopColor="#FFB04D" stopOpacity=".95" />
          <stop offset=".5" stopColor="#FF7A3D" stopOpacity=".45" />
          <stop offset="1" stopColor="#FF7A3D" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="cool">
          <stop offset="0" stopColor="#3FBF8F" stopOpacity=".95" />
          <stop offset=".55" stopColor="#1C8A9C" stopOpacity=".4" />
          <stop offset="1" stopColor="#1C8A9C" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="100" cy="38" r="26" fill="url(#sil)" stroke="#1C8A9C" strokeOpacity=".55" strokeWidth="1.5" />
      <path d={BODY} fill="url(#sil)" stroke="#1C8A9C" strokeOpacity=".55" strokeWidth="1.5" strokeLinejoin="round" />
      {systems.map((s, i) => {
        const on = active === s.id
        const heart = s.id === 'cardio'
        const { x, y, r } = s.organ
        return (
          <g key={s.id}>
            <circle
              className={idle && !on ? 'organ' : undefined}
              cx={x} cy={y} r={on ? r * 1.9 : heart ? r * 1.5 : r}
              fill={heart ? 'url(#warm)' : 'url(#cool)'}
              opacity={on ? 1 : heart ? 0.9 : 0.35}
              style={{ transition: 'all .4s ease', animationDelay: `${i * 0.3}s`, ...(heart && idle ? { animation: 'heartGlow var(--beat) ease-in-out infinite' } : {}) }}
            />
            {heart && (
              <path d={HEART} transform={`translate(${x} ${y}) scale(${on ? 1.5 : 1.15})`} fill="#E4572E" style={{ transition: 'transform .4s ease' }} />
            )}
          </g>
        )
      })}
    </svg>
  )
}
