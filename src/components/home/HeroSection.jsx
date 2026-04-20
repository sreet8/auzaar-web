import React from "react";
import CTAButton from "../site/CTAButton";
import SectionLabel from "../site/SectionLabel";
import InterceptorVisual from "../site/InterceptorVisual";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(37,99,235,0.18) 0%, rgba(2,6,23,0) 60%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-16 lg:pb-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          <SectionLabel tone="cobalt">Trust & Control Layer · Agentic Commerce</SectionLabel>

          <h1 className="mt-7 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.02] font-bold tracking-tight text-white text-balance">
            The future of commerce
            <br />
            runs on agents.
            <br />
            <span className="text-muted-foreground">
              The future of agents runs on{" "}
              <span className="relative text-white">
                trust
                <span className="absolute left-0 right-0 -bottom-1 h-[3px] bg-primary" />
              </span>
              .
            </span>
          </h1>

          <p className="mt-7 text-[17px] lg:text-lg text-muted-foreground max-w-2xl leading-[1.6] text-pretty">
            Auzaar is the pre-transaction control plane for AI agent-initiated commerce.
            Govern, monitor, and enforce policy on every autonomous transaction before
            money moves — across ACP, UCP, and AP2.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <CTAButton to="/request-demo" variant="primary" size="lg">
              Request a Demo
            </CTAButton>
            <CTAButton to="/demo" variant="ghost" size="lg" icon="right">
              See the platform
            </CTAButton>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {["SOC 2 Type II", "GDPR", "ACP · UCP · AP2 Compatible"].map((b) => (
              <span key={b} className="mono-label text-muted-foreground/80">{b}</span>
            ))}
          </div>
        </div>

        <div className="relative mt-16 lg:mt-20">
          <InterceptorVisual />
          <div className="absolute -inset-x-6 -bottom-10 h-20 bg-gradient-to-t from-obsidian to-transparent pointer-events-none" />
        </div>
      </div>

      {/* Customer strip (placeholder ghost logos) */}
      <div className="relative hairline-t hairline-b py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <span className="mono-label text-muted-foreground">
              Trusted by enterprise procurement, finance & security leaders
            </span>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {["NORTHWIND", "HELIX", "OBSIDIAN CAP", "PROMETHEUS", "CERTAN", "MERIDIAN"].map((n) => (
                <span key={n} className="mono-label text-muted-foreground/60 tracking-[0.2em]">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}