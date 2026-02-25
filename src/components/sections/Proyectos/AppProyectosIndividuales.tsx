import { projects } from "@/data/projects.data";
import { DataTable } from "./Table/DataTableProjects";
import { ColumnsTableProjects } from "./Table/ColumsTableProjects";

export const AppProyectosIndividuales = () => {
  return (
    <>
      <DataTable columns={ColumnsTableProjects} data={projects} />
    </>
  );
};
