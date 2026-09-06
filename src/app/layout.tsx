import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yamin Lamiri — Développeur Web Full-Stack",
  description:
    "Portfolio de Yamin Lamiri, développeur web full-stack junior en formation à Epitech Lille : projets, compétences RNCP et parcours.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="bg-[#141414] text-[#BAC4C8]">
      <body className="min-h-screen max-w-screen overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
