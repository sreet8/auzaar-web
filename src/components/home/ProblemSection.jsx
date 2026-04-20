import React from "react";
import SectionLabel from "../site/SectionLabel";
import { AlertTriangle, GitBranch, Eye, ShieldOff } from "lucide-react";

const risks = [
  {
    icon: GitBranch,
    title: "Spend can race ahead before anyone notices",
    body: "Agents can execute dozens of transactions in minutes, creating exposure long before finance or procurement sees the damage.",
  },
  {
    icon: ShieldOff,
    title: "No guardrails means no defense",
    body: "Without policy enforcement before payment, the board will ask why uncontrolled purchases were allowed to go through.",
  },
  {
    icon: AlertTriangle,
    title: "Vendor fraud and prompt injection are already in the attack path",
    body: "Autonomous agents can be manipulated into approving the wrong vendor, the wrong terms, or a fraudulent transaction.",
  },
  {
    icon: Eye,
    title: "No escalation path means no accountability",
    body: "When agents hit exceptions or high-risk decisions, there is no human checkpoint to stop the liability from landing on the enterprise.",
  },
];

export default function ProblemSection() {
  return (
    <section className="relative py-24 lg:py-32 hairline-b">
      <div className="absolute inset-0 grid-protocol-fine opacity-20 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionLabel tone="ember">The Problem</SectionLabel>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
              An AI agent just committed your company to a{" "}
              <span className="text-ember">$500,000</span> purchase.
            </h2>
            <p className="mt-6 text-muted-foreground leading-[1.6] max-w-md">
              No human approved it. No policy caught it. By the time you find out, the contract is already signed. This is not a hypothetical. It's the default state of agentic commerce today.
            </p>
            <div className="mt-8 p-5 rounded-lg border border-ember/20 bg-ember/5 hairline-t">
              <div className="mono-label text-ember mb-2">URGENT · UNGOVERNED</div>
              <p className="text-sm text-foreground/90 leading-relaxed">
                Every organization deploying AI agents is now one prompt, one
                vendor, one hallucination away from unauthorized spend at machine
                speed.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {risks.map((r) => (
              <div
                key={r.title}
                className="group relative p-6 rounded-lg border border-border/70 bg-card scanner-line kinetic-ease transition-all hover:border-border"
              >
                <div className="h-9 w-9 rounded-md bg-ember/10 border border-ember/30 flex items-center justify-center mb-5">
                  <r.icon className="h-4 w-4 text-ember" />
                </div>
                <h3 className="font-display text-lg font-semibold text-white">{r.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-[1.6]">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}