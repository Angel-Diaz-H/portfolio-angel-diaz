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
    <main className="bg-gray-50">
      <Hero />
      <SobreMi />
      <Experiencia />
      <Proyectos />
      <Tecnologias />
      <Capacitaciones />
    </main>
  );
};
