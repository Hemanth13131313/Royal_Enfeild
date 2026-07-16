// ============================================================
// data/bikes.ts — Royal Enfield Showroom
// Current Official Indian Lineup (As of 2024/2025)
// Prices: Exact ex-showroom India starting prices (approx in INR)
// ============================================================

import type { Bike } from '../types';

// indicative ex-showroom // ← comment required by rules.md §5
export const bikes: Bike[] = [
  // ── 350cc PLATFORM ──────────────────────────────────────────
  {
    slug: 'hunter-350',
    name: 'Hunter 350',
    category: 'roadster',
    tagline: 'A Shot of Motorcycling.',
    price: 149900, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, 4-stroke, air-oil cooled',
      displacement: '349.34cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm, 130mm travel',
      rearSuspension: 'Twin tube Emulsion shock absorbers with 6-step adjustable preload',
      brakes: 'Disc front (300mm) + Disc/Drum rear (270mm/153mm)',
      abs: 'Single/Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '790mm',
      weight: '177kg',
      fuelCapacity: '13L',
      mileage: '~36.2 kmpl',
    },
    colorways: [
      { name: 'Dapper Grey',  hex: '#7A7A7A' },
      { name: 'Dapper White', hex: '#F2F2F2' },
      { name: 'Rebel Black',  hex: '#1C1C1C' },
      { name: 'Rebel Red',    hex: '#8A1E1E' },
    ],
    images: {
      hero: '/images/bike-hunter-350.png',
      gallery: [],
    },
    popular: true,
  },
  {
    slug: 'bullet-350',
    name: 'Bullet 350',
    category: 'heritage',
    tagline: 'Bullet Meri Jaan.',
    price: 173562, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, 4-stroke, air-oil cooled',
      displacement: '349.34cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm, 130mm travel',
      rearSuspension: 'Twin tube Emulsion shock absorbers with 6-step adjustable preload',
      brakes: 'Disc front (300mm) + Disc rear (270mm)',
      abs: 'Single/Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '805mm',
      weight: '195kg',
      fuelCapacity: '13L',
      mileage: '~37 kmpl',
    },
    colorways: [
      { name: 'Black Gold',       hex: '#1A1500' },
      { name: 'Standard Black',   hex: '#1A1A1A' },
      { name: 'Standard Maroon',  hex: '#4A1212' },
    ],
    images: {
      hero: '/images/bike-bullet-350.png',
      gallery: [],
    },
  },
  {
    slug: 'classic-350',
    name: 'Classic 350',
    category: 'heritage',
    tagline: 'Be Reborn.',
    price: 193080, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, 4-stroke, air-oil cooled',
      displacement: '349.34cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm, 130mm travel',
      rearSuspension: 'Twin tube Emulsion shock absorbers with 6-step adjustable preload',
      brakes: 'Disc front (300mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '805mm',
      weight: '195kg',
      fuelCapacity: '13L',
      mileage: '~35 kmpl',
    },
    colorways: [
      { name: 'Madras Red',     hex: '#B3271E' },
      { name: 'Jodhpur Blue',   hex: '#214668' },
      { name: 'Gunmetal Grey',  hex: '#5A5A65' },
      { name: 'Stealth Black',  hex: '#111111' },
      { name: 'Commando Sand',  hex: '#C4A87A' },
    ],
    images: {
      hero: '/images/bike-classic-350.png',
      gallery: [],
    },
    featured: true,
    popular: true,
  },
  {
    slug: 'meteor-350',
    name: 'Meteor 350',
    category: 'cruiser',
    tagline: 'Cruise Easy.',
    price: 205900, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, 4-stroke, air-oil cooled',
      displacement: '349.34cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm, 130mm travel',
      rearSuspension: 'Twin tube Emulsion shock absorbers with 6-step adjustable preload',
      brakes: 'Disc front (300mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '765mm',
      weight: '191kg',
      fuelCapacity: '15L',
      mileage: '~35 kmpl',
    },
    colorways: [
      { name: 'Fireball Red',    hex: '#9E2020' },
      { name: 'Fireball Yellow', hex: '#E7B822' },
      { name: 'Stellar Black',   hex: '#1A1A1A' },
      { name: 'Supernova Blue',  hex: '#17365D' },
    ],
    images: {
      hero: '/images/bike-meteor-350.png',
      gallery: [],
    },
  },

  // ── 450cc PLATFORM ──────────────────────────────────────────
  {
    slug: 'guerrilla-450',
    name: 'Guerrilla 450',
    category: 'roadster',
    tagline: 'Return of the Roadster.',
    price: 239000, // indicative ex-showroom
    engine: {
      type: 'Sherpa 450, liquid-cooled, single-cylinder, DOHC',
      displacement: '452cc',
      power: '40.02 bhp @ 8000 rpm',
      torque: '40 Nm @ 5500 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Steel tubular, twin spar tubular frame',
      frontSuspension: '43mm Telescopic forks, 140mm travel',
      rearSuspension: 'Linkage type mono-shock, 150mm travel',
      brakes: 'Disc front (310mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '780mm',
      weight: '185kg',
      fuelCapacity: '11L',
      mileage: '~29 kmpl',
    },
    colorways: [
      { name: 'Brava Blue',    hex: '#1A3A8A' },
      { name: 'Playa Black',   hex: '#1C1C1C' },
      { name: 'Smoke Silver',  hex: '#7A7A8A' },
      { name: 'Yellow Ribbon', hex: '#FFCC00' },
    ],
    images: {
      hero: '/images/bike-guerrilla-450.png',
      gallery: [],
    },
  },
  {
    slug: 'himalayan-450',
    name: 'Himalayan 450',
    category: 'adventure',
    tagline: 'Built for all roads. Built for no roads.',
    price: 285000, // indicative ex-showroom
    engine: {
      type: 'Sherpa 450, liquid-cooled, single-cylinder, DOHC',
      displacement: '452cc',
      power: '40.02 bhp @ 8000 rpm',
      torque: '40 Nm @ 5500 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Steel tubular, twin spar tubular frame',
      frontSuspension: 'Showa 43mm USD forks, 200mm travel',
      rearSuspension: 'Linkage type mono-shock, 200mm travel',
      brakes: 'Disc front (320mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS (Switchable)',
    },
    dimensions: {
      seatHeight: '825mm',
      weight: '196kg',
      fuelCapacity: '17L',
      mileage: '~29 kmpl',
    },
    colorways: [
      { name: 'Hanle Black',  hex: '#1C1C1C' },
      { name: 'Kamet White',  hex: '#F0EDE6' },
      { name: 'Kaza Brown',   hex: '#6B4520' },
    ],
    images: {
      hero: '/images/bike-himalayan-450.png',
      gallery: [],
    },
    featured: true,
    popular: true,
  },

  // ── 650cc PLATFORM ──────────────────────────────────────────
  {
    slug: 'interceptor-650',
    name: 'Interceptor 650',
    category: 'roadster',
    tagline: 'Easy Got Back.',
    price: 303000, // indicative ex-showroom
    engine: {
      type: 'Inline twin-cylinder, 4-stroke, SOHC',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5150 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Steel tubular, double cradle frame',
      frontSuspension: 'Telescopic forks, 41mm, 110mm travel',
      rearSuspension: 'Twin coil-over shocks, 88mm travel',
      brakes: 'Disc front (320mm) + Disc rear (240mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '804mm',
      weight: '218kg',
      fuelCapacity: '13.7L',
      mileage: '~25 kmpl',
    },
    colorways: [
      { name: 'Black Ray',    hex: '#1C1C1C' },
      { name: 'Canyon Red',   hex: '#8A1E1E' },
      { name: 'Mark Two',     hex: '#CF112D' },
      { name: 'Sunset Strip', hex: '#1C1A1A' },
    ],
    images: {
      hero: '/images/bike-interceptor-650.png',
      gallery: [],
    },
    featured: true,
    popular: true,
  },
  {
    slug: 'continental-gt-650',
    name: 'Continental GT 650',
    category: 'pure-sport',
    tagline: 'Welcome Back, Rocker.',
    price: 319000, // indicative ex-showroom
    engine: {
      type: 'Inline twin-cylinder, 4-stroke, SOHC',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5150 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Steel tubular, double cradle frame',
      frontSuspension: 'Telescopic forks, 41mm, 110mm travel',
      rearSuspension: 'Twin coil-over shocks, 88mm travel',
      brakes: 'Disc front (320mm) + Disc rear (240mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '793mm',
      weight: '211kg',
      fuelCapacity: '12.5L',
      mileage: '~25 kmpl',
    },
    colorways: [
      { name: 'British Racing Green', hex: '#1A4A1A' },
      { name: 'Rocker Red',           hex: '#8A1E1E' },
      { name: 'Slipstream Blue',      hex: '#1A3A6A' },
      { name: 'Mr Clean',             hex: '#DDDDDD' },
    ],
    images: {
      hero: '/images/bike-continental-gt-650.png',
      gallery: [],
    },
  },
  {
    slug: 'bear-650',
    name: 'Bear 650',
    category: 'adventure',
    tagline: 'Instinct Unleashed.',
    price: 339000, // indicative ex-showroom
    engine: {
      type: 'Inline twin-cylinder, 4-stroke, SOHC',
      displacement: '648cc',
      power: '47 bhp @ 7150 rpm',
      torque: '56.5 Nm @ 5150 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Steel tubular, double cradle frame',
      frontSuspension: 'Showa 43mm USD forks, 130mm travel',
      rearSuspension: 'Showa Twin shocks, 115mm travel',
      brakes: 'Disc front (320mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS (Switchable)',
    },
    dimensions: {
      seatHeight: '830mm',
      weight: '216kg',
      fuelCapacity: '13.7L',
      mileage: '~22 kmpl',
    },
    colorways: [
      { name: 'Boardwalk White',  hex: '#F0EDE6' },
      { name: 'Golden Shadow',    hex: '#C4A840' },
      { name: 'Petrol Green',     hex: '#1A4A3A' },
      { name: 'Wild Honey',       hex: '#8A6520' },
    ],
    images: {
      hero: '/images/bike-bear-650.png',
      gallery: [],
    },
    isNew: true,
  },
  {
    slug: 'shotgun-650',
    name: 'Shotgun 650',
    category: 'roadster',
    tagline: 'By Custom. For Custom.',
    price: 359000, // indicative ex-showroom
    engine: {
      type: 'Inline twin-cylinder, 4-stroke, SOHC',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5150 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Steel tubular, spine frame',
      frontSuspension: 'Showa 43mm USD forks, 120mm travel',
      rearSuspension: 'Twin shocks, 90mm travel',
      brakes: 'Disc front (320mm) + Disc rear (300mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '795mm',
      weight: '240kg',
      fuelCapacity: '13.8L',
      mileage: '~22 kmpl',
    },
    colorways: [
      { name: 'Green Drill',       hex: '#2A4A20' },
      { name: 'Sheet Metal Grey',  hex: '#5A5A65' },
      { name: 'Stencil White',     hex: '#F0EDE6' },
      { name: 'Plasma Blue',       hex: '#103070' },
    ],
    images: {
      hero: '/images/bike-shotgun-650.png',
      gallery: [],
    },
  },
  {
    slug: 'super-meteor-650',
    name: 'Super Meteor 650',
    category: 'cruiser',
    tagline: 'Cruising at its Purest.',
    price: 363900, // indicative ex-showroom
    engine: {
      type: 'Inline twin-cylinder, 4-stroke, SOHC',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5150 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Steel tubular, spine frame',
      frontSuspension: 'Showa 43mm USD forks, 120mm travel',
      rearSuspension: 'Twin shocks, 101mm travel',
      brakes: 'Disc front (320mm) + Disc rear (300mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '740mm',
      weight: '241kg',
      fuelCapacity: '15.7L',
      mileage: '~22 kmpl',
    },
    colorways: [
      { name: 'Astral Black',       hex: '#1C1C1C' },
      { name: 'Celestial Blue',     hex: '#1A3A6A' },
      { name: 'Interstellar Green', hex: '#1A4A2A' },
      { name: 'Interstellar Grey',  hex: '#5A5A5C' },
    ],
    images: {
      hero: '/images/bike-super-meteor-650.png',
      gallery: [],
    },
  },

  // ── ELECTRIC / COMING SOON ──────────────────────────────────
  {
    slug: 'flying-flea-c6',
    name: 'Flying Flea C6',
    category: 'electric',
    tagline: 'City agility. Electrified.',
    price: 0, // TBA
    engine: {
      type: 'Central Electric Motor, Liquid Cooled',
      displacement: '—',
      power: 'TBA',
      torque: 'TBA',
      gearbox: 'Single-speed',
    },
    chassis: {
      frame: 'Forged aluminium frame',
      frontSuspension: 'Girder fork system',
      rearSuspension: 'Mono-shock',
      brakes: 'Disc front + Disc rear with regen',
      abs: 'TBA',
    },
    dimensions: {
      seatHeight: 'TBA',
      weight: 'TBA',
      fuelCapacity: '—',
      mileage: 'TBA',
    },
    colorways: [
      { name: 'Concept Silver',  hex: '#D0D0D0' },
    ],
    images: {
      hero: '/images/bike-flying-flea-c6.png',
      gallery: [],
    },
    comingSoon: true,
  },
];

// ── Convenience lookups ───────────────────────────────────────
export function getBikeBySlug(slug: string): Bike | undefined {
  return bikes.find(b => b.slug === slug);
}

export function getBikesByCategory(category: string): Bike[] {
  return bikes.filter(b => b.category === category);
}

export function getFeaturedBikes(): Bike[] {
  return bikes.filter(b => b.featured);
}

export function getPopularBikes(): Bike[] {
  return bikes.filter(b => b.popular);
}

export function getRelatedBikes(slug: string, count = 3): Bike[] {
  const bike = getBikeBySlug(slug);
  if (!bike) return bikes.slice(0, count);
  return bikes
    .filter(b => b.slug !== slug && b.category === bike.category)
    .slice(0, count);
}
