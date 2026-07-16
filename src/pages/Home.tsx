// pages/Home.tsx — Phase 1 shell
// Contains: Ticker (S3). Hero (S2) in Phase 2. Sections S4–S12 in Phase 3–5.
import { usePageMeta } from '../hooks/usePageMeta';
import { Ticker } from '../components/layout/Ticker';

export default function Home() {
  usePageMeta(
    'Home',
    'Official Royal Enfield dealership. Explore the complete lineup — Classic 350, Himalayan 450, Interceptor 650 and more. Book your test ride today.'
  );

  return (
    <>
      {/* S2 — Hero Carousel: Phase 2 */}
      <section
        aria-label="Hero"
        className="relative h-screen flex items-end pb-20 bg-[var(--bg-deep)]"
      >
        {/* Placeholder gradient until Phase 2 hero images are added */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 40%, rgba(200,155,60,.12) 0%, transparent 65%), linear-gradient(180deg, #0D0B09 0%, #171310 100%)',
          }}
          aria-hidden="true"
        />
        <div className="relative section-container text-center w-full flex flex-col items-center gap-4">
          <p className="overline text-[var(--gold)]">Phase 0 & 1 — Shell Complete</p>
          <h1
            className="font-display text-[var(--ink)] leading-none"
            style={{ fontSize: 'clamp(52px, 10vw, 96px)' }}
          >
            PURE{' '}
            <span className="text-gold-gradient">MOTORCYCLING</span>
          </h1>
          <p className="font-body text-[var(--ink-muted)] text-lg max-w-lg">
            Since 1901. The longest unbroken streak of motorcycling soul on the planet.
          </p>
          <p className="overline text-[var(--ink-muted)] text-xs mt-4">
            Hero carousel (S2) arriving in Phase 2 ↓
          </p>
        </div>
      </section>

      {/* S3 — Offers Ticker */}
      <Ticker />

      {/* S4–S12 placeholder */}
      <section className="section-container py-24 text-center">
        <p className="overline text-[var(--gold)] mb-4">Sections S4 – S12</p>
        <p className="text-[var(--ink-muted)] font-body text-lg">
          Featured Showcase · Lineup Carousel · Browse by Type · Lifestyle Banner ·
          Engineering Diagram · CTA Cards · Brand Story · Popular Bikes · Process Steps
        </p>
        <p className="overline text-[var(--ink-muted)] text-xs mt-4">
          Arriving in Phases 3 – 5
        </p>
      </section>
    </>
  );
}
