// ============================================================
// data/bikes.ts — Royal Enfield Showroom
// 16 bike records transcribed from memory.md §6.
// Prices: indicative ex-showroom India, Jul 2026.
// Rules: never hardcode specs in components — import from here.
// ============================================================

import type { Bike } from '../types';

// indicative ex-showroom // ← comment required by rules.md §5
export const bikes: Bike[] = [
  // ── ROADSTER ────────────────────────────────────────────────
  {
    slug: 'hunter-350',
    name: 'Hunter 350',
    category: 'roadster',
    tagline: 'Urban. Agile. Unstoppable.',
    price: 137648, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, air-oil cooled',
      displacement: '349cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin-downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin shock absorbers',
      brakes: 'Disc front (300mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '800mm',
      weight: '181kg',
      fuelCapacity: '13L',
      mileage: '~36 kmpl',
    },
    colorways: [
      { name: 'Dapper Grey',  hex: '#7A7A7A' },
      { name: 'Rebel Black',  hex: '#1C1C1C' },
      { name: 'Rebel Red',    hex: '#8A1E1E' },
    ],
    images: {
      hero: '/images/bike-hunter-350.png',
      gallery: [],
    },
    popular: true,
  },

  // ── HERITAGE ────────────────────────────────────────────────
  {
    slug: 'bullet-350',
    name: 'Bullet 350',
    category: 'heritage',
    tagline: 'The original thump. Still rolling.',
    price: 165663, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, air-oil cooled',
      displacement: '349cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin-downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin shock absorbers',
      brakes: 'Disc front (300mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '790mm',
      weight: '191kg',
      fuelCapacity: '13L',
      mileage: '~37 kmpl',
    },
    colorways: [
      { name: 'Black Gold',       hex: '#1A1500' },
      { name: 'Military Black',   hex: '#1A1A1A' },
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
    tagline: 'Timeless design. The pure thump.',
    price: 187437, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, air-oil cooled',
      displacement: '349cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin-downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin shock absorbers',
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
      { name: 'Emerald',        hex: '#1B5E35' },
      { name: 'Gun Grey',       hex: '#5A5A65' },
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
    tagline: 'Born to cruise. Built to roam.',
    price: 199445, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, air-oil cooled',
      displacement: '349cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin-downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin shock absorbers',
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
      { name: 'Fireball Green',  hex: '#1B5E2A' },
      { name: 'Stellar Black',   hex: '#1A1A1A' },
    ],
    images: {
      hero: '/images/bike-meteor-350.png',
      gallery: [],
    },
  },

  {
    slug: 'goan-classic-350',
    name: 'Goan Classic 350',
    category: 'heritage',
    tagline: 'Sun, salt, and the open road.',
    price: 225000, // indicative ex-showroom
    engine: {
      type: 'J-Series single-cylinder, air-oil cooled',
      displacement: '349cc',
      power: '20.2 bhp @ 6100 rpm',
      torque: '27 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Twin-downtube spine frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin shock absorbers',
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
      { name: 'Rave Red',     hex: '#B3271E' },
      { name: 'Trip Teal',    hex: '#1B6B5A' },
      { name: 'Purple Haze',  hex: '#6B3A8A' },
    ],
    images: {
      hero: '/images/bike-goan-classic-350.png',
      gallery: [],
    },
  },

  // ── ADVENTURE ───────────────────────────────────────────────
  {
    slug: 'scram-440',
    name: 'Scram 440',
    category: 'adventure',
    tagline: 'Scramble every terrain. Endure every road.',
    price: 215000, // indicative ex-showroom
    engine: {
      type: 'Single-cylinder, air-oil cooled',
      displacement: '443cc',
      power: '25.4 bhp @ 6500 rpm',
      torque: '34 Nm @ 4000 rpm',
      gearbox: '5-speed',
    },
    chassis: {
      frame: 'Half-duplex split cradle frame',
      frontSuspension: '43mm USD telescopic forks',
      rearSuspension: 'Monoshock',
      brakes: 'Disc front (320mm) + Disc rear (240mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '830mm',
      weight: '185kg',
      fuelCapacity: '13L',
      mileage: '~29 kmpl',
    },
    colorways: [
      { name: 'Trail Blue',  hex: '#1A4A7A' },
      { name: 'Force Grey',  hex: '#5A5A65' },
    ],
    images: {
      hero: '/images/bike-scram-440.png',
      gallery: [],
    },
  },

  {
    slug: 'himalayan-450',
    name: 'Himalayan 450',
    category: 'adventure',
    tagline: 'Built by the Himalayas.',
    price: 308013, // indicative ex-showroom
    engine: {
      type: 'Sherpa — liquid-cooled single-cylinder',
      displacement: '452cc',
      power: '40 bhp @ 8000 rpm',
      torque: '40 Nm @ 5500 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Half-duplex split cradle frame',
      frontSuspension: 'Showa 43mm USD forks',
      rearSuspension: 'Monoshock with preload adjustment',
      brakes: 'Disc front (320mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS with switchable off-road mode',
    },
    dimensions: {
      seatHeight: '825mm',
      weight: '200kg',
      fuelCapacity: '17L',
      mileage: '~29 kmpl',
    },
    colorways: [
      { name: 'Hanle Black',  hex: '#1C1C1C' },
      { name: 'Kamet White',  hex: '#F0EDE6' },
      { name: 'Kaza Brown',   hex: '#6B4520' },
      { name: 'Poppy Blue',   hex: '#2A5A8A' },
    ],
    images: {
      hero: '/images/bike-himalayan-450.png',
      gallery: [],
    },
    featured: true,
    popular: true,
  },

  // ── ROADSTER ────────────────────────────────────────────────
  {
    slug: 'guerrilla-450',
    name: 'Guerrilla 450',
    category: 'roadster',
    tagline: 'Modern soul. Relentless spirit.',
    price: 251063, // indicative ex-showroom
    engine: {
      type: 'Sherpa — liquid-cooled single-cylinder',
      displacement: '452cc',
      power: '40 bhp @ 8000 rpm',
      torque: '40 Nm @ 5500 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-downtube frame',
      frontSuspension: '43mm USD telescopic forks',
      rearSuspension: 'Monoshock with preload adjustment',
      brakes: 'Disc front (320mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '800mm',
      weight: '185kg',
      fuelCapacity: '13L',
      mileage: '~29 kmpl',
    },
    colorways: [
      { name: 'Brava Blue',    hex: '#1A3A8A' },
      { name: 'Playa Black',   hex: '#1C1C1C' },
      { name: 'Smoke Silver',  hex: '#7A7A8A' },
    ],
    images: {
      hero: '/images/bike-guerrilla-450.png',
      gallery: [],
    },
  },

  // ── 650 TWINS ───────────────────────────────────────────────
  {
    slug: 'interceptor-650',
    name: 'Interceptor 650',
    category: 'roadster',
    tagline: 'Timeless style. Twin soul.',
    price: 315000, // indicative ex-showroom
    engine: {
      type: '648cc parallel twin, air-oil cooled',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-cradle steel frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin gas-charged shock absorbers',
      brakes: 'Disc front (320mm) + Disc rear (240mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '804mm',
      weight: '202kg',
      fuelCapacity: '13.7L',
      mileage: '~24 kmpl',
    },
    colorways: [
      { name: 'Black Ray',    hex: '#1C1C1C' },
      { name: 'Rocker Red',   hex: '#8A1E1E' },
      { name: 'Mark Three',   hex: '#3A3A3A' },
    ],
    images: {
      hero: '/images/bike-interceptor-650.png',
      gallery: [],
    },
    featured: true,
    popular: true,
  },

  {
    slug: 'classic-650',
    name: 'Classic 650',
    category: 'heritage',
    tagline: 'The heritage, elevated. Twin soul.',
    price: 337000, // indicative ex-showroom
    engine: {
      type: '648cc parallel twin, air-oil cooled',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-cradle steel frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin gas-charged shock absorbers',
      brakes: 'Disc front (320mm) + Disc rear (240mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '810mm',
      weight: '210kg',
      fuelCapacity: '13.7L',
      mileage: '~23 kmpl',
    },
    colorways: [
      { name: 'Black Chrome',  hex: '#1C1C1C' },
      { name: 'Classic Teal',  hex: '#1A5A5A' },
      { name: 'Vallam Red',    hex: '#8A1E1E' },
    ],
    images: {
      hero: '/images/bike-classic-650.png',
      gallery: [],
    },
  },

  {
    slug: 'continental-gt-650',
    name: 'Continental GT 650',
    category: 'pure-sport',
    tagline: 'Café racer. Pure sport. Bred to endure.',
    price: 352687, // indicative ex-showroom
    engine: {
      type: '648cc parallel twin, air-oil cooled',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-cradle steel frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin gas-charged shock absorbers',
      brakes: 'Disc front (320mm) + Disc rear (240mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '790mm',
      weight: '202kg',
      fuelCapacity: '12.5L',
      mileage: '~24 kmpl',
    },
    colorways: [
      { name: 'British Racing Green',  hex: '#1A4A1A' },
      { name: 'Rocker Red',            hex: '#8A1E1E' },
      { name: 'Slipstream Blue',       hex: '#1A3A6A' },
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
    tagline: 'Rugged. Capable. Ready for the wild.',
    price: 378000, // indicative ex-showroom
    engine: {
      type: '648cc parallel twin, air-oil cooled',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-cradle steel frame',
      frontSuspension: 'USD telescopic forks, 43mm',
      rearSuspension: 'Monoshock with preload adjustment',
      brakes: 'Disc front (320mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '840mm',
      weight: '220kg',
      fuelCapacity: '14.5L',
      mileage: '~23 kmpl',
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
  },

  {
    slug: 'shotgun-650',
    name: 'Shotgun 650',
    category: 'roadster',
    tagline: 'Old soul. New power. All attitude.',
    price: 400978, // indicative ex-showroom
    engine: {
      type: '648cc parallel twin, air-oil cooled',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-cradle steel frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin gas-charged shock absorbers',
      brakes: 'Disc front (320mm) + Disc rear (240mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '800mm',
      weight: '241kg',
      fuelCapacity: '13.7L',
      mileage: '~23 kmpl',
    },
    colorways: [
      { name: 'Green Drill',       hex: '#2A4A20' },
      { name: 'Sheet Metal Grey',  hex: '#5A5A65' },
      { name: 'Stencil White',     hex: '#F0EDE6' },
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
    tagline: 'The grand tourer. Cruise without limits.',
    price: 405964, // indicative ex-showroom
    engine: {
      type: '648cc parallel twin, air-oil cooled',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-cradle steel frame',
      frontSuspension: 'Telescopic forks, 43mm',
      rearSuspension: 'Monoshock with preload adjustment',
      brakes: 'Disc front (320mm) + Disc rear (300mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '740mm',
      weight: '241kg',
      fuelCapacity: '15.7L',
      mileage: '~23 kmpl',
    },
    colorways: [
      { name: 'Astral Black',       hex: '#1C1C1C' },
      { name: 'Celestial Blue',     hex: '#1A3A6A' },
      { name: 'Interstellar Green', hex: '#1A4A2A' },
    ],
    images: {
      hero: '/images/bike-super-meteor-650.png',
      gallery: [],
    },
  },

  // ── 2026 LAUNCH ─────────────────────────────────────────────
  {
    slug: 'bullet-650',
    name: 'Bullet 650',
    category: 'heritage',
    tagline: 'The legend, reborn with twin soul.',
    price: 340000, // indicative ex-showroom — TBA, expected price
    engine: {
      type: '648cc parallel twin, air-oil cooled',
      displacement: '648cc',
      power: '47 bhp @ 7250 rpm',
      torque: '52.3 Nm @ 5250 rpm',
      gearbox: '6-speed',
    },
    chassis: {
      frame: 'Double-cradle steel frame',
      frontSuspension: 'Telescopic forks, 41mm',
      rearSuspension: 'Twin gas-charged shock absorbers',
      brakes: 'Disc front (300mm) + Disc rear (270mm)',
      abs: 'Dual-channel ABS',
    },
    dimensions: {
      seatHeight: '790mm',
      weight: '213kg',
      fuelCapacity: '13.7L',
      mileage: '~23 kmpl',
    },
    colorways: [
      { name: 'TBA',  hex: '#1C1C1C' },
    ],
    images: {
      hero: '/images/bike-bullet-650.png',
      gallery: [],
    },
    isNew: true,
  },

  // ── ELECTRIC / COMING SOON ──────────────────────────────────
  {
    slug: 'flying-flea-c6',
    name: 'Flying Flea C6',
    category: 'electric',
    tagline: 'The future, the Royal Enfield way.',
    price: 0, // TBA
    engine: {
      type: 'Electric motor',
      displacement: '—',
      power: 'TBA',
      torque: 'TBA',
      gearbox: 'Single-speed',
    },
    chassis: {
      frame: 'TBA',
      frontSuspension: 'TBA',
      rearSuspension: 'TBA',
      brakes: 'Disc + Regenerative braking',
      abs: 'TBA',
    },
    dimensions: {
      seatHeight: 'TBA',
      weight: 'TBA',
      fuelCapacity: '—',
      mileage: '~150 km/charge',
    },
    colorways: [
      { name: 'TBA',  hex: '#1C1C1C' },
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
