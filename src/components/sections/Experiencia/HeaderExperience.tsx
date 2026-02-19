import { Calendar, ExternalLink, Globe, MapPin } from "lucide-react";

export const HeaderExperience = () => {
  return (
    <div className="mt-4 mb-5 flex flex-col gap-5">
      <div className="flex items-center gap-6">
        <div className="border-muted/20 relative shrink-0 rounded-2xl border bg-white p-3 shadow-sm">
          <img
            className="h-18 w-18 object-contain"
            src="/experiencia/casasJaver.svg"
            alt="Logo de Casas Javer"
          />
        </div>

        <div className="space-y-1">
          <h3 className="text-foreground text-lg font-bold tracking-tight md:text-2xl">
            Database Administrator Intern.
          </h3>

          {/* Subtítulo en Lista con Íconos */}
          <ul className="text-muted-foreground flex flex-col gap-1 text-sm font-medium">
            <li className="flex items-center gap-2">
              <span className="font-bold">Casas Javer.</span>
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-primary h-4 w-4" />
              <span>Enero 2025 - Noviembre 2025.</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-primary h-4 w-4" />
              <span>Monterrey, N.L. (Híbrido).</span>
            </li>
            <li>
              <a
                href="https://www.javer.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-primary flex items-center gap-2"
              >
                <Globe className="text-primary h-4 w-4" />
                <span>Sitio web.</span>
                <ExternalLink className="h-3 w-3 opacity-50" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <p className="font-Inter text-md text-muted-foreground">
          Rol enfocado en el soporte y mantenimiento de infraestructura.
        </p>
        <p className="font-Inter text-md text-muted-foreground">
          Logré aumentar la eficiencia operativa mediante la automatización de
          respaldos clave y la estandarización de consultas complejas.
        </p>
      </div>
    </div>
  );
};
