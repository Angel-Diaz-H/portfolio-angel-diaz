import { TechList } from "@/components/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import type { KeyboardEvent, MouseEvent } from "react";

interface Props {
  title: string;
  description: string;
  img: string;
  tech: string[];
  github?: string;
  link?: string;
  hasImages?: boolean;
  onOpenGallery?: () => void;
}

const stopPropagation = (event: MouseEvent | KeyboardEvent) =>
  event.stopPropagation();

export const CardProyectos = ({
  title,
  description,
  img,
  tech,
  github,
  link,
  hasImages,
  onOpenGallery,
}: Props) => {
  const clickable = Boolean(hasImages && onOpenGallery);

  return (
    <Card
      borderAnimation
      className={clickable ? "h-72 cursor-pointer" : "h-84"}
      {...(clickable && {
        role: "button",
        tabIndex: 0,
        "aria-label": `Abrir galería de ${title}`,
        onClick: onOpenGallery,
        onKeyDown: (event: KeyboardEvent) => {
          if (
            event.target === event.currentTarget &&
            (event.key === "Enter" || event.key === " ")
          ) {
            event.preventDefault();
            onOpenGallery?.();
          }
        },
      })}
    >
      <CardContent className="flex h-full flex-col gap-3 py-0">
        <div className="bg-primary/10 h-16 w-full shrink-0 overflow-hidden rounded-3xl">
          <img
            src={img}
            alt={`Portada de ${title}`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex min-h-0 flex-1 flex-col gap-3">
          <div className="grid gap-1">
            <p
              title={title}
              className="text-foreground/80 line-clamp-2 text-sm font-semibold"
            >
              {title}
            </p>
            <p
              title={description}
              className="text-muted-foreground font-Inter line-clamp-2 text-sm font-normal"
            >
              {description}
            </p>
          </div>
          <TechList
            order={tech}
            variant="badge"
            badgeVariant="outline"
            classNameItems="flex flex-wrap"
            icons={false}
            max={3}
          />
          <div className="mt-auto flex w-full flex-wrap items-center gap-2">
            {github && (
              <Button
                variant="default"
                className="rounded-full py-0 text-xs"
                asChild
              >
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={stopPropagation}
                >
                  Github
                </a>
              </Button>
            )}
            {link && (
              <Button
                variant="outline"
                className="rounded-full bg-white px-3 py-0 text-xs text-neutral-900 hover:bg-white/90 hover:text-neutral-900 dark:bg-white dark:hover:bg-white/90"
                asChild
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  onClick={stopPropagation}
                >
                  Enlace <ExternalLink className="h-3 w-3" />
                </a>
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
