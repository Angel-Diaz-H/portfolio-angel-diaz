import type { ComponentType } from "react";

interface Props {
  text?: string;
  className?: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
}

export const Title = ({ text, className, Icon }: Props) => {
  return (
    <div
      className={`text-primary font-Ubuntu mb-4 text-4xl font-semibold ${className}`}
    >
      {Icon && <Icon className="mr-2 inline-block h-8 w-8" />}
      {text}
    </div>
  );
};
