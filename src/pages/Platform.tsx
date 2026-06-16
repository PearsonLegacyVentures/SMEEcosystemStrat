import { SEO } from "@/components/SEO";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ChecklistPanel, PageHero } from "@/components/blocks/SmeBlocks";
import { platformModules, platformPreviewCards, readinessFactors } from "@/lib/platform-data";
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

      <Section variant="muted" id="platform-preview">
        <SectionHeading heading="Platform Preview" description="Static visual previews only. These cards show the kind of workspace the platform could provide; they are not live dashboards or scoring tools." />
        <div className="grid gap-5 lg:grid-cols-2">
          {platformPreviewCards.map((card, index) => (
            <article key={card.id} id={card.id} className="scroll-mt-24 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <div className="border-b border-border bg-muted/70 p-5">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">Preview 0{index + 1}</p>
                    <h2 className="mt-2 text-2xl font-semibold">{card.title}</h2>
                  </div>
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-semibold text-muted-foreground">Visual only</span>
                </div>
                <div className="mt-5 rounded-2xl border border-border bg-background p-4">
                  <div className="mb-4 flex gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                    <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-3">
                      <div className="h-16 rounded-xl bg-muted" />
                      <div className="h-10 rounded-xl bg-muted" />
                    </div>
                    <div className="space-y-3">
                      <div className="h-4 rounded-full bg-muted" />
                      <div className="h-4 w-5/6 rounded-full bg-muted" />
                      <div className="h-20 rounded-xl border border-dashed border-muted-foreground/30" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid gap-4 p-5 md:grid-cols-3">
                <PreviewDetail label="What the SME sees" text={card.what} />
                <PreviewDetail label="Why it matters" text={card.why} />
                <PreviewDetail label="What gets produced" text={card.output} />
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 rounded-3xl border border-border bg-card p-8 md:p-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-eyebrow mb-4">Data ownership</p>
            <h2 className="text-headline">SMEs should own their business data.</h2>
            <p className="mt-5 text-muted-foreground">Businesses should control the information they upload, organize, and share. The platform should help SMEs prepare and present their records, not take ownership of them.</p>
          </div>
          <ul className="grid gap-3 text-sm font-medium text-foreground sm:grid-cols-2">
            {dataOwnershipPoints.map((point) => <li key={point} className="rounded-xl border border-border bg-muted p-4">{point}</li>)}
          </ul>
        </div>
      </Section>
      <Section variant="muted">
        <SectionHeading heading="How the readiness score could work" description="The readiness score is not a credit score and does not guarantee funding. It measures preparation quality across the areas that help an SME become easier to understand, review, and support." />
        <ChecklistPanel items={readinessFactors} />
      </Section>
    </PageLayout>
  );
}


const dataOwnershipPoints = [
  "SMEs control their own information",
  "Review access should be permission-based",
  "Private records should not be sold",
  "Aggregated insights should never expose individual businesses without consent",
  "Data rooms should be shared only with approved reviewers",
];

function PreviewDetail({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-accent">{label}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
    </div>
  );
}
