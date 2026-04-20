import React from "react";
import { Link } from "react-router-dom";
import WordMark from "./WordMark";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-obsidian relative overflow-hidden">
      <div className="absolute inset-0 grid-protocol-fine opacity-40 pointer-events-none" />
      <div className="relative max-w-[1400px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          <div className="col-span-2 lg:col-span-4">
            <WordMark size="md" />
            <p className="mt-5 text-sm text-muted-foreground max-w-xs leading-relaxed">
              The trust and control layer for agentic commerce. Built for the enterprise era of autonomous transactions.
            </p>
            <div className="mt-6 flex items-center gap-2 px-3 py-1.5 w-fit rounded-full bg-white/[0.02] border border-border/60">
              <span className="h-1.5 w-1.5 rounded-full bg-phosphor pulse-dot" />
              <span className="mono-label text-muted-foreground">All systems operational</span>
            </div>
          </div>

          <FooterCol title="Product" links={[
            { to: "/product", label: "Platform overview" },
            { to: "/product#gateway", label: "Trust Gateway" },
            { to: "/product#policy", label: "Policy Engine" },
            { to: "/product#dashboard", label: "Governance Dashboard" },
            { to: "/demo", label: "Interactive demo" },
          ]} />

          <FooterCol title="Solutions" links={[
            { to: "/solutions#procurement", label: "Procurement governance" },
            { to: "/solutions#finance", label: "Finance controls" },
            { to: "/solutions#security", label: "Agent oversight" },
            { to: "/solutions#vendor", label: "Vendor risk" },
            { to: "/solutions#review", label: "Human-in-the-loop" },
          ]} />

          <FooterCol title="Company" links={[
            { to: "/about", label: "About" },
            { to: "/why-now", label: "Why now" },
            { to: "/request-demo", label: "Request a demo" },
            { to: "#", label: "Careers" },
            { to: "#", label: "Press" },
          ]} />

          <FooterCol title="Resources" links={[
            { to: "#", label: "Case studies" },
            { to: "#", label: "Blog" },
            { to: "#", label: "ACP / UCP / AP2" },
            { to: "#", label: "Security" },
            { to: "#", label: "Trust center" },
          ]} />
        </div>

        <div className="mt-14 pt-8 border-t border-border/60 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            {["SOC 2 Type II", "GDPR", "ISO 27001", "ACP", "UCP", "AP2"].map((b) => (
              <span key={b} className="mono-label text-muted-foreground/80 border border-border/60 px-2.5 py-1 rounded">
                {b}
              </span>
            ))}
          </div>

          <Link
            to="/request-demo"
            className="group inline-flex items-center gap-1.5 text-sm font-medium text-white hover:text-primary kinetic-ease transition-colors"
          >
            Talk to sales <ArrowUpRight className="h-4 w-4 kinetic-ease transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="mono-label text-muted-foreground">
            © {new Date().getFullYear()} Auzaar Networks, Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <a href="mailto:auzaarnetworks@gmail.com" className="hover:text-white kinetic-ease transition-colors font-mono">auzaarnetworks@gmail.com</a>
            <a href="#" className="hover:text-white kinetic-ease transition-colors">Privacy</a>
            <a href="#" className="hover:text-white kinetic-ease transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }) {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="mono-label text-muted-foreground mb-4">{title}</div>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link to={l.to} className="text-[13px] text-foreground/70 hover:text-white kinetic-ease transition-colors">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}