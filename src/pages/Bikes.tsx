// ============================================================
// pages/Bikes.tsx — Phase 6
// Listing page with filters, URL sync, and BikeCard grid.
// ============================================================

import { useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ArrowDownUp } from 'lucide-react';
import clsx from 'clsx';
import { usePageMeta } from '../hooks/usePageMeta';
import { bikes } from '../data/bikes';
import { categoryTiles } from '../data/content';
import { BikeCard } from '../components/home/BikeCard';
import { SectionTitle } from '../components/ui/SectionTitle';

type SortOption = 'price_asc' | 'price_desc' | 'name_asc';

export default function Bikes() {
  usePageMeta('Motorcycles', 'Browse the complete Royal Enfield lineup. Filter by category, compare prices, and find your perfect ride.');

  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('type') || 'all';
  const currentSort = (searchParams.get('sort') as SortOption) || 'price_asc';

  // Available categories (excluding 'Coming Soon' from active filters, or let them be empty)
  const categories = ['all', ...categoryTiles.map(c => c.category)];

  const handleCategoryChange = (cat: string) => {
    const params = new URLSearchParams(searchParams);
    if (cat === 'all') params.delete('type');
    else params.set('type', cat);
    setSearchParams(params, { replace: true });
  };

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set('sort', e.target.value);
    setSearchParams(params, { replace: true });
  };

  const filteredBikes = useMemo(() => {
    let result = [...bikes];
    
    // Filter
    if (currentCategory !== 'all') {
      result = result.filter(b => b.category.toLowerCase().replace(' ', '-') === currentCategory);
    }
    
    // Sort
    result.sort((a, b) => {
      // Push TBA (0 price) to the bottom
      if (a.price === 0 && b.price !== 0) return 1;
      if (b.price === 0 && a.price !== 0) return -1;
      
      switch (currentSort) {
        case 'price_asc': return a.price - b.price;
        case 'price_desc': return b.price - a.price;
        case 'name_asc': return a.name.localeCompare(b.name);
        default: return 0;
      }
    });
    
    return result;
  }, [currentCategory, currentSort]);

  return (
    <main className="min-h-screen bg-[var(--cream)] pt-32 pb-24">
      <div className="section-container">
        
        <SectionTitle
          title="The Lineup"
          overline="Royal Enfield"
          theme="light"
          align="left"
          className="mb-8 md:mb-12"
        />

        {/* Filter Bar */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 pb-6 border-b border-[var(--line-light)]">
          
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2">
            <SlidersHorizontal size={20} className="text-[var(--cream-muted)] mr-2" />
            {categories.map((cat) => {
              const isActive = currentCategory === cat;
              const tile = categoryTiles.find(c => c.category === cat);
              const label = tile ? tile.label : 'All Bikes';
              
              return (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={clsx(
                    'px-4 py-2 rounded-full font-body text-sm font-medium transition-all duration-200 border',
                    'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)]',
                    isActive
                      ? 'bg-[var(--bg-deep)] text-[var(--gold)] border-[var(--bg-deep)]'
                      : 'bg-white text-[var(--cream-ink)] border-[var(--line-light)] hover:border-[var(--gold)]'
                  )}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Sort Select */}
          <div className="flex items-center gap-2">
            <ArrowDownUp size={20} className="text-[var(--cream-muted)]" />
            <select
              value={currentSort}
              onChange={handleSortChange}
              className="bg-transparent font-body text-sm font-medium text-[var(--cream-ink)] cursor-pointer focus:outline-none focus:ring-2 focus:ring-[var(--gold)] rounded-md py-1 pr-8 border border-transparent hover:border-[var(--line-light)] transition-colors"
            >
              <option value="price_asc">Price: Low to High</option>
              <option value="price_desc">Price: High to Low</option>
              <option value="name_asc">Name: A to Z</option>
            </select>
          </div>

        </div>

        {/* Grid */}
        {filteredBikes.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredBikes.map((bike) => (
                <motion.div
                  key={bike.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <BikeCard bike={bike} theme="dark" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-20 text-center">
            <p className="font-body text-[var(--cream-muted)] text-lg">No models found in this category.</p>
            <button 
              onClick={() => handleCategoryChange('all')}
              className="mt-4 text-[var(--gold)] font-body font-semibold underline underline-offset-4"
            >
              Clear filters
            </button>
          </div>
        )}

      </div>
    </main>
  );
}
