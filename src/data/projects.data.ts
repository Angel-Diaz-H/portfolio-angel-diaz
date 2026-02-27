export interface Project {
  id: number;
  title: string;
  description: string;
  images?: string[];
  technologies?: string[];
  github?: string;
  link?: string;
  date?: string;
  level: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Querys a partir de sentencias SQL.",
    description:
      "Script para generación de SELECT a partir de DELETEs y UPDATEs en bases de datos Oracle, SQL Server y MySQL.",
    // images: ["/Icon.svg"],
    technologies: ["Python"],
    github:
      "https://github.com/Angel-Diaz-H/Generate-SELECT-from-DELETEs-UPDATEs/blob/Version-in-work/Generate-selects-v5.py",
    date: "2025-08-19",
    level: 2,
  },
  {
    id: 2,
    title: "Objectos a partir de sentencias SQL.",
    description:
      "Script para extracción de objectos en bases de datos Oracle y SQL Server.",
    // images: ["/Icon.svg"],
    technologies: ["Python"],
    github:
      "https://github.com/Angel-Diaz-H/automate-get-from-joins/blob/main/get-from-joins.py",
    date: "2025-06-19",
    level: 2,
  },
  {
    id: 3,
    title: "Sistema integral de productos, ventas y ofimática.",
    description:
      "Sistema de para gestión de productos y ventas. Incluye manipulación de documentos.",
    // images: ["/Icon.svg"],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "MySQL",
      "Docker",
      "Tailwind",
    ],
    date: "2025-12-30",
    level: 1,
  },
  {
    id: 4,
    title: "Portal para gestión de incidencias de nóminas.",
    description:
      "Portal con autentificación de usuarios para gestión de incidencias para empresa de nóminas.",
    // images: ["/Icon.svg"],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "PostgreSQL",
      "Docker",
      "Tailwind",
    ],
    date: "2025-11-1",
    level: 1,
  },
  {
    id: 5,
    title: "Sitio web de restaurante de comida saludable.",
    description:
      "Sitio web para restaurante de comida saludable con registro de usuarios y solicitar pedidos.",
    // images: ["/Icon.svg"],
    technologies: ["Bootstrap", "C#"],
    date: "2025-11-6",
    level: 1,
    github: "https://github.com/Angel-Diaz-H/U_S7_Programacion_Distribuida_PIA",
  },
  {
    id: 6,
    title: "Sitio web imitación de Pollo Loco.",
    description: "Sitio web imitando el estilo de Pollo Loco.",
    // images: ["/Icon.svg"],
    technologies: ["Bootstrap"],
    date: "2025-10-22",
    level: 2,
    github:
      "https://github.com/Angel-Diaz-H/U_S7_Programacion_Distribuida_Evidencias",
  },
  {
    id: 7,
    title: "Blackjack.",
    description:
      "Juego de Blackjack aplicando conceptos de JavaScript moderno.",
    // images: ["/Icon.svg"],
    technologies: ["JavaScript"],
    date: "2025-09-20",
    github:
      "https://github.com/Angel-Diaz-H/DevTalles-JavaScript-Moderno-Guia-para-dominar-el-lenguaje/tree/main/04-blackjack-vite",
    level: 2,
  },
  {
    id: 8,
    title: "Gifs app.",
    description: "Aplicación para visualizar y buscar gifs.",
    // images: ["/Icon.svg"],
    technologies: ["TypeScript"],
    date: "2026-01-10",
    github:
      "https://github.com/Angel-Diaz-H/DevTalles-React-de-cero-a-experto-Edicion-2025/tree/main/03-gifs-app",
    level: 2,
  },
  {
    id: 9,
    title: "Calendario 2026.",
    description: "Visualización de calendario 2026.",
    // images: ["/Icon.svg"],
    technologies: ["React"],
    date: "2026-02-02",
    github: "https://github.com/Angel-Diaz-H/calendar-2026",
    level: 2,
  },
  {
    id: 10,
    title: "Herramientas para monografías.",
    description:
      "Herramientas para retocar monografías incluye su optimización de peso.",
    // images: ["/Icon.svg"],
    technologies: ["Python"],
    date: "2026-01-13",
    github: "https://github.com/Angel-Diaz-H/tools-pdf-monographs",
    level: 2,
  },
  {
    id: 11,
    title: "Whatsapp en terminal.",
    description:
      "Ejecutar Whatsapp en terminal para gestionar perfil de negocio.",
    // images: ["/Icon.svg"],
    technologies: ["Node.js"],
    date: "2025-01-14",
    level: 2,
  },
  {
    id: 12,
    title: "POS de taller mecánico.",
    description:
      "Sistema de punto de venta y gestión de clientes en taller mecánico con terminal.",
    // images: ["/Icon.svg"],
    technologies: ["Python"],
    date: "2023-11-12",
    level: 2,
    github:
      "https://github.com/Angel-Diaz-H/U_S3_Programacion_Python/blob/main/PIA.py",
  },
];
