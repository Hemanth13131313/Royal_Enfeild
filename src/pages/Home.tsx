// pages/Home.tsx — Phase 2: Hero (S2) + Ticker (S3)
// Sections S4–S12 arrive in Phases 3–5.
import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../components/home/Hero';
import { Ticker } from '../components/layout/Ticker';

export default function Home() {
  usePageMeta(
    'Home',
    'Official Royal Enfield dealership. Explore the complete lineup — Classic 350, Himalayan 450, Interceptor 650 and more. Book your test ride today.'
  );

  return (
    <>
      {/* S2 — Hero Carousel */}
      <Hero />

      {/* S3 — Offers Ticker */}
      <Ticker />

      {/* S4–S12 placeholder — Phases 3–5 */}
      <section className="section-container py-24 text-center">
        <p className="overline text-[var(--gold)] mb-4">Sections S4 – S12</p>
        <p className="text-[var(--ink-muted)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
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
