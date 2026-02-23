import {
  Briefcase,
  Cpu,
  Folder,
  GraduationCap,
  Home,
  User,
} from "lucide-react";
import { FloatingDock } from "../ui/floating-dock";

const navList = [
  {
    title: "Inicio",
    icon: (
      <Home className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#inicio",
  },
  {
    title: "Sobre mí",
    icon: (
      <User className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#sobre-mi",
  },
  {
    title: "Experiencia",
    icon: (
      <Briefcase className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#experiencia",
  },
  {
    title: "Proyectos",
    icon: (
      <Folder className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#proyectos",
  },
  {
    title: "Tecnologías",
    icon: (
      <Cpu className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#tecnologias",
  },
  {
    title: "Capacitaciones",
    icon: (
      <GraduationCap className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#capacitaciones",
  },
];

export function NavbarFloating() {
  return (
    // Subimos un poco el bottom (bottom-6) para que no roce tanto el borde
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <FloatingDock
        items={navList}
        // ESTILO PREMIUM:
        // 1. bg-neutral-100/50: Un blanco translúcido muy sutil
        // 2. backdrop-blur-md: El efecto de vidrio real
        // 3. border-black/5: Un borde casi invisible para definición
        desktopClassName="bg-neutral-100/50 dark:bg-neutral-900/50 backdrop-blur-md border border-black/5 dark:border-white/10 shadow-2xl rounded-4xl"
        mobileClassName="translate-y-0"
      />
    </div>
  );
}
