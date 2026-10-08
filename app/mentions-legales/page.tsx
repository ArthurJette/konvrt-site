import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — KONVRT",
  description: "Mentions légales du site KONVRT.",
  robots: { index: false, follow: true },
};

/**
 * Page /mentions-legales — contenu minimal placeholder.
 * TODO: compléter avec les informations légales définitives (éditeur,
 * hébergeur, contact, propriété intellectuelle, données personnelles).
 */
export default function MentionsLegales() {
  return (
    <main className="relative py-24 sm:py-28 lg:py-36">
      <div className="mx-auto w-full max-w-content px-5 sm:px-8">
        <div className="mx-auto max-w-3xl">
          <span className="text-fluid-eyebrow font-medium uppercase tracking-[0.22em] text-primary">
            Informations légales
          </span>
          <h1 className="mt-4 pb-[0.25em] font-display text-fluid-h2 font-semibold leading-[1.5] tracking-tightest text-ink">
            Mentions légales
          </h1>

          <div className="mt-8 space-y-8 text-fluid-body leading-relaxed text-muted">
            <section>
              <h2 className="font-display text-fluid-h3 font-semibold leading-snug text-ink">
                Éditeur du site
              </h2>
              <p className="mt-3">
                À compléter — raison sociale, forme juridique, capital, siège
                social, RCS, numéro de TVA, directeur de la publication.
              </p>
            </section>

            <section>
              <h2 className="font-display text-fluid-h3 font-semibold leading-snug text-ink">
                Hébergeur
              </h2>
              <p className="mt-3">
                À compléter — nom de l&rsquo;hébergeur, adresse, contact.
              </p>
            </section>

            <section>
              <h2 className="font-display text-fluid-h3 font-semibold leading-snug text-ink">
                Contact
              </h2>
              <p className="mt-3">
                <a
                  href="mailto:arthur_jette@outlook.fr"
                  className="underline-offset-8 transition-colors hover:text-primary hover:underline"
                >
                  arthur_jette@outlook.fr
                </a>
              </p>
            </section>

            <section>
              <h2 className="font-display text-fluid-h3 font-semibold leading-snug text-ink">
                Propriété intellectuelle
              </h2>
              <p className="mt-3">
                À compléter — mention de propriété des contenus, marques et
                logos.
              </p>
            </section>

            <section>
              <h2 className="font-display text-fluid-h3 font-semibold leading-snug text-ink">
                Données personnelles
              </h2>
              <p className="mt-3">
                À compléter — traitement des données, droits RGPD, contact DPO
                le cas échéant.
              </p>
            </section>

            <p className="pt-6">
              <a
                href="/"
                className="underline-offset-8 transition-colors hover:text-primary hover:underline"
              >
                ← Retour à l&rsquo;accueil
              </a>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
