import {
  AppProyectosIndividuales,
  AppProyectosIntegrales,
  SectionWrapper,
  Title,
} from "@/components/index";
import { Folder } from "lucide-react";

interface Props {
  className?: string;
}

export const Proyectos = ({ className }: Props) => {
  return (
    <SectionWrapper id="proyectos" className={`${className}`}>
      <Title text="Proyectos." Icon={Folder} />
      <div className="grid gap-4">
        <p className="text-muted-foreground text-lg font-semibold">
          Proyectos integrales.
        </p>
        <AppProyectosIntegrales />
        <p className="text-muted-foreground text-lg font-semibold">
          Proyectos individuales.
        </p>
        <AppProyectosIndividuales />
      </div>
    </SectionWrapper>
  );
};
