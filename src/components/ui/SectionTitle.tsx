// ============================================================
// components/ui/SectionTitle.tsx — Royal Enfield Showroom
// Reusable section heading: overline + display title + subline.
// Accepts `theme` prop for dark/light sections.
// ============================================================

import { motion } from 'framer-motion';
import { fadeUp, staggerContainer, inViewport } from '../../lib/motion';

interface SectionTitleProps {
  overline?: string;
  title: string;
  titleGold?: string;   // second line in gold gradient
  subtitle?: string;
  theme?: 'dark' | 'light';
  align?: 'left' | 'center';
  className?: string;
}

export function SectionTitle({
  overline,
  title,
  titleGold,
  subtitle,
  theme = 'dark',
  align = 'center',
  className = '',
}: SectionTitleProps) {
  const textColor = theme === 'dark' ? 'text-[var(--ink)]' : 'text-[var(--cream-ink)]';
  const mutedColor = theme === 'dark' ? 'text-[var(--ink-muted)]' : 'text-[var(--cream-muted)]';
  const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={inViewport}
      className={`flex flex-col ${alignClass} gap-3 ${className}`}
    >
      {overline && (
        <motion.p
          variants={fadeUp}
          className="overline text-[var(--gold)]"
        >
          {overline}
        </motion.p>
      )}
      <motion.h2
        variants={fadeUp}
        className={`font-display leading-none ${textColor}`}
        style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
      >
        {title}
        {titleGold && (
          <>
            {' '}
            <span className="text-gold-gradient">{titleGold}</span>
          </>
        )}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={fadeUp}
          className={`font-body text-base max-w-xl leading-relaxed ${mutedColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  );
}
