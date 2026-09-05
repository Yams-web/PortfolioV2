import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

// Point d'entrée unique pour GSAP dans le projet : les plugins sont
// enregistrés ici une seule fois, plutôt que dans chaque composant
// qui anime quelque chose. Tout hook/composant d'animation importe
// gsap/useGSAP/ScrollTrigger/ScrollToPlugin depuis ce module, jamais
// directement depuis "gsap".
gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollToPlugin);

export { gsap, useGSAP, ScrollTrigger, ScrollToPlugin };
