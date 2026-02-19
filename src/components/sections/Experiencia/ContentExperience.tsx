import {
  AppGallery,
  // BadgesTech,
  DetailsExperiences,
  HeaderExperience,
} from "@/components/index";
import { CheckCircle2, TerminalSquare } from "lucide-react";
// import { Card, CardContent } from "@/components/ui/card";
import { ItemsTech } from "../../shared/ItemsTech";
import { Card, CardContent } from "@/components/ui/card";

const EXPERIENCE_ORDER = [3, 9, 10, 7, 12, 14, 5];

export const ContentExperience = () => {
  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.9fr]">
      {/* COLUMNA IZQUIERDA: Header y Narrativa */}
      <div className="flex flex-col gap-2">
        <HeaderExperience />

        {/* NARRATIVA UNIFICADA (Aquí solucionamos la saturación)
            En lugar de 4 listas, usamos 2 párrafos bien redactados que cubren todo.
          */}
        <div className="space-y-4">
          <DetailsExperiences />
          {/* Pequeños highlights visuales si quieres resaltar algo específico */}
          <div className="flex flex-wrap gap-3 pt-2">
            <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400">
              <CheckCircle2 className="h-3.5 w-3.5" /> Automatización de
              Respaldos
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
              <CheckCircle2 className="h-3.5 w-3.5" /> Soporte Oracle EBS
            </span>
          </div>
        </div>
      </div>

      {/* COLUMNA DERECHA: Galería */}
      <div>
        <AppGallery />

        {/* <Card className="bg-background rounded-4xl border-none">
          <CardContent className="space-y-5 p-6">
            <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
              Tecnologías.
            </p>
            <BadgesTech order={EXPERIENCE_ORDER} variant="outline" />

          </CardContent>
        </Card> */}
        <Card className="bg-background rounded-4xl border-none">
          <CardContent>
            <ItemsTech
              Icon={TerminalSquare}
              title="Tecnologías."
              order={EXPERIENCE_ORDER}
              classNameItems="gap-0 grid-cols-2"
              classNameItem="py-1 m-0 border-0 "
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
