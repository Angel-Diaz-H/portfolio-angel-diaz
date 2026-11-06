import { TechList } from "@/components/shared/TechList";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/data/projects.data";
import { ExternalLink, Github } from "lucide-react";
import { useEffect, useState } from "react";

// `duration` más bajo = desplazamiento más rápido (por defecto 25).
const CAROUSEL_OPTS = { duration: 18, align: "start" as const };

export const AppProyectoPrincipal = () => {
  const project = projects.find((item) => item.featured);
  const images = project?.images ?? [];
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [dialogApi, setDialogApi] = useState<CarouselApi>();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [dialogStartIndex, setDialogStartIndex] = useState(0);

  // El carrusel principal es la fuente de verdad del índice actual.
  useEffect(() => {
    if (!mainApi) return;

    const sync = () => setSelectedImageIndex(mainApi.selectedScrollSnap());

    sync();
    mainApi.on("select", sync);
    return () => {
      mainApi.off("select", sync);
    };
  }, [mainApi]);

  useEffect(() => {
    if (!isOpen || !dialogApi) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      // El carrusel ya gestiona las flechas cuando tiene el foco.
      if (event.defaultPrevented) return;
      if (event.key === "ArrowLeft") dialogApi.scrollPrev();
      if (event.key === "ArrowRight") dialogApi.scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dialogApi, isOpen]);

  if (!project) return null;

  const openGallery = (index: number) => {
    // Se congela el índice inicial para no reiniciar el carrusel del diálogo.
    setDialogStartIndex(index);
    setIsOpen(true);
  };

  const handleOpenChange = (open: boolean) => {
    if (!open && dialogApi && mainApi) {
      // Al cerrar, el carrusel principal queda en la imagen vista en el diálogo.
      const index = dialogApi.selectedScrollSnap();
      setSelectedImageIndex(index);
      mainApi.scrollTo(index, true);
    }
    setIsOpen(open);
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <Card borderAnimation>
        <CardContent className="grid gap-4 px-3 py-4 sm:px-6 sm:py-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.85fr)] lg:items-stretch">
          <div className="min-w-0">
            {images.length > 0 ? (
              <Carousel
                setApi={setMainApi}
                opts={CAROUSEL_OPTS}
                className="relative w-full hover:cursor-grab active:cursor-grabbing"
              >
                <CarouselContent className="ml-0 touch-pan-y will-change-transform">
                  {images.map((image, index) => (
                    <CarouselItem
                      key={`${project.id}-${image}`}
                      className="pl-0"
                    >
                      <button
                        type="button"
                        onClick={() => openGallery(index)}
                        className="group/image border-border/60 block aspect-4/3 w-full cursor-pointer overflow-hidden rounded-xl border shadow-sm outline-none sm:aspect-16/10"
                        aria-label={`Abrir captura ${index + 1} de ${project.title}`}
                      >
                        <img
                          src={image}
                          alt={`${project.title}: captura ${index + 1}`}
                          loading={index === 0 ? "eager" : "lazy"}
                          decoding="async"
                          draggable={false}
                          className="h-full w-full object-cover md:transition-transform md:duration-500 md:group-hover/image:scale-105"
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {images.length > 1 && (
                  <div className="absolute right-2 bottom-2 z-10 flex gap-1">
                    <CarouselPrevious className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white hover:bg-black/60" />
                    <CarouselNext className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white hover:bg-black/60" />
                  </div>
                )}
              </Carousel>
            ) : (
              <div className="bg-muted/30 text-muted-foreground flex aspect-16/10 items-center justify-center rounded-2xl text-sm">
                Próximamente se añadirán capturas del proyecto.
              </div>
            )}
            {project.imageCaptions?.[selectedImageIndex] && (
              <p className="text-muted-foreground mt-1 px-2 text-xs leading-6 sm:px-4">
                {project.imageCaptions[selectedImageIndex]}
              </p>
            )}
          </div>

          <aside className="flex flex-col rounded-2xl p-2 sm:p-5">
            <h3 className="text-foreground/80 text-xl leading-snug font-bold">
              {project.title}
            </h3>
            <p className="text-muted-foreground font-Inter mt-3 text-sm leading-6">
              {project.description}
            </p>

            <div className="mt-5">
              <p className="text-foreground/75 mb-2 text-sm font-semibold">
                Tecnologías
              </p>
              <TechList
                order={project.technologies}
                variant="badge"
                badgeVariant="outline"
                icons
              />
            </div>

            {(project.github || project.link) && (
              <div className="mt-6 flex flex-wrap gap-2 lg:mt-auto">
                {project.github && (
                  <Button className="rounded-full text-xs" asChild>
                    <a href={project.github} target="_blank" rel="noreferrer">
                      <Github className="h-3.5 w-3.5" /> Código
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button
                    variant="outline"
                    className="rounded-full text-xs"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noreferrer">
                      Ver proyecto <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  </Button>
                )}
              </div>
            )}
          </aside>
        </CardContent>
      </Card>

      <DialogContent
        // Evita que Radix devuelva el foco al trigger (y desplace el carrusel).
        onCloseAutoFocus={(event) => event.preventDefault()}
        className="w-[95vw]! max-w-5xl! rounded-3xl p-4 sm:p-5"
      >
        <DialogHeader className="mb-2">
          <DialogTitle className="text-foreground/80 text-2xl font-bold">
            {project.title}
          </DialogTitle>
          <DialogDescription className="text-base">
            {project.description}
          </DialogDescription>
        </DialogHeader>

        <Carousel
          setApi={setDialogApi}
          opts={{ ...CAROUSEL_OPTS, startIndex: dialogStartIndex }}
          className="group relative mt-2 w-full hover:cursor-grab active:cursor-grabbing"
        >
          <CarouselContent className="ml-0 touch-pan-y will-change-transform">
            {images.map((image, index) => (
              <CarouselItem
                key={`${project.id}-dialog-${image}`}
                className="pl-0"
              >
                <div className="border-border/50 relative flex h-[50vh] w-full items-center justify-center overflow-hidden rounded-2xl border sm:h-[65vh]">
                  <img
                    src={image}
                    alt={`${project.title}: captura ampliada ${index + 1}`}
                    decoding="async"
                    draggable={false}
                    className="bg-muted/10 h-full w-full object-contain p-2"
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          {images.length > 1 && (
            <>
              <CarouselPrevious className="absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100" />
              <CarouselNext className="absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 md:opacity-0 md:group-hover:opacity-100" />
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
