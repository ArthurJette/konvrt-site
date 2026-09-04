import Reveal from "./Reveal";

const pillars = [
  {
    number: "01",
    title: "Être vu et choisi",
    body:
      "Une présence qui convertit vos visiteurs en interlocuteurs. Les bonnes conversations arrivent — au bon moment.",
  },
  {
    number: "02",
    title: "Une exécution qui tourne",
    body:
      "Ce qui doit tourner tourne — sans vous. Vos équipes retrouvent leur énergie sur ce qui crée de la valeur.",
  },
  {
    number: "03",
    title: "Un pilotage limpide",
    body:
      "Un tableau de bord lisible et à jour. Vous arbitrez sur des faits — jamais à vue.",
  },
];

export default function Pillars() {
  return (
    <section
      id="piliers"
      className="relative py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="max-w-2xl">
          <Reveal>
            <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
              Ce que ça change
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 pb-[0.1em] font-display text-fluid-h2 font-semibold leading-[1.5] tracking-tightest text-ink">
              Trois axes &mdash; un même résultat&nbsp;:{" "}
              <span className="text-muted">la performance qui tourne.</span>
            </h2>
          </Reveal>
        </div>

        {/*
          Trois cartes strictement équivalentes : même bordure, même fond,
          même comportement au survol. Aucun accent visuel ne doit hiérarchiser
          l'une par rapport aux autres.
        */}
        <ul className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-3 md:gap-6">
          {pillars.map((p, i) => (
            <Reveal key={p.number} as="li" delay={0.08 + i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white/70 p-7 backdrop-blur-sm transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8">
                <div className="flex items-baseline justify-between">
                  <span className="font-display text-fluid-eyebrow font-medium tracking-[0.22em] text-primary">
                    {p.number}
                  </span>
                  <span
                    aria-hidden
                    className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-primary to-accent"
                  />
                </div>

                <h3 className="mt-6 pb-[0.1em] font-display text-fluid-h3 font-semibold leading-[1.5] tracking-tight text-ink">
                  {p.title}
                </h3>

                <p className="mt-4 text-fluid-body leading-relaxed text-muted">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
