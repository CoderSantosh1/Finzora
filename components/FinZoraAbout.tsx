"use client";

import Image from "next/image";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;

const iconProps = {
  viewBox: "0 0 64 64",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[62px] w-[62px]",
};

function HandshakeIcon() {
  return (
    <svg {...iconProps}>
      {/* check badge */}
      <circle cx="32" cy="10" r="7" />
      <path d="m28.500 10 2.500 2.500 4.500-5" />
      {/* hands */}
      <path d="M4 30 14 22l10 4 8-4 8 4 10-4 10 8" />
      <path d="m4 30 12 14 8 6M60 30 48 44l-8 6" />
      <path d="m24 50 5 4a3 3 0 0 0 4.500-4M29 46l4 4M33 42l4.500 4.500" />
      <path d="m20 30 11 8a4 4 0 0 0 5-1.500l4-6" />
    </svg>
  );
}

function StarPersonIcon() {
  return (
    <svg {...iconProps}>
      {/* stars */}
      <path d="m12 8 2 4 4.500.6-3.300 3.100.8 4.300L12 17.800l-4 2.200.8-4.300L5.500 12.600 10 12l2-4Z" />
      <path d="m32 4 2 4 4.500.6-3.300 3.100.8 4.300L32 13.800l-4 2.200.8-4.300-3.300-3.100L30 8l2-4Z" />
      <path d="m52 8 2 4 4.500.6-3.300 3.100.8 4.300L52 17.800l-4 2.200.8-4.300-3.300-3.100L50 12l2-4Z" />
      {/* person */}
      <circle cx="32" cy="34" r="8" />
      <path d="M14 60c0-10 8-16 18-16s18 6 18 16" />
      <path d="m28 44 4 8 4-8" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 64 48" className="h-[40px] w-[52px]" fill="currentColor">
      <circle cx="32" cy="12" r="8" />
      <path d="M16 44c0-9 7-15 16-15s16 6 16 15v2H16v-2Z" />
      <circle cx="11" cy="20" r="6" />
      <path d="M0 44c0-7 5-12 11-12 2 0 4 .5 5.500 1.400C13 36 11 40 11 44v2H0v-2Z" />
      <circle cx="53" cy="20" r="6" />
      <path d="M64 44c0-7-5-12-11-12-2 0-4 .5-5.500 1.400C51 36 53 40 53 44v2h11v-2Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <span className="grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-[#d9002b] text-white">
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
        <path
          d="m6 12.500 4 4L18 8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

const points = siteData.about.points;

export default function FinZoraAbout() {
  const { about } = siteData;
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.08fr_1fr] lg:gap-[2vw] lg:px-[3vw]">
        {/* Left: red stats card + illustration */}
        <div data-reveal="left" className="flex w-full flex-col gap-6 sm:flex-row sm:items-stretch sm:gap-5">
          {/* Red stats card */}
          <div className="flex w-full shrink-0 flex-col items-center justify-center rounded-[16px] bg-gradient-to-b from-[#d9002b] to-[#bf0026] px-4 py-8 text-center text-white shadow-[0_14px_30px_rgba(217,0,43,0.3)] sm:w-[180px] lg:h-[460px]">
            <HandshakeIcon />
            <span className="mt-2 text-[34px] font-bold leading-none">{about.statSuffix}</span>
            <p className="mt-2 text-[22px] font-bold leading-[1.25]">
            {about.stats[0].label}
              <br />
            {about.stats[0].secondLine}
            </p>

            <span className="my-6 block w-full border-t-2 border-dashed border-white/70" />

            <StarPersonIcon />
            <span className="mt-2 text-[34px] font-bold leading-none">{about.statSuffix}</span>
            <p className="mt-2 text-[22px] font-bold leading-[1.25]">
              {about.stats[1].label}
              <br />
              {about.stats[1].secondLine}
            </p>
          </div>

          {/* Illustration */}
          <div className="relative h-[340px] w-full sm:h-[460px] sm:flex-1 lg:h-[500px]">
            <Image
              src={about.image}
              alt={about.imageAlt}
              fill
              sizes="(max-width: 1024px) 90vw, 600px"
              className="object-contain object-center"
            />
          </div>
        </div>

        {/* Right: content */}
        <div data-reveal="right" className="flex w-full flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fde2e8] px-5 py-2.5 text-[14px] font-bold tracking-[0.3px] text-[#d9002b] sm:text-[16px]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d9002b]" />
            {about.eyebrow}
          </span>

          <h2 className="mt-5 text-[clamp(36px,4.3vw,64px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#14162b]">
            {about.title}<span className="text-[#d9002b]">{about.titleHighlight}</span>
            <span className="block text-[0.9em]">{about.titleLine}</span>
          </h2>

          <p className="mt-5 max-w-[560px] text-[15px] leading-[1.65] text-[#1c2430] sm:text-[19px]">
            {about.description}
          </p>

          <div className="mt-6 flex w-full flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <ul className="space-y-3">
              {points.map((point) => (
                <li
                  key={point}
                  className="flex items-center gap-3 text-[15px] font-bold text-[#14162b] sm:text-[18px]"
                >
                  <CheckIcon />
                  {point}
                </li>
              ))}
            </ul>

            {/* Clients reviews card */}
            <div className="flex w-[140px] shrink-0 flex-col items-center rounded-[16px] bg-[#fde8ec] px-4 py-5 text-center text-[#d9002b]">
              <PeopleIcon />
              <p className="mt-2 text-[17px] font-bold leading-[1.2] text-[#14162b]">
                {about.reviews.title[0]}
                <br />
                {about.reviews.title[1]}
              </p>
              <p className="mt-1 text-[30px] font-extrabold leading-none text-[#d9002b]">
                {about.reviews.value}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
