"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { onIntroComplete } from "@/lib/animation-events";

export interface IUsePuzzleRevealOptions {
  selector?: string;
}

export interface IUsePuzzleRevealResult {
  container: RefObject<HTMLElement | null>;
}

const PIECE_OFFSETS: ReadonlyArray<{ x: number; y: number }> = [
  { x: -64, y: -36 },
  { x: 72, y: -44 },
  { x: -56, y: 48 },
  { x: 0, y: 72 },
  { x: 60, y: 40 },
];

export function usePuzzleReveal({
  selector = ".puzzle-piece",
}: IUsePuzzleRevealOptions = {}): IUsePuzzleRevealResult {
  const container = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const pieces = gsap.utils.toArray<HTMLElement>(
        selector,
        container.current
      );

      gsap.set(pieces, {
        opacity: 0,
        scale: 0.92,
        x: (index) => PIECE_OFFSETS[index % PIECE_OFFSETS.length].x,
        y: (index) => PIECE_OFFSETS[index % PIECE_OFFSETS.length].y,
      });
    },
    { scope: container }
  );

  useEffect(() => {
    const pieces = gsap.utils.toArray<HTMLElement>(selector, container.current);

    if (pieces.length === 0) {
      return;
    }

    const cleanupTasks: Array<() => void> = [];

    const revealPieces = () => {
      const revealTween = gsap.to(pieces, {
        opacity: 1,
        scale: 1,
        x: 0,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.4)",
        stagger: 0.22,
      });

      cleanupTasks.push(() => revealTween.kill());
    };

    onIntroComplete(revealPieces);

    return () => {
      cleanupTasks.forEach((task) => task());
    };
  }, [selector]);

  return { container };
}
