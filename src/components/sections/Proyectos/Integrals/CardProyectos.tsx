import { BadgesTech } from "@/components/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Image as ImageIcon } from "lucide-react";

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
  return (
    <Card borderAnimation>
      <CardContent className="grid gap-3 py-0">
        <div className="bg-primary/10 h-16 w-full overflow-hidden rounded-3xl">
          <img
            src={img}
            alt={`Portada de ${title}`}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid w-full gap-3">
          <div className="grid gap-1">
            <p className="text-foreground/80 text-sm font-semibold">{title}</p>
            <p className="text-muted-foreground font-Inter text-sm font-normal">
              {description}
            </p>
          </div>
          <div className="grid gap-3">
            <div className="flex">
              <BadgesTech
                order={tech}
                variant="outline"
                classNameItems="flex flex-wrap"
                icons={false}
              />
            </div>
            <div className="flex w-full flex-wrap items-center gap-2">
              {github && (
                <Button
                  variant={"default"}
                  className="rounded-full py-0 text-xs"
                  asChild
                >
                  <a href={github} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </Button>
              )}
              {link && (
                <Button
                  variant={"default"}
                  className="rounded-full p-0 text-xs"
                  asChild
                >
                  <a href={link} target="_blank" rel="noreferrer">
                    Enlace
                  </a>
                </Button>
              )}
              {hasImages && (
                <Button
                  variant="outline"
                  className="text-muted-foreground cursor-pointer rounded-full px-3 py-0 text-xs font-semibold shadow-none"
                  onClick={onOpenGallery}
                >
                  <ImageIcon className="mr-1.5 h-3 w-3" />
                  Galería
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
