import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export default function CTAButton({
  to = "/request-demo",
  children,
  variant = "primary",
  size = "md",
  icon = "upright",
  className = "",
  ...rest
}) {
  const sizes = {
    sm: "px-3.5 py-2 text-[13px]",
    md: "px-5 py-3 text-sm",
    lg: "px-6 py-3.5 text-[15px]",
  };
  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 glow-cobalt",
    white: "bg-white text-obsidian hover:bg-white/90",
    ghost: "bg-white/[0.03] text-white border border-border/80 hover:bg-white/[0.06] hover:border-border",
    outline: "bg-transparent text-white border border-primary/50 hover:bg-primary/10",
  };
  const Icon = icon === "upright" ? ArrowUpRight : ArrowRight;

  return (
    <Link
      to={to}
      className={`btn-shimmer group inline-flex items-center justify-center gap-1.5 rounded-md font-semibold kinetic-ease transition-all min-h-[48px] ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
      <Icon className="h-4 w-4 kinetic-ease transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
    </Link>
  );
}