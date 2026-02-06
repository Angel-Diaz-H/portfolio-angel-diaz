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
      <DialogTrigger asChild className="cursor-pointer">
        <Card
          key={cert.id}
          className={`hover:border-ring hover:bg-accent-secondary bg-background relative mx-auto w-full overflow-hidden rounded-4xl pt-0 shadow hover:shadow-md ${classNameCard}`}
        >
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

          <CardFooter className="flex flex-col gap-4">
            <div className="flex w-full flex-wrap gap-2">
              {cert.technologies.map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </CardFooter>
        </Card>
      </DialogTrigger>
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
