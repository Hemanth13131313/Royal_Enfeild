// pages/Home.tsx — Phase 4: S5 LineupCarousel + S6 BrowseByType
// Sections S7–S12 arrive in Phase 5.
import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../components/home/Hero';
import { Ticker } from '../components/layout/Ticker';
import { FeaturedShowcase } from '../components/home/FeaturedShowcase';
import { LineupCarousel } from '../components/home/LineupCarousel';
import { BrowseByType } from '../components/home/BrowseByType';

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

      {/* S4 — Featured Bike Showcase */}
      <FeaturedShowcase />

      {/* S5 — Lineup Carousel */}
      <LineupCarousel />

      {/* S6 — Browse by Type */}
      <BrowseByType />

      {/* S7–S12 placeholder — Phase 5 */}
      <section className="section-container py-24 text-center">
        <p className="overline text-[var(--gold)] mb-4">Sections S7 – S12</p>
        <p className="text-[var(--ink-muted)] font-body text-lg max-w-2xl mx-auto leading-relaxed">
          Lifestyle Banner · Engineering Diagram · CTA Cards · Brand Story · Popular Bikes · Process Steps
        </p>
        <p className="overline text-[var(--ink-muted)] text-xs mt-4">
          Arriving in Phase 5
        </p>
      </section>
    </>
  );
}
