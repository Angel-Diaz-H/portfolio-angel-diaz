import { Card, CardContent } from "@/components/ui/card";
import { TechList } from "@/components/index";
import { TerminalSquare } from "lucide-react";

const EXPERIENCE_ORDER = [
  "Oracle Database",
  "SQL Server",
  "Windows Server",
  "Linux",
  "MySQL",
  "Maria DB",
  "PostgreSQL",
];

export const ItemsTechExperience = () => {
  return (
    <Card borderAnimation className="w-full">
      <CardContent className="px-6">
        <TechList
          title="Tecnologías aprendidas."
          Icon={TerminalSquare}
          variant="card"
          order={EXPERIENCE_ORDER}
          classNameItems="grid grid-cols-2 gap-y-0"
          classNameItem="py-1 m-0 border-0"
        />
      </CardContent>
    </Card>
  );
};
