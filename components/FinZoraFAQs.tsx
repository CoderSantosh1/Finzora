"use client";

import Image from "next/image";
import { useState } from "react";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;

export default function FinZoraFAQs() {
  const { faq } = siteData;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faqs"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff5f8] via-white to-[#fde9ef] py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.3fr] lg:gap-[4vw] lg:px-[3.5vw]">
        {/* Left */}
        <div data-reveal="left" className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full bg-[#fde2e8] py-1.5 pl-2 pr-4 text-[15px] font-bold text-[#14162b] sm:text-[17px]">
            <span className="grid h-[26px] w-[26px] place-items-center rounded-full bg-[#d9002b] text-[15px] font-extrabold leading-none text-white">
              ?
            </span>
            {faq.eyebrow}
          </span>

          <h2 className="mt-5 text-[42px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#14162b]">
            {faq.title}
            <span className="block">{faq.titleLine} <span className=" text-[#d9002b]">{faq.highlight}</span></span>
            
          </h2>

          <span className="mt-4 block h-[4px] w-[56px] rounded-full bg-[#f5c518]" />

          <p className="mt-5 max-w-[360px] text-[15px] leading-[1.6] text-[#2c3340] sm:text-[18px]">
            {faq.description}
          </p>

          <div className="relative mt-6 h-[240px] w-full max-w-[340px] sm:h-[280px] lg:h-[300px]">
            <Image
              src={faq.image}
              alt={faq.imageAlt}
              fill
              sizes="340px"
              className="object-contain object-left-bottom"
            />
          </div>
        </div>

        {/* Right: accordion */}
        <div data-reveal="right" className="flex flex-col justify-center gap-3.5">
          {faq.items.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={item.question}
                className={`overflow-hidden rounded-[10px] border transition-colors ${
                  isOpen
                    ? "border-[#f3c3cf] bg-[#fde8ee]"
                    : "border-[#f1d3dc] bg-white shadow-[0_4px_14px_rgba(160,20,60,0.06)]"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`finzora-faq-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6"
                >
                  <span
                    className={`text-[16px] font-bold sm:text-[clamp(17px,1.35vw,21px)] ${
                      isOpen ? "text-[#d9002b]" : "text-[#14162b]"
                    }`}
                  >
                    {i + 1}. {item.question}
                  </span>

                  {isOpen ? (
                    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-[#d9002b]" fill="none">
                      <path d="m6 15 6-6 6 6" stroke="currentColor" strokeWidth="2.600" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 text-[#14162b]" fill="none">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round" />
                    </svg>
                  )}
                </button>

                <div
                  id={`finzora-faq-${i}`}
                  className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[14px] leading-[1.65] text-[#2c3340] sm:px-6 sm:text-[clamp(15px,1.15vw,18px)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
