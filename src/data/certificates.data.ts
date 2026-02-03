interface Certificate {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  credentialUrl: string;
}

export const certificates: Certificate[] = [
  {
    id: 1,
    title: "TailwindCSS: Para desarrolladores de software.",
    description:
      "Diseño de interfaces modernas, responsive design y configuración avanzada de temas.",
    image: "/capacitaciones/Tailwind-CSS-cert.webp",
    technologies: ["Tailwind CSS"],
    credentialUrl: "https://cursos.devtalles.com/certificates/7iiruz355a",
  },
  {
    id: 2,
    title: "TypeScript: Tu completa guía y manual de mano.",
    description:
      "Comprensión de TypeScript, desde tipos básicos hasta avanzados.",
    image: "/capacitaciones/TypeScript-cert.webp",
    technologies: ["TypeScript", "JavaScript"],
    credentialUrl: "https://cursos.devtalles.com/certificates/ijmiuxrlkz",
  },
  {
    id: 3,
    title: "JavaScript Moderno: Guía para dominar el lenguaje.",
    description:
      "Entender JavaScript moderno, ES6+ y mejores prácticas de desarrollo.",
    image: "/capacitaciones/JavaScript-cert.webp",
    technologies: ["JavaScript"],
    credentialUrl: "https://cursos.devtalles.com/certificates/oexl95fk8x",
  },
  {
    id: 4,
    title: "DE.102 Aplicando FODA - Especial 1.",
    description:
      "Curso sobre la aplicación del análisis FODA en proyectos y organizaciones.",
    image: "/capacitaciones/AplicandoFODA-cert.webp",
    technologies: ["FODA", "Análisis"],
    credentialUrl:
      "https://ple.jetro.ws/credential-validation?credentialId=XSEBQAMYPNXMS",
  },
  {
    id: 5,
    title: "DE.103 Abordando Riesgos y Oportunidades - Especial 1.",
    description:
      "Curso sobre la identificación y gestión de riesgos y oportunidades en proyectos.",
    image: "/capacitaciones/RiesgosYOportunidades-cert.webp",
    technologies: ["FODA", "Análisis"],
    credentialUrl:
      "https://ple.jetro.ws/credential-validation?credentialId=ULX3US6VJ6782",
  },
  {
    id: 6,
    title: "Data Analytics with Power BI",
    description:
      "Uso de Power BI para análisis de datos y visualización efectiva.",
    image: "/capacitaciones/DataAnalyticsPowerBI-cert.webp",
    technologies: ["Power BI", "Análisis de Datos", "Python"],
    credentialUrl:
      "https://ple.jetro.ws/credential-validation?credentialId=ULX3US6VJ6782",
  },
];
