// ============================================================
// components/ui/EmiCalculator.tsx
// EMI Calculator component for BikeDetail page
// ============================================================

import { useState } from 'react';
import { calcEmi } from '../../lib/calcEmi';
import { formatINR } from '../../lib/format';

interface EmiCalculatorProps {
  price: number;
}

export function EmiCalculator({ price }: EmiCalculatorProps) {
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenure, setTenure] = useState(36);
  const [interestRate, setInterestRate] = useState(9.5);

  const emi = calcEmi(price, downPaymentPercent, tenure, interestRate);
  const downPaymentAmount = price * (downPaymentPercent / 100);
  const loanAmount = price - downPaymentAmount;

  return (
    <div className="bg-[var(--bg-panel)] border border-[var(--line-dark)] rounded-2xl p-6 md:p-8 mt-12">
      <h3 className="font-display text-2xl text-[var(--ink)] mb-6">EMI Calculator</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
        {/* Controls */}
        <div className="flex flex-col gap-6">
          
          {/* Down Payment Slider */}
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <label htmlFor="downPayment" className="font-body text-sm font-semibold text-[var(--ink)] uppercase tracking-wider">
                Down Payment
              </label>
              <span className="font-body text-sm text-[var(--gold)]">{downPaymentPercent}% ({formatINR(downPaymentAmount)})</span>
            </div>
            <input 
              type="range" 
              id="downPayment" 
              min="10" 
              max="90" 
              step="5"
              value={downPaymentPercent}
              onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
              className="w-full accent-[var(--gold)] h-1 bg-[var(--line-dark)] rounded-full appearance-none cursor-pointer"
            />
          </div>

          {/* Tenure Select */}
          <div className="flex flex-col gap-3">
            <label htmlFor="tenure" className="font-body text-sm font-semibold text-[var(--ink)] uppercase tracking-wider">
              Tenure (Months)
            </label>
            <select
              id="tenure"
              value={tenure}
              onChange={(e) => setTenure(Number(e.target.value))}
              className="bg-[var(--bg-deep)] border border-[var(--line-dark)] rounded-md px-4 py-2 font-body text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]"
            >
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
              <option value="36">36 Months</option>
              <option value="48">48 Months</option>
              <option value="60">60 Months</option>
            </select>
          </div>

          {/* Interest Rate Input */}
          <div className="flex flex-col gap-3">
            <label htmlFor="interest" className="font-body text-sm font-semibold text-[var(--ink)] uppercase tracking-wider">
              Interest Rate (% p.a.)
            </label>
            <input
              type="number"
              id="interest"
              value={interestRate}
              onChange={(e) => setInterestRate(Number(e.target.value))}
              step="0.1"
              min="1"
              max="25"
              className="bg-[var(--bg-deep)] border border-[var(--line-dark)] rounded-md px-4 py-2 font-body text-sm text-[var(--ink)] focus:outline-none focus:border-[var(--gold)]"
            />
          </div>

        </div>

        {/* Output */}
        <div className="flex flex-col justify-center items-center md:items-start p-6 rounded-xl bg-[rgba(200,155,60,0.05)] border border-[rgba(200,155,60,0.2)]">
          <p className="font-body text-[var(--ink-muted)] text-sm mb-2 uppercase tracking-widest">Est. Monthly EMI</p>
          <p className="font-display text-[48px] leading-none text-[var(--gold)] mb-6">
            {formatINR(emi)}<span className="text-xl text-[var(--ink-muted)]">/mo</span>
          </p>
          
          <div className="w-full flex justify-between items-center py-2 border-b border-[rgba(200,155,60,0.2)] mb-2">
            <span className="font-body text-sm text-[var(--ink-muted)]">Loan Amount</span>
            <span className="font-body text-sm text-[var(--ink)] font-semibold">{formatINR(loanAmount)}</span>
          </div>
          <div className="w-full flex justify-between items-center py-2">
            <span className="font-body text-sm text-[var(--ink-muted)]">Total Interest</span>
            <span className="font-body text-sm text-[var(--ink)] font-semibold">{formatINR((emi * tenure) - loanAmount)}</span>
          </div>

          <p className="font-body text-[10px] text-[var(--ink-muted)] mt-6 text-center md:text-left">
            *Indicative calculation. Actual EMI may vary based on credit profile and financier terms.
          </p>
        </div>
      </div>
    </div>
  );
}
