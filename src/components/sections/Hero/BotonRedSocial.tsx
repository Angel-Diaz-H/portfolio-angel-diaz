import { Button } from "@/components/ui/button";
import type { ComponentType } from "react";

interface Props {
  nombre: string;
  Icon: ComponentType<React.SVGProps<SVGSVGElement>>;
  href: string;
  target: string;
  rel: string;
  ariaLabel: string;
  className?: string;
  sizeIcon?: string;
  importance?: "primary" | "secondary";
}

export const BotonRedSocial = ({
  nombre,
  href,
  target,
  rel,
  ariaLabel,
  Icon,
  className,
  sizeIcon = "4.5",
  importance = "primary",
}: Props) => {
  return (
    <Button
      variant={importance === "primary" ? "default" : "outline"}
      asChild
      className={`hover:border-ring hover:text-accent-secondary-foreground h-9 w-33 items-center justify-center rounded-full transition-colors ${className}`}
    >
      <a href={href} target={target} rel={rel} aria-label={ariaLabel}>
        <Icon className={`h-${sizeIcon}! w-${sizeIcon}! shrink-0`} />
        {nombre}
      </a>
    </Button>
  );
};
