// ============================================================
// components/layout/Navbar.tsx — Royal Enfield Showroom (S1)
// Fixed. Transparent → frosted glass at scrollY > 40px (A9).
// Left: wordmark. Center: nav + Bikes dropdown. Right: cart + CTA.
// Mobile: hamburger → MobileMenu (A11).
// ============================================================

import { useState, useEffect, useRef, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { site } from '../../config/site';
import { bikes } from '../../data/bikes';
import { useCart } from '../../hooks/useCart';
import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';
import { MobileMenu } from './MobileMenu';
import type { BikeCategory } from '../../types';

// Bikes grouped by category for dropdown
const BIKE_CATEGORIES: { label: string; category: BikeCategory }[] = [
  { label: 'Heritage',   category: 'heritage' },
  { label: 'Roadster',   category: 'roadster' },
  { label: 'Adventure',  category: 'adventure' },
  { label: 'Cruiser',    category: 'cruiser' },
  { label: 'Pure Sport', category: 'pure-sport' },
  { label: 'Electric',   category: 'electric' },
];

const dropdownVariants = {
  hidden: { opacity: 0, y: -8, scale: 0.98 },
  visible: {
    opacity: 1, y: 0, scale: 1,
    transition: { duration: 0.2, ease: 'easeOut' as const },
  },
  exit: {
    opacity: 0, y: -6, scale: 0.97,
    transition: { duration: 0.15 },
  },
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { totalQty } = useCart();
  const { openModal } = useModal();
  const { pathname } = useLocation();

  // A9 — scroll detection: transparent → glass
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler, { passive: true });
    handler(); // run once on mount
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close dropdown on route change
  useEffect(() => {
    setDropdownOpen(false);
  }, [pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <>
      <header
        className={clsx(
          'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
          scrolled
            ? 'bg-[rgba(13,11,9,.72)] backdrop-blur-[14px] border-b border-[var(--line-dark)]'
            : 'bg-transparent border-b border-transparent'
        )}
        role="banner"
      >
        <div className="section-container flex items-center justify-between h-16 md:h-[70px]">

          {/* ── Wordmark logo ──────────────────────────────── */}
          <Link
            to="/"
            className="flex flex-col focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]"
            aria-label={`${site.dealerName} — Home`}
          >
            <span className="font-display text-[var(--ink)] text-2xl leading-none tracking-wide">
              {site.dealerName.toUpperCase()}
            </span>
            <span className="overline text-[var(--gold)] text-[9px] mt-0.5 hidden sm:block">
              {site.brandLine}
            </span>
          </Link>

          {/* ── Desktop nav ───────────────────────────────── */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">

            {/* Bikes dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setDropdownOpen(p => !p)}
                onKeyDown={e => e.key === 'Enter' && setDropdownOpen(p => !p)}
                aria-expanded={dropdownOpen}
                aria-haspopup="true"
                className="flex items-center gap-1 font-body font-medium text-sm text-[var(--ink)] hover:text-[var(--gold)] transition-colors focus-visible:outline-none"
              >
                Bikes
                <ChevronDown
                  size={14}
                  className={clsx('transition-transform duration-200', dropdownOpen && 'rotate-180')}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown panel */}
              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    variants={dropdownVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[640px] bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,.5)] p-6"
                    role="menu"
                  >
                    <div className="grid grid-cols-3 gap-6">
                      {BIKE_CATEGORIES.map(cat => {
                        const catBikes = bikes.filter(b => b.category === cat.category);
                        return (
                          <div key={cat.category}>
                            <p className="overline text-[var(--gold)] mb-2">{cat.label}</p>
                            <ul className="flex flex-col gap-1">
                              {catBikes.map(bike => (
                                <li key={bike.slug}>
                                  <Link
                                    to={`/bikes/${bike.slug}`}
                                    role="menuitem"
                                    className="flex items-center gap-1.5 text-[var(--ink-muted)] hover:text-[var(--ink)] text-sm font-body transition-colors py-0.5"
                                    onClick={() => setDropdownOpen(false)}
                                  >
                                    {bike.name}
                                    {bike.isNew && (
                                      <span className="text-[9px] font-semibold bg-[var(--red)] text-white px-1.5 py-0.5 rounded-full leading-none">NEW</span>
                                    )}
                                    {bike.comingSoon && (
                                      <span className="text-[9px] font-semibold border border-[var(--gold)] text-[var(--gold)] px-1.5 py-0.5 rounded-full leading-none">SOON</span>
                                    )}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>

                    {/* View all bikes link */}
                    <div className="mt-5 pt-4 border-t border-[var(--line-dark)]">
                      <Link
                        to="/bikes"
                        role="menuitem"
                        className="text-[var(--gold)] text-sm font-semibold font-body hover:underline"
                        onClick={() => setDropdownOpen(false)}
                      >
                        View all {bikes.filter(b => !b.comingSoon).length} models →
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Static links */}
            {site.nav.slice(1).map(link => (
              <Link
                key={link.href}
                to={link.href}
                className={clsx(
                  'font-body font-medium text-sm transition-colors',
                  pathname === link.href
                    ? 'text-[var(--gold)]'
                    : 'text-[var(--ink)] hover:text-[var(--gold)]'
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* ── Right side: cart + CTA ─────────────────────── */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* Cart icon */}
            <Link
              to="/accessories"
              aria-label={`Shopping cart — ${totalQty} item${totalQty !== 1 ? 's' : ''}`}
              className="relative flex items-center justify-center w-10 h-10 text-[var(--ink-muted)] hover:text-[var(--gold)] transition-colors"
            >
              <ShoppingCart size={20} />
              {totalQty > 0 && (
                <motion.span
                  key={totalQty}
                  initial={{ scale: 0.6, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-[var(--gold)] text-[var(--cream-ink)] text-[10px] font-bold rounded-full flex items-center justify-center px-1"
                >
                  {totalQty}
                </motion.span>
              )}
            </Link>

            {/* Book Test Ride — desktop */}
            <Button
              variant="primary"
              size="sm"
              showArrow
              className="hidden md:inline-flex"
              onClick={() => openModal()}
            >
              Book Test Ride
            </Button>

            {/* Hamburger — mobile only */}
            <button
              onClick={() => setMobileOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={mobileOpen}
              className="lg:hidden w-10 h-10 flex items-center justify-center text-[var(--ink)] hover:text-[var(--gold)] transition-colors"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu — rendered outside header for proper stacking */}
      <MobileMenu isOpen={mobileOpen} onClose={closeMobile} />
    </>
  );
}
