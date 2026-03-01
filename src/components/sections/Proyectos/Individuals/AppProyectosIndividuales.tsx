import { useMemo, useState } from "react";
import { projects } from "@/data/projects.data";
import type { Project } from "@/data/projects.data";
import { DataTable, ColumnsTableProjects } from "@/components/index";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export const AppProyectosIndividuales = () => {
  const [projectSelected, setProjectSelected] = useState<Project | null>(null);

  const levelTwoProjects = useMemo(
    () => projects.filter((project) => project.level === 2),
    [],
  );

  return (
    <>
      <DataTable
        columns={ColumnsTableProjects}
        data={levelTwoProjects}
        onRowClick={setProjectSelected}
      />

      <Dialog
        open={Boolean(projectSelected)}
        onOpenChange={(open) => {
          if (!open) {
            setProjectSelected(null);
          }
        }}
      >
        <DialogContent className="w-[95vw]! max-w-6xl! rounded-3xl p-4 sm:p-5">
          <DialogHeader className="mb-2">
            <DialogTitle className="text-foreground/80 text-2xl font-bold">
              {projectSelected?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {projectSelected?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-2 w-full">
            {projectSelected?.images?.length === 1 ? (
              <div className="border-border/50 relative flex h-[50vh] w-full items-center justify-center overflow-hidden rounded-2xl border sm:h-[65vh]">
                <img
                  src={projectSelected.images[0]}
                  alt={projectSelected.title}
                  className="bg-muted/10 h-full w-full object-contain p-2"
                />
              </div>
            ) : projectSelected?.images && projectSelected.images.length > 1 ? (
              <Carousel className="group relative w-full hover:cursor-grab active:cursor-grabbing">
                <CarouselContent>
                  {projectSelected.images.map((image, index) => (
                    <CarouselItem key={`${projectSelected.id}-${index}`}>
                      <div className="border-border/50 relative flex h-[50vh] w-full items-center justify-center overflow-hidden rounded-2xl border sm:h-[65vh]">
                        <img
                          src={image}
                          alt={`${projectSelected.title} imagen ${index + 1}`}
                          className="bg-muted/10 h-full w-full object-contain p-2"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="absolute top-1/2 left-4 h-10 w-10 -translate-y-1/2 cursor-pointer border-none bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-black/60" />
                <CarouselNext className="absolute top-1/2 right-4 h-10 w-10 -translate-y-1/2 cursor-pointer border-none bg-black/40 text-white opacity-0 backdrop-blur-sm transition-all group-hover:opacity-100 hover:bg-black/60" />
              </Carousel>
            ) : (
              <div className="border-border/50 flex h-40 w-full items-center justify-center rounded-2xl border border-dashed">
                <p className="text-muted-foreground text-sm">
                  Este proyecto no tiene imágenes registradas.
                </p>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
