import { EMAIL, LINKEDIN_URL, PHONE_DISPLAY, PHONE_TEL } from "@/lib/site";

function LinkedInIcon() {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      className="h-4 w-4"
      fill="currentColor"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.44-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.11 2.06 2.06 0 0 1 0 4.11zM7.12 20.45H3.56V9h3.56v11.45z" />
    </svg>
  );
}

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

          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 md:justify-end">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm text-muted/80 underline-offset-8 transition-colors hover:text-primary hover:underline"
            >
              <LinkedInIcon />
              LinkedIn
            </a>
            <a
              href="/mentions-legales"
              className="text-sm text-muted/80 underline-offset-8 transition-colors hover:text-primary hover:underline"
            >
              Mentions légales
            </a>
          </div>

          <p className="mt-2 text-sm text-muted">
            KONVRT — {year}. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
