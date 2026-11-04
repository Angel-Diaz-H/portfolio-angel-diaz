import { SectionWrapper, Title, TechList } from "@/components/index";
import { Cpu } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { techCategories } from "@/data";

export const Tecnologias = ({ className }: { className?: string }) => {
  return (
    <SectionWrapper id="tecnologias" className={`space-y-8 ${className}`}>
      <Title text="Tecnologías." Icon={Cpu} />

      <div className="mx-2 grid grid-cols-1 gap-3 md:grid-cols-3">
        {techCategories.map(({ id, title, typeTec, Icon }) => (
          <Card key={id} borderAnimation className="h-full">
            <CardContent className="space-y-5 px-6">
              <TechList
                title={title}
                type={typeTec}
                Icon={Icon}
                variant="card"
                className="border-none bg-transparent p-0"
              />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
};
