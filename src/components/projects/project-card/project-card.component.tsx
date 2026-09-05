"use client";

import React, { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { type IProject, type ProjectSize } from "../projects.data";
import { BadgeList } from "../badge-list";

const COLUMN_SPAN_BY_SIZE: Record<ProjectSize, string> = {
  lg: "md:col-span-8",
  md: "md:col-span-6",
  sm: "md:col-span-4",
};

const TITLE_CLASS_BY_SIZE: Record<ProjectSize, string> = {
  lg: "text-3xl font-bold text-white sm:text-5xl",
  md: "text-2xl font-bold text-white sm:text-4xl",
  sm: "text-xl font-bold text-white sm:text-2xl",
};

export interface IProjectCardProps {
  project: IProject;
}

export function ProjectCard({ project }: IProjectCardProps): React.JSX.Element {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const toggle = (): void => setIsExpanded((current) => !current);

  return (
    <article
      id={project.id}
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
      className={`group relative grid min-h-55 scroll-mt-24 cursor-pointer border border-transparent bg-[#121317] p-6 outline-none transition-colors duration-300 hover:border-[#00E5FF] focus-visible:border-[#00E5FF] sm:p-10 md:col-span-4 ${
        COLUMN_SPAN_BY_SIZE[project.size]
      }`}
    >
      <div
        className={`col-start-1 row-start-1 flex flex-col justify-between gap-6 transition-all duration-300 ${
          isExpanded
            ? "pointer-events-none -translate-y-2 opacity-0"
            : "translate-y-0 opacity-100"
        } group-hover:pointer-events-none group-hover:-translate-y-2 group-hover:opacity-0 group-focus:pointer-events-none group-focus:-translate-y-2 group-focus:opacity-0`}
      >
        <h3 className={TITLE_CLASS_BY_SIZE[project.size]}>{project.title}</h3>
        <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.15em] text-[#c4c7c8]">
          <ArrowUpRight aria-hidden="true" size={16} />
          Survoler pour en savoir plus
        </div>
      </div>

      <div
        className={`col-start-1 row-start-1 flex flex-col justify-between gap-6 transition-all duration-300 ${
          isExpanded
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        } group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 group-focus:pointer-events-auto group-focus:translate-y-0 group-focus:opacity-100`}
      >
        <div className="flex flex-col gap-6">
          <h3 className={TITLE_CLASS_BY_SIZE[project.size]}>
            {project.title}
          </h3>
          <p className="whitespace-pre-line text-base leading-[1.7] text-[#c4c7c8] sm:text-lg">
            {project.description}
          </p>
        </div>
        <BadgeList badges={project.competences} />
      </div>
    </article>
  );
}
