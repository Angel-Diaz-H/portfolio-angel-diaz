"use client";
import type { ColumnDef } from "@tanstack/react-table";
import type { Project } from "@/data/projects.data";
import { ExternalLink, Github, ChevronRight } from "lucide-react";

export const ColumnsTableProjects: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Proyecto",
    cell: ({ row }) => (
      // Limitamos el ancho y ponemos font-medium para destacar el título
      <div className="text-foreground/60 font-poppins max-w-37.5 truncate text-sm font-semibold sm:max-w-50">
        {row.original.title}
      </div>
    ),
  },
  {
    accessorKey: "description",
    header: "Descripción",
    cell: ({ row }) => (
      // Truncamos la descripción si es muy larga
      <div className="text-muted-foreground max-w-50 truncate sm:max-w-87.5">
        {row.original.description}
      </div>
    ),
  },
  {
    accessorKey: "technologies",
    header: "Tecnologías",
    cell: ({ row }) => {
      // Mostramos máximo 3 tecnologías para no saturar la tabla, el resto con "..."
      const techs = row.original.technologies?.slice(0, 3) || [];
      const hasMore = (row.original.technologies?.length ?? 0) > 3;

      return (
        <div className="flex flex-wrap">
          {techs.map((tech) => (
            <span
              key={tech}
              className="rounded-full border px-2 py-0.5 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {hasMore && (
            <span className="text-muted-foreground py-0.5 text-xs">...</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "Fecha",
    cell: ({ row }) => (
      <span className="text-muted-foreground text-sm whitespace-nowrap">
        {row.original.date ?? "-"}
      </span>
    ),
  },
  {
    id: "actions",
    enableSorting: false,
    cell: ({ row }) => {
      // Asumiendo que tu interface Project tiene "githubUrl" y "siteUrl" o similar.
      // Ajusta los nombres de las propiedades según tu projects.data.ts
      const github = (row.original as any).github; // Cambia .github por la propiedad real
      const link = (row.original as any).link; // Cambia .link por la propiedad real

      return (
        <div className="text-muted-foreground flex items-center justify-end gap-3">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              // Esto evita que al hacer clic en Github se abra el Dialog de la fila
              onClick={(e) => e.stopPropagation()}
              className="hover:text-primary transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="hover:text-primary transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
          {/* Indicador visual de que la fila entera es clickeable */}
          <ChevronRight className="h-4 w-4 opacity-40 transition-transform group-hover:translate-x-1 group-hover:opacity-100" />
        </div>
      );
    },
  },
];
