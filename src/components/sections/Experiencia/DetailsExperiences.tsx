import { Database, Rocket, Server, Wrench } from "lucide-react";

const EXPERIENCES_DATA = [
  {
    id: 1,
    title: "Administración de base de datos.",
    icon: Database,
    items: [
      "Gestión integral de instancias Oracle, SQL Server, MySQL, MariaDB y PostgreSQL en ambientes productivos y de desarrollo.",
      "Responsable de la seguridad (usuarios, permisos), ejecución de planes de respaldo y administración de almacenamiento (tablespaces, datafiles).",
    ],
  },
  {
    id: 2,
    title: "Infraestructura y servidores.",
    icon: Server,
    items: [
      "Configuración y monitoreo de servicios IIS y clientes Oracle TNS en Windows Server.",
      "Administración de entornos Linux (Oracle Linux, Ubuntu, Solaris) mediante línea de comandos.",
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
    <div className="flex flex-wrap gap-2">
      {EXPERIENCES_DATA.map(({ id, title, icon: Icon, items }) => (
        <div key={id} className="relative pl-5">
          <span className="from-primary/50 absolute top-1.5 left-0 h-full w-0.5 rounded-full bg-linear-to-b to-transparent"></span>

          <h4 className="text-foreground mb-2 flex items-center gap-2 text-lg font-semibold">
            <Icon className="text-primary" size={20} /> {title}
          </h4>

          <ul className="text-muted-foreground flex flex-col gap-2 text-[15px]">
            {items.map((item, index) => (
              <li
                key={index}
                className="ml-7 list-outside list-disc leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
