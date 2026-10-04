# Semnalul Corpului

Site React + Vite + Tailwind + Framer Motion + three.js (react-three-fiber).

## Comenzi
- `npm install` – instalează dependențele
- `npm run dev` – server de dezvoltare
- `npm run build` / `npm run preview` – build de producție

## Structură
- `src/data/catalog.json` – **cele 99 de produse: titlu, preț (MDL), descriere, categorie** (se editează aici)
- `src/data/products.js` – încarcă catalogul și exportă categoriile
- `public/produse/` – pozele produselor
- `src/data/systems.js` – cele 10 sisteme ale corpului (iconiță + poziția organului)
- `src/data/content.js` – meniu, pași, recenzii, FAQ, quiz, date de contact
- `src/context/CartContext.jsx` – coșul (state + localStorage)
- `src/components/` – câte o componentă pe secțiune
- `tailwind.config.js` – paleta de culori (`ocean.*`, `heal.*`), fonturi, umbre
- `public/logo.png`, `public/favicon.png` – logo (sursa: `assets/logo.png`)
- `public/models/heart.glb` – opțional: adaugă-l și pune `HAS_HEART_MODEL = true` în `src/components/Preloader.jsx`

## Modificarea produselor
Editează `src/data/catalog.json`: fiecare produs are `title`, `price` (MDL, provizoriu), `short`, `description`, `category`, `image`.
Ce categorii apar la fiecare sistem al corpului se stabilește în `src/data/systems.js` (câmpul `categories`).
