export type ProjectSize = "lg" | "md" | "sm";

export interface IBadge {
  id: string;
  label: string;
  description: string;
}

export interface IProject {
  id: string;
  title: string;
  description: string;
  size: ProjectSize;
  stack: string[];
  competences: IBadge[];
}

export const PROJECTS: IProject[] = [
  {
    id: "e-commerce",
    title: "E-commerce",
    description:
      "Boutique en ligne spécialisée dans la vente de produits dérivés Pokémon, principalement des cartes à collectionner.",
    size: "lg",
    stack: ["Nuxt", "Vue", "Pinia", "TypeScript"],
    competences: [
      {
        id: "e-commerce-maquette",
        label: "C4",
        description: "Réaliser une maquette",
      },
      {
        id: "e-commerce-fonctionnalites",
        label: "C5",
        description: "Identifier les fonctionnalités à développer",
      },
      {
        id: "e-commerce-presentation",
        label: "C6",
        description: "Rédiger une présentation",
      },
      {
        id: "e-commerce-environnement",
        label: "C3",
        description: "Déployer un environnement de travail",
      },
      {
        id: "e-commerce-monitoring",
        label: "C17",
        description: "Monitorer le lancement",
      },
      {
        id: "e-commerce-logique-bdd",
        label: "C11",
        description: "Implémenter la logique et la base de données",
      },
    ],
  },
  {
    id: "mycrudtester",
    title: "MyCrudTester",
    description:
      "Mise en œuvre d'un plan de tests, fonctionnels et unitaires, sur les opérations CRUD (création, lecture, mise à jour, suppression) d'un utilisateur.",
    size: "sm",
    stack: ["Postman", "Jasmine"],
    competences: [
      {
        id: "mycrudtester-plan-de-tests",
        label: "C13",
        description: "Implémenter un plan de tests",
      },
    ],
  },
  {
    id: "projet-libre",
    title: "Projet Libre",
    description:
      "Conception d'un SaaS proposant une boîte à outils d'anonymisation de données sensibles, avec deux interfaces dédiées : une offre B2B pour les entreprises et une offre B2C pour les particuliers.",
    size: "md",
    stack: ["Python", "Nuxt", "OCR"],
    competences: [
      {
        id: "projet-libre-cdc",
        label: "C1",
        description: "Rédiger un cahier des charges",
      },
      {
        id: "projet-libre-specifications",
        label: "C2",
        description: "Rédiger des spécifications techniques",
      },
      {
        id: "projet-libre-code",
        label: "C8",
        description: "Rédiger le code de la solution",
      },
      {
        id: "projet-libre-prototype",
        label: "C7",
        description: "Développer le prototype",
      },
    ],
  },
  {
    id: "devresponsable",
    title: "DevResponsable",
    description:
      "Reprise d'un ancien projet e-commerce dans une démarche de développement responsable : amélioration de la qualité du code, des scores Lighthouse, du SEO et de l'accessibilité.",
    size: "md",
    stack: [],
    competences: [
      {
        id: "devresponsable-doc-technique",
        label: "C15",
        description: "Rédiger une documentation technique",
      },
      {
        id: "devresponsable-doc-utilisateur",
        label: "C16",
        description: "Rédiger une documentation utilisateur",
      },
      {
        id: "devresponsable-qualite-perf",
        label: "C18",
        description:
          "Identifier des améliorations qualitatives et de performance",
      },
      {
        id: "devresponsable-ergonomie-a11y",
        label: "C19",
        description: "Analyser la qualité de l'ergonomie et de l'accessibilité",
      },
      {
        id: "devresponsable-argumentaire",
        label: "C20",
        description: "Rédiger un document argumentatif",
      },
    ],
  },
  {
    id: "irc",
    title: "IRC",
    description:
      "Implémentation d'un client de messagerie de type IRC (Internet Relay Chat) : création de channels, discussion à plusieurs en temps réel entre différents comptes et navigateurs, avec gestion CRUD complète des utilisateurs et des channels.",
    size: "lg",
    stack: ["Socket.IO", "Next.js", "React", "Express"],
    competences: [
      {
        id: "irc-integration",
        label: "C9",
        description: "Intégrer les différents éléments",
      },
      {
        id: "irc-front-end",
        label: "C10",
        description: "Implémenter la partie front-end",
      },
      {
        id: "irc-authentification",
        label: "C12",
        description: "Implémenter des règles d'authentification",
      },
    ],
  },
  {
    id: "portfolio-v1",
    title: "Portfolio V1",
    description:
      "Première version du portfolio, déployée en production, conçue pour mettre en valeur l'étendue de mon travail à travers une direction artistique travaillée.",
    size: "sm",
    stack: ["Next.js"],
    competences: [
      {
        id: "portfolio-v1-deploiement",
        label: "C14",
        description: "Déployer une application web",
      },
    ],
  },
];
