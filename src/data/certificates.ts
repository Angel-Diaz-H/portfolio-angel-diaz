export interface Certificate {
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
    title: "TailwindCSS: Para desarrolladores de software",
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
];
