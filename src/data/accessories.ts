// ============================================================
// data/accessories.ts — Royal Enfield Showroom
// 10 GMA (Genuine Motorcycle Accessories) records.
// Prices indicative; owner to verify before launch.
// ============================================================

import type { Accessory } from '../types';

export const accessories: Accessory[] = [
  {
    id: 'acc-himalayan-panniers',
    name: 'Himalayan Expedition Panniers',
    category: 'Luggage',
    price: 14500, // indicative
    image: '/images/acc-panniers.webp',
    description: 'Hard-shell aluminium panniers. 28L capacity each. Fits Himalayan 450 and Scram 440.',
  },
  {
    id: 'acc-engine-guard',
    name: 'Engine Guard — Crash Bar',
    category: 'Protection',
    price: 4200, // indicative
    image: '/images/acc-engine-guard.webp',
    description: 'Powder-coated steel crash bars. Protect engine and fairings on all terrain.',
  },
  {
    id: 'acc-touring-seat',
    name: 'Touring Comfort Seat',
    category: 'Comfort',
    price: 6800, // indicative
    image: '/images/acc-touring-seat.webp',
    description: 'Extended foam, dual-density cushioning. Reduces fatigue on long journeys.',
  },
  {
    id: 'acc-flyscreen',
    name: 'Flyscreen Windshield',
    category: 'Aero',
    price: 3500, // indicative
    image: '/images/acc-flyscreen.webp',
    description: 'Polycarbonate flyscreen. Reduces wind fatigue on long highway runs.',
  },
  {
    id: 'acc-bar-end-mirrors',
    name: 'Bar-End Mirrors',
    category: 'Styling',
    price: 1800, // indicative
    image: '/images/acc-mirrors.webp',
    description: 'CNC aluminium bar-end mirrors. Anti-vibration. Universal fitment.',
  },
  {
    id: 'acc-re-helmet',
    name: 'RE Open-Face Helmet',
    category: 'Riding Gear',
    price: 3200, // indicative
    image: '/images/acc-helmet.webp',
    description: 'DOT & ISI certified. Ventilated ABS shell. Classic café racer styling.',
  },
  {
    id: 'acc-riding-jacket',
    name: 'RE Riding Jacket — Khaki',
    category: 'Riding Gear',
    price: 7500, // indicative
    image: '/images/acc-jacket.webp',
    description: 'CE-rated armour at shoulders, elbows and back. Water-resistant cotton canvas.',
  },
  {
    id: 'acc-tank-bag',
    name: 'Magnetic Tank Bag',
    category: 'Luggage',
    price: 2800, // indicative
    image: '/images/acc-tank-bag.webp',
    description: '12L capacity. Magnetic base. Waterproof rain cover included.',
  },
  {
    id: 'acc-exhaust-slip-on',
    name: 'Performance Slip-On Exhaust',
    category: 'Performance',
    price: 18500, // indicative
    image: '/images/acc-exhaust.webp',
    description: 'Stainless steel slip-on muffler. Deeper, throatier note. Fits 650 Twins.',
  },
  {
    id: 'acc-alloy-wheels',
    name: 'Alloy Wheel Kit',
    category: 'Performance',
    price: 24500, // indicative
    image: '/images/acc-alloy-wheels.webp',
    description: 'Cast aluminium alloy wheels. Tubeless-ready. Reduces unsprung weight.',
  },
];

export function getAccessoryById(id: string): Accessory | undefined {
  return accessories.find(a => a.id === id);
}
