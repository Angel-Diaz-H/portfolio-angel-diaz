"use client";
import type { ColumnDef } from "@tanstack/react-table";

export type Projects = {
  id: string;
  title: string;
  description: string;
  tech: string[];
  date: string;
};

/*   id: number;
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
  date?: string;
  level: number; */

export const ColumnsTableProjects: ColumnDef<Projects>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "tech",
    header: "Tecnologías",
  },
  {
    accessorKey: "date",
    header: "Fecha",
  },
];
