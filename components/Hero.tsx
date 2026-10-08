import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-32 lg:pt-40 lg:pb-40"
    >
      {/* Very subtle indigo/violet ambient glow — no gimmicks */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-hero-glow"
      />
      {/* Fine top hairline in brand gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line opacity-70"
      />

      <div className="relative mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-muted">
              <span
                aria-hidden
                className="h-px w-6 bg-gradient-to-r from-primary to-accent"
              />
              KONVRT
              <span
                aria-hidden
                className="h-px w-6 bg-gradient-to-r from-accent to-primary"
              />
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-6 pb-[0.25em] font-display font-semibold leading-[1.5] tracking-tightest text-ink">
              <span className="block text-fluid-h1">Convertir</span>
              <span className="block text-fluid-h1">
                pour <span className="italic text-primary">performer.</span>
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mx-auto mt-8 max-w-2xl text-fluid-lead leading-relaxed text-muted">
              Un site qui vous amène des clients. Un système qui automatise
              ce qui vous prend du temps. Pour que votre performance ne
              dépende plus de vous.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-fluid-body font-medium text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.55)] transition-all duration-300 ease-out-expo hover:bg-primary-hover hover:shadow-[0_16px_40px_-14px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Prendre contact
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
              <a
                href="#services"
                className="text-fluid-body text-muted underline-offset-8 transition-colors hover:text-ink hover:underline"
              >
                Voir nos deux systèmes
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Bottom hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />
    </section>
  );
}
