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
    nombre: "Portafolio",
    Icon: AppWindow,
    href: "https://angel-diaz-h.github.io/portfolio-angel-diaz/",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi portafolio",
    importance: "secondary",
  },
  {
    nombre: "Mail",
    Icon: Mail,
    href: "mailto:angeldiaz.hrn@gmail.com",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi correo electrónico",
    importance: "primary",
  },
  {
    nombre: "LinkedIn",
    sizeIcon: "4",
    Icon: LinkedinIcon,
    href: "https://www.linkedin.com/in/angel-diaz-hrn/",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi perfil de LinkedIn",
    importance: "primary",
  },
  {
    nombre: "Github",
    Icon: GithubIcon,
    href: "https://github.com/Angel-Diaz-H",
    target: "_blank",
    rel: "noopener noreferrer",
    ariaLabel: "Mi perfil de GitHub",
    importance: "primary",
  },
];
