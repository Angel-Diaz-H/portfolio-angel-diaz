import { CardTecnologia } from "@/components/index";
import { technologies } from "@/data/technologies.data";

interface Props {
  typeTec: string;
  className?: string;
}

export const AppTecnologias = ({ typeTec, className }: Props) => {
  const filteredTechnologies = technologies.filter(
    (tec) => tec.type === typeTec,
  );

  return (
    <div className={`flex flex-wrap space-x-4 ${className}`}>
      {filteredTechnologies.map((tec) => (
        <CardTecnologia key={tec.name} tec={tec} />
      ))}
    </div>
  );
};
