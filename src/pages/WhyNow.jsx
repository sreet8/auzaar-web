import React from "react";
import SectionLabel from "../components/site/SectionLabel";
import FinalCTA from "../components/home/FinalCTA";

const protocols = [
  {
    name: "ACP",
    full: "Agent Commerce Protocol",
    source: "Google",
    body: "Standardizes how autonomous agents discover, negotiate, and execute commercial transactions with merchants and vendors.",
  },
  {
    name: "UCP",
    full: "Universal Commerce Protocol",
    source: "Google",
    body: "Provides a unified schema for agent-driven purchase intent, settlement, and receipts across marketplaces.",
  },
  {
    name: "AP2",
    full: "Agent Payments Protocol",
    source: "Google Cloud",
    body: "Defines the payment authorization, delegation, and revocation model for agent-initiated money movement.",
  },
];

const gaps = [
  { t: "No pre-transaction policy engine", b: "Existing tools evaluate risk after execution — too late for agentic workflows at machine speed." },
  { t: "No vendor trust model for agents", b: "Agents cannot distinguish a ten-year supplier from a domain registered this morning." },
  { t: "No blast-radius awareness", b: "A single compromised agent can cascade through a supply chain in minutes without containment." },
  { t: "No immutable agent audit trail", b: "Boards, auditors, and regulators need evidence of governance — and that record doesn't exist yet." },
];

export default function WhyNow() {
  return (
    <>
      {/* Hero */}
      <section className="relative hairline-b">
        <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
          <SectionLabel tone="cobalt">Why Now · Category</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold text-white leading-[1.02] tracking-tight max-w-5xl text-balance">
            The window is open — but not forever.
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground max-w-3xl leading-[1.6]">
            The confluence of new AI agent protocols and increasing regulatory demand creates a fleeting opportunity to define the future of agentic commerce. ACP, UCP, and AP2 were introduced in 2024–2025 and are being adopted by enterprises right now — without a governance layer in place. Auzaar defines the trust and control layer before the market matures.
          </p>
        </div>
      </section>

      {/* 3 pillars */}
      <section className="relative py-20 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { n: "01", t: "New Transaction Rails", b: "ACP, UCP, and AP2 — the core protocols enabling autonomous agent transactions — were introduced in 2024–2025. They are the TCP/IP of agentic commerce, being adopted by enterprises right now." },
            { n: "02", t: "Uncharted Governance Territory", b: "These powerful new protocols are months old and operate without an established governance layer. The category for trust and control is being defined today, presenting a unique opportunity." },
            { n: "03", t: "First-Mover Advantage", b: "Early movers who build this essential trust and control layer will set the industry standard. Just as early security companies defined enterprise security, we can shape agentic commerce before it entrenches without oversight." },
          ].map((p) => (
            <div key={p.n} className="p-7 rounded-xl border border-border/70 bg-card scanner-line">
              <div className="mono-label text-primary mb-4">{p.n}</div>
              <div className="font-display text-xl font-semibold text-white mb-3">{p.t}</div>
              <p className="text-sm text-muted-foreground leading-[1.6]">{p.b}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market scale */}
      <section className="relative py-20 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl mb-10">
            <SectionLabel>Market Scale · 2030 Projections</SectionLabel>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
              The agentic commerce landscape.
            </h2>
            <p className="mt-3 text-muted-foreground text-sm">These figures reflect goods only and do not include services or the B2B market.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
            <div className="p-8 bg-card">
              <div className="mono-label text-muted-foreground mb-3">US B2C</div>
              <div className="font-display text-5xl font-bold text-white tracking-tight">$900B–$1T</div>
              <p className="mt-3 text-sm text-muted-foreground">in agent-mediated commerce projected by 2030</p>
            </div>
            <div className="p-8 bg-card">
              <div className="mono-label text-muted-foreground mb-3">GLOBAL B2C</div>
              <div className="font-display text-5xl font-bold text-white tracking-tight">$3T–$5T</div>
              <p className="mt-3 text-sm text-muted-foreground">in global agent-mediated commerce projected by 2030</p>
            </div>
          </div>
          <p className="mt-3 mono-label text-muted-foreground/60">Sources: McKinsey — The Agentic Commerce Opportunity</p>
        </div>
      </section>

      {/* Protocols */}
      <section className="relative py-20 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Emerging Protocols</SectionLabel>
          <h2 className="mt-6 font-display text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance max-w-3xl">
            New rails for machine-to-machine commerce.
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-[1.6]">
            ACP, UCP, and AP2 are coalescing into the HTTP of autonomous transactions. Auzaar is protocol-native to all three.
          </p>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
            {protocols.map((p) => (
              <div key={p.name} className="p-7 bg-card scanner-line">
                <div className="mono-label text-primary">PROTOCOL · {p.source}</div>
                <div className="mt-4 font-display text-4xl font-bold text-white">{p.name}</div>
                <div className="mt-1 text-sm text-muted-foreground">{p.full}</div>
                <p className="mt-4 text-sm text-foreground/80 leading-[1.6]">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Governance gap */}
      <section className="relative py-20 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionLabel tone="ember">The Governance Gap</SectionLabel>
            <h2 className="mt-6 font-display text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
              The protocols shipped. The governance didn't.
            </h2>
            <p className="mt-5 text-muted-foreground leading-[1.6]">
              Agent frameworks race ahead. Transaction rails are being written in real time. Meanwhile, the people accountable for spend, risk, and compliance have no enforceable layer between a hallucinating agent and a wire transfer.
            </p>
          </div>
          <div className="space-y-4">
            {gaps.map((g) => (
              <div key={g.t} className="p-5 rounded-lg border border-border/70 bg-card scanner-line">
                <div className="font-display font-semibold text-white">{g.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.6]">{g.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category bet */}
      <section className="relative py-20 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p-8 lg:p-12 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card relative overflow-hidden">
            <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
            <div className="relative">
              <SectionLabel tone="cobalt">The Category Bet</SectionLabel>
              <h2 className="mt-6 font-display text-3xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight max-w-4xl text-balance">
                Auzaar defines the trust layer before the market matures.
              </h2>
              <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl">
                Infrastructure categories are decided early. The companies adopting a trust and control layer today are not buying software — they are defining how agentic commerce will be governed for the next decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}