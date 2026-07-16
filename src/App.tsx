import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { ModalProvider } from './context/ModalContext';
import { Layout } from './components/layout/Layout';

// Eager: Home (critical path)
import Home from './pages/Home';

// Lazy: inner pages (code splitting per architecture §5)
const Bikes       = lazy(() => import('./pages/Bikes'));
const BikeDetail  = lazy(() => import('./pages/BikeDetail'));
const Accessories = lazy(() => import('./pages/Accessories'));
const Service     = lazy(() => import('./pages/Service'));
const Contact     = lazy(() => import('./pages/Contact'));
const NotFound    = lazy(() => import('./pages/NotFound'));

// ScrollToTop on route change (architecture §5)
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

// Minimal loading fallback
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--bg-deep)]">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-2 border-[var(--line-dark)] border-t-[var(--gold)] rounded-full animate-spin" />
        <p className="text-[var(--ink-muted)] overline text-xs tracking-widest">Loading</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <CartProvider>
      <ModalProvider>
        <ScrollToTop />
        <Layout>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              <Route path="/"            element={<Home />} />
              <Route path="/bikes"       element={<Bikes />} />
              <Route path="/bikes/:slug" element={<BikeDetail />} />
              <Route path="/accessories" element={<Accessories />} />
              <Route path="/service"     element={<Service />} />
              <Route path="/contact"     element={<Contact />} />
              <Route path="*"            element={<NotFound />} />
            </Routes>
          </Suspense>
        </Layout>
      </ModalProvider>
    </CartProvider>
  );
}
