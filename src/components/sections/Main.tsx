import {
  Capacitaciones,
  Experiencia,
  HeroSection,
  Proyectos,
  SobreMi,
  Tecnologias,
} from "@/components/index";

export const Main = () => {
  return (
    <main className="mx-60 my-10 grow space-y-20">
      <HeroSection />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Tecnologias />
      <Capacitaciones />
    </main>
  );
};
