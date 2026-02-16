import { CardCapacitacion } from "@/components/index";
import { certificates } from "@/data/certificates.data";

interface Props {
  className?: string;
}

export const AppCapacitaciones = ({ className }: Props) => {
  const sortedCertificates = [...certificates].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <div className={className}>
      {sortedCertificates.map((cert) => (
        <CardCapacitacion key={cert.id} cert={cert} />
      ))}
    </div>
  );
};
