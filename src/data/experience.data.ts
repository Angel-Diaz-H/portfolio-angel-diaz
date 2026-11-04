import {
  Database,
  Rocket,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export interface ExperiencePillar {
  id: number;
  title: string;
  icon: LucideIcon;
  items: string[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  location: string;
  website: string;
  logo: string;
  logoAlt: string;
  summary: string[];
  pillars: ExperiencePillar[];
  badges: string[];
  galleryImages: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    company: "CASAS JAVER",
    role: "Database Administrator Intern.",
    period: "Enero 2025 - Noviembre 2025.",
    location: "Monterrey, N.L. (Híbrido).",
    website: "https://www.javer.com.mx/",
    logo: "./experiencia/casas-javer-logo.webp",
    logoAlt: "Logo de Casas Javer",
    summary: [
      "Rol enfocado en el soporte y mantenimiento de infraestructura.",
      "Logré aumentar la eficiencia operativa mediante la automatización de respaldos clave y la estandarización de consultas complejas.",
    ],
    pillars: [
      {
        id: 1,
        title: "Base de datos.",
        icon: Database,
        items: [
          "Administración de bases de datos abarcando seguridad de usuarios, respaldos y gestión de objetos, tanto en ambientes productivos como de desarrollo.",
        ],
      },
      {
        id: 2,
        title: "Infraestructura de servidores.",
        icon: Server,
        items: [
          "Administración de servidores Windows y Linux, abarcando la configuración de servicios, conectividad de bases de datos, así como tareas de monitoreo y mantenimiento.",
        ],
      },
      {
        id: 3,
        title: "Despliegue.",
        icon: Rocket,
        items: [
          "Despliegues en producción y desarrollo de objetos de base de datos, así como la gestión de ramas utilizando Git y PM2.",
        ],
      },
      {
        id: 4,
        title: "Herramientas ERP.",
        icon: Wrench,
        items: [
          "Soporte a sistemas internos abarcando monitoreo en Oracle EBS, coordinación de incidencias, así como la gestión de Oracle APEX y publicación de tableros.",
        ],
      },
    ],
    badges: ["Respaldos", "Soporte Oracle EBS", "Gestión Oracle APEX"],
    galleryImages: [
      "./experiencia/experience-1.webp",
      "./experiencia/experience-2.webp",
      "./experiencia/experience-3.webp",
    ],
    technologies: [
      "Oracle Database",
      "SQL Server",
      "Windows Server",
      "Linux",
      "MySQL",
      "Maria DB",
      "PostgreSQL",
    ],
  },
];
