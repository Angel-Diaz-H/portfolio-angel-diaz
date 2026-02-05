import { BotonRedSocial } from "@/components/index";
import { redesSociales } from "@/data/redSocial.data";

interface Props {
  className?: string;
  importance?: "primary" | "secondary";
}

export const AppRedesSociales = ({
  className,
  importance = "primary",
}: Props) => {
  return (
    <div className={`${className}`}>
      {redesSociales
        .filter((red) => red.importance === importance)
        .map((redSocial) => (
          <BotonRedSocial
            key={redSocial.nombre}
            nombre={redSocial.nombre}
            Icon={redSocial.Icon}
            href={redSocial.href}
            target={redSocial.target}
            rel={redSocial.rel}
            ariaLabel={redSocial.ariaLabel}
            importance={importance}
          />
        ))}
    </div>
  );
};
