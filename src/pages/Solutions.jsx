import React from "react";
import SectionLabel from "../components/site/SectionLabel";
import FinalCTA from "../components/home/FinalCTA";
import CTAButton from "../components/site/CTAButton";
import {
  ShoppingCart, DollarSign, Cpu, Building2, Scale, UserCheck, ArrowRight,
} from "lucide-react";

const useCases = [
  {
    id: "procurement",
    icon: ShoppingCart,
    label: "Procurement governance",
    title: "Every agent-initiated PO, governed before it's placed.",
    body: "Extend procurement policy from the intake form into the agent itself. Catch off-contract spend, unknown vendors, and category drift at the moment of intent — not in next quarter's audit.",
    outcomes: ["Off-contract spend ↓ 74%", "Rogue vendor blocks ↑ 12×", "Policy coverage 100%"],
  },
  {
    id: "finance",
    icon: DollarSign,
    label: "Finance controls",
    title: "Machine-speed controls for machine-speed spend.",
    body: "Treasury, AP, and FP&A teams gain real-time visibility and enforcement over autonomous outflows. Budget guardrails, duplicate detection, and month-end assurance — without adding headcount.",
    outcomes: ["Budget breaches ↓ 91%", "Days-to-close ↓ 3.2d", "Duplicate payments ↓ 100%"],
  },
  {
    id: "security",
    icon: Cpu,
    label: "AI agent transaction oversight",
    title: "Observability and enforcement for every transacting agent.",
    body: "Security teams get a unified view of every transacting agent across the enterprise — with detection for prompt injection, credential abuse, and behavior drift, and enforcement at the protocol edge.",
    outcomes: ["Prompt-injection defense", "Credential scope limits", "Agent behavior baselines"],
  },
  {
    id: "vendor",
    icon: Building2,
    label: "Vendor risk prevention",
    title: "Stop unknown vendors from becoming paid vendors.",
    body: "Continuous vendor trust scoring — identity, history, network signals — blocks first-payment fraud and synthetic vendor attacks before a single dollar leaves the building.",
    outcomes: ["First-payment fraud ↓ 96%", "Synthetic vendor detection", "Network-informed scoring"],
  },
  {
    id: "policy",
    icon: Scale,
    label: "Policy enforcement before payment",
    title: "Turn written policy into enforced policy.",
    body: "Codify procurement, finance, and security policy as machine-enforceable rules. Simulate changes in shadow mode. Deploy to production with versioning and instant rollback.",
    outcomes: ["Policy-as-code", "Shadow mode simulation", "Instant rollback"],
  },
  {
    id: "review",
    icon: UserCheck,
    label: "Human-in-the-loop escalation",
    title: "Humans where they add value. Machines where they scale.",
    body: "Route the transactions that matter to the right approver with full agent context and policy trail. Approve, escalate, or block in a single click — from Slack, email, or the Auzaar console.",
    outcomes: ["SLA-aware routing", "Context-rich approvals", "Slack · Email · Console"],
  },
];

export default function Solutions() {
  return (
    <>
      <section className="relative hairline-b">
        <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16">
          <SectionLabel>Solutions</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(2.25rem,5vw,4rem)] font-bold text-white leading-[1.05] tracking-tight max-w-4xl text-balance">
            Built for the teams responsible when agents transact.
          </h1>
          <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl">
            One platform. Six enterprise-grade use cases. Each mapped to the leaders who own
            the outcome when autonomous transactions succeed — or go wrong.
          </p>
        </div>
      </section>

      <section className="relative py-20 lg:py-24 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 space-y-5">
          {useCases.map((u, i) => (
            <div
              id={u.id}
              key={u.id}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start p-7 lg:p-10 rounded-xl border border-border/70 bg-card scanner-line kinetic-ease transition-all hover:border-primary/30"
            >
              <div className="lg:col-span-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                    <u.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="mono-label text-muted-foreground">USE CASE · {String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="mt-5 mono-label text-primary">{u.label}</div>
              </div>
              <div className="lg:col-span-5">
                <h2 className="font-display text-2xl lg:text-3xl font-semibold text-white leading-tight tracking-tight text-balance">
                  {u.title}
                </h2>
                <p className="mt-4 text-muted-foreground leading-[1.6]">{u.body}</p>
              </div>
              <div className="lg:col-span-3 flex flex-col gap-2">
                {u.outcomes.map((o) => (
                  <div key={o} className="p-3 rounded-md border border-border/70 bg-obsidian/40">
                    <div className="mono-label text-phosphor">OUTCOME</div>
                    <div className="mt-1 text-sm text-white">{o}</div>
                  </div>
                ))}
                <CTAButton to="/request-demo" variant="outline" size="sm" icon="right" className="mt-2 w-full">
                  See it in action
                </CTAButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}