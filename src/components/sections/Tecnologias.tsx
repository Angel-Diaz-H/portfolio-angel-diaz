import { AppTecnologias, SectionWrapper, Title } from "@/components/index";
import { Cpu } from "lucide-react";
import { Separator } from "@/components/ui/separator";

interface Props {
  className?: string;
}

export const Tecnologias = ({ className }: Props) => {
  return (
    <SectionWrapper id="tecnologias" className={`${className}`}>
      <Title text="Tecnologías." Icon={Cpu} />

      <Separator />
      <div className="mx-8 my-4 grid grid-cols-5 items-center">
        <p className="text-secondary col-span-1 text-2xl font-semibold">
          Frontend
        </p>
        <AppTecnologias className="col-span-4 gap-2" typeTec="frontend" />
      </div>

      <Separator />
      <div className="mx-8 my-4 grid grid-cols-5 items-center">
        <p className="text-secondary col-span-1 text-2xl font-semibold">
          Backend
        </p>
        <AppTecnologias className="col-span-4 gap-2" typeTec="backend" />
      </div>

      <Separator />
      <div className="mx-8 my-4 grid grid-cols-5 items-center">
        <p className="text-secondary col-span-1 text-2xl font-semibold">
          Base de datos
        </p>
        <AppTecnologias className="col-span-4 gap-2" typeTec="database" />
      </div>

      <Separator />
      <div className="mx-8 my-4 grid grid-cols-5 items-center">
        <p className="text-secondary col-span-1 text-2xl font-semibold">
          Herramientas
        </p>
        <AppTecnologias className="col-span-4 gap-2" typeTec="tools" />
      </div>

      <Separator />
      <div className="mx-8 my-4 grid grid-cols-5 items-center">
        <p className="text-secondary col-span-1 text-2xl font-semibold">IA</p>
        <AppTecnologias className="col-span-4 gap-2" typeTec="ia" />
      </div>

      <Separator />
    </SectionWrapper>
  );
};
