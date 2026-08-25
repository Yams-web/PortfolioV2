import Link from "next/link";
import React, { useMemo } from "react";

export function Navbar(): React.JSX.Element {
  return useMemo(
    (): React.JSX.Element => (
      <div className="flex items-center justify-center w-screen">
        <Link href="#about">Yamin Lamiri</Link>
        <Link href="#About">About</Link>
        <Link href="#contact">Contact</Link>
      </div>
    ),
    []
  );
}
