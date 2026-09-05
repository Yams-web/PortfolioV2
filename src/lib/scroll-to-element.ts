import { gsap } from "./gsap";

const SCROLL_OFFSET_PX: number = 96;
const SCROLL_DURATION_SECONDS: number = 0.5;

export function scrollToElement(id: string): void {
  const target: HTMLElement | null = document.getElementById(id);

  if (!target) {
    return;
  }

  gsap.to(window, {
    duration: SCROLL_DURATION_SECONDS,
    ease: "none",
    scrollTo: { y: target, offsetY: SCROLL_OFFSET_PX },
  });

  window.history.replaceState(null, "", `#${id}`);
}

export function getCompetenceElementId(code: string): string {
  return `competence-${code.toLowerCase()}`;
}
