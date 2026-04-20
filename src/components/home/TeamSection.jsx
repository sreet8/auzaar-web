import React from "react";
import SectionLabel from "../site/SectionLabel";

const founders = [
  {
    name: "Aryan Arun",
    role: "Co-founder & CEO",
    bg: "Carnegie Mellon · CERIAS",
    initials: "AA",
  },
  {
    name: "Jerry Chen",
    role: "Co-founder",
    bg: "Disney · Amazon",
    initials: "JC",
  },
  {
    name: "Sean Lee",
    role: "Co-founder",
    bg: "Tesla · PwC",
    initials: "SL",
  },
];

const institutions = ["Carnegie Mellon", "CERIAS", "Disney", "Tesla", "Amazon", "PwC"];

export default function TeamSection() {
  return (
    <section className="relative py-24 lg:py-32 hairline-b">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>Team & Credibility</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            Founders with experience from Carnegie Mellon, Disney, Tesla, Amazon, and PwC.
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
          {founders.map((m) => (
            <div key={m.name} className="p-8 bg-card scanner-line kinetic-ease transition-colors hover:bg-white/[0.02]">
              <div className="h-14 w-14 rounded-md bg-gradient-to-br from-primary/30 to-primary/5 border border-primary/20 flex items-center justify-center mb-6">
                <span className="font-display font-bold text-white text-lg">{m.initials}</span>
              </div>
              <div className="font-display text-xl font-semibold text-white">{m.name}</div>
              <div className="mt-1 text-sm text-muted-foreground">{m.role}</div>
              <div className="mt-3 mono-label text-muted-foreground/80">{m.bg}</div>
            </div>
          ))}
        </div>

        {/* Institution strip */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <span className="mono-label text-muted-foreground">Experience from</span>
          {institutions.map((i) => (
            <span key={i} className="mono-label text-muted-foreground/80 border border-border/60 px-2.5 py-1 rounded">{i}</span>
          ))}
        </div>

        {/* Advisor */}
        <div className="mt-10 p-6 rounded-xl border border-border/70 bg-card">
          <div className="mono-label text-muted-foreground mb-5">ADVISOR</div>
          <div className="flex items-start gap-5">
            <div className="h-12 w-12 rounded-md bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center shrink-0">
              <span className="font-display font-semibold text-white">MG</span>
            </div>
            <div>
              <div className="font-display text-lg font-semibold text-white">Manoj Ganapathy</div>
              <div className="mt-1 text-sm text-muted-foreground">Executive Director — Consumer & GenAI Technology</div>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="mono-label text-muted-foreground border border-border/60 px-2 py-0.5 rounded">Wells Fargo</span>
                <span className="mono-label text-muted-foreground border border-border/60 px-2 py-0.5 rounded">Texas McCombs School of Business</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}