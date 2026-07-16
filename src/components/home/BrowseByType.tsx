// ============================================================
// components/home/BrowseByType.tsx — S6
// Grid of 6 category tiles linking to /bikes?type=xxx
// ============================================================

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Bike, Gauge, Mountain, ArrowRight, Fuel } from 'lucide-react';
import clsx from 'clsx';
import { categoryTiles } from '../../data/content';
import { SectionTitle } from '../ui/SectionTitle';
import { fadeUp, staggerContainer, inViewport } from '../../lib/motion';

const ICONS: Record<string, React.ElementType> = {
  Clock,
  Bike,
  Gauge,
  Mountain,
  ArrowRight,
  Fuel,
};

export function BrowseByType() {
  return (
    <section className="bg-[var(--cream)] pb-20 md:pb-28 overflow-hidden" aria-labelledby="browse-title">
      <div className="section-container">
        
        <SectionTitle
          title="Browse by Type"
          overline="Find Your Match"
          theme="light"
        />

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
        >
          {categoryTiles.map((tile) => {
            const Icon = ICONS[tile.icon] ?? Bike;
            
            return (
              <motion.div key={tile.category} variants={fadeUp}>
                <Link
                  to={tile.comingSoon ? '#' : `/bikes?type=${tile.category}`}
                  className={clsx(
                    'group relative flex flex-col p-6 rounded-2xl bg-white border border-[rgba(0,0,0,.06)]',
                    'transition-all duration-300',
                    tile.comingSoon
                      ? 'cursor-default opacity-90'
                      : 'hover:-translate-y-1.5 hover:border-[var(--gold)] hover:shadow-[0_12px_40px_rgba(200,155,60,.15)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]'
                  )}
                  onClick={(e) => {
                    if (tile.comingSoon) e.preventDefault();
                  }}
                >
                  <div className="flex items-start justify-between mb-8">
                    <div className="w-12 h-12 rounded-full bg-[var(--cream)] flex items-center justify-center text-[var(--cream-ink)] transition-colors duration-300 group-hover:bg-[var(--bg-deep)] group-hover:text-[var(--gold)]">
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    {tile.comingSoon && (
                      <span className="px-2.5 py-1 rounded bg-[var(--bg-deep)] text-[var(--gold)] font-body font-bold text-[10px] tracking-wider uppercase shadow-sm">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  
                  <div className="flex flex-col gap-1">
                    <h3 className="font-display text-2xl text-[var(--cream-ink)] group-hover:text-[var(--gold)] transition-colors">
                      {tile.label}
                    </h3>
                    <p className="font-body text-sm text-[var(--cream-muted)]">
                      {tile.description}
                    </p>
                  </div>
                  
                  <div className="mt-6 flex items-center gap-2 text-[var(--gold)] font-body font-semibold text-sm opacity-0 -translate-x-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                    <span>View {tile.models.length} {tile.models.length === 1 ? 'Model' : 'Models'}</span>
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
