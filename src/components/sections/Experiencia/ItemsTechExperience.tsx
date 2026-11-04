import { Card, CardContent } from "@/components/ui/card";
import { TechList } from "@/components/index";
import { TerminalSquare } from "lucide-react";
import { experiences, type Experience } from "@/data";

interface Props {
  experience?: Experience;
}

export const ItemsTechExperience = ({
  experience = experiences[0],
}: Props) => {
  return (
    <Card borderAnimation className="w-full">
      <CardContent className="px-6">
        <TechList
          title="Tecnologías aprendidas."
          Icon={TerminalSquare}
          variant="card"
          order={experience.technologies}
          classNameItems="grid grid-cols-2 gap-y-0"
          classNameItem="py-1 m-0 border-0"
        />
      </CardContent>
    </Card>
  );
};
