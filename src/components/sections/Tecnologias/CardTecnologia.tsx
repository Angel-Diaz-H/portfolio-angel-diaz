interface Props {
  tec: {
    img: string;
    name: string;
  };
}

export const CardTecnologia = ({ tec }: Props) => {
  return (
    <div className="group hover:bg-muted/50 hover:border-muted-foreground/20 flex w-50 items-center gap-1.5 rounded-2xl px-4 transition-all">
      <div className="flex h-9.5 w-9.5 shrink-0 items-center justify-center rounded-md p-1.5 dark:bg-white/10">
        <img
          className="h-full w-full object-contain transition-transform group-hover:scale-105"
          src={tec.img}
          alt={tec.name}
        />
      </div>

      <span className="text-muted-foreground group-hover:text-foreground text-sm font-medium transition-colors">
        {tec.name}
      </span>
    </div>
  );
};
