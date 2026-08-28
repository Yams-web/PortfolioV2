// Petit bus d'événements pour coordonner des animations GSAP indépendantes
// entre elles (ex : une section qui doit démarrer une fois l'écran de
// chargement terminé) sans les coupler directement entre composants.

export const INTRO_COMPLETE_EVENT = "portfolio:intro-complete";

/** À appeler une fois la timeline d'intro terminée (voir `useIntroAnimation`). */
export function dispatchIntroComplete(): void {
  window.dispatchEvent(new Event(INTRO_COMPLETE_EVENT));
}

/**
 * S'abonne à la fin de l'écran de chargement. Le callback n'est déclenché
 * qu'une seule fois — l'intro ne joue qu'à l'arrivée sur le site.
 */
export function onIntroComplete(callback: () => void): void {
  window.addEventListener(INTRO_COMPLETE_EVENT, callback, { once: true });
}
