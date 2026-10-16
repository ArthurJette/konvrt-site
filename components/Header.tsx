"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const EMAIL = "arthur_jette@outlook.fr";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Prise de contact — KONVRT"
)}`;

const anchors: Array<{ href: string; label: string }> = [
  { href: "#services", label: "Services" },
  { href: "#pourquoi", label: "Pourquoi KONVRT" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

/**
 * Sticky top nav — se contracte au scroll pour libérer de l'espace.
 * Placée en tout premier dans la page (avant <Hero />).
 * En dessous de md, la nav se replie dans un menu hamburger.
 */
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Ferme le menu mobile si l'écran repasse en desktop (resize/rotation).
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Empêche le scroll de la page derrière le menu ouvert.
  useEffect(() => {
    document.documentElement.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ease-out-expo ${
        scrolled || menuOpen
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
          className="inline-flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
        >
          <Image
            src="/brand/konvrt-logo-gradient.png"
            alt="KONVRT"
            width={2089}
            height={753}
            priority
            className={`w-auto transition-all duration-300 ease-out-expo ${
              scrolled ? "h-7" : "h-9"
            }`}
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

        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
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

          {/* Hamburger — visible uniquement en dessous de md */}
          <button
            type="button"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/[0.08] bg-white/70 text-ink transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <span
                aria-hidden
                className={`absolute left-0 right-0 h-px bg-ink transition-all duration-300 ease-out-expo ${
                  menuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                aria-hidden
                className={`absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-ink transition-opacity duration-200 ${
                  menuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                aria-hidden
                className={`absolute left-0 right-0 h-px bg-ink transition-all duration-300 ease-out-expo ${
                  menuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Panneau de navigation mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-menu"
            aria-label="Navigation mobile"
            key="mobile-menu"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/[0.08] bg-bg/95 backdrop-blur-md md:hidden"
          >
            <ul className="mx-auto flex w-full max-w-content flex-col px-5 py-4 sm:px-8">
              {anchors.map((a) => (
                <li key={a.href}>
                  <a
                    href={a.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-fluid-body text-muted transition-colors hover:text-ink"
                  >
                    {a.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>

      <div
        aria-hidden
        className={`pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent transition-opacity duration-300 ${
          scrolled ? "opacity-100" : "opacity-0"
        }`}
      />
    </header>
  );
}
