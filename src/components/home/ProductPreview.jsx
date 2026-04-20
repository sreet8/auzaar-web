import React from "react";
import SectionLabel from "../site/SectionLabel";
import CTAButton from "../site/CTAButton";
import { Check, AlertTriangle, X, Activity } from "lucide-react";

export default function ProductPreview() {
  return (
    <section className="relative py-24 lg:py-32 hairline-b">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionLabel>The Product</SectionLabel>
          <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
            Governance dashboard.
            <br />
            <span className="text-muted-foreground">Policy engine. Live enforcement.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl">
            A single plane for every AI agent transaction in your enterprise — with policy
            simulation, risk scoring, approval workflows, and an immutable audit trail.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Dashboard mock */}
          <div className="lg:col-span-8 relative rounded-xl border border-border/70 bg-card overflow-hidden">
            <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-ember/60" />
                  <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                  <span className="h-2.5 w-2.5 rounded-full bg-phosphor/60" />
                </div>
                <span className="mono-label text-muted-foreground">AUZAAR · GOVERNANCE DASHBOARD</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
                <span className="mono-label text-muted-foreground">LIVE</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-px bg-border/60 hairline-b">
              {[
                { l: "Transactions / 24h", v: "28,492", d: "+12.4%", tone: "phosphor" },
                { l: "Blocked", v: "142", d: "$1.82M avoided", tone: "ember" },
                { l: "Held for review", v: "37", d: "Avg. 2m 14s", tone: "cobalt" },
              ].map((s) => (
                <div key={s.l} className="p-5 bg-card">
                  <div className="mono-label text-muted-foreground">{s.l}</div>
                  <div className="mt-2 font-display text-2xl font-bold text-white">{s.v}</div>
                  <div className={`mt-1 text-xs ${s.tone === "ember" ? "text-ember" : s.tone === "phosphor" ? "text-phosphor" : "text-primary"}`}>
                    {s.d}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-5">
              <div className="flex items-center justify-between mb-3">
                <span className="mono-label text-muted-foreground">LIVE TRANSACTION FEED</span>
                <span className="mono-label text-muted-foreground">POLICY v3.2</span>
              </div>
              <div className="space-y-2">
                {feed.map((f, i) => (
                  <FeedRow key={i} {...f} />
                ))}
              </div>
            </div>
          </div>

          {/* Policy simulator */}
          <div className="lg:col-span-4 rounded-xl border border-border/70 bg-card overflow-hidden">
            <div className="hairline-b px-5 py-3 bg-white/[0.02]">
              <span className="mono-label text-muted-foreground">POLICY ENGINE · SIMULATOR</span>
            </div>
            <div className="p-5 space-y-3">
              {rules.map((r, i) => (
                <div key={i} className="p-3 rounded-md border border-border/60 bg-obsidian/60">
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-muted-foreground">RULE · {r.id}</span>
                    <span className={`mono-label ${r.active ? "text-phosphor" : "text-muted-foreground"}`}>
                      {r.active ? "ACTIVE" : "PAUSED"}
                    </span>
                  </div>
                  <p className="mt-2 text-[13px] text-foreground/90 leading-snug">{r.text}</p>
                </div>
              ))}
              <div className="pt-2">
                <CTAButton to="/product" variant="outline" size="sm" icon="right" className="w-full">
                  Explore the platform
                </CTAButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeedRow({ vendor, agent, amount, status, reason }) {
  const map = {
    APPROVED: { icon: Check, tone: "text-phosphor bg-phosphor/10 border-phosphor/30" },
    REVIEW: { icon: AlertTriangle, tone: "text-ember bg-ember/10 border-ember/30" },
    BLOCKED: { icon: X, tone: "text-ember bg-ember/10 border-ember/30" },
  };
  const S = map[status];
  return (
    <div className="grid grid-cols-12 items-center gap-3 px-3 py-2.5 rounded-md border border-border/60 bg-obsidian/40 scanner-line">
      <div className="col-span-4 flex items-center gap-2 min-w-0">
        <Activity className="h-3.5 w-3.5 text-muted-foreground shrink-0" />
        <span className="text-sm text-white truncate">{vendor}</span>
      </div>
      <span className="col-span-3 mono-label text-muted-foreground truncate">{agent}</span>
      <span className="col-span-2 text-sm font-mono text-white text-right">{amount}</span>
      <span className={`col-span-3 inline-flex items-center gap-1.5 px-2 py-1 rounded border mono-label justify-end ${S.tone}`}>
        <S.icon className="h-3 w-3" /> {status}
      </span>
      {reason && <span className="col-span-12 text-xs text-muted-foreground pl-6">→ {reason}</span>}
    </div>
  );
}

const feed = [
  { vendor: "Acme Logistics Inc.", agent: "agent-proc-07", amount: "$12,480", status: "APPROVED" },
  { vendor: "Nexus Cloud Services", agent: "agent-eng-02", amount: "$48,200", status: "REVIEW", reason: "Amount exceeds $25k auto-approve threshold" },
  { vendor: "Unknown Vendor LLC", agent: "agent-mkt-14", amount: "$512,000", status: "BLOCKED", reason: "Vendor trust score 14/100 · new entity < 30d" },
  { vendor: "Veridian SaaS", agent: "agent-ops-03", amount: "$8,920", status: "APPROVED" },
];

const rules = [
  { id: "R-0142", active: true, text: "Block any transaction to vendors with trust score < 40 or registered < 30 days." },
  { id: "R-0098", active: true, text: "Require human approval for all single transactions > $25,000." },
  { id: "R-0211", active: true, text: "Escalate if cumulative spend per agent exceeds $100,000 / 24h." },
];