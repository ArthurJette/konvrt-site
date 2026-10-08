"use client";

import { useEffect, useState } from "react";

const EMAIL = "arthur_jette@outlook.fr";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Prise de contact — KONVRT"
)}`;

const anchors: Array<{ href: string; label: string }> = [
  { href: "#services", label: "Services" },
  { href: "#pourquoi", label: "Pourquoi KONVRT" },
  { href: "#contact", label: "Contact" },
];

/**
 * Sticky top nav — se contracte au scroll pour libérer de l'espace.
 * Placée en tout premier dans la page (avant <Hero />).
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo ${
        scrolled
          ? "bg-bg/80 backdrop-blur-md"
          : "bg-bg/60 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex w-full max-w-content items-center justify-between px-5 sm:px-8 ${
          scrolled ? "py-3" : "py-5"
        } transition-all duration-300 ease-out-expo`}
      >
        <a
          href="#top"
          aria-label="KONVRT — retour en haut"
          className="inline-flex items-center gap-2 text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-muted transition-colors hover:text-ink"
        >
          <span
            aria-hidden
            className="h-px w-5 bg-gradient-to-r from-primary to-accent"
          />
          KONVRT
          <span
            aria-hidden
            className="h-px w-5 bg-gradient-to-r from-accent to-primary"
          />
        </a>

        <nav
          aria-label="Navigation principale"
          className="hidden items-center gap-8 md:flex"
        >
          {anchors.map((a) => (
            <a
              key={a.href}
              href={a.href}
              className="text-fluid-body text-muted underline-offset-8 transition-colors hover:text-ink hover:underline"
            >
              {a.label}
            </a>
          ))}
        </nav>

        <a
          href={MAILTO}
          className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-5 py-2.5 text-fluid-body font-medium text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.55)] transition-all duration-300 ease-out-expo hover:bg-primary-hover hover:shadow-[0_16px_40px_-14px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        >
          Prendre contact
          <span
            aria-hidden
            className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
          >
            →
          </span>
        </a>
      </div>

      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}
