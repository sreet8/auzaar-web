import React from "react";
import SectionLabel from "../components/site/SectionLabel";
import FinalCTA from "../components/home/FinalCTA";

const founders = [
  {
    name: "Aryan Arun",
    role: "Co-founder & CEO",
    initials: "AA",
    tags: ["Carnegie Mellon", "CERIAS"],
    bio: "Leading Auzaar's vision to define the pre-transaction trust and control layer for agentic commerce. Background in enterprise AI and security research.",
  },
  {
    name: "Jerry Chen",
    role: "Co-founder",
    initials: "JC",
    tags: ["Disney", "Amazon"],
    bio: "Building Auzaar's core gateway architecture and agent interception protocols. Background in large-scale platform engineering.",
  },
  {
    name: "Sean Lee",
    role: "Co-founder",
    initials: "SL",
    tags: ["Tesla", "PwC"],
    bio: "Driving Auzaar's enterprise go-to-market and compliance architecture. Background in financial controls and enterprise software.",
  },
];

const institutions = ["Carnegie Mellon", "CERIAS", "Disney", "Tesla", "Amazon", "PwC"];

const roadmap = [
  {
    stage: "Stage 1",
    title: "Build the Core Gateway",
    body: "Ship the proxy layer, transaction context extraction, spending graph analysis, and approve / escalate / block workflows. Launch with 3–5 design partners.",
  },
  {
    stage: "Stage 2",
    title: "Deploy and Validate",
    body: "Go live in enterprise pilots, prove pre-transaction control, and convert early customers while refining workflows across procurement, finance, and security.",
  },
  {
    stage: "Stage 3",
    title: "Expand the Control Layer",
    body: "Add deeper spend governance, vendor trust, authority controls, and cross-agent analysis. Integrate a fine-tuned SLM into the decision workflow — enabling faster, context-aware approve / escalate / block decisions. Become the default control layer for agent-initiated commerce.",
  },
];

export default function About() {
  return (
    <>
      <section className="relative hairline-b">
        <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
          <SectionLabel>Company</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold text-white leading-[1.05] tracking-tight max-w-4xl text-balance">
            We are building the control layer that makes autonomous commerce safe, governable, and ready to scale.
          </h1>
          <p className="mt-6 text-[17px] text-muted-foreground max-w-3xl leading-[1.6]">
            Auzaar Networks was founded by operators with experience from Carnegie Mellon, CERIAS, Disney, Tesla, Amazon, and PwC. We believe the next era of commerce — agent-initiated, protocol-native, machine-speed — demands a new control plane, built from first principles for the enterprise.
          </p>
        </div>
      </section>

      {/* Founders */}
      <section className="relative py-24 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Founders</SectionLabel>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {founders.map((f) => (
              <div key={f.name} className="group p-8 rounded-xl border border-border/70 bg-card scanner-line kinetic-ease transition-all hover:border-primary/30">
                <div className="flex items-center gap-5 mb-6">
                  <div className="h-16 w-16 rounded-md bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
                    <span className="font-display font-bold text-lg text-white">{f.initials}</span>
                  </div>
                  <div>
                    <div className="font-display text-xl font-semibold text-white">{f.name}</div>
                    <div className="text-sm text-muted-foreground">{f.role}</div>
                  </div>
                </div>
                <p className="text-sm text-foreground/85 leading-[1.6]">{f.bio}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {f.tags.map((t) => (
                    <span key={t} className="mono-label text-muted-foreground border border-border/70 px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Institution strip */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <span className="mono-label text-muted-foreground">Institutional backgrounds</span>
            {institutions.map((i) => (
              <span key={i} className="mono-label text-muted-foreground/80 border border-border/60 px-2.5 py-1 rounded">{i}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Advisor */}
      <section className="relative py-20 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Advisor</SectionLabel>
          <div className="mt-8 max-w-2xl p-7 rounded-xl border border-border/70 bg-card">
            <div className="flex items-start gap-5">
              <div className="h-14 w-14 rounded-md bg-gradient-to-br from-primary/25 to-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
                <span className="font-display font-bold text-white">MG</span>
              </div>
              <div>
                <div className="font-display text-xl font-semibold text-white">Manoj Ganapathy</div>
                <div className="mt-1 text-sm text-muted-foreground">Executive Director — Consumer & GenAI Technology</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  <span className="mono-label text-muted-foreground border border-border/60 px-2 py-0.5 rounded">Wells Fargo</span>
                  <span className="mono-label text-muted-foreground border border-border/60 px-2 py-0.5 rounded">Texas McCombs School of Business</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="relative py-24 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>1-Year Roadmap</SectionLabel>
          <h2 className="mt-6 font-display text-3xl lg:text-4xl font-bold text-white tracking-tight text-balance">
            Build, Raise, Expand.
          </h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
            {roadmap.map((r, i) => (
              <div key={r.stage} className="p-7 bg-card">
                <div className="mono-label text-primary mb-3">{r.stage}</div>
                <div className="font-display text-xl font-semibold text-white mb-3">{r.title}</div>
                <p className="text-sm text-muted-foreground leading-[1.6]">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative py-24 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <SectionLabel>Operating Principles</SectionLabel>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              { t: "Infrastructure discipline", b: "We design for decade-scale systems — not quarter-scale demos." },
              { t: "Customer as co-architect", b: "Every module ships with design partners running production workloads." },
              { t: "Trust, then scale", b: "Security, auditability, and enterprise-grade from day one — not retrofitted later." },
            ].map((p) => (
              <div key={p.t} className="p-6 rounded-lg border border-border/70 bg-card">
                <div className="font-display text-lg font-semibold text-white">{p.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.6]">{p.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="relative py-20 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p-8 lg:p-12 rounded-2xl border border-primary/30 bg-card">
            <div className="mono-label text-primary mb-4">CONTACT</div>
            <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
              Get started with Auzaar Networks.
            </h2>
            <p className="mt-3 text-muted-foreground max-w-xl leading-[1.6]">
              Reach out to explore a partnership, design partnership, or enterprise pilot.
            </p>
            <a
              href="mailto:auzaarnetworks@gmail.com"
              className="mt-6 inline-flex items-center gap-2 text-primary hover:text-primary/80 font-mono text-sm kinetic-ease transition-colors"
            >
              auzaarnetworks@gmail.com →
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}