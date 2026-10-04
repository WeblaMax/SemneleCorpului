export const NAV = [
  { href: '#acasa', label: 'Acasă' },
  { href: '#evaluari', label: 'Evaluări' },
  { href: '#analize', label: 'Analize' },
  { href: '#pachete', label: 'Pachete' },
  { href: '#despre', label: 'Despre' },
  { href: '#contact', label: 'Contact' },
]

export const STEPS = [
  { icon: 'ListChecks', title: 'Alegi evaluarea', text: 'Selectezi serviciul sau pachetul potrivit nevoilor tale.' },
  { icon: 'CalendarCheck', title: 'Programare', text: 'Alegi ziua și ora care ți se potrivesc, online sau telefonic.' },
  { icon: 'Stethoscope', title: 'Recoltare / Consultație', text: 'Ajungi la noi – totul durează puțin, într-un cadru liniștit.' },
  { icon: 'FileHeart', title: 'Primești rezultatele', text: 'Rezultate clare, cu explicații și pașii următori recomandați.' },
]

export const REVIEWS = [
  { name: 'Elena M.', role: 'Chișinău', text: 'Am aflat, în sfârșit, de ce eram mereu obosită. Pachetul pentru oboseală cronică mi-a oferit răspunsuri și un plan clar.' },
  { name: 'Andrei C.', role: 'Bălți', text: 'Echipă atentă, recoltare rapidă și rezultate explicate pe înțelesul meu. Recomand pachetul Complet.' },
  { name: 'Mariana P.', role: 'Chișinău', text: 'Durerile de spate nu mai erau un mister după evaluare. Am primit recomandări concrete, fără presiune.' },
  { name: 'Victor L.', role: 'Orhei', text: 'Programare simplă, atmosferă calmă. Mă simt mult mai liniștit știind cum stau cu sănătatea.' },
]

export const FAQ = [
  { q: 'Trebuie să fiu a jeun pentru analize?', a: 'Pentru majoritatea analizelor de sânge se recomandă 8–12 ore de repaus alimentar. Îți spunem exact ce ai de făcut la programare.' },
  { q: 'În cât timp primesc rezultatele?', a: 'Analizele uzuale sunt gata în 24–48 de ore. Rezultatele îți sunt trimise online, iar interpretarea o primești în consultație.' },
  { q: 'Pot cumpăra un pachet pentru altcineva?', a: 'Da, poți oferi un pachet cadou. Ne contactezi, iar noi stabilim detaliile împreună cu persoana respectivă.' },
  { q: 'Cum mă programez după ce comand?', a: 'După finalizarea comenzii te sunăm sau îți scriem pentru a stabili ziua și ora potrivite.' },
  { q: 'Informațiile de pe site înlocuiesc consultul medical?', a: 'Nu. Informațiile au caracter informativ. Pentru simptome severe sau urgențe, sună la 112.' },
  { q: 'Cum se plătește?', a: 'Plata se face la locație, cash sau cu cardul. Nu se percepe nicio plată online la finalizarea comenzii.' },
]

export const QUIZ = [
  { q: 'Cât de des te simți obosit(ă) fără motiv?', key: 'oboseala' },
  { q: 'Cum ai descrie somnul tău?', key: 'somn' },
  { q: 'Ai dureri de oase, articulații sau mușchi?', key: 'dureri' },
  { q: 'Cum se simte digestia ta?', key: 'digestie' },
  { q: 'Cât de stresat(ă) te simți în ultima perioadă?', key: 'stres' },
]
// Fiecare răspuns adaugă puncte (0–3) la întrebare; scorul total decide recomandarea.
export const QUIZ_ANSWERS = ['Rar / deloc', 'Uneori', 'Des', 'Aproape zilnic']

export const CONTACT = {
  address: 'str. Exemplu 10, Chișinău, Moldova',
  phone: '+373 600 00 000',
  whatsapp: '37360000000',
  email: 'contact@semnalulcorpului.md',
  hours: [
    ['Luni – Vineri', '07:30 – 18:00'],
    ['Sâmbătă', '08:00 – 14:00'],
    ['Duminică', 'Închis'],
  ],
}
