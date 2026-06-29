export const Orbes = () => {
  return (
    <div className="hidden md:block">
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] mask-[linear-gradient(to_bottom,white_20%,transparent_100%)] bg-size-[20px_20px]"></div>
      {/* 1. Inicia arriba hacia el centro y viaja a la izquierda. */}
      <div className="animate-orbe-1 xd:opacity-50 absolute -top-32 left-1/3 h-96 w-96 transform-gpu rounded-full bg-lime-100 opacity-10 blur-[128px] filter will-change-transform"></div>

      {/* 2. Esquina inferior izquierda. */}
      <div className="animate-orbe-2 absolute -bottom-32 -left-20 h-96 w-96 transform-gpu rounded-full bg-cyan-100 opacity-0 blur-[128px] filter will-change-transform md:opacity-50"></div>

      {/* 3. Esquina inferior derecha, detrás de la foto. */}
      <div className="animate-orbe-3 absolute right-0 -bottom-20 h-120 w-120 transform-gpu rounded-full bg-lime-100 opacity-10 blur-[128px] filter will-change-transform md:opacity-40"></div>
    </div>
  );
};
