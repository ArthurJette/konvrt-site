import Reveal from "./Reveal";

/**
 * Section Réalisations : vitrine de cas clients.
 * Contenu actuellement en placeholder — les entrées du tableau `realisations`
 * ci-dessous sont à remplacer une fois les vrais cas rédigés et illustrés.
 * Ne pas inventer de nom de client ni de résultat chiffré tant que la
 * confidentialité et les chiffres n'ont pas été validés.
 */

type Realisation = {
  id: string;
  caption: string;
  description: string;
};

const realisations: Realisation[] = [
  {
    id: "placeholder-1",
    caption: "Cas client à ajouter",
    description:
      "Description à venir — contexte, système déployé, et bascule observée.",
  },
  {
    id: "placeholder-2",
    caption: "Cas client à ajouter",
    description:
      "Description à venir — contexte, système déployé, et bascule observée.",
  },
  {
    id: "placeholder-3",
    caption: "Cas client à ajouter",
    description:
      "Description à venir — contexte, système déployé, et bascule observée.",
  },
];

export default function Realisations() {
  return (
    <section
      id="realisations"
      aria-label="Réalisations"
      className="relative py-16 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-3xl">
          <Reveal>
            <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
              Réalisations
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 pb-[0.25em] font-display text-fluid-h2 font-semibold leading-[1.5] tracking-tightest text-ink">
              Ce que nous avons installé{" "}
              <span className="text-muted">chez nos clients.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-fluid-lead leading-relaxed text-muted">
              Des systèmes concrets, livrés et suivis &mdash; pas des slides.
            </p>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
          {realisations.map((r, i) => (
            <Reveal key={r.id} as="li" delay={0.08 + i * 0.08}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink/[0.08] bg-white/70 p-6 backdrop-blur-sm transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8">
                <div className="relative aspect-video overflow-hidden rounded-xl border border-ink/[0.06] bg-ink/[0.04]">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="rounded-full border border-ink/[0.1] bg-white/70 px-3 py-1 font-display text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-muted backdrop-blur-sm">
                      Exemple à venir
                    </span>
                  </div>
                </div>

                <p className="mt-6 font-display text-fluid-body font-semibold leading-snug text-ink">
                  {r.caption}
                </p>
                <p className="mt-3 text-fluid-body leading-relaxed text-muted">
                  {r.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
