import SocialLinks from './SocialLinks'

export default function Footer() {
  return (
    <footer className="bg-ocean-ink px-4 py-10 text-ocean-bg sm:px-6">
      <div className="container-x flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-3">
          <img src={`${import.meta.env.BASE_URL}logo.png`} alt="" className="h-12 w-12 rounded-full" width="48" height="48" loading="lazy" />
          <span className="font-heading text-lg font-bold text-white">Semnalul Corpului</span>
        </div>
        <SocialLinks className="border-ocean-bg/30 text-ocean-bg hover:border-heal-accent hover:text-heal-accent" />
        <p className="max-w-2xl text-xs leading-relaxed text-ocean-bg/75">
          Informațiile de pe site au caracter informativ și nu înlocuiesc consultul medical. Pentru simptome severe sau urgențe, sună la 112.
        </p>
        <p className="text-xs text-ocean-bg/55">© {new Date().getFullYear()} Semnalul Corpului</p>
      </div>
    </footer>
  )
}
