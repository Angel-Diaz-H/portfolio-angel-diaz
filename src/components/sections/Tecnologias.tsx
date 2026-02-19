import { ItemsTech, SectionWrapper, Title } from "@/components/index";
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

      <div className="grid grid-cols-1 gap-3 md:grid-cols-4">
        <div className="bg-card flex flex-col rounded-2xl border p-5">
          <ItemsTech
            title="Frontend."
            typeTec="frontend"
            Icon={LayoutTemplate}
          />
        </div>

        <ItemsTech title="Backend." typeTec="backend" Icon={Server} />

        <ItemsTech title="Base de datos." typeTec="database" Icon={Database} />

        <ItemsTech title="Herramientas." typeTec="tools" Icon={Wrench} />

        <ItemsTech
          title="Inteligencia artificial."
          typeTec="ia"
          Icon={Sparkles}
        />
        <ItemsTech title="Otras." typeTec="other" Icon={LayoutGrid} />
      </div>
    </SectionWrapper>
  );
};
