# Local Business Site

A fast, mobile-first menu website for cafes and restaurants. Customers browse the menu, add items to a cart, and send the whole order to the shop on WhatsApp in one tap. No backend, no database.

Built with Next.js (App Router), TypeScript and Tailwind CSS. Arabic (RTL) by default.

## Features

- Menu with categories, item photos and "featured" badges
- Category tabs, with the cart kept while switching
- Cart bar that builds a ready-made WhatsApp message (items, quantities, total)
- Contact section with WhatsApp and optional Instagram link
- Everything about the business lives in one file: `config/business.ts`

## Run locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Set up a new client

1. Create a new repo from this one ("Use this template" on GitHub). Keep client repos private.
2. Edit `config/business.ts`: name, tagline, WhatsApp number, address, hours, colors and the menu.
   - WhatsApp format: country code + number, no `+`, no spaces (example: `201xxxxxxxxx`).
   - Every menu item needs a unique `id`.
3. Put the images in `public/images/` and point to them from the config.
4. Replace `public/images/hero.jpg` and `app/icon.png`.
5. Update the developer details in `app/page.tsx` if needed.
6. Deploy to Vercel.

## Tech notes

- No `src` folder. Folders: `app/`, `components/`, `config/`, `types/`, `lib/`.
- Cart state lives in `components/MenuWithCart.tsx` (plain `useState`).

## Credits

- Icons: react-icons (WhatsApp and Instagram icons by Font Awesome, CC BY 4.0)
- Fonts: Cairo and Lalezar (SIL Open Font License)
- Demo photos: Unsplash. Replace them with the client's own photos before delivery.

Built by AKS.
