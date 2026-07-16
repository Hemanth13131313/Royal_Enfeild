// ============================================================
// components/ui/TestRideModal.tsx
// Global test ride modal (Phase 7).
// Validates name, phone, date, preselects model.
// ============================================================

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle2, CalendarDays } from 'lucide-react';
import { useModal } from '../../hooks/useModal';
import { submitEnquiry } from '../../lib/api';
import { bikes } from '../../data/bikes';
import { Button } from './Button';
import clsx from 'clsx';

export function TestRideModal() {
  const { isOpen, preselectedModel, closeModal } = useModal();
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  // Form fields
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [model, setModel] = useState('');
  const [date, setDate] = useState('');

  // Sync preselected model when opened
  useEffect(() => {
    if (isOpen) {
      setModel(preselectedModel || '');
      setFormState('idle');
      
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, preselectedModel]);

  // Handle escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    await submitEnquiry({
      type: 'test_ride',
      name,
      phone,
      model,
      date
    });
    
    setFormState('success');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          />
          
          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
            className="relative w-full max-w-lg bg-[var(--bg-panel)] border border-[var(--gold)] rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[var(--line-dark)] relative overflow-hidden">
              <div className="absolute inset-0 bg-[rgba(200,155,60,0.03)]" />
              <div className="relative z-10 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[rgba(200,155,60,0.1)] flex items-center justify-center text-[var(--gold)]">
                  <CalendarDays size={20} />
                </div>
                <h2 id="modal-title" className="font-display text-2xl text-[var(--ink)]">Book Test Ride</h2>
              </div>
              <button 
                onClick={closeModal}
                className="relative z-10 w-10 h-10 flex items-center justify-center rounded-full text-[var(--ink-muted)] hover:text-[var(--gold)] hover:bg-[rgba(200,155,60,0.1)] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-[var(--gold)]"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Body */}
            <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">
              {formState === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center py-6"
                >
                  <div className="w-20 h-20 rounded-full bg-[var(--gold)] flex items-center justify-center text-[var(--bg-deep)] mb-6 shadow-[0_0_40px_rgba(200,155,60,0.4)]">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="font-display text-3xl text-[var(--gold)] mb-3">Booking Confirmed</h3>
                  <p className="font-body text-[var(--ink-muted)] mb-8 leading-relaxed">
                    Thank you, <span className="text-[var(--ink)]">{name}</span>. We've received your request to test ride the <span className="text-[var(--ink)]">{bikes.find(b => b.slug === model)?.name || model}</span>. Our team will call you shortly to confirm the time.
                  </p>
                  <Button variant="outline" onClick={closeModal} className="w-full justify-center">
                    Done
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-name" className="font-body text-sm font-semibold text-[var(--ink)] uppercase tracking-wider">Full Name</label>
                    <input 
                      required 
                      type="text" 
                      id="modal-name" 
                      value={name}
                      onChange={e => setName(e.target.value)}
                      className="bg-[var(--bg-deep)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="e.g. Rahul Sharma"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-phone" className="font-body text-sm font-semibold text-[var(--ink)] uppercase tracking-wider">Phone Number</label>
                    <input 
                      required 
                      type="tel" 
                      id="modal-phone" 
                      pattern="[0-9]{10}" 
                      value={phone}
                      onChange={e => setPhone(e.target.value)}
                      className="bg-[var(--bg-deep)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)] transition-colors"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-model" className="font-body text-sm font-semibold text-[var(--ink)] uppercase tracking-wider">Select Model</label>
                    <select 
                      required
                      id="modal-model" 
                      value={model}
                      onChange={e => setModel(e.target.value)}
                      className="bg-[var(--bg-deep)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body text-[var(--ink)] focus:outline-none focus:border-[var(--gold)] transition-colors appearance-none"
                    >
                      <option value="" disabled>Choose a motorcycle</option>
                      {bikes.map(b => (
                        <option key={b.slug} value={b.slug}>{b.name}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <label htmlFor="modal-date" className="font-body text-sm font-semibold text-[var(--ink)] uppercase tracking-wider">Preferred Date</label>
                    <input 
                      required 
                      type="date" 
                      id="modal-date" 
                      value={date}
                      onChange={e => setDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]} // Can't book in the past
                      className={clsx(
                        "bg-[var(--bg-deep)] border border-[var(--line-dark)] rounded-md px-4 py-3 font-body focus:outline-none focus:border-[var(--gold)] transition-colors",
                        date ? "text-[var(--ink)]" : "text-[var(--ink-muted)]"
                      )}
                    />
                  </div>

                  <Button 
                    variant="primary" 
                    type="submit" 
                    disabled={formState === 'submitting'} 
                    className="w-full justify-center mt-4 h-14"
                  >
                    {formState === 'submitting' ? 'Confirming...' : 'Confirm Booking'}
                  </Button>
                  
                  <p className="font-body text-xs text-center text-[var(--ink-muted)]">
                    By confirming, you agree to receive a callback from Heritage Motors.
                  </p>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
