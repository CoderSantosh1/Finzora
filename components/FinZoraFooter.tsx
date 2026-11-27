import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;
const { linksLeft, linksRight } = siteData.footer;

const socialIcons: ReactNode[] = [
    (
      <svg key="Facebook" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M13.500 21v-7.500h2.600l.4-3h-3V8.600c0-.9.3-1.500 1.600-1.500h1.500V4.400c-.3 0-1.200-.1-2.200-.1-2.300 0-3.900 1.400-3.900 4v2.200H8v3h2.500V21h3Z" />
      </svg>
    ),
    (
      <svg key="X" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M17.800 3h3.100l-6.800 7.700L22 21h-6.200l-4.900-6.300L5.300 21H2.200l7.300-8.300L2 3h6.400l4.400 5.800L17.800 3Zm-1.100 16.200h1.700L7.400 4.700H5.600l11.100 14.500Z" />
      </svg>
    ),
    (
      <svg key="LinkedIn" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2.800 6.200V18h2.600V9.200H6.800ZM8.100 5.800a1.500 1.500 0 1 0 0 3 1.500 1.500 0 0 0 0-3ZM11 9.200V18h2.600v-4.600c0-1.200.6-2 1.700-2s1.500.8 1.500 2V18h2.600v-5.200c0-2.300-1.200-3.800-3.200-3.800-1.100 0-1.900.5-2.300 1.200V9.200H11Z" />
      </svg>
    ),
    (
      <svg key="YouTube" viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
        <path d="M21.600 7.200a2.500 2.500 0 0 0-1.800-1.800C18.200 5 12 5 12 5s-6.200 0-7.800.4A2.500 2.500 0 0 0 2.400 7.200C2 8.800 2 12 2 12s0 3.200.4 4.800a2.500 2.500 0 0 0 1.800 1.800C5.800 19 12 19 12 19s6.200 0 7.800-.4a2.500 2.500 0 0 0 1.800-1.800c.4-1.600.4-4.800.4-4.800s0-3.200-.4-4.800ZM10 15V9l5.200 3L10 15Z" />
      </svg>
    ),
    (
      <svg key="Instagram" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.200">
        <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.200" cy="6.800" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
];
const socials = siteData.footer.socials.map((social, index) => ({
  ...social,
  icon: socialIcons[index],
}));

function FooterLink({ label, href }: { label: string; href: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group flex items-center gap-2.5 text-[15px] text-white transition-colors hover:text-[#ff4d6d] sm:text-[16px]"
      >
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 shrink-0 text-[#e0102f]" fill="none">
          <path d="m9 5 7 7-7 7" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {label}
      </Link>
    </li>
  );
}

export default function FinZoraFooter() {

  return (
    <footer className="relative isolate overflow-hidden bg-[#0e1526] text-white">
      {/* Soft diagonal shape in the background */}
      <div
        aria-hidden="true"
        className="absolute -right-[6%] -top-[40%] -z-10 h-[190%] w-[26%] rotate-[24deg] bg-white/[0.035]"
      />

      <div className="mx-auto max-w-[1500px] px-5 sm:px-8 lg:px-[3.5vw]">
        {/* Top */}
        <div className="grid gap-8 py-9 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1.15fr] lg:gap-0">
          {/* Brand */}
          <div className="lg:pr-[2.5vw]">
            <Link
              href="#home"
              aria-label={`${siteData.common.site.name} Financial Solutions`}
              className="inline-block"
            >
              <Image
                src={siteData.common.site.whiteLogo}
                alt={`${siteData.common.site.name} Financial Solutions`}
                width={260}
                height={80}
                className="h-[58px] w-auto sm:h-[66px]"
              />
            </Link>
            <p className="mt-4 max-w-[290px] text-[15px] leading-[1.45] text-white sm:text-[17px]">
              {siteData.footer.description}
            </p>
          </div>

          {/* Contact */}
          <div className="flex flex-col justify-center gap-5 lg:border-l lg:border-white/20 lg:px-[2.5vw]">
            <a href={siteData.footer.phoneHref} className="flex items-center gap-4">
              <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-[8px] bg-[#e0102f]">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                  <path d="M6.600 10.800a15 15 0 0 0 6.600 6.600l2.200-2.200a1 1 0 0 1 1-.25 11.400 11.400 0 0 0 3.600.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.500a1 1 0 0 1 1 1c0 1.300.2 2.500.6 3.600a1 1 0 0 1-.25 1l-2.250 2.200Z" />
                </svg>
              </span>
              <span>
                <span className="block text-[18px] font-bold sm:text-[20px]">
                  {siteData.footer.phone}
                </span>
                <span className="block text-[13px] text-white/85">
                  {siteData.footer.phoneDescription}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4">
              <span className="grid h-[36px] w-[36px] shrink-0 place-items-center rounded-[8px] bg-[#e0102f]">
                <svg viewBox="0 0 24 24" className="h-[20px] w-[20px]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7v5l3 2" />
                </svg>
              </span>
              <span>
                <span className="block text-[16px] font-bold sm:text-[18px]">
                  {siteData.footer.hours}
                </span>
                <span className="block text-[13px] text-white/85">
                  {siteData.footer.weekend}
                </span>
              </span>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-4 md:col-span-2 lg:col-span-1 lg:border-l lg:border-white/20 lg:pl-[2.5vw]">
            <ul className="space-y-3">
              {linksLeft.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </ul>
            <ul className="space-y-3">
              {linksRight.map((l) => (
                <FooterLink key={l.label} {...l} />
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 bg-[#0b1120]/70">
        <div className="mx-auto flex max-w-[1500px] flex-col items-center justify-between gap-4 px-5 py-4 sm:px-8 md:flex-row lg:px-[3.5vw]">
          <p className="text-center text-[13px] text-white sm:text-[15px]">
            {siteData.footer.copyright}
          </p>

          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex items-center gap-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} (opens in a new tab)`}
                  className="grid h-[30px] w-[30px] place-items-center rounded-full border border-white/50 text-white transition hover:border-[#e0102f] hover:bg-[#e0102f]"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <span aria-hidden="true" className="mx-1 hidden h-[30px] w-px bg-white/30 sm:block" />

            <Link
              href="#home"
              aria-label={siteData.footer.backToTopLabel}
              className="grid h-[38px] w-[38px] place-items-center rounded-[6px] bg-[#e0102f] text-white shadow-[0_6px_14px_rgba(224,16,47,0.35)] transition hover:bg-[#c20c28]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none">
                <path d="m6 14 6-6 6 6" stroke="currentColor" strokeWidth="2.800" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
