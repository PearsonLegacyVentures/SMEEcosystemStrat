import { useState, type FormEvent } from "react";
import { Section } from "@/components/layout/Section";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/lib/site-config";

interface ContactFormProps {
  eyebrow?: string;
  heading: string;
  description?: string;
}

export function ContactForm({ eyebrow, heading, description }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow={eyebrow} heading={heading} description={description} align="left" className="mb-8" />
          <div className="space-y-6">
            <div>
              <h4 className="mb-1 text-sm font-semibold">Email</h4>
              <p className="text-sm text-muted-foreground">{siteConfig.contactEmail}</p>
            </div>
            <div>
              <h4 className="mb-1 text-sm font-semibold">Built from</h4>
              <p className="text-sm text-muted-foreground">Bahamas AI Solutions</p>
            </div>
          </div>
        </div>

        {submitted ? (
          <div className="rounded-2xl bg-muted p-8 text-center">
            <h3 className="text-2xl font-semibold">Thank you.</h3>
            <p className="mt-3 text-muted-foreground">Your request has been received. We will review it and follow up.</p>
          </div>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit}>
            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm font-medium">Full name</label>
              <Input id="name" placeholder="Your name" />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm font-medium">Email</label>
              <Input id="email" type="email" placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="company" className="mb-1.5 block text-sm font-medium">Business / organization</label>
              <Input id="company" placeholder="Your business or organization" />
            </div>
            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm font-medium">Message</label>
              <Textarea id="message" placeholder="Tell us what you are trying to prepare, review, or support." rows={5} />
            </div>
            <Button variant="hero" type="submit" className="w-full sm:w-auto">Request Access</Button>
          </form>
        )}
      </div>
    </Section>
  );
}
