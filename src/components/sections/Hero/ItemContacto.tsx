import type { ComponentType } from "react";
import { CopyButton } from "@/components/index";

interface Props {
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  contacto: string;
}

export const ItemContacto = ({ Icon, contacto }: Props) => {
  return (
    <div className="flex items-center justify-start space-x-2">
      <div className="bg-primary flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
        <Icon className="h-3.5! w-3.5! shrink-0" />
      </div>
      <p>{contacto}</p>
      <CopyButton
        value={contacto}
        variant="muted"
        ariaLabel={`Copiar ${String(contacto)}`}
      />
    </div>
  );
};
