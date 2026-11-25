import Image from "next/image";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-[40px] w-[40px]",
};

const features = siteData.whyUs.benefits;

export default function FinZoraWhyChooseUs() {
  const { whyUs } = siteData;
  return (
    <section
      id="why-choose-us"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff5f8] via-white to-[#fde9ef] py-10 sm:py-12"
    >
      <div className="mx-auto grid max-w-[1600px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-0 lg:px-[2.5vw]">
        {/* Left: content */}
        <div data-reveal="left" className="relative z-10 flex flex-col items-start">
          <span className="inline-flex items-center gap-2.5 rounded-full bg-[#fde2e8] px-5 py-2.5 text-[15px] font-bold text-[#14162b] sm:text-[18px]">
            <span className="h-3 w-3 rounded-full bg-[#d9002b]" />
            {whyUs.eyebrow}{" "}
            <span className="text-[#d9002b]">{siteData.common.site.name}</span>
          </span>

          <h2 className="mt-6 text-[44px] font-extrabold leading-[1.18] tracking-[-0.02em] text-[#14162b]">
            {whyUs.title}
            <span className="block">
              {whyUs.secondLinePrefix}{" "}
              <span className="text-[#d9002b] ">{whyUs.highlight}</span>
            </span>
          </h2>

          <p className="mt-5 max-w-[650px] text-[15px] leading-[1.6] text-[#2c3340] sm:text-[19px]">
            {whyUs.description}
          </p>

          {/* Feature cards */}
          <div className="mt-8 grid w-full gap-4 sm:grid-cols-3 sm:gap-[1.2vw]">
            {features.map((f) => (
              <div
                key={f.title.join(" ")}
                className="rounded-[18px] bg-white px-6 py-6 shadow-[0_8px_26px_rgba(160,20,60,0.12)]"
              >
                <span className="grid h-[66px] w-[66px] place-items-center rounded-[14px] bg-[#fde2e8] text-[#d9002b]">
                  <svg {...iconProps}>
                    {f.icon === "handshake" && (
                      <>
                        <path d="M4 20 12 13l9 3 7-3 8 3 8-3" />
                        <path d="m4 20 10 12 7 5M44 20 34 32l-7 5" />
                        <path d="m21 37 4 3a2.500 2.500 0 0 0 3.500-3.500M25 33l3.500 3.500M29 29l3.500 3.500" />
                        <path d="m18 22 9 6.500a3.500 3.500 0 0 0 4.500-1.500l3-5" />
                      </>
                    )}
                    {f.icon === "bolt" && (
                      <path d="M27 4 10 26h12l-3 18 19-24H26l1-16Z" />
                    )}
                    {f.icon === "shield" && (
                      <>
                        <path d="M24 4 8 10v12c0 10 7 18 16 22 9-4 16-12 16-22V10L24 4Z" />
                        <path d="m16.500 24 5 5 10-10" />
                      </>
                    )}
                  </svg>
                </span>
                <h3 className="mt-4 text-[22px] font-extrabold leading-[1.2] text-[#14162b] sm:text-[clamp(18px,1.6vw,24px)]">
                  {f.title[0]}
                  <br />
                  {f.title[1]}
                </h3>
                <span className="mt-3 block h-[5px] w-[48px] rounded-full bg-[#d9002b]" />
                <p className="mt-4 text-[15px] leading-[1.55] text-[#2c3340] sm:text-[clamp(14px,1.15vw,17px)]">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: red illustration panel */}
        <div data-reveal="right" className="relative mx-auto h-[360px] w-full max-w-[640px] overflow-hidden rounded-[28px] sm:h-[480px] lg:mx-0 lg:-ml-[2.5vw] lg:h-[540px] lg:max-w-none">
          <Image
            src={whyUs.image}
            alt={whyUs.imageAlt}
            fill
            sizes="(max-width: 1024px) 90vw, 640px"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
