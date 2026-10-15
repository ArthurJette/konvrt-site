import Reveal from "./Reveal";

/**
 * Section FAQ — format pensé AEO/GEO : questions courtes, réponses
 * factuelles et directement citables, balisées en FAQPage (schema.org)
 * pour les extraits enrichis Google et les moteurs de réponse IA.
 * N'avancer ici que des faits déjà établis ailleurs sur le site —
 * pas de prix, délai ou chiffre non confirmé.
 */

type QA = { question: string; answer: string };

const faq: QA[] = [
  {
    question: "Quelle est la différence entre Site Web et OPERATOR ?",
    answer:
      "Site Web vous rend visible et convertit vos visiteurs en clients, avec des mises à jour automatiques chaque mois. OPERATOR diagnostique ce qui freine votre activité — commercial, marketing, process — puis construit les automatisations qui prennent en charge vos tâches répétitives. Les deux systèmes sont complémentaires, mais chacun reste vendable seul.",
  },
  {
    question: "Le site se met-il à jour tout seul après la livraison ?",
    answer:
      "Oui. La mise à jour automatique fait partie du système Site Web en standard, pas en option. Vous n'avez rien à toucher.",
  },
  {
    question: "Est-ce que je m'engage sur la durée ?",
    answer:
      "Non. Le premier échange se fait sans engagement — un email ou un appel pour regarder ensemble ce qui peut bouger pour votre activité, et à quel horizon.",
  },
  {
    question: "KONVRT travaille-t-il avec des entreprises partout en France ?",
    answer:
      "Oui, nous accompagnons des TPE et PME partout en France.",
  },
  {
    question: "Comment demander un devis ou un audit ?",
    answer:
      "Directement par email à arthur_jette@outlook.fr, ou via les boutons « Demander un devis » / « Demander un audit » de cette page — chaque demande part avec le bon sujet pré-rempli.",
  },
];

function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((qa) => ({
      "@type": "Question",
      name: qa.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: qa.answer,
      },
    })),
  };
}

export default function FAQ() {
  return (
    <section
      id="faq"
      aria-label="Questions fréquentes"
      className="relative py-24 sm:py-28 lg:py-36"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px w-3/4 max-w-content bg-gradient-to-r from-transparent via-ink/10 to-transparent"
      />

      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
              Questions fréquentes
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 pb-[0.25em] font-display text-fluid-h2 font-semibold leading-[1.5] tracking-tightest text-ink">
              Ce que l&rsquo;on nous{" "}
              <span className="text-muted">demande le plus.</span>
            </h2>
          </Reveal>

          <div className="mt-10 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
            {faq.map((qa, i) => (
              <Reveal key={qa.question} delay={0.08 + i * 0.05}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-fluid-body font-semibold leading-snug text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                    {qa.question}
                    <span
                      aria-hidden
                      className="shrink-0 text-xl font-normal text-primary transition-transform duration-300 ease-out-expo group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <p className="mt-3 max-w-2xl text-fluid-body leading-relaxed text-muted">
                    {qa.answer}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd()) }}
      />
    </section>
  );
}
