import React from "react";
import SectionLabel from "../site/SectionLabel";

// Values: "core" | "partial" | "no"
const rows = [
  {
    cap: "Intercepts agent purchases before ACP/UCP/AP2 execution",
    auzaar: "core", sec: "partial", proc: "no",
  },
  {
    cap: "Applies spend-specific rules before money moves",
    auzaar: "core", sec: "partial", proc: "partial",
  },
  {
    cap: "Detects spend deviations in autonomous transactions",
    auzaar: "core", sec: "partial", proc: "partial",
  },
  {
    cap: "Routes risky transactions for finance / procurement / security review",
    auzaar: "core", sec: "partial", proc: "core",
  },
  {
    cap: "Secures agent identity, tools, and runtime behavior",
    auzaar: "partial", sec: "core", proc: "no",
  },
  {
    cap: "Owns the pre-transaction control layer for agentic commerce",
    auzaar: "core", sec: "no", proc: "no",
  },
];

function Badge({ v }) {
  if (v === "core") return <span className="mono-label text-phosphor">Core</span>;
  if (v === "partial") return <span className="mono-label text-muted-foreground">Partial</span>;
  return <span className="mono-label text-muted-foreground/40 italic">Not positioned</span>;
}

export default function DifferentiationSection() {
  return (
    <section className="relative py-24 lg:py-32 hairline-b">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>Why Auzaar Wins</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            Adjacent vendors secure agents or orchestrate procurement.
            <br />
            <span className="text-muted-foreground">Auzaar governs autonomous spend at the moment of financial commitment.</span>
          </h2>
        </div>

        <div className="mt-14 rounded-xl border border-border/70 bg-card overflow-hidden">
          <div className="grid grid-cols-12 hairline-b bg-white/[0.02]">
            <div className="col-span-6 p-5 mono-label text-muted-foreground">CAPABILITY</div>
            <div className="col-span-2 p-5 mono-label text-primary text-center">AUZAAR</div>
            <div className="col-span-2 p-5 mono-label text-muted-foreground text-center hidden md:block">AI AGENT SECURITY</div>
            <div className="col-span-2 p-5 mono-label text-muted-foreground text-center hidden md:block">PROCUREMENT SW</div>
            <div className="col-span-4 p-5 mono-label text-muted-foreground text-center md:hidden">OTHERS</div>
          </div>
          {rows.map((r, i) => (
            <div key={r.cap} className={`grid grid-cols-12 items-center ${i !== rows.length - 1 ? "hairline-b" : ""} scanner-line kinetic-ease transition-colors hover:bg-white/[0.02]`}>
              <div className="col-span-6 p-5 text-sm text-white">{r.cap}</div>
              <div className="col-span-2 p-5 flex justify-center"><Badge v={r.auzaar} /></div>
              <div className="col-span-2 p-5 justify-center hidden md:flex"><Badge v={r.sec} /></div>
              <div className="col-span-2 p-5 justify-center hidden md:flex"><Badge v={r.proc} /></div>
              <div className="col-span-4 p-5 justify-center md:hidden flex">
                <Badge v={r.sec === "core" || r.proc === "core" ? "partial" : "no"} />
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 mono-label text-muted-foreground/60">
          AI Agent Security: Zenity, Astrix, Noma, Gravitee, Okta · Procurement Orchestration: Zip, Coupa
        </p>
      </div>
    </section>
  );
}