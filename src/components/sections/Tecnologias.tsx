import { AppTecnologias, SectionWrapper, Title } from "@/components/index";
import {
  Cpu,
  LayoutTemplate,
  Database,
  Server,
  Wrench,
  Sparkles,
  LayoutGrid,
} from "lucide-react";

export const Tecnologias = ({ className }: { className?: string }) => {
  return (
    <SectionWrapper id="tecnologias" className={`space-y-8 ${className}`}>
      <Title text="Tecnologías." Icon={Cpu} />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
        <AppTecnologias
          title="Frontend."
          typeTec="frontend"
          Icon={LayoutTemplate}
          className="md:col-span-2"
        />

        <AppTecnologias
          title="Backend."
          typeTec="backend"
          Icon={Server}
          className="md:col-span-2"
        />

        <AppTecnologias
          title="Base de datos."
          typeTec="database"
          Icon={Database}
          className="md:col-span-2"
        />

        <AppTecnologias
          title="Herramientas."
          typeTec="tools"
          Icon={Wrench}
          className="md:col-span-2"
        />

        <AppTecnologias
          title="Inteligencia artificial."
          typeTec="ia"
          Icon={Sparkles}
        />
        <AppTecnologias title="Otras." typeTec="other" Icon={LayoutGrid} />
      </div>
    </SectionWrapper>
  );
};
