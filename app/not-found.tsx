import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — KONVRT",
  description: "Cette page n'existe pas ou a été déplacée.",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center overflow-hidden py-24">
      {/* Same ambient glow as the Hero, for visual continuity */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line opacity-70"
      />

      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-muted">
            <span
              aria-hidden
              className="h-px w-6 bg-gradient-to-r from-primary to-accent"
            />
            Erreur 404
            <span
              aria-hidden
              className="h-px w-6 bg-gradient-to-r from-accent to-primary"
            />
          </span>

          <h1 className="mt-6 pb-[0.25em] font-display text-fluid-h1 font-semibold leading-[1.5] tracking-tightest text-ink">
            Cette page
            <br />
            n&rsquo;a pas <span className="italic text-primary">converti.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-md text-fluid-lead leading-relaxed text-muted">
            La page que vous cherchez n&rsquo;existe pas, a été déplacée, ou
            n&rsquo;a jamais été construite. Repartons sur une bonne base.
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
            <a
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-fluid-body font-medium text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.55)] transition-all duration-300 ease-out-expo hover:bg-primary-hover hover:shadow-[0_16px_40px_-14px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Retour à l&rsquo;accueil
              <span
                aria-hidden
                className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
              >
                →
              </span>
            </a>
            <a
              href="/#contact"
              className="text-fluid-body text-muted underline-offset-8 transition-colors hover:text-ink hover:underline"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />
    </main>
  );
}
