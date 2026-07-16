// ============================================================
// components/home/BikeCard.tsx — S5/S11 Bike Card
// design.md §7: image area (dark radial glow bg on dark sections;
// white card on gold S11), name Bebas 24px, category overline,
// price Inter 700 with en-IN format, circular + button.
// A5 hover lift applies.
// ============================================================

import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { formatINR } from '../../lib/format';
import type { Bike } from '../../types';
import { useModal } from '../../hooks/useModal';

interface BikeCardProps {
  bike: Bike;
  theme?: 'dark' | 'gold'; // dark theme (S5 carousel on cream bg uses dark cards) or gold (S11 uses white cards)
}

export function BikeCard({ bike, theme = 'dark' }: BikeCardProps) {
  const { openModal } = useModal();
  const isGoldTheme = theme === 'gold';

  return (
    <div
      className={clsx(
        'group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300',
        'border',
        isGoldTheme
          ? 'bg-white border-[rgba(0,0,0,.08)] shadow-[0_12px_40px_rgba(25,20,16,.08)]'
          : 'bg-[var(--bg-panel)] border-[var(--line-dark)] hover:shadow-[0_20px_40px_rgba(0,0,0,.45)]'
      )}
      style={{
        transform: 'translateY(0)', // for A5 hover
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
    >
      {/* ── Image Area ────────────────────────────────────── */}
      <Link to={`/bikes/${bike.slug}`} draggable={false} className="relative h-[220px] w-full p-6 flex items-center justify-center overflow-hidden">
        {/* Glow bg */}
        {!isGoldTheme && (
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse, rgba(200,155,60,.12) 0%, transparent 65%)',
            }}
          />
        )}
        
        {/* Badges */}
        {bike.isNew && (
          <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-[var(--red)] text-white font-body font-bold text-[10px] tracking-wider uppercase">
            New
          </span>
        )}
        {bike.comingSoon && (
          <span className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-[var(--ink-muted)] text-white font-body font-bold text-[10px] tracking-wider uppercase">
            Coming Soon
          </span>
        )}

        {/* Bike Image */}
        <img
          src={bike.images.hero}
          alt={bike.name}
          className="relative z-10 w-full h-full object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-xl"
          loading="lazy"
          draggable="false"
        />
      </Link>

      {/* ── Content Area ──────────────────────────────────── */}
      <div className={clsx(
        'flex flex-col flex-1 p-5 border-t',
        isGoldTheme ? 'border-[rgba(0,0,0,.08)]' : 'border-[var(--line-dark)]'
      )}>
        <span className={clsx(
          'overline mb-1',
          isGoldTheme ? 'text-[var(--cream-muted)]' : 'text-[var(--gold)]'
        )}>
          {bike.category}
        </span>
        <Link to={`/bikes/${bike.slug}`} className="focus-visible:outline-none">
          <h3 className={clsx(
            'font-display text-2xl leading-tight mb-2 hover:text-[var(--gold)] transition-colors',
            isGoldTheme ? 'text-[var(--cream-ink)]' : 'text-[var(--ink)]'
          )}>
            {bike.name}
          </h3>
        </Link>
        <p className={clsx(
          'font-body text-xs mb-4 line-clamp-1',
          isGoldTheme ? 'text-[var(--cream-muted)]' : 'text-[var(--ink-muted)]'
        )}>
          {bike.tagline}
        </p>

        <div className="mt-auto flex items-end justify-between">
          <div className="flex flex-col">
            <span className={clsx(
              'text-[10px] uppercase font-body font-semibold tracking-wider',
              isGoldTheme ? 'text-[var(--cream-muted)]' : 'text-[var(--ink-muted)]'
            )}>
              Starting from
            </span>
            <span className={clsx(
              'font-body font-bold text-lg',
              isGoldTheme ? 'text-[var(--cream-ink)]' : 'text-[var(--ink)]'
            )}>
              {bike.price > 0 ? formatINR(bike.price) : 'TBA'}
            </span>
          </div>

          <button
            onClick={() => openModal(bike.slug)}
            aria-label={`Book test ride for ${bike.name}`}
            className={clsx(
              'w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200',
              'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2',
              isGoldTheme
                ? 'bg-[var(--bg-deep)] text-[var(--gold)] hover:bg-[var(--cream-ink)] focus-visible:outline-[var(--bg-deep)]'
                : 'bg-[var(--gold)] text-[var(--bg-deep)] hover:bg-[var(--gold-bright)] focus-visible:outline-[var(--gold)]'
            )}
          >
            <Plus size={20} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
