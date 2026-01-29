import { GithubIcon } from "@/components/index";
import { Button } from "@/components/ui/button";

interface Props {
  nombre: string;
  href: string;
  target: string;
  rel: string;
  ariaLabel: string;
}

export const BotonRedSocial = ({
  nombre,
  href,
  target,
  rel,
  ariaLabel,
}: Props) => {
  return (
    <Button
      variant="outline"
      asChild
      className="w-25 items-center justify-end rounded-full transition-colors hover:border-lime-500 hover:text-lime-600"
    >
      <a href={href} target={target} rel={rel} aria-label={ariaLabel}>
        <GithubIcon /> {nombre}
      </a>
    </Button>
  );
};
