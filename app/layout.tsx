import type { Metadata, Viewport } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import OrganizationSchema from "@/components/OrganizationSchema";
import { Analytics } from "@vercel/analytics/next";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KONVRT — Convertir pour performer.",
  description:
    "Pour les TPE et PME, KONVRT installe deux systèmes complémentaires — Site Web pour être visible et convertir, OPERATOR pour diagnostiquer et automatiser — afin que votre performance ne dépende plus de vous.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "KONVRT — Convertir pour performer.",
    description:
      "Deux systèmes complémentaires — Site Web et OPERATOR — pour que votre entreprise soit visible, convertisse et automatise ce qui doit tourner.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KONVRT — Convertir pour performer.",
    description:
      "Deux systèmes complémentaires — Site Web et OPERATOR — pour que votre entreprise soit visible, convertisse et automatise ce qui doit tourner.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FAFAF9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${syne.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-bg text-ink antialiased">
        <OrganizationSchema />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
