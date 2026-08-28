import React from "react";
import { PROJECTS } from "../projects.data";
import { ProjectCard } from "../project-card";

export function ProjectList(): React.JSX.Element {
  const projects = PROJECTS.filter((project) => project.description !== "");

  if (projects.length === 0) {
    return (
      <p className="border border-[#23252E] bg-[#121317] p-10 text-sm uppercase tracking-[0.1em] text-[#c4c7c8]">
        Contenu des projets en cours de rédaction.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-px border border-[#23252E] bg-[#23252E] md:grid-cols-12">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}
