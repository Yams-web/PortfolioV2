"use client";

import React from "react";
import { useIntroAnimation } from "@/hooks";

export interface IntroAnimationProps {
  children: React.ReactNode;
}

export function IntroAnimation({
  children,
}: IntroAnimationProps): React.JSX.Element {
  const { container, counter } = useIntroAnimation();

  return (
    <div
      ref={container}
      className="relative app h-screen w-full overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="intro fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#121317]"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c4c7c8]">
          Init_Portfolio
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
          Yamin Lamiri
        </h2>
        <div className="flex w-48 flex-col items-center gap-3 sm:w-64">
          <div className="h-px w-full origin-left overflow-hidden bg-[#23252E]">
            <div className="intro-bar h-full w-full origin-left bg-[#00E5FF]" />
          </div>
          <span
            ref={counter}
            className="font-mono text-xs tabular-nums text-[#00E5FF]"
          >
            0%
          </span>
        </div>
      </div>

      <div className="content w-full min-h-screen bg-[#121317] text-[#e3e2e7]">
        {children}
      </div>
    </div>
  );
}
