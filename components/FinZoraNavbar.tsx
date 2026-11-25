"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;
const navLinks = siteData.navigation;

export default function FinZoraNavbar() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Soft shadow after scrolling
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the link of the section currently in view
  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on desktop resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full bg-gradient-to-r from-[#fde0ea] via-[#fff1ec] to-[#fde3ec] transition-shadow ${
        scrolled ? "shadow-[0_6px_20px_rgba(160,20,60,0.12)]" : ""
      }`}
    >
      <div className="mx-auto flex h-[84px] max-w-[1600px] items-center justify-between px-5 sm:px-8 lg:h-[96px] lg:px-[5.5vw]">
        {/* Logo */}
        <Link href="#home" aria-label={siteData.common.site.description} className="flex shrink-0 items-center">
          <Image
            src={siteData.common.site.logo}
            alt={siteData.common.site.description}
            width={260}
            height={80}
            priority
            className="h-[56px] w-auto sm:h-[64px] lg:h-[72px]"
          />
        </Link>

        {/* Desktop nav */}
        <nav
          aria-label={siteData.common.site.mainNavigationLabel}
          className="hidden items-center gap-7 lg:flex xl:gap-[34px]"
        >
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setActive(link.id)}
                aria-current={isActive ? "page" : undefined}
                className={`relative whitespace-nowrap py-3 text-[16px] transition-colors ${
                  isActive
                    ? "font-semibold text-[#d9002b]"
                    : "font-medium text-[#14161a] hover:text-[#d9002b]"
                }`}
              >
                {link.label}
                <span
                  aria-hidden="true"
                  className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 rounded-full bg-[#d9002b] transition-all ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* CTA */}
        <Link
          href="#contact"
          className="hidden shrink-0 rounded-[8px] bg-[#d9002b] px-9 py-3.5 text-[18px] font-bold text-white shadow-[0_8px_18px_rgba(217,0,43,0.3)] transition hover:bg-[#bd0025] lg:inline-block"
        >
          {siteData.common.site.contactButtonLabel}
        </Link>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="finzora-mobile-menu"
          aria-label={
            open
              ? siteData.common.site.menuCloseLabel
              : siteData.common.site.menuOpenLabel
          }
          className="grid h-11 w-11 place-items-center rounded-md border border-[#d9002b]/30 bg-white/60 text-[#d9002b] lg:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none">
            {open ? (
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="finzora-mobile-menu"
        className={`grid overflow-hidden border-t border-[#d9002b]/10 bg-[#fff5f7] transition-all duration-300 lg:hidden ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <nav
            aria-label={siteData.common.site.mobileNavigationLabel}
            className="flex flex-col px-5 py-4 sm:px-8"
          >
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <Link
                  key={link.id}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`border-b border-[#d9002b]/10 py-3 text-[17px] ${
                    isActive
                      ? "font-semibold text-[#d9002b]"
                      : "font-medium text-[#14161a]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex items-center justify-center rounded-[8px] bg-[#d9002b] px-6 py-3 text-[17px] font-bold text-white"
            >
              {siteData.common.site.contactButtonLabel}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
