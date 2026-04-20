import React from "react";

export default function WordMark({ className = "" }) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <div className="relative h-7 w-7 flex items-center justify-center">
        <div className="absolute inset-0 rounded-[6px] bg-gradient-to-br from-primary to-primary/40 opacity-90" />
        <div className="absolute inset-[2px] rounded-[4px] bg-obsidian flex items-center justify-center">
          <div className="h-1.5 w-1.5 rounded-full bg-primary" />
          <div className="absolute inset-0 rounded-[4px] border border-primary/40" />
        </div>
      </div>
      <div className="flex flex-col leading-none">
        <span className="font-display font-bold text-[15px] tracking-tight text-white">Auzaar</span>
        <span className="mono-label text-[9px] text-muted-foreground mt-0.5">NETWORKS</span>
      </div>
    </div>
  );
}