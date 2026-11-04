import { Card, CardContent } from "@/components/ui/card";
import { CopyButton } from "@/components/ui/CopyButton";
import { aboutData, type TextSegment } from "@/data";

export const ContentAboutMe = () => {
  const { storyHeadline, paragraphs, quickFacts } = aboutData;

  const renderSegment = (segment: TextSegment, index: number) => {
    if (segment.highlight === "primary") {
      return (
        <span key={index} className="text-primary font-semibold">
          {segment.text}
        </span>
      );
    }
    if (segment.highlight === "semi-bold") {
      return (
        <span key={index} className="text-foreground/80 font-semibold">
          {segment.text}
        </span>
      );
    }
    if (segment.highlight === "bold") {
      return (
        <span key={index} className="text-foreground/80 font-bold">
          {segment.text}
        </span>
      );
    }
    return <span key={index}>{segment.text}</span>;
  };

  return (
    <div className="mx-2 grid grid-cols-1 items-center gap-6 md:grid-cols-2">
      {/* COLUMNA 1: Historia Profesional */}
      <div className="font-Inter text-muted-foreground space-y-3">
        <p className="text-foreground/80 font-bold">{storyHeadline}</p>

        {paragraphs.map((paragraph, pIdx) => (
          <p key={pIdx}>
            {paragraph.segments.map((segment, sIdx) =>
              renderSegment(segment, sIdx),
            )}
          </p>
        ))}
      </div>

      {/* COLUMNA 2: Tarjeta de Datos Rápidos */}
      <div className="space-y-4">
        <Card borderAnimation>
          <CardContent className="space-y-5 p-6">
            {quickFacts.map(
              ({
                id,
                label,
                title,
                description,
                icon: Icon,
                badge,
                action,
              }) => {
                const isContact = id === "contact";

                return (
                  <div
                    key={id}
                    className={`flex ${isContact ? "items-center" : "items-start"} gap-3`}
                  >
                    <div
                      className={`bg-primary/10 text-primary ${isContact ? "" : "mt-1"} rounded-full p-2`}
                    >
                      <Icon size={18} />
                    </div>
                    <div>
                      <p className="text-muted-foreground text-xs font-bold tracking-wider uppercase">
                        {label}
                      </p>

                      {isContact ? (
                        <div className="flex items-center gap-2">
                          <a
                            href={`mailto:${title}`}
                            className="text-foreground hover:text-primary text-sm font-medium transition-colors"
                          >
                            {title}
                          </a>
                          {action && (
                            <CopyButton
                              value={action.value}
                              variant="muted"
                              ariaLabel={action.ariaLabel}
                            />
                          )}
                        </div>
                      ) : (
                        <>
                          <p className="text-foreground text-sm font-medium">
                            {title}
                          </p>
                          <p className="text-muted-foreground mt-1 flex items-center gap-2 text-xs">
                            {badge?.hasPulse && (
                              <span className="relative flex size-2">
                                <span className="bg-primary absolute inline-flex h-full w-full animate-ping rounded-full opacity-75"></span>
                                <span className="bg-primary relative inline-flex size-2 rounded-full"></span>
                              </span>
                            )}
                            {description}
                          </p>
                        </>
                      )}
                    </div>
                  </div>
                );
              },
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
