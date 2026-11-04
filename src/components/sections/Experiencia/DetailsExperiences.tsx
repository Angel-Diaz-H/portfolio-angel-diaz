import { experiences, type Experience } from "@/data";

interface Props {
  experience?: Experience;
}

export const DetailsExperiences = ({
  experience = experiences[0],
}: Props) => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {experience.pillars.map(({ id, title, icon: Icon, items }) => (
        <div key={id} className="relative pl-4">
          <span className="from-primary/50 absolute top-1.5 left-0 h-full w-0.5 rounded-full bg-linear-to-b to-transparent"></span>
          <h4 className="text-foreground/80 my-1 flex items-center gap-3 text-sm font-semibold">
            <Icon className="text-primary" size={17} /> {title}
          </h4>
          <p className="text-muted-foreground font-Inter mx-8 text-sm">
            {items.join(" ")}
          </p>
        </div>
      ))}
    </div>
  );
};
