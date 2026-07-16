# Royal Enfield Dealership Website — Project BULLET

A premium, cinematic single-brand dealership marketing website for **Royal Enfield** — built with Vite + React 18 + TypeScript + Tailwind CSS + Framer Motion.

## 🏍️ About

This is a front-end showroom experience modelled on premium motorcycle dealership websites. Dark, cinematic, animation-heavy — re-skinned for Royal Enfield's heritage identity: **brass gold, thump, brotherhood, mountains.**

**Codename:** BULLET  
**Brand:** Royal Enfield (Heritage Motors dealership)  
**Stack:** Vite 5 · React 18 · TypeScript (strict) · Tailwind CSS 3 · Framer Motion 11 · Embla Carousel · React Router 6 · Lucide React

---

## 📋 Build Status

| Phase | Description | Status |
|---|---|---|
| 0 | Scaffold & Design Tokens | ✅ Complete |
| 1 | Data Layer & App Shell (Navbar, Ticker, Footer) | ✅ Complete |
| 2 | Hero Carousel (S2) | ⬜ Pending |
| 3 | Featured Showcase (S4) | ⬜ Pending |
| 4 | Lineup Carousel + Browse by Type | ⬜ Pending |
| 5 | Home Sections S7–S12 | ⬜ Pending |
| 6 | Inner Pages | ⬜ Pending |
| 7 | Test-Ride Modal | ⬜ Pending |
| 8 | Polish, QA & Ship | ⬜ Pending |

---

## 🚀 Getting Started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build
```

---

## 🗂️ Project Structure

```
src/
├── config/site.ts          # Dealership identity (name, contact, hours)
├── data/
│   ├── bikes.ts            # 16 Royal Enfield bike records
│   ├── accessories.ts      # 10 GMA accessory records
│   ├── offers.ts           # Ticker offer items
│   └── content.ts          # Hero slides, showcase, stats, steps
├── types/index.ts          # Bike, Accessory, CartItem types
├── lib/
│   ├── format.ts           # formatINR (en-IN), calcEmi
│   └── motion.ts           # Shared framer-motion variants
├── context/                # CartContext, ModalContext
├── hooks/                  # useCart, useModal, usePageMeta
├── components/
│   ├── layout/             # Navbar, Footer, Ticker, MobileMenu, Layout
│   └── ui/                 # Button, SectionTitle
└── pages/                  # Home, Bikes, BikeDetail, Accessories, Service, Contact
```

---

## 🎨 Design System

- **Theme:** Neo-Heritage Garage — dark charcoal, brass gold accent, cream light sections
- **Fonts:** Bebas Neue (display) · Playfair Display (serif) · Inter (body)
- **Primary accent:** `#C89B3C` (brass gold) · **Background:** `#0D0B09` (deep charcoal)

---

## ⚙️ Configuration

All dealership identity lives in `src/config/site.ts` — name, phone, address, hours, socials. Never hardcode these in components.

---

## 📝 Legal

Royal Enfield and model names are trademarks of Eicher Motors Ltd. This is an independent dealership website. Prices are indicative ex-showroom.
