"use client";
import type { ColumnDef } from "@tanstack/react-table";
import type { Project } from "@/data/projects.data";

export const ColumnsTableProjects: ColumnDef<Project>[] = [
  {
    accessorKey: "title",
    header: "Título",
  },
  {
    accessorKey: "description",
    header: "Descripción",
  },
  {
    accessorKey: "technologies",
    header: "Tecnologías",
    cell: ({ row }) => row.original.technologies?.join(", ") ?? "-",
  },
  {
    accessorKey: "date",
    header: "Fecha",
    cell: ({ row }) => row.original.date ?? "-",
  },
];
