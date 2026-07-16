// pages/Home.tsx — Phase 5: Complete Home Page
import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../components/home/Hero';
import { Ticker } from '../components/layout/Ticker';
import { FeaturedShowcase } from '../components/home/FeaturedShowcase';
import { LineupCarousel } from '../components/home/LineupCarousel';
import { BrowseByType } from '../components/home/BrowseByType';
import { LifestyleBanner } from '../components/home/LifestyleBanner';
import { EngineeringDiagram } from '../components/home/EngineeringDiagram';
import { CtaCards } from '../components/home/CtaCards';
import { BrandStory } from '../components/home/BrandStory';
import { PopularBikes } from '../components/home/PopularBikes';
import { ProcessSteps } from '../components/home/ProcessSteps';

export default function Home() {
  usePageMeta(
    'Home',
    'Official Royal Enfield dealership. Explore the complete lineup — Classic 350, Himalayan 450, Interceptor 650 and more. Book your test ride today.'
  );

  return (
    <>
      <Hero />
      <Ticker />
      <FeaturedShowcase />
      <LineupCarousel />
      <BrowseByType />
      
      <LifestyleBanner />
      <EngineeringDiagram />
      <CtaCards />
      <BrandStory />
      <PopularBikes />
      <ProcessSteps />
    </>
  );
}
