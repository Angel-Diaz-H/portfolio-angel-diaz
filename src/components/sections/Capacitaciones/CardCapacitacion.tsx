import { ArrowUpRightIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  cert: {
    id: number;
    title: string;
    description: string;
    image: string;
    iconDark?: string;
    iconLight?: string;
    credentialUrl: string;
    technologies: string[];
  };
}

export const CardCapacitacion = ({ cert }: Props) => {
  return (
    <Dialog>
      {/* 1. Quitamos el DialogTrigger de aquí afuera para no envolver el enlace */}
      <Card
        borderAnimation
        className="group hover:bg-muted/10 my-0 transition-all"
      >
        {/* Cambiamos py-0 por p-3 sm:p-4 para que respire mejor en móvil */}
        <CardContent className="flex items-center gap-3 p-3 py-0">
          {/* 2. Envolvemos SOLO la imagen y el texto con el DialogTrigger */}
          <DialogTrigger asChild>
            <div className="flex flex-1 cursor-pointer items-center gap-3">
              <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg">
                <img
                  src={cert.iconLight}
                  alt={cert.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-1 flex-col justify-center text-left">
                <h3 className="text-muted-foreground line-clamp-2 text-sm leading-tight font-semibold sm:text-sm">
                  {cert.title}
                </h3>
                <p className="text-muted-foreground mt-1 text-xs font-medium">
                  {cert.technologies.join(" • ")}
                </p>
              </div>
            </div>
          </DialogTrigger>

          {/* 3. El botón de la credencial queda FUERA del Trigger para que iOS no lo oculte */}
          <Button
            variant="default"
            // Ajustamos a w-9 en móvil (círculo) y w-28 en escritorio (botón completo)
            className="hover:border-ring hover:text-accent-secondary-foreground h-9 w-9 shrink-0 rounded-full p-0 transition-colors sm:w-28"
            asChild
          >
            <a
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex items-center justify-center gap-1.5 text-xs font-semibold"
            >
              <span className="hidden sm:inline-block">Credencial</span>
              <ArrowUpRightIcon size={16} />
            </a>
          </Button>
        </CardContent>
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
