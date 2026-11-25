"use client";

import Image from "next/image";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;

/** Orange line-art home doodles (frame, plant, armchair, lamp) drawn behind the family */
function HomeDoodles() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 700 480"
      className="absolute inset-0 h-full w-full text-[#f28c28]"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Wall frame */}
      <rect x="250" y="12" width="140" height="130" />
      <rect x="266" y="28" width="108" height="98" />
      <path d="M266 62h56M300 28v34" />

      {/* Floor lamp */}
      <path d="M585 26h56a28 22 0 0 1-56 0Z" />
      <path d="M613 50 585 360M613 50 641 360" />
      <path d="M560 360h106" />

      {/* Plant pot + shelf */}
      <path d="M185 150h46l-6 42h-34Z" />
      <path d="M208 150c-4-22-22-34-38-28 10 14 24 24 38 28ZM208 150c2-26 16-42 34-42-2 18-14 34-34 42ZM208 150c-14-12-18-30-12-46 12 8 16 28 12 46Z" />
      <rect x="168" y="192" width="80" height="120" />
      <path d="M168 232h80" />

      {/* Armchair */}
      <path d="M28 250c-6-58 16-82 48-82h72c34 0 52 26 50 70" />
      <path d="M22 262c0-16 14-22 30-22h132c18 0 32 8 32 24l-4 40H30Z" />
      <path d="M50 302 38 372M200 302l12 70" />
      <path d="M60 268h132" />

      {/* Floor line */}
      <path d="M10 372h660" />
    </svg>
  );
}

export default function FinZoraHero() {
  const { hero } = siteData;
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#fde0ea] via-[#fff1ec] to-[#fde0ec]"
    >
      <div className="mx-auto grid min-h-[560px] max-w-[1600px] items-center gap-6 px-5 py-12 sm:px-8 lg:min-h-[calc(100svh-96px)] lg:grid-cols-[1fr_1.05fr] lg:gap-[2vw] lg:px-[5.5vw] lg:py-0">
        {/* Left: text */}
        <div className="hero-enter-left relative z-10 flex flex-col items-start">
          <h1 className="text-[48px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#14162b]">
            {hero.title}
            <span className="block">
              for <span className="text-[#d9002b]">{hero.highlight}</span>{" "}
              {hero.suffix}
            </span>
          </h1>

          <p className="mt-7 max-w-[560px] text-[17px] leading-[1.65] text-[#2c3a4a] sm:text-[22px]">
            {hero.description}
            <br className="hidden sm:block" /> {hero.secondLine}
          </p>
        </div>

        {/* Right: family image + doodles */}
        <div className="hero-enter-right relative mx-auto h-[360px] w-full max-w-[640px] sm:h-[460px] lg:mx-0 lg:h-[min(520px,calc(100svh-160px))] lg:max-w-none">
          <HomeDoodles />

          <Image
            src={hero.image}
            alt={hero.imageAlt}
            fill
            priority
            sizes="(max-width: 1024px) 90vw, 700px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
