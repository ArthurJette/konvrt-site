import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import "./globals.css";
import { SITE_URL } from "@/lib/site";
import OrganizationSchema from "@/components/OrganizationSchema";
import { Analytics } from "@vercel/analytics/next";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "KONVRT — Diagnostiquer. Automatiser. Performer.",
  description:
    "Pour les TPE et PME, KONVRT installe deux systèmes complémentaires — OPERATOR pour diagnostiquer et automatiser, Site Web pour être visible et convertir — afin que votre performance ne dépende plus de vous.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "KONVRT — Diagnostiquer. Automatiser. Performer.",
    description:
      "Deux systèmes complémentaires — OPERATOR et Site Web — pour que votre entreprise automatise ce qui doit tourner, soit visible et convertisse.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "KONVRT — Diagnostiquer. Automatiser. Performer.",
    description:
      "Deux systèmes complémentaires — OPERATOR et Site Web — pour que votre entreprise automatise ce qui doit tourner, soit visible et convertisse.",
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
    <html lang="fr" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-sans bg-bg text-ink antialiased">
        <OrganizationSchema />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
