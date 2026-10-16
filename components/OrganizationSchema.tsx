import { EMAIL, LINKEDIN_URL, PHONE_TEL, SITE_URL } from "@/lib/site";

const DESCRIPTION =
  "Pour les TPE et PME, KONVRT installe deux systèmes complémentaires — OPERATOR pour diagnostiquer et automatiser, Site Web pour être visible et convertir — afin que votre performance ne dépende plus de vous.";

export default function OrganizationSchema() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "KONVRT",
    url: SITE_URL,
    description: DESCRIPTION,
    // TODO: ajouter "logo": `${SITE_URL}/logo.png` une fois un asset image dédié disponible
    sameAs: [LINKEDIN_URL],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: PHONE_TEL,
        email: EMAIL,
        contactType: "customer service",
        areaServed: "FR",
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
