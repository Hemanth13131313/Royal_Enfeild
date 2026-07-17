// ============================================================
// components/home/CtaCards.tsx — S9
// Two photo cards with scrim, copy, buttons
// ============================================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '../ui/Button';
import { fadeUp, staggerContainer, inViewport } from '../../lib/motion';

export function CtaCards() {
  return (
    <section className="bg-[var(--bg-deep)] pb-20 md:pb-28">
      <div className="section-container">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
        >
          
          <motion.div variants={fadeUp} className="group relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[16/7] lg:aspect-[16/10]">
            <img 
              src="/images/cta-buy.png" 
              alt="Rider browsing Royal Enfield motorcycles at the showroom" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-[rgba(13,11,9,0.4)] to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start">
              <h3 className="font-display text-4xl text-[var(--ink)] mb-3 leading-none drop-shadow-lg">
                Are You Looking<br />For a Bike?
              </h3>
              <p className="font-body text-[var(--ink-muted)] mb-8 max-w-sm drop-shadow">
                Explore the full RE range and find the one that fits your ride.
              </p>
              <Link to="/bikes">
                <Button variant="primary" showArrow>Find Your Bike</Button>
              </Link>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="group relative rounded-2xl overflow-hidden aspect-[16/10] md:aspect-[16/7] lg:aspect-[16/10]">
            <img 
              src="/images/cta-sell.png" 
              alt="Customer handing over keys — trade in your motorcycle" 
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-[rgba(13,11,9,0.4)] to-transparent" />
            <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end items-start">
              <h3 className="font-display text-4xl text-[var(--ink)] mb-3 leading-none drop-shadow-lg">
                Want to Sell<br />Your Bike?
              </h3>
              <p className="font-body text-[var(--ink-muted)] mb-8 max-w-sm drop-shadow">
                Get an instant valuation and trade in towards your next Royal Enfield.
              </p>
              <Link to="/contact">
                <Button variant="outline">Get Valuation</Button>
              </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
