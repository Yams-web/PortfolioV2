import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// Point d'entrée unique pour GSAP dans le projet : le plugin React
// est enregistré ici une seule fois, plutôt que dans chaque composant
// qui anime quelque chose. Tout hook/composant d'animation importe
// gsap et useGSAP depuis ce module, jamais directement depuis "gsap".
gsap.registerPlugin(useGSAP);

export { gsap, useGSAP };
