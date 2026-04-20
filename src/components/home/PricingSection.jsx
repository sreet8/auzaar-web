import React from "react";
import SectionLabel from "../site/SectionLabel";
import CTAButton from "../site/CTAButton";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Pro",
    price: "$2,500",
    period: "/month",
    volume: "5,000 transactions included",
    overage: "$1.50 per additional transaction",
    cta: "Start a pilot",
    features: [
      "Auzaar Trust Gateway",
      "Governance Dashboard",
      "Policy Engine (up to 20 rules)",
      "Vendor Trust Scoring",
      "Review Queue",
      "Audit Log export",
      "ACP · UCP · AP2 compatible",
    ],
    highlight: false,
  },
  {
    name: "Enterprise",
    price: "$25,000",
    period: "/month",
    volume: "50,000+ transactions included",
    overage: "Volume pricing available",
    cta: "Talk to sales",
    features: [
      "Everything in Pro",
      "Unlimited policy rules",
      "Cross-agent spend graph analysis",
      "Blast-radius estimation",
      "Compliance mapping (SOC 2, GDPR, ISO)",
      "SLA-backed review routing",
      "Dedicated solutions engineer",
      "Custom protocol integrations",
    ],
    highlight: true,
  },
];

export default function PricingSection() {
  return (
    <section className="relative py-24 lg:py-28 hairline-b">
      <div className="absolute inset-0 grid-protocol-fine opacity-20 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>Pricing</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            Scales with your agentic commerce adoption.
          </h2>
          <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl">
            Start with a free month-long pilot, then convert to a paid plan. Pricing scales with transaction volume as your agent deployment grows.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl">
          {plans.map((p) => (
            <div
              key={p.name}
              className={`relative p-7 rounded-xl border bg-card ${
                p.highlight ? "border-primary/60 bg-primary/5" : "border-border/70"
              }`}
            >
              {p.highlight && (
                <div className="absolute -top-3 left-6">
                  <span className="mono-label text-white bg-primary px-2.5 py-1 rounded">ENTERPRISE</span>
                </div>
              )}
              <div className="mono-label text-muted-foreground">{p.name.toUpperCase()}</div>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-4xl font-bold text-white">{p.price}</span>
                <span className="text-muted-foreground mb-1">{p.period}</span>
              </div>
              <div className="mt-2 text-sm text-muted-foreground">{p.volume}</div>
              <div className="mono-label text-muted-foreground/70 mt-1">{p.overage}</div>

              <div className="my-6 h-px bg-border/60" />

              <ul className="space-y-2.5 mb-8">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="h-4 w-4 text-phosphor mt-0.5 shrink-0" />
                    <span className="text-sm text-foreground/85">{f}</span>
                  </li>
                ))}
              </ul>

              <CTAButton
                to="/request-demo"
                variant={p.highlight ? "primary" : "ghost"}
                size="md"
                icon="right"
                className="w-full"
              >
                {p.cta}
              </CTAButton>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-muted-foreground">
          Free month-long pilot available. Contact <a href="mailto:auzaarnetworks@gmail.com" className="text-primary hover:underline">auzaarnetworks@gmail.com</a> to get started.
        </p>
      </div>
    </section>
  );
}