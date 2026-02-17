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

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        <AppTecnologias
          title="Frontend."
          typeTec="frontend"
          Icon={LayoutTemplate}
        />

        <AppTecnologias title="Backend." typeTec="backend" Icon={Server} />

        <AppTecnologias
          title="Base de datos."
          typeTec="database"
          Icon={Database}
        />

        <AppTecnologias title="Herramientas." typeTec="tools" Icon={Wrench} />

        <AppTecnologias
          title="Inteligencia artificial."
          typeTec="ia"
          Icon={Sparkles}
        />
        <AppTecnologias title="Otras." typeTec="other" Icon={LayoutGrid} />
        {/* <div className="flex flex-col gap-5">
        </div> */}
      </div>
    </SectionWrapper>
  );
};
