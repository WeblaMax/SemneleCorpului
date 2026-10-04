const Facebook = (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.9c0-.9.3-1.5 1.6-1.5h1.7V4.5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.5-4 4.1v2.3H7.7V14h2.7v8z" /></svg>
const Instagram = (p) => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg>
const Youtube = (p) => <svg viewBox="0 0 24 24" fill="currentColor" {...p}><path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800zM10 15V9l5.200 3z" /></svg>
import { NAV } from '../data/content'

export default function Footer() {
  return (
    <footer className="border-t border-ocean-light/60 bg-ocean-ink px-4 py-12 text-ocean-bg sm:px-6">
      <div className="container-x grid gap-8 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Semnalul Corpului" className="h-14 w-14 rounded-full" width="56" height="56" loading="lazy" />
            <span className="font-heading text-lg font-bold text-white">Semnalul Corpului</span>
          </div>
          <p className="mt-3 text-sm text-ocean-bg/75">Ascultă semnalele corpului tău.</p>
        </div>
        <nav aria-label="Linkuri footer">
          <h2 className="mb-3 font-heading text-sm font-semibold text-white">Navigare</h2>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {NAV.map((n) => <li key={n.href}><a href={n.href} className="hover:text-heal-accent">{n.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <h2 className="mb-3 font-heading text-sm font-semibold text-white">Urmărește-ne</h2>
          <div className="flex gap-3">
            {[[Facebook, 'Facebook'], [Instagram, 'Instagram'], [Youtube, 'YouTube']].map(([I, n]) => (
              <a key={n} href="#" aria-label={n} className="rounded-full border border-ocean-bg/30 p-2.5 transition hover:border-heal-accent hover:text-heal-accent"><I className="h-5 w-5" aria-hidden="true" /></a>
            ))}
          </div>
        </div>
      </div>
      <p className="container-x mt-10 border-t border-ocean-bg/20 pt-6 text-xs leading-relaxed text-ocean-bg/75">
        Informațiile de pe site au caracter informativ și nu înlocuiesc consultul medical. Pentru simptome severe sau urgențe, sună la 112.
      </p>
      <p className="container-x mt-2 text-xs text-ocean-bg/55">© {new Date().getFullYear()} Semnalul Corpului. Toate drepturile rezervate.</p>
    </footer>
  )
}
