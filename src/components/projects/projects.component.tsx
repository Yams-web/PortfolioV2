import React from "react";
import { ProjectList } from "./project-list";

export function Projects(): React.JSX.Element {
  return (
    <section
      id="projets"
      className="scroll-mt-24 border-t border-[#23252E] bg-[#0d0e12] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#00E5FF]">
            {"// Sélection de travaux"}
          </p>
          <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Projets
          </h2>
          <p className="mt-4 text-base leading-[1.7] text-[#c4c7c8] sm:text-lg">
            Une sélection de projets d&apos;études et personnels illustrant
            mon parcours de développement.
          </p>
          <p className="mt-2 text-base leading-[1.7] text-[#c4c7c8]/70">
            Survolez une carte (ou sélectionnez-la au clavier / tactile) pour
            afficher sa description.
          </p>
        </header>

        <ProjectList />
      </div>
    </section>
  );
}
