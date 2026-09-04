const EMAIL = "arthur_jette@outlook.fr";
const PHONE_DISPLAY = "06 45 43 57 60";
const PHONE_TEL = "+33645435760";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-ink/[0.08] py-12 sm:py-14">
      <div className="mx-auto flex w-full max-w-content flex-col items-start gap-8 px-5 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <a
            href="#top"
            className="font-display text-2xl font-semibold tracking-tightest text-ink transition-colors hover:text-primary"
          >
            KONVRT
          </a>
          <p className="mt-2 text-sm text-muted">Convertir pour performer.</p>
        </div>

        <div className="flex flex-col items-start gap-1.5 md:items-end">
          <a
            href={`mailto:${EMAIL}`}
            className="text-fluid-body text-muted underline-offset-8 transition-colors hover:text-primary hover:underline"
          >
            {EMAIL}
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="text-sm text-muted/80 underline-offset-8 transition-colors hover:text-primary hover:underline"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="mt-2 text-sm text-muted">
            KONVRT — {year}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
