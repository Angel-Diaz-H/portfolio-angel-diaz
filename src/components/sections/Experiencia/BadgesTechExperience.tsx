import { BadgesTech } from "@/components/index";

const EXPERIENCE_ORDER = [3, 9, 10, 7, 12, 14, 5];

export const BadgesTechExperience = () => {
  return (
    <div className="border-muted/20 bg-muted/5 flex w-full flex-col items-center justify-center border-y">
      {/* <h4 className="text-muted-foreground mb-4 text-sm font-bold tracking-wider uppercase">
        Stack Tecnológico Aplicado
      </h4> */}
      <div className="flex w-full max-w-5xl justify-center">
        <BadgesTech order={EXPERIENCE_ORDER} variant="outline" />
      </div>
    </div>
  );
};
