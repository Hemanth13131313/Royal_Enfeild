// ============================================================
// hooks/useModal.ts — Royal Enfield Showroom
// Typed hook to consume ModalContext.
// ============================================================

import { useContext } from 'react';
import { ModalContext, type ModalContextValue } from '../context/ModalContext';

export function useModal(): ModalContextValue {
  const ctx = useContext(ModalContext);
  if (!ctx) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return ctx;
}
