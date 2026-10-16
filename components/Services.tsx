import Reveal from "./Reveal";

/**
 * Section Services : deux offres présentées comme UN seul système.
 * Site Web ouvre par une phrase de réponse directe extractible par
 * un moteur de réponse. OPERATOR expose ses trois phases séquentielles
 * via un stepper — chaque phase reste vendable seule.
 */

type Step = { label: string; body: string };

type CardContent =
  | { kind: "bullets"; items: string[] }
  | { kind: "stepper"; steps: Step[] };

type Service = {
  id: "siteweb" | "operator";
  eyebrow: string;
  title: string;
  answer?: string;
  tagline: string;
  content: CardContent;
  ctaLabel: string;
  ctaSubject: string;
  jsonLdDescription: string;
  icon: "siteweb" | "operator";
};

const EMAIL = "arthur_jette@outlook.fr";

function mailtoWithSubject(subject: string) {
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}`;
}

const services: Service[] = [
  {
    id: "operator",
    eyebrow: "Système OPERATOR",
    title: "OPERATOR",
    answer:
      "Le système OPERATOR audite votre activité commerciale, marketing puis technique, et construit les automatisations qui prennent en charge vos tâches répétitives — pour que votre performance ne dépende plus de vous.",
    tagline:
      "Diagnostiquer ce qui freine, puis automatiser ce qui doit tourner.",
    content: {
      kind: "stepper",
      steps: [
        {
          label: "Audit Commercial & Marketing",
          body: "Positionnement, acquisition, offre — ce qui freine votre croissance.",
        },
        {
          label: "Audit Technique & Automatisation",
          body: "Vos process et outils cartographiés — les automatisations priorisées.",
        },
        {
          label: "Construction des automatisations",
          body: "Vos tâches répétitives prises en charge, pour de bon.",
        },
      ],
    },
    ctaLabel: "Demander un audit",
    ctaSubject: "Demande d'audit KONVRT",
    jsonLdDescription:
      "Système OPERATOR pour TPE et PME, en trois phases séquentielles — chacune vendable seule : Audit Commercial & Marketing pour identifier ce qui freine la croissance, Audit Technique & Automatisation pour cartographier les process et outils et prioriser les automatisations, Construction des automatisations pour prendre en charge les tâches répétitives.",
    icon: "operator",
  },
  {
    id: "siteweb",
    eyebrow: "Système Présence",
    title: "Site Web",
    answer:
      "Le système Présence installe votre entreprise là où vos clients cherchent — site, moteurs de recherche, nouvelles plateformes de réponse — et se met à jour sans intervention.",
    tagline:
      "Votre entreprise, visible et crédible — partout où vos clients cherchent.",
    content: {
      kind: "bullets",
      items: [
        "Un site pensé pour convertir dès la première visite",
        "Une visibilité renforcée sur les moteurs de recherche et les nouvelles plateformes de réponse",
        "Une mise à jour automatique — vous ne touchez à rien",
      ],
    },
    ctaLabel: "Demander un devis",
    ctaSubject: "Demande de devis KONVRT — Site Web",
    jsonLdDescription:
      "Site internet pour TPE et PME : pensé pour convertir dès la première visite, visibilité renforcée sur les moteurs de recherche et les moteurs de réponse conversationnels, mise à jour automatique sans intervention.",
    icon: "siteweb",
  },
];

function ServiceIcon({ variant }: { variant: Service["icon"] }) {
  if (variant === "siteweb") {
    // Signal minimaliste : point central + arcs concentriques (idée de portée / diffusion)
    return (
      <svg
        aria-hidden
        viewBox="0 0 32 32"
        className="h-7 w-7 text-primary"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.25}
        strokeLinecap="round"
      >
        <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
        <path d="M11 21a7 7 0 0 1 0-10" />
        <path d="M21 11a7 7 0 0 1 0 10" />
        <path d="M7.5 24.5a12 12 0 0 1 0-17" />
        <path d="M24.5 7.5a12 12 0 0 1 0 17" />
      </svg>
    );
  }
  // Tableau de bord minimaliste : trois traits, un point de repère
  return (
    <svg
      aria-hidden
      viewBox="0 0 32 32"
      className="h-7 w-7 text-primary"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.25}
      strokeLinecap="round"
    >
      <rect x="4.5" y="6" width="23" height="20" rx="2.5" />
      <path d="M9 20l4-5 3.5 3 5.5-8" />
      <circle cx="22" cy="10" r="1.25" fill="currentColor" stroke="none" />
    </svg>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3.5">
      {items.map((b) => (
        <li key={b} className="flex items-start gap-3">
          <span
            aria-hidden
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br from-primary to-accent"
          />
          <span className="text-fluid-body leading-relaxed text-muted">
            {b}
          </span>
        </li>
      ))}
    </ul>
  );
}

function Stepper({ steps }: { steps: Step[] }) {
  return (
    <ol className="mt-6">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={step.label} className="flex gap-4">
            <div className="flex shrink-0 flex-col items-center">
              <span
                aria-hidden
                className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/30 bg-white font-display text-sm font-semibold text-primary"
              >
                {i + 1}
              </span>
              {!isLast && (
                <span
                  aria-hidden
                  className="mt-1 w-px flex-1 bg-ink/[0.12]"
                />
              )}
            </div>
            <div className={isLast ? "pt-1" : "pt-1 pb-6"}>
              <h4 className="font-display text-fluid-body font-semibold leading-snug tracking-tight text-ink">
                {step.label}
              </h4>
              <p className="mt-1.5 text-fluid-body leading-relaxed text-muted">
                {step.body}
              </p>
            </div>
          </li>
        );
      })}
    </ol>
  );
}

function serviceJsonLd(s: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `KONVRT — ${s.title}`,
    description: s.jsonLdDescription,
    provider: {
      "@type": "Organization",
      name: "KONVRT",
      url: "https://konvrt.fr",
    },
    areaServed: "FR",
  };
}

export default function Services() {
  return (
    <section
      id="services"
      aria-label="Services"
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
              Services
            </span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-4 pb-[0.25em] font-display text-fluid-h2 font-semibold leading-[1.5] tracking-tightest text-ink">
              Deux systèmes. Une seule vision de{" "}
              <span className="text-muted">votre activité.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 max-w-2xl text-fluid-lead leading-relaxed text-muted">
              Une présence qui convertit &mdash; et un système qui diagnostique,
              puis automatise ce qui doit tourner.
            </p>
          </Reveal>
        </div>

        {/* Grille des deux cartes */}
        <ul className="mt-14 grid grid-cols-1 gap-5 sm:mt-16 md:grid-cols-2 md:gap-6">
          {services.map((s, i) => (
            <Reveal key={s.id} as="li" delay={0.08 + i * 0.08}>
              <article className="group relative flex h-full flex-col rounded-2xl border border-ink/[0.08] bg-white/70 p-6 backdrop-blur-sm transition-transform duration-500 ease-out-expo hover:-translate-y-1 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="font-display text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
                      {s.eyebrow}
                    </span>
                    <h3 className="mt-3 pb-[0.25em] font-display text-fluid-h3 font-semibold leading-[1.5] tracking-tight text-ink">
                      {s.title}
                    </h3>
                  </div>
                  <div className="shrink-0 rounded-xl border border-ink/[0.06] bg-white/80 p-2.5">
                    <ServiceIcon variant={s.icon} />
                  </div>
                </div>

                {/* Phrase de réponse directe — extractible par un moteur de réponse */}
                {s.answer && (
                  <p className="mt-6 text-fluid-body leading-relaxed text-ink">
                    {s.answer}
                  </p>
                )}

                <p
                  className={`${
                    s.answer ? "mt-4" : "mt-6"
                  } font-display text-fluid-body italic leading-relaxed text-muted`}
                >
                  {s.tagline}
                </p>

                {s.content.kind === "bullets" ? (
                  <Bullets items={s.content.items} />
                ) : (
                  <Stepper steps={s.content.steps} />
                )}

                <div className="mt-auto flex flex-wrap items-center justify-end gap-3 border-t border-ink/[0.06] pt-6 sm:pt-7">
                  <a
                    href={mailtoWithSubject(s.ctaSubject)}
                    className="group/cta inline-flex items-center gap-1.5 font-display text-fluid-body font-medium text-primary underline-offset-8 transition-colors hover:text-primary-hover hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
                  >
                    {s.ctaLabel}
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-out-expo group-hover/cta:translate-x-1"
                    >
                      →
                    </span>
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        {/* Bandeau combo — visuellement distinct sans casser la grille */}
        <Reveal delay={0.24}>
          <div className="relative mt-6 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.06] via-accent/[0.04] to-transparent p-6 sm:p-9">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-accent-line opacity-80"
            />
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between md:gap-10">
              <div className="max-w-2xl">
                <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
                  Les deux ensemble
                </span>
                <p className="mt-3 pb-[0.25em] font-display text-fluid-h3 font-semibold leading-[1.5] tracking-tight text-ink">
                  Un système qui identifie et automatise ce qui vous freine.
                  <span className="text-muted">
                    {" "}
                    Un site qui capte ce que vous laissez sur la table.
                  </span>
                </p>
              </div>

              <a
                href={mailtoWithSubject("Prise de contact — KONVRT")}
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 sm:px-7 sm:py-3.5 text-fluid-body font-medium text-white shadow-[0_10px_30px_-12px_rgba(79,70,229,0.55)] transition-all duration-300 ease-out-expo hover:bg-primary-hover hover:shadow-[0_16px_40px_-14px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
              >
                Prendre contact
                <span
                  aria-hidden
                  className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                >
                  →
                </span>
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      {/* JSON-LD schema.org — un bloc Service par offre (sans offer chiffrée) */}
      {services.map((s) => (
        <script
          key={`ld-${s.id}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd(s)) }}
        />
      ))}
    </section>
  );
}
