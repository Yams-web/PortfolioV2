"use client";
import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

export default function LandingPage(): React.JSX.Element {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.set(".box", { yPercent: -50, xPercent: -50 });
      tl.set(".content", { autoAlpha: 0, display: "none" });

      tl.to(".box", {
        left: "50%",
        duration: 1,
        ease: "power2.out",
      })
        .to(".box", {
          height: "100vh",
          duration: 0.8,
          ease: "power2.inOut",
        })
        .to(".box", {
          rotation: 90,
          height: "100vw",
          duration: 0.8,
          ease: "power2.inOut",
        })
        .to(".box", {
          width: "100vh",
          duration: 0.8,
          ease: "power2.inOut",
        })
        .set(".content", {
          display: "block",
          autoAlpha: 1,
        })
        .set(".box", {
          display: "none",
        })
        .set(container.current, {
          height: "auto",
          overflow: "visible",
        });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative app flex items-center h-screen w-full overflow-hidden"
    >
      <div className="bg-purple-700 h-10 w-10 box absolute top-1/2 left-0 z-50"></div>

      <main className="content w-full min-h-screen bg-purple-700 text-white p-10">
        <h1 className="text-4xl font-bold">Bienvenue sur mon site</h1>
        <p className="mt-4">
          L'enchaînement est maintenant parfaitement fluide !
        </p>
      </main>
    </div>
  );
}
