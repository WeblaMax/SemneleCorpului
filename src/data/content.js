export const NAV = [
  { href: '#acasa', label: 'Acasă' },
  { href: '#sisteme', label: 'Sisteme' },
  { href: '#produse', label: 'Produse' },
  { href: '#despre', label: 'Despre' },
  { href: '#contact', label: 'Contact' },
]

export const STEPS = [
  { icon: 'ListChecks', title: 'Alegi produsele', text: 'Alegi sistemul corpului și produsele care te interesează.' },
  { icon: 'ShoppingBag', title: 'Faci comanda', text: 'Adaugi în coș și trimiți datele de contact.' },
  { icon: 'Phone', title: 'Confirmare', text: 'Te sunăm pentru a confirma comanda și modul de livrare.' },
  { icon: 'PackageCheck', title: 'Primești produsele', text: 'Îți pregătim comanda și o ridici sau ți-o livrăm.' },
]

export const REVIEWS = [
  { name: 'Elena M.', role: 'Chișinău', text: 'Am găsit în sfârșit produsele potrivite pentru energie și somn. Mă simt mult mai bine de la o lună la alta.' },
  { name: 'Andrei C.', role: 'Bălți', text: 'Echipă atentă, comandă simplă și explicații clare despre fiecare produs. Recomand cu încredere.' },
  { name: 'Mariana P.', role: 'Chișinău', text: 'Am primit recomandări concrete pentru articulații, fără presiune la cumpărare.' },
  { name: 'Victor L.', role: 'Orhei', text: 'Comandă simplă și livrare rapidă. Pot alege ușor după sistemul corpului.' },
]

export const FAQ = [
  { q: 'Produsele sunt medicamente?', a: 'Nu. Sunt suplimente alimentare și produse naturale. Nu înlocuiesc tratamentul medical și nu tratează boli.' },
  { q: 'Cum aleg produsul potrivit?', a: 'Alege sistemul corpului din cercul interactiv sau fă testul rapid. Vei vedea produsele grupate pe categorii.' },
  { q: 'Cum mă contactați după ce comand?', a: 'După finalizarea comenzii te sunăm sau îți scriem pentru a confirma produsele și modul de livrare.' },
  { q: 'Pot lua suplimentele în sarcină sau alăptare?', a: 'Consultă mai întâi medicul. Același lucru este valabil dacă urmezi un tratament sau ai afecțiuni cronice.' },
  { q: 'Cum se plătește?', a: 'Plata se face la primirea comenzii, cash sau cu cardul. Nu se percepe nicio plată online la finalizarea comenzii.' },
  { q: 'Informațiile de pe site înlocuiesc consultul medical?', a: 'Nu. Informațiile au caracter informativ. Pentru simptome severe sau urgențe, sună la 112.' },
]

export const QUIZ = [
  { q: 'Cât de des te simți obosit(ă) fără motiv?', key: 'oboseala', categories: ['energie-tonus', 'vitamine-minerale'] },
  { q: 'Cum ai descrie somnul tău agitat sau superficial?', key: 'somn', categories: ['creier-somn'] },
  { q: 'Ai dureri de oase, articulații sau mușchi?', key: 'dureri', categories: ['oase-articulatii'] },
  { q: 'Ai disconfort digestiv (balonare, tranzit neregulat)?', key: 'digestie', categories: ['digestie-ficat'] },
  { q: 'Cât de stresat(ă) te simți în ultima perioadă?', key: 'stres', categories: ['creier-somn', 'energie-tonus'] },
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
