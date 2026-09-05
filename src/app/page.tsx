import React from "react";
import {
  IntroAnimation,
  Navbar,
  Hero,
  Projects,
  ReferentielSection,
} from "@/components";

export default function LandingPage(): React.JSX.Element {
  return (
    <IntroAnimation>
      <Navbar />

      <main>
        <Hero />
        <Projects />
        <ReferentielSection />
      </main>
    </IntroAnimation>
  );
}
