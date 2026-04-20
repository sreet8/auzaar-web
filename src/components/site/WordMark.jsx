import React from "react";

/** @typedef {'sm' | 'md'} WordMarkSize */

const sizeClasses = {
  sm: "h-7 min-h-[28px]",
  md: "h-8 min-h-[32px]",
};

/**
 * Brand lockup from `/public/brand/auzaar-logo.svg`.
 * Replace that file (or use a PNG and change `LOGO_SRC`) with your official artwork.
 */
const LOGO_SRC = "/brand/auzaar-logo.png";

/**
 * @param {{ className?: string; size?: WordMarkSize; priority?: boolean }} [props]
 */
export default function WordMark({ className = "", size = "sm", priority = false }) {
  return (
    <img
      src={LOGO_SRC}
      alt="Auzaar Networks"
      width={200}
      height={32}
      decoding="async"
      fetchPriority={priority ? "high" : undefined}
      className={`${sizeClasses[size]} w-auto object-contain object-left ${className}`}
    />
  );
}
