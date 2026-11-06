import {
  GraduationCap,
  Laptop,
  Mail,
  MapPin,
  Server,
  type LucideIcon,
} from "lucide-react";

export type TextHighlight = "primary" | "semi-bold" | "bold";

export interface TextSegment {
  text: string;
  highlight?: TextHighlight;
}

export interface AboutParagraph {
  segments: TextSegment[];
}

export interface QuickFactItem {
  id: string;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: {
    text: string;
    hasPulse?: boolean;
  };
  action?: {
    type: "copy" | "link";
    value: string;
    ariaLabel: string;
  };
}

export interface AboutData {
  storyHeadline: string;
  paragraphs: AboutParagraph[];
  quickFacts: QuickFactItem[];
}

export const aboutData: AboutData = {
  storyHeadline: "Bases de datos, infraestructura y desarrollo backend.",
  paragraphs: [
    {
      segments: [
        {
          text: "Egresado de Tecnologías de Información con experiencia en administración de bases de datos, servidores e infraestructura, gestionando entornos Oracle y SQL Server sobre Linux y Windows, desarrollando una visión orientada a la ",
        },
        { text: "estabilidad", highlight: "semi-bold" },
        { text: ", " },
        { text: "seguridad", highlight: "semi-bold" },
        { text: " y " },
        { text: "eficiencia", highlight: "semi-bold" },
        { text: " de los sistemas empresariales." },
      ],
    },
    {
      segments: [
        {
          text: "Además de mi experiencia en infraestructura, he desarrollado soluciones utilizando tecnologías como ",
        },
        { text: "TypeScript", highlight: "primary" },
        { text: ", " },
        { text: ".NET", highlight: "primary" },
        { text: " y " },
        { text: "Next.js", highlight: "primary" },
        {
          text: ", combinando buenas prácticas de desarrollo con una sólida base operativa.",
        },
      ],
    },
    {
      segments: [
        {
          text: "Mi objetivo es continuar creciendo en áreas como ",
        },
        { text: "administración de bases de datos", highlight: "semi-bold" },
        { text: ", " },
        { text: "infraestructura", highlight: "semi-bold" },
        { text: " y " },
        { text: "desarrollo backend", highlight: "semi-bold" },
        {
          text: ", aportando soluciones confiables mientras fortalezco mis conocimientos en ",
        },
        { text: "DevOps", highlight: "primary" },
        { text: " y " },
        { text: "arquitectura de software", highlight: "primary" },
        { text: "." },
      ],
    },
  ],
  quickFacts: [
    {
      id: "status",
      label: "Estado Actual.",
      title: "Recién egresado.",
      description: "Disponible tiempo completo.",
      icon: Laptop,
      badge: {
        text: "Disponible tiempo completo.",
        hasPulse: true,
      },
    },
    {
      id: "education",
      label: "Educación.",
      title: "Lic. en Tecnologías de Información.",
      description: "Facultad de Contaduría Pública y Administración, UANL.",
      icon: GraduationCap,
    },
    {
      id: "technicalFocus",
      label: "Enfoque Técnico.",
      title: "Bases de datos, backend, DevOps.",
      description: "Profundizando en infraestructura y desarrollo.",
      icon: Server,
    },
    {
      id: "location",
      label: "Ubicación.",
      title: "General Escobedo, Nuevo León.",
      description: "Presencial | Híbrido | Remoto.",
      icon: MapPin,
    },
    {
      id: "contact",
      label: "Contacto.",
      title: "angeldiaz.hrd@gmail.com",
      description: "angeldiaz.hrd@gmail.com",
      icon: Mail,
      action: {
        type: "copy",
        value: "angeldiaz.hrd@gmail.com",
        ariaLabel: "Copiar angeldiaz.hrd@gmail.com al portapapeles",
      },
    },
  ],
};
