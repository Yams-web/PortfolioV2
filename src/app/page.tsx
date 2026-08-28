import React from "react";
import { IntroAnimation, Navbar, Hero } from "@/components";

export default function LandingPage(): React.JSX.Element {
  return (
    <IntroAnimation>
      <Navbar />

      <main>
        <Hero />
      </main>
    </IntroAnimation>
  );
}
