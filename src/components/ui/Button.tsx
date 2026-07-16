// ============================================================
// components/ui/Button.tsx — Royal Enfield Showroom
// Primary + outline button variants per design.md §7.
// Rules: no freestyle variants — use only these two.
// ============================================================

import { type ReactNode, type ButtonHTMLAttributes } from 'react';
import { ArrowRight } from 'lucide-react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  showArrow?: boolean;
  children: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  showArrow = false,
  children,
  className,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center gap-2 rounded-full font-body font-semibold transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--gold)] disabled:opacity-50 disabled:cursor-not-allowed group';

  const sizes = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  };

  const variants = {
    primary:
      'bg-[var(--gold)] text-[var(--cream-ink)] hover:brightness-110 hover:shadow-[0_8px_30px_rgba(200,155,60,.35)]',
    outline:
      'border border-[var(--gold)] text-[var(--gold)] bg-transparent hover:bg-[rgba(200,155,60,.12)]',
  };

  return (
    <button className={clsx(base, sizes[size], variants[variant], className)} {...rest}>
      {children}
      {showArrow && (
        <ArrowRight
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </button>
  );
}
