import { ContentAboutMe } from "@/components/index";
import { SectionWrapper, Title } from "@/components/index"; // <--- Importas tu molde
import { User } from "lucide-react";

interface Props {
  className?: string;
}

export const SobreMi = ({ className }: Props) => {
  return (
    <SectionWrapper id="sobre-mi" className={`${className} gap-2`}>
      <div className="flex flex-col gap-2">
        <Title text="Sobre mí." Icon={User} />
        <ContentAboutMe />
      </div>
    </SectionWrapper>
  );
};
