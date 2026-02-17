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
    <main className="relative min-h-screen w-full bg-white">
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mask-[linear-gradient(to_bottom,white_20%,transparent_100%)] bg-size-[20px_20px]"></div>
        {/* 1. Inicia arriba hacia el centro y viaja a la izquierda. */}
        <div className="animate-orbe-1 absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-lime-100 opacity-50 mix-blend-multiply blur-[128px] filter"></div>

        {/* 2. Esquina inferior izquierda. */}
        <div className="animate-orbe-2 absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-cyan-100 opacity-50 mix-blend-multiply blur-[128px] filter"></div>

        {/* 3. Esquina inferior derecha, detrás de la foto. */}
        <div className="animate-orbe-3 absolute right-0 -bottom-20 h-120 w-120 rounded-full bg-lime-100 opacity-40 mix-blend-multiply blur-[128px] filter"></div>
      </div>
      <div className="relative z-10">
        <Hero />
        <SobreMi />
        <Experiencia />
        <Proyectos />
        <Tecnologias />
        <Capacitaciones />
      </div>
    </main>
  );
};
