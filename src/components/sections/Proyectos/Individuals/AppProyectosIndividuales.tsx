import { useMemo, useState } from "react";
import { projects } from "@/data/projects.data";
import type { Project } from "@/data/projects.data";
import { DataTable } from "./DataTableProjects";
import { ColumnsTableProjects } from "./ColumsTableProjects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

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
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{projectSelected?.title}</DialogTitle>
            <DialogDescription>
              {projectSelected?.description}
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-3 sm:grid-cols-2">
            {projectSelected?.images?.length ? (
              projectSelected.images.map((image, index) => (
                <div key={`${projectSelected.id}-${index}`} className="w-full">
                  <img
                    src={image}
                    alt={`${projectSelected.title} imagen ${index + 1}`}
                    className="h-48 w-full rounded-md object-cover"
                  />
                </div>
              ))
            ) : (
              <p className="text-muted-foreground text-sm">
                Este proyecto no tiene imágenes registradas.
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
