// ============================================================
// types/index.ts — Royal Enfield Showroom
// All shared TypeScript types. (prd.md §11, architecture §2)
// ============================================================

// ── Bike ──────────────────────────────────────────────────────
export type BikeCategory =
  | 'heritage'
  | 'roadster'
  | 'cruiser'
  | 'adventure'
  | 'pure-sport'
  | 'electric';

export interface BikeEngine {
  type: string;           // e.g. "J-Series single"
  displacement: string;   // e.g. "349cc"
  power: string;          // e.g. "20.2 bhp"
  torque: string;         // e.g. "27 Nm"
  gearbox: string;        // e.g. "5-speed"
}

export interface BikeChassis {
  frame: string;
  frontSuspension: string;
  rearSuspension: string;
  brakes: string;
  abs: string;
}

export interface BikeDimensions {
  seatHeight: string;
  weight: string;
  fuelCapacity: string;
  mileage: string;        // indicative kmpl
}

export interface BikeColorway {
  name: string;
  hex: string;
}

export interface BikeImages {
  hero: string;           // e.g. "/images/bike-classic-350.webp"
  gallery: string[];
}

export interface Bike {
  slug: string;           // "classic-350"
  name: string;           // "Classic 350"
  category: BikeCategory;
  tagline: string;
  price: number;          // INR, ex-showroom, indicative; 0 = TBA
  engine: BikeEngine;
  chassis: BikeChassis;
  dimensions: BikeDimensions;
  colorways: BikeColorway[];
  images: BikeImages;
  featured?: boolean;     // S4 showcase
  popular?: boolean;      // S11 popular grid
  isNew?: boolean;        // "NEW" badge
  comingSoon?: boolean;   // e.g. Flying Flea
}

// ── Accessory ─────────────────────────────────────────────────
export interface Accessory {
  id: string;
  name: string;
  category: string;
  price: number;          // INR, indicative
  image: string;
  description: string;
}

// ── Cart ──────────────────────────────────────────────────────
export interface CartItem {
  id: string;             // accessory id or "enquiry-<bike-slug>"
  name: string;
  price: number;
  qty: number;
  image: string;
  type: 'accessory' | 'enquiry';
}

export type CartAction =
  | { type: 'ADD';    item: CartItem }
  | { type: 'REMOVE'; id: string }
  | { type: 'SET_QTY'; id: string; qty: number }
  | { type: 'CLEAR' };

// ── Hero slide ────────────────────────────────────────────────
export interface HeroSlide {
  id: number;
  line1: string;
  line2: string;          // rendered in gold gradient
  subCopy: string;
  chips: string[];        // 3 stat chips
  imageSrc: string;
  imageAlt: string;
}

// ── Featured showcase bike ─────────────────────────────────────
export interface ShowcaseBike {
  slug: string;
  headlineLine1: string;
  headlineLine2: string;
  copy: string;
  powerChip: string;      // e.g. "40 HP Peak Power"
  specs: { icon?: string; label: string; value: string }[];
}

// ── Process step ──────────────────────────────────────────────
export interface ProcessStep {
  number: string;         // "01"
  title: string;
  description: string;
}

// ── Stat block ────────────────────────────────────────────────
export interface StatBlock {
  value: string;
  label: string;
}

// ── Category tile ─────────────────────────────────────────────
export interface CategoryTile {
  category: BikeCategory;
  label: string;
  models: string[];       // bike slugs in this category
  icon: string;           // lucide icon name
  comingSoon?: boolean;
}
