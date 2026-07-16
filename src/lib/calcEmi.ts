// ============================================================
// lib/calcEmi.ts
// EMI calculation logic
// ============================================================

export function calcEmi(principal: number, downPaymentPercent: number, tenureMonths: number, interestRateAnnual: number): number {
  if (principal <= 0 || tenureMonths <= 0) return 0;
  
  const downPayment = principal * (downPaymentPercent / 100);
  const loanAmount = principal - downPayment;
  
  // Monthly interest rate
  const r = (interestRateAnnual / 12) / 100;
  
  // EMI Formula: P * r * (1 + r)^n / ((1 + r)^n - 1)
  if (r === 0) return loanAmount / tenureMonths;

  const emi = loanAmount * r * Math.pow(1 + r, tenureMonths) / (Math.pow(1 + r, tenureMonths) - 1);
  return Math.round(emi);
}
