import React from "react";
import {
  IntroAnimation,
  Navbar,
  Hero,
  Projects,
  ReferentielSection,
  AboutSection,
  ContactSection,
} from "@/components";

export default function LandingPage(): React.JSX.Element {
  return (
    <IntroAnimation>
      <Navbar />

      <main className="pt-24">
        <Hero />
        <Projects />
        <ReferentielSection />
        <AboutSection />
        <ContactSection />
      </main>
    </IntroAnimation>
  );
}
