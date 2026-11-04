import { CheckCircle2 } from "lucide-react";
import { experiences, type Experience } from "@/data";

interface Props {
  experience?: Experience;
}

export const BadgesExperience = ({ experience = experiences[0] }: Props) => {
  return (
    <div className="flex flex-wrap gap-3 pt-2">
      {experience.badges.map((badge, idx) => (
        <span
          key={idx}
          className="inline-flex items-center gap-1.5 rounded-md bg-green-50 px-2.5 py-1 text-xs font-medium tracking-wide text-sky-900/90 dark:bg-green-900/20 dark:text-blue-400"
        >
          <CheckCircle2 className="h-3.5 w-3.5" /> {badge}
        </span>
      ))}
    </div>
  );
};
