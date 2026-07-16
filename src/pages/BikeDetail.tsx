// ============================================================
// pages/BikeDetail.tsx — Phase 6
// gallery, ColorwayPicker, price, CTAs, SpecTable, EmiCalculator, related-bikes
// ============================================================

import { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { bikes } from '../data/bikes';
import { formatINR } from '../lib/format';
import { Button } from '../components/ui/Button';
import { EmiCalculator } from '../components/ui/EmiCalculator';
import { BikeCard } from '../components/home/BikeCard';
import { useModal } from '../hooks/useModal';

export default function BikeDetail() {
  const { slug } = useParams<{ slug: string }>();
  const bike = bikes.find(b => b.slug === slug);
  const { openModal } = useModal();

  usePageMeta(
    bike ? `${bike.name} - Royal Enfield` : 'Bike Not Found',
    bike ? `Discover the Royal Enfield ${bike.name}. ${bike.tagline}` : 'This model could not be found.'
  );

  const [activeColorIdx, setActiveColorIdx] = useState(0);

  if (!bike) {
    return <Navigate to="/404" replace />;
  }

  const activeColor = bike.colorways?.[activeColorIdx];

  // Related bikes (same category, excluding this one, max 4)
  const relatedBikes = bikes
    .filter(b => b.category === bike.category && b.slug !== bike.slug)
    .slice(0, 4);

  return (
    <main className="min-h-screen bg-[var(--bg-deep)] pt-32 pb-24">
      <div className="section-container">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 font-body text-xs text-[var(--ink-muted)] mb-8">
          <Link to="/" className="hover:text-[var(--gold)] transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/bikes" className="hover:text-[var(--gold)] transition-colors">Motorcycles</Link>
          <ChevronRight size={12} />
          <span className="text-[var(--ink)]">{bike.name}</span>
        </div>

        {/* Hero Product Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Gallery / Colorway */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden flex items-center justify-center bg-[var(--bg-panel)] border border-[var(--line-dark)]">
            {/* Background Glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[80%] h-[80%] rounded-full opacity-20" style={{ background: 'var(--gradient-glow)', filter: 'blur(50px)' }} />
            </div>
            
            <AnimatePresence mode="wait">
              <motion.img
                key={activeColorIdx}
                src={bike.images.hero}
                alt={`${bike.name} in ${activeColor?.name || 'Standard'}`}
                className="relative z-10 w-[85%] h-auto object-contain drop-shadow-2xl cursor-grab active:cursor-grabbing"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                loading="eager"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = offset.x;
                  if (swipe < -50 && bike.colorways && bike.colorways.length > 0) {
                    setActiveColorIdx((prev) => (prev + 1) % bike.colorways!.length);
                  } else if (swipe > 50 && bike.colorways && bike.colorways.length > 0) {
                    setActiveColorIdx((prev) => (prev - 1 + bike.colorways!.length) % bike.colorways!.length);
                  }
                }}
              />
            </AnimatePresence>
            
            {/* Spec chips on corners */}
            <div className="absolute top-4 right-4 bg-[var(--bg-deep)] border border-[var(--line-dark)] rounded-md px-3 py-1.5 flex flex-col items-center z-20">
              <span className="font-body text-[10px] text-[var(--ink-muted)] uppercase tracking-wider">Engine</span>
              <span className="font-display text-lg text-[var(--gold)] leading-none">{bike.engine.displacement}</span>
            </div>
          </div>

          {/* Details & CTAs */}
          <div className="flex flex-col justify-center">
            <span className="overline text-[var(--gold)] mb-2">{bike.category}</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-[var(--ink)] leading-none mb-4">{bike.name}</h1>
            <p className="font-body text-lg text-[var(--ink-muted)] mb-8">{bike.tagline}</p>
            
            <div className="flex items-end gap-3 mb-8">
              <span className="font-display text-4xl text-[var(--ink)]">
                {bike.price > 0 ? formatINR(bike.price) : 'TBA'}
              </span>
              <span className="font-body text-xs text-[var(--ink-muted)] mb-1 uppercase tracking-widest">
                Ex-Showroom Price
              </span>
            </div>

            {/* Colorway Picker */}
            {bike.colorways && bike.colorways.length > 0 && (
              <div className="mb-10">
                <p className="font-body text-sm font-semibold text-[var(--ink)] mb-3">
                  Color: <span className="text-[var(--ink-muted)] font-normal">{activeColor?.name}</span>
                </p>
                <div className="flex flex-wrap gap-3">
                  {bike.colorways.map((color, idx) => (
                    <button
                      key={color.name}
                      onClick={() => setActiveColorIdx(idx)}
                      className="w-10 h-10 rounded-full flex items-center justify-center p-1 border-2 transition-all duration-200"
                      style={{ 
                        borderColor: activeColorIdx === idx ? 'var(--gold)' : 'transparent',
                      }}
                      aria-label={`Select color ${color.name}`}
                    >
                      <span 
                        className="w-full h-full rounded-full shadow-inner border border-[rgba(255,255,255,0.1)]"
                        style={{ backgroundColor: color.hex }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button variant="primary" showArrow className="w-full sm:w-auto" onClick={() => openModal(bike.slug)}>
                Book Test Ride
              </Button>
              <Link to="/contact" className="w-full sm:w-auto">
                <Button variant="outline" className="w-full">Enquire Now</Button>
              </Link>
            </div>
            
            <p className="font-body text-xs text-[var(--ink-muted)]">
              *Prices and specifications are subject to change without prior notice. EMI calculations are indicative.
            </p>
          </div>
        </div>

        {/* Spec Table & EMI */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          {/* Specs */}
          <div>
            <h3 className="font-display text-2xl text-[var(--ink)] mb-6 border-b border-[var(--line-dark)] pb-4">
              Technical Specifications
            </h3>
            <div className="flex flex-col">
              {Object.entries({
                'Engine': bike.engine.type,
                'Displacement': bike.engine.displacement,
                'Power': bike.engine.power,
                'Torque': bike.engine.torque,
                'Gearbox': bike.engine.gearbox,
                'Frame': bike.chassis.frame,
                'Front Suspension': bike.chassis.frontSuspension,
                'Rear Suspension': bike.chassis.rearSuspension,
                'Brakes': bike.chassis.brakes,
                'ABS': bike.chassis.abs,
                'Seat Height': bike.dimensions.seatHeight,
                'Weight': bike.dimensions.weight,
                'Fuel Capacity': bike.dimensions.fuelCapacity,
                'Mileage': bike.dimensions.mileage,
              }).map(([key, value]) => (
                <div key={key} className="flex justify-between py-4 border-b border-[var(--line-dark)]">
                  <span className="font-body text-sm text-[var(--ink-muted)] capitalize">{key}</span>
                  <span className="font-body text-sm font-semibold text-[var(--ink)] text-right max-w-[60%]">{value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* EMI */}
          <div>
            {bike.price > 0 && <EmiCalculator price={bike.price} />}
          </div>
        </div>

        {/* Related Bikes */}
        {relatedBikes.length > 0 && (
          <div>
            <h3 className="font-display text-3xl text-[var(--ink)] mb-8 text-center md:text-left">
              Explore Similar Models
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedBikes.map(b => (
                <BikeCard key={b.slug} bike={b} theme="dark" />
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
