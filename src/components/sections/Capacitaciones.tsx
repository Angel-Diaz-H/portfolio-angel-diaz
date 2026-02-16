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
      <AppCapacitaciones className="grid gap-3 sm:grid-cols-2 lg:grid-cols-2" />
    </SectionWrapper>
  );
};
