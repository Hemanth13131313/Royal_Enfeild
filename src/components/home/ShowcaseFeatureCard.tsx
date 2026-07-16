// ============================================================
// components/home/ShowcaseFeatureCard.tsx — S4 right rail cards
// design.md §7: --bg-panel, gold icon top, Inter 600 title,
// one-line muted copy, hover lift (A5)
// ============================================================

import { Cog, ShoppingBag, Mountain } from 'lucide-react';

const ICONS: Record<string, React.ElementType> = {
  Cog,
  ShoppingCart: ShoppingBag,
  Mountain,
};

interface FeatureCardProps {
  icon: string;
  title: string;
  body: string;
}

export function ShowcaseFeatureCard({ icon, title, body }: FeatureCardProps) {
  const Icon = ICONS[icon] ?? Cog;

  return (
    // A5 hover lift
    <div className="group flex flex-col gap-3 p-5 rounded-2xl bg-[var(--bg-panel)] border border-[var(--line-dark)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(200,155,60,.30)] hover:shadow-[0_20px_40px_rgba(0,0,0,.45)]">
      <div className="w-10 h-10 rounded-xl bg-[var(--bg-elev)] border border-[var(--line-dark)] flex items-center justify-center text-[var(--gold)] transition-colors duration-300 group-hover:bg-[rgba(200,155,60,.12)]">
        <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-1">
        <h4 className="font-body font-semibold text-[var(--ink)] text-sm leading-snug">{title}</h4>
        <p className="font-body text-[var(--ink-muted)] text-xs leading-relaxed">{body}</p>
      </div>
    </div>
  );
}
