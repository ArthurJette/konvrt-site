import Reveal from "./Reveal";

const assurances = [
  "Une vitrine qui donne envie de vous contacter, dès la première visite.",
  "Un panneau indicateur, visible sur toutes les routes que prennent vos clients aujourd’hui pour vous trouver — y compris les nouvelles.",
  "Un entretien qui se fait sans vous : chaque mois, votre présence se met à jour toute seule.",
];

export default function Positionnement() {
  return (
    <section id="positionnement" className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
              Positionnement
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-6 pb-[0.25em] font-display text-fluid-h2 font-semibold leading-[1.5] tracking-tightest text-ink">
              Notre point de départ, c&rsquo;est un{" "}
              <span className="text-primary">site internet.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-fluid-lead leading-relaxed text-muted">
              Mais pas un site qui reste figé une fois livré. La plupart des
              sites vitrines fonctionnent comme une boutique fermée le
              dimanche &mdash; jolie, mais qui n&rsquo;évolue plus. Le vôtre
              continue de travailler pour vous, chaque mois, sans que vous
              ayez à y toucher.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <p className="mt-10 text-fluid-body leading-relaxed text-ink">
              Concrètement, trois choses sont assurées en même temps&nbsp;:
            </p>
          </Reveal>

          <ul className="mt-5 space-y-4">
            {assurances.map((line, i) => (
              <Reveal key={line} as="li" delay={0.28 + i * 0.06}>
                <div className="flex items-start gap-4">
                  <span
                    aria-hidden
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent"
                  />
                  <span className="text-fluid-body leading-relaxed text-muted">
                    {line}
                  </span>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal delay={0.48}>
            <p className="mt-12 text-fluid-body leading-relaxed text-muted">
              Il y a quinze ans, les entreprises qui ont compris le
              référencement Google avant les autres ont pris dix ans
              d&rsquo;avance sur leur marché. La même bascule est en train de
              se produire, sur les nouveaux assistants que vos clients
              interrogent à la place d&rsquo;un moteur de recherche classique.
              Nous construisons cette avance dans chaque site que nous
              livrons.{" "}
              <span className="font-display font-medium text-ink">
                Pas en option. En standard.
              </span>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
