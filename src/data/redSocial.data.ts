import { GithubIcon } from "@/components/icons/GitHubIcon";
import { LinkedinIcon } from "@/components/icons/LinkedinIcon";
import { AppWindow, FileCode, Mail } from "lucide-react";
import type { ComponentType } from "react";

interface Props {
  nombre: string;
  sizeIcon?: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  target: string;
  rel: string;
  ariaLabel: string;
  importance: string;
}

export const redesSociales: Props[] = [
  {
    nombre: "Curriculum",
    Icon: FileCode,
    href: "https://angel-diaz-h.github.io/CV-Tailwind-CSS/",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi currículum vitae",
    importance: "primary",
  },
  {
    nombre: "Portafolio",
    Icon: AppWindow,
    href: "//! TODO: Agregar enlace al portafolio",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi portafolio",
    importance: "primary",
  },
  {
    nombre: "Github",
    Icon: GithubIcon,
    href: "https://github.com/Angel-Diaz-H",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi perfil de GitHub",
    importance: "secondary",
  },
  {
    nombre: "LinkedIn",
    sizeIcon: "4",
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/angel-diaz-hrn/",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi perfil de LinkedIn",
    importance: "secondary",
  },
  {
    nombre: "Mail",
    Icon: Mail,
    href: "mailto:angeldiaz.hrn@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi correo electrónico",
    importance: "secondary",
  },
];
