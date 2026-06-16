import { FormEvent, useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/SmeBlocks";
import { seo } from "@/lib/site-config";

const roles = ["SME", "Funder or investor", "Government or development partner", "Chamber / association", "Advisor", "Other"];
const interests = ["Build a business profile", "Organize records", "Prepare reports", "Create a data room", "Review SME profiles", "Explore a readiness program", "Sector-level reporting", "Partnership discussion"];
const pathways = [
  { title: "I am an SME", description: "Build a profile, organize records, prepare reports, and get funding-ready." },
  { title: "I am a funder or investor", description: "Review better-prepared SME profiles, reports, and data rooms." },
  { title: "I am a government or development partner", description: "Explore SME digitization, readiness programs, and sector-level reporting." },
];
const dataOwnershipPoints = [
  "SMEs control their own information",
  "Review access should be permission-based",
  "Private records should not be sold",
  "Aggregated insights should never expose individual businesses without consent",
  "Data rooms should be shared only with approved reviewers",
];

export default function RequestAccess() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return (
    <PageLayout>
      <SEO {...seo.requestAccess} />
      <PageHero eyebrow="Request Access" title="Request Access" description="Tell us who you are and what you need to prepare, review, or support. This is an access request only, not a document upload or funding application." primary={false} />
      <Section>
        <div className="grid gap-4 lg:grid-cols-3">
          {pathways.map((pathway) => (
            <article key={pathway.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h2 className="text-xl font-semibold">{pathway.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{pathway.description}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section variant="muted">
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="rounded-2xl bg-muted p-8 text-center"><h2 className="text-2xl font-semibold">Thank you.</h2><p className="mt-3 text-muted-foreground">Your request has been received. We will review it and follow up.</p></div>
          ) : (
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="fullName" label="Full name" />
                <Field id="organization" label="Business / organization" />
                <Field id="country" label="Country" />
                <Field id="email" label="Email" type="email" />
                <Field id="phone" label="Phone / WhatsApp" />
                <div><label htmlFor="role" className="mb-2 block text-sm font-medium">I am a</label><select id="role" className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{roles.map((role) => <option key={role}>{role}</option>)}</select></div>
              </div>
              <div><label htmlFor="interest" className="mb-2 block text-sm font-medium">Main interest</label><select id="interest" className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{interests.map((interest) => <option key={interest}>{interest}</option>)}</select></div>
              <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label><Textarea id="message" rows={5} placeholder="Tell us what you are trying to prepare, review, or support." /></div>
              <p className="rounded-xl border border-border bg-muted p-4 text-sm leading-relaxed text-muted-foreground">By submitting this form, you agree to be contacted about the Caribbean SME Readiness Platform. Do not submit confidential financial documents through this form.</p>
              <Button variant="hero" type="submit" className="w-full sm:w-auto">Request Access</Button>
            </form>
          )}
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
    </PageLayout>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label><Input id={id} type={type} /></div>;
}
