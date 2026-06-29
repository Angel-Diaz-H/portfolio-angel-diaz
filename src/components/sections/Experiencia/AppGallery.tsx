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
import { Image as ImageIcon } from "lucide-react";
import { useState, useEffect } from "react";

const galleryImages = [
  "./experiencia/experience-1.webp",
  "./experiencia/experience-2.webp",
  "./experiencia/experience-3.webp",
];

export const AppGallery = () => {
  const [mainApi, setMainApi] = useState<CarouselApi>();
  const [dialogApi, setDialogApi] = useState<CarouselApi>();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!mainApi || !dialogApi || !isOpen) return;
    dialogApi.scrollTo(mainApi.selectedScrollSnap(), true);
  }, [isOpen, mainApi, dialogApi]);

  useEffect(() => {
    if (!mainApi || !dialogApi) return;

    const syncMain = () => {
      mainApi.scrollTo(dialogApi.selectedScrollSnap());
    };

    dialogApi.on("select", syncMain);
    return () => {
      dialogApi.off("select", syncMain);
    };
  }, [mainApi, dialogApi]);

  useEffect(() => {
    if (!isOpen || !dialogApi) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        dialogApi.scrollPrev();
      } else if (e.key === "ArrowRight") {
        dialogApi.scrollNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, dialogApi]);

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <Card borderAnimation className="w-full">
        <CardContent className="px-6">
          <div className="mb-3 flex items-center gap-2.5">
            <ImageIcon className="text-primary h-5 w-5" />
            <p className="text-foreground/65 text-lg font-bold">Galería.</p>
          </div>

          <Carousel
            setApi={setMainApi}
            className="w-full hover:cursor-grab active:cursor-grabbing"
          >
            <CarouselContent>
              {galleryImages.map((src, index) => (
                <CarouselItem key={index}>
                  <DialogTrigger asChild>
                    <div
                      onClick={() => mainApi?.scrollTo(index)}
                      className="border-muted/20 group relative cursor-pointer overflow-hidden rounded-3xl border shadow-md"
                    >
                      <img
                        src={src}
                        alt={`Evidencia ${index + 1}`}
                        className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </DialogTrigger>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute right-2 bottom-2 z-10 flex gap-1">
              <CarouselPrevious className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white hover:bg-black/60" />
              <CarouselNext className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white hover:bg-black/60" />
            </div>
          </Carousel>
        </CardContent>
      </Card>

      <DialogContent
        showCloseButton={false}
        className="h-[80vh] w-[95vw] max-w-[95vw] cursor-grab border-none bg-transparent p-0 shadow-none md:w-[70vw] md:max-w-[70vw]"
      >
        <DialogTitle className="sr-only">Galería de imágenes</DialogTitle>

        <Carousel
          setApi={setDialogApi}
          className="group relative h-full w-full"
        >
          <CarouselContent className="ml-0 h-[80vh]">
            {galleryImages.map((src, index) => (
              <CarouselItem
                key={index}
                className="flex h-full w-full items-center justify-center pl-0"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={src}
                  alt={`Evidencia ampliada ${index + 1}`}
                  loading="lazy"
                  onClick={(e) => e.stopPropagation()}
                  className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl md:h-full md:w-full md:object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute inset-y-0 left-2 flex items-center md:left-4">
            <CarouselPrevious className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 md:h-12 md:w-12" />
          </div>
          <div className="absolute inset-y-0 right-2 flex items-center md:right-4">
            <CarouselNext className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white backdrop-blur-sm transition-all hover:bg-black/60 md:h-12 md:w-12" />
          </div>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
