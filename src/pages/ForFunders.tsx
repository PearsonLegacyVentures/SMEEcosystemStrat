import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { ChecklistPanel, PageHero } from "@/components/blocks/SmeBlocks";
import { funderSections } from "@/lib/platform-data";
import { seo } from "@/lib/site-config";

export default function ForFunders() {
  return (
    <PageLayout>
      <SEO {...seo.funders} />
      <PageHero eyebrow="For Funders" title="For lenders, investors, and grant programs" description="Review better-prepared SMEs with cleaner profiles, stronger records, and structured data rooms." />
      <Section><div className="mx-auto max-w-4xl"><p className="mb-8 text-lg leading-relaxed text-muted-foreground">The platform helps improve visibility and reduce due diligence friction. It does not remove risk or guarantee funding outcomes.</p><ChecklistPanel items={funderSections} /><div className="mt-8"><Button variant="hero" asChild><Link to="/request-access">Request Access</Link></Button></div></div></Section>
    </PageLayout>
  );
}
