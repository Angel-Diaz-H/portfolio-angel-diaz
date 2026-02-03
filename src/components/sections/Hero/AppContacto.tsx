import { ItemContacto } from "@/components/index";
import { House, Mail, Phone } from "lucide-react";

interface Props {
  className?: string;
}

export const AppContacto = ({ className }: Props) => {
  return (
    <div className={className}>
      <ItemContacto contacto="General Escobedo, Nuevo León" Icon={House} />
      <ItemContacto contacto="8124263360" Icon={Phone} />
      <ItemContacto contacto="angeldiaz.hrn@gmail.com" Icon={Mail} />
    </div>
  );
};
