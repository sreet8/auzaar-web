import React from "react";
import SectionLabel from "../site/SectionLabel";

const moat = [
  {
    num: "1",
    title: "Early Category Positioning",
    body: "We are building early in a new control layer for agent-initiated commerce, giving us the chance to shape how enterprises govern autonomous spend before the market crowds.",
  },
  {
    num: "2",
    title: "Proprietary Decision Data",
    body: "Every transaction, deviation, and human review strengthens a unique dataset for governing agent-initiated spend — a flywheel competitors cannot replicate.",
  },
  {
    num: "3",
    title: "Embedded in Financial Controls",
    body: "Once Auzaar sits in the approval path for agent-initiated spend, replacing it means rewiring policies, approvals, exception routing, and audit workflows across teams.",
  },
];

export default function MoatSection() {
  return (
    <section className="relative py-24 lg:py-28 hairline-b">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel tone="cobalt">The Moat</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            Building at the intersection of AI autonomy and enterprise financial controls.
          </h2>
          <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl">
            A new category with compounding defensibility.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {moat.map((m) => (
            <div key={m.num} className="p-7 bg-card scanner-line kinetic-ease transition-all hover:bg-white/[0.02]">
              <div className="h-8 w-8 rounded-sm bg-primary/10 border border-primary/30 flex items-center justify-center mb-5">
                <span className="font-display font-bold text-primary">{m.num}</span>
              </div>
              <div className="font-display text-xl font-semibold text-white">{m.title}</div>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.6]">{m.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}