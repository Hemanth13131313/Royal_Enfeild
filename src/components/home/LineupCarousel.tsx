// ============================================================
// components/home/LineupCarousel.tsx — S5 The Lineup
// Embla horizontal snap carousel of all 14 bike cards on cream bg.
// ============================================================

import { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import clsx from 'clsx';
import { SectionTitle } from '../ui/SectionTitle';
import { BikeCard } from './BikeCard';
import { bikes } from '../../data/bikes';

export function LineupCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true,
  });

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="bg-[var(--cream)] py-20 md:py-28 overflow-hidden" aria-labelledby="lineup-title">
      <div className="section-container">
        
        {/* Title & Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex-1">
            <SectionTitle
              title="Royal Enfield Bikes"
              overline="The Lineup"
              theme="light"
              align="left"
              className="mb-0" // override default margin
            />
          </div>
          
          {/* Arrow Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollPrev}
              disabled={prevBtnDisabled}
              aria-label="Previous bikes"
              className={clsx(
                'w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-200',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]',
                prevBtnDisabled
                  ? 'border-[var(--line-light)] text-[var(--cream-muted)] opacity-50 cursor-not-allowed'
                  : 'border-[var(--line-light)] text-[var(--cream-ink)] hover:border-[var(--gold)] hover:text-[var(--gold)]'
              )}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={scrollNext}
              disabled={nextBtnDisabled}
              aria-label="Next bikes"
              className={clsx(
                'w-11 h-11 flex items-center justify-center rounded-full border transition-all duration-200',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]',
                nextBtnDisabled
                  ? 'border-[var(--line-light)] text-[var(--cream-muted)] opacity-50 cursor-not-allowed'
                  : 'border-[var(--line-light)] text-[var(--cream-ink)] hover:border-[var(--gold)] hover:text-[var(--gold)]'
              )}
            >
              <ChevronRight size={20} />
            </button>
          </div>
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
