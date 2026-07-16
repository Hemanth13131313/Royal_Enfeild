// ============================================================
// lib/format.ts — Royal Enfield Showroom
// Utility functions: INR formatting, EMI calculation.
// Rules: always use formatINR — never hardcode price strings.
// ============================================================

// ── INR formatter (rules.md §5, prd.md F9) ───────────────────
// Uses Intl.NumberFormat 'en-IN' to produce ₹3,08,013 style
const inrFormatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  maximumFractionDigits: 0,
});

/**
 * Format a number as Indian Rupees.
 * @example formatINR(308013) → "₹3,08,013"
 * @example formatINR(0)       → "TBA"
 */
export function formatINR(amount: number): string {
  if (amount === 0) return 'TBA';
  return inrFormatter.format(amount);
}

/**
 * Format a price with "from" prefix.
 * @example formatINRFrom(308013) → "from ₹3,08,013"
 */
export function formatINRFrom(amount: number): string {
  if (amount === 0) return 'Price TBA';
  return `from ${formatINR(amount)}`;
}

// ── EMI Calculator (prd.md /bikes/:slug) ─────────────────────
interface EmiParams {
  /** Total on-road/ex-showroom price in INR */
  price: number;
  /** Down payment fraction (0–1). e.g. 0.2 = 20% */
  downPaymentRatio: number;
  /** Loan tenure in months (12–48) */
  tenureMonths: number;
  /** Annual interest rate in percent. e.g. 9.5 = 9.5% p.a. */
  annualRatePercent: number;
}

/**
 * Calculate monthly EMI using standard reducing-balance formula.
 * EMI = P × r × (1+r)^n / ((1+r)^n − 1)
 * where P = principal, r = monthly rate, n = tenure months.
 *
 * @returns Monthly EMI in INR (rounded to nearest rupee), or 0 if free.
 */
export function calcEmi({
  price,
  downPaymentRatio,
  tenureMonths,
  annualRatePercent,
}: EmiParams): number {
  const principal = price * (1 - downPaymentRatio);
  if (principal <= 0) return 0;

  const monthlyRate = annualRatePercent / 100 / 12;

  if (monthlyRate === 0) {
    // Zero-interest case
    return Math.round(principal / tenureMonths);
  }

  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, tenureMonths)) /
    (Math.pow(1 + monthlyRate, tenureMonths) - 1);

  return Math.round(emi);
}

/**
 * Format a monthly EMI as INR string.
 * @example formatEmi(5240) → "₹5,240/month"
 */
export function formatEmi(emi: number): string {
  if (emi === 0) return '₹0/month';
  return `${formatINR(emi)}/month`;
}
