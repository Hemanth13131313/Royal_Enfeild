// ============================================================
// components/home/LifestyleBanner.tsx — S7
// design.md §7: full-bleed image, A7 parallax (skip on touch/reduced-motion),
// headline + caption.
// ============================================================

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { fadeUp, staggerContainer, inViewport } from '../../lib/motion';

export function LifestyleBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  // A7 Parallax (±8%)
  const y = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);
  const isTouch = typeof window !== 'undefined' && 'ontouchstart' in window;
  const disableParallax = prefersReduced || isTouch;

  return (
    <section 
      ref={ref}
      className="relative h-[70vh] min-h-[500px] w-full overflow-hidden flex items-center justify-center bg-[var(--bg-deep)]"
      aria-label="Lifestyle banner"
    >
      {/* Background Image with Parallax */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        style={{ y: disableParallax ? 0 : y, scale: disableParallax ? 1 : 1.16 }}
      >
        <img
          src="/images/banner-mountains.png"
          alt="Royal Enfield Himalayan 450 in the mountains"
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </motion.div>

      {/* Scrim for text legibility */}
      <div 
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(13,11,9,0.9) 0%, rgba(13,11,9,0.3) 50%, rgba(13,11,9,0.8) 100%)' }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 section-container flex flex-col items-center text-center mt-20"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={inViewport}
      >
        <motion.h2 
          variants={fadeUp}
          className="font-display text-[var(--ink)] uppercase leading-none mb-4 drop-shadow-2xl"
          style={{ fontSize: 'clamp(48px, 8vw, 96px)' }}
        >
          Built for the<br/>
          <span className="text-gold-gradient">Mountains</span>
        </motion.h2>
        
        <motion.p 
          variants={fadeUp}
          className="font-body text-base md:text-xl text-[var(--ink)] max-w-2xl font-medium tracking-wide drop-shadow-md"
        >
          Every Royal Enfield is tested where the road ends. <span className="text-[var(--gold)]">#AllRoadsNoRoads</span>
        </motion.p>
      </motion.div>
    </section>
  );
}
