// ============================================================
// components/layout/MobileMenu.tsx — Royal Enfield Showroom
// Full-screen dark overlay mobile nav — Animation A11.
// Design: links rise staggered 70ms; close reverses.
// ============================================================

import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { X } from 'lucide-react';
import type { Transition } from 'framer-motion';
import { motion, AnimatePresence } from 'framer-motion';
import { site } from '../../config/site';
import { bikes } from '../../data/bikes';
import { Button } from '../ui/Button';
import { useModal } from '../../hooks/useModal';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

// A11 variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.25 } },
  exit:   { opacity: 0, transition: { duration: 0.2 } },
};

const easeCurve = 'easeOut' as Transition['ease'];

const linkVariants = {
  hidden:  { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, delay: i * 0.07, ease: easeCurve },
  }),
  exit: { opacity: 0, y: -10, transition: { duration: 0.15 } },
};

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const { pathname } = useLocation();
  const { openModal } = useModal();

  // Close on route change
  useEffect(() => {
    onClose();
  }, [pathname, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close on Esc
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  // Group bikes by category for the menu
  const categories = [
    { label: 'Heritage',   slugs: bikes.filter(b => b.category === 'heritage') },
    { label: 'Roadster',   slugs: bikes.filter(b => b.category === 'roadster') },
    { label: 'Adventure',  slugs: bikes.filter(b => b.category === 'adventure') },
    { label: 'Cruiser',    slugs: bikes.filter(b => b.category === 'cruiser') },
    { label: 'Pure Sport', slugs: bikes.filter(b => b.category === 'pure-sport') },
    { label: 'Electric',   slugs: bikes.filter(b => b.category === 'electric') },
  ];

  const topLinks = [
    { label: 'All Bikes',    href: '/bikes' },
    { label: 'Accessories',  href: '/accessories' },
    { label: 'Service',      href: '/service' },
    { label: 'Contact',      href: '/contact' },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 z-50 bg-[var(--bg-deep)] flex flex-col overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Header row */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-[var(--line-dark)]">
            <Link to="/" onClick={onClose} className="flex flex-col">
              <span className="font-display text-[var(--ink)] text-2xl leading-none">
                {site.dealerName.toUpperCase()}
              </span>
              <span className="overline text-[var(--gold)] text-[10px] mt-0.5">
                {site.brandLine}
              </span>
            </Link>
            <button
              onClick={onClose}
              aria-label="Close menu"
              className="w-11 h-11 flex items-center justify-center rounded-full border border-[var(--line-dark)] text-[var(--ink-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex-1 px-6 py-8 flex flex-col gap-2">
            {topLinks.map((link, i) => (
              <motion.div
                key={link.href}
                custom={i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  to={link.href}
                  onClick={onClose}
                  className="block font-display text-4xl leading-tight text-[var(--ink)] hover:text-[var(--gold)] transition-colors py-2"
                >
                  {link.label.toUpperCase()}
                </Link>
              </motion.div>
            ))}

            {/* Divider */}
            <div className="my-4 border-t border-[var(--line-dark)]" />

            {/* Bike categories */}
            <p className="overline text-[var(--gold)] mb-3">Browse by Category</p>
            {categories.map((cat, i) => (
              <motion.div
                key={cat.label}
                custom={topLinks.length + i}
                variants={linkVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <Link
                  to={`/bikes?type=${cat.slugs[0]?.category ?? ''}`}
                  onClick={onClose}
                  className="flex items-center justify-between py-2 text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors group"
                >
                  <span className="font-body font-medium text-base">{cat.label}</span>
                  <span className="text-xs text-[var(--gold)] opacity-0 group-hover:opacity-100 transition-opacity">
                    {cat.slugs.length} model{cat.slugs.length !== 1 ? 's' : ''}
                  </span>
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Footer area */}
          <div className="px-6 py-6 border-t border-[var(--line-dark)] flex flex-col gap-4">
            <Button
              variant="primary"
              size="lg"
              showArrow
              className="w-full justify-center"
              onClick={() => { onClose(); openModal(); }}
            >
              Book Test Ride
            </Button>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-2">
              {[
                { href: site.socials.instagram, label: 'Instagram' },
                { href: site.socials.facebook,  label: 'Facebook' },
                { href: site.socials.youtube,   label: 'YouTube' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="text-[var(--ink-muted)] hover:text-[var(--gold)] transition-colors text-sm font-body font-medium"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
