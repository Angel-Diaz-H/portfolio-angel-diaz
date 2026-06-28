import { technologies } from "@/data/technologies.data";
import { cn } from "@/lib/utils";
import { CardTecnologia } from "@/components/index";
import { Badge } from "@/components/ui/badge";

export interface TechInlineProps {
  name?: string;
  id?: number;
  img?: string;
  className?: string;
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
}

export const TechInline = ({
  name,
  id,
  img,
  className,
  classNameItem,
  variant = "inline",
  badgeVariant = "outline",
  icons = true,
}: TechInlineProps) => {
  const normalize = (value: string) =>
    value
      .toLowerCase()
      .normalize("NFD")
      .replace(/\p{Diacritic}/gu, "")
      .replace(/[^a-z0-9]/g, "");

  let tec;
  if (id !== undefined) {
    tec = technologies.find((t) => t.id === id);
  } else if (name) {
    tec = technologies.find((t) => normalize(t.name) === normalize(name));
  }

  const displayName = tec ? tec.name : name;
  const displayImg = img !== undefined ? img : tec ? tec.img : undefined;

  if (!displayName) return null;

  //? Estilo badge.
  if (variant === "badge") {
    if (!tec && !displayImg) {
      return (
        <Badge
          variant={badgeVariant}
          className={cn(
            "text-medium text-muted-foreground px-3 py-1 font-medium",
            className,
          )}
        >
          <span>{displayName}</span>
        </Badge>
      );
    }

    return (
      <Badge
        variant={badgeVariant}
        className={cn("gap-2 px-2 py-1 text-xs font-normal", className)}
      >
        {icons && displayImg && (
          <img
            src={displayImg}
            alt={`${displayName} icon`}
            className="h-4 w-4 object-contain"
            loading="lazy"
          />
        )}
        <span className="text-muted-foreground text-xs font-medium">
          {displayName}
        </span>
      </Badge>
    );
  }

  //? Estilo card.
  if (variant === "card") {
    return (
      <div className={cn("inline-block", className)}>
        <CardTecnologia
          tec={{ name: displayName, img: displayImg || "" }}
          classNameItem={classNameItem}
        />
      </div>
    );
  }

  //? Estilo inline.
  return (
    <span
      className={cn(
        "text-muted-foreground mx-1 inline-flex items-center gap-1 align-middle font-semibold",
        className,
      )}
    >
      {icons && displayImg && (
        <img
          src={displayImg}
          alt={`${displayName} icon`}
          className="h-4 w-4 object-contain"
          loading="lazy"
        />
      )}
      {displayName}
    </span>
  );
};
