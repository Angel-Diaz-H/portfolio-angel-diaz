import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  cert: {
    id: number;
    title: string;
    description: string;
    image: string;
    credentialUrl: string;
    technologies: string[];
  };
}

export const CardCapacitacion = ({ cert }: Props) => {
  return (
    <Card
      key={cert.id}
      className="relative mx-auto w-full overflow-hidden rounded-4xl pt-0 shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <img
        src={cert.image}
        alt={cert.title}
        loading="lazy"
        className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
      />

      <CardHeader className="pb-2">
        <CardTitle>{cert.title}</CardTitle>
        <CardDescription>{cert.description}</CardDescription>
      </CardHeader>

      <CardFooter className="flex flex-col gap-4">
        <div className="flex w-full flex-wrap gap-2">
          {cert.technologies.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <Button className="w-full rounded-full text-center">
          <a
            className="h-full w-full"
            href={cert.credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ir al certificado
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};
