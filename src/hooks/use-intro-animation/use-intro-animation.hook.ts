"use client";

import { useRef, type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { dispatchIntroComplete } from "@/lib/animation-events";

export interface UseIntroAnimationResult {
  container: RefObject<HTMLDivElement | null>;
  counter: RefObject<HTMLSpanElement | null>;
}

export function useIntroAnimation(): UseIntroAnimationResult {
  const container = useRef<HTMLDivElement>(null);
  const counter = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();
      const progress = { value: 0 };

      tl.set(".content", { autoAlpha: 0 });
      tl.set(".intro-bar", { scaleX: 0 });

      tl.to(progress, {
        value: 100,
        duration: 1.4,
        ease: "power1.inOut",
        onUpdate: () => {
          if (counter.current) {
            counter.current.textContent = `${Math.round(progress.value)}%`;
          }
        },
      })
        .to(
          ".intro-bar",
          {
            scaleX: 1,
            duration: 1.4,
            ease: "power1.inOut",
          },
          "<"
        )
        .to(".intro", {
          yPercent: -100,
          duration: 0.9,
          ease: "power3.inOut",
        })
        .to(
          ".content",
          {
            autoAlpha: 1,
            duration: 0.6,
            ease: "power1.out",
          },
          "<+0.2"
        )
        .set(".intro", { display: "none" })
        .set(container.current, {
          height: "auto",
          overflow: "visible",
        })
        // Signale aux autres animations de la page (ex : l'assemblage
        // "puzzle" des blocs du Hero) que l'écran de chargement est terminé.
        .call(dispatchIntroComplete);
    },
    { scope: container }
  );

  return { container, counter };
}
