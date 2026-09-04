import Reveal from "./Reveal";

const points = [
  {
    label: "Sur-mesure, jamais générique",
    body:
      "Nous calons chaque système sur votre contexte. Votre équipe, votre marché, votre rythme — aucune solution étagère.",
  },
  {
    label: "Un partenariat, pas une prestation",
    body:
      "Un projet ne s’arrête pas à la livraison. Nous restons engagés sur le résultat — dans la durée.",
  },
  {
    label: "De l’exécution, pas des idées",
    body:
      "Vous ne repartez pas avec une slide. Vous repartez avec un système qui tourne et des chiffres qui bougent.",
  },
];

export default function Pourquoi() {
  return (
    <section
      id="pourquoi"
      className="relative py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
                Pourquoi KONVRT
              </span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="mt-4 pb-[0.1em] font-display text-fluid-h2 font-semibold leading-[1.5] tracking-tightest text-ink">
                Une posture,
                <br />
                pas une méthode.
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 max-w-md text-fluid-body leading-relaxed text-muted">
                Nous ne vendons pas de recette. Nous faisons bouger vos
                chiffres &mdash; puis nous restons là pour ajuster.
              </p>
            </Reveal>
          </div>

          <ul className="lg:col-span-7">
            {points.map((p, i) => (
              <Reveal key={p.label} as="li" delay={0.08 + i * 0.08}>
                <div className="group relative flex items-start gap-5 border-b border-ink/[0.08] py-8 first:border-t sm:gap-7 sm:py-9">
                  <span
                    aria-hidden
                    className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent shadow-[0_0_0_4px_rgba(79,70,229,0.08)] transition-transform duration-500 ease-out-expo group-hover:scale-125"
                  />
                  <div>
                    <h3 className="pb-[0.1em] font-display text-fluid-h3 font-semibold leading-[1.5] tracking-tight text-ink">
                      {p.label}
                    </h3>
                    <p className="mt-3 text-fluid-body leading-relaxed text-muted">
                      {p.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
