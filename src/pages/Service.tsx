// ============================================================
// pages/Service.tsx — Phase 6
// Service promise cards, timeline, hours, book-service form
// ============================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, CheckCircle2, MapPin, Phone } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';

export default function Service() {
  usePageMeta('Book a Service', 'Schedule maintenance for your Royal Enfield with certified technicians using genuine parts.');

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[var(--bg-deep)] pt-32 pb-24">
      <div className="section-container">
        
        <SectionTitle
          title="Service &"
          titleGold="Maintenance"
          overline="Keep It Thumping"
          subtitle="Certified technicians. Genuine parts. Unmatched care for your Royal Enfield."
        />

        {/* Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-16">
          {[
            { icon: Wrench, title: 'Genuine Parts', desc: 'We exclusively use factory-certified parts for all repairs and replacements.' },
            { icon: CheckCircle2, title: 'Certified Experts', desc: 'Our mechanics are Royal Enfield trained, knowing every engine inside out.' },
            { icon: Clock, title: 'On-Time Delivery', desc: 'Transparent timelines. We deliver your bike exactly when we promise.' },
          ].map((card, i) => (
            <div key={i} className="bg-[var(--bg-panel)] p-8 rounded-2xl border border-[var(--line-dark)] flex flex-col items-center text-center hover:border-[var(--gold)] transition-colors">
              <card.icon size={32} className="text-[var(--gold)] mb-6" />
              <h3 className="font-display text-xl text-[var(--ink)] mb-3">{card.title}</h3>
              <p className="font-body text-[var(--ink-muted)] text-sm">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Form */}
          <div className="lg:col-span-7">
            <h3 className="font-display text-3xl text-[var(--ink)] mb-8">Book a Service</h3>
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[rgba(200,155,60,0.1)] border border-[var(--gold)] p-8 rounded-2xl text-center flex flex-col items-center"
              >
                <div className="w-16 h-16 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--bg-deep)] mb-6">
                  <CheckCircle2 size={32} />
                </div>
                <h4 className="font-display text-2xl text-[var(--gold)] mb-2">Booking Requested</h4>
                <p className="font-body text-[var(--ink-muted)]">
                  Our service team will contact you shortly to confirm your appointment time.
                </p>
                <Button variant="outline" className="mt-8" onClick={() => setFormState('idle')}>
                  Book Another
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-body text-sm text-[var(--ink-muted)]">Full Name</label>
                    <input required type="text" id="name" className="bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-body text-sm text-[var(--ink-muted)]">Phone Number</label>
                    <input required type="tel" id="phone" pattern="[0-9]{10}" placeholder="10-digit number" className="bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]" />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="bike" className="font-body text-sm text-[var(--ink-muted)]">Motorcycle Model</label>
                    <input required type="text" id="bike" placeholder="e.g. Classic 350" className="bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="date" className="font-body text-sm text-[var(--ink-muted)]">Preferred Date</label>
                    <input required type="date" id="date" className="bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="serviceType" className="font-body text-sm text-[var(--ink-muted)]">Type of Service</label>
                  <select id="serviceType" className="bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]">
                    <option>General Maintenance (Free/Paid)</option>
                    <option>Oil Change</option>
                    <option>Accidental Repair</option>
                    <option>Other issues</option>
                  </select>
                </div>

                <Button variant="primary" type="submit" disabled={formState === 'submitting'} className="w-full md:w-auto self-start mt-2">
                  {formState === 'submitting' ? 'Submitting...' : 'Request Appointment'}
                </Button>
              </form>
            )}
          </div>

          {/* Info Panel */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <div className="bg-[var(--bg-panel)] border border-[var(--line-dark)] p-8 rounded-2xl">
              <h4 className="font-display text-xl text-[var(--ink)] mb-6">Service Center Details</h4>
              <ul className="flex flex-col gap-6">
                <li className="flex gap-4 items-start">
                  <MapPin className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block font-body text-[var(--ink)] mb-1">Location</strong>
                    <span className="font-body text-sm text-[var(--ink-muted)]">Heritage Motors<br/>143 Royal Road, Motor City</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Clock className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block font-body text-[var(--ink)] mb-1">Service Hours</strong>
                    <span className="font-body text-sm text-[var(--ink-muted)]">Mon - Sat: 9:00 AM - 6:00 PM<br/>Sunday: Closed</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <Phone className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                  <div>
                    <strong className="block font-body text-[var(--ink)] mb-1">Contact</strong>
                    <span className="font-body text-sm text-[var(--ink-muted)]">+91 98765 43211<br/>service@heritagemotors.com</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-[var(--gold)] p-8 rounded-2xl">
              <h4 className="font-display text-xl text-[var(--bg-deep)] mb-3">RSA Assistance</h4>
              <p className="font-body text-sm text-[rgba(25,20,16,0.8)] mb-6">
                Stuck on the road? Royal Enfield Roadside Assistance is available 24x7.
              </p>
              <a href="tel:18002100007" className="inline-block bg-[var(--bg-deep)] text-[var(--gold)] font-body font-bold px-6 py-3 rounded-full hover:bg-black transition-colors">
                Call 1800-210-0007
              </a>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}
