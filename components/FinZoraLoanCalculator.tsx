"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import type { ReactNode } from "react";
import { site } from "@/data";

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[40px] w-[40px]",
};

function CalculatorIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="3" width="16" height="18" rx="2.500" />
      <rect x="7" y="6" width="10" height="4" rx="0.800" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 17.500h.01M12 17.500h.01M16 17.500h.01" strokeWidth="2.400" />
    </svg>
  );
}

const inr = (n: number) =>
  `${site.loanCalculator.currencySymbol} ${Math.round(n).toLocaleString("en-IN")}`;

type SliderProps = {
  label: string;
  display: string;
  icon: ReactNode;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (v: number) => void;
};

function Slider({
  label,
  display,
  icon,
  value,
  min,
  max,
  step,
  onChange,
}: SliderProps) {
  const pct = ((value - min) / (max - min)) * 100;
  const thumb = 26;

  return (
    <div className="flex items-center gap-4 sm:gap-6">
      <span className="grid h-[58px] w-[58px] shrink-0 place-items-center rounded-[14px] bg-[#fde2e8] text-[#d9002b] sm:h-[66px] sm:w-[66px]">
        {icon}
      </span>

      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-3">
          <label className="text-[18px] font-bold text-[#14162b] sm:text-[22px]">
            {label}
          </label>
          <span className="rounded-[8px] bg-[#fde2e8] px-4 py-1.5 text-[15px] font-semibold text-[#14162b] sm:text-[19px]">
            {display}
          </span>
        </div>

        <div className="relative mt-3 h-[26px]">
          <div className="absolute inset-x-0 top-1/2 h-[8px] -translate-y-1/2 rounded-full bg-[#d9d9e0]" />
          <div
            className="absolute left-0 top-1/2 h-[8px] -translate-y-1/2 rounded-full bg-gradient-to-r from-[#d9002b] to-[#e8123c]"
            style={{ width: `calc(${pct}% + ${(0.5 - pct / 100) * thumb}px)` }}
          />
          <input
            type="range"
            aria-label={label}
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Number(e.target.value))}
            className="absolute inset-0 h-full w-full cursor-pointer appearance-none bg-transparent focus:outline-none
              [&::-webkit-slider-runnable-track]:h-[26px] [&::-webkit-slider-runnable-track]:bg-transparent
              [&::-webkit-slider-thumb]:h-[26px] [&::-webkit-slider-thumb]:w-[26px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-0 [&::-webkit-slider-thumb]:bg-[radial-gradient(circle,#d9002b_0_5px,#fff_6px)] [&::-webkit-slider-thumb]:shadow-[0_2px_8px_rgba(217,0,43,0.45)]
              [&::-moz-range-track]:h-[26px] [&::-moz-range-track]:bg-transparent
              [&::-moz-range-thumb]:h-[26px] [&::-moz-range-thumb]:w-[26px] [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-[radial-gradient(circle,#d9002b_0_5px,#fff_6px)] [&::-moz-range-thumb]:shadow-[0_2px_8px_rgba(217,0,43,0.45)]"
          />
        </div>
      </div>
    </div>
  );
}

export default function FinZoraLoanCalculator() {
  const { loanCalculator } = site;
  const [amount, setAmount] = useState(1000000);
  const [years, setYears] = useState(5);
  const [rate, setRate] = useState(10.5);

  const { emi, total, interest } = useMemo(() => {
    const n = years * 12;
    const r = rate / 12 / 100;
    const raw =
      r === 0
        ? amount / n
        : (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    const emiRounded = Math.round(raw);
    const totalPayable = emiRounded * n;
    return {
      emi: emiRounded,
      total: totalPayable,
      interest: totalPayable - amount,
    };
  }, [amount, years, rate]);

  return (
    <section
      id="loan-calculator"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fde9ef] via-[#fff1f5] to-[#fde9ef] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-[4vw]">
        {/* Heading */}
        <div data-reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-[100px] bg-[#d9002b] sm:block lg:w-[140px]" />
            <span className="inline-flex items-center gap-3 rounded-full bg-[#fbd9e1] px-6 py-2.5 text-[18px] font-bold text-[#d9002b] sm:text-[24px]">
              <CalculatorIcon className="h-7 w-7" />
              {loanCalculator.eyebrow}
            </span>
            <span className="hidden h-px w-[100px] bg-[#d9002b] sm:block lg:w-[140px]" />
          </div>

          <h2 className="mt-4 text-[clamp(28px,3.6vw,54px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#14162b]">
            {loanCalculator.title}{" "}
            <span className="text-[#d9002b]">{loanCalculator.highlight}</span>
          </h2>

          <p className="mt-2 max-w-[820px] text-[14px] leading-[1.6] text-[#2c3340] sm:text-[19px]">
            {loanCalculator.description}
          </p>
        </div>

        <div data-reveal className="mt-8 grid items-stretch gap-6 lg:grid-cols-[1.75fr_1fr]">
          {/* Sliders card */}
          <div className="flex flex-col justify-center gap-7 rounded-[22px] bg-white px-5 py-7 shadow-[0_10px_34px_rgba(160,20,60,0.1)] sm:gap-8 sm:px-7">
            <Slider
              label={loanCalculator.amountLabel}
              display={inr(amount)}
              value={amount}
              min={50000}
              max={2000000}
              step={10000}
              onChange={setAmount}
              icon={
                <svg {...iconProps}>
                  <circle cx="30" cy="12" r="8" />
                  <path d="M27 9h6M27 12h6M28 9c4 0 4 5 0 5l4 4" />
                  <path d="M4 32h8l8 3h8a3 3 0 0 1 0 6H16" />
                  <path d="m28 38 12-6a3 3 0 0 1 3 5l-12 7H12" />
                  <path d="M4 30v16" />
                </svg>
              }
            />
            <Slider
              label={loanCalculator.tenureLabel}
              display={`${years} ${years === 1 ? loanCalculator.yearLabel : loanCalculator.yearsLabel}`}
              value={years}
              min={1}
              max={10}
              step={1}
              onChange={setYears}
              icon={
                <svg {...iconProps}>
                  <rect x="6" y="9" width="36" height="34" rx="5" />
                  <path d="M6 20h36M15 4v9M33 4v9" />
                  <path d="M16 28h.01M24 28h.01M32 28h.01M16 35h.01M24 35h.01M32 35h.01" strokeWidth="3.600" />
                </svg>
              }
            />
            <Slider
              label={loanCalculator.interestLabel}
              display={`${rate.toFixed(1)}${loanCalculator.interestRateSuffix}`}
              value={rate}
              min={6}
              max={16}
              step={0.1}
              onChange={(v) => setRate(Math.round(v * 10) / 10)}
              icon={
                <svg {...iconProps}>
                  <ellipse cx="17" cy="12" rx="11" ry="5" />
                  <path d="M6 12v7c0 2.800 5 5 11 5M6 19v7c0 2.800 5 5 11 5" />
                  <ellipse cx="22" cy="31" rx="11" ry="5" />
                  <path d="M11 31v7c0 2.800 5 5 11 5s11-2.200 11-5v-7" />
                  <path d="M42 22 32 42" />
                  <circle cx="34" cy="24" r="2.200" />
                  <circle cx="41" cy="40" r="2.200" />
                </svg>
              }
            />
          </div>

          {/* Result card */}
          <div className="flex flex-col overflow-hidden rounded-[22px] bg-white shadow-[0_10px_34px_rgba(160,20,60,0.12)]">
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#d9002b] to-[#b8001f] px-6 py-6 text-center text-white">
              <svg
                aria-hidden="true"
                viewBox="0 0 400 120"
                preserveAspectRatio="none"
                className="absolute inset-x-0 bottom-0 -z-10 h-[70%] w-full text-white/10"
                fill="currentColor"
              >
                <path d="M0 60C60 20 120 20 200 55s150 30 200-10v75H0Z" />
              </svg>
              <p className="text-[20px] font-semibold sm:text-[26px]">
                {loanCalculator.monthlyEmiLabel}
              </p>
              <p className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-[clamp(38px,3.6vw,56px)] font-extrabold leading-none">
                  {loanCalculator.currencySymbol} {emi.toLocaleString("en-IN")}
                </span>
                <span className="text-[16px] sm:text-[22px]">{loanCalculator.monthLabel}</span>
              </p>
            </div>

            <div className="flex flex-1 flex-col px-6 pb-6 pt-4">
              <dl className="text-[#14162b]">
                <div className="flex items-center justify-between border-b border-dotted border-[#9aa0aa] py-3 text-[16px] sm:text-[20px]">
                  <dt>{loanCalculator.amountSummaryLabel}</dt>
                  <dd className="font-medium">{inr(amount)}</dd>
                </div>
                <div className="flex items-center justify-between border-b border-dotted border-[#9aa0aa] py-3 text-[16px] sm:text-[20px]">
                  <dt>{loanCalculator.totalInterestLabel}</dt>
                  <dd className="font-medium">{inr(interest)}</dd>
                </div>
                <div className="flex items-center justify-between py-3 text-[16px] font-bold sm:text-[20px]">
                  <dt>{loanCalculator.totalPayableLabel}</dt>
                  <dd>{inr(total)}</dd>
                </div>
              </dl>

              <Link
                href="#contact"
                className="mt-auto inline-flex items-center justify-center gap-3 rounded-[10px] bg-gradient-to-b from-[#e0102f] to-[#b8001f] px-6 py-3.5 text-[18px] font-bold text-white shadow-[0_8px_18px_rgba(217,0,43,0.3)] transition hover:brightness-110 sm:text-[22px]"
              >
                <CalculatorIcon className="h-6 w-6" />
                {loanCalculator.buttonLabel}
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
                  <path
                    d="M4 12h16m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
