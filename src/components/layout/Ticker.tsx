// ============================================================
// components/layout/Ticker.tsx — Royal Enfield Showroom (S3)
// Seamless infinite marquee. Gold bg, Bebas text.
// Animation A2: CSS marquee keyframe, pause on hover.
// Reduced-motion: static wrap (no animation).
// Accessibility: aria-hidden duplicate track; single readable.
// ============================================================

import { useReducedMotion } from 'framer-motion';
import { offers } from '../../data/offers';

const SEPARATOR = '◆';

export function Ticker() {
  const prefersReduced = useReducedMotion();

  // Build a single "strip" of offer items
  const strip = offers.map((offer, i) => (
    <span
      key={i}
      className="inline-flex items-center gap-6 mx-6 font-display text-[20px] leading-none text-[var(--cream-ink)] uppercase tracking-wide whitespace-nowrap"
    >
      <span aria-hidden="true" className="text-[var(--cream-ink)] opacity-50 text-lg">
        {SEPARATOR}
      </span>
      {offer}
    </span>
  ));

  return (
    <section
      className="w-full bg-[var(--gold)] overflow-hidden py-4"
      aria-label="Current offers and promotions"
    >
      {prefersReduced ? (
        // Reduced-motion: static wrap
        <div className="section-container flex flex-wrap gap-4 justify-center" role="marquee" aria-live="off">
          {offers.map((offer, i) => (
            <span
              key={i}
              className="font-display text-[16px] text-[var(--cream-ink)] uppercase tracking-wide"
            >
              {offer}
            </span>
          ))}
        </div>
      ) : (
        // Full marquee (design.md §6 A2)
        <div className="relative" aria-live="off">
          {/* Screen-reader readable (single pass, visually hidden) */}
          <ul className="sr-only">
            {offers.map((offer, i) => (
              <li key={i}>{offer}</li>
            ))}
          </ul>

          {/* Animated marquee — duplicated track for seamless loop */}
          <div
            aria-hidden="true"
            className="marquee-track"
          >
            {/* First copy */}
            {strip}
            {/* Duplicate for seamless loop */}
            {strip}
          </div>
        </div>
      )}
    </section>
  );
}
