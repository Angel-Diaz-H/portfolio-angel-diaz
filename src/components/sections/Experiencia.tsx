import { Briefcase } from "lucide-react";
import { CardExperiencia, SectionWrapper, Title } from "@/components/index";

interface Props {
  className?: string;
}

export const Experiencia = ({ className }: Props) => {
  return (
    <SectionWrapper id="experiencia" className={`${className}`}>
      <Title text="Experiencia." Icon={Briefcase} />
      <CardExperiencia />
    </SectionWrapper>
  );
};
