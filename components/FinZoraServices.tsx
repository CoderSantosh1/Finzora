import Image from "next/image";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;

type Service = {
  title: string;
  /** Optional second line of the heading, shown in red */
  accent?: string;
  description: string;
  image: string;
};

const services: Service[] = siteData.services.items;

export default function FinZoraServices() {
  const { services: servicesData } = siteData;
  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-gradient-to-b from-[#fde9ef] via-[#fff1f5] to-[#fde9ef] py-12 sm:py-14"
    >
      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-[3.5vw]">
        {/* Heading */}
        <div data-reveal className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-[110px] bg-[#d9002b] sm:block" />
            <span className="rounded-full bg-[#fbd9e1] px-6 py-2 text-[18px] font-bold text-[#d9002b] sm:text-[22px]">
              {servicesData.eyebrow}
            </span>
            <span className="hidden h-px w-[110px] bg-[#d9002b] sm:block" />
          </div>

          <h2 className="mt-4 text-[clamp(28px,3.4vw,50px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#14162b]">
            {servicesData.title}
            <span className="text-[#d9002b]">{servicesData.titleHighlight}</span>
            {servicesData.titleSuffix}
          </h2>

          <p className="mt-3 max-w-[820px] text-[14px] leading-[1.6] text-[#2c3340] sm:text-[18px]">
            {servicesData.description}
          </p>
        </div>

        {/* Services — stacked one below the other, layout flips each row */}
        <div className="mt-8 flex flex-col gap-12 sm:gap-16 lg:gap-10">
          {services.map((service, i) => {
            const isReversed = i % 2 === 1;

            return (
              <article
                data-reveal={i % 2 === 0 ? "left" : "right"}
                key={service.title}
                className={`grid items-center gap-8 lg:gap-[3vw] ${
                  isReversed
                    ? "lg:grid-cols-[0.95fr_1.05fr]"
                    : "lg:grid-cols-[1.05fr_0.95fr]"
                }`}
              >
                {/* Illustration */}
                <div
                  className={`relative mx-auto h-[300px] w-full max-w-[640px] sm:h-[400px] lg:mx-0 lg:h-[420px] lg:max-w-none ${
                    isReversed ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={`${service.title} illustration`}
                    fill
                    sizes="(max-width: 1024px) 90vw, 640px"
                    className="object-contain object-center"
                  />
                </div>

                {/* Text */}
                <div
                  className={`flex flex-col items-start ${
                    isReversed ? "lg:order-1 lg:pl-[2vw]" : "lg:pr-[2vw]"
                  }`}
                >
                  <h3 className="text-[clamp(30px,3.3vw,48px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-[#14162b]">
                    {service.title}
                    {service.accent && (
                      <span className="block text-[#d9002b]">
                        {service.accent}
                      </span>
                    )}
                  </h3>
                  <span className="mt-4 block h-[7px] w-[88px] rounded-full bg-[#d9002b]" />
                  <p className="mt-6 max-w-[640px] text-[15px] leading-[1.7] text-[#14162b] sm:text-[19px]">
                    {service.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
