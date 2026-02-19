import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Image } from "lucide-react";

const galleryImages = [
  "/experiencia/experience-1.webp",
  "/experiencia/experience-2.webp",
  "/experiencia/experience-3.webp",
];

export const AppGallery = () => {
  return (
    <Dialog>
      <Card className="bg-background w-full rounded-4xl border-none p-6 sm:p-6">
        <CardContent className="p-0">
          <div className="mb-3 flex items-center gap-2.5">
            <Image className="text-primary inline-block h-5 w-5" />
            <p className="text-muted-foreground text-lg font-semibold">
              Galería.
            </p>
          </div>

          <Carousel className="w-full bg-none hover:cursor-grab active:cursor-grabbing">
            <CarouselContent className="bg-none">
              {galleryImages.map((src, index) => (
                <CarouselItem key={index} className="bg-none">
                  <DialogTrigger asChild>
                    <div className="border-muted/20 group relative cursor-pointer overflow-hidden rounded-3xl border shadow-md">
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
            <div className="absolute right-2 bottom-2 flex gap-1">
              <CarouselPrevious className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white" />
              <CarouselNext className="static h-8 w-8 translate-y-0 cursor-pointer border-none bg-black/40 text-white" />
            </div>
          </Carousel>
        </CardContent>
      </Card>

      <DialogContent className="flex max-w-full justify-center border-none bg-transparent p-0 shadow-none">
        <DialogTitle className="sr-only">
          Galería de imágenes de experiencia
        </DialogTitle>
        <Carousel className="w-full max-w-full">
          <CarouselContent>
            {galleryImages.map((src, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <img
                  src={src}
                  alt={`Evidencia ampliada ${index + 1}`}
                  className="min-h-[90vh] w-auto rounded-xl object-cover shadow-2xl"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="absolute right-2 bottom-2 flex gap-1">
            <CarouselPrevious className="hover:bg-primary static h-8 w-8 translate-y-0 border-none bg-black/40 text-white" />
            <CarouselNext className="hover:bg-primary static h-8 w-8 translate-y-0 border-none bg-black/40 text-white" />
          </div>
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
