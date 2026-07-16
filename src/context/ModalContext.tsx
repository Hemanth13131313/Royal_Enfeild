// ============================================================
// context/ModalContext.tsx — Royal Enfield Showroom
// Lightweight test-ride modal state.
// Architecture §4: local state, no extra library.
// The actual modal UI is built in Phase 7.
// ============================================================

import {
  createContext,
  useState,
  useCallback,
  type ReactNode,
} from 'react';

export interface ModalContextValue {
  isOpen: boolean;
  preselectedModel: string;
  openModal: (model?: string) => void;
  closeModal: () => void;
}

// eslint-disable-next-line react-refresh/only-export-components
export const ModalContext = createContext<ModalContextValue | null>(null);

export function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [preselectedModel, setPreselectedModel] = useState('');

  const openModal = useCallback((model = '') => {
    setPreselectedModel(model);
    setIsOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isOpen, preselectedModel, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
}
