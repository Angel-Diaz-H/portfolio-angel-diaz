interface Props {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  repo?: string;
  date?: string;
  level: number;
}

export const projects: Props[] = [
  {
    id: 1,
    title: "Script objectos Oracle y SQL Server",
    description:
      "//! Script para extracción de objectos de una base de datos Oracle y SQL Server.",
    image: "/projects/scriptTable-project.webp",
    technologies: ["Python"],
    repo: "//! github",
    date: "//! 2025-06-01",
    level: 2,
  },
];
