import { ItemsTech, SectionWrapper, Title } from "@/components/index";
import {
  Cpu,
  Database,
  LayoutTemplate,
  Rocket,
  Server,
  Sparkles,
  Wrench,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";

// 1. Extraemos la configuración a un arreglo
const techCategories = [
  {
    id: "frontend",
    title: "Frontend.",
    typeTec: "frontend",
    Icon: LayoutTemplate,
  },
  {
    id: "backend",
    title: "Backend.",
    typeTec: "backend",
    Icon: Server,
  },
  {
    id: "database",
    title: "Base de datos.",
    typeTec: "database",
    Icon: Database,
  },
  {
    id: "tools",
    title: "Herramientas.",
    typeTec: "tools",
    Icon: Wrench,
  },
  {
    id: "productivity",
    title: "Productividad.",
    typeTec: "productivity",
    Icon: Sparkles,
  },
  {
    id: "nextSteps",
    title: "Próximos pasos.",
    typeTec: "nextSteps",
    Icon: Rocket,
  },
] as const;

export const Tecnologias = ({ className }: { className?: string }) => {
  return (
    <SectionWrapper id="tecnologias" className={`space-y-8 ${className}`}>
      <Title text="Tecnologías." Icon={Cpu} />

      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {techCategories.map(({ id, title, typeTec, Icon }) => (
          <Card key={id} borderAnimation className="h-full">
            <CardContent className="space-y-5 px-6">
              <ItemsTech
                title={title}
                typeTec={typeTec}
                Icon={Icon}
                className="border-none bg-transparent p-0"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
