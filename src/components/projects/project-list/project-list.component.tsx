import React from "react";
import { PROJECTS, type IProject } from "../projects.data";
import { ProjectCard } from "../project-card";

const PUBLISHED_PROJECTS: IProject[] = PROJECTS.filter(
  (project: IProject) => project.description !== ""
);

export function ProjectList(): React.JSX.Element {
  if (PUBLISHED_PROJECTS.length === 0) {
    return (
      <p className="border border-[#23252E] bg-[#121317] p-10 text-base leading-[1.7] text-[#c4c7c8] sm:text-lg">
        Contenu des projets en cours de rédaction.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-px border border-[#23252E] bg-[#23252E] md:grid-cols-12">
      {PUBLISHED_PROJECTS.map((project: IProject) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
