import { Sparkles } from "@/components/index";
import { Orbes } from "@/components/index";

export const Background = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <Sparkles />
      <Orbes />
    </div>
  );
};
