import React from "react";

export function Footer(): React.JSX.Element {
  const currentYear: number = new Date().getFullYear();

  return (
    <footer className="border-t border-[#23252E] bg-[#0d0e12] px-4 py-8 sm:px-6">
      <p className="mx-auto max-w-6xl text-center text-sm text-[#c4c7c8]/70">
        © {currentYear} Yamin Lamiri. Tous droits réservés.
      </p>
    </footer>
  );
}
