import { CheckCircle2 } from "lucide-react";

export const BadgesExperience = () => {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      <span className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium text-green-700 dark:bg-green-900/20 dark:text-green-400">
        <CheckCircle2 className="h-3.5 w-3.5" /> Automatización de Respaldos
      </span>
      <span className="inline-flex items-center gap-1.5 rounded-md bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
        <CheckCircle2 className="h-3.5 w-3.5" /> Soporte Oracle EBS
      </span>
    </div>
  );
};
