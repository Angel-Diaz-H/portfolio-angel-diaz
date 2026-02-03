interface Props {
  tec: {
    img: string;
    name: string;
  };
}

export const CardTecnologia = ({ tec }: Props) => {
  return (
    <div>
      <a href="https://www.google.com" target="_blank" rel="noreferrer">
        <div className="hover:border-primary hover:bg-primary/50 flex h-14 w-48 items-center justify-center gap-2 rounded-full border px-4 shadow-sm transition-transform hover:scale-105">
          <img
            className="h-8 w-8 object-contain"
            src={tec.img}
            alt={tec.name}
          />
          <p className="truncate font-semibold">{tec.name}</p>
        </div>
      </a>
    </div>
  );
};
