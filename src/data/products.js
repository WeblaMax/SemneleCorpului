// ============================================================
//  PRODUSE – datele vin din src/data/catalog.json (exportul furnizorului).
//  Editezi un preț sau un text direct în catalog.json (câmpurile `price`, `short`, ...).
//  Prețurile din catalog sunt PROVIZORII, în MDL.
//  Pozele sunt în public/produse/<categorie>/<cod-slug>.jpg
// ============================================================
import data from './catalog.json'

export const CURRENCY = 'MDL'
export const categories = data.categorii // [{ slug, nume }]
export const products = data.produse
export const categoryName = Object.fromEntries(categories.map((c) => [c.slug, c.nume]))

// Folosit de coș: caută un produs după id.
export const catalog = Object.fromEntries(products.map((p) => [p.id, p]))

export const imageUrl = (p) => `${import.meta.env.BASE_URL}${p.image}`

export const DISCLAIMER =
  'Supliment alimentar. Nu înlocuiește o alimentație variată și un stil de viață sănătos. Nu depășiți doza zilnică recomandată. A nu se lăsa la îndemâna copiilor. Consultați medicul în caz de sarcină, alăptare sau tratament.'
