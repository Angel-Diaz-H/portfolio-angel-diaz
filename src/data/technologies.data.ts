export type TechCategory =
  | "frontend"
  | "backend"
  | "database"
  | "tools"
  | "ia"
  | "other";

export interface Technology {
  id: number;
  name: string;
  img: string;
  type: TechCategory;
}

// TODO: Quizá dividir en más categorías.

export const technologies: Technology[] = [
  {
    id: 1,
    name: "JavaScript",
    img: "/tecnologias/javascript.webp",
    type: "frontend",
  },
  {
    id: 2,
    name: "TypeScript",
    img: "/tecnologias/typescript.webp",
    type: "frontend",
  },
  {
    id: 3,
    name: "Oracle Database",
    img: "/tecnologias/oracle.webp",
    type: "database",
  },
  {
    id: 4,
    name: "React",
    img: "/tecnologias/react.webp",
    type: "frontend",
  },
  {
    id: 5,
    name: "PostgreSQL",
    img: "/tecnologias/postgresql.webp",
    type: "database",
  },
  {
    id: 6,
    name: "Node.js",
    img: "/tecnologias/nodejs.webp",
    type: "backend",
  },
  {
    id: 7,
    name: "Linux",
    img: "/tecnologias/linux.webp",
    type: "tools",
  },
  {
    id: 8,
    name: "Python",
    img: "/tecnologias/python.webp",
    type: "backend",
  },
  {
    id: 9,
    name: "SQL Server",
    img: "/tecnologias/sql-server.webp",
    type: "database",
  },
  {
    id: 10,
    name: "Windows Server",
    img: "/tecnologias/windows-server.webp",
    type: "tools",
  },
  {
    id: 11,
    name: "TailwindCSS",
    img: "/tecnologias/tailwind.webp",
    type: "frontend",
  },
  {
    id: 12,
    name: "MySQL",
    img: "/tecnologias/mysql.webp",
    type: "database",
  },
  {
    id: 13,
    name: "Next.js",
    img: "/tecnologias/nextjs.webp",
    type: "frontend",
  },
  {
    id: 14,
    name: "Maria DB",
    img: "/tecnologias/mariadb.webp",
    type: "database",
  },
  {
    id: 15,
    name: "Docker",
    img: "/tecnologias/docker.webp",
    type: "tools",
  },
  {
    id: 16,
    name: "C#",
    img: "/tecnologias/csharp.webp",
    type: "backend",
  },
  {
    id: 17,
    name: "Bootstrap",
    img: "/tecnologias/bootstrap.webp",
    type: "frontend",
  },
  {
    id: 18,
    name: "Power BI",
    img: "/tecnologias/powerbi.webp",
    type: "other",
  },
  {
    id: 19,
    name: "Git",
    img: "/tecnologias/git.webp",
    type: "tools",
  },
  {
    id: 20,
    name: "GitHub",
    img: "/tecnologias/github.svg",
    type: "tools",
  },
  {
    id: 21,
    name: "Vite",
    img: "/tecnologias/vite.webp",
    type: "tools",
  },
  // {
  //   id: 22,
  //   name: "Angular",
  //   img: "/tecnologias/angular.webp",
  //   type: "frontend",
  // },
  {
    id: 23,
    name: "GitHub Copilot",
    img: "/tecnologias/githubCopilot.svg",
    type: "ia",
  },
  {
    id: 25,
    name: "Excel",
    img: "/tecnologias/microsoft-excel.webp",
    type: "other",
  },
  {
    id: 26,
    name: "Notion",
    img: "/tecnologias/notion.webp",
    type: "other",
  },
  {
    id: 27,
    name: "Gemini",
    img: "/tecnologias/gemini.svg",
    type: "ia",
  },
];
