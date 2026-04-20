import React from "react";
import SectionLabel from "../site/SectionLabel";
import { Layers, Network, Activity, Lock } from "lucide-react";

const pillars = [
  {
    num: "01",
    icon: Network,
    title: "Protocol interception",
    body: "Auzaar sits between AI agents and transaction rails — ACP, UCP, AP2 — intercepting every outbound transaction intent before execution.",
  },
  {
    num: "02",
    icon: Layers,
    title: "Transaction context extraction",
    body: "Parse the full commerce context: vendor, amount, SKUs, contract, purpose, originating agent, prior history. Turn opaque intent into structured data.",
  },
  {
    num: "03",
    icon: Activity,
    title: "Spending graph analysis",
    body: "Real-time graph analytics detect anomalies, fraud, blast radius, and concentration risk across agents, vendors, and business units.",
  },
  {
    num: "04",
    icon: Lock,
    title: "Centralized control & enforcement",
    body: "One policy engine. Approve, escalate, or block — at machine speed, with human-in-the-loop for the transactions that matter.",
  },
];

export default function SolutionSection() {
  return (
    <section className="relative py-24 lg:py-32 hairline-b overflow-hidden">
      <div className="absolute inset-0 grid-protocol-fine opacity-20 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-7">
            <SectionLabel tone="cobalt">The Solution</SectionLabel>
            <h2 className="mt-6 font-display text-4xl lg:text-5xl font-bold text-white leading-[1.05] tracking-tight text-balance">
              The inescapable layer between
              <br />
              <span className="text-primary">agents and money movement.</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-muted-foreground leading-[1.6]">
              Auzaar deploys as a protocol gateway in front of every agent endpoint.
              Nothing reaches a transaction rail without passing through policy,
              risk scoring, and — when needed — a human.
            </p>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-4">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="group relative p-7 rounded-lg border border-border/70 bg-card scanner-line kinetic-ease transition-all hover:border-primary/40"
            >
              <div className="flex items-start justify-between">
                <div className="h-10 w-10 rounded-md bg-primary/10 border border-primary/30 flex items-center justify-center">
                  <p.icon className="h-4 w-4 text-primary" />
                </div>
                <span className="mono-label text-muted-foreground">{p.num}</span>
              </div>
              <h3 className="mt-6 font-display text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-[1.6]">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}