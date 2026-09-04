import Founder from "./Founder";
import Reveal from "./Reveal";

const EMAIL = "arthur_jette@outlook.fr";
const PHONE_DISPLAY = "06 45 43 57 60";
const PHONE_TEL = "+33645435760";
const MAILTO = `mailto:${EMAIL}?subject=${encodeURIComponent(
  "Prise de contact — KONVRT"
)}`;

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-28 sm:py-32 lg:py-40"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow opacity-90"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />

      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
              Contact
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 pb-[0.1em] font-display text-fluid-h1 font-semibold leading-[1.5] tracking-tightest text-ink">
              Parlons de{" "}
              <span className="italic text-primary">votre activité.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-2xl text-fluid-lead leading-relaxed text-muted">
              Un email, une conversation, sans engagement. Nous regardons
              ensemble ce qui peut bouger &mdash; et à quel horizon.
            </p>
          </Reveal>

          {/* Fine hairline separates the founder signal from the CTA */}
          <Reveal delay={0.2}>
            <div
              aria-hidden
              className="mx-auto mt-10 h-px w-24 bg-gradient-to-r from-transparent via-ink/15 to-transparent"
            />
          </Reveal>

          {/* Founder reassurance block, inline (no section break) */}
          <div className="mt-10">
            <Founder />
          </div>

          <Reveal delay={0.24}>
            <div className="mt-12 flex flex-col items-center gap-5">
              <a
                href={MAILTO}
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-fluid-body font-medium text-white shadow-[0_12px_40px_-14px_rgba(79,70,229,0.6)] transition-all duration-300 ease-out-expo hover:bg-primary-hover hover:shadow-[0_20px_50px_-16px_rgba(124,58,237,0.7)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Écrire à Arthur
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                >
                  →
                </span>
              </a>

              <a
                href={MAILTO}
                className="font-display text-fluid-body font-medium text-muted underline-offset-8 transition-colors hover:text-primary hover:underline"
              >
                {EMAIL}
              </a>

              <a
                href={`tel:${PHONE_TEL}`}
                className="text-sm text-muted/80 underline-offset-8 transition-colors hover:text-primary hover:underline"
              >
                ou par téléphone &middot; {PHONE_DISPLAY}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
