import React from "react";

export default function SectionLabel({ children, tone = "default" }) {
  const toneMap = {
    default: "border-border/70 text-muted-foreground",
    cobalt: "border-primary/40 text-primary",
    phosphor: "border-phosphor/30 text-phosphor",
    ember: "border-ember/30 text-ember",
  };
  return (
    <div className={`mono-label inline-flex items-center gap-2 px-2.5 py-1 rounded-sm border ${toneMap[tone]}`}>
      <span className="h-1 w-1 rounded-full bg-current" />
      {children}
    </div>
  );
}