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
        {/* 1. Ajuste de ancho y padding del Dialog */}
        <DialogContent className="w-[95vw] max-w-5xl rounded-3xl p-4 sm:p-5">
          <DialogHeader className="mb-2">
            <DialogTitle className="text-2xl">
              {projectSelected?.title}
            </DialogTitle>
            <DialogDescription className="text-base">
              {projectSelected?.description}
            </DialogDescription>
          </DialogHeader>

          <div
            className={`grid gap-4 ${
              projectSelected?.images?.length === 1
                ? "grid-cols-1"
                : "sm:grid-cols-2"
            }`}
          >
            {projectSelected?.images?.length ? (
              projectSelected.images.map((image, index) => (
                <div key={`${projectSelected.id}-${index}`} className="w-full">
                  <img
                    src={image}
                    alt={`${projectSelected.title} imagen ${index + 1}`}
                    className="border-border/50 bg-muted/20 max-h-125 w-full rounded-2xl border object-contain p-2"
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
