// ============================================================
// components/home/ProcessSteps.tsx — S12
// 01-04 steps with outlined gold numbers + hairline connector
// ============================================================

import { motion } from 'framer-motion';
import { processSteps } from '../../data/content';
import { fadeUp, staggerContainer, inViewport } from '../../lib/motion';

export function ProcessSteps() {
  return (
    <section className="bg-[var(--cream)] py-20 md:py-28 overflow-hidden">
      <div className="section-container">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={inViewport}
        >
          {processSteps.map((step, index) => (
            <motion.div key={step.number} variants={fadeUp} className="relative flex flex-col items-center lg:items-start text-center lg:text-left">
              
              {/* Connector Line (Desktop Only) */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[60%] w-[80%] h-[1px] bg-[var(--line-light)]" />
              )}
              
              {/* Outlined Number */}
              <div 
                className="font-display text-[80px] leading-none text-outlined-gold mb-6 select-none"
                aria-hidden="true"
              >
                {step.number}
              </div>
              
              <h4 className="font-display text-2xl text-[var(--cream-ink)] mb-3">
                {step.title}
              </h4>
              
              <p className="font-body text-[var(--cream-muted)] text-sm leading-relaxed max-w-xs">
                {step.description}
              </p>

            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
}
