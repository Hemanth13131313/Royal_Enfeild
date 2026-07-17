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

// lucide-react has no brand icons (Instagram/Facebook/YouTube) — hand-rolled
// minimal outline SVGs matching the 16px/1.5 stroke style of the lucide set.
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 3h-2a5 5 0 0 0-5 5v2H6v4h2v7h4v-7h3l1-4h-4V8a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="4" />
      <path d="M10 9.5v5l4.5-2.5z" fill="currentColor" stroke="none" />
    </svg>
  );
}

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
      className="bg-[var(--bg-panel)] text-[var(--ink)] border-t border-[var(--line-dark)]"
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
                className="font-display text-[var(--ink)] leading-none"
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
                className="overline text-[var(--gold)] mt-1 text-[10px]"
              >
                {site.brandLine}
              </motion.p>
            </motion.div>

            {/* Tagline */}
            <p className="font-serif text-lg italic text-[var(--ink-muted)] leading-snug">
              &ldquo;{site.tagline}&rdquo;
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { href: site.socials.instagram, label: 'Instagram', Icon: InstagramIcon },
                { href: site.socials.facebook,  label: 'Facebook',  Icon: FacebookIcon },
                { href: site.socials.youtube,   label: 'YouTube',   Icon: YoutubeIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={`Heritage Motors on ${label}`}
                  className="w-9 h-9 rounded-full border border-[var(--line-dark)] flex items-center justify-center text-[var(--ink-muted)] hover:text-[var(--gold)] hover:border-[var(--gold)] transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* ── Col 2: Quick Links ──────────────────────── */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest text-[var(--gold)] mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-3">
              {quickLinks.map(link => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-sm text-[var(--ink-muted)] hover:text-[var(--gold)] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Address ──────────────────────────── */}
          <div>
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest text-[var(--gold)] mb-5">
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
            <h3 className="font-body font-semibold text-sm uppercase tracking-widest text-[var(--gold)] mb-5">
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
      <div className="border-t border-[var(--line-dark)]">
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
