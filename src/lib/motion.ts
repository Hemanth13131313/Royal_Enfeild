// ============================================================
// lib/motion.ts — Royal Enfield Showroom
// Shared framer-motion variants + reduced-motion helper.
// Rules: use ONLY these variants in components — no one-off
// easings or durations. All spec from design.md §6.
// ============================================================

import { useReducedMotion, type Variants } from 'framer-motion';

// ── Easing (design.md §6: "cubic-bezier(0.22, 1, 0.36, 1)") ─
const ease = 'easeOut' as const;

// ── A6 — Scroll reveal: fade + rise (all sections) ───────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease },
  },
};

// ── Fade only (no y shift) ────────────────────────────────────
export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.7, ease } },
};

// ── Stagger container (children stagger 70–90ms) ─────────────
export const staggerContainer: Variants = {
  hidden:  {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// ── A4 — Chip / spec pop-in (spring) ─────────────────────────
export const chipPop: Variants = {
  hidden:  { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 260,
      damping: 20,
    },
  },
};

// ── A3 — Bike image exit (AnimatePresence) ───────────────────
export const bikeExit: Variants = {
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.3, ease },
  },
};

// ── A3 — Bike image enter ─────────────────────────────────────
export const bikeEnter: Variants = {
  hidden:  { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease, delay: 0.1 },
  },
};

// ── A11 — Mobile menu overlay ─────────────────────────────────
export const mobileMenuOverlay: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25, ease } },
  exit:    { opacity: 0, transition: { duration: 0.2, ease } },
};

export const mobileMenuLink: Variants = {
  hidden:  { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease },
  },
};

// ── A12 — Footer wordmark letters ─────────────────────────────
export const letterReveal: Variants = {
  hidden:  { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease },
  },
};

// ── Modal entrance ─────────────────────────────────────────────
export const modalBackdrop: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit:    { opacity: 0, transition: { duration: 0.15 } },
};

export const modalCard: Variants = {
  hidden:  { opacity: 0, scale: 0.95, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.35, ease },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 10,
    transition: { duration: 0.2, ease },
  },
};

// ── Reduced-motion helper (design.md §6, rules.md §4) ─────────
/**
 * Returns animation variants that respect prefers-reduced-motion.
 * Pass to whileInView / animate / initial on motion components.
 *
 * When reduced motion is preferred, all animations are stripped to
 * a simple opacity fade (no translate, no scale).
 */
export function useMotionVariants(variants: Variants): Variants {
  const reducedMotion = useReducedMotion();
  if (!reducedMotion) return variants;

  // Override: only opacity transition, no spatial movement
  const reduced: Variants = {};
  for (const key of Object.keys(variants)) {
    const v = variants[key];
    if (typeof v === 'object' && v !== null && !Array.isArray(v)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const { x: _x, y: _y, scale: _scale, ...rest } = v as Record<string, any>;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      reduced[key] = rest as any;
    } else {
      reduced[key] = v;
    }
  }
  return reduced;
}

/**
 * Viewport config for whileInView — used across all scroll reveals.
 * once: true → fires once, amount: 0.2 → 20% visible.
 */
export const inViewport = { once: true, amount: 0.2 } as const;
