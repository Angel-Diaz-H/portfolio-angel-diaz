import {
  AppProyectosIndividuales,
  AppProyectosIntegrales,
  SectionWrapper,
  Title,
} from "@/components/index";
import { Folder, SquareCode, SquareDashedBottomCode } from "lucide-react";

interface Props {
  className?: string;
}

export const Proyectos = ({ className }: Props) => {
  return (
    <SectionWrapper id="proyectos" className={`${className}`}>
      <Title text="Proyectos." Icon={Folder} />
      <div className="text-muted-foreground mx-2 grid gap-5">
        <div className="grid gap-2">
          <div className="flex items-center gap-2.5">
            <SquareCode className="text-primary h-5 w-5" />
            <p className="text-foreground/80 text-lg font-bold">
              Proyectos integrales.
            </p>
          </div>
          <AppProyectosIntegrales />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2.5">
            <SquareDashedBottomCode className="text-primary h-5 w-5" />
            <p className="text-foreground/80 text-lg font-bold">
              Proyectos individuales.
            </p>
          </div>
          <AppProyectosIndividuales />
        </div>
      </div>
    </SectionWrapper>
  );
};
