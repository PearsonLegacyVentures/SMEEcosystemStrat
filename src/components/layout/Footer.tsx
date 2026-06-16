import { Link } from "react-router-dom";
import { siteConfig } from "@/lib/site-config";

function FooterLink({ item }: { item: { label: string; href: string; external?: boolean } }) {
  if (item.external) {
    return <a href={item.href} target="_blank" rel="noreferrer" className="text-sm text-white/62 transition-colors hover:text-white">{item.label}</a>;
  }
  return <Link to={item.href} className="text-sm text-white/62 transition-colors hover:text-white">{item.label}</Link>;
}

export function Footer() {
  const groups = [
    ["Platform", siteConfig.footer.platform],
    ["Audiences", siteConfig.footer.audiences],
    ["Company", siteConfig.footer.company],
    ["Contact", siteConfig.footer.contact],
  ] as const;

  return (
    <footer className="border-t border-white/10 bg-[#17191d] text-white">
      <div className="content-container section-padding-sm">
        <div className="grid gap-10 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Link to="/" className="text-lg font-bold tracking-tight text-white">{siteConfig.name}</Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/62">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/62">Built from the practical work of Bahamas AI Solutions.</p>
          </div>
          {groups.map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold text-white">{title}</h4>
              <ul className="space-y-3">{links.map((item) => <li key={item.label}><FooterLink item={item} /></li>)}</ul>
            </div>
          ))}
        </div>
        <div className="mt-12 border-t border-white/10 pt-8 text-sm text-white/54">
          &copy; {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
