import { BadgesTech } from "@/components/shared/BadgesTech";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  title: string;
  description: string;
  img: string;
  tech: string[];
  github?: string;
  link?: string;
  //   date: string;
}

export const CardProyectos = ({
  title,
  description,
  img,
  tech,
  github,
  link,
  //   date,
}: Props) => {
  return (
    <Card borderAnimation>
      <CardContent className="grid gap-4">
        <div className="h-25 w-full rounded-2xl bg-gray-200">
          <img
            src={img}
            alt="Proyecto"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="grid w-full gap-3">
          <div className="grid gap-2">
            <p className="font-semibold">{title}</p>
            <p className="text-muted-foreground text-sm font-normal">
              {description}
            </p>
          </div>
          <div className="grid gap-3">
            <div className="flex w-full flex-wrap gap-2">
              <BadgesTech order={tech} variant="outline" />
            </div>
            <div className="flex w-full items-center gap-3">
              <Button variant={"default"} className="rounded-full">
                <a className="h-full w-full" href={github}>
                  Github
                </a>
              </Button>
              <Button variant={"default"} className="rounded-full">
                <a className="h-full w-full" href={link}>
                  Enlace
                </a>
              </Button>
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
