import { Database, Rocket, Server, Wrench } from "lucide-react";

const EXPERIENCES_DATA = [
  {
    id: 1,
    title: "Administración de base de datos.",
    icon: Database,
    items: [
      "Gestión integral de instancias Oracle, SQL Server, MySQL, MariaDB y PostgreSQL en ambientes productivos y de desarrollo.",
      // "Responsable de la seguridad (usuarios, permisos), ejecución de planes de respaldo y administración de almacenamiento (tablespaces, datafiles).",
    ],
  },
  {
    id: 2,
    title: "Infraestructura y servidores.",
    icon: Server,
    items: [
      "Configuración y monitoreo de servicios IIS y clientes Oracle TNS en Windows Server.",
      // "Administración de entornos Linux (Oracle Linux, Ubuntu, Solaris) mediante línea de comandos.",
    ],
  },
  {
    id: 3,
    title: "Despliegue.",
    icon: Rocket,
    items: [
      "Liberación de objetos a producción utilizando control de versiones Git y gestores como PM2.",
    ],
  },
  {
    id: 4,
    title: "Herramientas ERP.",
    icon: Wrench,
    items: [
      "Soporte a Oracle EBS (workflows, SOA) y gestión de reportes en Oracle APEX y Power BI.",
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
