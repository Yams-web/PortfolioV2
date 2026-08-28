"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { type IProject, type ProjectSize } from "../projects.data";

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

export interface IProjectCardProps {
  project: IProject;
}

// Contenu visible par défaut : le titre, plus un indice permanent (icône +
// libellé) qui signale que la carte est interactive. Cet indice reste
// affiché en permanence — on ne compte jamais uniquement sur la découverte
// du survol, ce qui serait une mauvaise pratique UX (affordance invisible).
export function ProjectCard({ project }: IProjectCardProps): React.JSX.Element {
  // Le survol (CSS group-hover/group-focus) couvre déjà souris et clavier.
  // Cet état ne sert que de filet de sécurité pour le tactile, où :hover
  // n'est pas fiable : un tap bascule l'affichage de la description.
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = () => setIsExpanded((current) => !current);

  return (
    <article
      tabIndex={0}
      role="button"
      aria-expanded={isExpanded}
      aria-label={`${project.title} — afficher la description`}
      onClick={toggle}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          toggle();
        }
      }}
      className={`group relative flex min-h-[220px] cursor-pointer flex-col overflow-hidden border border-transparent bg-[#121317] p-6 outline-none transition-colors duration-300 hover:border-[#00E5FF] focus-visible:border-[#00E5FF] sm:p-10 md:col-span-4 ${
        COLUMN_SPAN_BY_SIZE[project.size]
      }`}
    >
      {/* État de repos : titre + indice permanent d'interactivité. */}
      <div
        className={`flex h-full flex-col justify-between gap-6 transition-all duration-300 ${
          isExpanded
            ? "pointer-events-none -translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
        } group-hover:pointer-events-none group-hover:-translate-y-2 group-hover:opacity-0 group-focus:pointer-events-none group-focus:-translate-y-2 group-focus:opacity-0`}
      >
        <h3 className={TITLE_CLASS_BY_SIZE[project.size]}>{project.title}</h3>
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-[#c4c7c8]">
          <ArrowUpRight aria-hidden="true" size={16} />
          Survoler pour en savoir plus
        </div>
      </div>

      {/* État révélé (survol, focus clavier ou tap) : description complète. */}
      <div
        className={`absolute inset-0 flex flex-col justify-between gap-6 bg-[#121317] p-6 transition-all duration-300 sm:p-10 ${
          isExpanded
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        } group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus:pointer-events-auto group-focus:translate-y-0 group-focus:opacity-100`}
      >
        <h3 className={TITLE_CLASS_BY_SIZE[project.size]}>{project.title}</h3>
        <p className="whitespace-pre-line text-sm leading-[1.8] text-[#c4c7c8]">
          {project.description}
        </p>
      </div>
    </article>
  );
}
