"use client";

import Image from "next/image";
import { useState } from "react";
import type { FormEvent, ReactNode } from "react";
import categoryData from "@/data/category.json";
import type { SiteData } from "@/data";

const siteData: SiteData = categoryData;

const iconCls = "h-[22px] w-[22px]";

const PhoneIcon = ({ className = iconCls }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.900" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 4h4l2 5-2.500 1.500a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  </svg>
);

const MailIcon = ({ className = iconCls }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.900" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3.500 7 8.500 6 8.500-6" />
  </svg>
);

const PinIcon = ({ className = iconCls }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.900" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 21s7-6.200 7-12a7 7 0 0 0-14 0c0 5.800 7 12 7 12Z" />
    <circle cx="12" cy="9" r="2.600" />
  </svg>
);

const UserIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21c0-4.400 3.600-7 8-7s8 2.600 8 7" />
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 7h.01M4 12h.01M4 17h.01M9 7h11M9 12h11M9 17h11" strokeWidth="2.200" />
  </svg>
);

const ChatIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.800" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 5h16v11H9l-5 4V5Z" />
    <path d="M8 9.500h8M8 12.500h5" />
  </svg>
);

const fieldBase =
  "w-full rounded-[10px] border border-[#ead5dc] bg-white text-[14px] text-[#14162b] placeholder:text-[#4a5160] focus:border-[#d9002b] focus:outline-none focus:ring-2 focus:ring-[#d9002b]/15 sm:text-[15px]";

function Field({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#14162b]">
        {icon}
      </span>
      {children}
    </div>
  );
}

export default function FinZoraContact() {
  const { contact } = siteData;
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 600));

    setStatus("sent");
    e.currentTarget.reset();
    setTimeout(() => setStatus("idle"), 4000);
  }

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-[#fff5f8] via-white to-[#fde9ef] py-12 sm:py-14"
    >
      <div className="mx-auto grid max-w-[1500px] items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-[3vw] lg:px-[4vw]">
        {/* Left */}
        <div data-reveal="left" className="relative flex flex-col items-start">
          <div className="flex items-center gap-4">
            <span className="hidden h-px w-[60px] bg-[#d9002b] sm:block" />
            <span className="inline-flex items-center gap-3 rounded-full bg-[#fbd9e1] py-2 pl-2.5 pr-6 text-[16px] font-bold text-[#14162b] sm:text-[19px]">
              <span className="grid h-[34px] w-[34px] place-items-center rounded-full bg-[#d9002b] text-white">
                <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor">
                  <path d="M21 3 3 10.500l6 2.500 2.500 6L21 3Zm-9.500 10 6-5.500-4.500 7-1.500-1.500Z" />
                </svg>
              </span>
              {contact.eyebrow}
            </span>
            <span className="hidden h-px w-[60px] bg-[#d9002b] sm:block" />
          </div>

          <h2 className="mt-5 text-[clamp(32px,3.6vw,54px)] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#14162b]">
            {contact.title} <span className="text-[#d9002b]">{contact.highlight}</span>
          </h2>

          <p className="mt-3 max-w-[460px] text-[15px] leading-[1.6] text-[#2c3340] sm:text-[18px]">
            {contact.description}
          </p>

          <div className="relative mt-6 w-full">
            <ul className="relative z-10 w-full max-w-[420px]">
              {contact.details.map((item, i) => (
                <li
                  key={item.title}
                  className={`flex items-center gap-4 py-4 ${
                    i > 0 ? "border-t border-[#ead5dc]" : ""
                  }`}
                >
                  <span className="grid h-[52px] w-[52px] shrink-0 place-items-center rounded-[12px] bg-[#fde2e8] text-[#d9002b]">
                    {item.icon === "phone" && <PhoneIcon className="h-6 w-6" />}
                    {item.icon === "mail" && <MailIcon className="h-6 w-6" />}
                    {item.icon === "pin" && <PinIcon className="h-6 w-6" />}
                  </span>
                  <div>
                    <p className="text-[16px] font-bold text-[#14162b] sm:text-[18px]">
                      {item.title}
                    </p>
                    {item.lines.map((line) => (
                      <p
                        key={line}
                        className="text-[14px] leading-[1.45] text-[#2c3340] sm:text-[16px]"
                      >
                        {line}
                      </p>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            {/* Illustration (house, coins, clipboard, calculator) */}
            <div className="relative mx-auto mt-4 h-[220px] w-full max-w-[360px] lg:absolute lg:bottom-0 lg:right-0 lg:mt-0 lg:h-[260px] lg:w-[48%] lg:max-w-none">
              <Image
                src={contact.image}
                alt={contact.imageAlt}
                fill
                sizes="(max-width: 1024px) 360px, 400px"
                className="object-contain object-right-bottom"
              />
            </div>
          </div>
        </div>

        {/* Right: form */}
        <form
          data-reveal="right"
          onSubmit={handleSubmit}
          className="rounded-[26px] bg-white p-6 shadow-[0_12px_40px_rgba(160,20,60,0.12)] sm:p-8"
        >
          <h3 className="text-[26px] font-extrabold tracking-[-0.01em] text-[#14162b] sm:text-[32px]">
            {contact.formTitle} <span className="text-[#d9002b]">{contact.formHighlight}</span>
          </h3>
          <div className="mt-2 flex items-center">
            <span className="h-[4px] w-[56px] rounded-full bg-[#d9002b]" />
            <span className="h-[4px] w-[44px] rounded-full bg-[#f3d6de]" />
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <Field icon={<UserIcon />}>
              <input type="text" name="name" required placeholder={contact.fields.name} className={`${fieldBase} h-[50px] pl-12 pr-4`} />
            </Field>
            <Field icon={<MailIcon className="h-5 w-5" />}>
              <input type="email" name="email" required placeholder={contact.fields.email} className={`${fieldBase} h-[50px] pl-12 pr-4`} />
            </Field>
            <Field icon={<PhoneIcon className="h-5 w-5" />}>
              <input type="tel" name="phone" required placeholder={contact.fields.phone} className={`${fieldBase} h-[50px] pl-12 pr-4`} />
            </Field>
            <Field icon={<ListIcon />}>
              <select
                name="loanType"
                required
                defaultValue=""
                className={`${fieldBase} h-[50px] appearance-none pl-12 pr-10 invalid:text-[#4a5160]`}
              >
                <option value="" disabled>
                  {contact.fields.loanType}
                </option>
                {contact.loanTypes.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))}
              </select>
              <svg viewBox="0 0 24 24" className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#14162b]" fill="none">
                <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2.200" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Field>
          </div>

          <div className="relative mt-4">
            <span className="pointer-events-none absolute left-4 top-4 text-[#14162b]">
              <ChatIcon />
            </span>
            <textarea
              name="message"
              required
              rows={4}
              placeholder={contact.fields.message}
              className={`${fieldBase} min-h-[130px] resize-y py-3.5 pl-12 pr-4`}
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-3">
            <button
              type="submit"
              disabled={status === "sending"}
              className="inline-flex items-center justify-center gap-3 rounded-[10px] bg-gradient-to-b from-[#e0102f] to-[#b8001f] px-12 py-3.5 text-[17px] font-bold text-white shadow-[0_8px_18px_rgba(217,0,43,0.3)] transition hover:brightness-110 disabled:opacity-70 sm:text-[19px]"
            >
              {status === "sending" ? contact.fields.sending : contact.submitLabel}
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M21 3 3 10.500l6 2.500 2.500 6L21 3Zm-9.500 10 6-5.500-4.500 7-1.500-1.500Z" />
              </svg>
            </button>

            {status === "sent" && (
              <p role="status" className="text-[15px] font-medium text-[#0f8a4b]">
                {contact.fields.success}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
