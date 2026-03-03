import { useState } from "react";
import { projects } from "@/data/projects.data";
import type { Project } from "@/data/projects.data";
import { CardProyectos } from "@/components/index";
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

export const AppProyectosIntegrales = () => {
  const levelOneProjects = projects.filter((project) => project.level === 1);

  const [projectSelected, setProjectSelected] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {levelOneProjects.map((project) => (
          <CardProyectos
            key={project.id}
            title={project.title}
            img={project.images?.[0] ?? "/.svg"}
            description={project.description}
            tech={project.technologies ?? []}
            github={project.github}
            link={project.link}
            hasImages={!!project.images?.length}
            onOpenGallery={() => setProjectSelected(project)}
          />
        ))}
      </div>

      <Dialog
        open={Boolean(projectSelected)}
        onOpenChange={(open) => {
          if (!open) {
            setProjectSelected(null);
          }
        }}
      >
        <DialogContent className="w-[95vw]! max-w-5xl! rounded-3xl p-4 sm:p-5">
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
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
