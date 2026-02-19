import { Database, Rocket, Server, Wrench } from "lucide-react";

const EXPERIENCES_DATA = [
  {
    id: 1,
    title: "Base de datos.",
    icon: Database,
    items: [
      "Administración de bases de datos abarcando seguridad de usuarios, respaldos y gestión de objetos, tanto en ambientes productivos como de desarrollo.",
    ],
  },
  {
    id: 2,
    title: "Infraestructura de servidores.",
    icon: Server,
    items: [
      "Administración de servidores Windows y Linux, abarcando la configuración de servicios, conectividad de bases de datos, así como tareas de monitoreo y mantenimiento.",
    ],
  },
  {
    id: 3,
    title: "Despliegue.",
    icon: Rocket,
    items: [
      "Despliegues en producción y desarrollo de objetos de base de datos, así como la gestión de ramas utilizando Git y PM2.",
    ],
  },
  {
    id: 4,
    title: "Herramientas ERP.",
    icon: Wrench,
    items: [
      "Soporte a sistemas internos abarcando monitoreo en Oracle EBS, coordinación de incidencias, así como la gestión de Oracle APEX y publicación de tableros.",
    ],
  },
];

export const DetailsExperiences = () => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {EXPERIENCES_DATA.map(({ id, title, icon: Icon, items }) => (
        <div key={id} className="relative pl-4">
          <span className="from-primary/50 absolute top-1.5 left-0 h-full w-0.5 rounded-full bg-linear-to-b to-transparent"></span>
          <h4 className="text-foreground/75 my-1 flex items-center gap-3 text-sm font-semibold">
            <Icon className="text-primary" size={17} /> {title}
          </h4>
          <p className="text-muted-foreground font-Inter mx-8 text-sm">
            {items}
          </p>
        </div>
      ))}
    </div>
  );
};
