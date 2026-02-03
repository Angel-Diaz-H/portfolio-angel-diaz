import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  //   CardAction,
  CardFooter,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export const CardExperiencia = () => {
  return (
    <Card className="">
      <CardHeader className="flex items-center space-x-4">
        <img className="h-7" src="/experiencia/Casas-Javer.webp" alt="" />
        <div className="space-y-2">
          <CardTitle className="">
            <p>Administrador de bases de datos junior (Database Intern).</p>
          </CardTitle>
          <CardDescription>
            <p>Casas Javer | Enero 2025 - Noviembre 2025.</p>
            <p>Híbrido, Monterrey, Nuevo León.</p>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-4 text-sm">
        <p>
          Rol enfocado en el soporte y mantenimiento de infraestructura.
          <span className="block">
            Logré aumentar la eficiencia operativa mediante la automatización de
            respaldos y estandarización de consultas.
          </span>
        </p>

        <div className="grid grid-cols-1 gap-x-4 gap-y-3 text-sm md:grid-cols-[180px_1fr]">
          <h4 className="text-primary text-right font-bold">
            Administración de Base de Datos
          </h4>

          <ul className="text-secondary list-disc space-y-1 pl-5">
            <li>
              Gestión integral de instancias Oracle, SQL Server, MySQL, MariaDB
              y PostgreSQL.
            </li>
            <li>
              Responsable de usuarios, permisos, sinónimos, ejecución de
              respaldos y administración de objetos como tablespaces, datafiles,
              jobs y linked servers.
            </li>
          </ul>

          <Separator className="col-span-2" />

          <h4 className="text-primary text-right font-bold">
            Infraestructura y servidores.
          </h4>
          <ul className="text-secondary list-disc space-y-1 pl-5">
            <li>
              Configuración de servicios en Windows Server como IIS, clientes
              Oracle TNS, ODBC, logs.
            </li>
            <li>
              Administración de entornos Linux (Oracle Linux, Ubuntu, Solaris).
            </li>

            <li>
              Ejecución de comandos para monitoreo de almacenamiento, reinicio
              de DMZ y manejo de archivos.
            </li>
          </ul>

          <Separator className="col-span-2" />

          <h4 className="text-primary text-right font-bold">Despliegue.</h4>
          <ul className="text-secondary list-disc space-y-1 pl-5">
            <li>
              Liberación de objetos de base de datos como packages, stored
              procedures y despliegue de ramas a producción utilizando Git y
              PM2.
            </li>
          </ul>

          <Separator className="col-span-2" />

          <h4 className="text-primary text-right font-bold">
            Herramientas y ERP.
          </h4>
          <ul className="text-secondary list-disc space-y-1 pl-5">
            <li>
              Soporte a Oracle EBS en monitoreo de concurrentes, usuarios,
              workflows, órdenes de compra y codefix, así como coordinación con
              proveedores para incidencias en módulos SOA.
            </li>
            <li>
              Gestión de workspaces en Oracle APEX, reportes de rendimiento AWR,
              activaciones de licenciamientos SQL Server, Power BI, así como
              publicación de tableros.
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex space-x-1">
        <Badge variant={"outline"}>Oracle Database</Badge>
        <Badge variant={"outline"}>SQL Server</Badge>
        <Badge variant={"outline"}>Linux</Badge>
        <Badge variant={"outline"}>Windows Server</Badge>
        <Badge variant={"outline"}>MySQL</Badge>
        <Badge variant={"outline"}>PostgreSQL</Badge>
        <Badge variant={"outline"}>Oracle EBS</Badge>
      </CardFooter>
    </Card>
  );
};
