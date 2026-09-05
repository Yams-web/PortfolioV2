"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { scrollToElement } from "@/lib/scroll-to-element";

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#a-propos", label: "À propos" },
  { href: "#contact", label: "Contact" },
] as const;

function handleAnchorClick(
  event: React.MouseEvent<HTMLAnchorElement>,
  href: string
): void {
  event.preventDefault();
  scrollToElement(href.replace("#", ""));
}

export function Navbar(): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 w-full border-b border-[#BAC4C8]/10 bg-[#141414]/90 backdrop-blur">
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6"
      >
        <Link
          href="#accueil"
          onClick={(event) => handleAnchorClick(event, "#accueil")}
          className="text-xl font-semibold tracking-tight text-[#BAC4C8] transition-colors hover:text-white"
        >
          Yamin Lamiri
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(event) => handleAnchorClick(event, href)}
                className="text-base text-[#BAC4C8]/80 transition-colors hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/cv.pdf"
          download
          className="hidden rounded-full bg-purple-700 px-5 py-2 text-base font-medium text-white transition-colors hover:bg-purple-600 md:inline-block"
        >
          Télécharger le CV
        </Link>

        <button
          type="button"
          aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-md p-2 text-[#BAC4C8] transition-colors hover:text-white md:hidden"
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>

      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-[#BAC4C8]/10 px-4 py-4 sm:px-6">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                onClick={(event) => {
                  handleAnchorClick(event, href);
                  setIsOpen(false);
                }}
                className="block rounded-md px-2 py-2 text-base text-[#BAC4C8]/80 transition-colors hover:bg-white/5 hover:text-white"
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="pt-2">
            <Link
              href="/cv.pdf"
              download
              onClick={() => setIsOpen(false)}
              className="block rounded-full bg-purple-700 px-5 py-2 text-center text-base font-medium text-white transition-colors hover:bg-purple-600"
            >
              Télécharger le CV
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
