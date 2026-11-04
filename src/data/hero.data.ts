export interface HeroAvatar {
  src: string;
  alt: string;
}

export interface HeroData {
  greeting: string;
  name: string;
  roles: string[];
  avatar: HeroAvatar;
}

export const heroData: HeroData = {
  greeting: "Hola, ¡mucho gusto! Soy...",
  name: "Angel Díaz",
  roles: [
    "Administrador de base de datos",
    "Desarrollador de software",
  ],
  avatar: {
    src: "./perfil.webp",
    alt: "Fotografía de perfil de Angel Díaz",
  },
};
