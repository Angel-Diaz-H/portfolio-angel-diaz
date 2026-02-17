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
    <main className="relative min-h-screen w-full bg-gray-50">
      {/* --- CAPA DE FONDO FIJA --- */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Orbe 1: Esquina superior izquierda (Verde claro) */}
        <div className="animate-orbe-1 absolute -top-20 -left-20 h-96 w-96 rounded-full bg-lime-100 opacity-50 mix-blend-multiply blur-[128px] filter"></div>

        {/* Orbe 2: Esquina inferior izquierda (Cian/Verde azulado) */}
        <div className="animate-orbe-2 absolute -bottom-32 -left-20 h-96 w-96 rounded-full bg-sky-100 opacity-50 mix-blend-multiply blur-[128px] filter"></div>

        {/* Orbe 3: Esquina inferior derecha, detrás de la foto (Verde esmeralda) */}
        <div className="animate-orbe-3 absolute right-0 -bottom-20 h-120 w-120 rounded-full bg-lime-100 opacity-40 mix-blend-multiply blur-[128px] filter"></div>
      </div>

      {/* --- CAPA DE CONTENIDO PRINCIPAL --- */}
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
