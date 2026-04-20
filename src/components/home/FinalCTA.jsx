import React from "react";
import CTAButton from "../site/CTAButton";

export default function FinalCTA() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
      <div
        className="absolute inset-0 opacity-70 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, rgba(37,99,235,0.15) 0%, rgba(2,6,23,0) 70%)",
        }}
      />
      <div className="relative max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
        <h2 className="font-display text-4xl lg:text-6xl font-bold text-white leading-[1.02] tracking-tight text-balance">
          Build trust into agentic commerce
          <br />
          <span className="text-muted-foreground">before it scales without control.</span>
        </h2>
        <p className="mt-6 text-muted-foreground leading-[1.6] max-w-2xl mx-auto">
          The companies defining this category now will set the standard for every autonomous
          transaction that follows. Start with a demo tailored to your environment.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
          <CTAButton to="/request-demo" variant="primary" size="lg">Request a Demo</CTAButton>
          <CTAButton to="/demo" variant="ghost" size="lg" icon="right">See the platform</CTAButton>
        </div>
      </div>
    </section>
  );
}