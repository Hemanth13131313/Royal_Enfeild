// ============================================================
// pages/Contact.tsx — Phase 6
// Enquiry form, address block, map placeholder, hours
// ============================================================

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from 'lucide-react';
import { usePageMeta } from '../hooks/usePageMeta';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';

export default function Contact() {
  usePageMeta('Contact Us', 'Get in touch with Heritage Motors, your trusted Royal Enfield dealership. Test rides, sales, and general enquiries.');

  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[var(--cream)] pt-32 pb-24">
      <div className="section-container">
        
        <SectionTitle
          title="Get In Touch"
          overline="Heritage Motors"
          theme="light"
          subtitle="Whether you're looking for a new ride, valuing your old one, or just want to talk motorcycles—we're here."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mt-16">
          
          {/* Contact Details & Map */}
          <div className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div>
                <h3 className="font-display text-2xl text-[var(--cream-ink)] mb-6">Showroom</h3>
                <ul className="flex flex-col gap-6">
                  <li className="flex gap-4 items-start">
                    <MapPin className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block font-body text-[var(--cream-ink)] mb-1">Address</strong>
                      <span className="font-body text-sm text-[var(--cream-muted)]">Heritage Motors<br/>143 Royal Road, Motor City, 400001</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Phone className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block font-body text-[var(--cream-ink)] mb-1">Sales & Enquiries</strong>
                      <span className="font-body text-sm text-[var(--cream-muted)]">+91 98765 43210</span>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <Mail className="text-[var(--gold)] shrink-0 mt-1" size={20} />
                    <div>
                      <strong className="block font-body text-[var(--cream-ink)] mb-1">Email</strong>
                      <span className="font-body text-sm text-[var(--cream-muted)]">hello@heritagemotors.com</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-display text-2xl text-[var(--cream-ink)] mb-6">Opening Hours</h3>
                <ul className="flex flex-col gap-4">
                  <li className="flex items-center gap-3">
                    <Clock className="text-[var(--gold)] shrink-0" size={16} />
                    <span className="font-body text-sm text-[var(--cream-muted)]"><strong className="text-[var(--cream-ink)]">Mon - Sat:</strong> 9:00 AM - 7:00 PM</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Clock className="text-[var(--gold)] shrink-0" size={16} />
                    <span className="font-body text-sm text-[var(--cream-muted)]"><strong className="text-[var(--cream-ink)]">Sunday:</strong> 10:00 AM - 5:00 PM</span>
                  </li>
                </ul>
              </div>
              
            </div>

            {/* Map Placeholder */}
            <div className="w-full aspect-video md:aspect-[2/1] rounded-2xl bg-[var(--line-light)] flex items-center justify-center border border-[rgba(0,0,0,0.05)] overflow-hidden relative group">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity z-10" />
              <MapPin size={32} className="text-[var(--gold)] absolute z-20 drop-shadow-md" />
              <div className="absolute inset-0 flex flex-col items-center justify-center mt-16 z-20">
                <span className="font-body font-semibold text-[var(--cream-ink)]">Interactive Map Integration</span>
                <span className="font-body text-xs text-[var(--cream-muted)]">Google Maps iframe would be embedded here</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-[rgba(0,0,0,0.06)] shadow-[0_20px_40px_rgba(25,20,16,0.04)]">
            <h3 className="font-display text-3xl text-[var(--cream-ink)] mb-8">Send a Message</h3>
            
            {formState === 'success' ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12 flex flex-col items-center"
              >
                <div className="w-20 h-20 rounded-full bg-[rgba(200,155,60,0.1)] flex items-center justify-center text-[var(--gold)] mb-6">
                  <CheckCircle2 size={40} />
                </div>
                <h4 className="font-display text-3xl text-[var(--cream-ink)] mb-3">Message Sent!</h4>
                <p className="font-body text-[var(--cream-muted)] mb-8 max-w-sm">
                  Thanks for reaching out. A member of our team will get back to you within 24 hours.
                </p>
                <Button variant="outline" onClick={() => setFormState('idle')}>
                  Send Another Message
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="font-body text-sm font-semibold text-[var(--cream-ink)]">Full Name</label>
                    <input required type="text" id="name" className="bg-[var(--cream)] border border-[var(--line-light)] rounded-md px-4 py-3 font-body text-[var(--cream-ink)] focus:outline-none focus:border-[var(--gold)]" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="font-body text-sm font-semibold text-[var(--cream-ink)]">Phone Number</label>
                    <input required type="tel" id="phone" pattern="[0-9]{10}" placeholder="10-digit number" className="bg-[var(--cream)] border border-[var(--line-light)] rounded-md px-4 py-3 font-body text-[var(--cream-ink)] focus:outline-none focus:border-[var(--gold)]" />
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="font-body text-sm font-semibold text-[var(--cream-ink)]">Email Address</label>
                  <input required type="email" id="email" className="bg-[var(--cream)] border border-[var(--line-light)] rounded-md px-4 py-3 font-body text-[var(--cream-ink)] focus:outline-none focus:border-[var(--gold)]" />
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="enquiryType" className="font-body text-sm font-semibold text-[var(--cream-ink)]">Enquiry Type</label>
                  <select id="enquiryType" className="bg-[var(--cream)] border border-[var(--line-light)] rounded-md px-4 py-3 font-body text-[var(--cream-ink)] focus:outline-none focus:border-[var(--gold)]">
                    <option>General Enquiry</option>
                    <option>New Bike Sales</option>
                    <option>Trade-In / Valuation</option>
                    <option>Accessories / Gear</option>
                    <option>Feedback / Complaints</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="font-body text-sm font-semibold text-[var(--cream-ink)]">Message</label>
                  <textarea required id="message" rows={4} className="bg-[var(--cream)] border border-[var(--line-light)] rounded-md px-4 py-3 font-body text-[var(--cream-ink)] focus:outline-none focus:border-[var(--gold)] resize-y"></textarea>
                </div>

                <Button variant="primary" type="submit" disabled={formState === 'submitting'} className="w-full justify-center mt-2 flex items-center gap-2">
                  {formState === 'submitting' ? 'Sending...' : (
                    <>Send Message <Send size={18} /></>
                  )}
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </main>
  );
}
