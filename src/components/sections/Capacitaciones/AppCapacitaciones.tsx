import { CardCapacitacion } from "@/components/index";
import { certificates } from "@/data/certificates";

interface Props {
  className?: string;
}

export const AppCapacitaciones = ({ className }: Props) => {
  return (
    <div className={className}>
      {certificates.map((cert) => (
        <CardCapacitacion key={cert.id} cert={cert} />
      ))}
    </div>
  );
};
