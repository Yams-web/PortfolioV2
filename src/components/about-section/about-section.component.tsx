import React from "react";

const ABOUT_PARAGRAPHS: string[] = [
  "Parlons un peu de mon parcours, pour le moins atypique.",
  "Depuis tout petit, j'ai un attrait particulier pour le monde de l'informatique. J'ai énormément joué aux jeux vidéo pendant ma jeunesse, notamment parce que je voulais devenir joueur professionnel sur League of Legends.",
  "J'ai eu l'occasion, en 2024, de suivre une initiation au développement web grâce à l'association Z-Code pour l'emploi. À ne pas voir le temps passer en codant, j'ai vite compris que c'était le métier que je voulais exercer.",
  "Par la suite, j'ai pu rejoindre Epitech avec le programme Web@cadémique, et me voilà aujourd'hui à la fin de ce cycle qui aura duré deux ans. J'ai pour ambition de continuer à me former dans ce domaine et de poursuivre mes études en 3ᵉ année de Bachelor.",
  "En dehors de ça, mes passions sont le sport (le basket et le running principalement). J'adore également la gastronomie, et découvrir de nouvelles saveurs venues d'autres pays.",
];

export function AboutSection(): React.JSX.Element {
  return (
    <section
      id="a-propos"
      className="scroll-mt-24 border-t border-[#23252E] bg-[#0d0e12] px-4 py-20 sm:px-6 sm:py-28"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-16 max-w-2xl">
          <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-[#00E5FF]">
            {"// À propos"}
          </h2>
          <p className="mt-4 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Mon parcours
          </p>
        </header>

        <div className="border border-[#23252E] bg-[#121317] p-6 sm:p-10">
          <div className="flex max-w-3xl flex-col gap-6">
            {ABOUT_PARAGRAPHS.map((paragraph: string) => (
              <p
                key={paragraph}
                className="text-base leading-[1.7] text-[#c4c7c8] sm:text-lg"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
