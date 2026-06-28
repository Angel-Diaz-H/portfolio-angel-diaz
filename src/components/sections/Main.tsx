import {
  Background,
  Capacitaciones,
  Contacto,
  Experiencia,
  Hero,
  Proyectos,
  SobreMi,
  Tecnologias,
} from "@/components/index";

export const Main = () => {
  return (
    <main className="relative min-h-screen w-full bg-white">
      <Background />
      <div className="relative z-10 gap-20">
        <Hero />
        <SobreMi />
        <Experiencia />
        <Proyectos />
        <Tecnologias />
        <Capacitaciones />
        <Contacto />
      </div>
    </main>
  );
};
