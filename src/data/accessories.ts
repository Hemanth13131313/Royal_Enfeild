// ============================================================
// data/accessories.ts — Royal Enfield Showroom
// Genuine Motorcycle Accessories & Gear
// Prices: Exact Official MRP (Approx in INR) as of 2024/2025
// ============================================================

import type { Accessory } from '../types';

export const accessories: Accessory[] = [
  {
    id: 'acc-himalayan-panniers',
    name: 'Aluminum Panniers (Pair)',
    category: 'Luggage',
    price: 32500, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=800&auto=format&fit=crop',
    description: 'Hard-shell aluminium panniers with 26L capacity each. Rugged and waterproof. Requires mounting rails.',
  },
  {
    id: 'acc-engine-guard',
    name: 'Compact Engine Guard - Black',
    category: 'Protection',
    price: 3450, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558980664-769d59546b3d?q=80&w=800&auto=format&fit=crop',
    description: 'Powder-coated steel crash bars. Protects the engine and frame in the event of a drop.',
  },
  {
    id: 'acc-touring-seat',
    name: 'Touring Rider Seat',
    category: 'Comfort',
    price: 4250, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    description: '3D net technology distributes weight evenly for supreme comfort on long journeys.',
  },
  {
    id: 'acc-flyscreen',
    name: 'Tall Flyscreen',
    category: 'Aero',
    price: 2250, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
    description: 'Injection-molded tinted polycarbonate. Deflects wind to reduce rider fatigue.',
  },
  {
    id: 'acc-bar-end-mirrors',
    name: 'Touring Bar End Mirrors',
    category: 'Styling',
    price: 6450, // exact official price approx
    image: 'https://images.unsplash.com/photo-1502744688674-c619d1586c9e?q=80&w=800&auto=format&fit=crop',
    description: 'Fully homologated billet aluminium bar end mirrors for enhanced rear visibility.',
  },
  {
    id: 'acc-re-helmet',
    name: 'Urban Open-Face Helmet',
    category: 'Riding Gear',
    price: 2950, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=800&auto=format&fit=crop',
    description: 'ISI, DOT & ECE certified. High-impact ABS shell with classic RE pin-stripe styling.',
  },
  {
    id: 'acc-riding-jacket',
    name: 'Streetwind Riding Jacket',
    category: 'Riding Gear',
    price: 5500, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558981852-426c6c22a060?q=80&w=800&auto=format&fit=crop',
    description: 'High abrasion resistance mesh jacket with CE Level 2 armor at shoulders and elbows.',
  },
  {
    id: 'acc-tank-bag',
    name: 'Magnetic Tank Bag',
    category: 'Luggage',
    price: 3750, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=800&auto=format&fit=crop',
    description: 'Quick-release magnetic tank bag with 8L capacity. Includes transparent map pocket.',
  },
  {
    id: 'acc-exhaust-slip-on',
    name: 'S&S Slip-On Exhaust (Off-Road)',
    category: 'Performance',
    price: 26500, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558980663-3685c1d673c4?q=80&w=800&auto=format&fit=crop',
    description: 'Reduces weight by 2.4kg and delivers a deep, throaty rumble. Closed course use only.',
  },
  {
    id: 'acc-alloy-wheels',
    name: 'Alloy Wheel Kit - 650 Twins',
    category: 'Performance',
    price: 16500, // exact official price approx
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=800&auto=format&fit=crop',
    description: '7-spoke cast aluminium wheels allow the use of tubeless tires. Exact fit for Interceptor/GT 650.',
  },
  // ── COLLECTIBLES ─────────────────────────────────────────────
  {
    id: 'coll-classic-350-scale-1-12',
    name: 'Classic 350 Scale Model (1:12)',
    category: 'Collectibles',
    price: 1400,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=800&auto=format&fit=crop',
    description: 'Highly detailed 1:12 scale die-cast model of the iconic Classic 350. Features moving wheels and working suspension.',
  },
  {
    id: 'coll-interceptor-650-scale-1-12',
    name: 'Interceptor 650 Scale Model (1:12)',
    category: 'Collectibles',
    price: 2100,
    image: 'https://images.unsplash.com/photo-1558981285-6f0c94958bb6?q=80&w=800&auto=format&fit=crop',
    description: 'Perfectly replicated 1:12 scale die-cast model of the Interceptor 650. A must-have for twin lovers.',
  },
  {
    id: 'coll-classic-350-scale-1-3',
    name: 'Classic 350 Premium Edition (1:3)',
    category: 'Collectibles',
    price: 88000,
    image: 'https://images.unsplash.com/photo-1558981359-219d6364c9c8?q=80&w=800&auto=format&fit=crop',
    description: 'Limited edition 1:3 scale hand-built collector model. Crafted from over 900 individual components with real working parts.',
  }
];

export function getAccessoryById(id: string): Accessory | undefined {
  return accessories.find(a => a.id === id);
}
