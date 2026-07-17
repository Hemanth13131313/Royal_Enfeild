// ============================================================
// components/home/PopularBikes.tsx — S11
// Gold section, 4 white price cards
// ============================================================

import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { BikeCard } from './BikeCard';
import { bikes } from '../../data/bikes';
import { fadeUp, staggerContainer, inViewport } from '../../lib/motion';

export function PopularBikes() {
  // S11 requires Classic 350, Himalayan 450, Interceptor 650, Hunter 350
  const popularSlugs = ['classic-350', 'himalayan-450', 'interceptor-650', 'hunter-350'];
  const popularBikes = popularSlugs.map(slug => bikes.find(b => b.slug === slug)).filter(Boolean) as typeof bikes;

  return (
    <section className="bg-[var(--bg-deep)] border-t-2 border-[var(--gold)] py-20 md:py-28 overflow-hidden">
      <div className="section-container">

        <SectionTitle
          title="Most Popular"
          titleGold="Models"
          overline="Rider Favorites"
          theme="dark"
        />

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
        >
          {popularBikes.map((bike) => (
            <motion.div key={bike.slug} variants={fadeUp}>
              <BikeCard bike={bike} theme="dark" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
