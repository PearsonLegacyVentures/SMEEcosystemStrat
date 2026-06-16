import { FormEvent, useState } from "react";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageLayout } from "@/components/layout/PageLayout";
import { Section } from "@/components/layout/Section";
import { PageHero } from "@/components/blocks/SmeBlocks";
import { seo } from "@/lib/site-config";

const roles = ["SME", "Lender", "Investor", "Government agency", "Development partner", "Chamber / association", "Other"];
const interests = ["Digital business profile", "Website / online presence", "Payments / booking setup", "Financial statements", "Forecasts", "Investor reports", "Data room", "Government or donor partnership", "Funder access"];

export default function RequestAccess() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return (
    <PageLayout>
      <SEO {...seo.requestAccess} />
      <PageHero eyebrow="Request Access" title="Request Access" description="Request access as an SME, funder, investor, government agency, chamber, or development partner." primary={false} />
      <Section>
        <div className="mx-auto max-w-3xl rounded-3xl border border-border bg-card p-6 shadow-sm md:p-8">
          {submitted ? (
            <div className="rounded-2xl bg-muted p-8 text-center"><h2 className="text-2xl font-semibold">Thank you.</h2><p className="mt-3 text-muted-foreground">Your request has been received. We will review it and follow up.</p></div>
          ) : (
            <form className="space-y-6" onSubmit={onSubmit}>
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="fullName" label="Full name" />
                <Field id="organization" label="Business / organization name" />
                <Field id="country" label="Country" />
                <Field id="email" label="Email" type="email" />
                <Field id="phone" label="Phone / WhatsApp" />
              </div>
              <div><label htmlFor="role" className="mb-2 block text-sm font-medium">I am a</label><select id="role" className="h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">{roles.map((role) => <option key={role}>{role}</option>)}</select></div>
              <div><p className="mb-3 text-sm font-medium">What are you interested in?</p><div className="grid gap-3 sm:grid-cols-2">{interests.map((interest) => <label key={interest} className="flex gap-3 rounded-xl border border-border p-3 text-sm"><input type="checkbox" name="interest" value={interest} className="mt-0.5" />{interest}</label>)}</div></div>
              <div><label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label><Textarea id="message" rows={5} placeholder="Tell us what you are trying to prepare, review, or support." /></div>
              <Button variant="hero" type="submit" className="w-full sm:w-auto">Request Access</Button>
            </form>
          )}
        </div>
      </Section>
    </PageLayout>
  );
}

function Field({ id, label, type = "text" }: { id: string; label: string; type?: string }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-medium">{label}</label><Input id={id} type={type} /></div>;
}
