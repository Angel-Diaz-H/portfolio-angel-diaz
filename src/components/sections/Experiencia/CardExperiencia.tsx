import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Globe } from "lucide-react";
import { AppGallery, BadgesTech } from "@/components/index";

const EXPERIENCE_ORDER = [3, 9, 7, 10, 12, 14, 5];

export const CardExperiencia = () => {
  return (
    <Card className="px-5 py-8">
      <CardHeader className="flex flex-row items-center gap-7">
        <a
          href="https://www.javer.com.mx/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-8 object-contain"
            src="/experiencia/Casas-Javer.webp"
            alt="Logo de Casas Javer"
          />
        </a>
        <div className="flex flex-col gap-2">
          <CardTitle>
            <p>Database Administrator Intern.</p>
          </CardTitle>
          <CardDescription>
            <p>Casas Javer | Enero 2025 - Noviembre 2025.</p>
            <p>Híbrido, Monterrey, Nuevo León.</p>
          </CardDescription>
        </div>
        <div className="ml-auto flex items-center gap-5">
          <Button
            variant={"outline"}
            className="hover:text-primary cursor-pointer rounded-full"
          >
            <a
              href="https://www.javer.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Globe className="h-10 shrink-0 object-cover" />
              Sitio web
            </a>
          </Button>

          <AppGallery />
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

        <div className="grid grid-cols-1 gap-x-4 gap-y-3 md:grid-cols-[180px_1fr]">
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

      <CardFooter>
        <BadgesTech order={EXPERIENCE_ORDER} variant="outline" />
      </CardFooter>
    </Card>
  );
};
