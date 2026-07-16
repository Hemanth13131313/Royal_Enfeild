// pages/NotFound.tsx — styled 404 page
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        <p className="overline text-[var(--gold)] mb-6 tracking-[0.3em]">404 — Not Found</p>
        <h1 className="font-display text-[var(--ink)] leading-none mb-6" style={{ fontSize: 'clamp(80px, 15vw, 160px)' }}>
          LOST?
        </h1>
        <p className="text-[var(--ink-muted)] font-body text-lg mb-10 leading-relaxed">
          Looks like this road doesn't exist. Let's get you back to the showroom.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 bg-[var(--gold)] text-[var(--cream-ink)] font-body font-semibold text-sm px-8 py-4 rounded-full hover:brightness-110 transition-all duration-200 hover:shadow-[0_8px_30px_rgba(200,155,60,.35)] group"
        >
          Back to Home
          <ArrowRight
            size={16}
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        </Link>
      </div>
    </main>
  );
}
