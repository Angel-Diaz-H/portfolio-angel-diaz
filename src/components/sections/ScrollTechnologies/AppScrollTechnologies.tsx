import { ScrollTechnologies } from "@/components/index";

const imagesModules = import.meta.glob("../../../assets/technologies/*.webp", {
  eager: true,
});

const techImages = Object.values(imagesModules).map((mod: any) => mod.default);

export const AppScrollTechnologies = () => {
  return <ScrollTechnologies images={techImages} speed={50} height={72} />;
};
