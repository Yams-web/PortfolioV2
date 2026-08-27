# CLAUDE.md

Contexte permanent pour Claude Code sur ce projet. À lire avant toute intervention.

## Projet

Portfolio personnel Epitech (titre RNCP), site vitrine unique (pas de séparation apprentissage/présentation — toutes les compétences et tous les projets retenus sont exposés dans une seule version publique).

## Contraintes imposées (non négociables)

- Flat Design
- Responsive
- Menu de navigation clair
- Bonnes pratiques SEO (vérifier avec Lighthouse)
- Doit contenir : phrase d'accroche + photo professionnelle, coordonnées + formulaire de contact, regroupement de plusieurs travaux, lien de téléchargement du CV (PDF), analyse de la progression dans le développement des compétences (pas juste une liste de projets)
- Chaque compétence RNCP démontrée doit être rattachée explicitement à un ou plusieurs projets dans le contenu, pas juste listée à côté

## Stack technique

- React + Vite
- GSAP (+ ScrollTrigger pour les animations au scroll) — une animation d'intro GSAP est déjà en place au démarrage du projet, ne pas la casser sans consultation
- Style : Tailwind (à confirmer si autre choix fait entre-temps)
- Déploiement : à définir (VPS OVH ou GitHub Pages)

## Conventions de code

- Composants React en PascalCase, un composant par fichier
- Un dossier par section/feature dans `src/components/`
- Privilégier des commits atomiques (une fonctionnalité = un commit), messages clairs en français ou anglais (à trancher et rester cohérent)
- Respecter les normes d'accessibilité (a11y) et les bonnes pratiques HTML/CSS/JS à jour

## Projets à intégrer et compétences RNCP démontrées

Chaque projet doit apparaître dans le portfolio avec : contexte, objectif, stack technique, compétences démontrées (justifiées), difficultés rencontrées, preuves (captures, lien repo, démo).

### Projet Libre
- Rédiger un cahier des charges
- Rédiger des spécifications techniques
- Rédiger le code de la solution
- Développer le prototype

### E-commerce
- Réaliser une maquette
- Identifier les fonctionnalités à développer
- Rédiger une présentation
- Déployer un environnement de travail
- Monitorer le lancement
- Implémenter la logique et la base de données

### IRC
- Intégrer les différents éléments
- Implémenter la partie front-end
- Implémenter des règles d'authentification

### MyCrudTester
- Implémenter un plan de tests

### Portfolio V1
- Déployer une application web

### DevResponsable
- Rédiger une documentation technique
- Rédiger une documentation utilisateur
- Identifier des améliorations qualitatives et de performance
- Analyser la qualité de l'ergonomie et de l'accessibilité
- Rédiger un document argumentatif

✅ Couverture : 20/20 compétences RNCP du titre mappées sur ces 6 projets.

## Structure du site (à valider avec les maquettes Stitch)

- Accueil (accroche + photo)
- Projets (liste filtrable, vue détaillée par projet)
- Compétences (mapping visuel compétences ↔ projets)
- À propos (parcours, philosophie, éventuellement autobiographie)
- Contact (formulaire + coordonnées + réseaux sociaux)
- CV (téléchargement PDF)

## Décisions prises en cours de route

- Pas de séparation "portfolio d'apprentissage" / "portfolio de présentation" : mix en une seule version publique unique.
- Maquettes Stitch en cours de tri : rien n'est encore validé pour le dev, ne pas se baser sur `design/exploration/` comme référence définitive tant que `design/retenu/` n'est pas peuplé.

_(À compléter au fil du projet : choix de librairie tranché, structure validée, convention adoptée, hébergeur choisi, etc. — pour éviter toute régression entre les sessions.)_

## Design

Maquettes générées sur Google Stitch à partir d'un cadrage NotebookLM. Possibilité d'affinage ultérieur sur Figma.

Structure du dossier `design/` :
```
design/
├── DESIGN.md         (design system exporté de Stitch : couleurs, typo, composants — à ajouter dès export)
├── retenu/           (planches validées, base du dev — vide pour l'instant)
├── exploration/       (3 maquettes déposées, en cours de tri, rien de définitif)
└── notes.md          (à créer : ce qui est retenu/écarté de chaque planche et pourquoi)
```

État actuel : 3 maquettes dans `exploration/`, aucune encore promue dans `retenu/`. Ne pas driver l'intégration des composants sur ces 3 planches tant qu'elles n'ont pas été validées et déplacées.

## Voir aussi

- `PROJECT_BRIEF.md` : détail complet des consignes Epitech et du mapping compétences (source de référence si besoin d'aller plus loin que ce résumé).
