// ============================================================
// components/home/BrandStory.tsx — S10
// Light section ("About")
// ============================================================

import { motion } from 'framer-motion';
import { brandStats } from '../../data/content';
import { fadeUp, staggerContainer, inViewport } from '../../lib/motion';
import { SectionTitle } from '../ui/SectionTitle';

export function BrandStory() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28 overflow-hidden">
      <div className="section-container">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Imagery */}
          <motion.div 
            className="relative aspect-square md:aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={inViewport}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <img 
              src="/images/hero-1.png" 
              alt="Royal Enfield Dealership" 
              className="w-full h-full object-cover"
              loading="lazy"
            />
            {/* Inner vignette */}
            <div className="absolute inset-0 shadow-[inset_0_0_60px_rgba(25,20,16,0.3)] pointer-events-none" />
          </motion.div>

          {/* Right: Copy & Stats */}
          <motion.div 
            className="flex flex-col items-start order-1 lg:order-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={inViewport}
          >
            <SectionTitle
              title="Ridden by Passion."
              titleGold="Powered by Trust."
              theme="light"
              align="left"
              className="mb-10"
            />
            
            <motion.p variants={fadeUp} className="font-body text-[var(--cream-muted)] text-lg leading-relaxed mb-12">
              For over a century, Royal Enfield has built more than motorcycles—we've built a brotherhood. Our dealership brings that heritage to you with unparalleled service, genuine parts, and a community of riders who share the passion for the pure thump.
            </motion.p>

            {/* Stat Grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-10 w-full">
              {brandStats.map((stat) => (
                <motion.div 
                  key={stat.label} 
                  variants={fadeUp} 
                  className="flex flex-col gap-1 border-l-2 border-[var(--gold)] pl-4"
                >
                  <span className="font-display text-4xl text-[var(--cream-ink)]">{stat.value}</span>
                  <span className="font-body text-sm font-semibold uppercase tracking-wider text-[var(--cream-muted)]">{stat.label}</span>
                </motion.div>
              ))}
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
