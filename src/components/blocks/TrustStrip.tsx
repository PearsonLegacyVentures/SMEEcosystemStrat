import { Section } from "@/components/layout/Section";

const defaultItems = ["SME profiles", "Financial records", "Forecasts", "Investor reports", "Data rooms"];

interface TrustStripProps {
  label?: string;
  brands?: string[];
}

export function TrustStrip({ label = "Built around practical SME readiness", brands = defaultItems }: TrustStripProps) {
  return (
    <Section className="!py-12 md:!py-16">
      <p className="mb-8 text-center text-sm font-medium text-muted-foreground">{label}</p>
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
        {brands.map((brand) => (
          <span key={brand} className="text-base font-semibold tracking-tight text-muted-foreground/70">
            {brand}
          </span>
        ))}
      </div>
    </Section>
  );
}
