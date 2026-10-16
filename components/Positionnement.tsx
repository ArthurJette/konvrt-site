import Reveal from "./Reveal";

const assurances = [
  "Une vitrine qui donne envie de vous contacter, dès la première visite.",
  "Visible partout où vos clients vous cherchent aujourd’hui — y compris les nouvelles plateformes de réponse IA.",
  "Mise à jour automatique chaque mois. Vous ne touchez à rien.",
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
              La première brique&nbsp;: un{" "}
              <span className="text-primary">site qui travaille pour vous.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-6 text-fluid-lead leading-relaxed text-muted">
              Pas un site figé une fois livré. La plupart des sites vitrines
              sont une boutique fermée le dimanche &mdash; jolie, mais qui
              n&rsquo;évolue plus. Le vôtre continue de travailler pour vous,
              chaque mois, sans que vous y touchiez&nbsp;:
            </p>
          </Reveal>

          <ul className="mt-6 space-y-4">
            {assurances.map((line, i) => (
              <Reveal key={line} as="li" delay={0.2 + i * 0.06}>
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

          <Reveal delay={0.4}>
            <p className="mt-10 text-fluid-body leading-relaxed text-muted">
              Il y a quinze ans, bien référencer son site donnait dix ans
              d&rsquo;avance. La même bascule arrive avec les assistants IA
              que vos clients consultent désormais &mdash; nous
              l&rsquo;intégrons à chaque site.{" "}
              <span className="font-display font-medium text-ink">
                Pas en option. En standard.
              </span>
            </p>
          </Reveal>

          <Reveal delay={0.48}>
            <p className="mt-6 text-fluid-body leading-relaxed text-muted">
              Pour la plupart de nos clients, ce site n&rsquo;est qu&rsquo;un
              début. La vraie transformation vient avec l&rsquo;audit et les
              automatisations d&rsquo;OPERATOR.{" "}
              <a
                href="#services"
                className="font-display font-medium text-primary underline-offset-8 hover:underline"
              >
                Découvrir le système OPERATOR &rarr;
              </a>
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
