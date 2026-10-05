import { useState } from 'react'
import { systems } from '../data/systems'
import Icon from './Icon'
import BodySilhouette from './BodySilhouette'
import SectionHeading from './SectionHeading'

// Ordinea pe cerc (în sensul acelor de ceasornic, începând din stânga-sus), ca în imaginea de referință.
const ORDER = ['cardio', 'neurologic', 'oase', 'hidratare', 'somn', 'mental', 'hormonal', 'imunitar', 'digestiv', 'respirator']
const byId = Object.fromEntries(systems.map((s) => [s.id, s]))

function Node({ s, x, y, hovered, selected, onHover, onSelect }) {
  const lit = hovered === s.id || selected === s.id
  return (
    <button
      type="button"
      onMouseEnter={() => onHover(s.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(s.id)}
      onBlur={() => onHover(null)}
      onClick={() => onSelect(s.id)}
      aria-pressed={selected === s.id}
      className="group absolute z-10 flex w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1.5 text-center"
      style={{ left: `${x}%`, top: `${y}%` }}
    >
      <span className={`flex h-[74px] w-[74px] items-center justify-center rounded-full border-2 text-white shadow-soft transition duration-300 ${lit ? 'scale-110 border-heal-accent bg-brand-gradient shadow-glow' : 'border-ocean-light bg-gradient-to-br from-ocean-strong to-ocean-ink group-hover:scale-105'}`}>
        <Icon name={s.icon} className="h-8 w-8" strokeWidth={1.7} />
      </span>
      <span className={`text-sm font-semibold ${lit ? 'text-heal-dark' : 'text-ocean-ink'}`}>{s.label}</span>
    </button>
  )
}

export default function SystemsSection({ selected, onSelect }) {
  const [hovered, setHovered] = useState(null)
  const active = hovered || selected

  const select = (id) => {
    onSelect(selected === id ? null : id)
    if (selected !== id) document.getElementById('produse')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="sisteme" className="section">
      <div className="container-x">
        <SectionHeading
          title="Caută după sistemul corpului"
          text="Alege un sistem și vezi produsele potrivite."
        />

        {/* Desktop: cerc interactiv */}
        <div className="glass relative mx-auto hidden aspect-square w-full max-w-[680px] !rounded-full lg:block">
          <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
            <circle cx="50" cy="50" r="41" fill="none" stroke="#1C8A9C" strokeOpacity=".5" strokeWidth=".25" strokeDasharray=".5 1.2" strokeLinecap="round" />
            <circle cx="50" cy="50" r="29" fill="none" stroke="#3FBF8F" strokeOpacity=".4" strokeWidth=".2" strokeDasharray=".4 1" strokeLinecap="round" />
            {ORDER.map((id, i) => {
              const a = ((-108 + i * 36) * Math.PI) / 180
              const on = active === id
              return (
                <line key={id} x1={50 + 29 * Math.cos(a)} y1={50 + 29 * Math.sin(a)} x2={50 + 41 * Math.cos(a)} y2={50 + 41 * Math.sin(a)}
                  stroke={on ? '#3FBF8F' : '#1C8A9C'} strokeOpacity={on ? 0.9 : 0.4} strokeWidth={on ? 0.4 : 0.2} strokeDasharray=".5 1" strokeLinecap="round" />
              )
            })}
          </svg>
          <div className="absolute left-1/2 top-1/2 h-[56%] w-[34%] -translate-x-1/2 -translate-y-1/2">
            <svg viewBox="0 0 300 400" className="absolute -inset-x-[25%] bottom-0 h-[70%] w-[150%] opacity-80" aria-hidden="true">
              <path d="M130 390 C60 360 20 280 40 170 C90 210 130 290 130 390Z" fill="#3FBF8F" fillOpacity=".35" stroke="#23966B" strokeOpacity=".4" />
              <path d="M170 390 C240 360 280 280 260 170 C210 210 170 290 170 390Z" fill="#3FBF8F" fillOpacity=".35" stroke="#23966B" strokeOpacity=".4" />
              <path d="M110 395 C70 380 30 340 20 290 C60 300 100 340 110 395Z" fill="#23966B" fillOpacity=".3" />
              <path d="M190 395 C230 380 270 340 280 290 C240 300 200 340 190 395Z" fill="#23966B" fillOpacity=".3" />
            </svg>
            <BodySilhouette active={active} className="relative h-full w-full" />
          </div>
          {ORDER.map((id, i) => {
            const a = ((-108 + i * 36) * Math.PI) / 180
            return <Node key={id} s={byId[id]} x={50 + 41 * Math.cos(a)} y={50 + 41 * Math.sin(a)} hovered={hovered} selected={selected} onHover={setHovered} onSelect={select} />
          })}
        </div>

        {/* Mobil / tabletă: siluetă + grilă 2 coloane */}
        <div className="lg:hidden">
          <div className="mx-auto mb-6 h-64 w-40">
            <BodySilhouette active={active} className="h-full w-full" />
          </div>
          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {ORDER.map((id) => {
              const s = byId[id]
              const on = selected === id
              return (
                <button key={id} type="button" onClick={() => select(id)} aria-pressed={on}
                  className={`glass card-hover flex min-w-0 items-center gap-2 p-2.5 text-left ${on ? '!border-heal-accent !shadow-glow' : ''}`}>
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-white ${on ? 'bg-brand-gradient' : 'bg-gradient-to-br from-ocean-strong to-ocean-ink'}`}>
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <span className="min-w-0 text-[13px] font-semibold sm:text-sm">{s.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
