// ============================================================
// components/home/ShowcaseSpecChip.tsx — S4 spec chip
// design.md §7: icon + label over value, --bg-panel, rounded-lg, 1px border
// A4 spring pop-in applied by parent
// ============================================================

interface ShowcaseSpecChipProps {
  label: string;
  value: string;
}

export function ShowcaseSpecChip({ label, value }: ShowcaseSpecChipProps) {
  return (
    <div className="flex flex-col gap-0.5 rounded-lg px-4 py-2.5 bg-[var(--bg-panel)] border border-[var(--line-dark)] min-w-[130px]">
      <span className="overline text-[var(--gold)] text-[10px]">{label.toUpperCase()}</span>
      <span className="font-body font-semibold text-[var(--ink)] text-sm leading-tight">{value}</span>
    </div>
  );
}
