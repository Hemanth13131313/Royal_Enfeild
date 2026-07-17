// ============================================================
// components/home/EngineeringDiagram.tsx — S8
// Centered bike profile + SVG callout lines with A8 line-draw
// ============================================================

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import clsx from 'clsx';

const CALLOUTS = [
  { id: 'engine', label: 'J-Series Engine',    pos: { top: '65%', left: '42%' }, align: 'left' },
  { id: 'frame',  label: 'Twin-Downtube Frame',pos: { top: '48%', left: '35%' }, align: 'left' },
  { id: 'forks',  label: 'Telescopic Forks',   pos: { top: '55%', left: '78%' }, align: 'right' },
  { id: 'tank',   label: 'Fuel Tank',          pos: { top: '35%', left: '55%' }, align: 'right' },
  { id: 'wheels', label: 'Spoked Wheels',      pos: { top: '78%', left: '22%' }, align: 'left' },
  { id: 'exhaust',label: 'Exhaust',            pos: { top: '80%', left: '60%' }, align: 'right' },
] as const;

export function EngineeringDiagram() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-20%" });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="bg-[var(--bg-deep)] py-20 md:py-28 overflow-hidden">
      <div className="section-container flex flex-col items-center">
        
        <SectionTitle
          title="Engineered to"
          titleGold="Endure"
          subtitle="Precision engineering and old-school soul, ready for any terrain."
        />

        <div 
          ref={containerRef}
          className="relative w-full max-w-5xl mt-12 md:mt-16 aspect-[4/3] md:aspect-[21/9] flex items-center justify-center"
        >
          {/* Background Glow */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[60%] h-[60%] rounded-full opacity-30" style={{ background: 'var(--gradient-glow)', filter: 'blur(40px)' }} />
          </div>

          {/* Bike Image */}
          <motion.img
            src="/images/exploded-classic.png"
            alt="Classic 350 engineering diagram with component callouts"
            className="relative z-10 w-full max-w-[85%] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Callouts */}
          {mounted && CALLOUTS.map((callout, i) => (
            <div
              key={callout.id}
              className="absolute z-20 flex flex-col items-center justify-center"
              style={{ top: callout.pos.top, left: callout.pos.left }}
            >
              {/* Dot */}
              <motion.div
                className="w-3 h-3 rounded-full bg-[var(--gold)] border-2 border-[var(--bg-deep)] relative z-10 shadow-[0_0_12px_rgba(200,155,60,0.6)]"
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.15 }}
              />
              
              {/* Line and Label */}
              <motion.div
                className={clsx(
                  "absolute flex items-end pb-1 whitespace-nowrap",
                  callout.align === 'left' ? 'right-full mr-2' : 'left-full ml-2'
                )}
                initial={{ opacity: 0, x: callout.align === 'left' ? 10 : -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: callout.align === 'left' ? 10 : -10 }}
                transition={{ duration: 0.5, delay: 0.6 + i * 0.15 }}
              >
                <div className={clsx(
                  "absolute bottom-0 w-8 h-[1px] bg-[var(--gold)] opacity-50",
                  callout.align === 'left' ? 'left-full ml-1' : 'right-full mr-1'
                )} />
                <span className="font-body text-xs md:text-sm font-semibold text-[var(--ink)] bg-[rgba(13,11,9,0.6)] px-2 py-0.5 rounded backdrop-blur-sm border border-[var(--line-dark)]">
                  {callout.label}
                </span>
              </motion.div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
