import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/layout/Section";
import { PageLayout } from "@/components/layout/PageLayout";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { CardGrid, TrackRecord } from "@/components/blocks/SmeBlocks";
import { audienceCards, overviewItems, problemCards } from "@/lib/platform-data";
import { seo } from "@/lib/site-config";

const platformCards = ["Business Profile", "Financial Snapshot", "Readiness Score", "Investor Report", "Data Room"];

export default function Home() {
  return (
    <PageLayout>
      <SEO {...seo.home} />
      <section className="relative overflow-hidden bg-[#17191d] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(245,158,11,0.16),transparent_28%),radial-gradient(circle_at_85%_10%,rgba(255,255,255,0.12),transparent_24%)]" />
        <div className="content-container relative grid gap-12 py-20 md:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="text-eyebrow mb-5">Caribbean SME Digital Identity + Investment Readiness</p>
            <h1 className="text-display text-balance text-white">Make Caribbean SMEs easier to see, measure, and fund.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">A regional platform helping businesses create digital profiles, financial records, forecasts, dashboards, investor reports, and data rooms.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="lg" asChild><Link to="/request-access">Request Access</Link></Button>
              <Button variant="outline" size="lg" className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-[#17191d]" asChild><Link to="/platform">View Platform</Link></Button>
            </div>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/62">Built from Bahamas AI Solutions by Amar Pearson to help Caribbean businesses become more organized, visible, and finance-ready.</p>
          </div>
          <div className="rounded-3xl border border-white/12 bg-white/[0.06] p-5 shadow-2xl backdrop-blur">
            <div className="rounded-2xl bg-[#202329] p-4">
              <div className="mb-4 flex items-center justify-between border-b border-white/10 pb-4"><span className="text-sm font-semibold text-white/80">Readiness workspace</span><span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-accent-foreground">In review</span></div>
              <div className="space-y-3">
                {platformCards.map((card, i) => <div key={card} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.04] p-4"><span className="font-medium">{card}</span><span className="text-sm text-white/50">0{i + 1}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <SectionHeading heading="The problem is not only access to capital. It is readiness." description="Many Caribbean SMEs are real businesses with real potential, but they are hard to fund because their records, systems, and profiles are incomplete. Lenders cannot assess what they cannot see. Investors cannot trust what they cannot verify. Governments cannot support what they cannot measure." />
        <CardGrid items={problemCards} />
      </Section>

      <Section variant="muted">
        <SectionHeading heading="One platform for business identity and investment readiness." />
        <CardGrid items={overviewItems} />
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><p className="text-eyebrow mb-4">SME Digital Identity</p><h2 className="text-headline">A digital identity for every serious Caribbean business.</h2></div>
          <p className="text-lg leading-relaxed text-muted-foreground">Each SME can maintain a verified business profile with core company details, services, documents, contact information, compliance status, and operational links.</p>
        </div>
      </Section>

      <Section variant="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div><p className="text-eyebrow mb-4">Investment Readiness</p><h2 className="text-headline">From informal records to funder-ready reports.</h2></div>
          <p className="text-lg leading-relaxed text-muted-foreground">The platform helps SMEs organize financial information, build forecasts, prepare reports, and share a structured data room with lenders, investors, grant programs, or development partners.</p>
        </div>
      </Section>

      <Section>
        <SectionHeading heading="Built for the full SME funding chain." />
        <div className="grid gap-4 lg:grid-cols-3">{audienceCards.map((audience) => <article key={audience.title} className="rounded-2xl border border-border bg-card p-7"><audience.icon className="mb-5 h-6 w-6 text-accent" /><h3 className="text-xl font-semibold">{audience.title}</h3><ul className="mt-5 space-y-3 text-sm text-muted-foreground">{audience.points.map((p) => <li key={p}>• {p}</li>)}</ul></article>)}</div>
      </Section>

      <Section variant="dark">
        <div className="mx-auto max-w-4xl text-center"><p className="text-eyebrow mb-4">Foundation</p><h2 className="text-headline text-white">Built by operators, not theorists.</h2><p className="mt-6 text-lg leading-relaxed text-white/72">Caribbean SME Readiness Platform is being developed from the practical work of Bahamas AI Solutions, a founder-led company by Amar Pearson building websites, web apps, and automations for Caribbean businesses. The platform extends that work into a larger regional infrastructure layer for SME visibility, readiness, and funding preparation.</p></div>
      </Section>

      <Section>
        <SectionHeading heading="Track Record" description="Proof cards are kept honest: real links where available, and clearly marked placeholders where verified public project links still need to be added." />
        <TrackRecord />
      </Section>

      <Section variant="dark">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"><div><h2 className="text-headline text-white">Ready to make your business easier to fund?</h2><p className="mt-4 text-white/72">Request access as an SME, funder, government agency, or development partner.</p></div><div className="flex flex-col gap-3 sm:flex-row"><Button variant="accent" asChild><Link to="/request-access">Request Access</Link></Button><Button variant="outline" className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-primary" asChild><Link to="/platform">View Platform</Link></Button></div></div>
      </Section>
    </PageLayout>
  );
}
