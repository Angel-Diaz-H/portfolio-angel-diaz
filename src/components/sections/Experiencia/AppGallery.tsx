import { Button } from "@/components/ui/button";
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

export const AppGallery = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={"outline"}
          className="hover:text-primary cursor-pointer rounded-full"
        >
          <a className="flex items-center justify-center gap-2">
            <Image className="h-10 shrink-0 object-cover" />
            Ver galería
          </a>
        </Button>
      </DialogTrigger>

      <DialogContent
        showCloseButton={false}
        className="flex h-auto w-auto max-w-none min-w-[55vw] items-center justify-center border-none bg-transparent p-0 shadow-none"
      >
        <DialogTitle className="">Galería de imágenes</DialogTitle>
        <Carousel className="w-full max-w-48 sm:max-w-xs">
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-4xl font-semibold">
                        {index + 1}
                      </span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
};
