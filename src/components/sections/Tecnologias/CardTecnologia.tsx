interface Props {
  tec: {
    img: string;
    name: string;
  };
  classNameItem?: string;
}

export const CardTecnologia = ({ tec, classNameItem }: Props) => {
  return (
    <div
      className={`group hover:bg-muted/50 hover:border-muted-foreground/20 flex w-46 items-center gap-1 rounded-3xl px-2 transition-all ${classNameItem}`}
    >
      <div className="flex h-7 w-8 shrink-0 items-center justify-center rounded-md p-1 dark:bg-white/10">
        <img
          className="h-full w-full object-contain transition-transform group-hover:scale-105"
          src={tec.img}
          alt={tec.name}
        />
      </div>

      <span className="text-muted-foreground group-hover:text-foreground text-sm font-medium transition-colors">
        {tec.name}.
      </span>
    </div>
  );
};
