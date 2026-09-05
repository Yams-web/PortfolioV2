"use client";

import Link from "next/link";
import React from "react";
import { ArrowDown, ArrowRight } from "lucide-react";
import { usePuzzleReveal } from "@/hooks";

export function Hero(): React.JSX.Element {
  const { container } = usePuzzleReveal();

  return (
    <section
      ref={container}
      id="accueil"
      className="grid grid-cols-1 gap-px border border-[#23252E] bg-[#23252E] md:grid-cols-12"
    >
      {/* Bloc gauche : accroche */}
      <div className="puzzle-piece flex min-h-[614px] flex-col justify-between bg-[#121317] p-6 sm:p-10 md:col-span-8">
        <div className="max-w-4xl">
          <h1 className="mb-8 text-[48px] font-bold leading-[1.1] text-white md:text-[80px] md:leading-none md:tracking-[-0.04em]">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
        </div>

        <div className="flex w-full flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <p className="max-w-sm text-base leading-[1.7] text-[#c4c7c8] sm:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <Link
            href="#projets"
            aria-label="Voir mes projets"
            className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-[#23252E] text-white transition-colors hover:bg-white hover:text-[#0d0e12]"
          >
            <ArrowDown aria-hidden="true" size={20} />
          </Link>
        </div>
      </div>

      {/* Bloc droit : photo professionnelle */}
      <div className="puzzle-piece group relative flex h-full flex-col bg-[#121317] p-6 sm:p-10 md:col-span-4">
        <div className="pointer-events-none absolute inset-6 z-10 border border-[#23252E] transition-colors group-hover:border-[#00E5FF] sm:inset-10" />
        <div className="relative h-full w-full min-h-[280px] overflow-hidden bg-[#1a1b20]">
          <img
            src="/working.jpg"
            alt="Photo professionnelle de Yamin Lamiri"
            className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
          />
        </div>
        <div className="absolute bottom-10 right-10 z-20 border border-[#23252E] bg-[#121317] p-4">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white">
            01 // Lorem
          </p>
        </div>
      </div>

      {/* Bloc bas gauche : détails */}
      <div className="puzzle-piece flex h-48 flex-col justify-between bg-[#121317] p-6 sm:p-10 md:col-span-4">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.15em] text-[#c4c7c8]">
          Lorem ipsum dolor sit amet
        </p>
        <div className="flex items-end justify-between border-t border-[#23252E] pt-4">
          <span className="text-sm text-[#c4c7c8]">Lorem</span>
          <span className="text-sm text-[#c4c7c8]">2026</span>
        </div>
      </div>

      {/* Bloc bas milieu : appel à l'action */}
      <div className="puzzle-piece group flex h-48 items-center justify-center border border-transparent bg-white text-[#0d0e12] transition-colors hover:border-white hover:bg-[#121317] hover:text-white md:col-span-4">
        <Link
          href="#contact"
          className="flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.15em]"
        >
          Lorem ipsum
          <ArrowRight
            aria-hidden="true"
            size={18}
            className="transition-transform group-hover:translate-x-2"
          />
        </Link>
      </div>

      {/* Bloc bas droite : statistique */}
      <div className="puzzle-piece flex h-48 flex-col justify-end bg-[#121317] p-6 sm:p-10 md:col-span-4">
        <p className="text-[48px] font-bold leading-none text-white">99.9%</p>
        <p className="mt-2 text-sm uppercase tracking-[0.01em] text-[#c4c7c8]">
          Lorem ipsum dolor
        </p>
      </div>
    </section>
  );
}
