"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

const EMAIL = "arthur_jette@outlook.fr";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Prise de contact — KONVRT"
)}`;

/**
 * Floating mobile-only contact button.
 * Appears after the hero and hides on the contact section
 * so it never duplicates the primary CTA when it's already visible.
 */
export default function MobileCTA() {
  const [visible, setVisible] = useState(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    const contact = document.getElementById("contact");
    const hero = document.getElementById("top");

    // Show after leaving hero.
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { rootMargin: "-40% 0px 0px 0px" }
    );
    if (hero) heroObserver.observe(hero);

    // Hide once contact section is in view.
    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(false);
      },
      { threshold: 0.15 }
    );
    if (contact) contactObserver.observe(contact);

    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.a
          key="mobile-cta"
          href={MAILTO}
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed bottom-5 left-1/2 z-40 -translate-x-1/2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-white shadow-[0_14px_40px_-12px_rgba(79,70,229,0.65)] transition-colors hover:bg-primary-hover md:hidden"
        >
          Écrire un email →
        </motion.a>
      )}
    </AnimatePresence>
  );
}
