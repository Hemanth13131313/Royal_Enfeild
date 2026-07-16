// ============================================================
// components/home/LineupCarousel.tsx — S5 The Lineup
// Embla horizontal snap carousel of all 14 bike cards on cream bg.
// ============================================================

// ============================================================
import useEmblaCarousel from 'embla-carousel-react';
import { WheelGesturesPlugin } from 'embla-carousel-wheel-gestures';
import { SectionTitle } from '../ui/SectionTitle';
import { BikeCard } from './BikeCard';
import { bikes } from '../../data/bikes';

export function LineupCarousel() {
  const [emblaRef] = useEmblaCarousel(
    {
      align: 'start',
      containScroll: 'trimSnaps',
      dragFree: true,
    },
    [WheelGesturesPlugin()]
  );

  return (
    <section className="bg-[var(--cream)] py-20 md:py-28 overflow-hidden" aria-labelledby="lineup-title">
      <div className="section-container">
        
        {/* Title */}
        <div className="mb-12 md:mb-16">
          <SectionTitle
            title="Royal Enfield Bikes"
            overline="The Lineup"
            theme="light"
            align="left"
            className="mb-0" // override default margin
          />
        </div>

        {/* Embla Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4 md:-ml-6 touch-pan-y cursor-grab active:cursor-grabbing">
            {bikes.map((bike) => (
              <div 
                key={bike.slug} 
                className="flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0 pl-4 md:pl-6"
              >
                <BikeCard bike={bike} theme="dark" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
