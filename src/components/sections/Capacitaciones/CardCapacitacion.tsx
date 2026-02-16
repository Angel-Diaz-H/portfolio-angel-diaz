import { ArrowUpRightIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

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
      <DialogTrigger asChild>
        <div className="group bg-background hover:border-ring hover:bg-accent-secondary/10 flex cursor-pointer items-center gap-4 rounded-2xl border p-3 shadow transition-all duration-150 hover:scale-[1.01] hover:shadow-md">
          <div className="bg-muted relative h-20 w-20 shrink-0 overflow-hidden rounded-lg border">
            <img
              src={cert.iconLight}
              alt={cert.title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-102"
            />
          </div>

          <div className="flex flex-1 flex-col justify-center text-left">
            <h3 className="text-foreground line-clamp-2 text-sm leading-tight font-semibold sm:text-sm">
              {cert.title}
            </h3>

            <p className="text-muted-foreground mt-2 text-xs font-medium">
              {cert.technologies.join(" • ")}
            </p>
          </div>

          <Button
            variant="default"
            className="hover:border-ring hover:text-accent-secondary-foreground h-9 w-28 rounded-full p-0 transition-colors"
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
        </div>
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
