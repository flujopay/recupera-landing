const SENA_BASE_URL = "https://www.somossena.com";

// ==========================================
// Social Links
// ==========================================
export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/sena.latam",
  instagram: "https://www.instagram.com/sena.latam",
  linkedin: "https://www.linkedin.com/company/flujolink/posts/?feedView=all",
  youtube: "https://www.youtube.com/@flujolink",
};

// ==========================================
// Contact Info
// ==========================================
export const CONTACT_INFO = {
  email: "hola@somossena.com",
  phone: "+569 4448 9673",
};

// ==========================================
// Footer Navigation Links
// ==========================================
export const FOOTER_EMPRESA = [
  {
    label: "Sobre nosotros",
    href: `${SENA_BASE_URL}/nosotros`,
    type: "external" as const,
    disabled: false,
  },
  {
    label: "Sobre Recsa",
    href: "https://recsa.com/nosotros/",
    type: "external" as const,
    disabled: true,
  },
  { label: "FAQs", href: "#", type: "redirect" as const, disabled: true },
];

export const FOOTER_DESCUBRIR = [
  {
    label: "Productos",
    href: `${SENA_BASE_URL}/#productos`,
    type: "external" as const,
    disabled: false,
  },
  {
    label: "Cómo funciona",
    href: "#como-funciona",
    type: "scroll" as const,
    disabled: false,
  },
  {
    label: "Preguntas frecuentes",
    href: "#preguntas-frecuentes",
    type: "scroll" as const,
    disabled: false,
  },
];

export const FOOTER_LEGAL = [
  {
    label: "Términos y condiciones",
    href: "/term",
    type: "redirect" as const,
    disabled: false,
  },
  {
    label: "Políticas de privacidad",
    href: "/privacy",
    type: "redirect" as const,
    disabled: false,
  },
  {
    label: "Actualizar configuración de cookies",
    href: "#",
    type: "redirect" as const,
    disabled: true,
  },
];
