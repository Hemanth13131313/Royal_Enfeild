// ============================================================
// hooks/useCart.ts — Royal Enfield Showroom
// Typed hook to consume CartContext safely.
// ============================================================

import { useContext } from 'react';
import { CartContext, type CartContextValue } from '../context/CartContext';

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return ctx;
}
