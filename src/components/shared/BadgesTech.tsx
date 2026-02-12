import { technologies } from "@/data/technologies.data";
import { Badge } from "../ui/badge";

interface Props {
  order: Array<number | string>;
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
  const normalize = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^a-z0-9]/g, "");

  return (
    <div className="flex flex-wrap gap-2">
      {order.map((item, index) => {
        const tec =
          typeof item === "number"
            ? technologies.find((t) => t.id === item)
            : technologies.find((t) => normalize(t.name) === normalize(item));

        if (!tec) {
          if (typeof item === "number") return null;

          return (
            <Badge
              key={`${item}-${index}`}
              variant={variant ?? "outline"}
              className={`${classname} px-3 py-1 text-sm font-normal`}
            >
              <span>{item}</span>
            </Badge>
          );
        }

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
