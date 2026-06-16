import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/SmeBlocks";
import { seo } from "@/lib/site-config";

export default function About() {
  return (
    <PageLayout>
      <SEO {...seo.about} />
      <PageHero eyebrow="About" title="Built from real Caribbean business needs." description="Bahamas AI Solutions, led by Amar Pearson, works with Caribbean businesses to build practical websites, web apps, and automations. This platform expands that practical work into a regional system for SME identity, records, reporting, and investment readiness." />
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-3xl border border-border bg-card p-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Founder</p>
            <h2 className="mt-3 text-3xl font-bold">Amar Pearson</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">Founder-led through Bahamas AI Solutions, with a focus on practical systems for Caribbean operators.</p>
          </div>
          <div className="rounded-3xl border border-border bg-muted p-8 md:p-10">
            <p className="text-sm font-semibold uppercase tracking-widest text-accent">Founder note</p>
            <blockquote className="mt-4 text-2xl font-semibold leading-snug text-foreground">We believe many Caribbean businesses do not lack potential. They lack visibility, structure, and funder-ready information. This platform is being built to close that gap.</blockquote>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
}
