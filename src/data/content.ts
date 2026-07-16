// ============================================================
// data/content.ts — Royal Enfield Showroom
// Hero slides, showcase bikes, stats, steps, feature cards.
// All approved copy from prd.md §7.
// ============================================================

import type { HeroSlide, ShowcaseBike, ProcessStep, StatBlock } from '../types';

// ── S2 Hero Carousel Slides ───────────────────────────────────
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    line1: 'PURE',
    line2: 'MOTORCYCLING',
    subCopy:
      'Since 1901. The longest unbroken streak of motorcycling soul on the planet.',
    chips: ['125+ Years of Heritage', '10,000+ Bikes Delivered', '4.9★ Rider Rating'],
    imageSrc: '/images/hero-1.png',
    imageAlt: 'Heritage Motors Royal Enfield showroom exterior at dusk, warm tungsten lights reflecting on wet asphalt',
  },
  {
    id: 2,
    line1: 'BUILT IN INDIA',
    line2: 'BORN IN 1901',
    subCopy:
      'Every Royal Enfield begins with obsessive craftsmanship — honest metal, built to outlast the road.',
    chips: ['Chennai Craftsmanship', '125 Years Strong', 'Tested Khardung La to Kanyakumari'],
    imageSrc: '/images/hero-2.png',
    imageAlt: 'Royal Enfield motorcycles lined up inside a showroom with warm tungsten spotlights',
  },
  {
    id: 3,
    line1: 'JOIN THE',
    line2: 'BROTHERHOOD',
    subCopy:
      'Millions of riders worldwide trust the thump. One ride and you\'ll understand why.',
    chips: ['36M+ RE Owners Worldwide', 'Himalayan Odyssey Since 2003', 'One Ride Community'],
    imageSrc: '/images/hero-3.png',
    imageAlt: 'Group of Royal Enfield riders gathered outside a garage at golden hour',
  },
];

// ── S4 Featured Showcase Bikes ────────────────────────────────
// Three showcase configs — match slugs in bikes.ts
export const showcaseBikes: ShowcaseBike[] = [
  {
    slug: 'himalayan-450',
    headlineLine1: 'BUILT BY',
    headlineLine2: 'THE HIMALAYAS',
    copy:
      'Everything you need and nothing you don\'t. A go-anywhere machine shaped by the mountains themselves.',
    powerChip: '40 HP Peak Power',
    specs: [
      { label: 'Engine',       value: '452cc Sherpa' },
      { label: 'Suspension',   value: 'Showa USD Forks' },
      { label: 'Safety',       value: 'Dual-Channel ABS' },
      { label: 'Front Wheel',  value: '21" Spoked' },
    ],
  },
  {
    slug: 'interceptor-650',
    headlineLine1: 'TIMELESS STYLE',
    headlineLine2: 'TWIN SOUL',
    copy:
      'Iconic café racer lines meet a torque-rich parallel twin. Born to cruise, built to endure every mile.',
    powerChip: '47 HP Peak Power',
    specs: [
      { label: 'Engine',      value: '648cc Parallel Twin' },
      { label: 'Suspension',  value: 'Telescopic Forks' },
      { label: 'Brakes',      value: 'Brembo Calipers' },
      { label: 'Frame',       value: 'Double-Cradle' },
    ],
  },
  {
    slug: 'classic-350',
    headlineLine1: 'TIMELESS DESIGN',
    headlineLine2: 'THE PURE THUMP',
    copy:
      'The icon of Royal Enfield. The thump that started a million journeys still rolls on — refined, not reinvented.',
    powerChip: '20 HP Peak Power',
    specs: [
      { label: 'Engine',    value: '349cc J-Series' },
      { label: 'Frame',     value: 'Twin-Downtube' },
      { label: 'Safety',    value: 'Dual-Channel ABS' },
      { label: 'Wheels',    value: 'Spoked' },
    ],
  },
];

// ── S4 Right-rail Feature Cards (constant across bike switches) ─
export const featureCards = [
  {
    icon: 'Cog',
    title: 'J-Series & Twin Engines',
    body: 'Torque-rich, character-first powertrains built for the long haul.',
  },
  {
    icon: 'ShoppingCart',
    title: 'Genuine Accessories',
    body: 'Gear up with factory-built GMA kit — panniers, guards, riding gear and more.',
  },
  {
    icon: 'Mountain',
    title: 'Built to Endure',
    body: 'Tested from Chennai to Khardung La. Engineered for every road — and no road.',
  },
];

// ── S10 Brand Story Stats ─────────────────────────────────────
export const brandStats: StatBlock[] = [
  { value: '125',   label: 'Years of Heritage' },
  { value: '10K+',  label: 'Happy Riders' },
  { value: '60+',   label: 'Cities Served' },
  { value: '4.9★',  label: 'Google Rating' },
];

// ── S12 Process Steps ─────────────────────────────────────────
export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Choose Your Bike',
    description: 'Browse the full Royal Enfield lineup and find the ride that calls to you.',
  },
  {
    number: '02',
    title: 'Make It Yours',
    description: 'Configure colours, accessories, and GMA kit with our experts in-showroom.',
  },
  {
    number: '03',
    title: 'Doorstep Delivery',
    description: 'We deliver your Royal Enfield, fully inspected and ready to thump, right to you.',
  },
  {
    number: '04',
    title: 'After-Sales Support',
    description: 'Free first 3 services. Genuine parts. Certified technicians. We\'re here for every mile.',
  },
];

// ── S6 Browse by Category tiles ──────────────────────────────
export const categoryTiles = [
  {
    category: 'heritage' as const,
    label: 'Heritage',
    icon: 'Clock',
    description: 'Classic, Bullet, Goan Classic',
    models: ['classic-350', 'bullet-350', 'goan-classic-350', 'classic-650', 'bullet-650'],
  },
  {
    category: 'roadster' as const,
    label: 'Roadster',
    icon: 'Bike',
    description: 'Hunter, Guerrilla, Interceptor',
    models: ['hunter-350', 'guerrilla-450', 'interceptor-650', 'shotgun-650'],
  },
  {
    category: 'cruiser' as const,
    label: 'Cruiser',
    icon: 'Gauge',
    description: 'Meteor, Super Meteor',
    models: ['meteor-350', 'super-meteor-650'],
  },
  {
    category: 'adventure' as const,
    label: 'Adventure',
    icon: 'Mountain',
    description: 'Himalayan, Scram, Bear',
    models: ['himalayan-450', 'scram-440', 'bear-650'],
  },
  {
    category: 'pure-sport' as const,
    label: 'Pure Sport',
    icon: 'ArrowRight',
    description: 'Continental GT',
    models: ['continental-gt-650'],
  },
  {
    category: 'electric' as const,
    label: 'Electric',
    icon: 'Fuel',
    description: 'Flying Flea — Coming Soon',
    models: ['flying-flea-c6'],
    comingSoon: true,
  },
];
