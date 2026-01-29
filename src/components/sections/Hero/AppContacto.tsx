import { ItemContacto } from "@/components/index";
import { House, Mail, Phone } from "lucide-react";
export const AppContacto = () => {
  return (
    <div>
      <ItemContacto contacto="General Escobedo, Nuevo León" Icon={House} />
      <ItemContacto contacto="8124263360" Icon={Phone} />
      <ItemContacto contacto="angeldiaz.hrn@gmail.com" Icon={Mail} />
    </div>
  );
};
