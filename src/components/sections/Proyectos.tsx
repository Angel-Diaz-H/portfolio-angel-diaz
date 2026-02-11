import { AppProyectos, SectionWrapper, Title } from "@/components/index";
import { Folder } from "lucide-react";

interface Props {
  className?: string;
}

export const Proyectos = ({ className }: Props) => {
  return (
    <SectionWrapper id="proyectos" className={`${className}`}>
      <Title text="Proyectos." Icon={Folder} />
      <AppProyectos />
    </SectionWrapper>
  );
};
