import { Title } from "@/components/ui/Title";
import { AppCapacitaciones } from "./Capacitaciones/AppCapacitaciones";
import { GraduationCap } from "lucide-react";

export const Capacitaciones = () => {
  return (
    <section>
      <Title text="Capacitaciones." Icon={GraduationCap} />
      <AppCapacitaciones className="grid grid-cols-1 gap-5 px-5 sm:grid-cols-2 lg:grid-cols-3" />
    </section>
  );
};
