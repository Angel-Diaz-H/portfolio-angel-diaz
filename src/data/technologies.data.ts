import {
  Computer,
  Database,
  LayoutTemplate,
  Server,
  Sparkles,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type TechCategory =
  | "database"
  | "backend"
  | "system"
  | "frontend"
  | "tools"
  | "productivity";

export interface TechCategoryConfig {
  id: TechCategory;
  title: string;
  typeTec: TechCategory;
  Icon: LucideIcon;
}

export const techCategories: TechCategoryConfig[] = [
  {
    id: "database",
    title: "Base de datos.",
    typeTec: "database",
    Icon: Database,
  },
  {
    id: "backend",
    title: "Backend.",
    typeTec: "backend",
    Icon: Server,
  },
  {
    id: "system",
    title: "Sistemas.",
    typeTec: "system",
    Icon: Computer,
  },
  {
    id: "frontend",
    title: "Frontend.",
    typeTec: "frontend",
    Icon: LayoutTemplate,
  },

  {
    id: "tools",
    title: "Herramientas.",
    typeTec: "tools",
    Icon: Wrench,
  },
  {
    id: "productivity",
    title: "IA.",
    typeTec: "productivity",
    Icon: Sparkles,
  },
];

export interface Technology {
  id: number;
  name: string;
  img: string;
  type: TechCategory;
}

export const technologies: Technology[] = [
  {
    id: 1,
    name: "Oracle Database",
    img: "./tecnologias/oracle.webp",
    type: "database",
  },
  {
    id: 2,
    name: "SQL Server",
    img: "./tecnologias/sql-server.webp",
    type: "database",
  },
  {
    id: 3,
    name: "PostgreSQL",
    img: "./tecnologias/postgresql.webp",
    type: "database",
  },
  {
    id: 4,
    name: "MySQL",
    img: "./tecnologias/mysql.webp",
    type: "database",
  },

  {
    id: 5,
    name: "C#",
    img: "./tecnologias/csharp.webp",
    type: "backend",
  },
  {
    id: 6,
    name: ".NET",
    img: "./tecnologias/dotnet.svg",
    type: "backend",
  },
  {
    id: 7,
    name: "Node.js",
    img: "./tecnologias/nodejs.webp",
    type: "backend",
  },
  {
    id: 8,
    name: "Python",
    img: "./tecnologias/python.webp",
    type: "backend",
  },
  {
    id: 9,
    name: "Linux",
    img: "./tecnologias/linux.webp",
    type: "system",
  },
  {
    id: 10,
    name: "Ubuntu Server",
    img: "./tecnologias/ubuntu.svg",
    type: "system",
  },
  {
    id: 11,
    name: "Oracle Linux",
    img: "./tecnologias/oracle.webp",
    type: "system",
  },
  {
    id: 12,
    name: "Windows Server",
    img: "./tecnologias/windows-server.webp",
    type: "system",
  },
  {
    id: 13,
    name: "JavaScript",
    img: "./tecnologias/javascript.webp",
    type: "frontend",
  },
  {
    id: 14,
    name: "TypeScript",
    img: "./tecnologias/typescript.webp",
    type: "frontend",
  },
  {
    id: 15,
    name: "React",
    img: "./tecnologias/react.webp",
    type: "frontend",
  },
  {
    id: 16,
    name: "Tailwind CSS",
    img: "./tecnologias/tailwind.webp",
    type: "frontend",
  },
  {
    id: 17,
    name: "Next.js",
    img: "./tecnologias/nextjs.webp",
    type: "frontend",
  },

  {
    id: 18,
    name: "Docker",
    img: "./tecnologias/docker.webp",
    type: "tools",
  },
  {
    id: 19,
    name: "Git",
    img: "./tecnologias/git.webp",
    type: "tools",
  },
  {
    id: 20,
    name: "GitHub Actions",
    img: "./tecnologias/github.svg",
    type: "tools",
  },

  {
    id: 21,
    name: "Claude Code",
    img: "./tecnologias/claude.svg",
    type: "productivity",
  },
  {
    id: 22,
    name: "Antigravity",
    img: "./tecnologias/antigravity.svg",
    type: "productivity",
  },
  {
    id: 23,
    name: "Codex",
    img: "./tecnologias/codex.svg",
    type: "productivity",
  },
  {
    id: 24,
    name: "Obsidian",
    img: "./tecnologias/obsidian.svg",
    type: "productivity",
  },
  // {
  //   id: 25,
  //   name: "Maria DB",
  //   img: "./tecnologias/mariadb.webp",
  //   type: "database",
  // },
  // {
  // {
  //   id: 17,
  //   name: "Bootstrap",
  //   img: "./tecnologias/bootstrap.webp",
  //   type: "frontend",
  // },
  //   id: 20,
  //   name: "Vite",
  //   img: "./tecnologias/vite.svg",
  //   type: "tools",
  // },
  // {
  //   id: 23,
  //   name: "GitHub Copilot",
  //   img: "./tecnologias/githubCopilot.svg",
  //   type: "productivity",
  // },
  // {
  //   id: 24,
  //   name: "Power BI",
  //   img: "./tecnologias/powerbi.webp",
  //   type: "productivity",
  // },
  // {
  //   id: 25,
  //   name: "Excel",
  //   img: "./tecnologias/microsoft-excel.webp",
  //   type: "productivity",
  // {
  //   id: 25,
  //   name: "Notion",
  //   img: "./tecnologias/notion.webp",
  //   type: "productivity",
  // },
  // {
  //   id: 28,
  //   name: "NestJS",
  //   img: "./tecnologias/nestjs.svg",
  //   type: "nextSteps",
  // },
  // {
  //   id: 29,
  //   name: "Vitest",
  //   img: "./tecnologias/vitest.svg",
  //   type: "nextSteps",
  // },
  // {
  //   id: 30,
  //   name: "aws",
  //   img: "./tecnologias/aws.svg",
  //   type: "nextSteps",
  // },
  // {
  //   id: 31,
  //   name: "kubernetes",
  //   img: "./tecnologias/kubernetes.svg",
  //   type: "nextSteps",
  // },
  // {
  //   id: 30,
  //   name: "N8n",
  //   img: "./tecnologias/n8n.svg",
  //   type: "nextSteps",
  // },
  // {
  //   id: 32,
  //   name: "Open Code",
  //   img: "./tecnologias/opencode.svg",
  //   type: "nextSteps",
  // },
];
