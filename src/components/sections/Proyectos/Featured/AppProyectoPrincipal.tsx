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
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { projects } from "@/data/projects.data";
import { ExternalLink, Github, Images } from "lucide-react";
import { useEffect, useState } from "react";

export const AppProyectoPrincipal = () => {
  const project = projects.find((item) => item.featured);
  const images = project?.images ?? [];
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [dialogApi, setDialogApi] = useState<CarouselApi>();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  useEffect(() => {
    if (!mainApi) return;

    const syncSelectedImage = () => {
      setSelectedImageIndex(mainApi.selectedScrollSnap());
    };

    syncSelectedImage();
    mainApi.on("select", syncSelectedImage);
    return () => {
      mainApi.off("select", syncSelectedImage);
    };
  }, [mainApi]);

  useEffect(() => {
    if (!dialogApi) return;

    const syncSelectedImage = () => {
      setSelectedImageIndex(dialogApi.selectedScrollSnap());
    };

    dialogApi.on("select", syncSelectedImage);
    return () => {
      dialogApi.off("select", syncSelectedImage);
    };
  }, [dialogApi]);

  useEffect(() => {
    mainApi?.scrollTo(selectedImageIndex, true);
    if (isOpen) dialogApi?.scrollTo(selectedImageIndex, true);
  }, [dialogApi, isOpen, mainApi, selectedImageIndex]);

  useEffect(() => {
    if (!isOpen || !dialogApi) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") dialogApi.scrollPrev();
      if (event.key === "ArrowRight") dialogApi.scrollNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dialogApi, isOpen]);

  if (!project) return null;

  const openImage = (index: number) => {
    setSelectedImageIndex(index);
    mainApi?.scrollTo(index, true);
    dialogApi?.scrollTo(index, true);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card borderAnimation>
        <CardContent className="grid gap-5 py-5 lg:grid-cols-[minmax(0,1.65fr)_minmax(18rem,0.85fr)] lg:items-stretch">
          <div className="min-w-0">
            {images.length > 0 ? (
              <Carousel
                setApi={setMainApi}
                className="relative w-full hover:cursor-grab active:cursor-grabbing"
              >
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={`${project.id}-${image}`}>
                      <figure className="grid gap-1">
                        <div className="border-border/60 relative aspect-16/10 w-full overflow-hidden rounded-xl border shadow-sm">
                          <DialogTrigger asChild>
                            <button
                              type="button"
                              onClick={() => openImage(index)}
                              className="group/image h-full w-full cursor-pointer text-left"
                              aria-label={`Abrir captura ${index + 1} de ${project.title}`}
                            >
                              <img
                                src={image}
                                alt={`${project.title}: captura ${index + 1}`}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-500 group-hover/image:scale-105"
                              />
                            </button>
                          </DialogTrigger>
                          <div className="absolute right-2 bottom-2 z-10 flex gap-1">
                            <CarouselPrevious className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60" />
                            <CarouselNext className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60" />
                          </div>
                        </div>
                        {project.imageCaptions?.[index] && (
                          <figcaption className="text-muted-foreground px-4 text-xs leading-6">
                            {project.imageCaptions[index]}
                          </figcaption>
                        )}
                      </figure>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            ) : (
              <div className="bg-muted/30 text-muted-foreground flex aspect-16/10 items-center justify-center rounded-2xl text-sm">
                Próximamente se añadirán capturas del proyecto.
              </div>
            )}
          </div>

          <aside className="flex flex-col rounded-2xl p-5">
            <div className="text-primary mb-4 flex items-center gap-2 text-sm font-semibold">
              <Images className="h-4 w-4" />
              Proyecto destacado
            </div>
            <h3 className="text-foreground/90 text-xl leading-snug font-bold">
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
        showCloseButton={false}
        className="h-[80vh] w-[95vw] max-w-[95vw] cursor-grab border-none bg-transparent p-0 shadow-none md:w-[70vw] md:max-w-[70vw]"
      >
        <DialogTitle className="sr-only">
          Galería del proyecto principal
        </DialogTitle>
        <Carousel
          setApi={setDialogApi}
          className="group relative h-full w-full"
        >
          <CarouselContent className="ml-0 h-[80vh]">
            {images.map((image, index) => (
              <CarouselItem
                key={`${project.id}-dialog-${image}`}
                className="flex h-full w-full items-center justify-center pl-0"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={image}
                  alt={`${project.title}: captura ampliada ${index + 1}`}
                  loading="lazy"
                  onClick={(event) => event.stopPropagation()}
                  className="h-full w-full rounded-2xl object-cover shadow-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          {images.length > 1 && (
            <>
              <div className="absolute inset-y-0 left-2 flex items-center md:left-4">
                <CarouselPrevious className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 md:h-12 md:w-12" />
              </div>
              <div className="absolute inset-y-0 right-2 flex items-center md:right-4">
                <CarouselNext className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 md:h-12 md:w-12" />
              </div>
            </>
          )}
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
