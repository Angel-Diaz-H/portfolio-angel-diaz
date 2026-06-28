import { Card, CardContent } from "@/components/ui/card";
import { ItemsTech } from "@/components/index";
import { TerminalSquare } from "lucide-react";

const EXPERIENCE_ORDER = [3, 9, 10, 7, 12, 14, 5];

/* 
Orden:
1. Oracle Database.
2. SQL Server.
3. Windows Server.
4. Linux.
5. MySQL.
6. Maria DB.
7. PostgreSQL.
*/

export const ItemsTechExperience = () => {
  return (
    <Card borderAnimation className="w-full">
      <CardContent className="px-6">
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
