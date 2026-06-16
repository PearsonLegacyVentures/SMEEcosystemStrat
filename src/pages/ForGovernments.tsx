import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "@/components/blocks/SectionHeading";
import { ChecklistPanel, PageHero } from "@/components/blocks/SmeBlocks";
import { governmentSections, partnerTypes } from "@/lib/platform-data";
import { seo } from "@/lib/site-config";

export default function ForGovernments() {
  return (
    <PageLayout>
      <SEO {...seo.governments} />
      <PageHero eyebrow="For Governments + Partners" title="For governments and development partners" description="Support SME digitization, investment readiness, and better private sector data." />
      <Section><div className="mx-auto max-w-4xl"><ChecklistPanel items={governmentSections} /><div className="mt-8"><Button variant="hero" asChild><Link to="/request-access">Request Access</Link></Button></div></div></Section>
      <Section variant="muted"><SectionHeading heading="Possible partner types" /><ChecklistPanel items={partnerTypes} /></Section>
    </PageLayout>
  );
}
