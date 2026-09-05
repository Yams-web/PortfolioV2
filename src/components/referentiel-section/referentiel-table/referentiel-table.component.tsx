import React from "react";
import { PROJECTS, type IBadge, type IProject } from "@/components/projects";

interface ICompetenceEntry {
  code: string;
  order: number;
  description: string;
  projectTitle: string;
}

interface ICompetenceBlock {
  id: string;
  title: string;
  entries: ICompetenceEntry[];
}

interface ICompetenceBlockDefinition {
  id: string;
  title: string;
  minOrder: number;
  maxOrder: number;
}

const COMPETENCE_BLOCK_DEFINITIONS: ICompetenceBlockDefinition[] = [
  { id: "bc01", title: "BC01 : Cadrer un projet", minOrder: 1, maxOrder: 6 },
  {
    id: "bc02",
    title: "BC02 : Développer une solution",
    minOrder: 7,
    maxOrder: 14,
  },
  { id: "bc03", title: "BC03 : Assurance qualité", minOrder: 15, maxOrder: 20 },
];

function parseCompetenceOrder(code: string): number {
  return Number.parseInt(code.replace("C", ""), 10);
}

function buildCompetenceEntries(projects: IProject[]): ICompetenceEntry[] {
  const entries: ICompetenceEntry[] = projects.flatMap((project: IProject) =>
    project.competences.map((competence: IBadge) => ({
      code: competence.label,
      order: parseCompetenceOrder(competence.label),
      description: competence.description,
      projectTitle: project.title,
    }))
  );

  return entries.sort(
    (a: ICompetenceEntry, b: ICompetenceEntry) => a.order - b.order
  );
}

function buildCompetenceBlocks(projects: IProject[]): ICompetenceBlock[] {
  const entries: ICompetenceEntry[] = buildCompetenceEntries(projects);

  return COMPETENCE_BLOCK_DEFINITIONS.map(
    (block: ICompetenceBlockDefinition) => ({
      id: block.id,
      title: block.title,
      entries: entries.filter(
        (entry: ICompetenceEntry) =>
          entry.order >= block.minOrder && entry.order <= block.maxOrder
      ),
    })
  );
}

export function ReferentielTable(): React.JSX.Element {
  const blocks: ICompetenceBlock[] = buildCompetenceBlocks(PROJECTS);

  return (
    <div className="grid grid-cols-1 gap-px border border-[#23252E] bg-[#23252E] md:grid-cols-3">
      {blocks.map((block: ICompetenceBlock) => (
        <div
          key={block.id}
          className="flex flex-col gap-6 bg-[#121317] p-6 sm:p-8"
        >
          <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFB020]">
            {block.title}
          </h3>
          <ul className="flex flex-col gap-5">
            {block.entries.map((entry: ICompetenceEntry) => (
              <li
                key={entry.code}
                className="flex flex-col gap-1 border-t border-[#23252E] pt-4 first:border-t-0 first:pt-0"
              >
                <span className="text-[10px] font-semibold uppercase tracking-widest text-[#FFB020]">
                  {entry.code}
                </span>
                <p className="text-sm leading-[1.7] text-white">
                  {entry.description}
                </p>
                <span className="text-xs uppercase tracking-[0.1em] text-[#c4c7c8]">
                  {entry.projectTitle}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
