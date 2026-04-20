import React, { useState } from "react";
import SectionLabel from "../components/site/SectionLabel";
import { base44 } from "@/api/base44Client";
import { Check, ArrowRight, Shield, Users, Lock, Activity } from "lucide-react";

const seeItems = [
  "Real-time transaction monitoring across all AI agents",
  "Policy enforcement before execution — not after",
  "Risk scoring, blast-radius estimation, and vendor trust",
  "Human-in-the-loop review queue and approval workflows",
  "Governance dashboard and immutable audit trail",
];

const sizes = ["1–50", "51–200", "201–1,000", "1,001–5,000", "5,000+"];
const exploring = [
  { value: "procurement_governance", label: "Procurement governance" },
  { value: "ai_agent_oversight", label: "AI agent transaction oversight" },
  { value: "finance_controls", label: "Finance controls" },
  { value: "vendor_risk", label: "Vendor risk prevention" },
  { value: "policy_enforcement", label: "Policy enforcement before payment" },
  { value: "other", label: "Something else" },
];

export default function RequestDemo() {
  const [form, setForm] = useState({
    full_name: "", work_email: "", company: "", job_title: "",
    company_size: "", exploring: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const set = (k, v) => setForm((f) => ({ ...f, [k]: v }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    await base44.entities.DemoRequest.create(form);
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <>
      {/* Hero bar */}
      <section className="relative hairline-b">
        <div className="absolute inset-0 grid-protocol-fine opacity-30 pointer-events-none" />
        <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 pt-20 lg:pt-28 pb-14">
          <SectionLabel tone="cobalt">Request a Demo</SectionLabel>
          <h1 className="mt-6 font-display text-[clamp(2rem,4.5vw,3.5rem)] font-bold text-white leading-[1.05] tracking-tight max-w-3xl text-balance">
            Govern AI agent transactions before money moves.
          </h1>
          <p className="mt-5 text-[17px] text-muted-foreground max-w-2xl leading-[1.6]">
            See Auzaar in a 30-minute live walkthrough tailored to your environment —
            built for procurement, finance, and security leaders preparing for AI agent-initiated spend.
          </p>
        </div>
      </section>

      <section className="relative py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

            {/* Left — what you'll see */}
            <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
              <div className="mono-label text-muted-foreground mb-5">WHAT YOU'LL SEE</div>
              <ul className="space-y-4">
                {seeItems.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <div className="mt-0.5 h-5 w-5 rounded-sm bg-phosphor/10 border border-phosphor/30 flex items-center justify-center shrink-0">
                      <Check className="h-3 w-3 text-phosphor" />
                    </div>
                    <span className="text-sm text-foreground/90 leading-[1.6]">{s}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 p-6 rounded-xl border border-border/70 bg-card space-y-5">
                <div className="mono-label text-muted-foreground">TRUSTED BY</div>
                {[
                  { icon: Shield, label: "Enterprise security teams" },
                  { icon: Users, label: "Procurement leaders" },
                  { icon: Activity, label: "Finance & treasury" },
                  { icon: Lock, label: "AI governance offices" },
                ].map((t) => (
                  <div key={t.label} className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-md bg-primary/10 border border-primary/20 flex items-center justify-center">
                      <t.icon className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-sm text-white">{t.label}</span>
                  </div>
                ))}
              </div>

              {/* Compliance strip */}
              <div className="mt-8 pt-6 border-t border-border/60">
                <div className="mono-label text-muted-foreground mb-3">COMPLIANCE & PROTOCOL</div>
                <div className="flex flex-wrap gap-2">
                  {["SOC 2 Type II", "GDPR", "ISO 27001", "ACP", "UCP", "AP2"].map((b) => (
                    <span key={b} className="mono-label text-muted-foreground/80 border border-border/60 px-2.5 py-1 rounded">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-7">
              {submitted ? (
                <SuccessState />
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-5 p-8 lg:p-10 rounded-2xl border border-border/70 bg-card"
                >
                  <div className="mono-label text-muted-foreground mb-6">DEMO REQUEST FORM</div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <FormField label="Full name" required>
                      <input
                        type="text"
                        required
                        placeholder="Priya Ramanathan"
                        value={form.full_name}
                        onChange={(e) => set("full_name", e.target.value)}
                        className="form-input"
                      />
                    </FormField>
                    <FormField label="Work email" required>
                      <input
                        type="email"
                        required
                        placeholder="priya@company.com"
                        value={form.work_email}
                        onChange={(e) => set("work_email", e.target.value)}
                        className="form-input"
                      />
                    </FormField>
                    <FormField label="Company" required>
                      <input
                        type="text"
                        required
                        placeholder="Acme Corp"
                        value={form.company}
                        onChange={(e) => set("company", e.target.value)}
                        className="form-input"
                      />
                    </FormField>
                    <FormField label="Job title">
                      <input
                        type="text"
                        placeholder="VP Procurement"
                        value={form.job_title}
                        onChange={(e) => set("job_title", e.target.value)}
                        className="form-input"
                      />
                    </FormField>
                    <FormField label="Company size">
                      <select
                        value={form.company_size}
                        onChange={(e) => set("company_size", e.target.value)}
                        className="form-input"
                      >
                        <option value="">Select range</option>
                        {sizes.map((s) => (
                          <option key={s} value={s}>{s} employees</option>
                        ))}
                      </select>
                    </FormField>
                    <FormField label="What are you exploring?">
                      <select
                        value={form.exploring}
                        onChange={(e) => set("exploring", e.target.value)}
                        className="form-input"
                      >
                        <option value="">Select topic</option>
                        {exploring.map((o) => (
                          <option key={o.value} value={o.value}>{o.label}</option>
                        ))}
                      </select>
                    </FormField>
                  </div>

                  <FormField label="Anything you'd like us to know?">
                    <textarea
                      rows={4}
                      placeholder="Tell us about your environment, current challenges, or specific use cases..."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      className="form-input resize-none"
                    />
                  </FormField>

                  {error && (
                    <p className="text-sm text-ember">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-shimmer w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary text-white font-semibold text-[15px] kinetic-ease transition-all hover:bg-primary/90 glow-cobalt min-h-[52px] disabled:opacity-60"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting…
                      </span>
                    ) : (
                      <>Request Demo <ArrowRight className="h-4 w-4" /></>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center leading-relaxed pt-1">
                    Built for procurement, finance, and security leaders preparing for AI agent-initiated spend. We'll be in touch within one business day.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar placeholder */}
      <section className="hairline-t py-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
          <div className="p-8 rounded-xl border border-border/70 bg-card flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <div className="mono-label text-muted-foreground mb-2">OR BOOK DIRECTLY</div>
              <p className="font-display text-lg font-semibold text-white">Schedule a 30-minute call with our team</p>
              <p className="mt-1 text-sm text-muted-foreground">Pick a time that works — calendar integration coming soon.</p>
            </div>
            <a
              href="mailto:demo@auzaar.com"
              className="btn-shimmer inline-flex items-center gap-1.5 px-5 py-3 rounded-md border border-border text-sm font-medium text-white hover:border-primary/50 hover:bg-primary/5 kinetic-ease transition-all min-h-[48px]"
            >
              Email us to schedule <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function FormField({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-medium text-foreground/90">
        {label}{required && <span className="text-ember ml-1">*</span>}
      </label>
      {children}
    </div>
  );
}

function SuccessState() {
  return (
    <div className="p-10 lg:p-14 rounded-2xl border border-phosphor/30 bg-card text-center">
      <div className="h-14 w-14 rounded-full bg-phosphor/10 border border-phosphor/30 flex items-center justify-center mx-auto mb-6">
        <Check className="h-6 w-6 text-phosphor" />
      </div>
      <h2 className="font-display text-2xl font-bold text-white">Request received.</h2>
      <p className="mt-3 text-muted-foreground leading-[1.6] max-w-md mx-auto">
        Thanks for reaching out. A member of the Auzaar team will be in touch within one business day to schedule your demo.
      </p>
      <div className="mt-8 flex flex-col items-center gap-2">
        <span className="mono-label text-muted-foreground">While you wait</span>
        <a href="/demo" className="text-primary text-sm hover:underline">
          Explore the interactive demo →
        </a>
      </div>
    </div>
  );
}