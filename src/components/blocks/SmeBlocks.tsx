import type { ElementType } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckIcon, trackRecordProjects } from "@/lib/platform-data";

export function PageHero({ eyebrow, title, description, primary = true }: { eyebrow?: string; title: string; description: string; primary?: boolean }) {
  return (
    <section className="relative overflow-hidden bg-[#17191d] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.16),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />
      <div className="content-container relative py-20 md:py-28">
        <div className="max-w-4xl">
          {eyebrow && <p className="text-eyebrow mb-4">{eyebrow}</p>}
          <h1 className="text-display text-balance text-white">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/72 md:text-xl">{description}</p>
          {primary && (
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button variant="accent" size="lg" asChild><Link to="/request-access">Request Access</Link></Button>
              <Button variant="outline" size="lg" className="border-white/25 bg-white/5 text-white hover:bg-white hover:text-[#17191d]" asChild><Link to="/platform">View Platform</Link></Button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function CardGrid({ items, columns = 3 }: { items: Array<{ icon?: ElementType; title: string; description: string }>; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-4 ${columns === 2 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3"}`}>
      {items.map((item) => (
        <article key={item.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
          {item.icon && <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-accent/15 text-accent"><item.icon className="h-5 w-5" /></div>}
          <h3 className="text-lg font-semibold">{item.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
        </article>
      ))}
    </div>
  );
}

export function ChecklistPanel({ items }: { items: string[] }) {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className="flex gap-3 rounded-xl border border-border bg-card p-4">
          <CheckIcon className="mt-0.5 h-5 w-5 flex-none text-accent" />
          <span className="text-sm font-medium leading-relaxed">{item}</span>
        </div>
      ))}
    </div>
  );
}

export function TrackRecord() {
  return (
    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {trackRecordProjects.map((project) => {
        const hasLink = project.link.startsWith("http");
        const Card = (
          <article className="group flex min-h-[28rem] flex-col justify-between rounded-2xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-xl">
            <div>
              <div className="mb-5 rounded-xl border border-border bg-[linear-gradient(135deg,hsl(var(--muted)),hsl(var(--card)))] p-3">
                <div className="flex h-28 items-end justify-between rounded-lg border border-dashed border-muted-foreground/30 bg-background/60 p-3">
                  <span className="max-w-[9rem] text-xs font-semibold uppercase tracking-widest text-muted-foreground">{project.visual}</span>
                  <span className="rounded-full bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent">{project.status}</span>
                </div>
              </div>
              <p className="text-xs font-semibold uppercase tracking-widest text-accent">{project.category}</p>
              <h3 className="mt-3 text-lg font-semibold leading-tight">{project.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{project.description}</p>
            </div>
            <span className="mt-6 text-sm font-semibold text-accent group-hover:text-foreground">{project.ctaLabel}</span>
          </article>
        );

        return hasLink ? (
          <a key={project.name} href={project.link} target="_blank" rel="noreferrer" className="block">
            {Card}
          </a>
        ) : (
          <div key={project.name} className="block" aria-label={`${project.name}: add real project link`}>
            {Card}
          </div>
        );
      })}
    </div>
  );
}
