export type ProjectSize = "lg" | "md" | "sm";

export interface Project {
  id: string;
  title: string;
  /** Description longue du projet, fournie au fil de l'eau (voir échanges avec Yamin). */
  description: string;
  /**
   * Poids visuel de la carte dans la grille bento : reflète le nombre de
   * compétences RNCP rattachées au projet dans CLAUDE.md (plus il y en a,
   * plus la carte est grande).
   */
  size: ProjectSize;
}

// Ordre pensé pour former des lignes complètes de 12 colonnes en desktop
// (lg=8 + sm=4, puis md=6 + md=6, puis lg=8 + sm=4) tout en alternant les
// cartes les plus importantes avec les plus modestes.
export const PROJECTS: Project[] = [
  {
    id: "e-commerce",
    title: "E-commerce",
    description:
      "Boutique en ligne spécialisée dans la vente de produits dérivés Pokémon, principalement des cartes à collectionner.",
    size: "lg",
  },
  {
    id: "mycrudtester",
    title: "MyCrudTester",
    description:
      "Mise en œuvre d'un plan de tests, fonctionnels et unitaires, sur les opérations CRUD (création, lecture, mise à jour, suppression) d'un utilisateur.",
    size: "sm",
  },
  {
    id: "projet-libre",
    title: "Projet Libre",
    description:
      "Conception d'un SaaS proposant une boîte à outils d'anonymisation de données sensibles, avec deux interfaces dédiées : une offre B2B pour les entreprises et une offre B2C pour les particuliers.",
    size: "md",
  },
  {
    id: "devresponsable",
    title: "DevResponsable",
    description:
      "Reprise d'un ancien projet e-commerce dans une démarche de développement responsable : amélioration de la qualité du code, des scores Lighthouse, du SEO et de l'accessibilité.",
    size: "md",
  },
  {
    id: "irc",
    title: "IRC",
    description:
      "Implémentation d'un client de messagerie de type IRC (Internet Relay Chat) : création de channels, discussion à plusieurs en temps réel entre différents comptes et navigateurs, avec gestion CRUD complète des utilisateurs et des channels.",
    size: "lg",
  },
  {
    id: "portfolio-v1",
    title: "Portfolio V1",
    description:
      "Première version du portfolio, déployée en production, conçue pour mettre en valeur l'étendue de mon travail à travers une direction artistique travaillée.",
    size: "sm",
  },
];
