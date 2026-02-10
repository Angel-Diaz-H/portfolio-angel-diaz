import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Separator } from "@/components/ui/separator";
import { technologies } from "@/data/technologies.data";
import { Globe, Image } from "lucide-react";

const EXPERIENCE_ORDER = [3, 9, 7, 10, 12, 14, 5];

export const CardExperiencia = () => {
  return (
    <Card className="hover:border-primary">
      <CardHeader className="flex flex-row items-center gap-7">
        <img
          className="h-8 object-contain"
          src="/experiencia/Casas-Javer.webp"
          alt="Logo de Casas Javer"
        />
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
          <Button variant={"outline"} className="rounded-full">
            <a
              href="https://www.javer.com.mx/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary text-muted-foreground flex items-center justify-center gap-2"
            >
              <Globe className="h-10 object-cover" />
              Sitio web
            </a>
          </Button>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant={"outline"} className="rounded-full">
                <a className="hover:text-primary text-muted-foreground flex items-center justify-center gap-2">
                  <Image className="h-10 object-cover" />
                  Ver galería
                </a>
              </Button>
            </DialogTrigger>
            <DialogContent
              showCloseButton={false}
              className="flex h-auto w-auto max-w-none min-w-[55vw] items-center justify-center border-none bg-transparent p-0 shadow-none"
            >
              <DialogTitle className="hidden">galery</DialogTitle>
              <p className="bg-amber-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
                tempora quia alias doloremque officiis maxime debitis culpa sunt
                maiores aliquam unde, consectetur exercitationem eum, rem itaque
                vero repellendus? Libero, accusantium.
              </p>
            </DialogContent>
          </Dialog>
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

      <CardFooter className="flex flex-wrap gap-2">
        {EXPERIENCE_ORDER.map((id) => {
          const tec = technologies.find((t) => t.id === id);

          if (!tec) return null;

          return (
            <Badge
              key={tec.id}
              variant="outline"
              className="hover:bg-secondary/50 flex items-center gap-2 px-3 py-1 text-sm font-normal transition-colors"
            >
              <img
                src={tec.img}
                alt={`${tec.name} icon`}
                className="h-4 w-4 object-contain"
                loading="lazy"
              />
              <span>{tec.name}</span>
            </Badge>
          );
        })}
      </CardFooter>
    </Card>
  );
};
