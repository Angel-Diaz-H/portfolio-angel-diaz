import { BadgesTech } from "@/components/index";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  img: string;
  tech: string[];
  github?: string;
  link?: string;
}

export const CardProyectos = ({
  title,
  description,
  img,
  tech,
  github,
  link,
}: Props) => {
  return (
    <Card borderAnimation>
      <CardContent className="grid gap-3 py-0">
        <div className="bg-primary/10 h-16 w-full rounded-3xl">
          <img
            src={img}
            alt="Proyecto"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid w-full gap-3">
          <div className="grid gap-1">
            <p className="text-foreground/65 text-sm font-semibold">{title}</p>
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
            <div className="flex w-full items-center gap-3">
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
              {/* <p className="text-muted-foreground text-sm font-semibold">
                {date}
              </p> */}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
