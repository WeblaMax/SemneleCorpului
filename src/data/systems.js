// Cele 10 sisteme ale corpului. (x, y) = poziția organului pe siluetă, în viewBox 0 0 200 400.
// `categories` = categoriile de produse (slug din catalog.json) afișate când alegi sistemul.
export const systems = [
  { id: 'cardio', label: 'Cardiovascular', icon: 'HeartPulse', categories: ['inima-circulatie'], organ: { x: 106, y: 128, r: 16 } },
  { id: 'neurologic', label: 'Neurologic', icon: 'Brain', categories: ['creier-somn', 'vedere'], organ: { x: 100, y: 40, r: 20 } },
  { id: 'respirator', label: 'Respirator', icon: 'Wind', categories: ['imunitate'], organ: { x: 100, y: 118, r: 28 } },
  { id: 'oase', label: 'Oase', icon: 'Bone', categories: ['oase-articulatii'], organ: { x: 100, y: 290, r: 22 } },
  { id: 'digestiv', label: 'Digestiv', icon: 'Apple', categories: ['digestie-ficat', 'metabolism-greutate'], organ: { x: 100, y: 190, r: 22 } },
  { id: 'hidratare', label: 'Hidratare', icon: 'Droplets', categories: ['vitamine-minerale', 'antioxidanti-frumusete'], organ: { x: 100, y: 232, r: 18 } },
  { id: 'imunitar', label: 'Imunitar', icon: 'ShieldCheck', categories: ['imunitate', 'copii'], organ: { x: 66, y: 112, r: 12 } },
  { id: 'somn', label: 'Somn', icon: 'Moon', categories: ['creier-somn'], organ: { x: 100, y: 66, r: 12 } },
  { id: 'hormonal', label: 'Hormonal', icon: 'Sparkles', categories: ['sanatatea-femeii', 'sanatatea-barbatului'], organ: { x: 100, y: 88, r: 12 } },
  { id: 'mental', label: 'Mental', icon: 'Smile', categories: ['energie-tonus', 'creier-somn'], organ: { x: 100, y: 34, r: 24 } },
]
