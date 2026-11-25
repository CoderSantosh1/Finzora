"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;
const testimonials = siteData.testimonials.items;

// Vertical offsets that give the avatar row its curved look (desktop only)
const arcOffsets = [
  "lg:translate-y-[22px]",
  "lg:translate-y-[6px]",
  "lg:translate-y-0",
  "lg:translate-y-[6px]",
  "lg:translate-y-[22px]",
];

function QuoteMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 52" className={className} fill="currentColor" aria-hidden="true">
      <path d="M0 30C0 14 8 4 24 0v9C16 12 13 17 13 22h11v30H0V30Z" />
      <path d="M38 30C38 14 46 4 62 0v9c-8 3-11 8-11 13h11v30H38V30Z" />
    </svg>
  );
}

function Stars() {
  return (
    <div className="flex items-center gap-1" aria-label={siteData.testimonials.ratingLabel}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 24 24" className="h-[26px] w-[26px] text-[#fbbf24]" fill="currentColor">
          <path d="m12 2 2.900 6.300 6.900.8-5.100 4.700 1.400 6.800L12 17.200 5.900 20.600l1.400-6.800L2.200 9.100l6.900-.8L12 2Z" />
        </svg>
      ))}
    </div>
  );
}

export default function FinZoraTestimonials() {
  const { testimonials: testimonialsData } = siteData;
  const [active, setActive] = useState(1);

  // Auto-advance; restarts whenever the active item changes
  useEffect(() => {
    const id = window.setTimeout(
      () => setActive((i) => (i + 1) % testimonials.length),
      6000,
    );
    return () => window.clearTimeout(id);
  }, [active]);

  const current = testimonials[active];

  return (
    <section
      id="testimonials"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fdeef4] via-[#fff3f8] to-[#fdeef4] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-[3.5vw]">
        {/* Heading */}
        <div data-reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-[80px] bg-[#d9002b] sm:block lg:w-[110px]" />
            <span className="inline-flex items-center gap-3 rounded-full bg-[#fbd9e1] py-2 pl-2.5 pr-6 text-[18px] font-bold text-[#14162b] sm:text-[24px]">
              <span className="grid h-[40px] w-[40px] place-items-center rounded-full bg-[#d9002b] text-white">
                <QuoteMark className="h-4 w-4" />
              </span>
              {testimonialsData.eyebrow}
            </span>
            <span className="hidden h-px w-[80px] bg-[#d9002b] sm:block lg:w-[110px]" />
          </div>

          <h2 className="mt-4 text-[clamp(30px,3.8vw,56px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#14162b]">
            {testimonialsData.title}{" "}
            <span className="text-[#d9002b]">{testimonialsData.highlight}</span>
          </h2>

          <p className="mt-2 max-w-[900px] text-[14px] leading-[1.6] text-[#2c3340] sm:text-[19px]">
            {testimonialsData.description}
          </p>
        </div>

        {/* Avatars */}
        <div
          data-reveal
          role="tablist"
          aria-label={testimonialsData.chooseLabel}
          className="mt-8 flex items-start justify-center gap-3 sm:gap-6 lg:gap-[2.2vw]"
        >
          {testimonials.map((t, i) => {
            const isActive = i === active;
            return (
            <button
  key={t.image}
  type="button"
  role="tab"
  aria-selected={isActive}
  aria-label={`View testimonial from ${t.name}`}
  onClick={() => setActive(i)}
  className={`relative h-[58px] w-[58px] shrink-0 overflow-hidden rounded-full border-[3px] border-white bg-white shadow-[0_6px_18px_rgba(160,20,60,0.18)] transition duration-300 sm:h-[90px] sm:w-[90px] lg:h-[124px] lg:w-[124px] lg:border-4 ${arcOffsets[i]} ${
    isActive
      ? "scale-105 ring-2 ring-[#d9002b]/70"
      : "opacity-90 hover:opacity-100"
  }`}
>
  <Image
    src={t.image}
    alt={t.name}
    fill
    sizes="(max-width: 640px) 58px, (max-width: 1024px) 90px, 124px"
    className="rounded-full object-cover"
  />
</button>
            );
          })}
        </div>

        {/* Dotted arc + quote */}
        <div data-reveal className="relative mt-6 flex flex-col items-center text-center lg:-mt-3">
          <svg
            aria-hidden="true"
            viewBox="0 0 1250 150"
            preserveAspectRatio="none"
            className="pointer-events-none absolute inset-x-0 top-0 hidden h-[150px] w-full text-[#d9002b] lg:block"
            fill="none"
          >
            <path
              d="M0 148 Q625 -62 1250 148"
              stroke="currentColor"
              strokeWidth="1.500"
              strokeDasharray="2 4"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="relative z-10 flex flex-col items-center pt-6 lg:pt-16" key={active}>
            <QuoteMark className="h-[42px] w-[50px] text-[#d9002b]" />

            <p className="mt-5 max-w-[800px] text-[16px] leading-[1.6] text-[#14162b] sm:text-[clamp(18px,1.6vw,24px)]">
              &ldquo;{current.quote}&rdquo;
            </p>

            <div className="mt-5 flex items-center gap-4">
              <span className="hidden h-px w-[70px] bg-[#d9002b] sm:block" />
              <p className="text-[20px] font-extrabold text-[#14162b] sm:text-[24px]">
                {current.name}
              </p>
              <span className="hidden h-px w-[70px] bg-[#d9002b] sm:block" />
            </div>
            <p className="mt-1 text-[15px] text-[#14162b] sm:text-[18px]">
              {current.role}
            </p>

            <div className="mt-3">
              <Stars />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
