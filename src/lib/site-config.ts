/**
 * Site Configuration
 * Caribbean SME Readiness Platform
 */

export const siteConfig = {
  name: "Caribbean SME Readiness Platform",
  shortName: "SME Readiness",
  tagline: "Digital identity and investment readiness for Caribbean businesses.",
  description:
    "A regional platform helping Caribbean SMEs create digital profiles, financial records, forecasts, dashboards, investor reports, and data rooms.",
  url: "https://caribbeansmereadiness.com",
  ogImage: "/og-image.jpg",
  contactEmail: "hello@bahamasaisolutions.com",
  nav: [
    { label: "Home", href: "/" },
    { label: "Platform", href: "/platform" },
    { label: "For SMEs", href: "/for-smes" },
    { label: "For Funders", href: "/for-funders" },
    { label: "For Governments", href: "/for-governments" },
    { label: "About", href: "/about" },
  ],
  footer: {
    platform: [
      { label: "Platform", href: "/platform" },
      { label: "Request Access", href: "/request-access" },
    ],
    audiences: [
      { label: "For SMEs", href: "/for-smes" },
      { label: "For Funders", href: "/for-funders" },
      { label: "For Governments", href: "/for-governments" },
    ],
    company: [
      { label: "About", href: "/about" },
      { label: "Bahamas AI Solutions", href: "https://bahamasaisolutions.com", external: true },
    ],
    contact: [
      { label: "Email", href: "mailto:hello@bahamasaisolutions.com", external: true },
      { label: "Request Access", href: "/request-access" },
    ],
  },
};

export const seo = {
  home: {
    title: "Caribbean SME Readiness Platform | Digital Identity + Investment Readiness",
    description:
      "A regional platform helping Caribbean SMEs create digital profiles, financial records, forecasts, dashboards, investor reports, and data rooms.",
  },
  platform: {
    title: "Platform | Caribbean SME Readiness Platform",
    description:
      "Explore the tools Caribbean SMEs can use to build digital identity, organize records, prepare financial reports, and create funder-ready data rooms.",
  },
  smes: {
    title: "For SMEs | Become Finance-Ready",
    description:
      "Tools for Caribbean SMEs to build credibility, organize records, launch online, and prepare for loans, grants, and investors.",
  },
  funders: {
    title: "For Funders | Better SME Visibility",
    description:
      "Review cleaner SME profiles, financial summaries, readiness indicators, and structured data rooms.",
  },
  governments: {
    title: "For Governments + Partners | SME Development Infrastructure",
    description:
      "Support SME digitization, investment readiness, sector visibility, and regional economic development.",
  },
  about: {
    title: "About | Built from Caribbean Business Needs",
    description:
      "Built from Bahamas AI Solutions by Amar Pearson to help Caribbean businesses become more visible, organized, and finance-ready.",
  },
  requestAccess: {
    title: "Request Access | Caribbean SME Readiness Platform",
    description:
      "Request access as an SME, funder, investor, government agency, chamber, or development partner.",
  },
};
