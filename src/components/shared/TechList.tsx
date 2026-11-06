import { technologies } from "@/data/technologies.data";
import { TechInline } from "@/components/index";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface TechListProps {
  className?: string;
  Icon?: LucideIcon;
  order?: Array<number | string>;
  title?: string;
  type?: string;
  classNameItems?: string;
  classNameItem?: string;
  variant?: "inline" | "card" | "badge";
  badgeVariant?:
    | "default"
    | "secondary"
    | "destructive"
    | "outline"
    | "ghost"
    | "link";
  icons?: boolean;
  /** Máximo de elementos visibles; el resto se muestra como "+N". */
  max?: number;
}

export const TechList = ({
  className,
  Icon,
  order,
  title,
  type,
  classNameItems,
  classNameItem,
  variant = "inline",
  badgeVariant = "outline",
  icons = true,
  max,
}: TechListProps) => {
  const normalize = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^a-z0-9]/g, "");

  const filteredTechnologies = technologies.filter((tec) => {
    if (type && !order) return tec.type === type;
    if (order) {
      return order.some((val) =>
        typeof val === "number"
          ? val === tec.id
          : normalize(val) === normalize(tec.name),
      );
    }
    return true;
  });

  const itemsToRender: Array<{ id?: number; name?: string }> = [];

  if (order) {
    order.forEach((val) => {
      const tec =
        typeof val === "number"
          ? filteredTechnologies.find((t) => t.id === val)
          : filteredTechnologies.find(
              (t) => normalize(t.name) === normalize(val),
            );

      if (tec) {
        itemsToRender.push({ id: tec.id });
      } else if (typeof val === "string") {
        itemsToRender.push({ name: val });
      }
    });
  } else {
    filteredTechnologies.forEach((tec) => {
      itemsToRender.push({ id: tec.id });
    });
  }

  if (itemsToRender.length === 0) return null;

  const hasLimit = max !== undefined && itemsToRender.length > max;
  const visibleItems = hasLimit ? itemsToRender.slice(0, max) : itemsToRender;
  const hiddenCount = itemsToRender.length - visibleItems.length;

  return (
    <div className={cn(className)}>
      {(title || Icon) && (
        <div className="mb-3 flex items-center gap-2.5">
          {Icon && <Icon className="text-primary h-5 w-5" />}
          {title && (
            <h3 className="text-foreground/65 text-lg font-bold">{title}</h3>
          )}
        </div>
      )}

      <div
        className={cn(
          variant === "card" ? "grid gap-1" : "flex flex-wrap gap-x-1 gap-y-2",
          classNameItems,
        )}
      >
        {visibleItems.map((item, index) => (
          <TechInline
            key={item.id ?? `${item.name}-${index}`}
            id={item.id}
            name={item.name}
            variant={variant}
            badgeVariant={badgeVariant}
            icons={icons}
            className={variant === "card" ? "" : classNameItem}
            classNameItem={variant === "card" ? classNameItem : ""}
          />
        ))}
        {hiddenCount > 0 && (
          <Badge variant={badgeVariant} className="text-muted-foreground">
            +{hiddenCount}
          </Badge>
        )}
      </div>
    </div>
  );
};
