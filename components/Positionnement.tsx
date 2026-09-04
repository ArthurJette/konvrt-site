import Reveal from "./Reveal";

export default function Positionnement() {
  return (
    <section
      id="positionnement"
      className="relative py-24 sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
              Positionnement
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <p className="mt-6 pb-[0.1em] font-display text-fluid-h2 font-medium leading-[1.5] tracking-tight text-ink">
              KONVRT n&rsquo;est ni une agence web, ni une agence de com. Nous
              prenons en charge ce qui freine votre croissance &mdash;
              jusqu&rsquo;aux systèmes qui débloquent la suite.
            </p>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-fluid-lead leading-relaxed text-muted">
              Vous gagnez du temps, de la clarté et une performance qui ne
              dépend plus de votre disponibilité.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
