"use client";

import React, { useId, useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

const BADGE_ACCENT_COLOR: string = "#FFB020";
const BADGE_RING_DURATION_SECONDS: number = 2.6;

export interface IBadgeProps {
  label: string;
  tooltip: string;
}

interface IBadgeRingStyle extends React.CSSProperties {
  "--badge-angle": string;
}

const BADGE_RING_STYLE: IBadgeRingStyle = {
  "--badge-angle": "0deg",
  background: `conic-gradient(from var(--badge-angle), transparent 0deg, ${BADGE_ACCENT_COLOR} 45deg, transparent 110deg)`,
  WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
  WebkitMaskComposite: "xor",
  maskComposite: "exclude",
  padding: 1,
  opacity: 0,
};

export function Badge({ label, tooltip }: IBadgeProps): React.JSX.Element {
  const tooltipId: string = useId();
  const containerRef = useRef<HTMLSpanElement | null>(null);
  const ringRef = useRef<HTMLSpanElement | null>(null);
  const ringTweenRef = useRef<gsap.core.Tween | null>(null);

  useGSAP(
    () => {
      ringTweenRef.current = gsap.to(ringRef.current, {
        "--badge-angle": "360deg",
        duration: BADGE_RING_DURATION_SECONDS,
        ease: "none",
        repeat: -1,
        paused: true,
      });
    },
    { scope: containerRef }
  );

  const activateRing = (): void => {
    ringTweenRef.current?.play();
    gsap.to(ringRef.current, { opacity: 1, duration: 0.2, overwrite: "auto" });
  };

  const deactivateRing = (): void => {
    ringTweenRef.current?.pause();
    gsap.to(ringRef.current, { opacity: 0, duration: 0.2, overwrite: "auto" });
  };

  return (
    <span
      ref={containerRef}
      tabIndex={0}
      aria-describedby={tooltipId}
      onMouseEnter={activateRing}
      onMouseLeave={deactivateRing}
      onFocus={activateRing}
      onBlur={deactivateRing}
      className="group/badge relative inline-flex cursor-pointer border border-[#FFB020]/40 px-3 py-2 text-sm font-semibold uppercase tracking-widest text-[#FFB020] outline-none"
    >
      <span ref={ringRef} aria-hidden="true" style={BADGE_RING_STYLE} className="pointer-events-none absolute inset-0" />
      <span className="relative z-10">{label}</span>
      <span
        id={tooltipId}
        role="tooltip"
        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-max max-w-75 -translate-x-1/2 translate-y-1 border border-[#23252E] bg-[#0d0e12] px-4 py-3 text-left text-base normal-case leading-normal tracking-normal text-white opacity-0 shadow-lg transition-all duration-200 group-hover/badge:translate-y-0 group-hover/badge:opacity-100 group-focus-visible/badge:translate-y-0 group-focus-visible/badge:opacity-100"
      >
        {tooltip}
      </span>
    </span>
  );
}
