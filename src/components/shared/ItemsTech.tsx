import { CardTecnologia } from "@/components/index";
import { technologies } from "@/data/technologies.data";
import type { LucideIcon } from "lucide-react";

interface Props {
  className?: string;
  Icon?: LucideIcon;
  order?: Array<number | string>;
  title?: string;
  typeTec?: string;
  classNameItems?: string;
  classNameItem?: string;
}

export const ItemsTech = ({
  className,
  Icon,
  order,
  title,
  classNameItems,
  classNameItem,
  typeTec,
}: Props) => {
  const filteredTechnologies = technologies.filter((tec) => {
    if (typeTec) return tec.type === typeTec;
    if (order) return order.includes(tec.id) || order.includes(tec.name);
    return true;
  });

  if (order && filteredTechnologies.length > 0) {
    filteredTechnologies.sort((a, b) => {
      const indexA = order.findIndex((val) => val === a.id || val === a.name);
      const indexB = order.findIndex((val) => val === b.id || val === b.name);
      return indexA - indexB;
    });
  }

  if (filteredTechnologies.length === 0) return null;

  return (
    <div className={`${className}`}>
      {(title || Icon) && (
        <div className="mb-3 flex items-center gap-2.5">
          {Icon && <Icon className="text-primary h-5 w-5" />}
          {title && (
            <h3 className="text-muted-foreground text-lg font-semibold">
              {title}
            </h3>
          )}
        </div>
      )}

      <div className={`grid gap-1 ${classNameItems}`}>
        {filteredTechnologies.map((tec) => (
          <CardTecnologia
            key={tec.id}
            tec={tec}
            classNameItem={classNameItem}
          />
        ))}
      </div>
    </div>
  );
};
