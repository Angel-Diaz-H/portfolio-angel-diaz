import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowUpRightIcon } from "lucide-react";

interface Props {
  cert: {
    id: number;
    title: string;
    description: string;
    image: string;
    credentialUrl: string;
    technologies: string[];
  };
  classNameCard?: string;
}

export const CardCapacitacion = ({ cert, classNameCard }: Props) => {
  return (
    <Dialog>
      <Card
        key={cert.id}
        className={`hover:border-ring hover:bg-accent-secondary bg-background relative mx-auto w-full overflow-hidden rounded-4xl pt-0 shadow hover:shadow-md ${classNameCard} transition-transform duration-100 hover:scale-101`}
      >
        <DialogTrigger asChild>
          <button
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
            aria-label="Ver certificado"
          />
        </DialogTrigger>

        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="h-full w-full object-cover"
        />

        <CardHeader>
          <CardTitle>{cert.title}</CardTitle>
          <CardDescription>{cert.description}</CardDescription>
        </CardHeader>

        <CardFooter className="pointer-events-none relative z-20 flex flex-wrap gap-4">
          <div className="pointer-events-auto flex w-full flex-wrap gap-2">
            {cert.technologies.map((tech) => (
              <Badge key={tech}>{tech}</Badge>
            ))}
          </div>

          <a
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="bg-primary text-primary-foreground hover:border-ring hover:bg-accent-primary-foreground hover:text-accent-primary pointer-events-auto flex w-full items-center justify-center gap-1 rounded-full p-2 text-center text-sm font-medium"
          >
            Ir a la credencial
            <ArrowUpRightIcon className="max-h-5" />
          </a>
        </CardFooter>
      </Card>

      <DialogContent
        showCloseButton={false}
        className="flex h-auto w-auto max-w-none min-w-[55vw] items-center justify-center border-none bg-transparent p-0 shadow-none"
      >
        <DialogTitle className="hidden">{cert.title}</DialogTitle>
        <img
          src={cert.image}
          alt={cert.title}
          loading="lazy"
          className="max-h-[90vh] w-auto rounded-xl object-contain shadow-2xl"
        />
      </DialogContent>
    </Dialog>
  );
};
