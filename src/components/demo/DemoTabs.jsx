import React from "react";
import { LayoutDashboard, Activity, ShieldAlert, Scale, Users, ScrollText } from "lucide-react";

export const DEMO_TABS = [
  { id: "dashboard", label: "Dashboard Overview", icon: LayoutDashboard },
  { id: "feed", label: "Live Transaction Feed", icon: Activity },
  { id: "risk", label: "Risk & Compliance", icon: ShieldAlert },
  { id: "policy", label: "Policy Engine", icon: Scale },
  { id: "review", label: "Human Review Queue", icon: Users },
  { id: "audit", label: "Audit Trail", icon: ScrollText },
];

export default function DemoTabs({ active, onChange }) {
  return (
    <aside className="lg:sticky lg:top-24 lg:self-start rounded-xl border border-border/70 bg-card overflow-hidden">
      <div className="hairline-b px-4 py-3 flex items-center justify-between bg-white/[0.02]">
        <span className="mono-label text-muted-foreground">PRODUCT TOUR</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
          <span className="mono-label text-phosphor">LIVE</span>
        </span>
      </div>
      <nav className="p-2">
        {DEMO_TABS.map((t, i) => {
          const Icon = t.icon;
          const isActive = active === t.id;
          return (
            <button
              key={t.id}
              onClick={() => onChange(t.id)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-md text-left kinetic-ease transition-all ${
                isActive
                  ? "bg-primary/10 text-white border border-primary/30"
                  : "text-muted-foreground hover:text-white hover:bg-white/[0.03] border border-transparent"
              }`}
            >
              <span className={`mono-label ${isActive ? "text-primary" : "text-muted-foreground/60"}`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <Icon className={`h-4 w-4 ${isActive ? "text-primary" : ""}`} />
              <span className="text-[13px] font-medium">{t.label}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
}