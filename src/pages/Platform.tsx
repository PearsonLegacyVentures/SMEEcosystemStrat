import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ChecklistPanel, PageHero } from "@/components/blocks/SmeBlocks";
import { platformModules, readinessFactors } from "@/lib/platform-data";
import { seo } from "@/lib/site-config";

export default function Platform() {
  return (
    <PageLayout>
      <SEO {...seo.platform} />
      <PageHero eyebrow="Platform" title="The platform" description="A practical workspace for Caribbean SMEs to build a digital identity, organize their records, prepare investor materials, and share funder-ready information." />
      <Section>
        <div className="grid gap-5 lg:grid-cols-3">
          {platformModules.map((module) => (
            <article key={module.title} className="rounded-2xl border border-border bg-card p-6">
              <module.icon className="mb-5 h-6 w-6 text-accent" />
              <h2 className="text-xl font-semibold">{module.title}</h2>
              <div className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
                <p><strong className="text-foreground">What it is: </strong>{module.what}</p>
                <p><strong className="text-foreground">Why it matters: </strong>{module.why}</p>
                <p><strong className="text-foreground">What it produces: </strong>{module.output}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section variant="muted">
        <SectionHeading heading="How the readiness score could work" description="The readiness score is not a credit score. It measures preparation quality across the areas that help an SME become easier to understand, review, and support." />
        <ChecklistPanel items={readinessFactors} />
      </Section>
    </PageLayout>
  );
}
