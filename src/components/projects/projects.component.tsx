import React from "react";
import { PROJECTS, type ProjectSize } from "./projects.data";

// Répartition des cartes sur la grille 12 colonnes (desktop), en écho au
// bento grid de la maquette d'exploration `design/exploration/project.html`.
// Les badges de compétences/outils et le tableau référentiel RNCP ne sont
// volontairement pas repris ici : ce sont des évolutions à venir.
//
// La taille de chaque carte (`size`, défini dans projects.data.ts) reflète
// son importance : plus un projet couvre de compétences RNCP, plus sa carte
// est grande et son titre mis en avant.
const COLUMN_SPAN_BY_SIZE: Record<ProjectSize, string> = {
  lg: "md:col-span-8",
  md: "md:col-span-6",
  sm: "md:col-span-4",
};

const TITLE_CLASS_BY_SIZE: Record<ProjectSize, string> = {
  lg: "text-2xl font-bold text-white sm:text-4xl",
  md: "text-xl font-bold text-white sm:text-3xl",
  sm: "text-lg font-bold text-white sm:text-xl",
};

export function Projects(): React.JSX.Element {
  const projects = PROJECTS.filter((project) => project.description !== "");

  return (
    <section
      id="projets"
      className="border-t border-[#23252E] bg-[#0d0e12] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#00E5FF]">
            // Sélection de travaux
          </h2>
          <p className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
            Projets
          </p>
          <p className="mt-4 text-sm leading-[1.8] text-[#c4c7c8]">
            Une sélection de projets d&apos;études et personnels illustrant
            mon parcours de développement.
          </p>
        </header>

        {projects.length === 0 ? (
          <p className="border border-[#23252E] bg-[#121317] p-10 text-sm uppercase tracking-[0.1em] text-[#c4c7c8]">
            Contenu des projets en cours de rédaction.
          </p>
        ) : (
          <div className="grid grid-cols-1 gap-px border border-[#23252E] bg-[#23252E] md:grid-cols-12">
            {projects.map((project) => (
              <article
                key={project.id}
                className={`flex flex-col justify-between gap-6 bg-[#121317] p-6 sm:p-10 md:col-span-4 ${
                  COLUMN_SPAN_BY_SIZE[project.size]
                }`}
              >
                <h3 className={TITLE_CLASS_BY_SIZE[project.size]}>
                  {project.title}
                </h3>
                <p className="whitespace-pre-line text-sm leading-[1.8] text-[#c4c7c8]">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
