# Semnalul Corpului

Site React + Vite + Tailwind + Framer Motion + three.js (react-three-fiber).

## Comenzi
- `npm install` – instalează dependențele
- `npm run dev` – server de dezvoltare
- `npm run build` / `npm run preview` – build de producție

## Structură
- `src/data/products.js` – **produse, pachete și prețuri (MDL)**
- `src/data/systems.js` – cele 10 sisteme ale corpului (iconiță + poziția organului)
- `src/data/content.js` – meniu, pași, recenzii, FAQ, quiz, date de contact
- `src/context/CartContext.jsx` – coșul (state + localStorage)
- `src/components/` – câte o componentă pe secțiune
- `tailwind.config.js` – paleta de culori (`ocean.*`, `heal.*`), fonturi, umbre
- `public/logo.png`, `public/favicon.png` – logo (sursa: `assets/logo.png`)
- `public/models/heart.glb` – opțional: dacă îl adaugi, preloaderul îl folosește în locul inimii procedurale

## Modificarea produselor
Editează `products` în `src/data/products.js` (`title`, `description`, `price`, `icon`, `systems`).
Primele 6 servicii afișate sunt cele din `MAIN_SERVICE_IDS`; pachetele sunt în `packages`.
