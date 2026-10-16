import Image from "next/image";
import { LINKEDIN_URL } from "@/lib/site";
import Reveal from "./Reveal";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

/**
 * Compact founder block — a reassurance signal placed inside the
 * Contact section, above the CTA. Voluntarily *not* a section of its own
 * to preserve the page rhythm.
 */
export default function Founder() {
  return (
    <Reveal delay={0.06}>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <div className="relative h-24 w-24 shrink-0 sm:h-28 sm:w-28">
          <div className="h-full w-full overflow-hidden rounded-2xl ring-1 ring-ink/[0.06]">
            <Image
              src="/arthur.jpg"
              alt="Arthur Jette, fondateur de KONVRT"
              fill
              sizes="(min-width: 640px) 112px, 96px"
              className="object-cover object-center"
            />
          </div>
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Voir le profil LinkedIn d'Arthur Jette"
            className="absolute -bottom-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-white text-muted shadow-[0_6px_16px_-4px_rgba(15,23,42,0.25)] ring-1 ring-ink/[0.08] transition-all duration-300 ease-out-expo hover:scale-110 hover:text-primary"
          >
            <LinkedInIcon />
          </a>
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="pb-[0.25em] font-display text-fluid-h3 font-semibold leading-[1.5] tracking-tight text-ink">
            Arthur Jette
          </p>
          <p className="mt-1 text-fluid-eyebrow uppercase tracking-[0.22em] text-primary">
            Fondateur de KONVRT
          </p>
          <p className="mt-3 max-w-sm text-center text-fluid-body leading-relaxed text-muted sm:text-left">
            Entrepreneur depuis plus de cinq ans &mdash; formation marketing
            &amp; management.
          </p>
        </div>
      </div>
    </Reveal>
  );
}
