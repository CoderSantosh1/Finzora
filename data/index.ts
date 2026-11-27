export type NavigationItem = {
  label: string;
  href: string;
  id: string;
};

export type Service = {
  title: string;
  accent?: string;
  description: string;
  image: string;
  /** Image has its own opaque background: feather its edges into the section */
  blendEdges?: boolean;
};

export type Benefit = {
  title: string[];
  description: string;
  icon: string;
};

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type ContactDetail = {
  title: string;
  lines: string[];
  icon: string;
};

export type SocialLink = {
  label: string;
  href: string;
  icon: string;
};

export type SiteData = {
  metadata: {
    title: string;
    description: string;
  };
  common: {
    site: {
      name: string;
      logo: string;
      whiteLogo: string;
      tagline: string;
      description: string;
      phone: string;
      phoneHref: string;
      email: string;
      emailHref: string;
      contactButtonLabel: string;
      menuOpenLabel: string;
      menuCloseLabel: string;
      mainNavigationLabel: string;
      mobileNavigationLabel: string;
    };
  };
  navigation: NavigationItem[];
  hero: {
    title: string;
    highlight: string;
    description: string;
    secondLine: string;
    suffix: string;
    image: string;
    imageAlt: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    titleLine: string;
    description: string;
    image: string;
    imageAlt: string;
    points: string[];
    stats: { label: string; secondLine: string }[];
    reviews: { title: string[]; value: string };
    statSuffix: string;
  };
  services: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    titleSuffix: string;
    description: string;
    items: Service[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    secondLinePrefix: string;
    highlight: string;
    description: string;
    image: string;
    imageAlt: string;
    benefits: Benefit[];
  };
  loanCalculator: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    amountLabel: string;
    tenureLabel: string;
    interestLabel: string;
    monthlyEmiLabel: string;
    totalInterestLabel: string;
    totalPayableLabel: string;
    buttonLabel: string;
    yearLabel: string;
    yearsLabel: string;
    monthLabel: string;
    amountSummaryLabel: string;
    interestRateSuffix: string;
    currencySymbol: string;
  };
  testimonials: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    items: Testimonial[];
    chooseLabel: string;
    ratingLabel: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    titleLine: string;
    highlight: string;
    description: string;
    image: string;
    imageAlt: string;
    items: FAQItem[];
  };
  contact: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    formTitle: string;
    formHighlight: string;
    submitLabel: string;
    image: string;
    imageAlt: string;
    details: ContactDetail[];
    loanTypes: string[];
    fields: {
      name: string;
      email: string;
      phone: string;
      message: string;
      sending: string;
      success: string;
      loanType: string;
    };
  };
  footer: {
    description: string;
    phone: string;
    phoneHref: string;
    phoneDescription: string;
    hours: string;
    weekend: string;
    copyright: string;
    linksLeft: NavigationItem[];
    linksRight: NavigationItem[];
    socials: SocialLink[];
    backToTopLabel: string;
  };
};
