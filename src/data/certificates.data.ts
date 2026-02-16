interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  iconDark?: string;
  iconLight?: string;
  technologies: string[];
  credentialUrl: string;
  date: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "TailwindCSS: Para desarrolladores de software.",
    description:
      "Diseño de interfaces modernas, responsive  y configuración de temas.",
    iconDark: "/capacitaciones/Tailwind-CSS-cert.svg",
    iconLight: "/capacitaciones/Tailwind-CSS-cert-light.svg",
    image: "/capacitaciones/Tailwind-CSS-cert.webp",
    technologies: ["Tailwind CSS"],
    credentialUrl: "https://cursos.devtalles.com/certificates/7iiruz355a",
    date: "2026-01-06",
  },
  {
    id: 2,
    title: "TypeScript: Tu completa guía y manual de mano.",
    description:
      "Comprensión de TypeScript, desde tipos básicos hasta avanzados.",
    iconDark: "/capacitaciones/Typescript-cert.svg",
    iconLight: "/capacitaciones/Typescript-cert-light.svg",
    image: "/capacitaciones/TypeScript-cert.webp",
    technologies: ["TypeScript", "JavaScript"],
    credentialUrl: "https://cursos.devtalles.com/certificates/ijmiuxrlkz",
    date: "2025-11-30",
  },
  {
    id: 3,
    title: "JavaScript Moderno: Guía para dominar el lenguaje.",
    description:
      "Entender JavaScript moderno, ES6+ y mejores prácticas de desarrollo.",
    iconDark: "/capacitaciones/JavaScript-cert.svg",
    iconLight: "/capacitaciones/JavaScript-cert-light.svg",
    image: "/capacitaciones/JavaScript-cert.webp",
    technologies: ["JavaScript"],
    credentialUrl: "https://cursos.devtalles.com/certificates/oexl95fk8x",
    date: "2025-10-06",
  },
  {
    id: 4,
    title: "Programación para principiantes - Primeros pasos.",
    description: "Conceptos de programación y del desarrollo de software.",
    iconDark: "/capacitaciones/ProgramacionPrincipiantes-cert.svg",
    iconLight: "/capacitaciones/ProgramacionPrincipiantes-cert-light.svg",
    image: "/capacitaciones/ProgramacionPrincipiantes-cert.webp",
    technologies: ["JavaScript", "Bootstrap"],
    credentialUrl: "https://cursos.devtalles.com/certificates/oym8nqbqvz",
    date: "2025-10-06",
  },
  {
    id: 5,
    title: "DE.102 Aplicando FODA.",
    description: "Aplicación del análisis FODA en proyectos y organizaciones.",
    iconDark: "/capacitaciones/FODA-cert.svg",
    iconLight: "/capacitaciones/FODA-cert-light.svg",
    image: "/capacitaciones/AplicandoFODA-cert.webp",
    technologies: ["FODA", "Análisis"],
    credentialUrl:
      "https://ple.jetro.ws/credential-validation?credentialId=XSEBQAMYPNXMS",
    date: "2025-08-18",
  },
  {
    id: 6,
    title: "DE.103 Abordando Riesgos y Oportunidades.",
    description:
      "Identificación y gestión de riesgos y oportunidades en proyectos.",
    iconDark: "/capacitaciones/RiesgosYOportunidades-cert.svg",
    iconLight: "/capacitaciones/RiesgosYOportunidades-cert-light.svg",
    image: "/capacitaciones/RiesgosYOportunidades-cert.webp",
    technologies: ["FODA", "Análisis"],
    credentialUrl:
      "https://ple.jetro.ws/credential-validation?credentialId=ULX3US6VJ6782",
    date: "2025-08-24",
  },
  {
    id: 7,
    title: "Data Analytics with Power BI.",
    description:
      "Uso de Power BI para análisis de datos y visualización efectiva.",
    iconDark: "/capacitaciones/DataAnalyticsPowerBI-cert.svg",
    iconLight: "/capacitaciones/DataAnalyticsPowerBI-cert-light.svg",
    image: "/capacitaciones/DataAnalyticsPowerBI-cert.webp",
    technologies: ["Power BI", "Análisis de Datos", "Python"],
    credentialUrl:
      "https://www.linkedin.com/in/angeldiaz-hrn/details/certifications/1749512261084/single-media-viewer/?profileId=ACoAAD1Nz2MBOJq7tgoDIw5pIcX7GbvPbC4PS30",
    date: "2025-05-11",
  },
];
