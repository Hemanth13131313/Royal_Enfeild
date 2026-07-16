// ============================================================
// components/home/Hero.tsx — Royal Enfield Showroom (S2)
//
// A1  — Image Ken Burns scale 1.0 → 1.08 over 7s
// A1  — Slide crossfade 1.2s (AnimatePresence + opacity)
// A4  — Stat chips: spring pop-in, staggered 100ms
//     — Headline: 2 lines rise (y:40→0) staggered 150ms
// Navigation: arrows (desktop), dots (all), swipe, keyboard ← →
// Auto-advance: 6 000ms interval; pauses on hover or user input.
// Reduced-motion: no Ken Burns; instant crossfade.
// ============================================================

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { heroSlides } from '../../data/content';
import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';

// ── Duration constants ────────────────────────────────────────
// ── Duration constants ────────────────────────────────────────
const SLIDE_DURATION_MS = 6000;

// ── Framer variants ───────────────────────────────────────────
const imageSlide = {
  initial: (dir: number) => ({ opacity: 0, x: dir > 0 ? '100%' : '-100%' }),
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } },
  exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? '-100%' : '100%', transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] as const } }),
};

const lineVariants = (delay: number) => ({
  initial:  { y: 40, opacity: 0 },
  animate: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.65, delay, ease: 'easeOut' as const },
  },
});

const subVariant = {
  initial:  { opacity: 0, y: 16 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.55, ease: 'easeOut' as const },
  },
};

const chipVariant = (i: number) => ({
  initial:  { scale: 0.9, opacity: 0 },
  animate: {
    scale: 1,
    opacity: 1,
    transition: { type: 'spring' as const, stiffness: 260, damping: 22, delay: 0.55 + i * 0.12 },
  },
});

const ctaVariant = {
  initial:  { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.8, ease: 'easeOut' as const },
  },
};

// ── StatChip ──────────────────────────────────────────────────
function StatChip({ text }: { text: string }) {
  // Split "125+ Years of Heritage" → value "125+" + label rest
  const match = text.match(/^([0-9.,+★✦kKmM%]+(?:\+|M\+|K\+)?)\s+(.+)/);
  const value = match ? match[1] : null;
  const label = match ? match[2] : text;

  return (
    <div
      className="flex flex-col items-start gap-0.5 rounded-xl px-4 py-3 md:px-5 border border-[var(--line-dark)]"
      style={{
        background: 'rgba(23,19,16,.68)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
      }}
    >
      {value && (
        <span className="font-display text-[var(--gold)] text-2xl md:text-3xl leading-none">
          {value}
        </span>
      )}
      <span className="overline text-[var(--ink)] text-[10px] md:text-[11px] leading-tight opacity-80 whitespace-nowrap">
        {label.toUpperCase()}
      </span>
    </div>
  );
}

// ── Hero ──────────────────────────────────────────────────────
export function Hero() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const prefersReduced = useReducedMotion();
  const { openModal } = useModal();

  const total = heroSlides.length;

  // ── Navigation helpers ───────────────────────────────────────
  const goTo = useCallback((idx: number, newDirection: number) => {
    setDirection(newDirection);
    setActive(((idx % total) + total) % total);
  }, [total]);

  const goNext = useCallback(() => goTo(active + 1, 1), [active, goTo]);
  const goPrev = useCallback(() => goTo(active - 1, -1), [active, goTo]);

  // ── Auto-advance ─────────────────────────────────────────────
  const resetInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) {
      intervalRef.current = setInterval(() => {
        setDirection(1);
        setActive(i => ((i + 1) % total));
      }, SLIDE_DURATION_MS);
    }
  }, [paused, total]);

  useEffect(() => {
    resetInterval();
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, [resetInterval, paused]);

  // ── Keyboard ─────────────────────────────────────────────────
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft')  { goPrev(); setPaused(true); }
      if (e.key === 'ArrowRight') { goNext(); setPaused(true); }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [goNext, goPrev]);

  // ── Swipe ────────────────────────────────────────────────────
  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    setTouchStart(e.touches[0].clientX);
  }, []);

  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    if (touchStart === null) return;
    const delta = touchStart - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 50) {
      if (delta > 0) goNext(); else goPrev();
      setPaused(true);
    }
    setTouchStart(null);
  }, [touchStart, goNext, goPrev]);

  const slide = heroSlides[active];

  // ── Render ───────────────────────────────────────────────────
  return (
    <section
      className="relative h-screen min-h-[600px] overflow-hidden bg-[var(--bg-deep)] select-none"
      aria-label="Hero carousel"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* ── Slide images (crossfade stack) ─────────────────── */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={active}
          custom={direction}
          variants={imageSlide}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
          aria-hidden="true"
        >
          {/* Image with Ken Burns */}
          <div
            className={clsx(
              'w-full h-full',
              !prefersReduced && 'kenburns'
            )}
          >
            <img
              src={slide.imageSrc}
              alt={slide.imageAlt}
              className="w-full h-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          {/* Scrim — bottom-heavy, text legibility */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to bottom, rgba(13,11,9,.10) 0%, rgba(13,11,9,.18) 35%, rgba(13,11,9,.70) 72%, rgba(13,11,9,.92) 100%)',
            }}
          />
          {/* Subtle left vignette for text contrast */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(to right, rgba(13,11,9,.55) 0%, transparent 55%)',
            }}
          />
        </motion.div>
      </AnimatePresence>

      {/* ── Progress bar (top) ────────────────────────────── */}
      <div className="absolute top-0 left-0 right-0 z-20 h-[3px] bg-[rgba(200,155,60,.15)]">
        <motion.div
          key={`bar-${active}`}
          className="h-full bg-[var(--gold)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: SLIDE_DURATION_MS / 1000, ease: 'linear' as const }}
          style={{ transformOrigin: 'left' }}
        />
      </div>

      {/* ── Main content ──────────────────────────────────── */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-20 md:pb-24">
        <div className="section-container">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">

            {/* Left: Headline + subcopy + CTA */}
            <motion.div
              key={`content-${active}`}
              initial="initial"
              animate="animate"
              className="flex flex-col gap-4 max-w-2xl"
            >
              {/* Two-line headline */}
              <h1
                className="font-display leading-none"
                style={{ fontSize: 'clamp(52px, 9vw, 104px)' }}
              >
                <motion.span
                  className="block text-[var(--ink)]"
                  {...lineVariants(0.15)}
                >
                  {slide.line1}
                </motion.span>
                <motion.span
                  className="block text-gold-gradient"
                  {...lineVariants(0.30)}
                >
                  {slide.line2}
                </motion.span>
              </h1>

              {/* Subcopy */}
              <motion.p
                className="font-body text-base md:text-lg text-[var(--ink-muted)] max-w-md leading-relaxed"
                {...subVariant}
              >
                {slide.subCopy}
              </motion.p>

              {/* CTAs */}
              <motion.div className="flex items-center gap-3 mt-2" {...ctaVariant}>
                <Button
                  variant="primary"
                  size="md"
                  showArrow
                  onClick={() => openModal()}
                >
                  Book Test Ride
                </Button>
                <Link to="/bikes">
                  <Button variant="outline" size="md">
                    Explore Bikes
                  </Button>
                </Link>
              </motion.div>
            </motion.div>

            {/* Right: Stat chips (A4) */}
            <motion.div
              key={`chips-${active}`}
              initial="initial"
              animate="animate"
              className="flex flex-row lg:flex-col gap-3 lg:gap-2.5 flex-wrap"
            >
              {slide.chips.map((chip, i) => (
                <motion.div key={chip} {...chipVariant(i)}>
                  <StatChip text={chip} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ── Arrow controls ──────────────────────────────── */}
      <button
        onClick={() => { goPrev(); setPaused(true); }}
        aria-label="Previous slide"
        className={clsx(
          'absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20',
          'w-11 h-11 md:w-13 md:h-13 flex items-center justify-center rounded-full',
          'border border-[rgba(200,155,60,.25)] bg-[rgba(23,19,16,.45)] backdrop-blur-sm',
          'text-[var(--ink-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)]',
          'transition-all duration-200',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]'
        )}
      >
        <ChevronLeft size={20} />
      </button>

      <button
        onClick={() => { goNext(); setPaused(true); }}
        aria-label="Next slide"
        className={clsx(
          'absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20',
          'w-11 h-11 flex items-center justify-center rounded-full',
          'border border-[rgba(200,155,60,.25)] bg-[rgba(23,19,16,.45)] backdrop-blur-sm',
          'text-[var(--ink-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)]',
          'transition-all duration-200',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]'
        )}
      >
        <ChevronRight size={20} />
      </button>

      {/* ── Dot indicators ──────────────────────────────── */}
      <div
        className="absolute bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2.5"
        role="tablist"
        aria-label="Slide indicators"
      >
        {heroSlides.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={i === active}
            aria-label={`Slide ${i + 1}`}
            onClick={() => { goTo(i, i > active ? 1 : -1); setPaused(true); }}
            className={clsx(
              'rounded-full transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]',
              i === active
                ? 'w-7 h-2.5 bg-[var(--gold)]'
                : 'w-2.5 h-2.5 bg-[rgba(255,255,255,.30)] hover:bg-[rgba(255,255,255,.60)]'
            )}
          />
        ))}
      </div>

      {/* ── Slide counter (top-right) ───────────────────── */}
      <div className="absolute top-24 right-6 md:right-10 z-20 hidden md:flex items-center gap-1.5">
        <span className="font-display text-[var(--gold)] text-2xl leading-none">
          {String(active + 1).padStart(2, '0')}
        </span>
        <span className="text-[var(--ink-muted)] text-sm mt-1">/</span>
        <span className="font-body text-[var(--ink-muted)] text-sm mt-1">
          {String(total).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
