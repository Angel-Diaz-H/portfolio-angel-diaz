export interface ContactData {
  title: string;
  messages: string[];
  email: string;
  copyAriaLabel: string;
}

export const contactData: ContactData = {
  title: "¡Conversemos!",
  messages: [
    "Estoy disponible para nuevas oportunidades.",
    "Si tienes un proyecto en mente o quieres conversar, mi bandeja de entrada está disponible.",
  ],
  email: "angeldiaz.hrd@gmail.com",
  copyAriaLabel: "Copiar angeldiaz.hrd@gmail.com al portapapeles",
};
