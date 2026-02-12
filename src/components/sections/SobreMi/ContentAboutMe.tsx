import { Card, CardContent } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/CopyButton";
import { Laptop, Server, MapPin, Mail } from "lucide-react";

export const ContentAboutMe = () => {
  return (
    <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
      {/* COLUMNA 1: Historia Profesional (Directa y Técnica) */}
      <div className="text-md font-Inter text-muted-foreground space-y-4">
        <p className="text-foreground text-lg font-medium">
          Desarrollador de software con mentalidad de infraestructura.
        </p>

        <p>
          Inicié mi camino gestionando servidores Windows y Linux, junto a bases
          de datos Oracle y SQL Server. Esa experiencia me enseñó que el código
          no solo debe funcionar, sino que debe ser{" "}
          <span className="text-foreground font-medium">
            eficiente, seguro y escalable
          </span>
          .
        </p>

        <p>
          Actualmente, traslado esa disciplina operativa al desarrollo
          fullstack, construyendo aplicaciones modernas con el ecosistema{" "}
          <span className="text-primary font-semibold">JavaScript</span> (
          <span className="text-primary font-semibold">TypeScript</span>,{" "}
          <span className="text-primary font-semibold">React</span>,{" "}
          <span className="text-primary font-semibold">Node.js</span>) y{" "}
          <span className="text-primary font-semibold">Python</span>.
        </p>

        <p>
          Busco integrarme como{" "}
          <strong className="text-foreground">Desarrollador Junior</strong> o{" "}
          <strong className="text-foreground">Data Analyst</strong> en un equipo
          colaborativo, donde pueda aportar valor técnico inmediato mientras
          continúo mi formación hacia la arquitectura de software.
        </p>
      </div>

      <div className="space-y-4">
        <Card className="bg-background border-none">
          <CardContent className="space-y-5 p-6">
            {/* Estado Actual */}
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary mt-1 rounded-full p-2">
                <Laptop size={18} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                  Estado Actual.
                </p>
                <p className="text-foreground text-sm font-medium">
                  Estudiante - Servicio social.
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Disponible medio tiempo (Full-time a partir de Mayo 2026).
                </p>
              </div>
            </div>

            {/* Intereses / Enfoque */}
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary mt-1 rounded-full p-2">
                <Server size={18} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                  Enfoque Técnico.
                </p>
                <p className="text-foreground text-sm font-medium">
                  Backend, bases de datos, DevOps.
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Profundizando en React & Next.js.
                </p>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary mt-1 rounded-full p-2">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                  Ubicación.
                </p>
                <p className="text-foreground text-sm font-medium">
                  Monterrey, Nuevo León.
                </p>
                <p className="text-muted-foreground mt-1 text-xs">
                  Presencial | Híbrido | Remoto.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-primary/10 text-primary rounded-full p-2">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                  Contacto.
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href="mailto:angeldiaz.hrn@gmail.com"
                    className="hover:text-primary text-foreground text-sm font-medium transition-colors"
                  >
                    angeldiaz.hrn@gmail.com
                  </a>
                  <CopyButton
                    value="angeldiaz.hrn@gmail.com"
                    variant="muted"
                    ariaLabel={`Copiar angeldiaz.hrn@gmail.com al portapapeles`}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
