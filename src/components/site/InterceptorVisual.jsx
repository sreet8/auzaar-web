import React from "react";
import { Cpu, Shield, CreditCard } from "lucide-react";

/**
 * Split-screen "Traffic Interceptor":
 * chaotic agent nodes (left) → Auzaar Gate (center) → ordered transactions (right)
 */
export default function InterceptorVisual() {
  return (
    <div className="relative w-full aspect-[16/10] rounded-xl border border-border/60 bg-gradient-to-br from-obsidian via-[#030a1f] to-obsidian overflow-hidden">
      <div className="absolute inset-0 grid-protocol-fine opacity-40" />

      {/* Subtle iridescent wash */}
      <div
        className="absolute inset-0 opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 50%, rgba(37,99,235,0.18) 0%, rgba(2,6,23,0) 70%)",
        }}
      />

      <div className="absolute inset-0 grid grid-cols-12">
        {/* LEFT — chaotic agents */}
        <div className="col-span-5 relative hairline-r">
          <div className="absolute top-4 left-4 mono-label text-muted-foreground">
            AGENT LAYER
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-full h-full">
              {agentNodes.map((n, i) => (
                <AgentNode key={i} {...n} />
              ))}
              {/* data filaments */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute right-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-primary"
                  style={{
                    top: `${15 + i * 17}%`,
                    width: "70%",
                    animation: `data-flow ${2.5 + i * 0.4}s cubic-bezier(0.19, 1, 0.22, 1) infinite`,
                    animationDelay: `${i * 0.3}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CENTER — Auzaar Gate */}
        <div className="col-span-2 relative flex items-center justify-center hairline-r">
          <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent" />
          <div className="absolute inset-y-6 left-1/2 -translate-x-1/2 w-[2px] overflow-hidden">
            <div className="absolute inset-x-0 h-1/3 bg-gradient-to-b from-transparent via-white to-transparent scan-v" />
          </div>
          <div className="relative z-10 flex flex-col items-center gap-2">
            <div className="h-12 w-12 rounded-md bg-obsidian border border-primary/60 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.4)]">
              <Shield className="h-5 w-5 text-primary" />
            </div>
            <div className="mono-label text-primary">AUZAAR GATE</div>
          </div>
        </div>

        {/* RIGHT — ordered transactions */}
        <div className="col-span-5 relative">
          <div className="absolute top-4 right-4 mono-label text-muted-foreground">
            EXECUTION LAYER
          </div>
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="w-full space-y-2">
              {txRows.map((t, i) => (
                <TxRow key={i} {...t} delay={i * 0.2} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status bar */}
      <div className="absolute inset-x-0 bottom-0 hairline-t bg-obsidian/80 backdrop-blur-sm px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
          <span className="mono-label text-muted-foreground">INTERCEPTING · 12,481 TXN/MIN</span>
        </div>
        <div className="mono-label text-muted-foreground">
          POLICY v3.2 · <span className="text-phosphor">ACTIVE</span>
        </div>
      </div>
    </div>
  );
}

const agentNodes = [
  { top: "12%", left: "18%", label: "Agent-07", icon: Cpu },
  { top: "38%", left: "55%", label: "Agent-12", icon: Cpu },
  { top: "62%", left: "22%", label: "Agent-03", icon: Cpu },
  { top: "82%", left: "60%", label: "Agent-21", icon: Cpu },
  { top: "28%", left: "72%", label: "Agent-15", icon: Cpu },
];

function AgentNode({ top, left, label, icon: Icon }) {
  return (
    <div
      className="absolute flex items-center gap-1.5 px-2 py-1 rounded bg-white/[0.03] border border-border/60 backdrop-blur-sm"
      style={{ top, left }}
    >
      <Icon className="h-3 w-3 text-muted-foreground" />
      <span className="mono-label text-muted-foreground">{label}</span>
    </div>
  );
}

const txRows = [
  { vendor: "Acme Logistics", amt: "$12,480", status: "APPROVED", tone: "phosphor" },
  { vendor: "Veridian SaaS", amt: "$8,920", status: "APPROVED", tone: "phosphor" },
  { vendor: "Nexus Cloud", amt: "$48,200", status: "REVIEW", tone: "ember" },
  { vendor: "Orion Supplies", amt: "$3,150", status: "APPROVED", tone: "phosphor" },
  { vendor: "Unknown Vendor", amt: "$512,000", status: "BLOCKED", tone: "ember" },
];

function TxRow({ vendor, amt, status, tone, delay }) {
  const toneCls = tone === "phosphor" ? "text-phosphor" : "text-ember";
  return (
    <div
      className="flex items-center justify-between gap-3 px-3 py-2 rounded bg-white/[0.02] border border-border/50 scanner-line"
      style={{ animation: `data-flow 6s cubic-bezier(0.19, 1, 0.22, 1) infinite`, animationDelay: `${delay}s`, opacity: 0.95 }}
    >
      <span className="text-[12px] text-foreground/80 truncate">{vendor}</span>
      <span className="mono-label text-muted-foreground">{amt}</span>
      <span className={`mono-label ${toneCls}`}>{status}</span>
    </div>
  );
}