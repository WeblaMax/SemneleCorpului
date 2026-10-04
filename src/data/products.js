// ============================================================
//  PRODUSE – editează liber acest fișier.
//  price = preț în MDL ("de la ..."); systems = id-uri din systems.js
//  icon = nume de iconiță lucide-react (vezi ICONS din components/Icon.jsx)
// ============================================================
export const CURRENCY = 'MDL'

export const products = [
  {
    id: 'evaluari-organism',
    icon: 'Activity',
    title: 'Evaluări ale organismului',
    description: 'Imagine de ansamblu asupra stării tale: consultație, măsurători și interpretare clară.',
    price: 450,
    systems: ['cardio', 'imunitar', 'hormonal'],
  },
  {
    id: 'analize-laborator',
    icon: 'FlaskConical',
    title: 'Analize de laborator',
    description: 'Hemogramă, glicemie, lipide, vitamine și minerale – recoltare rapidă, rezultate online.',
    price: 180,
    systems: ['imunitar', 'digestiv', 'hormonal', 'oase'],
  },
  {
    id: 'probe',
    icon: 'TestTube',
    title: 'Probe',
    description: 'Probe specifice pentru intoleranțe, deficiențe nutriționale și markeri de inflamație.',
    price: 220,
    systems: ['digestiv', 'imunitar', 'hidratare'],
  },
  {
    id: 'evaluari-sanatate',
    icon: 'ClipboardCheck',
    title: 'Evaluări de sănătate',
    description: 'Pachete complete de verificare periodică, personalizate după vârstă și stil de viață.',
    price: 890,
    systems: ['cardio', 'respirator', 'neurologic', 'mental'],
  },
  {
    id: 'oboseala-cronica',
    icon: 'BatteryLow',
    title: 'Oboseală cronică',
    description: 'Pachet dedicat: fier, tiroidă, vitamina D și B12, cortizol, somn și nivel de stres.',
    price: 640,
    systems: ['somn', 'hormonal', 'mental', 'imunitar'],
  },
  {
    id: 'dureri-membre',
    icon: 'Bone',
    title: 'Dureri ale membrelor sau mușchilor',
    description: 'Pachet dedicat: markeri inflamatori, calciu, magneziu, vitamina D și evaluare musculo-scheletică.',
    price: 560,
    systems: ['oase', 'neurologic', 'hidratare'],
  },
  {
    id: 'cardio-check',
    icon: 'HeartPulse',
    title: 'Verificare cardiovasculară',
    description: 'EKG, tensiune, profil lipidic și risc cardiovascular explicat pe înțelesul tău.',
    price: 380,
    systems: ['cardio'],
  },
  {
    id: 'somn-stres',
    icon: 'Moon',
    title: 'Somn și stres',
    description: 'Chestionare validate și markeri hormonali pentru un somn odihnitor și o minte calmă.',
    price: 310,
    systems: ['somn', 'mental', 'hormonal'],
  },
]

// Cardurile din secțiunea „Servicii principale" (primele 6).
export const MAIN_SERVICE_IDS = [
  'evaluari-organism',
  'analize-laborator',
  'probe',
  'evaluari-sanatate',
  'oboseala-cronica',
  'dureri-membre',
]

export const packages = [
  {
    id: 'pachet-esential',
    name: 'Esențial',
    price: 490,
    tagline: 'Primul pas spre o imagine clară',
    features: ['Hemogramă completă', 'Glicemie și profil lipidic', 'Vitamina D', 'Consultație de interpretare'],
    featured: false,
  },
  {
    id: 'pachet-complet',
    name: 'Complet',
    price: 1190,
    tagline: 'Evaluarea echilibrată pentru majoritatea',
    features: [
      'Tot din Esențial',
      'Panel tiroidian și hormonal',
      'Fier, B12, magneziu',
      'EKG și tensiune',
      'Plan personalizat de 30 de zile',
    ],
    featured: true,
  },
  {
    id: 'pachet-premium',
    name: 'Premium',
    price: 2290,
    tagline: 'Verificare în profunzime, pe toate sistemele',
    features: [
      'Tot din Complet',
      'Markeri de inflamație și imunitate',
      'Evaluare neurologică și a somnului',
      'Ecografie abdominală',
      'Consultație de follow-up la 3 luni',
    ],
    featured: false,
  },
]

// Util: tot ce se poate adăuga în coș, după id.
export const catalog = Object.fromEntries(
  [...products, ...packages.map((p) => ({ ...p, title: `Pachet ${p.name}` }))].map((p) => [p.id, p]),
)
