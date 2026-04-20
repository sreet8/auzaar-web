import React from "react";
import { PanelHeader } from "./DashboardView";
import { Check, X, ArrowUpRight, Lock } from "lucide-react";

const audit = [
  { t: "14:32:08.214", actor: "auzaar/gateway", action: "POLICY_EVAL", target: "TX-8931", result: "APPROVED", hash: "0x9a4e…c781" },
  { t: "14:31:52.802", actor: "priya.ramanathan@…", action: "HUMAN_APPROVE", target: "TX-8921", result: "APPROVED", hash: "0x2f8d…b441" },
  { t: "14:31:41.319", actor: "auzaar/gateway", action: "POLICY_EVAL", target: "TX-8912", result: "BLOCKED", hash: "0x71c2…9f08" },
  { t: "14:31:29.660", actor: "auzaar/gateway", action: "POLICY_EVAL", target: "TX-8910", result: "APPROVED", hash: "0xa3b1…2e59" },
  { t: "14:30:48.102", actor: "marcus.reyes@…", action: "HUMAN_ESCALATE", target: "TX-8904", result: "ESCALATED", hash: "0x44de…1ab7" },
  { t: "14:29:14.771", actor: "auzaar/policy", action: "RULE_UPDATE", target: "R-0418", result: "DEPLOYED", hash: "0xeb29…8c6d" },
];

const iconFor = (r) =>
  r === "APPROVED" ? { Icon: Check, tone: "text-phosphor" } :
  r === "BLOCKED" ? { Icon: X, tone: "text-ember" } :
  r === "ESCALATED" ? { Icon: ArrowUpRight, tone: "text-primary" } :
  { Icon: Lock, tone: "text-muted-foreground" };

export default function AuditView() {
  return (
    <div className="space-y-5">
      <PanelHeader
        title="Audit Trail"
        subtitle="An immutable, cryptographically signed record of every agent transaction, policy decision, and human action."
      />

      <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
        <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <Lock className="h-3.5 w-3.5 text-primary" />
            <span className="mono-label text-muted-foreground">TAMPER-EVIDENT LEDGER · 24H</span>
          </div>
          <span className="mono-label text-phosphor">SIGNED · VERIFIED</span>
        </div>
        <div className="divide-y divide-border/60">
          <div className="hidden md:grid grid-cols-12 px-5 py-2.5 bg-white/[0.02]">
            <span className="col-span-2 mono-label text-muted-foreground">TIMESTAMP</span>
            <span className="col-span-3 mono-label text-muted-foreground">ACTOR</span>
            <span className="col-span-2 mono-label text-muted-foreground">ACTION</span>
            <span className="col-span-2 mono-label text-muted-foreground">TARGET</span>
            <span className="col-span-1 mono-label text-muted-foreground">RESULT</span>
            <span className="col-span-2 mono-label text-muted-foreground text-right">HASH</span>
          </div>
          {audit.map((a, i) => {
            const { Icon, tone } = iconFor(a.result);
            return (
              <div key={i} className="grid grid-cols-12 items-center gap-3 px-5 py-3 scanner-line kinetic-ease transition-colors hover:bg-white/[0.02]">
                <span className="col-span-12 md:col-span-2 mono-label text-muted-foreground">{a.t}</span>
                <span className="col-span-6 md:col-span-3 text-xs font-mono text-white truncate">{a.actor}</span>
                <span className="col-span-6 md:col-span-2 mono-label text-primary">{a.action}</span>
                <span className="col-span-6 md:col-span-2 text-xs font-mono text-white">{a.target}</span>
                <span className={`col-span-3 md:col-span-1 flex items-center gap-1 ${tone}`}>
                  <Icon className="h-3 w-3" />
                  <span className="mono-label">{a.result}</span>
                </span>
                <span className="col-span-3 md:col-span-2 mono-label text-muted-foreground text-right truncate">{a.hash}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}