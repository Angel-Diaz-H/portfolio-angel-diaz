import { technologies } from "@/data/technologies.data";
import { cn } from "@/lib/utils";

interface TechInlineProps {
  name?: string;
  id?: number;
  img?: string;
  type?: string;
  className?: string;
}

export const TechInline = ({
  name,
  id,
  img,
  // type,
  className,
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

  return (
    <span
      className={cn(
        "text-muted-foreground mx-1 inline-flex items-center gap-1 align-middle font-semibold",
        className,
      )}
    >
      {displayImg && (
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
