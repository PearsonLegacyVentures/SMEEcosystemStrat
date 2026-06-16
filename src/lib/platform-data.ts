import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  CreditCard,
  Database,
  FileChartColumn,
  FileText,
  Globe2,
  Landmark,
  LayoutDashboard,
  LockKeyhole,
  Search,
  ShieldCheck,
  Users,
} from "lucide-react";

export const platformModules = [
  {
    icon: BriefcaseBusiness,
    title: "Business Profile",
    what: "A structured profile with company details, services, contacts, documents, compliance status, and operating links.",
    why: "Funders and partners need a clear view of what the business does and how it operates.",
    output: "A shareable SME profile that is easier to review and keep current.",
  },
  {
    icon: Globe2,
    title: "Website + Online Presence",
    what: "A professional web presence connected to the business profile and core customer actions.",
    why: "Many real businesses are difficult to find, verify, or understand online.",
    output: "A credible website or profile page with services, contact routes, and operating links.",
  },
  {
    icon: CreditCard,
    title: "Payments + Booking Setup",
    what: "Practical setup for payment links, booking flows, service requests, and customer intake.",
    why: "Revenue visibility improves when sales and bookings move through cleaner systems.",
    output: "Payment and booking workflows that support better records and customer follow-up.",
  },
  {
    icon: FileText,
    title: "Financial Statement Workspace",
    what: "A place to organize income, expenses, statements, and supporting records.",
    why: "Clear records help lenders, investors, and grant programs review the business with less back-and-forth.",
    output: "Cleaner financial summaries and documents for funding conversations.",
  },
  {
    icon: FileChartColumn,
    title: "Forecast Builder",
    what: "A guided workspace for revenue, cost, cash flow, and funding-use assumptions.",
    why: "Funders need to understand how the business plans to use money and repay or report on it.",
    output: "Simple forecasts that explain expected activity without overcomplicating the story.",
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard",
    what: "A practical view of profile status, documents, financial summaries, and readiness tasks.",
    why: "Owners and partners need a quick way to see what is complete and what still needs attention.",
    output: "A readiness dashboard for business owners, advisors, and approved reviewers.",
  },
  {
    icon: ClipboardList,
    title: "Investor Report",
    what: "A concise report that brings together the business profile, financial information, forecasts, and key documents.",
    why: "Better-prepared materials reduce confusion and make funding discussions more productive.",
    output: "A funder-ready report for lenders, investors, grant programs, or development partners.",
  },
  {
    icon: LockKeyhole,
    title: "Secure Data Room",
    what: "A controlled place to organize and share documents with approved reviewers.",
    why: "Due diligence is easier when documents are complete, current, and clearly labeled.",
    output: "A structured data room for financials, registration documents, compliance files, plans, and reports.",
  },
  {
    icon: ShieldCheck,
    title: "Readiness Score",
    what: "A preparation indicator based on profile completeness, records, digital presence, reporting quality, and data room status.",
    why: "The score helps show preparation quality. It is not a credit score and does not guarantee funding.",
    output: "A clear readiness view that helps SMEs and reviewers understand what needs improvement.",
  },
];

export const overviewItems = [
  { icon: BriefcaseBusiness, title: "Digital business profile", description: "Core company details, services, documents, contacts, compliance status, and operating links." },
  { icon: Globe2, title: "Website and online presence", description: "Credible public-facing pages that make a business easier to find and understand." },
  { icon: CalendarCheck, title: "Payments and bookings", description: "Practical customer flows that support cleaner revenue records and follow-up." },
  { icon: FileText, title: "Financial statements", description: "Organized financial records and summaries for review conversations." },
  { icon: BarChart3, title: "Forecasts and dashboards", description: "Simple planning tools and status views for owners, advisors, and approved partners." },
  { icon: ClipboardList, title: "Investor reports", description: "Structured reports that explain the business, financial position, and funding preparation." },
  { icon: Database, title: "Secure data rooms", description: "Document spaces for lenders, investors, grant programs, and development partners." },
];

export const trackRecordProjects = [
  {
    name: "Bahamas AI Solutions",
    description: "Founder-led practical website, web app, and automation work for Caribbean businesses.",
    link: "https://bahamasaisolutions.com",
    label: "Visit site",
  },
  {
    name: "Business Website Builds",
    description: "Add real project link. Use this card for a verified website build when a public link is ready.",
    link: "#",
    label: "Add real project link",
  },
  {
    name: "Booking System Builds",
    description: "Add real project link. Use this card for a verified booking workflow when approved for display.",
    link: "#",
    label: "Add real project link",
  },
  {
    name: "Payment Workflow Builds",
    description: "Add real project link. Use this card for a verified payment workflow when approved for display.",
    link: "#",
    label: "Add real project link",
  },
  {
    name: "Dashboard / Automation Builds",
    description: "Add real project link. Use this card for a verified dashboard or automation build when approved for display.",
    link: "#",
    label: "Add real project link",
  },
];

export const audienceCards = [
  { icon: Users, title: "For SMEs", points: ["Build credibility", "Organize records", "Prepare for loans, grants, and investors"] },
  { icon: Landmark, title: "For Funders", points: ["Review cleaner SME profiles", "Compare readiness", "Reduce due diligence friction"] },
  { icon: Building2, title: "For Governments and Partners", points: ["Support digitization", "Track SME readiness", "Understand sector-level gaps"] },
];

export const problemCards = [
  { icon: Search, title: "Limited visibility", description: "Many capable businesses are hard to find, verify, or explain in a consistent format." },
  { icon: FileText, title: "Weak financial records", description: "Records may exist across notebooks, spreadsheets, bank statements, and messages without a clean summary." },
  { icon: ClipboardList, title: "No investor-ready profile", description: "Funders often receive incomplete documents, unclear forecasts, and scattered supporting information." },
];

export const readinessFactors = [
  "Business profile completeness",
  "Financial records",
  "Digital presence",
  "Compliance documents",
  "Revenue visibility",
  "Reporting quality",
  "Data room completeness",
];

export const smeSections = [
  "Build your business profile",
  "Launch your online presence",
  "Set up payments and bookings",
  "Organize your financial records",
  "Prepare reports for lenders, investors, and grant programs",
  "Keep everything in one secure workspace",
];

export const funderSections = [
  "SME discovery",
  "Verified business profiles",
  "Financial summaries",
  "Forecasts",
  "Readiness score",
  "Data rooms",
  "Pipeline visibility",
];

export const governmentSections = [
  "National SME visibility",
  "Grant and loan readiness",
  "Sector-level dashboards",
  "Digital transformation support",
  "Procurement readiness",
  "Regional development reporting",
];

export const partnerTypes = [
  "Ministries",
  "Small business agencies",
  "Chambers of commerce",
  "Development banks",
  "Donor agencies",
  "Export agencies",
  "Universities and training partners",
];

export const CheckIcon = CheckCircle2;
