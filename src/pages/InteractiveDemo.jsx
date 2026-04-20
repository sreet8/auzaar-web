import React, { useState, useEffect, useRef } from "react";
import SectionLabel from "../components/site/SectionLabel";
import CTAButton from "../components/site/CTAButton";
import {
  LayoutDashboard, Activity, Radar, Scale, UserCheck, ScrollText,
  Check, AlertTriangle, X, Shield, ArrowUpRight, ChevronRight,
  TrendingUp, Lock, Building2, RefreshCw,
} from "lucide-react";

const TABS = [
  { id: "overview", label: "Dashboard Overview", icon: LayoutDashboard },
  { id: "feed", label: "Live Transaction Feed", icon: Activity },
  { id: "risk", label: "Risk & Compliance", icon: Radar },
  { id: "policy", label: "Policy Engine", icon: Scale },
  { id: "review", label: "Human Review Queue", icon: UserCheck },
  { id: "audit", label: "Audit Trail", icon: ScrollText },
];

export default function InteractiveDemo() {
  const [active, setActive] = useState("overview");
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const ActiveTab = views[active];

  return (
    <div className="min-h-screen">
      {/* Page header */}
      <section className="relative hairline-b">
        <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-24 pb-10">
          <SectionLabel tone="cobalt">Interactive Demo · Platform Tour</SectionLabel>
          <h1 className="mt-5 font-display text-[clamp(1.8rem,4vw,3.2rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl text-balance">
            The Auzaar Governance Platform — live simulation.
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl leading-[1.6]">
            Explore each module with realistic demo data. This is a live simulation — interact with transactions, policies, and the review queue.
          </p>
        </div>
      </section>

      <div className="max-w-[1400px] mx-auto px-4 lg:px-10 py-8 lg:py-12">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* LEFT NAV — sticky on desktop */}
          <nav className="lg:w-56 xl:w-64 shrink-0">
            {/* Mobile tab selector */}
            <div className="lg:hidden mb-4">
              <button
                onClick={() => setMobileNavOpen((v) => !v)}
                className="w-full flex items-center justify-between px-4 py-3 rounded-lg border border-border/70 bg-card text-white"
              >
                <span className="flex items-center gap-2.5 text-sm font-medium">
                  {React.createElement(TABS.find((t) => t.id === active).icon, { className: "h-4 w-4 text-primary" })}
                  {TABS.find((t) => t.id === active).label}
                </span>
                <ChevronRight className={`h-4 w-4 text-muted-foreground transition-transform ${mobileNavOpen ? "rotate-90" : ""}`} />
              </button>
              {mobileNavOpen && (
                <div className="mt-1 rounded-lg border border-border/70 bg-card overflow-hidden">
                  {TABS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => { setActive(t.id); setMobileNavOpen(false); }}
                      className={`w-full flex items-center gap-2.5 px-4 py-3 text-sm text-left kinetic-ease transition-colors ${active === t.id ? "text-white bg-primary/10" : "text-muted-foreground hover:text-white"}`}
                    >
                      <t.icon className={`h-4 w-4 ${active === t.id ? "text-primary" : ""}`} />
                      {t.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop sticky nav */}
            <div className="hidden lg:block lg:sticky lg:top-24">
              <div className="mono-label text-muted-foreground px-3 mb-4">PLATFORM MODULES</div>
              <div className="space-y-0.5">
                {TABS.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => setActive(t.id)}
                    className={`group w-full flex items-center gap-2.5 px-3 py-2.5 rounded-md text-[13px] font-medium text-left kinetic-ease transition-all ${
                      active === t.id
                        ? "bg-primary/10 text-white border border-primary/30"
                        : "text-muted-foreground hover:text-white hover:bg-white/[0.03]"
                    }`}
                  >
                    <t.icon className={`h-4 w-4 shrink-0 ${active === t.id ? "text-primary" : "text-muted-foreground group-hover:text-white"}`} />
                    {t.label}
                    {active === t.id && <ChevronRight className="h-3 w-3 text-primary ml-auto" />}
                  </button>
                ))}
              </div>

              <div className="mt-8 p-4 rounded-lg border border-border/70 bg-card">
                <div className="flex items-center gap-1.5 mb-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
                  <span className="mono-label text-muted-foreground">DEMO MODE</span>
                </div>
                <p className="text-xs text-muted-foreground leading-[1.5] mb-3">This is simulated data. Request a live walkthrough to see your environment.</p>
                <CTAButton to="/request-demo" size="sm" variant="primary" icon="right" className="w-full text-xs">
                  Request live demo
                </CTAButton>
              </div>
            </div>
          </nav>

          {/* MAIN CONTENT */}
          <div className="flex-1 min-w-0">
            <ActiveTab />
          </div>
        </div>
      </div>

      {/* End CTA */}
      <section className="hairline-t py-16">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p-8 lg:p-12 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/10 via-card to-card relative overflow-hidden">
            <div className="absolute inset-0 grid-protocol-fine opacity-20 pointer-events-none" />
            <div className="relative flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-white leading-tight tracking-tight">
                  Ready to see this in your environment?
                </h2>
                <p className="mt-3 text-muted-foreground max-w-xl leading-[1.6]">
                  Schedule a live walkthrough with our team — tailored to your agents, vendors, and policy requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <CTAButton to="/request-demo" variant="primary" size="lg">Request Live Demo</CTAButton>
                <CTAButton to="/product" variant="ghost" size="lg" icon="right">View the platform</CTAButton>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ─── VIEW COMPONENTS ─── */

function DashboardOverview() {
  return (
    <div className="space-y-5">
      <TabHeader title="Dashboard Overview" desc="Executive-level visibility across all AI agent transactions, policy decisions, and risk events in real time." />
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
        {[
          { l: "Transactions / 24h", v: "28,492", d: "+12.4%", tone: "phosphor" },
          { l: "Blocked", v: "142", d: "$1.82M avoided", tone: "ember" },
          { l: "Held for review", v: "37", d: "Avg 2m 14s", tone: "cobalt" },
          { l: "Policy coverage", v: "100%", d: "All agents enrolled", tone: "phosphor" },
        ].map((s) => (
          <div key={s.l} className="p-5 bg-card">
            <div className="mono-label text-muted-foreground">{s.l}</div>
            <div className="mt-2 font-display text-2xl font-bold text-white">{s.v}</div>
            <div className={`mt-1 text-xs ${s.tone === "ember" ? "text-ember" : s.tone === "phosphor" ? "text-phosphor" : "text-primary"}`}>{s.d}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="p-5 rounded-xl border border-border/70 bg-card">
          <div className="mono-label text-muted-foreground mb-4">TOP AGENTS BY SPEND · 7D</div>
          <div className="space-y-3">
            {[
              { name: "agent-proc-07", dept: "Procurement", spend: "$128,240", pct: 78 },
              { name: "agent-eng-02", dept: "Engineering", spend: "$48,200", pct: 29 },
              { name: "agent-mkt-14", dept: "Marketing", spend: "$32,090", pct: 19 },
              { name: "agent-ops-03", dept: "Operations", spend: "$24,150", pct: 15 },
            ].map((a) => (
              <div key={a.name} className="flex items-center gap-3">
                <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <span className="mono-label text-primary">{a.name.slice(-2)}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="mono-label text-white">{a.name}</span>
                    <span className="mono-label text-muted-foreground">{a.spend}</span>
                  </div>
                  <div className="mt-1 h-1 bg-border/80 rounded-full overflow-hidden">
                    <div className="h-1 bg-primary/70 rounded-full" style={{ width: `${a.pct}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="p-5 rounded-xl border border-border/70 bg-card">
          <div className="mono-label text-muted-foreground mb-4">POLICY DECISIONS · 24H</div>
          <div className="space-y-2.5">
            {[
              { l: "Auto-approved", v: "27,840", pct: 98, tone: "phosphor" },
              { l: "Held for review", v: "511", pct: 1.8, tone: "ember" },
              { l: "Auto-blocked", v: "141", pct: 0.5, tone: "ember" },
            ].map((r) => (
              <div key={r.l}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-foreground/80">{r.l}</span>
                  <span className="mono-label text-muted-foreground">{r.v}</span>
                </div>
                <div className="h-1.5 bg-border/80 rounded-full overflow-hidden">
                  <div
                    className={`h-1.5 rounded-full ${r.tone === "phosphor" ? "bg-phosphor/70" : "bg-ember/70"}`}
                    style={{ width: `${r.pct}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LiveFeed() {
  const [feed, setFeed] = useState(INITIAL_FEED);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      const newTx = generateTx();
      setFeed((f) => [newTx, ...f.slice(0, 14)]);
      setCount((c) => c + 1);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="space-y-5">
      <TabHeader title="Live Transaction Feed" desc="Every agent-initiated transaction intent, evaluated in real time. Interact with entries to approve, escalate, or block." />
      <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
        <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
            <span className="mono-label text-muted-foreground">LIVE · INTERCEPTING TRANSACTIONS</span>
          </div>
          <span className="mono-label text-muted-foreground">{count} new since load</span>
        </div>
        <div className="p-4 space-y-2">
          {feed.slice(0, 12).map((tx) => (
            <TxCard key={tx.id} tx={tx} />
          ))}
        </div>
      </div>
    </div>
  );
}

function RiskView() {
  return (
    <div className="space-y-5">
      <TabHeader title="Risk & Compliance" desc="Composite risk scores with explainable drivers. Blast-radius modeling and compliance mapping before any transaction executes." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {riskCards.map((r) => (
          <div key={r.vendor} className={`p-5 rounded-xl border bg-card ${r.score < 40 ? "border-ember/40" : r.score < 70 ? "border-amber-500/30" : "border-phosphor/30"}`}>
            <div className="flex items-start justify-between">
              <div className="h-9 w-9 rounded-md bg-white/[0.04] border border-border/70 flex items-center justify-center">
                <Building2 className="h-4 w-4 text-muted-foreground" />
              </div>
              <div className={`mono-label ${r.score < 40 ? "text-ember" : r.score < 70 ? "text-amber-400" : "text-phosphor"}`}>
                TRUST {r.score}/100
              </div>
            </div>
            <div className="mt-4 font-display font-semibold text-white">{r.vendor}</div>
            <div className="mt-1.5 h-1.5 bg-border/80 rounded-full overflow-hidden">
              <div
                className={`h-1.5 rounded-full ${r.score < 40 ? "bg-ember" : r.score < 70 ? "bg-amber-400" : "bg-phosphor"}`}
                style={{ width: `${r.score}%` }}
              />
            </div>
            <div className="mt-4 space-y-1.5">
              {r.flags.map((f) => (
                <div key={f} className="flex items-start gap-1.5">
                  <span className="mt-0.5 h-1 w-1 rounded-full bg-ember shrink-0" />
                  <span className="text-xs text-muted-foreground">{f}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="p-6 rounded-xl border border-border/70 bg-card">
        <div className="mono-label text-muted-foreground mb-4">BLAST RADIUS ESTIMATION · PENDING REVIEW</div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { l: "Direct exposure", v: "$512,000", tone: "ember" },
            { l: "Downstream contracts", v: "$1.24M", tone: "ember" },
            { l: "Compliance impact", v: "SOC 2 · GDPR scope", tone: "amber" },
          ].map((b) => (
            <div key={b.l} className="p-4 rounded-lg border border-border/70 bg-obsidian/40">
              <div className="mono-label text-muted-foreground">{b.l}</div>
              <div className={`mt-2 font-display text-xl font-bold ${b.tone === "ember" ? "text-ember" : "text-amber-400"}`}>{b.v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function PolicyEngine() {
  const [rules, setRules] = useState(POLICY_RULES);
  const toggle = (id) => setRules((r) => r.map((p) => p.id === id ? { ...p, active: !p.active } : p));

  return (
    <div className="space-y-5">
      <TabHeader title="Policy Engine" desc="Declarative, machine-enforceable rules. Toggle rules to see how the policy set changes — this is shadow mode simulation." />
      <div className="flex items-center gap-3 px-4 py-2.5 rounded-lg border border-amber-500/20 bg-amber-500/5">
        <AlertTriangle className="h-4 w-4 text-amber-400 shrink-0" />
        <span className="text-xs text-amber-400">You are in Shadow Mode — changes here do not affect the live environment.</span>
      </div>
      <div className="space-y-3">
        {rules.map((r) => (
          <PolicyRule key={r.id} rule={r} onToggle={() => toggle(r.id)} />
        ))}
      </div>
      <div className="p-5 rounded-xl border border-border/70 bg-card">
        <div className="mono-label text-muted-foreground mb-3">POLICY COVERAGE SIMULATION</div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { l: "Rules active", v: rules.filter((r) => r.active).length, total: rules.length },
            { l: "Txns auto-blocked", v: "142", sub: "past 24h" },
            { l: "Spend protected", v: "$1.82M", sub: "past 24h" },
            { l: "Coverage", v: "100%", sub: "of agent types" },
          ].map((s) => (
            <div key={s.l} className="p-3 rounded-lg bg-obsidian/60 border border-border/60">
              <div className="mono-label text-muted-foreground">{s.l}</div>
              <div className="mt-1.5 font-display text-xl font-bold text-white">
                {s.v}{s.total ? <span className="text-muted-foreground text-sm font-normal">/{s.total}</span> : ""}
              </div>
              {s.sub && <div className="mono-label text-muted-foreground mt-0.5">{s.sub}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ReviewQueue() {
  const [items, setItems] = useState(REVIEW_ITEMS);

  const action = (id, act) => {
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, status: act } : i));
  };

  return (
    <div className="space-y-5">
      <TabHeader title="Human Review Queue" desc="Transactions that exceeded policy thresholds, routed with full context. Approve, escalate, or block with a single click." />
      <div className="space-y-3">
        {items.map((item) => (
          <ReviewItem key={item.id} item={item} onAction={action} />
        ))}
      </div>
      <div className="p-4 rounded-xl border border-border/70 bg-card flex items-center justify-between gap-4">
        <div className="mono-label text-muted-foreground">SLA: avg. response 2m 14s · 4 items resolved this session</div>
        <span className="mono-label text-phosphor">QUEUE MONITORED</span>
      </div>
    </div>
  );
}

function AuditTrail() {
  return (
    <div className="space-y-5">
      <TabHeader title="Audit Trail" desc="Immutable, chronologically ordered record of every agent decision, policy evaluation, and human action. Exportable for compliance." />
      <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
        <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
          <span className="mono-label text-muted-foreground">AUDIT LOG · LAST 24H</span>
          <button className="flex items-center gap-1.5 mono-label text-primary hover:text-primary/80 kinetic-ease transition-colors">
            <RefreshCw className="h-3 w-3" /> Export CSV
          </button>
        </div>
        <div className="divide-y divide-border/60">
          {AUDIT_LOG.map((entry, i) => (
            <div key={i} className="px-5 py-3.5 grid grid-cols-12 items-center gap-3 scanner-line hover:bg-white/[0.015]">
              <span className="col-span-3 mono-label text-muted-foreground">{entry.ts}</span>
              <span className={`col-span-2 mono-label ${entry.tone === "phosphor" ? "text-phosphor" : entry.tone === "ember" ? "text-ember" : "text-primary"}`}>
                {entry.type}
              </span>
              <span className="col-span-5 text-sm text-foreground/85 truncate">{entry.detail}</span>
              <span className="col-span-2 mono-label text-muted-foreground text-right">{entry.actor}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {["SOC 2 Export", "ISO 27001 Mapping", "GDPR Data Map"].map((b) => (
          <button key={b} className="mono-label text-muted-foreground border border-border/70 px-3 py-1.5 rounded hover:text-white hover:border-primary/40 kinetic-ease transition-all">
            {b}
          </button>
        ))}
      </div>
    </div>
  );
}

const views = {
  overview: DashboardOverview,
  feed: LiveFeed,
  risk: RiskView,
  policy: PolicyEngine,
  review: ReviewQueue,
  audit: AuditTrail,
};

/* ─── SHARED UI ─── */
function TabHeader({ title, desc }) {
  return (
    <div className="pb-4 hairline-b">
      <h2 className="font-display text-2xl font-bold text-white tracking-tight">{title}</h2>
      <p className="mt-2 text-sm text-muted-foreground leading-[1.6]">{desc}</p>
    </div>
  );
}

function TxCard({ tx }) {
  const statusMap = {
    APPROVED: { icon: Check, cls: "text-phosphor border-phosphor/30 bg-phosphor/10" },
    REVIEW: { icon: AlertTriangle, cls: "text-ember border-ember/30 bg-ember/10" },
    BLOCKED: { icon: X, cls: "text-ember border-ember/30 bg-ember/10" },
  };
  const S = statusMap[tx.status];
  return (
    <div className="grid grid-cols-12 items-start gap-3 px-4 py-3 rounded-lg border border-border/60 bg-obsidian/40 scanner-line">
      <div className="col-span-1 mt-0.5">
        <div className={`h-6 w-6 rounded-sm border flex items-center justify-center ${S.cls}`}>
          <S.icon className="h-3.5 w-3.5" />
        </div>
      </div>
      <div className="col-span-5">
        <div className="text-sm font-medium text-white">{tx.vendor}</div>
        <div className="mono-label text-muted-foreground mt-0.5">{tx.agent}</div>
      </div>
      <div className="col-span-3 text-right">
        <div className="font-mono text-sm text-white">{tx.amount}</div>
        <div className="mono-label text-muted-foreground mt-0.5">{tx.category}</div>
      </div>
      <div className="col-span-3 flex flex-col items-end gap-1">
        <span className={`mono-label px-2 py-0.5 rounded border ${S.cls}`}>{tx.status}</span>
        {tx.reason && <span className="text-xs text-muted-foreground text-right leading-snug">{tx.reason}</span>}
      </div>
    </div>
  );
}

function PolicyRule({ rule, onToggle }) {
  return (
    <div className={`p-5 rounded-xl border bg-card kinetic-ease transition-all ${rule.active ? "border-primary/30" : "border-border/60 opacity-60"}`}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="mono-label text-muted-foreground">RULE · {rule.id}</span>
            <span className={`mono-label ${rule.active ? "text-phosphor" : "text-muted-foreground"}`}>
              {rule.active ? "ACTIVE" : "PAUSED"}
            </span>
          </div>
          <p className="text-sm text-white leading-snug">{rule.text}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {rule.tags.map((t) => (
              <span key={t} className="mono-label text-muted-foreground border border-border/60 px-2 py-0.5 rounded">{t}</span>
            ))}
          </div>
        </div>
        <button
          onClick={onToggle}
          className={`relative h-6 w-11 rounded-full border kinetic-ease transition-all ${rule.active ? "bg-primary border-primary" : "bg-border/60 border-border/60"} min-h-[24px]`}
          aria-label={rule.active ? "Deactivate rule" : "Activate rule"}
        >
          <span className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow kinetic-ease transition-transform ${rule.active ? "translate-x-5" : "translate-x-0.5"}`} />
        </button>
      </div>
    </div>
  );
}

function ReviewItem({ item, onAction }) {
  const done = item.status !== "PENDING";
  return (
    <div className={`p-5 rounded-xl border bg-card kinetic-ease transition-all ${done ? "opacity-60 border-border/50" : "border-border/80"}`}>
      <div className="flex flex-col sm:flex-row sm:items-start gap-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 flex-wrap">
            <span className="font-display font-semibold text-white">{item.vendor}</span>
            <span className="font-mono text-sm text-ember">{item.amount}</span>
            <span className="mono-label text-muted-foreground">{item.agent}</span>
          </div>
          <p className="mt-2 text-xs text-muted-foreground leading-[1.5]">{item.reason}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {item.flags.map((f) => (
              <span key={f} className="mono-label text-ember border border-ember/30 bg-ember/5 px-2 py-0.5 rounded">{f}</span>
            ))}
          </div>
        </div>
        {done ? (
          <div className={`shrink-0 mono-label px-3 py-1.5 rounded border ${item.status === "APPROVED" ? "text-phosphor border-phosphor/30 bg-phosphor/10" : "text-ember border-ember/30 bg-ember/10"}`}>
            {item.status}
          </div>
        ) : (
          <div className="flex gap-2 shrink-0">
            <button onClick={() => onAction(item.id, "APPROVED")} className="px-3 py-2 rounded-md border border-phosphor/40 bg-phosphor/10 text-phosphor mono-label hover:bg-phosphor/20 kinetic-ease transition-all min-h-[44px]">
              APPROVE
            </button>
            <button onClick={() => onAction(item.id, "ESCALATED")} className="px-3 py-2 rounded-md border border-primary/40 bg-primary/10 text-primary mono-label hover:bg-primary/20 kinetic-ease transition-all min-h-[44px]">
              ESCALATE
            </button>
            <button onClick={() => onAction(item.id, "BLOCKED")} className="px-3 py-2 rounded-md border border-ember/40 bg-ember/10 text-ember mono-label hover:bg-ember/20 kinetic-ease transition-all min-h-[44px]">
              BLOCK
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── DEMO DATA ─── */
let txIdCounter = 100;

const VENDORS = ["Acme Logistics", "Nexus Cloud", "Veridian SaaS", "Orion Supplies", "Meridian Tech", "Unknown Vendor LLC", "BlueWave AI", "StratoServe", "Quantum Dynamics", "ClearPath Analytics"];
const AGENTS = ["agent-proc-07", "agent-eng-02", "agent-mkt-14", "agent-ops-03", "agent-finance-01"];
const AMOUNTS = ["$3,200", "$8,920", "$12,480", "$48,200", "$24,150", "$512,000", "$6,780", "$92,000", "$1,450", "$18,200"];
const STATUSES = ["APPROVED", "APPROVED", "APPROVED", "APPROVED", "REVIEW", "BLOCKED"];
const CATEGORIES = ["Software", "Logistics", "Cloud", "Services", "Hardware"];
const REASONS = { BLOCKED: "Vendor trust < 40 · Entity age < 30d", REVIEW: "Exceeds $25k auto-approve threshold" };

function generateTx() {
  const status = STATUSES[Math.floor(Math.random() * STATUSES.length)];
  return {
    id: ++txIdCounter,
    vendor: VENDORS[Math.floor(Math.random() * VENDORS.length)],
    agent: AGENTS[Math.floor(Math.random() * AGENTS.length)],
    amount: AMOUNTS[Math.floor(Math.random() * AMOUNTS.length)],
    category: CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)],
    status,
    reason: REASONS[status] || null,
  };
}

const INITIAL_FEED = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  vendor: VENDORS[i % VENDORS.length],
  agent: AGENTS[i % AGENTS.length],
  amount: AMOUNTS[i % AMOUNTS.length],
  category: CATEGORIES[i % CATEGORIES.length],
  status: STATUSES[i % STATUSES.length],
  reason: i % 5 === 0 ? REASONS.REVIEW : i % 7 === 0 ? REASONS.BLOCKED : null,
}));

const riskCards = [
  { vendor: "Nexus Cloud Services", score: 24, flags: ["Domain registered 14 days ago", "No prior transaction history", "Address unverifiable"] },
  { vendor: "Veridian SaaS Ltd.", score: 67, flags: ["Single invoice spike +340%", "Payments routed via 3rd party"] },
  { vendor: "Acme Logistics Inc.", score: 94, flags: ["5-year preferred vendor", "SOC 2 Type II verified"] },
];

const POLICY_RULES = [
  { id: "R-0142", active: true, text: "Block any transaction to vendors with trust score < 40 or entity age < 30 days.", tags: ["Vendor Risk", "Auto-block"] },
  { id: "R-0098", active: true, text: "Require human approval for all single transactions exceeding $25,000.", tags: ["Spend Limit", "Human Review"] },
  { id: "R-0211", active: true, text: "Escalate if cumulative per-agent spend exceeds $100,000 within any 24-hour window.", tags: ["Burst Detection", "Escalation"] },
  { id: "R-0057", active: false, text: "Block all off-hours transactions (22:00 – 06:00 local time) for procurement agents.", tags: ["Time-based", "Paused"] },
  { id: "R-0180", active: true, text: "Require dual-approval for any vendor not on the pre-approved vendor register.", tags: ["Vendor Registry", "Dual Approval"] },
];

const REVIEW_ITEMS = [
  { id: 1, vendor: "Nexus Cloud Services", amount: "$48,200", agent: "agent-eng-02", reason: "Amount exceeds $25,000 auto-approve threshold. Vendor has no prior spend history.", flags: ["Amount > $25k", "First-time vendor"], status: "PENDING" },
  { id: 2, vendor: "Unknown Vendor LLC", amount: "$512,000", agent: "agent-mkt-14", reason: "Vendor trust score 14/100. Entity registered 9 days ago. No address match.", flags: ["Trust score 14/100", "Entity age 9d", "Address mismatch"], status: "PENDING" },
  { id: 3, vendor: "Quantum Dynamics", amount: "$31,050", agent: "agent-proc-07", reason: "Category drift detected — procurement agent purchasing in 'Professional Services' for first time.", flags: ["Category drift", "Amount > $25k"], status: "PENDING" },
];

const AUDIT_LOG = [
  { ts: "08:42:17", type: "BLOCKED", detail: "Unknown Vendor LLC · $512,000 · trust score 14", actor: "Policy R-0142", tone: "ember" },
  { ts: "08:41:05", type: "APPROVED", detail: "Acme Logistics Inc. · $12,480 · auto-approved", actor: "Policy R-0001", tone: "phosphor" },
  { ts: "08:40:33", type: "REVIEWED", detail: "Nexus Cloud Services · $48,200 · held by J.Weber", actor: "human", tone: "cobalt" },
  { ts: "08:39:18", type: "APPROVED", detail: "Veridian SaaS · $8,920 · auto-approved", actor: "Policy R-0001", tone: "phosphor" },
  { ts: "08:38:52", type: "POLICY", detail: "Rule R-0098 updated — threshold changed $20k → $25k", actor: "p.ramanathan", tone: "cobalt" },
  { ts: "08:37:40", type: "BLOCKED", detail: "ClearPath Analytics · $6,780 · entity age 22d", actor: "Policy R-0142", tone: "ember" },
  { ts: "08:36:11", type: "APPROVED", detail: "StratoServe Inc. · $3,200 · auto-approved", actor: "Policy R-0001", tone: "phosphor" },
  { ts: "08:35:09", type: "ESCALATED", detail: "Quantum Dynamics · $31,050 · category drift", actor: "human", tone: "cobalt" },
];