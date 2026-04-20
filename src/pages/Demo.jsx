import React, { useState } from "react";
import SectionLabel from "../components/site/SectionLabel";
import CTAButton from "../components/site/CTAButton";
import DemoTabs from "../components/demo/DemoTabs";
import DashboardView from "../components/demo/DashboardView";
import FeedView from "../components/demo/FeedView";
import RiskView from "../components/demo/RiskView";
import PolicyView from "../components/demo/PolicyView";
import ReviewView from "../components/demo/ReviewView";
import AuditView from "../components/demo/AuditView";
import FinalCTA from "../components/home/FinalCTA";

const viewMap = {
  dashboard: DashboardView,
  feed: FeedView,
  risk: RiskView,
  policy: PolicyView,
  review: ReviewView,
  audit: AuditView,
};

export default function Demo() {
  const [active, setActive] = useState("dashboard");
  const View = viewMap[active];

  return (
    <>
      <section className="relative hairline-b">
        <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-24 pb-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-8">
              <SectionLabel tone="cobalt">Interactive Demo</SectionLabel>
              <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white leading-[1.05] tracking-tight text-balance">
                Experience the Sovereign Dashboard.
              </h1>
              <p className="mt-5 text-[16px] text-muted-foreground max-w-2xl leading-[1.6]">
                Walk the same console enterprise teams use to govern AI agent transactions in
                production. Sample data. Real workflows. No login required.
              </p>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <CTAButton to="/request-demo" size="lg">Book a live walkthrough</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 lg:py-14 hairline-b">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            <div className="lg:col-span-3">
              <DemoTabs active={active} onChange={setActive} />
            </div>
            <div className="lg:col-span-9">
              <View />
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 hairline-b">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-10 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight text-balance">
            Want to see this running on your agents and policies?
          </h2>
          <p className="mt-4 text-muted-foreground leading-[1.6] max-w-2xl mx-auto">
            Book a live walkthrough with a solutions engineer. We'll tailor the environment to
            your protocols, policies, and procurement surface.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <CTAButton to="/request-demo" size="lg">Request a Demo</CTAButton>
            <CTAButton to="/product" variant="ghost" size="lg" icon="right">Back to product</CTAButton>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}