// ============================================================
// components/layout/Layout.tsx — Royal Enfield Showroom
// Wraps all routes: Navbar (S1) + page content + Footer (S13).
// ============================================================

import type { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { TestRideModal } from '../ui/TestRideModal';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--bg-deep)]">
      <Navbar />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
      <TestRideModal />
    </div>
  );
}
