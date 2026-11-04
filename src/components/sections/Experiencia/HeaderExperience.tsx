import { Calendar, ExternalLink, Globe, MapPin } from "lucide-react";
import { experiences, type Experience } from "@/data";

interface Props {
  experience?: Experience;
}

export const HeaderExperience = ({ experience = experiences[0] }: Props) => {
  const { logo, logoAlt, role, company, period, location, website, summary } =
    experience;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-6">
        <div className="border-muted/20 relative shrink-0 rounded-2xl border bg-white p-3 shadow-sm">
          <img className="h-18 w-18 object-contain" src={logo} alt={logoAlt} />
        </div>

        <div className="space-y-1">
          <h3 className="text-foreground/80 text-lg font-bold md:text-2xl">
            {role}
          </h3>

          {/* Subtítulo en Lista con Íconos */}
          <ul className="text-muted-foreground flex flex-col gap-1 text-sm font-medium">
            <li className="flex items-center gap-2">
              <span className="font-bold tracking-wider">{company}.</span>
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="text-primary h-4 w-4" />
              <span className="text-xs">{period}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="text-primary h-4 w-4" />
              <span className="text-xs">{location}</span>
            </li>
            {website && (
              <li>
                <a
                  href={website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary flex items-center gap-2"
                >
                  <Globe className="text-primary h-4 w-4" />
                  <span className="text-xs">Sitio web.</span>
                  <ExternalLink className="h-3 w-3 opacity-50" />
                </a>
              </li>
            )}
          </ul>
        </div>
      </div>

      <div>
        {summary.map((text, idx) => (
          <p key={idx} className="font-Inter text-muted-foreground">
            {text}
          </p>
        ))}
      </div>
    </div>
  );
};
