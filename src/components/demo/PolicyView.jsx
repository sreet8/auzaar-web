import React, { useState } from "react";
import { PanelHeader } from "./DashboardView";
import { Scale, Play, GitBranch } from "lucide-react";

const rules = [
  { id: "R-0142", name: "Block low-trust vendors", active: true, body: "Block any transaction to vendors with trust_score < 40 OR registered_days < 30." },
  { id: "R-0098", name: "High-value human approval", active: true, body: "Require human approval for transactions where amount > $25,000." },
  { id: "R-0211", name: "Agent burst containment", active: true, body: "Escalate when cumulative_spend_per_agent > $100,000 in rolling 24h." },
  { id: "R-0304", name: "Off-contract prevention", active: true, body: "Block purchases where category ∉ approved_catalogs[business_unit]." },
  { id: "R-0418", name: "Prompt-injection shield", active: true, body: "Escalate if vendor-supplied text contains injection signals (score > 0.7)." },
  { id: "R-0502", name: "After-hours scrutiny", active: false, body: "Require approval for transactions outside 06:00–22:00 business hours." },
];

export default function PolicyView() {
  const [selected, setSelected] = useState(rules[0].id);
  const rule = rules.find((r) => r.id === selected);

  return (
    <div className="space-y-5">
      <PanelHeader
        title="Policy Engine"
        subtitle="Codify procurement, finance, and security policy as machine-enforceable rules — with shadow mode, versioning, and instant rollback."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
        <div className="lg:col-span-2 rounded-xl border border-border/70 bg-card overflow-hidden">
          <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
            <span className="mono-label text-muted-foreground">ACTIVE RULES · v3.2</span>
            <span className="mono-label text-phosphor">{rules.filter(r => r.active).length} LIVE</span>
          </div>
          <div className="p-2 max-h-[420px] overflow-auto">
            {rules.map((r) => (
              <button
                key={r.id}
                onClick={() => setSelected(r.id)}
                className={`w-full text-left p-3 rounded-md kinetic-ease transition-all border ${
                  selected === r.id ? "border-primary/40 bg-primary/5" : "border-transparent hover:bg-white/[0.02]"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="mono-label text-muted-foreground">{r.id}</span>
                  <span className={`mono-label ${r.active ? "text-phosphor" : "text-muted-foreground/60"}`}>
                    {r.active ? "ACTIVE" : "PAUSED"}
                  </span>
                </div>
                <div className="mt-1.5 text-sm text-white">{r.name}</div>
              </button>
            ))}
          </div>
        </div>

        <div className="lg:col-span-3 rounded-xl border border-border/70 bg-card overflow-hidden">
          <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
            <div className="flex items-center gap-2">
              <Scale className="h-3.5 w-3.5 text-primary" />
              <span className="mono-label text-muted-foreground">RULE · {rule.id}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="mono-label text-muted-foreground flex items-center gap-1">
                <GitBranch className="h-3 w-3" /> main
              </span>
            </div>
          </div>
          <div className="p-5 space-y-5">
            <div>
              <div className="mono-label text-muted-foreground">NAME</div>
              <div className="mt-1 font-display text-lg font-semibold text-white">{rule.name}</div>
            </div>
            <div>
              <div className="mono-label text-muted-foreground">STATEMENT</div>
              <pre className="mt-2 p-4 rounded-md bg-obsidian/80 border border-border/70 text-[13px] text-foreground/90 font-mono leading-relaxed overflow-auto">
{`rule ${rule.id} {
  when {
    ${rule.body}
  }
  then {
    action: "${rule.id === "R-0142" ? "BLOCK" : rule.id === "R-0098" ? "ESCALATE" : "ESCALATE"}"
    notify: ["procurement.ops", "finance.risk"]
  }
}`}
              </pre>
            </div>
            <div className="flex flex-col sm:flex-row gap-2">
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-primary text-white text-sm font-semibold hover:bg-primary/90 kinetic-ease transition-colors">
                <Play className="h-3.5 w-3.5" /> Simulate on 24h history
              </button>
              <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-white/[0.03] text-white text-sm font-medium border border-border/80 hover:bg-white/[0.06] kinetic-ease transition-colors">
                Deploy to shadow mode
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}