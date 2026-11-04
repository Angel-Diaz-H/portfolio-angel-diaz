import {
  Briefcase,
  Cpu,
  Folder,
  GraduationCap,
  Home,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export const navigationItems: NavItem[] = [
  {
    title: "Inicio",
    href: "#inicio",
    icon: Home,
  },
  {
    title: "Sobre mí",
    href: "#sobre-mi",
    icon: User,
  },
  {
    title: "Experiencia",
    href: "#experiencia",
    icon: Briefcase,
  },
  {
    title: "Proyectos",
    href: "#proyectos",
    icon: Folder,
  },
  {
    title: "Tecnologías",
    href: "#tecnologias",
    icon: Cpu,
  },
  {
    title: "Capacitaciones",
    href: "#capacitaciones",
    icon: GraduationCap,
  },
  {
    title: "Contacto",
    href: "#contacto",
    icon: Mail,
  },
];
