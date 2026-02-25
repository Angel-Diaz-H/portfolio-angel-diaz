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
      <p>Proyectos integrales.</p>
      <AppProyectosIntegrales />
      <p>Proyectos individuales.</p>
      <AppProyectosIndividuales />
    </SectionWrapper>
  );
};
