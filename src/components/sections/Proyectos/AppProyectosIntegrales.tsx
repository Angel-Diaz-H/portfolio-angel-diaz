import { projects } from "@/data/projects.data";
import { CardProyectos } from "./CardProyectos";

export const AppProyectosIntegrales = () => {
  const levelOneProjects = projects.filter((project) => project.level === 1);

  return (
    <div className="grid grid-cols-2 gap-3">
      {levelOneProjects.map((project) => (
        <CardProyectos
          key={project.id}
          title={project.title}
          img={project.images?.[0] ?? "/.svg"}
          description={project.description}
          tech={project.technologies ?? []}
          github={project.github}
          link={project.link}
        />
      ))}
    </div>
  );
};
