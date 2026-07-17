// ============================================================
// pages/Accessories.tsx — Phase 6
// Product grid + add-to-cart; CartDrawer (qty stepper, remove, subtotal, WhatsApp)
// ============================================================

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingCart, Plus, Minus, X, ArrowRight } from 'lucide-react';
import clsx from 'clsx';
import { usePageMeta } from '../hooks/usePageMeta';
import { SectionTitle } from '../components/ui/SectionTitle';
import { Button } from '../components/ui/Button';
import { formatINR } from '../lib/format';
import { accessories } from '../data/accessories';
import { site } from '../config/site';
import type { Accessory } from '../types';

interface CartItem extends Accessory {
  quantity: number;
}

export default function Accessories() {
  usePageMeta('Genuine Accessories', 'Customize your Royal Enfield with genuine motorcycle accessories, riding gear, and apparel.');

  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const addToCart = (acc: Accessory) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === acc.id);
      if (existing) {
        return prev.map(item => item.id === acc.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...acc, quantity: 1 }];
    });
    setIsDrawerOpen(true);
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQ = item.quantity + delta;
        return newQ > 0 ? { ...item, quantity: newQ } : item;
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const whatsappUrl = `${site.whatsapp}?text=Hi, I would like to enquire about the following accessories:%0A${cart.map(i => `${i.name} (x${i.quantity})`).join('%0A')}%0A*Total:* ${formatINR(subtotal)}`;

  return (
    <main className="min-h-screen bg-[var(--bg-deep)] pt-32 pb-24 relative overflow-hidden">
      
      {/* Header with Cart Button */}
      <div className="section-container relative z-10">
        <div className="flex justify-between items-end mb-12">
          <SectionTitle
            title="Genuine"
            titleGold="Accessories"
            overline="Make It Yours"
            align="left"
            className="mb-0"
          />
          
          <button 
            onClick={() => setIsDrawerOpen(true)}
            className="relative flex items-center justify-center w-12 h-12 rounded-full bg-[var(--gold)] text-[var(--bg-deep)] hover:brightness-110 transition-all duration-200"
            aria-label="Open cart"
          >
            <ShoppingCart size={20} />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-[var(--red)] text-white font-body text-[10px] font-bold">
                {totalItems}
              </span>
            )}
          </button>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {accessories.map(acc => (
            <div key={acc.id} className="group flex flex-col bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-2xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:border-[var(--gold)]">
              <div className="relative aspect-square overflow-hidden bg-[rgba(255,255,255,0.02)]">
                <img src={acc.image} alt={acc.name} loading="lazy" className="w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-300 group-hover:scale-105" />
              </div>
              <div className="flex flex-col flex-1 p-5 border-t border-[var(--line-dark)]">
                <span className="overline text-[var(--gold)] mb-1">{acc.category}</span>
                <h3 className="font-display text-xl text-[var(--ink)] mb-1">{acc.name}</h3>
                <p className="font-body text-lg font-bold text-[var(--ink)] mb-4">{formatINR(acc.price)}</p>
                <div className="mt-auto">
                  <Button variant="outline" className="w-full text-sm py-2" onClick={() => addToCart(acc)}>Add to Cart</Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cart Drawer Overlay */}
      <AnimatePresence>
        {isDrawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              onClick={() => setIsDrawerOpen(false)}
            />
            
            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-[var(--bg-deep)] border-l border-[var(--line-dark)] z-50 flex flex-col shadow-2xl"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-[var(--line-dark)] bg-[var(--bg-panel)]">
                <h3 className="font-display text-2xl text-[var(--ink)]">Your Cart</h3>
                <button onClick={() => setIsDrawerOpen(false)} className="text-[var(--ink-muted)] hover:text-[var(--ink)] transition-colors">
                  <X size={24} />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
                {cart.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-[var(--ink-muted)]">
                    <ShoppingCart size={48} className="mb-4 opacity-50" />
                    <p className="font-body text-lg">Your cart is empty.</p>
                  </div>
                ) : (
                  cart.map(item => (
                    <div key={item.id} className="flex gap-4 p-4 rounded-xl border border-[var(--line-dark)] bg-[var(--bg-panel)] relative group">
                      <div className="w-20 h-20 rounded bg-[rgba(255,255,255,0.05)] overflow-hidden">
                        <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col flex-1">
                        <h4 className="font-body font-semibold text-[var(--ink)] pr-6">{item.name}</h4>
                        <p className="font-body text-sm text-[var(--gold)] mb-3">{formatINR(item.price)}</p>
                        
                        <div className="flex items-center gap-3">
                          <button onClick={() => updateQuantity(item.id, -1)} className="w-7 h-7 rounded-full border border-[var(--line-dark)] flex items-center justify-center text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"><Minus size={14} /></button>
                          <span className="font-body text-sm font-semibold w-4 text-center text-[var(--ink)]">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="w-7 h-7 rounded-full border border-[var(--line-dark)] flex items-center justify-center text-[var(--ink)] hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors"><Plus size={14} /></button>
                        </div>
                      </div>
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="absolute top-4 right-4 text-[var(--ink-muted)] hover:text-[var(--red)] transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-[var(--line-dark)] bg-[var(--bg-panel)]">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-body text-[var(--ink-muted)] uppercase tracking-wider text-sm">Subtotal</span>
                  <span className="font-display text-2xl text-[var(--ink)]">{formatINR(subtotal)}</span>
                </div>
                
                <a 
                  href={cart.length > 0 ? whatsappUrl : undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={clsx(
                    "flex items-center justify-center gap-2 w-full py-4 rounded-full font-body font-semibold text-sm transition-all duration-200",
                    cart.length > 0 
                      ? "bg-[var(--gold)] text-[var(--bg-deep)] hover:brightness-110 shadow-lg"
                      : "bg-[var(--line-dark)] text-[var(--ink-muted)] cursor-not-allowed"
                  )}
                  onClick={(e) => {
                    if (cart.length === 0) e.preventDefault();
                  }}
                  title={cart.length === 0 ? "Add items to enquire" : ""}
                >
                  Enquire via WhatsApp
                  <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
