import React from "react";
import { TrendingUp, TrendingDown, Shield, Clock } from "lucide-react";

const kpis = [
  { l: "Transactions / 24h", v: "28,492", d: "+12.4%", dir: "up", tone: "phosphor" },
  { l: "Spend governed", v: "$48.2M", d: "+8.1%", dir: "up", tone: "primary" },
  { l: "Blocked outflows", v: "$1.82M", d: "142 txns", dir: "up", tone: "ember" },
  { l: "Held for review", v: "37", d: "Avg 2m 14s", dir: "down", tone: "primary" },
];

const agents = [
  { name: "agent-proc-07", role: "Procurement assistant", txns: "1,284", risk: 12 },
  { name: "agent-eng-02", role: "Infra ops", txns: "842", risk: 31 },
  { name: "agent-mkt-14", role: "Media buying", txns: "412", risk: 58 },
  { name: "agent-ops-03", role: "Facilities", txns: "318", risk: 8 },
];

export default function DashboardView() {
  return (
    <div className="space-y-5">
      <PanelHeader title="Dashboard Overview" subtitle="Executive view of every governed agent transaction in the enterprise." />

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/60 rounded-xl overflow-hidden border border-border/70">
        {kpis.map((k) => {
          const toneColor = k.tone === "ember" ? "text-ember" : k.tone === "phosphor" ? "text-phosphor" : "text-primary";
          const Arrow = k.dir === "up" ? TrendingUp : TrendingDown;
          return (
            <div key={k.l} className="p-5 bg-card">
              <div className="mono-label text-muted-foreground">{k.l}</div>
              <div className="mt-3 font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">{k.v}</div>
              <div className={`mt-2 flex items-center gap-1.5 text-xs ${toneColor}`}>
                <Arrow className="h-3 w-3" />
                <span>{k.d}</span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="lg:col-span-2 rounded-xl border border-border/70 bg-card overflow-hidden">
          <div className="hairline-b px-5 py-3 flex items-center justify-between bg-white/[0.02]">
            <span className="mono-label text-muted-foreground">24H SPEND SHAPE</span>
            <span className="mono-label text-muted-foreground">GOVERNED · BLOCKED</span>
          </div>
          <div className="p-5">
            <MiniChart />
          </div>
        </div>

        <div className="rounded-xl border border-border/70 bg-card overflow-hidden">
          <div className="hairline-b px-5 py-3 bg-white/[0.02]">
            <span className="mono-label text-muted-foreground">TOP TRANSACTING AGENTS</span>
          </div>
          <div className="p-2">
            {agents.map((a) => (
              <div key={a.name} className="p-3 rounded-md hover:bg-white/[0.02] kinetic-ease transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white font-mono">{a.name}</span>
                  <span className={`mono-label ${a.risk > 50 ? "text-ember" : a.risk > 25 ? "text-primary" : "text-phosphor"}`}>
                    RISK {a.risk}
                  </span>
                </div>
                <div className="mt-1 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{a.role}</span>
                  <span className="mono-label text-muted-foreground">{a.txns} TX</span>
                </div>
                <div className="mt-2 h-1 rounded-full bg-white/5 overflow-hidden">
                  <div
                    className={`h-full ${a.risk > 50 ? "bg-ember" : a.risk > 25 ? "bg-primary" : "bg-phosphor"}`}
                    style={{ width: `${a.risk}%` }}
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

export function PanelHeader({ title, subtitle }) {
  return (
    <div>
      <div className="flex items-center gap-3">
        <Shield className="h-4 w-4 text-primary" />
        <h2 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight">{title}</h2>
      </div>
      <p className="mt-2 text-sm text-muted-foreground max-w-2xl leading-[1.6]">{subtitle}</p>
    </div>
  );
}

function MiniChart() {
  const bars = [38, 52, 41, 68, 55, 72, 61, 78, 64, 85, 70, 92, 81, 76, 88, 67, 74, 82, 69, 90, 78, 84, 71, 80];
  const max = Math.max(...bars);
  return (
    <div className="flex items-end gap-1 h-40">
      {bars.map((b, i) => (
        <div key={i} className="flex-1 relative group flex flex-col justify-end">
          <div
            className="w-full bg-primary/30 hover:bg-primary/60 kinetic-ease transition-colors rounded-sm"
            style={{ height: `${(b / max) * 100}%` }}
          />
          {i % 4 === 0 && (
            <div className="w-full h-px bg-ember/40 absolute bottom-0" style={{ bottom: `${((b - 10) / max) * 100}%` }} />
          )}
        </div>
      ))}
    </div>
  );
}