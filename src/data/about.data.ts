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
  storyHeadline: "Desarrollador de software con bases en infraestructura.",
  paragraphs: [
    {
      segments: [
        {
          text: "Soy un desarrollador enfocado en el backend y el ecosistema web.",
        },
      ],
    },
    {
      segments: [
        {
          text: "Inicié mi carrera profesional gestionando bases de datos Oracle y SQL Server en servidores Linux y Windows. Esta experiencia me enseñó que los sistemas deben ser ",
        },
        { text: "eficientes", highlight: "semi-bold" },
        { text: ", " },
        { text: "seguros", highlight: "semi-bold" },
        { text: " y " },
        { text: "escalables", highlight: "semi-bold" },
        { text: "." },
      ],
    },
    {
      segments: [
        {
          text: "Actualmente, traslado esta disciplina operativa al desarrollo fullstack, construyendo aplicaciones con el ecosistema ",
        },
        { text: "JavaScript", highlight: "primary" },
        { text: " como lo son " },
        { text: "TypeScript", highlight: "primary" },
        { text: ", " },
        { text: "React", highlight: "primary" },
        { text: " y " },
        { text: "Node.js", highlight: "primary" },
        { text: "." },
      ],
    },
    {
      segments: [
        {
          text: "Mi objetivo es integrarme a un equipo colaborativo como ",
        },
        { text: "desarrollador backend", highlight: "semi-bold" },
        { text: " o " },
        { text: "fullstack", highlight: "semi-bold" },
        {
          text: ". Busco aportar valor resolviendo problemas reales mientras consolido mis buenas prácticas y mi formación hacia la ",
        },
        { text: "arquitectura de software", highlight: "primary" },
        { text: " y " },
        { text: "DevOps", highlight: "primary" },
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
      title: "Backend, bases de datos, DevOps.",
      description: "Profundizando en React & Next.js.",
      icon: Server,
    },
    {
      id: "location",
      label: "Ubicación.",
      title: "Monterrey, Nuevo León.",
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
