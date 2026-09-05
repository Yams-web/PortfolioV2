import React from "react";
import { ReferentielTable } from "./referentiel-table";

export function ReferentielSection(): React.JSX.Element {
  return (
    <section
      id="competences"
      className="border-t border-[#23252E] bg-[#0d0e12] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <h2 className="text-xs font-semibold uppercase tracking-[0.15em] text-[#FFB020]">
            {"// Référentiel de compétences RNCP"}
          </h2>
          <p className="mt-4 text-2xl font-bold leading-tight text-white sm:text-4xl">
            Compétences validées
          </p>
          <p className="mt-4 text-sm leading-[1.8] text-[#c4c7c8]">
            Les 20 compétences du titre RNCP, regroupées par bloc de
            compétences, avec le projet qui démontre chacune d&apos;elles.
          </p>
        </header>

        <ReferentielTable />
      </div>
    </section>
  );
}
