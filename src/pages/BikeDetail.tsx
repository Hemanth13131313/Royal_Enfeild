// pages/BikeDetail.tsx — stub (Phase 6)
import { useParams } from 'react-router-dom';

export default function BikeDetail() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <main className="min-h-screen bg-[var(--bg-deep)] flex items-center justify-center">
      <div className="text-center">
        <p className="overline text-[var(--gold)] mb-4">Coming in Phase 6</p>
        <h1 className="font-display text-[var(--ink)] text-section">{slug?.toUpperCase()}</h1>
        <p className="text-[var(--ink-muted)] mt-4 font-body">Bike detail coming soon</p>
      </div>
    </main>
  );
}
