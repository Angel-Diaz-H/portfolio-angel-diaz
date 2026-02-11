import { SectionWrapper, Title } from "@/components/index";
import { AppCapacitaciones } from "./Capacitaciones/AppCapacitaciones";
import { GraduationCap } from "lucide-react";

interface Props {
  className?: string;
}

export const Capacitaciones = ({ className }: Props) => {
  return (
    <SectionWrapper id="capacitaciones" className={className}>
      <Title text="Capacitaciones." Icon={GraduationCap} />
      <AppCapacitaciones className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3" />
    </SectionWrapper>
  );
};
