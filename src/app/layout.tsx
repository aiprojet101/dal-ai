import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dal-AI | Agence Web - Sites Internet pour Particuliers, PME & PMI",
  description:
    "Dal-AI conçoit des sites internet modernes, performants et sur-mesure pour particuliers, PME et PMI. Design premium, SEO optimisé, résultats concrets.",
  keywords: [
    "création site internet",
    "agence web",
    "site vitrine",
    "site e-commerce",
    "PME",
    "PMI",
    "web design",
    "développement web",
    "dal-ai",
  ],
  authors: [{ name: "Dal-AI" }],
  openGraph: {
    title: "Dal-AI | Agence Web Premium",
    description:
      "Sites internet modernes et performants pour particuliers, PME et PMI.",
    url: "https://dal-ai.com",
    siteName: "Dal-AI",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="min-h-screen grid-pattern">
        {children}
      </body>
    </html>
  );
}
