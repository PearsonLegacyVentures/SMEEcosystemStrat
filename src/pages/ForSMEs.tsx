import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { ChecklistPanel, PageHero } from "@/components/blocks/SmeBlocks";
import { seo } from "@/lib/site-config";
import { smeSections } from "@/lib/platform-data";

export default function ForSMEs() {
  return (
    <PageLayout>
      <SEO {...seo.smes} />
      <PageHero eyebrow="For SMEs" title="For Caribbean SMEs" description="Look professional. Get organized. Prepare for funding." />
      <Section><div className="mx-auto max-w-4xl"><ChecklistPanel items={smeSections} /><div className="mt-8"><Button variant="hero" asChild><Link to="/request-access">Request Access</Link></Button></div></div></Section>
    </PageLayout>
  );
}
