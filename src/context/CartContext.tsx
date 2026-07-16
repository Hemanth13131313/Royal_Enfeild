// ============================================================
// context/CartContext.tsx — Royal Enfield Showroom
// Cart state: accessories + enquiry items.
// Persisted to localStorage key 're-cart-v1'.
// Architecture §4: useReducer + lazy init + save on change.
// ============================================================

import {
  createContext,
  useReducer,
  useEffect,
  useCallback,
  type ReactNode,
} from 'react';
import type { CartItem, CartAction } from '../types';

// ── Storage key ───────────────────────────────────────────────
const STORAGE_KEY = 're-cart-v1';

// ── Reducer ───────────────────────────────────────────────────
function cartReducer(state: CartItem[], action: CartAction): CartItem[] {
  switch (action.type) {
    case 'ADD': {
      const existing = state.find(i => i.id === action.item.id);
      if (existing) {
        return state.map(i =>
          i.id === action.item.id ? { ...i, qty: i.qty + 1 } : i
        );
      }
      return [...state, { ...action.item, qty: 1 }];
    }
    case 'REMOVE':
      return state.filter(i => i.id !== action.id);
    case 'SET_QTY':
      if (action.qty <= 0) return state.filter(i => i.id !== action.id);
      return state.map(i =>
        i.id === action.id ? { ...i, qty: action.qty } : i
      );
    case 'CLEAR':
      return [];
    default:
      return state;
  }
}

// ── LocalStorage helpers ──────────────────────────────────────
function loadCart(): CartItem[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw) as CartItem[];
  } catch {
    return [];
  }
}

function saveCart(items: CartItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // Storage unavailable — silently ignore
  }
}

// ── Context shape ─────────────────────────────────────────────
export interface CartContextValue {
  items: CartItem[];
  totalQty: number;
  totalPrice: number;
  add: (item: Omit<CartItem, 'qty'>) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext<CartContextValue | null>(null);

// ── Provider ──────────────────────────────────────────────────
export function CartProvider({ children }: { children: ReactNode }) {
  const [items, dispatch] = useReducer(cartReducer, undefined, loadCart);

  // Persist on every change
  useEffect(() => {
    saveCart(items);
  }, [items]);

  const add = useCallback((item: Omit<CartItem, 'qty'>) => {
    dispatch({ type: 'ADD', item: { ...item, qty: 1 } });
  }, []);

  const remove = useCallback((id: string) => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    dispatch({ type: 'SET_QTY', id, qty });
  }, []);

  const clear = useCallback(() => {
    dispatch({ type: 'CLEAR' });
  }, []);

  const totalQty = items.reduce((sum, i) => sum + i.qty, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, totalQty, totalPrice, add, remove, setQty, clear }}>
      {children}
    </CartContext.Provider>
  );
}
