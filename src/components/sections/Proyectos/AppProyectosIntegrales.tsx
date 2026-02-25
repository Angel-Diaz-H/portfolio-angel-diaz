import { CardProyectos } from "./CardProyectos";

export const AppProyectosIntegrales = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <CardProyectos
        title="Proyecto 1"
        img="/Icon.svg"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit. In error, placeat deleniti modi fuga exercitationem nemo quis debitis velit doloribus"
        tech={["React", "TypeScript", "Node.js"]}
        // date="10-2025"
      />
    </div>
  );
};
