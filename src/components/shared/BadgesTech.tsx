import { technologies } from "@/data/technologies.data";
import { Badge } from "../ui/badge";

interface Props {
  order: number[];
  variant:
    | "outline"
    | "default"
    | "secondary"
    | "destructive"
    | "ghost"
    | "link";
  classname?: string;
}

export const BadgesTech = ({ order, variant, classname }: Props) => {
  return (
    <div className="flex flex-wrap gap-2">
      {order.map((id) => {
        const tec = technologies.find((t) => t.id === id);

        if (!tec) return null;

        return (
          <Badge
            key={tec.id}
            variant={variant ?? "outline"}
            className={`${classname} gap-2 px-3 py-1 text-sm font-normal`}
          >
            <img
              src={tec.img}
              alt={`${tec.name} icon`}
              className="h-4 w-4 object-contain"
              loading="lazy"
            />
            <span>{tec.name}</span>
          </Badge>
        );
      })}
    </div>
  );
};
