import { CardTecnologia } from "@/components/index";
import { technologies } from "@/data/technologies.data";
import type { LucideIcon } from "lucide-react";

interface Props {
  typeTec: string;
  title: string;
  className?: string;
  Icon?: LucideIcon;
}

export const AppTecnologias = ({ typeTec, title, className, Icon }: Props) => {
  const filteredTechnologies = technologies.filter(
    (tec) => tec.type === typeTec,
  );

  return (
    <div className={`flex flex-col rounded-2xl border p-5 ${className}`}>
      <div className="mb-3 flex items-center gap-2.5">
        {Icon && <Icon className="text-primary h-5 w-5" />}
        <h3 className="text-muted-foreground text-lg font-semibold">{title}</h3>
      </div>

      <div className="grid gap-1">
        {filteredTechnologies.map((tec) => (
          <CardTecnologia key={tec.name} tec={tec} />
        ))}
      </div>
    </div>
  );
};
