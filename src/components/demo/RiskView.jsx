import React from "react";
import { PanelHeader } from "./DashboardView";
import { Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

const scores = [
  { vendor: "Acme Logistics Inc.", score: 92, factors: ["Verified identity", "4y history", "Low volatility"], tone: "phosphor" },
  { vendor: "Nexus Cloud Services", score: 68, factors: ["New category", "Amount anomaly", "Verified identity"], tone: "primary" },
  { vendor: "Unknown Vendor LLC", score: 14, factors: ["Domain < 30d", "No contract", "Prompt injection signal"], tone: "ember" },
];

const compliance = [
  { code: "SOC 2 CC6.1", label: "Logical access controls", status: "Mapped" },
  { code: "ISO 27001 A.9", label: "Access control", status: "Mapped" },
  { code: "GDPR Art. 32", label: "Security of processing", status: "Mapped" },
  { code: "SOX 404", label: "Internal controls", status: "Mapped" },
];

export default function RiskView() {
  return (
    <div className="space-y-5">
      <PanelHeader
        title="Risk & Compliance"
        subtitle="Every transaction is scored, explained, and mapped to the compliance controls it affects."
      />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {scores.map((s) => (
          <RiskCard key={s.vendor} {...s} />
        ))}
      </div>

      <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
        <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
          <span className="mono-label text-muted-foreground">COMPLIANCE MAPPING · SELECTED TRANSACTION</span>
          <span className="mono-label text-phosphor flex items-center gap-1.5">
            <CheckCircle2 className="h-3 w-3" /> 100% COVERED
          </span>
        </div>
        <div className="divide-y divide-border/60">
          {compliance.map((c) => (
            <div key={c.code} className="grid grid-cols-12 items-center gap-3 px-5 py-3">
              <span className="col-span-4 md:col-span-3 mono-label text-primary">{c.code}</span>
              <span className="col-span-5 md:col-span-7 text-sm text-white">{c.label}</span>
              <span className="col-span-3 md:col-span-2 mono-label text-phosphor text-right">{c.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function RiskCard({ vendor, score, factors, tone }) {
  const toneCls = tone === "ember" ? "text-ember border-ember/30 bg-ember/5" : tone === "phosphor" ? "text-phosphor border-phosphor/30 bg-phosphor/5" : "text-primary border-primary/30 bg-primary/5";
  const Icon = tone === "ember" ? AlertTriangle : tone === "phosphor" ? CheckCircle2 : Shield;
  return (
    <div className="rounded-xl border border-border/70 bg-card p-5 scanner-line">
      <div className="flex items-start justify-between">
        <div>
          <div className="mono-label text-muted-foreground">VENDOR</div>
          <div className="mt-1 font-display text-lg font-semibold text-white">{vendor}</div>
        </div>
        <div className={`h-10 w-10 rounded-md border flex items-center justify-center ${toneCls}`}>
          <Icon className="h-4 w-4" />
        </div>
      </div>
      <div className="mt-5">
        <div className="flex items-end justify-between mb-2">
          <span className="mono-label text-muted-foreground">TRUST SCORE</span>
          <span className={`font-display text-3xl font-bold ${tone === "ember" ? "text-ember" : tone === "phosphor" ? "text-phosphor" : "text-white"}`}>
            {score}<span className="text-muted-foreground text-base font-normal">/100</span>
          </span>
        </div>
        <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
          <div
            className={`h-full ${tone === "ember" ? "bg-ember" : tone === "phosphor" ? "bg-phosphor" : "bg-primary"}`}
            style={{ width: `${score}%` }}
          />
        </div>
      </div>
      <div className="mt-5 flex flex-wrap gap-1.5">
        {factors.map((f) => (
          <span key={f} className="mono-label text-muted-foreground border border-border/70 px-2 py-1 rounded">
            {f}
          </span>
        ))}
      </div>
    </div>
  );
}