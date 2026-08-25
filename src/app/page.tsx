"use client";
import React, { useMemo, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { isNull } from "es-toolkit/predicate";
import { Navbar } from "@components/*";
gsap.registerPlugin(useGSAP);

export default function LandingPage(): React.JSX.Element {
  const container = useRef<HTMLDivElement>(null);
  const tl = gsap.timeline();
  const isMobile: number = !isNull(window) && window.innerWidth < 321 ? 6 : 12;
  useGSAP(
    () => {
      tl.to(".green-box", {
        height: 0,
        duration: 1.5,
        ease: "power4.out",
        stagger: {
          from: "start",
          each: 0.1,
        },
      });
    },
    { scope: container }
  );
  return useMemo(
    (): React.JSX.Element => (
      <div
        ref={container}
        className="app flex items-center justify-center h-screen w-screen"
      ></div>
    ),
    []
  );
}
