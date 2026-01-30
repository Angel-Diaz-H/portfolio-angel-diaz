import { BotonRedSocial, GithubIcon, LinkedinIcon } from "@/components/index";
import { AppWindow, FileCode, Mail } from "lucide-react";

interface Props {
  className?: string;
}

export const AppRedesSociales = ({ className }: Props) => {
  return (
    <div className={`${className}`}>
      <BotonRedSocial
        nombre="Curriculum"
        Icon={FileCode}
        href="https://angel-diaz-h.github.io/CV-Tailwind-CSS/"
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Mi currículum vitae"
      />
      <BotonRedSocial
        nombre="Github"
        Icon={GithubIcon}
        href="https://github.com/Angel-Diaz-H"
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Mi perfil de GitHub"
      />
      <BotonRedSocial
        nombre="LinkedIn"
        sizeIcon="4"
        Icon={LinkedinIcon}
        href="https://www.linkedin.com/in/angel-diaz-hrn/"
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Mi perfil de LinkedIn"
      />
      <BotonRedSocial
        nombre="Mail"
        Icon={Mail}
        href="mailto:angeldiaz.hrn@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Mi correo electrónico"
      />
      <BotonRedSocial
        nombre="Portafolio"
        Icon={AppWindow}
        href="//! TODO: Agregar enlace al portafolio"
        target="_blank"
        rel="noopener noreferrer"
        ariaLabel="Mi portafolio"
      />
    </div>
  );
};
