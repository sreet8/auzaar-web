import React, { useEffect, useState } from "react";
import { Check, AlertTriangle, X, Activity } from "lucide-react";
import { PanelHeader } from "./DashboardView";

const seed = [
  { t: "14:32:08", vendor: "Acme Logistics Inc.", agent: "agent-proc-07", amount: "$12,480", status: "APPROVED", reason: "Within contract · trust 92" },
  { t: "14:31:52", vendor: "Nexus Cloud Services", agent: "agent-eng-02", amount: "$48,200", status: "REVIEW", reason: "> $25k auto-approve threshold" },
  { t: "14:31:41", vendor: "Unknown Vendor LLC", agent: "agent-mkt-14", amount: "$512,000", status: "BLOCKED", reason: "Trust 14 · new entity < 30d" },
  { t: "14:31:29", vendor: "Veridian SaaS", agent: "agent-ops-03", amount: "$8,920", status: "APPROVED", reason: "Renewal · verified contract" },
  { t: "14:31:17", vendor: "Orion Supplies", agent: "agent-proc-07", amount: "$3,150", status: "APPROVED", reason: "Approved catalog · trust 88" },
  { t: "14:31:02", vendor: "Helix Analytics", agent: "agent-fin-05", amount: "$22,400", status: "APPROVED", reason: "Under threshold · trust 79" },
  { t: "14:30:48", vendor: "Shadow Supply Co.", agent: "agent-mkt-14", amount: "$74,000", status: "REVIEW", reason: "Behavioral anomaly · off-hours" },
];

export default function FeedView() {
  const [rows, setRows] = useState(seed);

  useEffect(() => {
    const id = setInterval(() => {
      setRows((r) => {
        const newRow = {
          ...r[Math.floor(Math.random() * r.length)],
          t: new Date().toLocaleTimeString("en-GB"),
        };
        return [newRow, ...r].slice(0, 10);
      });
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="space-y-5">
      <PanelHeader
        title="Live Transaction Feed"
        subtitle="Every agent-initiated transaction, intercepted in real time, with the decision and reasoning made transparent."
      />

      <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
        <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
            <span className="mono-label text-muted-foreground">STREAMING · POLICY v3.2</span>
          </div>
          <span className="mono-label text-muted-foreground">12,481 TXN/MIN</span>
        </div>
        <div className="divide-y divide-border/60">
          {rows.map((f, i) => (
            <FeedRow key={`${f.t}-${i}`} {...f} />
          ))}
        </div>
      </div>
    </div>
  );
}

function FeedRow({ t, vendor, agent, amount, status, reason }) {
  const map = {
    APPROVED: { icon: Check, tone: "text-phosphor bg-phosphor/10 border-phosphor/30" },
    REVIEW: { icon: AlertTriangle, tone: "text-ember bg-ember/10 border-ember/30" },
    BLOCKED: { icon: X, tone: "text-ember bg-ember/10 border-ember/30" },
  };
  const S = map[status];
  return (
    <div className="grid grid-cols-12 items-center gap-3 px-4 py-3 scanner-line kinetic-ease transition-colors hover:bg-white/[0.02]">
      <span className="col-span-2 hidden md:inline mono-label text-muted-foreground">{t}</span>
      <div className="col-span-6 md:col-span-3 flex items-center gap-2 min-w-0">
        <Activity className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
        <span className="text-sm text-white truncate">{vendor}</span>
      </div>
      <span className="col-span-3 hidden md:inline mono-label text-muted-foreground truncate">{agent}</span>
      <span className="col-span-3 md:col-span-2 text-sm font-mono text-white text-right">{amount}</span>
      <span className={`col-span-3 md:col-span-2 inline-flex items-center gap-1.5 px-2 py-1 rounded border mono-label justify-center ${S.tone}`}>
        <S.icon className="h-3 w-3" /> {status}
      </span>
      {reason && <span className="col-span-12 text-xs text-muted-foreground pl-0 md:pl-[16.66%]">→ {reason}</span>}
    </div>
  );
}