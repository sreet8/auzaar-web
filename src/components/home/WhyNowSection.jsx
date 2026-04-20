import React from "react";
import SectionLabel from "../site/SectionLabel";

const pillars = [
  {
    label: "New Transaction Rails",
    body: "ACP, UCP, and AP2 — the core protocols enabling autonomous agent transactions — were introduced in 2024–2025. They are the TCP/IP of agentic commerce, being adopted by enterprises right now.",
  },
  {
    label: "Uncharted Governance Territory",
    body: "These powerful new protocols are months old and operate without an established governance layer. The category for trust and control is being defined today, presenting a unique opportunity.",
  },
  {
    label: "First-Mover Advantage",
    body: "Early movers who build this essential trust and control layer will set the industry standard. Just as early security companies defined enterprise security, we can shape agentic commerce before it entrenches without oversight.",
  },
];

export default function WhyNowSection() {
  return (
    <section className="relative py-24 lg:py-32 hairline-b">
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel tone="cobalt">Why Now</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            The window is open —
            <br />
            <span className="text-muted-foreground">but not forever.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl">
            The confluence of new AI agent protocols and increasing regulatory demand creates a
            fleeting opportunity to define the future of agentic commerce. The category for trust
            and control is being defined right now.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <div key={p.label} className="relative p-7 rounded-lg border border-border/70 bg-card scanner-line kinetic-ease transition-all hover:border-primary/30">
              <div className="mono-label text-primary mb-4">0{i + 1}</div>
              <div className="font-display text-xl font-semibold text-white mb-3">{p.label}</div>
              <p className="text-sm text-muted-foreground leading-[1.6]">{p.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <span className="mono-label text-muted-foreground">Protocol Compatibility</span>
          {[
            "ACP — Agent Commerce Protocol (Google)",
            "UCP — Universal Commerce Protocol (Google)",
            "AP2 — Agent Payments Protocol (Google Cloud)",
          ].map((p) => (
            <div key={p} className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-phosphor" />
              <span className="text-xs text-foreground/80">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}