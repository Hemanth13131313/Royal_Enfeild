// ============================================================
// components/home/FeaturedShowcase.tsx — Royal Enfield S4
//
// Layout (design.md §10):
//   Top: bike switcher pills
//   Desktop: [copy + CTAs] [glowing bike image] [feature cards rail]
//   Mobile: pills → image → copy → spec chips → feature cards
//
// A3 — Bike switch crossfade:
//   Exit: opacity 0, x: -30, 300ms
//   Enter: x: 30→0, opacity 0→1, 500ms, delay 80ms
// A4 — Spec chips: spring pop-in staggered
// A5 — Feature card hover lift (in ShowcaseFeatureCard)
// A6 — Section reveal on scroll
// A10 — Button arrow slide (in Button)
// ============================================================

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Gauge } from 'lucide-react';
import clsx from 'clsx';
// Removed unused SectionTitle import
import { Button } from '../ui/Button';
import { ShowcaseSpecChip } from './ShowcaseSpecChip';
import { ShowcaseFeatureCard } from './ShowcaseFeatureCard';
import { showcaseBikes, featureCards } from '../../data/content';
import { useModal } from '../../hooks/useModal';
import { inViewport, staggerContainer, fadeUp } from '../../lib/motion';

// ── Bike image map (Phase 3 placeholder PNGs) ─────────────────
const BIKE_IMAGES: Record<string, string> = {
  'himalayan-450':  '/images/bike-himalayan-450.png',
  'interceptor-650':'/images/bike-interceptor-650.png',
  'classic-350':    '/images/bike-classic-350.png',
};

// ── A3 variants ───────────────────────────────────────────────
const imageExit   = { opacity: 0, x: -30, transition: { duration: 0.28, ease: 'easeIn' as const } };
const imageEnter  = { opacity: 0, x: 32 };
const imageVisible = { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.08, ease: 'easeOut' as const } };

const copyVariants = {
  initial:  { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
  exit:    { opacity: 0, y: -10, transition: { duration: 0.22, ease: 'easeIn' as const } },
};

const chipVariant = (i: number) => ({
  initial:  { scale: 0.82, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 20, delay: 0.18 + i * 0.09 },
  },
});

// ── Power chip (top accent) ────────────────────────────────────
function PowerChip({ text }: { text: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-body font-semibold text-[var(--cream-ink)] bg-[var(--gold)] border border-[rgba(255,255,255,.12)]">
      <Gauge size={12} strokeWidth={2} aria-hidden="true" />
      {text}
    </span>
  );
}

// ── Glow ring behind bike ──────────────────────────────────────
function BikeGlow() {
  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 flex items-center justify-center pointer-events-none"
    >
      <div
        className="w-[70%] h-[70%] rounded-full"
        style={{
          background: 'radial-gradient(ellipse, rgba(200,155,60,.22) 0%, rgba(200,155,60,.06) 45%, transparent 72%)',
          filter: 'blur(24px)',
        }}
      />
    </div>
  );
}

// ── Main component ─────────────────────────────────────────────
export function FeaturedShowcase() {
  const [active, setActive] = useState(0);
  const { openModal } = useModal();
  const bike = showcaseBikes[active];

  return (
    <section
      className="bg-[var(--bg-deep)] py-20 md:py-28 overflow-hidden"
      aria-label="Featured bike showcase"
    >
      <div className="section-container flex flex-col gap-10 md:gap-14">

        {/* ── Section title ─────────────────────────────────── */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
          className="flex flex-col items-center gap-4"
        >
          <motion.p variants={fadeUp} className="overline text-[var(--gold)]">
            Our Signature Bikes
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="font-display text-[var(--ink)] text-center leading-none"
            style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
          >
            FEATURED{' '}
            <span className="text-gold-gradient">SHOWCASE</span>
          </motion.h2>
        </motion.div>

        {/* ── Switcher pills ────────────────────────────────── */}
        <div
          role="tablist"
          aria-label="Select featured bike"
          className="flex items-center justify-center gap-2 flex-wrap"
        >
          {showcaseBikes.map((b, i) => (
            <button
              key={b.slug}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={clsx(
                'px-5 py-2 rounded-full font-body font-semibold text-sm transition-all duration-250',
                'border focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]',
                i === active
                  ? 'bg-[var(--gold)] text-[var(--cream-ink)] border-[var(--gold)] shadow-[0_4px_20px_rgba(200,155,60,.35)]'
                  : 'bg-transparent text-[var(--ink-muted)] border-[var(--line-dark)] hover:border-[var(--gold)] hover:text-[var(--ink)]'
              )}
            >
              {b.slug === 'himalayan-450'   ? 'Himalayan 450'  :
               b.slug === 'interceptor-650' ? 'Interceptor 650':
               'Classic 350'}
            </button>
          ))}
        </div>

        {/* ── 3-column content grid ─────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr_1fr] gap-8 lg:gap-6 items-center">

          {/* ── LEFT — Copy + CTAs ──────────────────────────── */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`copy-${active}`}
              variants={copyVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col gap-5 order-2 lg:order-1"
            >
              {/* Overline + headline */}
              <div className="flex flex-col gap-2">
                <span className="overline text-[var(--gold)]">Royal Enfield</span>
                <h3
                  className="font-display text-[var(--ink)] leading-none"
                  style={{ fontSize: 'clamp(40px, 4vw, 56px)' }}
                >
                  {bike.headlineLine1}
                  <br />
                  <span className="text-gold-gradient">{bike.headlineLine2}</span>
                </h3>
              </div>

              {/* Power chip */}
              <PowerChip text={bike.powerChip} />

              {/* Copy */}
              <p className="font-body text-[var(--ink-muted)] text-base leading-relaxed max-w-sm">
                {bike.copy}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap gap-3 mt-1">
                <Link to="/bikes">
                  <Button variant="primary" size="md" showArrow>
                    Explore Bikes
                  </Button>
                </Link>
                <Link to="/accessories">
                  <Button variant="outline" size="md">
                    View Accessories
                  </Button>
                </Link>
              </div>

              {/* Quick test-ride link */}
              <button
                onClick={() => openModal(bike.slug)}
                className="text-left text-xs font-body text-[var(--gold)] underline underline-offset-4 hover:text-[var(--gold-bright)] transition-colors"
              >
                Book a test ride →
              </button>
            </motion.div>
          </AnimatePresence>

          {/* ── CENTER — Glowing bike image ──────────────────── */}
          <div className="relative flex items-center justify-center order-1 lg:order-2 min-h-[260px] md:min-h-[380px]">
            {/* Radial glow */}
            <BikeGlow />

            {/* Ground reflection */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-[10%] right-[10%] h-12"
              style={{
                background: 'radial-gradient(ellipse, rgba(200,155,60,.15) 0%, transparent 70%)',
                filter: 'blur(8px)',
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`img-${active}`}
                initial={imageEnter}
                animate={imageVisible}
                exit={imageExit}
                className="relative w-full flex items-center justify-center"
              >
                <img
                  src={BIKE_IMAGES[bike.slug]}
                  alt={`Royal Enfield ${bike.slug === 'himalayan-450' ? 'Himalayan 450 adventure' : bike.slug === 'interceptor-650' ? 'Interceptor 650 cafe racer' : 'Classic 350 heritage'} motorcycle side profile`}
                  className="w-full max-w-[480px] lg:max-w-full object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,.8)]"
                  style={{ maxHeight: '380px' }}
                  loading="lazy"
                  draggable="false"
                  decoding="async"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ── RIGHT — Feature cards ─────────────────────────── */}
          <motion.div
            className="flex flex-col gap-3 order-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={inViewport}
          >
            {featureCards.map(card => (
              <motion.div key={card.title} variants={fadeUp}>
                <ShowcaseFeatureCard
                  icon={card.icon}
                  title={card.title}
                  body={card.body}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* ── Spec chips row (A4 spring pop-in) ────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`specs-${active}`}
            className="flex flex-wrap gap-3 justify-center"
            initial="initial"
            animate="animate"
          >
            {bike.specs.map((spec, i) => (
              <motion.div key={spec.label} {...chipVariant(i)}>
                <ShowcaseSpecChip label={spec.label} value={spec.value} />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
