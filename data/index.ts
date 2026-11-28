import finzoraData from "./finzora.json";

export type RawFinZoraData = typeof finzoraData;

const sec = finzoraData.FinZoraFinance.sections;

export type FinZoraBrandData = typeof sec.Brand.variants.FinZoraBrand1;
export type FinZoraHeaderData = typeof sec.Header.variants.FinZoraHeader1;
export type FinZoraBannerData = typeof sec.Banner.variants.FinZoraBanner1;
export type FinZoraAboutData = typeof sec.AboutSection.variants.FinZoraAbout1;
export type FinZoraServicesData = typeof sec.Services.variants.FinZoraServices1;
export type FinZoraWhyChooseUsData = typeof sec.WhyChooseUs.variants.FinZoraWhyChooseUs1;
export type FinZoraLoanCalculatorData = typeof sec.LoanCalculator.variants.FinZoraLoanCalculator1;
export type FinZoraTestimonialData = typeof sec.Testimonial.variants.FinZoraTestimonial1;
export type FinZoraFAQData = typeof sec.FAQ.variants.FinZoraFAQ1;
export type FinZoraContactData = typeof sec.ContactSection.variants.FinZoraContact1;
export type FinZoraFooterData = typeof sec.Footer.variants.FinZoraFooter1;

/** One service row. `accent` and `blendEdges` are optional, so they are declared here. */
export type FinZoraServiceItem = {
  id: string;
  title: string;
  /** Optional second line of the heading, shown in red */
  accent?: string;
  description: string;
  image: string;
  /** Image has its own opaque background: feather its edges into the section */
  blendEdges?: boolean;
};

export const site = {
  brand: sec.Brand.variants.FinZoraBrand1,
  header: sec.Header.variants.FinZoraHeader1,
  banner: sec.Banner.variants.FinZoraBanner1,
  about: sec.AboutSection.variants.FinZoraAbout1,
  services: sec.Services.variants.FinZoraServices1,
  whyUs: sec.WhyChooseUs.variants.FinZoraWhyChooseUs1,
  loanCalculator: sec.LoanCalculator.variants.FinZoraLoanCalculator1,
  testimonials: sec.Testimonial.variants.FinZoraTestimonial1,
  faq: sec.FAQ.variants.FinZoraFAQ1,
  contact: sec.ContactSection.variants.FinZoraContact1,
  footer: sec.Footer.variants.FinZoraFooter1,
};

export default finzoraData;
