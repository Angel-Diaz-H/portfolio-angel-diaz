import { Title } from "@/components/ui/Title";
import { User } from "lucide-react";
import { AppContacto, Descripcion } from "@/components/index";

export const SobreMi = () => {
  return (
    <section>
      <Title text="Sobre mí." Icon={User} />
      <div className="grid grid-cols-2">
        <Descripcion />
        <AppContacto />
      </div>
    </section>
  );
};
