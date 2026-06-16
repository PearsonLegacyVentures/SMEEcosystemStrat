import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#17191d]/95 text-white backdrop-blur-xl">
      <div className="content-container flex h-16 items-center justify-between">
        <Link to="/" className="max-w-[210px] text-sm font-bold leading-tight tracking-tight text-white sm:max-w-none sm:text-base">
          {siteConfig.name}
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {siteConfig.nav.map((item) => (
            <Link key={item.href} to={item.href} className={`text-sm font-medium transition-colors hover:text-white ${location.pathname === item.href ? "text-white" : "text-white/62"}`}>{item.label}</Link>
          ))}
          <Button variant="accent" size="sm" asChild><Link to="/request-access">Request Access</Link></Button>
        </nav>
        <button className="p-2 text-white lg:hidden" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">{mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}</button>
      </div>
      {mobileOpen && (
        <div className="border-t border-white/10 bg-[#17191d] lg:hidden">
          <nav className="content-container flex flex-col gap-4 py-6">
            {siteConfig.nav.map((item) => <Link key={item.href} to={item.href} onClick={() => setMobileOpen(false)} className={`text-base font-medium ${location.pathname === item.href ? "text-white" : "text-white/65"}`}>{item.label}</Link>)}
            <Button variant="accent" className="mt-2 w-full" asChild><Link to="/request-access" onClick={() => setMobileOpen(false)}>Request Access</Link></Button>
          </nav>
        </div>
      )}
    </header>
  );
}
