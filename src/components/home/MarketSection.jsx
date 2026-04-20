import React from "react";
import SectionLabel from "../site/SectionLabel";

const stats = [
  { v: "$3T–$5T", l: "Global commerce could be mediated by AI agents by 2030 (goods only, excludes B2B)", src: "McKinsey · Fortune Business Insights" },
  { v: "62.2%", l: "Of enterprise spend follows approved contracts — the rest is ungoverned exposure", src: "Zycus / Ardent Partners" },
  { v: "19%", l: "Of enterprises lack one coordinated system to control purchases before execution", src: "The Hackett Group" },
  { v: "$29B", l: "Total addressable market — global business spend management software (2026)", src: "Fortune Business Insights" },
];

const tam = [
  { label: "TAM", sub: "Total Addressable Market", v: "$29B", desc: "Global business spend management software market (2026)" },
  { label: "SAM", sub: "Serviceable Addressable Market", v: "$9.9B", desc: "Global procurement software — enterprises buying tools to govern purchases before execution" },
  { label: "SOM", sub: "Year-3 Obtainable ARR", v: "$8.6M–$11.5M", desc: "120–160 enterprise customers at $72K annual ACV" },
];

export default function MarketSection() {
  return (
    <section className="relative py-24 lg:py-32 hairline-b">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel tone="cobalt">Market · Category</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            A new transaction rail needs a new trust layer.
          </h2>
          <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl">
            AI agents are becoming the new transaction layer for global commerce. The scale of this shift is enormous — and the need for governance is urgent.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {stats.map((s) => (
            <div key={s.l} className="p-7 bg-card">
              <div className="font-display text-3xl lg:text-4xl font-bold text-white tracking-tight">{s.v}</div>
              <p className="mt-3 text-sm text-foreground/90 leading-snug">{s.l}</p>
              <div className="mt-4 mono-label text-muted-foreground">{s.src}</div>
            </div>
          ))}
        </div>

        {/* TAM/SAM/SOM */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {tam.map((t, i) => (
            <div key={t.label} className={`p-6 bg-card ${i === 0 ? "" : ""}`}>
              <div className="flex items-center gap-2 mb-3">
                <span className="mono-label text-primary">{t.label}</span>
                <span className="mono-label text-muted-foreground">— {t.sub}</span>
              </div>
              <div className="font-display text-2xl font-bold text-white">{t.v}</div>
              <p className="mt-2 text-xs text-muted-foreground leading-[1.6]">{t.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 mono-label text-muted-foreground/60">
          Sources: Fortune Business Insights, Vendr, The Hackett Group / Zip (2024–2026)
        </div>
      </div>
    </section>
  );
}