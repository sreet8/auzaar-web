import React, { useState } from "react";
import { PanelHeader } from "./DashboardView";
import { Check, X, AlertTriangle, ArrowUpRight } from "lucide-react";
import { toast } from "sonner";

const initial = [
  {
    id: "TX-8921",
    vendor: "Nexus Cloud Services",
    agent: "agent-eng-02",
    amount: "$48,200",
    risk: 42,
    reason: "Amount exceeds $25k auto-approve threshold for agent-eng-02.",
    trigger: "R-0098 · High-value human approval",
  },
  {
    id: "TX-8917",
    vendor: "Shadow Supply Co.",
    agent: "agent-mkt-14",
    amount: "$74,000",
    risk: 61,
    reason: "Behavioral anomaly: off-hours burst; vendor first-seen 18 days ago.",
    trigger: "R-0502 · After-hours scrutiny",
  },
  {
    id: "TX-8912",
    vendor: "Unknown Vendor LLC",
    agent: "agent-mkt-14",
    amount: "$512,000",
    risk: 86,
    reason: "Vendor trust 14/100 · new entity · injection signal detected.",
    trigger: "R-0142 · Block low-trust vendors",
  },
];

export default function ReviewView() {
  const [queue, setQueue] = useState(initial);
  const act = (id, label) => {
    setQueue((q) => q.filter((i) => i.id !== id));
    toast.success(`${label} · ${id}`, { description: "Decision logged to audit trail." });
  };

  return (
    <div className="space-y-5">
      <PanelHeader
        title="Human Review Queue"
        subtitle="The transactions that matter, routed to the right approver with full agent context and policy trail."
      />

      {queue.length === 0 ? (
        <div className="rounded-xl border border-phosphor/30 bg-phosphor/5 p-10 text-center">
          <Check className="h-5 w-5 text-phosphor mx-auto" />
          <p className="mt-3 text-white font-display text-lg">Queue cleared</p>
          <p className="mt-1 text-sm text-muted-foreground">All flagged transactions have been resolved. Audit records written.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {queue.map((q) => (
            <div key={q.id} className="rounded-xl border border-border/70 bg-card overflow-hidden scanner-line">
              <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-4 w-4 text-ember" />
                  <span className="mono-label text-muted-foreground">TRANSACTION · {q.id}</span>
                </div>
                <span className={`mono-label ${q.risk > 70 ? "text-ember" : "text-primary"}`}>
                  RISK {q.risk}/100
                </span>
              </div>
              <div className="p-5 grid grid-cols-1 md:grid-cols-12 gap-5 items-start">
                <div className="md:col-span-4">
                  <div className="mono-label text-muted-foreground">VENDOR</div>
                  <div className="mt-1 font-display text-lg font-semibold text-white">{q.vendor}</div>
                  <div className="mt-3 mono-label text-muted-foreground">AGENT</div>
                  <div className="mt-1 text-sm font-mono text-white">{q.agent}</div>
                </div>
                <div className="md:col-span-5">
                  <div className="mono-label text-muted-foreground">TRIGGER</div>
                  <div className="mt-1 text-sm text-primary">{q.trigger}</div>
                  <div className="mt-3 mono-label text-muted-foreground">RATIONALE</div>
                  <p className="mt-1 text-sm text-foreground/85 leading-[1.6]">{q.reason}</p>
                </div>
                <div className="md:col-span-3">
                  <div className="mono-label text-muted-foreground">AMOUNT</div>
                  <div className="mt-1 font-display text-2xl font-bold text-white">{q.amount}</div>
                  <div className="mt-4 flex flex-col gap-2">
                    <button
                      onClick={() => act(q.id, "Approved")}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md bg-phosphor/10 text-phosphor border border-phosphor/30 text-xs font-semibold hover:bg-phosphor/20 kinetic-ease transition-colors mono-label"
                    >
                      <Check className="h-3 w-3" /> APPROVE
                    </button>
                    <button
                      onClick={() => act(q.id, "Escalated")}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md bg-primary/10 text-primary border border-primary/30 text-xs font-semibold hover:bg-primary/20 kinetic-ease transition-colors mono-label"
                    >
                      <ArrowUpRight className="h-3 w-3" /> ESCALATE
                    </button>
                    <button
                      onClick={() => act(q.id, "Blocked")}
                      className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-md bg-ember/10 text-ember border border-ember/30 text-xs font-semibold hover:bg-ember/20 kinetic-ease transition-colors mono-label"
                    >
                      <X className="h-3 w-3" /> BLOCK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}