import { Card, CardContent } from "@/components/ui/card";
import { ItemsTech } from "@/components/index";
import { TerminalSquare } from "lucide-react";

const EXPERIENCE_ORDER = [3, 9, 10, 7, 12, 14, 5];

export const ItemsTechExperience = () => {
  return (
    <Card className="bg-background w-full rounded-4xl border-none p-6">
      <CardContent className="p-0">
        <ItemsTech
          Icon={TerminalSquare}
          title="Tecnologías aprendidas."
          order={EXPERIENCE_ORDER}
          classNameItems="grid grid-cols-2 gap-y-0"
          classNameItem="py-1 m-0 border-0 "
        />
      </CardContent>
    </Card>
  );
};
