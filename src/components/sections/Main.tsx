import {
  Capacitaciones,
  Experiencia,
  Hero,
  Proyectos,
  SobreMi,
  Tecnologias,
} from "@/components/index";

export const Main = () => {
  return (
    <main>
      <Hero />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Tecnologias />
      <Capacitaciones />
    </main>
  );
};
