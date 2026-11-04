import {
  AppRedesSociales,
  CopyButton,
  SectionWrapper,
  Title,
} from "@/components/index";
import { Mail } from "lucide-react";
import { contactData } from "@/data";

export const Contacto = ({ className }: { className?: string }) => {
  const { title, messages, email, copyAriaLabel } = contactData;

  return (
    <SectionWrapper id="contacto" className={className}>
      <Title text="Contacto." Icon={Mail} />

      <div className="flex flex-col items-center justify-center gap-8 py-8 text-center">
        <h3 className="text-foreground/80 text-4xl font-bold md:text-3xl">
          {title}
        </h3>
        <div className="text-muted-foreground">
          {messages.map((message, idx) => (
            <p key={idx}>{message}</p>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={`mailto:${email}`}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            {email}
          </a>
          <CopyButton
            value={email}
            variant="muted"
            ariaLabel={copyAriaLabel}
          />
        </div>
        <div className="grid gap-5">
          <AppRedesSociales
            className="flex flex-wrap justify-center gap-3 md:justify-start"
            importance="primary"
          />
        </div>
      </div>
    </SectionWrapper>
  );
};
