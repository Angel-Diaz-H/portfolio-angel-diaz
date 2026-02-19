import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Image, Maximize2 } from "lucide-react";
import { Card } from "@/components/ui/card";

const galleryImages = [
  "/experiencia/experience-1.webp",
  "/experiencia/experience-2.webp",
  "/experiencia/experience-3.webp",
];

export const AppGallery = () => {
  return (
    <Dialog>
      {/* --- CARRUSEL EN LA VISTA NORMAL --- */}
      <Card className="border-muted/40 bg-background/50 w-full rounded-3xl border shadow-sm sm:p-4">
        <p className="text-muted-foreground mb-3 flex items-center gap-2.5 text-lg font-semibold">
          <Image className="text-primary inline-block h-5 w-5" />
          Galería.
        </p>
        <Carousel className="w-full px-6 hover:cursor-grab active:cursor-grabbing">
          <CarouselContent>
            {galleryImages.map((src, index) => (
              <CarouselItem key={index}>
                <DialogTrigger asChild>
                  <div className="border-muted/20 group relative cursor-pointer overflow-hidden rounded-2xl border shadow-md">
                    <img
                      src={src}
                      alt={`Evidencia ${index + 1}`}
                      className="aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay oscuro con ícono al hacer hover */}
                    <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100">
                      <Maximize2 className="h-10 w-10 text-white drop-shadow-lg" />
                    </div>
                  </div>
                </DialogTrigger>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-primary left-2 h-8 w-8 border-none bg-black/50 text-white backdrop-blur-sm" />
          <CarouselNext className="hover:bg-primary right-2 h-8 w-8 border-none bg-black/50 text-white backdrop-blur-sm" />
        </Carousel>
      </Card>

      {/* --- MODAL / DIALOG FULL SCREEN --- */}
      <DialogContent className="flex max-w-5xl justify-center border-none bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">
          Galería de imágenes de experiencia
        </DialogTitle>
        <Carousel className="w-full max-w-4xl">
          <CarouselContent>
            {galleryImages.map((src, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center p-2"
              >
                <img
                  src={src}
                  alt={`Evidencia ampliada ${index + 1}`}
                  className="max-h-[80vh] w-auto rounded-xl object-contain shadow-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hover:bg-primary -left-4 h-12 w-12 border-none bg-black/50 text-white backdrop-blur-sm sm:-left-12" />
          <CarouselNext className="hover:bg-primary -right-4 h-12 w-12 border-none bg-black/50 text-white backdrop-blur-sm sm:-right-12" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
