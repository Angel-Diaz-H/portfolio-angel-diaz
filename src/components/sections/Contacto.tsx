import {
  AppRedesSociales,
  CopyButton,
  SectionWrapper,
  Title,
} from "@/components/index";
import { Mail } from "lucide-react";

export const Contacto = ({ className }: { className?: string }) => {
  return (
    <SectionWrapper id="contacto" className={className}>
      <Title text="Contacto." Icon={Mail} />

      <div className="flex flex-col items-center justify-center gap-8 py-8 text-center">
        <h3 className="text-4xl font-bold md:text-3xl">¡Conversemos!</h3>
        <div className="text-muted-foreground">
          <p>Estoy disponible para nuevas oportunidades.</p>
          <p>
            Si tienes un proyecto en mente o quieres conversar, mi bandeja de
            entrada está disponible.
          </p>
        </div>

        {/* Reutilizamos tus botones existentes pero centrados */}
        <div className="flex items-center gap-2">
          <a
            href="mailto:angeldiaz.hrn@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            angeldiaz.hrn@gmail.com
          </a>
          <CopyButton
            value="angeldiaz.hrn@gmail.com"
            variant="muted"
            ariaLabel={`Copiar angeldiaz.hrn@gmail.com al portapapeles`}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-4">
          <AppRedesSociales className="flex gap-4" importance="secondary" />
        </div>
      </div>
    </SectionWrapper>
  );
};
