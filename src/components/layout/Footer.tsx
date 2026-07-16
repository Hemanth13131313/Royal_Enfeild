// ============================================================
// components/layout/Footer.tsx — Royal Enfield Showroom (S13)
// Gold background. Wordmark + tagline + socials.
// Quick Links | Address | Opening Hours columns.
// Bottom: © + trademark disclaimer (mandatory — rules.md §5).
// Animation A12: wordmark letters fade-up staggered on first view.
// ============================================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { site } from '../../config/site';
import { inViewport, staggerContainer } from '../../lib/motion';

const letterVariants = {
  hidden:  { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.04, ease: 'easeOut' as const },
  }),
};

const currentYear = new Date().getFullYear();

const quickLinks = [
  { label: 'Home',        href: '/' },
  { label: 'Bikes',       href: '/bikes' },
  { label: 'Accessories', href: '/accessories' },
  { label: 'Service',     href: '/service' },
  { label: 'Contact',     href: '/contact' },
];

// Split wordmark into chars for A12
const wordmark = site.dealerName.toUpperCase();
const wordmarkChars = wordmark.split('');

export function Footer() {
  return (
    <footer
      className="bg-[var(--gold)] text-[var(--cream-ink)]"
      role="contentinfo"
    >
      <div className="section-container py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ── Col 1: Wordmark + tagline + socials ─────── */}
          <div className="lg:col-span-1 flex flex-col gap-6">
            {/* A12 — wordmark letter reveal */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={inViewport}
              aria-label={site.dealerName}
            >
              <p
                className="font-display text-[var(--cream-ink)] leading-none"
                style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}
                aria-hidden="true"
              >
                {wordmarkChars.map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={letterVariants}
                    className="inline-block"
                    style={{ whiteSpace: char === ' ' ? 'pre' : 'normal' }}
                  >
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </p>
              <motion.p
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { delay: 0.4 } } }}
                className="overline text-[var(--cream-ink)] opacity-70 mt-1 text-[10px]"
              >
                {site.brandLine}
              </motion.p>
            </motion.div>

            {/* Tagline */}
            <p className="font-serif text-lg italic text-[var(--cream-ink)] opacity-80 leading-snug">
              &ldquo;{site.tagline}&rdquo;
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4">
              {[
                { href: site.socials.instagram, label: 'Instagram' },
                { href: site.socials.facebook,  label: 'Facebook' },
                { href: site.socials.youtube,   label: 'YouTube' },
              ].map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={`Heritage Motors on ${s.label}`}
                  className="w-9 h-9 rounded-full bg-[rgba(25,20,16,.15)] flex items-center justify-center hover:bg-[rgba(25,20,16,.3)] transition-colors text-xs font-body font-semibold"
                >
                  {s.label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ──────────────────────── */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest opacity-70 mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-[var(--cream-ink)] opacity-80 hover:opacity-100 hover:underline transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Address ──────────────────────────── */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest opacity-70 mb-5">
              Address
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex gap-3">
                <MapPin size={16} className="flex-shrink-0 mt-0.5 opacity-70" aria-hidden="true" />
                <address className="not-italic font-body text-sm opacity-80 leading-relaxed">
                  {site.address.map((line, i) => (
                    <span key={i} className="block">{line}</span>
                  ))}
                </address>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="flex-shrink-0 opacity-70" aria-hidden="true" />
                <a
                  href={`tel:${site.phone.replace(/\s/g, '')}`}
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="flex-shrink-0 opacity-70" aria-hidden="true" />
                <a
                  href={`mailto:${site.email}`}
                  className="font-body text-sm opacity-80 hover:opacity-100 transition-opacity"
                >
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          {/* ── Col 4: Opening Hours ────────────────────── */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest opacity-70 mb-5">
              Opening Hours
            </h3>
            <ul className="flex flex-col gap-3">
              {site.hours.map(h => (
                <li key={h.days} className="flex items-start gap-3">
                  <Clock size={16} className="flex-shrink-0 mt-0.5 opacity-70" aria-hidden="true" />
                  <div className="font-body text-sm opacity-80">
                    <span className="block font-semibold opacity-90">{h.days}</span>
                    <span>{h.time}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ──────────────────────────────────────── */}
      <div className="border-t border-[rgba(25,20,16,.2)]">
        <div className="section-container py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs opacity-60 text-center sm:text-left">
            © {currentYear} {site.dealerName}. All rights reserved.
          </p>
          {/* Mandatory trademark disclaimer — rules.md §5, prd.md S13 */}
          <p className="font-body text-xs opacity-50 text-center sm:text-right max-w-lg leading-relaxed">
            {site.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
