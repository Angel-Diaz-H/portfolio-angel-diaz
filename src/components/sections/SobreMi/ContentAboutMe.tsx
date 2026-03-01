import { Card, CardContent } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/CopyButton";
import { Laptop, Server, MapPin, Mail, GraduationCap } from "lucide-react";

export const ContentAboutMe = () => {
  return (
    <div className="mx-2 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
      {/* COLUMNA 1: Historia Profesional */}
      <div className="font-Inter text-muted-foreground space-y-3">
        <p className="text-foreground/80 font-bold">
          Desarrollador de software con bases en infraestructura.
        </p>

        <p>
          Soy un desarrollador enfocado en el backend y el ecosistema web, con
          bases en infraestructura.
        </p>

        <p>
          Inicié mi carrera profesional gestionando bases de datos Oracle y SQL
          Server en servidores Linux y Windows. Esta experiencia me enseñó que
          los sistemas deben ser{" "}
          <span className="text-foreground/80 font-semibold">eficientes</span>,{" "}
          <span className="text-foreground/80 font-semibold">seguros</span> y{" "}
          <span className="text-foreground/80 font-semibold">escalables</span>.
        </p>

        <p>
          Actualmente, traslado esta disciplina operativa al desarrollo
          fullstack, construyendo aplicaciones con el ecosistema{" "}
          <span className="text-primary font-semibold">JavaScript</span> como lo
          son <span className="text-primary font-semibold">TypeScript</span>,{" "}
          <span className="text-primary font-semibold">React</span> y{" "}
          <span className="text-primary font-semibold">Node.js</span>{" "}
        </p>

        <p>
          Mi objetivo es integrarme a un equipo colaborativo como{" "}
          <span className="text-foreground/80 font-semibold">
            desarrollador backend
          </span>{" "}
          o <span className="text-foreground/80 font-semibold">fullstack</span>.
          Busco aportar valor resolviendo problemas reales mientras consolido
          mis buenas prácticas y mi formación hacia la{" "}
          <span className="text-primary font-semibold">
            arquitectura de software
          </span>{" "}
          y <span className="text-primary font-semibold">DevOps</span>.
        </p>
      </div>

      {/* COLUMNA 2: Tarjeta de Datos Rápidos */}
      <div className="space-y-4">
        <Card borderAnimation>
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
                  Estudiante último año - Servicio social.
                </p>
                <p className="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
                  <span className="relative flex size-2">
                    <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                    <span className="bg-primary relative inline-flex size-2 rounded-full"></span>
                  </span>
                  Disponible medio tiempo (Full-time en Mayo 2026).
                </p>
              </div>
            </div>

            {/* Educación */}
            <div className="flex items-start gap-3">
              <div className="bg-primary/10 text-primary mt-1 rounded-full p-2">
                <GraduationCap size={18} />
              </div>
              <div>
                <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                  Educación.
                </p>
                <p className="text-foreground text-sm font-medium">
                  Lic. en Tecnologías de Información.
                </p>
                <p className="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
                  Facultad de Contaduría Pública y Administración, UANL.
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

            {/* Contacto */}
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
                    className="text-foreground hover:text-primary text-sm font-medium transition-colors"
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
