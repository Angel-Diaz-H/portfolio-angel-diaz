import { CardExperiencia } from "@/components/index";
import { Title } from "@/components/ui/Title";
import { Briefcase } from "lucide-react";

export const Experiencia = () => {
  return (
    <section>
      <Title text="Experiencia." Icon={Briefcase} />
      <CardExperiencia />
    </section>
  );
};
