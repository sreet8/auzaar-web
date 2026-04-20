import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, ArrowUpRight } from "lucide-react";
import WordMark from "./WordMark";

const LINKS = [
  { to: "/product", label: "Product" },
  { to: "/solutions", label: "Solutions" },
  { to: "/why-now", label: "Why Now" },
  { to: "/demo", label: "Interactive Demo" },
  { to: "/about", label: "Company" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location.pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 kinetic-ease transition-all duration-500 ${
        scrolled
          ? "bg-obsidian/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 group">
            <WordMark />
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-3.5 py-2 text-[13px] font-medium rounded-md kinetic-ease transition-colors ${
                    isActive
                      ? "text-white bg-white/5"
                      : "text-muted-foreground hover:text-white hover:bg-white/[0.03]"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.02] border border-border/60">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-phosphor pulse-dot" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-phosphor" />
              </span>
              <span className="mono-label text-muted-foreground">System · 99.9%</span>
            </div>
            <Link
              to="/request-demo"
              className={`btn-shimmer group inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-[13px] font-semibold kinetic-ease transition-all ${
                scrolled
                  ? "bg-primary text-white hover:bg-primary/90 glow-cobalt"
                  : "bg-white text-obsidian hover:bg-white/90"
              }`}
            >
              Request a Demo
              <ArrowUpRight className="h-3.5 w-3.5 kinetic-ease transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden p-2.5 rounded-md text-white hover:bg-white/5 min-h-[48px] min-w-[48px] flex items-center justify-center"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-obsidian/95 backdrop-blur-xl border-t border-border/60">
          <div className="px-6 py-6 flex flex-col gap-1">
            {LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-md text-sm font-medium ${
                    isActive ? "text-white bg-white/5" : "text-muted-foreground"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <Link
              to="/request-demo"
              className="mt-3 inline-flex items-center justify-center gap-1.5 px-4 py-3 rounded-md text-sm font-semibold bg-primary text-white"
            >
              Request a Demo <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}