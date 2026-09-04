import Image from "next/image";
import Reveal from "./Reveal";

/**
 * Compact founder block — a reassurance signal placed inside the
 * Contact section, above the CTA. Voluntarily *not* a section of its own
 * to preserve the page rhythm.
 */
export default function Founder() {
  return (
    <Reveal delay={0.06}>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-5 sm:flex-row sm:items-center sm:gap-6 sm:text-left">
        <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl ring-1 ring-ink/[0.06] sm:h-28 sm:w-28">
          <Image
            src="/arthur.jpg"
            alt="Arthur Jette, fondateur de KONVRT"
            fill
            sizes="(min-width: 640px) 112px, 96px"
            className="object-cover object-center"
          />
        </div>

        <div className="flex flex-col items-center sm:items-start">
          <p className="pb-[0.1em] font-display text-fluid-h3 font-semibold leading-[1.5] tracking-tight text-ink">
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
