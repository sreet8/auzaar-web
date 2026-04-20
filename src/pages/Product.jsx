import React from "react";
import SectionLabel from "../components/site/SectionLabel";
import CTAButton from "../components/site/CTAButton";
import FinalCTA from "../components/home/FinalCTA";
import {
  ShieldCheck, Scale, LayoutDashboard, TrendingUp, Users, BadgeCheck,
  ScrollText, Activity, Radar, GitMerge,
} from "lucide-react";

const modules = [
  {
    id: "gateway",
    num: "01",
    icon: ShieldCheck,
    title: "Auzaar Trust Gateway",
    body: "A protocol-native interception layer that sits in front of every agent endpoint. Every outbound transaction — across ACP, UCP, and AP2 — flows through policy, risk, and audit before execution.",
    points: ["Zero-trust architecture", "Sub-50ms enforcement", "Protocol-agnostic SDK"],
  },
  {
    id: "dashboard",
    num: "02",
    icon: LayoutDashboard,
    title: "Governance Dashboard",
    body: "A single pane of glass for every AI agent transaction across the enterprise. Executive roll-ups for finance and procurement. Deep drill-down for security and audit.",
    points: ["Live transaction feed", "Executive KPIs", "Role-based views"],
  },
  {
    id: "policy",
    num: "03",
    icon: Scale,
    title: "Policy Engine",
    body: "Codify procurement, finance, and security policy as machine-enforceable rules. Version, simulate, and deploy policy safely — with a shadow mode that mirrors production without blocking.",
    points: ["Declarative rule DSL", "Shadow mode simulation", "Version control & rollback"],
  },
  {
    id: "spend",
    num: "04",
    icon: TrendingUp,
    title: "Spend Analysis",
    body: "Real-time graph analytics across agents, vendors, categories, and business units. Identify concentration risk, duplicate spend, and off-contract drift before the month closes.",
    points: ["Blast-radius modeling", "Anomaly detection", "Budget guardrails"],
  },
  {
    id: "review",
    num: "05",
    icon: Users,
    title: "Review Queue",
    body: "Human-in-the-loop escalation for the transactions that matter. Routed to the right approver with full agent context, policy decision trail, and one-click approve / escalate / block.",
    points: ["Context-rich decisions", "SLA-aware routing", "Slack & email handoff"],
  },
  {
    id: "vendor",
    num: "06",
    icon: BadgeCheck,
    title: "Vendor Trust Scoring",
    body: "Every vendor — known and unknown — continuously scored on identity, history, behavior, and risk signals. Block unknown entities before they receive their first dollar.",
    points: ["Identity verification", "Behavioral baselines", "Network-informed signals"],
  },
  {
    id: "audit",
    num: "07",
    icon: ScrollText,
    title: "Audit Log",
    body: "An immutable, cryptographically signed record of every agent transaction, policy decision, and human action. Export-ready for SOC 2, ISO, and internal audit.",
    points: ["Tamper-evident logs", "Compliance exports", "Decision replay"],
  },
  {
    id: "monitoring",
    num: "08",
    icon: Activity,
    title: "Real-time Monitoring & Enforcement",
    body: "Always-on detection tuned for agentic workflows: prompt injection, vendor spoofing, atypical amount patterns, and off-hours bursts — with machine-speed enforcement.",
    points: ["Streaming detection", "Prompt-injection defense", "Auto-remediation"],
  },
  {
    id: "risk",
    num: "09",
    icon: Radar,
    title: "Risk Scoring & Blast Radius",
    body: "Each transaction receives a composite risk score with explainable drivers. Blast-radius modeling quantifies downstream exposure before anything executes.",
    points: ["Explainable risk scores", "Downstream impact modeling", "Compliance mapping"],
  },
];

export default function Product() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden hairline-b">
        <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-8">
              <SectionLabel tone="cobalt">Platform</SectionLabel>
              <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold text-white leading-[1.05] tracking-tight text-balance">
                The control engine for every
                <br />
                <span className="text-muted-foreground">autonomous transaction.</span>
              </h1>
              <p className="mt-6 text-[17px] text-muted-foreground max-w-2xl leading-[1.6]">
                A protocol-native trust layer composed of nine production modules — from
                interception and policy to real-time enforcement, human review, and audit.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <CTAButton to="/request-demo" size="lg">Request a Demo</CTAButton>
            </div>
          </div>

          {/* Protocol stack diagram */}
          <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
            {[
              { t: "Agent Layer", s: "LLMs · Agents · Orchestrators", tone: "muted-foreground" },
              { t: "Auzaar Trust Gateway", s: "Policy · Risk · Review · Audit", tone: "primary" },
              { t: "Execution Layer", s: "ACP · UCP · AP2 · Payment rails", tone: "muted-foreground" },
            ].map((l, i) => (
              <div key={l.t} className={`relative p-6 bg-card ${i === 1 ? "bg-primary/5" : ""}`}>
                <div className={`mono-label ${i === 1 ? "text-primary" : "text-muted-foreground"}`}>LAYER · {i + 1}</div>
                <div className="mt-3 font-display text-xl font-semibold text-white">{l.t}</div>
                <div className="mt-1.5 text-sm text-muted-foreground">{l.s}</div>
                {i === 1 && (
                  <div className="absolute top-4 right-4 flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
                    <span className="mono-label text-phosphor">ACTIVE</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modules */}
      <section className="relative py-24 lg:py-28 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {modules.map((m) => (
              <div
                id={m.id}
                key={m.id}
                className="group relative p-7 lg:p-8 rounded-xl border border-border/70 bg-card scanner-line kinetic-ease transition-all hover:border-primary/40"
              >
                <div className="flex items-start justify-between">
                  <div className="h-11 w-11 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <m.icon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="mono-label text-muted-foreground">MODULE · {m.num}</span>
                </div>
                <h2 className="mt-6 font-display text-2xl font-semibold text-white">{m.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground leading-[1.6]">{m.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {m.points.map((p) => (
                    <span key={p} className="mono-label text-muted-foreground border border-border/70 px-2 py-1 rounded">
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="relative py-24 lg:py-28 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="max-w-3xl">
            <SectionLabel>How it works</SectionLabel>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
              From agent intent to governed execution — in under 50 milliseconds.
            </h2>
          </div>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-4 gap-px bg-border/60 rounded-lg overflow-hidden border border-border/60">
            {[
              { t: "Intercept", b: "Agent issues a transaction intent; Auzaar Gateway captures it before protocol handoff." },
              { t: "Extract", b: "Full commerce context extracted: vendor, amount, purpose, provenance, policy class." },
              { t: "Evaluate", b: "Policy engine + risk model + vendor trust score produce an explainable decision." },
              { t: "Enforce", b: "Approve, escalate, or block. Immutable audit record written. Outcome returned to agent." },
            ].map((s, i) => (
              <div key={s.t} className="p-6 bg-card">
                <div className="mono-label text-muted-foreground">STEP · {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-4 font-display text-xl font-semibold text-white">{s.t}</div>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.6]">{s.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}